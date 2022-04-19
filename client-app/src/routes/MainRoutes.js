import { lazy } from "react";

// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";
import AuthGuard from "utils/route-guard/AuthGuard";

// dashboard routing
const DashboardPage = Loadable(lazy(() => import("views/dashboard/Default")));
const DashboardPage2 = Loadable(
  lazy(() => import("views/dashboard/Analytics"))
);
const NewsUnApproved = Loadable(
  lazy(() => import("views/news/news-unapproved/"))
);
const NewsDetails = Loadable(lazy(() => import("views/news/news-details/")));
const NewsContent = Loadable(lazy(() => import("views/news/news-contents/")));
const CreateContent = Loadable(
  lazy(() => import("views/news/news-unapproved/create-content/"))
);
// ==============================|| MAIN ROUTING ||============================== //
const MainRoutes = {
  path: "/",
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: "/dashboard/default",
      element: <DashboardPage />,
    },
    {
      path: "/dashboard/analytics",
      element: <DashboardPage2 />,
    },
    {
      path: "/news/news-unapproved",
      element: <NewsUnApproved />,
    },
    {
      path: "/news/news-contents",
      element: <NewsContent />,
    },
    {
      path: "/news/news-details/:id",
      element: <NewsDetails />,
    },
    {
      path: "/news/news-unapproved/create-content/:id",
      element: <CreateContent />,
    },
  ],
};

export default MainRoutes;
