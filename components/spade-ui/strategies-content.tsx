import type { FC } from "react";
import { PlusIcon } from "lucide-react";
import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import * as m from "motion/react-m";

export function StrategiesContent() {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <div>
          <StrategiesHeader />
          <TradingStrategiesCard />
          <PerformanceCard />
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}

const StrategiesHeader: FC = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-4 flex items-center justify-between"
    >
      <h1 className="text-xl font-bold">Strategies</h1>
      <button className="flex items-center justify-center gap-2 cursor-pointer rounded-lg bg-primary p-2 text-xs font-medium text-primary-foreground hover:bg-primary/90">
        <PlusIcon className="size-4" />
        New Strategy
      </button>
    </m.div>
  );
};

const TradingStrategiesCard: FC = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="mb-4 rounded-xl border border-border bg-card py-4 px-8"
    >
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
    </m.div>
  );
};

const PerformanceCard: FC = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="rounded-xl border border-border bg-card py-4 px-8"
    >
      <h2 className="mb-1 text-base font-semibold">Performance</h2>
      <p className="text-sm text-muted-foreground">
        Track your strategies&apos; performance and analytics.
      </p>
    </m.div>
  );
};

