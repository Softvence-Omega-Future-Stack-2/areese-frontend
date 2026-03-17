import MainLayout from "@/components/layout/MainLayout";

import ContactPage from "@/features/contactPage/ContactPage";
import ListDetail from "@/features/dashboard/ListDetail";
import BlogCategories from "@/pages/BlogCategories";
import Blogs from "@/pages/Blogs";
import Contacts from "@/pages/Contacts";
import CreateTask from "@/pages/CreateTask";
import Dashboard from "@/pages/Dashboard";
import FollowUps from "@/pages/FollowUps";
import Home from "@/pages/Home";
import Login from "@/pages/login";
import MessageTemplate from "@/pages/MessageTemplate";
import Packages from "@/pages/Packages";
import Plans from "@/pages/Plans";
import ProfileSettings from "@/pages/ProfileSettings";
import PublicBooking from "@/pages/PublicBooking";
import Settings from "@/pages/Settings";
import TeamAccess from "@/pages/TeamAccess";
import Users from "@/pages/Users";
import ViewAppointments from "@/pages/ViewAppointments";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",

        element: <Home />,
      },
      {
        path: "/contact",

        element: <ContactPage />,
      },
      {
        path: "/login",

        element: <Login />,
      },
      {
        element: <MainLayout />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "create-task", element: <CreateTask /> },
          { path: "create-task/:id", element: <ListDetail /> },
          { path: "follow-ups", element: <FollowUps /> },
          { path: "packages", element: <Packages /> },
          { path: "public-booking", element: <PublicBooking /> },
          { path: "appointments", element: <ViewAppointments /> },
          { path: "settings", element: <Settings /> },
          { path: "message-template", element: <MessageTemplate /> },
          { path: "team-access", element: <TeamAccess /> },
          { path: "plans", element: <Plans /> },
          { path: "contacts", element: <Contacts /> },
          { path: "users", element: <Users /> },
          { path: "blog-categories", element: <BlogCategories /> },
          { path: "blogs", element: <Blogs /> },
          { path: "profile-settings", element: <ProfileSettings /> },
        ],
      },
    ],
  },
]);

export default router;
