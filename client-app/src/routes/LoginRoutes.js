import MinimalLayout from "layout/MinimalLayout";
import NavMotion from "layout/NavMotion";
import { lazy } from "react";
import Loadable from 'ui-component/Loadable';
import GuestGuard from "utils/route-guard/GuestGuard";

const LoginPage = Loadable(lazy(() => import('views/pages/authentication/login/Login')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: (
        <NavMotion>
            <GuestGuard>
                <MinimalLayout />
            </GuestGuard>
        </NavMotion>
    ),
    children: [
        {
            path: '/login',
            element: <LoginPage />
        }
    ]
}

export default LoginRoutes;