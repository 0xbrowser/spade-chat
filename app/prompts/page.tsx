"use client";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime, AssistantChatTransport } from "@assistant-ui/react-ai-sdk";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThreadListSidebar } from "@/components/spade-ui/threadlist-sidebar";
import { PlusIcon, Spade } from "lucide-react";

export default function PromptsPage() {
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
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <div className="md:hidden h-10 w-10 flex items-center justify-center">
              <Spade className="size-4" />
            </div>
            <SidebarTrigger className="md:hidden ml-auto" />
          </header>
          <div className="flex-1 overflow-auto">
            <div className="p-6">
              <div className="mx-auto max-w-4xl">
                <div className="mb-4 flex items-center justify-between">
                  <h1 className="text-xl font-bold">Archives</h1>
                  <button className="flex items-center justify-center gap-2 cursor-pointer rounded-lg bg-primary p-2 text-xs font-medium text-primary-foreground hover:bg-primary/90">
                    <PlusIcon className="size-4" />
                    Create Prompt
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="rounded-xl border border-border bg-card p-4">
                    <h2 className="mb-3 text-base font-semibold">Your Prompts</h2>
                    <p className="text-sm text-muted-foreground">
                      Create and manage your custom prompts for AI interactions.
                    </p>
                  </div>
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-xl border border-border bg-card p-3 hover:border-primary/50 transition-colors">
                      <h3 className="mb-1.5 text-sm font-semibold">Example Prompt</h3>
                      <p className="text-xs text-muted-foreground">
                        You are a helpful assistant focus on web3 and blockchain that can answer questions and help with tasks.
                      </p>
                    </div>
                    <div className="rounded-xl border border-border bg-card p-3 hover:border-primary/50 transition-colors">
                      <h3 className="mb-1.5 text-sm font-semibold">Example Prompt</h3>
                      <p className="text-xs text-muted-foreground">
                        You are good at generating trading strategies for the crypto market and provide detailed analysis.
                      </p>
                    </div>
                    <div className="rounded-xl border border-border bg-card p-3 hover:border-primary/50 transition-colors">
                      <h3 className="mb-1.5 text-sm font-semibold">Example Prompt</h3>
                      <p className="text-xs text-muted-foreground">
                        You are professional user of Spade AI and can teach me how to use it step by step with examples.
                      </p>
                    </div>
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

