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
  ],
};

export default MainRoutes;
