import CommonSelect from "@/components/shared/CommonSelect";
import CommonSpace from "@/components/shared/CommonSpace";
import DashboardSearch from "@/components/shared/DashboardSearch";
import DashboardTopSection from "@/components/shared/DashboardTopSection";
import SectionHeader from "@/components/shared/SectionHeader";
import StatCards from "@/components/shared/StatCards";
import DashBoardCard, {
  type DashboardType,
} from "@/features/dashboard/DashBoardCard";
import {
  AlertCircle,
  AlertTriangle,
  CalendarClock,
  CheckCircle,
  CheckCircle2,
  Clock,
  PhoneCall,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

const statsData = [
  {
    id: "due-today",
    label: "Due Today",
    value: 5,
    icon: <CheckCircle2 className="h-6 w-6" />,
    iconBg: "bg-today-accent",
    iconColor: "text-white",
    trend: { value: 12, isPositive: true },
  },
  {
    id: "follow-up",
    label: "Follow Up",
    value: 8,
    icon: <Clock className="h-6 w-6" />,
    iconBg: "bg-followup-accent",
    iconColor: "text-white",
    trend: { value: 8, isPositive: true },
  },
  {
    id: "late",
    label: "Late",
    value: 2,
    icon: <AlertCircle className="h-6 w-6" />,
    iconBg: "bg-late-accent",
    iconColor: "text-white",
    trend: { value: 5, isPositive: false },
  },
  {
    id: "upcoming",
    label: "Upcoming",
    value: 12,
    icon: <TrendingUp className="h-6 w-6" />,
    iconBg: "bg-upcoming-accent",
    iconColor: "text-white",
    trend: { value: 3, isPositive: true },
  },
];

export const activities: DashboardType[] = [
  {
    id: "1",
    type: "Due Today",
    title: "Client Project Discussion",
    description: [
      "Review current project progress",
      "Discuss pending development tasks",
      "Confirm milestone deadlines",
      "Collect client feedback",
      "Plan next sprint activities",
    ],
    timestamp: new Date(),
    icon: <CalendarClock size={18} />,

    invitees: "john@example.com",
    taskType: "Regular",
    videoPlatform: "Google Meet",
    endDate: new Date().toISOString().slice(0, 16),
    resources: "https://example.com/resource",
    tags: "urgent, client",
    repeat: "Daily",
    reminder: "5min",
  },
  {
    id: "2",
    type: "late",
    title: "Send Invoice to Client",
    description: [
      "Prepare February invoice",
      "Attach project work summary",
      "Verify billing information",
      "Send invoice via email",
    ],
    timestamp: new Date(),
    icon: <AlertTriangle size={18} />,
    invitees: "john@example.com",
    taskType: "Regular",
    videoPlatform: "Google Meet",
    endDate: new Date().toISOString().slice(0, 16),
    resources: "https://example.com/resource",
    tags: "urgent, client",
    repeat: "Daily",
    reminder: "5min",
  },
  {
    id: "3",
    type: "Upcoming",
    title: "Sprint Planning Meeting",
    description: [
      "Review product backlog items",
      "Estimate upcoming tasks",
      "Assign work to developers",
      "Discuss technical blockers",
    ],
    timestamp: new Date(),
    icon: <Clock size={18} />,
    invitees: "john@example.com",
    taskType: "Regular",
    videoPlatform: "Google Meet",
    endDate: new Date().toISOString().slice(0, 16),
    resources: "https://example.com/resource",
    tags: "urgent, client",
    repeat: "Daily",
    reminder: "5min",
  },
  {
    id: "4",
    type: "Follow Up",
    title: "Marketing Campaign Review",
    description: [
      "Analyze campaign performance",
      "Review conversion metrics",
      "Discuss improvement strategies",
      "Prepare monthly report",
    ],
    timestamp: new Date(),
    icon: <PhoneCall size={18} />,
    invitees: "john@example.com",
    taskType: "Regular",
    videoPlatform: "Google Meet",
    endDate: new Date().toISOString().slice(0, 16),
    resources: "https://example.com/resource",
    tags: "urgent, client",
    repeat: "Daily",
    reminder: "5min",
  },
  {
    id: "5",
    type: "Completed",
    title: "Database Maintenance",
    description: [
      "Run complete database backup",
      "Remove unused records",
      "Optimize database indexes",
      "Verify backup integrity",
    ],
    timestamp: new Date(),
    icon: <CheckCircle size={18} />,
    invitees: "john@example.com",
    taskType: "Regular",
    videoPlatform: "Google Meet",
    endDate: new Date().toISOString().slice(0, 16),
    resources: "https://example.com/resource",
    tags: "urgent, client",
    repeat: "Daily",
    reminder: "5min",
  },
  {
    id: "6",
    type: "Due Today",
    title: "Prepare Weekly Report",
    description: [
      "Collect analytics data",
      "Review sales performance",
      "Prepare visual charts",
      "Submit report to manager",
    ],
    timestamp: new Date(),
    icon: <CalendarClock size={18} />,
    invitees: "john@example.com",
    taskType: "Regular",
    videoPlatform: "Google Meet",
    endDate: new Date().toISOString().slice(0, 16),
    resources: "https://example.com/resource",
    tags: "urgent, client",
    repeat: "Daily",
    reminder: "5min",
  },
  {
    id: "7",
    type: "Upcoming",
    title: "Product Demo Session",
    description: [
      "Prepare product presentation",
      "Highlight key platform features",
      "Demonstrate workflow process",
      "Answer technical questions",
    ],
    timestamp: new Date(),
    icon: <Clock size={18} />,
    invitees: "john@example.com",
    taskType: "Regular",
    videoPlatform: "Google Meet",
    endDate: new Date().toISOString().slice(0, 16),
    resources: "https://example.com/resource",
    tags: "urgent, client",
    repeat: "Daily",
    reminder: "5min",
  },
  {
    id: "8",
    type: "Follow Up",
    title: "Support Ticket Follow-Up",
    description: [
      "Check ticket resolution status",
      "Review support logs",
      "Contact customer for feedback",
      "Update support documentation",
    ],
    timestamp: new Date(),
    icon: <PhoneCall size={18} />,
    invitees: "john@example.com",
    taskType: "Regular",
    videoPlatform: "Google Meet",
    endDate: new Date().toISOString().slice(0, 16),
    resources: "https://example.com/resource",
    tags: "urgent, client",
    repeat: "Daily",
    reminder: "5min",
  },
  {
    id: "9",
    type: "late",
    title: "Update Website Landing Page",
    description: [
      "Add new product section",
      "Improve SEO keywords",
      "Optimize page performance",
      "Test mobile responsiveness",
    ],
    timestamp: new Date(),
    icon: <AlertTriangle size={18} />,
    invitees: "john@example.com",
    taskType: "Regular",
    videoPlatform: "Google Meet",
    endDate: new Date().toISOString().slice(0, 16),
    resources: "https://example.com/resource",
    tags: "urgent, client",
    repeat: "Daily",
    reminder: "5min",
  },
  {
    id: "10",
    type: "Completed",
    title: "User Onboarding Session",
    description: [
      "Explain platform dashboard",
      "Demonstrate task management",
      "Show reporting features",
      "Answer user questions",
    ],
    timestamp: new Date(),
    icon: <CheckCircle size={18} />,
    invitees: "john@example.com",
    taskType: "Regular",
    videoPlatform: "Google Meet",
    endDate: new Date().toISOString().slice(0, 16),
    resources: "https://example.com/resource",
    tags: "urgent, client",
    repeat: "Daily",
    reminder: "5min",
  },
];

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Completed", value: "completed" },
  { label: "Upcoming", value: "upcoming" },
  { label: "Late", value: "late" },
  { label: "Follow Up", value: "follow-up" },
  { label: "Due Today", value: "due-today" },
] as const;

const Dashboard = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredActivities =
    filter === "all"
      ? activities
      : activities.filter(
          (activity) =>
            activity.type.toLowerCase().replace(" ", "-") === filter,
        );

  return (
    <section className="w-full">
      <DashboardTopSection
        title="View Dashboard"
        description="Monitor your activities, track progress, and manage tasks efficiently."
        buttonText="view archives"
      />

      <StatCards stats={statsData} />

      <CommonSpace>
        <div className="flex flex-col lg:flex-row justify-between items-start pb-6 gap-3">
          <div className="w-full lg:w-auto">
            <SectionHeader title="Dashboard List" />
          </div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-2">
            <DashboardSearch />

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <CommonSelect
                value={filter}
                item={filterOptions}
                placeholder="Filter by"
                onValueChange={(val) => setFilter(val)}
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
        <DashBoardCard activities={filteredActivities} />
      </CommonSpace>
    </section>
  );
};

export default Dashboard;
