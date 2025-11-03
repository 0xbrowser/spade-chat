import type { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Coins, FileBox, TrendingUpDown } from "lucide-react";
import { useSidebar, SidebarNavButton } from "@/components/ui/sidebar";

export const MainNavigation: FC = () => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const pathname = usePathname();

  return (
    <div className="flex w-full flex-col justify-center gap-1">
      <SidebarNavButton asChild isActive={pathname === "/dashboard"}>
        <Link href="/dashboard">
          <LayoutDashboard className="size-4 shrink-0" />
          {!isCollapsed && <span>Dashboard</span>}
        </Link>
      </SidebarNavButton>
      <SidebarNavButton asChild isActive={pathname === "/tokens"}>
        <Link href="/tokens">
          <Coins className="size-4 shrink-0" />
          {!isCollapsed && <span>Tokens</span>}
        </Link>
      </SidebarNavButton>
      <SidebarNavButton asChild isActive={pathname === "/prompts"}>
        <Link href="/prompts">
          <FileBox className="size-4 shrink-0" />
          {!isCollapsed && <span>Prompts</span>}
        </Link>
      </SidebarNavButton>
      <SidebarNavButton asChild isActive={pathname === "/strategies"}>
        <Link href="/strategies">
          <TrendingUpDown className="size-4 shrink-0" />
          {!isCollapsed && <span>Strategies</span>}
        </Link>
      </SidebarNavButton>
    </div>
  );
};
