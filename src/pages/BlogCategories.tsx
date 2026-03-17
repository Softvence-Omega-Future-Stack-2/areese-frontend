import DashboardTopSection from "@/components/shared/DashboardTopSection";
import CategoryList from "@/features/Category/CategoryList";
import CreateCategory from "@/features/Category/CreateCategory";
import { useState } from "react";

const BlogCategories = () => {
  const [isCategoryCreated, setIsCategoryCreated] = useState(false);
  return (
    <div>
      {isCategoryCreated ? (
        <CreateCategory onCancel={() => setIsCategoryCreated(false)} />
      ) : (
        <>
          <DashboardTopSection
            title="Category"
            description="View and manage all your category efficiently"
            buttonText="Create Category"
            action={() => setIsCategoryCreated(true)}
          />

          <CategoryList />
        </>
      )}
    </div>
  );
};

export default BlogCategories;
