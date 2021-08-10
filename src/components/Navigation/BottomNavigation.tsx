import * as React from "react";
import { useRouter } from "next/router";

import { useAuth } from "../../contexts/auth";
import { NavItemInterface } from "./Navigation";
import MobileNavItem from "./MobileNavItem";
import AdminIcon from "../Icons/NavIcons/AdminIcon";
import ExerciseIcon from "../Icons/NavIcons/ExerciseIcon";
import DashboardIcon from "../Icons/NavIcons/DashboardIcon";

interface NavItems extends NavItemInterface {
    icon: React.ReactNode;
}

const MobileNavigation: React.FC = () => {
    const router = useRouter();
    const auth = useAuth();

    const items: NavItems[] = [
        {
            link: "/exercises",
            text: "Übungen",
            icon: <ExerciseIcon isActive={router.pathname === "/exercises"} />,
        },
        {
            link: "/dashboard",
            text: "Dashboard",
            icon: <DashboardIcon isActive={router.pathname === "/dashboard"} />,
        },
    ];

    if (auth.error) {
        return <div className="hidden"></div>;
    }

    return (
        <div className="fixed sm:hidden z-40 w-full bottom-0 left-0 bg-bg">
            <div className="flex justify-around flex-wrap p-2 px-4 pt-2">
                {items.map((item) => {
                    return (
                        <MobileNavItem
                            isActive={router.pathname === item.link}
                            text={item.text}
                            link={item.link}
                            icon={item.icon}
                        />
                    );
                })}
                {auth?.user?.role === "ADMIN" && (
                    <MobileNavItem
                        isActive={router.pathname === "/admin"}
                        text="Admin"
                        link="/admin"
                        icon={
                            <AdminIcon
                                isActive={router.pathname === "/admin"}
                            />
                        }
                    />
                )}
            </div>
        </div>
    );
};
export default MobileNavigation;
