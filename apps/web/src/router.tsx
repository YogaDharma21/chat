import { createBrowserRouter, redirect } from "react-router";
import LandingPage from "./features/landing/pages/LandingPage";
import SignUpPage from "./features/auth/pages/SignUpPage";
import SignInPage from "./features/auth/pages/SignInPage";
import ForgotPassword from "./features/auth/pages/ForgotPasswordPage";
import UpdatePasswordPage from "./features/auth/pages/UpdatePasswordPage";
import LayoutPage from "./shared/components/LayoutPage";
import DiscoverPage from "./features/discover/pages/DiscoverPage";
import { getAuthCookie } from "./features/auth/utils/cookie";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/sign-up",
        loader: () => {
            const auth = getAuthCookie();
            if (auth) {
                throw redirect("/home/discover");
            }
            return true;
        },
        element: <SignUpPage />,
    },
    {
        path: "/sign-in",
        loader: () => {
            const auth = getAuthCookie();
            if (auth) {
                throw redirect("/home/discover");
            }
            return true;
        },
        element: <SignInPage />,
    },
    {
        path: "/forgot-password",
        loader: () => {
            const auth = getAuthCookie();
            if (auth) {
                throw redirect("/home/discover");
            }
            return true;
        },
        element: <ForgotPassword />,
    },
    {
        path: "/reset-password/:token",
        loader: () => {
            const auth = getAuthCookie();
            if (auth) {
                throw redirect("/home/discover");
            }
            return true;
        },
        element: <UpdatePasswordPage />,
    },
    {
        path: "/home",
        loader: () => {
            const auth = getAuthCookie();
            if (!auth) {
                return "/sign-in";
            }
            return true;
        },
        element: <LayoutPage />,
        children: [
            {
                path: "/home/discover",
                element: <DiscoverPage />,
            },
        ],
    },
]);

export default router;
