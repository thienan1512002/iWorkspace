import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import Loadable from 'ui-component/Loadable';
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

const PagesLanding = Loadable(lazy(() => import('views/pages/landing')));

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([{ path: '/', element: <PagesLanding /> }, LoginRoutes, MainRoutes ]);
}
