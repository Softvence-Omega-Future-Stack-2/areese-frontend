import DashboardTopSection from "@/components/shared/DashboardTopSection";
import CreatePackage from "@/features/package/CreatePackage";
import PackageList from "@/features/package/PackageList";
import { useState } from "react";

const Packages = () => {
  const [isPackageOpen, setIsPackageOpen] = useState(false);

  return (
    <div>
      {isPackageOpen ? (
        <CreatePackage onCancel={() => setIsPackageOpen(false)} />
      ) : (
        <>
          <DashboardTopSection
            title="Package"
            description="View and manage all your packages efficiently"
            buttonText="Create New Package"
            action={() => setIsPackageOpen(true)}
          />
          <PackageList />
        </>
      )}
    </div>
  );
};

export default Packages;
