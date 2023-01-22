import SignIn from './pages/SignIn';
import ResetForm from './pages/ResetForm';
import TestPage from './pages/TestPage';

interface RouteI {
    path: string,
    component: any
}

export const loginRoutes: RouteI[] = [
    {path: '/login', component: SignIn},
    {path: '/forgot', component: ResetForm}
];

export const mainAppRoutes: RouteI[] = [
    {path: '/test', component: TestPage},
];
