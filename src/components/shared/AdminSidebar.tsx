import logo from "@/assets/images/profile.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  ClipboardList,
  CreditCard,
  FileText,
  LayoutDashboard,
  List,
  Mail,
  MessageSquare,
  Package,
  Plus,
  Repeat,
  Settings,
  User,
  Users,
} from "lucide-react";

import { type FC } from "react";
import { NavLink } from "react-router-dom";

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  path: string;
  section: string;
  notification?: boolean;
}

interface SidebarProps {
  sidebarOpen: boolean;
  onLinkClick?: () => void;
}

export const sidebarItems: SidebarItem[] = [
  // Main
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/dashboard",
    section: "Main",
  },
  // Tasks
  {
    icon: Plus,
    label: "Create A Task",
    path: "/create-task",
    section: "Tasks",
  },
  {
    icon: Repeat,
    label: "Follow-Ups",
    path: "/follow-ups",
    section: "Tasks",
  },
  // Packages & Bookings
  {
    icon: Package,
    label: "Packages",
    path: "/packages",
    section: "Packages & Booking",
  },
  {
    icon: Calendar,
    label: "Public Booking",
    path: "/public-booking",
    section: "Packages & Booking",
  },
  {
    icon: ClipboardList,
    label: "View Appointments",
    path: "/appointments",
    section: "Packages & Booking",
  },
  // Settings
  {
    icon: Settings,
    label: "Settings",
    path: "/settings",
    section: "Settings",
  },
  {
    icon: MessageSquare,
    label: "Message Template",
    path: "/message-template",
    section: "Settings",
  },
  {
    icon: Users,
    label: "Team Access",
    path: "/team-access",
    section: "Settings",
  },
  {
    icon: CreditCard,
    label: "Plans",
    path: "/plans",
    section: "Settings",
  },
  // Contacts & Users
  {
    icon: Mail,
    label: "Contacts",
    path: "/contacts",
    section: "User Management",
  },
  {
    icon: User,
    label: "Users",
    path: "/users",
    section: "User Management",
  },
  // Blogs
  {
    icon: List,
    label: "Blog Categories",
    path: "/blog-categories",
    section: "Content & Resources",
  },
  {
    icon: FileText,
    label: "Blogs",
    path: "/blogs",
    section: "Content & Resources",
  },
  // Profile
  {
    icon: User,
    label: "Profile Settings",
    path: "/profile-settings",
    section: "Profile",
  },
];

const AdminSidebar: FC<SidebarProps> = ({ sidebarOpen, onLinkClick }) => {
  const groupedItems = sidebarItems.reduce(
    (acc, item) => {
      if (!acc[item.section]) acc[item.section] = [];
      acc[item.section].push(item);
      return acc;
    },
    {} as Record<string, SidebarItem[]>,
  );

  return (
    <aside
      className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-40 w-[280px] transition-transform duration-300 ease-in-out md:translate-x-0 md:static bg-white lg:rounded-[10px] px-5 py-6 flex flex-col h-full sidebar-scroll`}
    >
      <div className="flex items-center gap-3 bg-white border border-border rounded-[5px] px-3 py-2 mb-5">
        <Avatar className="h-8 w-8">
          <AvatarImage src={logo} />
          <AvatarFallback>ADMIN</AvatarFallback>
        </Avatar>
        <div className="text-left ">
          <div className="text-sm text-text">admin@admin.com</div>
          <div className="text-base text-text">super-admin</div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {Object.entries(groupedItems).map(([section, items]) => (
          <div key={section} className="mb-2">
            <p className="mb-2 font-semibold">{section}</p>
            <div className="space-y-1">
              {items.map((item) => (
                <NavLink
                  onClick={onLinkClick}
                  key={item.label}
                  to={item.path}
                  end={item.path === "/dashboard"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 w-full h-10 px-2 rounded ${
                      isActive
                        ? "text-text bg-bg  font-semibold"
                        : "hover:bg-bg"
                    }`
                  }
                >
                  <item.icon className="h-4 w-4 text-text" />
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default AdminSidebar;
