import DashboardTopSection from "@/components/shared/DashboardTopSection";
import BlogList from "@/features/blog/BlogList";
import CreateBlogForm from "@/features/blog/CreateBlogForm";
import { useState } from "react";

const Blogs = () => {
  const [isBlogCreated, setIsBlogCreated] = useState(false);
  return (
    <div>
      {isBlogCreated ? (
        <CreateBlogForm onCancel={() => setIsBlogCreated(false)} />
      ) : (
        <>
          <DashboardTopSection
            title="Blogs"
            description="View and manage all your blogs efficiently"
            buttonText="Create blog"
            action={() => {
              setIsBlogCreated(true);
            }}
          />
          <BlogList />
        </>
      )}
    </div>
  );
};

export default Blogs;
