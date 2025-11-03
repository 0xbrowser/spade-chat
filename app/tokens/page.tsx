"use client";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import {
  useChatRuntime,
  AssistantChatTransport,
} from "@assistant-ui/react-ai-sdk";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ThreadListSidebar } from "@/components/spade-ui/threadlist-sidebar";
import { PlusIcon, Spade } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TokensPage() {
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
              <div className="flex h-10 w-10 items-center justify-center md:hidden">
                <Spade className="size-4" />
              </div>
              <SidebarTrigger className="ml-auto md:hidden" />
            </header>
            <div className="flex-1 overflow-auto">
              <div className="p-6">
                <div className="mx-auto max-w-4xl">
                  <div className="flex flex-col gap-8">
                    <div>
                      <h1 className="mb-4 text-xl font-bold">AI Agents</h1>
                      <div className="space-y-4">
                        <div className="rounded-xl border border-border bg-card py-4 px-8">
                          <div className="flex justify-between">
                            <div>
                              <h2 className="mb-1 text-base font-semibold">
                                Token Balance
                              </h2>
                              <p className="mb-3 text-xs text-muted-foreground">
                                View and manage your token balance. Use AI agents will cost your tokens.
                              </p>
                            </div>
                            <Button variant="outline" size="icon">
                              <PlusIcon className="size-4" />
                            </Button>
                          </div>
                          <div className="rounded-lg bg-muted py-3 px-6">
                            <div className="font-bold">0 tokens</div>
                            <p className="mt-1 text-xs text-muted-foreground">
                              Available balance
                            </p>
                          </div>
                        </div>
                        <div className="rounded-xl border border-border bg-card py-4 px-8">
                          <h2 className="mb-3 text-base font-semibold">
                            History
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            No history yet. Start using AI agents to see your
                            history.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h1 className="mb-4 text-xl font-bold">Airdrop</h1>
                      <div className="space-y-4">
                        <div className="rounded-xl border border-border bg-card py-4 px-8">
                          <h2 className="mb-1 text-base font-semibold">
                            Token Allowance
                          </h2>
                          <p className="mb-3 text-xs text-muted-foreground">
                            Receive a future airdrop of $SP tokens. Start using AI agents to boost your token
                            allowance.
                          </p>
                          <div className="rounded-lg bg-muted py-3 px-6">
                            <div className="font-bold">0 $SP</div>
                            <p className="mt-1 text-xs text-muted-foreground">
                              Current allowance
                            </p>
                          </div>
                        </div>
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
