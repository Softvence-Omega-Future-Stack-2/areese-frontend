import DashboardTopSection from "@/components/shared/DashboardTopSection";
import FollowUpsPanel from "@/features/followUp/FollowUpsPanel";

const FollowUps = () => {
  return (
    <div className="">
      <DashboardTopSection
        title="Follow Ups"
        description="View and manage all your follow ups efficiently"
      />

      <div>
        <FollowUpsPanel />
      </div>
    </div>
  );
};

export default FollowUps;
