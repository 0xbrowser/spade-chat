import * as React from "react";
import { User } from "lucide-react";
import {
  Sidebar,
  SidebarAccount,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarLogo,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { ThreadList } from "@/components/spade-ui/thread-list";
import { MainNavigation } from "@/components/spade-ui/main-navigation";
import { cn } from "@/lib/utils";

function SidebarContentInner() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <SidebarContent className="aui-sidebar-content px-2">
      {/* Main section */}
      <div className="mb-4">
        <h3 className={cn(
          "mb-2 px-2 text-xs font-medium text-muted-foreground transition-opacity",
          isCollapsed && "opacity-0"
        )}>
          Main
        </h3>
        <MainNavigation />
      </div>

      {/* Chats section */}
      <div>
        <h3 className={cn(
          "mb-2 px-2 text-xs font-medium text-muted-foreground transition-opacity",
          isCollapsed && "opacity-0"
        )}>
          Chats
        </h3>
        <ThreadList />
      </div>
    </SidebarContent>
  );
}

export function ThreadListSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="aui-sidebar-header mb-2">
        <div className="aui-sidebar-header-content flex items-center justify-between">
          <SidebarLogo />
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContentInner />
      <SidebarRail />
      <SidebarFooter className="aui-sidebar-footer">
        <SidebarAccount icon={User} title="Account" status="online" />
      </SidebarFooter>
    </Sidebar>
  );
}
