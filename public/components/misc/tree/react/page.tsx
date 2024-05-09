import * as React from 'react';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { Button } from "@/components/ui/button";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../../../../../styles/components/ui/dropdown-menu";
import DropdownMenuIcon from '@/components/ui/dropdownwithicon';
export function TreeViewDemo() {
  const [treeData, setTreeData] = React.useState([]);
  const [contextMenu, setContextMenu] = React.useState(null);
  React.useEffect(() => {
    async function fetchTreeData() {
      // Replace with your API call
      const response = await fetch('your-api-endpoint');
      const data = await response.json();
      setTreeData(data);
    }
    fetchTreeData();
  }, []);

  const renderTreeItems = (items) => {
    return items.map((item) => (
      <TreeItem key={item.id} itemId={item.id} label={item.label}>
        {item.children && renderTreeItems(item.children)}
      </TreeItem>
    ));
  };
  // 处理右键点击事件
const handleContextMenu = (event) => {
  event.preventDefault(); // 阻止默认的上下文菜单
  setContextMenu({
    mouseX: event.clientX - 2,
    mouseY: event.clientY - 4,
  });
};

// 关闭菜单
const handleClose = () => {
  setContextMenu(null);
};

  return (
    <>
    <SimpleTreeView
      aria-label="file system navigator"
      sx={{ height: 200, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
      onContextMenu={handleContextMenu}
    >
      {renderTreeItems(treeData)}
      <TreeItem itemId="1" label="Applications">
        <TreeItem itemId="2" label="Calendar" />
      </TreeItem>
      <TreeItem itemId="5" label="Documents">
        <TreeItem itemId="10" label="OSS" />
        <TreeItem itemId="6" label="MUI">
          <TreeItem itemId="8" label="index.js" />
        </TreeItem>
      </TreeItem>
    </SimpleTreeView>
  
    {contextMenu !== null && (
      <DropdownMenu open={contextMenu !== null} onOpenChange={handleClose}>
        <DropdownMenuPortal>
          <DropdownMenuContent
            style={{
              position: 'fixed',
              top: `${contextMenu.mouseY}px`,
              left: `${contextMenu.mouseX}px`,
            }}
            className="w-56"
          >
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                  <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                      <Keyboard className="mr-2 h-4 w-4" />
                      <span>Keyboard shortcuts</span>
                      <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                  </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                  <DropdownMenuItem>
                      <Users className="mr-2 h-4 w-4" />
                      <span>Team</span>
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                          <UserPlus className="mr-2 h-4 w-4" />
                          <span>Invite users</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                              <DropdownMenuItem>
                                  <Mail className="mr-2 h-4 w-4" />
                                  <span>Email</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                  <MessageSquare className="mr-2 h-4 w-4" />
                                  <span>Message</span>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                  <PlusCircle className="mr-2 h-4 w-4" />
                                  <span>More...</span>
                              </DropdownMenuItem>
                          </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuItem>
                      <Plus className="mr-2 h-4 w-4" />
                      <span>New Team</span>
                      <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                  </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                  <Github className="mr-2 h-4 w-4" />
                  <span>GitHub</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                  <LifeBuoy className="mr-2 h-4 w-4" />
                  <span>Support</span>
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                  <Cloud className="mr-2 h-4 w-4" />
                  <span>API</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    )}
  </>
  
  );
};

export default TreeViewDemo;