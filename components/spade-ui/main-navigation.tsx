import type { FC } from "react";
import { LayoutDashboard, Coins, FileBox, TrendingUpDown } from "lucide-react";
import { useSidebar, SidebarNavButton } from "@/components/ui/sidebar";

export const MainNavigation: FC = () => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <div className="flex w-full flex-col justify-center gap-1">
      <SidebarNavButton>
        <LayoutDashboard className="size-4 shrink-0" />
        {!isCollapsed && <span>Dashboard</span>}
      </SidebarNavButton>
      <SidebarNavButton>
        <Coins className="size-4 shrink-0" />
        {!isCollapsed && <span>Tokens</span>}
      </SidebarNavButton>
      <SidebarNavButton>
        <FileBox className="size-4 shrink-0" />
        {!isCollapsed && <span>Prompts</span>}
      </SidebarNavButton>
      <SidebarNavButton>
        <TrendingUpDown className="size-4 shrink-0" />
        {!isCollapsed && <span>Strategies</span>}
      </SidebarNavButton>
    </div>
  );
};
