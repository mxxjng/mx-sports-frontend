import * as React from "react";

import Navigation from "./Navigation/Navigation";
import BottomNavigation from "./Navigation/BottomNavigation";

/**
 * Layout component
 * @param children
 * @returns {JSX.Element}
 */
const Layout: React.FC = ({ children }): JSX.Element => {
    return (
        <div>
            <Navigation
                loggedInItems={[
                    {
                        link: "/dashboard",
                        text: "Dashboard",
                    },
                    {
                        link: "/exercises",
                        text: "Exercises",
                    },
                ]}
                loggedOutItems={[
                    {
                        link: "/login",
                        text: "Login",
                    },
                    {
                        link: "/register",
                        text: "Register",
                    },
                ]}
            />
            {children}
            <BottomNavigation />
        </div>
    );
};
export default Layout;
