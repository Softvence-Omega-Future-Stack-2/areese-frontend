import DashboardTopSection from "@/components/shared/DashboardTopSection";
import AddMemberModal from "@/features/teamAccess/AddMemberModal";
import TeamAccessPage from "@/features/teamAccess/TeamAccessPage";
import { useState } from "react";

const TeamAccess = () => {
  const [isTeamAccessOpen, setIsTeamAccessOpen] = useState(false);
  return (
    <div>
      {isTeamAccessOpen ? (
        <AddMemberModal onClose={() => setIsTeamAccessOpen(false)} />
      ) : (
        <>
          <DashboardTopSection
            title="Team Access"
            description="View and manage all your team members efficiently"
          />
          <TeamAccessPage />
        </>
      )}
    </div>
  );
};

export default TeamAccess;
