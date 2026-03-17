import DashboardTopSection from "@/components/shared/DashboardTopSection";
import CreatePlan from "@/features/plan/CreatePlan";
import PlanList from "@/features/plan/PlanList";
import { useState } from "react";

const Plans = () => {
  const [isPlanCreated, setIsPlanCreated] = useState(false);
  return (
    <div>
      {isPlanCreated ? (
        <CreatePlan onCancel={() => setIsPlanCreated(false)} />
      ) : (
        <>
          <DashboardTopSection
            title="Plan"
            description="Create and manage your plans, pricing, and features for users"
            buttonText="create plan"
            action={() => setIsPlanCreated(true)}
          />
          <PlanList />
        </>
      )}
    </div>
  );
};

export default Plans;
