import DashboardTopSection from "@/components/shared/DashboardTopSection";
import CreateUser from "@/features/user/CreateUser";
import UserList from "@/features/user/UserList";
import { useState } from "react";

const Users = () => {
  const [isUserCreated, setIsUserCreated] = useState(false);
  return (
    <div>
      {isUserCreated ? (
        <CreateUser onCancel={() => setIsUserCreated(false)} />
      ) : (
        <>
          <DashboardTopSection
            title="User"
            description="View and manage all your users efficiently"
            buttonText="Create user"
            action={() => setIsUserCreated(true)}
          />

          <UserList />
        </>
      )}
    </div>
  );
};

export default Users;
