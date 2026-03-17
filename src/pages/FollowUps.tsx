import DashboardTopSection from "@/components/shared/DashboardTopSection";
import FollowUpLatest from "@/features/followUp/FollowUpLatest";

const FollowUps = () => {
  return (
    <div className="">
      <DashboardTopSection
        title="Follow Ups"
        description="View and manage all your follow ups efficiently"
      />

      <FollowUpLatest />
    </div>
  );
};

export default FollowUps;
