import type { FC } from "react";
import { PlusIcon } from "lucide-react";
import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import * as m from "motion/react-m";

const EXAMPLE_PROMPTS = [
  {
    id: "1",
    title: "Example Prompt I",
    description:
      "You are a helpful assistant focus on web3 and blockchain that can answer various questions.",
  },
  {
    id: "2",
    title: "Example Prompt II",
    description:
      "You are good at generating trading strategies for the crypto market and provide detailed analysis.",
  },
  {
    id: "3",
    title: "Example Prompt III",
    description:
      "You are professional user of Spade AI and can teach me how to use it step by step with examples.",
  },
];

export function PromptsContent() {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <div>
          <PromptsHeader />
          <PromptsDescription />
          <PromptsList />
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}

const PromptsHeader: FC = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-4 flex items-center justify-between"
    >
      <h1 className="text-xl font-bold">Archives</h1>
      <button className="flex items-center justify-center gap-2 cursor-pointer rounded-lg bg-primary p-2 text-xs font-medium text-primary-foreground hover:bg-primary/90">
        <PlusIcon className="size-4" />
        Create Prompt
      </button>
    </m.div>
  );
};

const PromptsDescription: FC = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="mb-4 rounded-xl border border-border bg-card py-4 px-8"
    >
      <h2 className="mb-1 text-base font-semibold">Your Prompts</h2>
      <p className="text-sm text-muted-foreground">
        Create and manage your custom prompts for AI interactions.
      </p>
    </m.div>
  );
};

const PromptsList: FC = () => {
  return (
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      {EXAMPLE_PROMPTS.map((prompt, index) => (
        <m.div
          key={prompt.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
          className="rounded-xl border border-border bg-card p-4 hover:border-primary/50 transition-colors"
        >
          <h3 className="mb-1.5 text-sm font-semibold">{prompt.title}</h3>
          <p className="text-xs text-muted-foreground">{prompt.description}</p>
        </m.div>
      ))}
    </div>
  );
};

