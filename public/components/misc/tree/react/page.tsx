import * as React from 'react';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { Button } from "@/components/ui/button";
import {
  Cloud,CreditCard,Github,Keyboard,LifeBuoy,LogOut,Mail, MessageSquare,Plus,PlusCircle,Settings,
  User, UserPlus,Users, Ellipsis, AppWindow, CalendarDays, ScrollText,LocateFixed,
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

export function TreeViewDemo() {
  const [treeData, setTreeData] = React.useState([]);
  const [contextMenu, setContextMenu] = React.useState(null);
  const [hoveredItemId, setHoveredItemId] = React.useState(null);
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

const handleContextMenu = (event) => {
  event.preventDefault(); 
  setContextMenu({
    mouseX: event.clientX - 2,
    mouseY: event.clientY - 4,
  });
};

const handleClose = () => {
  setContextMenu(null);
};

const renderLabel = (label, itemId) => {
  let Icon;
    switch (itemId) {
      case "1":
        Icon = AppWindow;
        break;
      case "2":
        Icon = CalendarDays;
        break;
      case "5":
        Icon = ScrollText;
        break;
      case "10":
        Icon = LocateFixed;
        break;
      case "6":
        Icon = Keyboard;
        break;
      case "8":
        Icon = Github;
        break;
      default:
        Icon = AppWindow; // Default icon
    }

    return (
      <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // This will push the content to the ends
        width: '100%'
      }}
      onMouseEnter={() => setHoveredItemId(itemId)}
      onMouseLeave={() => setHoveredItemId(null)}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Icon style={{ marginRight: '8px' }} size={16} />
        {label}
      </div>
      {hoveredItemId === itemId && (
        <Button
          onClick={(event) => {
            event.stopPropagation();
            handleContextMenu(event);
          }}
          variant="secondary"
          style={{ minWidth: 'initial', padding: '4px 6px' }}
          size="small"
        >
          <Ellipsis size={16} />
        </Button>
      )}
    </div>
    );
  };
  



  return (
    <>
   <SimpleTreeView
      aria-label="file system navigator"
      sx={{ height: 200, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
      onContextMenu={handleContextMenu}
    >
      <TreeItem itemId="1" label={renderLabel("Applications", "1")}>
        <TreeItem itemId="2" label={renderLabel("Calendar", "2")} />
      </TreeItem>
      <TreeItem itemId="5" label={renderLabel("Documents", "5")}>
        <TreeItem itemId="10" label={renderLabel("OSS", "10")} />
        <TreeItem itemId="6" label={renderLabel("MUI", "6")}>
          <TreeItem itemId="8" label={renderLabel("index.js", "8")} />
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