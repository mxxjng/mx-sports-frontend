import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useAuth } from "../../contexts/auth";

import SideBar from "./SideBar";
import NavItem from "./NavItem";
import Avatar from "../Avatar";
import Button from "../Button";

export interface NavItemInterface {
    link: string;
    text: string;
}

interface NavigationProps {
    loggedInItems: NavItemInterface[];
    loggedOutItems: NavItemInterface[];
}

const Navigation: React.FC<NavigationProps> = ({
    loggedInItems,
    loggedOutItems,
}) => {
    const [sideBarOpen, setSideBarOpen] = React.useState(false);
    const router = useRouter();
    const auth = useAuth();

    const handleLogout = (e) => {
        setSideBarOpen(false);
        auth.logout();
    };

    return (
        <>
            <SideBar
                userName={`${auth?.user?.firstName} ${auth?.user?.lastName}`}
                logout={handleLogout}
                isOpen={sideBarOpen}
            />
            <div className="flex justify-between items-center px-4 py-2 md:py-4 max-w-7xl mx-auto">
                <Link href={auth.error ? "/" : "/dashboard"}>
                    <p className="font-headline text-primary text-2xl cursor-pointer">
                        MX
                    </p>
                </Link>

                {auth.user && (
                    <div
                        className="flex sm:hidden"
                        onClick={() => setSideBarOpen(!sideBarOpen)}
                    >
                        <Avatar
                            initials={`${auth?.user?.firstName[0]}${auth?.user?.lastName[0]}`}
                        />
                    </div>
                )}

                {auth.error ? (
                    <div className="hidden sm:flex">
                        {loggedOutItems.map((item) => {
                            return (
                                <NavItem
                                    routerPath={router.pathname}
                                    link={item.link}
                                    text={item.text}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <div className="hidden sm:flex">
                        {loggedInItems.map((item) => {
                            return (
                                <NavItem
                                    routerPath={router.pathname}
                                    link={item.link}
                                    text={item.text}
                                />
                            );
                        })}
                        {auth?.user?.role === "ADMIN" && (
                            <NavItem
                                routerPath={router.pathname}
                                link="/admin"
                                text="Admin"
                            />
                        )}
                        <Button
                            color="secondary"
                            className="ml-4"
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>
                    </div>
                )}
            </div>
        </>
    );
};
export default Navigation;
