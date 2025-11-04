import type { FC } from "react";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import * as m from "motion/react-m";

export function TokensContent() {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <div className="flex flex-col gap-8">
          <AIAgentsSection />
          <AirdropSection />
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}

const AIAgentsSection: FC = () => {
  return (
    <div>
      <m.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-4 text-xl font-bold"
      >
        AI Agents
      </m.h1>
      <div className="space-y-4">
        <TokenBalanceCard />
        <HistoryCard />
      </div>
    </div>
  );
};

const TokenBalanceCard: FC = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="rounded-xl border border-border bg-card py-4 px-8"
    >
      <div className="flex justify-between">
        <div>
          <h2 className="mb-1 text-base font-semibold">Token Balance</h2>
          <p className="mb-3 text-xs text-muted-foreground">
            View and manage your token balance. Use AI agents will cost your
            tokens.
          </p>
        </div>
        <Button variant="outline" size="icon">
          <PlusIcon className="size-4" />
        </Button>
      </div>
      <div className="rounded-lg bg-muted py-3 px-6">
        <div className="font-bold">0 tokens</div>
        <p className="mt-1 text-xs text-muted-foreground">Available balance</p>
      </div>
    </m.div>
  );
};

const HistoryCard: FC = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="rounded-xl border border-border bg-card py-4 px-8"
    >
      <h2 className="mb-3 text-base font-semibold">History</h2>
      <p className="text-sm text-muted-foreground">
        No history yet. Start using AI agents to see your history.
      </p>
    </m.div>
  );
};

const AirdropSection: FC = () => {
  return (
    <div>
      <m.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="mb-4 text-xl font-bold"
      >
        Airdrop
      </m.h1>
      <div className="space-y-4">
        <TokenAllowanceCard />
      </div>
    </div>
  );
};

const TokenAllowanceCard: FC = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
      className="rounded-xl border border-border bg-card py-4 px-8"
    >
      <h2 className="mb-1 text-base font-semibold">Token Allowance</h2>
      <p className="mb-3 text-xs text-muted-foreground">
        Receive a future airdrop of $SP tokens. Start using AI agents to boost
        your token allowance.
      </p>
      <div className="rounded-lg bg-muted py-3 px-6">
        <div className="font-bold">0 $SP</div>
        <p className="mt-1 text-xs text-muted-foreground">Current allowance</p>
      </div>
    </m.div>
  );
};

