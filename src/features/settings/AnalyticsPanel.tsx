import CommonButton from "@/components/shared/CommonButton";
import StatCard from "./StatCard";

const AnalyticsPanel = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
        <p className="text-sm text-gray-500 mb-4">
          On-demand only: click "Refresh" buttons to update metrics. No
          auto-refresh to save bandwidth.
        </p>
        <div className="flex gap-3 flex-wrap">
          <CommonButton>Refresh All Analytics</CommonButton>
          <CommonButton>Print All Reports</CommonButton>
        </div>
      </div>

      {[
        {
          title: "Daily Snapshot",
          updated: "09/01/2026, 12:26:16",
          stats: [
            { label: "Total Tasks Created Today", value: 0, color: "black" },
            { label: "Tasks Completed Today", value: 0, color: "green" },
            { label: "Tasks Due Today", value: 0, color: "blue" },
            { label: "Tasks Marked Late Today", value: 0, color: "red" },
            { label: "Follow-ups Created Today", value: 0, color: "purple" },
          ],
        },
        {
          title: "Weekly Summary",
          updated: "09/01/2026, 12:26:16",
          stats: [
            {
              label: "Total Tasks Created This Week",
              value: 1,
              color: "black",
            },
            {
              label: "Total Tasks Completed This Week",
              value: 0,
              color: "green",
            },
            { label: "Total Overdue Tasks This Week", value: 1, color: "red" },
            {
              label: "Total Follow-ups Created This Week",
              value: 0,
              color: "purple",
            },
          ],
        },
        {
          title: "Monthly Overview",
          updated: "03/07/2026, 05:34:12",
          stats: [
            {
              label: "Total Tasks Created This Month",
              value: 2,
              color: "black",
            },
            {
              label: "Total Tasks Completed This Month",
              value: 0,
              color: "green",
            },
            { label: "Total Overdue Tasks This Month", value: 1, color: "red" },
            {
              label: "Total Follow-ups Created This Month",
              value: 0,
              color: "purple",
            },
          ],
        },
      ].map((section) => (
        <div
          key={section.title}
          className="bg-white rounded-2xl border border-border shadow-sm p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800">{section.title}</h3>
            <div className="flex gap-2">
              <CommonButton>Print</CommonButton>
              <CommonButton>Refresh</CommonButton>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {section.stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Last updated: {section.updated}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsPanel;
