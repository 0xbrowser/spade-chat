import type { FC } from "react";
import {
  ThreadListItemPrimitive,
  ThreadListPrimitive,
  useAssistantState,
} from "@assistant-ui/react";
import { PlusIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export const ThreadList: FC = () => {
  return (
    <ThreadListPrimitive.Root className="aui-root aui-thread-list-root flex flex-col items-stretch gap-1.5">
      <ThreadListNew />
      <ThreadListItems />
    </ThreadListPrimitive.Root>
  );
};

const ThreadListNew: FC = () => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const pathname = usePathname();
  const router = useRouter();
  const isActive = pathname === "/";

  const handleNewChat = () => {
    if (pathname !== "/") {
      router.push("/");
    }
  };

  return (
    <ThreadListPrimitive.New asChild>
      <Button
        data-active={isActive}
        onClick={handleNewChat}
        className={cn(
          "aui-thread-list-new flex items-center rounded-lg text-start hover:bg-muted justify-start gap-1 p-3",
          isActive && "bg-muted font-medium"
        )}
        variant="ghost"
        size={isCollapsed ? "icon" : "lg"}
      >
        <PlusIcon className="mr-1" />
        {!isCollapsed && "New chat"}
      </Button>
    </ThreadListPrimitive.New>
  );
};

const ThreadListItems: FC = () => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const isLoading = useAssistantState(({ threads }) => threads.isLoading);

  if (isCollapsed) {
    return null;
  }

  if (isLoading) {
    return <ThreadListSkeleton />;
  }

  return <ThreadListPrimitive.Items components={{ ThreadListItem }} />;
};

const ThreadListSkeleton: FC = () => {
  return (
    <>
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          role="status"
          aria-label="Loading threads"
          aria-live="polite"
          className="aui-thread-list-skeleton-wrapper flex items-center gap-2 rounded-md px-3 py-2"
        >
          <Skeleton className="aui-thread-list-skeleton h-[22px] flex-grow" />
        </div>
      ))}
    </>
  );
};

const ThreadListItem: FC = () => {
  return (
    <ThreadListItemPrimitive.Root className="aui-thread-list-item flex items-center gap-2 rounded-lg transition-all hover:bg-muted focus-visible:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-active:bg-muted overflow-hidden cursor-pointer">
      <ThreadListItemPrimitive.Trigger className="aui-thread-list-item-trigger flex-grow px-3 py-2 text-start overflow-hidden cursor-pointer">
        <ThreadListItemTitle />
      </ThreadListItemPrimitive.Trigger>
    </ThreadListItemPrimitive.Root>
  );
};

const ThreadListItemTitle: FC = () => {
  return (
    <span className="aui-thread-list-item-title text-sm truncate block">
      <ThreadListItemPrimitive.Title fallback="New chat" />
    </span>
  );
};
