"use client";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime, AssistantChatTransport } from "@assistant-ui/react-ai-sdk";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThreadListSidebar } from "@/components/spade-ui/threadlist-sidebar";
import { PlusIcon, Spade } from "lucide-react";

export default function StrategiesPage() {
  const runtime = useChatRuntime({
    transport: new AssistantChatTransport({
      api: "/api/chat",
    }),
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <SidebarProvider>
        <div className="flex h-dvh w-full pr-0.5">
          <ThreadListSidebar />
          <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b p-4">
            <div className="md:hidden h-10 w-10 flex items-center justify-center">
              <Spade className="size-4" />
            </div>
            <SidebarTrigger className="md:hidden ml-auto" />
          </header>
          <div className="flex-1 overflow-auto">
            <div className="p-6">
              <div className="mx-auto max-w-4xl">
                <div className="mb-4 flex items-center justify-between">
                  <h1 className="text-xl font-bold">Strategies</h1>
                  <button className="flex items-center justify-center gap-2 cursor-pointer rounded-lg bg-primary p-2 text-xs font-medium text-primary-foreground hover:bg-primary/90">
                    <PlusIcon className="size-4" />
                    New Strategy
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="rounded-xl border border-border bg-card py-4 px-8">
                    <h2 className="mb-1 text-base font-semibold">Trading Strategies</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      Create, test, and deploy your trading strategies.
                    </p>
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="rounded-lg bg-muted py-3 px-6">
                        <div className="mb-1.5 flex items-center justify-between">
                          <h3 className="text-sm font-semibold">Active Strategies</h3>
                          <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-500">
                            0
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Currently running strategies
                        </p>
                      </div>
                      <div className="rounded-lg bg-muted py-3 px-6">
                        <div className="mb-1.5 flex items-center justify-between">
                          <h3 className="text-sm font-semibold">Draft Strategies</h3>
                          <span className="rounded-full bg-yellow-500/10 px-2 py-0.5 text-xs font-medium text-yellow-500">
                            0
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Strategies in development
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-border bg-card py-4 px-8">
                    <h2 className="mb-1 text-base font-semibold">Performance</h2>
                    <p className="text-sm text-muted-foreground">
                      Track your strategies&apos; performance and analytics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </AssistantRuntimeProvider>
  );
}

