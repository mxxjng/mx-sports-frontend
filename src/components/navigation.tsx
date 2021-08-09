import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import { logout } from "../utils/utils";
import { useAuth } from "../contexts/auth";

import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
    const [sideBarOpen, setSideBarOpen] = React.useState(false);
    const router = useRouter();
    const auth = useAuth();

    const handleLogout = (e) => {
        setSideBarOpen(false);
        auth.logout();
    };

    if (auth.error) {
        return (
            <div>
                <div className="flex justify-between items-center px-4 py-2 md:py-4 max-w-7xl mx-auto">
                    <Link href="/">
                        <p className="font-headline text-primary text-2xl cursor-pointer">
                            MX
                        </p>
                    </Link>

                    <div className="hidden sm:flex">
                        <div
                            className={`${
                                router.pathname === "/login" &&
                                "border-b-2 border-primary"
                            } p-2`}
                        >
                            <Link href="/login">Login</Link>
                        </div>
                        <div
                            className={`${
                                router.pathname === "/register" &&
                                "border-b-2 border-primary"
                            } p-2`}
                        >
                            <Link href="/register">Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div>
            <AnimatePresence>
                {sideBarOpen && (
                    <motion.div
                        initial={{ translateX: -200 }}
                        animate={{ translateX: 0 }}
                        exit={{ translateX: -200 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 left-0 h-full w-10/12 bg-bg p-4 z-highest "
                    >
                        <h2 className="text-headline font-headline text-xl">
                            {auth?.user?.firstName} {auth?.user?.lastName}
                        </h2>

                        <div className="py-2">
                            <div
                                onClick={handleLogout}
                                className="flex items-center"
                            >
                                <svg
                                    width="21"
                                    height="20"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-2"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M9.31924 20H4.43324C1.98924 20 0.000244141 18.011 0.000244141 15.565V4.436C0.000244141 1.99 1.98924 0 4.43324 0H9.30824C11.7542 0 13.7442 1.99 13.7442 4.436V5.368C13.7442 5.782 13.4082 6.118 12.9942 6.118C12.5802 6.118 12.2442 5.782 12.2442 5.368V4.436C12.2442 2.816 10.9272 1.5 9.30824 1.5H4.43324C2.81624 1.5 1.50024 2.816 1.50024 4.436V15.565C1.50024 17.184 2.81624 18.5 4.43324 18.5H9.31924C10.9312 18.5 12.2442 17.188 12.2442 15.576V14.633C12.2442 14.219 12.5802 13.883 12.9942 13.883C13.4082 13.883 13.7442 14.219 13.7442 14.633V15.576C13.7442 18.016 11.7582 20 9.31924 20"
                                        fill="#B5BBC9"
                                    />
                                    <mask
                                        id="mask0"
                                        mask-type="alpha"
                                        maskUnits="userSpaceOnUse"
                                        x="6"
                                        y="9"
                                        width="15"
                                        height="2"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M6.99609 9.25H20.537V10.75H6.99609V9.25Z"
                                            fill="#B5BBC9"
                                        />
                                    </mask>
                                    <g mask="url(#mask0)">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M19.7871 10.75H7.74609C7.33209 10.75 6.99609 10.414 6.99609 10C6.99609 9.586 7.33209 9.25 7.74609 9.25H19.7871C20.2011 9.25 20.5371 9.586 20.5371 10C20.5371 10.414 20.2011 10.75 19.7871 10.75"
                                            fill="#B5BBC9"
                                        />
                                    </g>
                                    <mask
                                        id="mask1"
                                        mask-type="alpha"
                                        maskUnits="userSpaceOnUse"
                                        x="16"
                                        y="6"
                                        width="5"
                                        height="8"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M16.1096 6.33527H20.537V13.666H16.1096V6.33527Z"
                                            fill="#B5BBC9"
                                        />
                                    </mask>
                                    <g mask="url(#mask1)">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M16.8594 13.666C16.6674 13.666 16.4744 13.593 16.3284 13.445C16.0364 13.151 16.0374 12.677 16.3304 12.385L18.7244 10L16.3304 7.61602C16.0374 7.32402 16.0354 6.85002 16.3284 6.55602C16.6204 6.26202 17.0944 6.26202 17.3884 6.55402L20.3164 9.46902C20.4584 9.60902 20.5374 9.80102 20.5374 10C20.5374 10.199 20.4584 10.391 20.3164 10.531L17.3884 13.447C17.2424 13.593 17.0504 13.666 16.8594 13.666"
                                            fill="#B5BBC9"
                                        />
                                    </g>
                                </svg>
                                <p
                                    className={`${
                                        router.pathname === "/logout"
                                            ? "text-primary"
                                            : "text-textColor"
                                    } `}
                                >
                                    Ausloggen
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="flex justify-between items-center px-4 py-2 md:py-4 max-w-7xl mx-auto">
                <Link href="/dashboard">
                    <p className="font-headline text-primary text-2xl cursor-pointer">
                        MX
                    </p>
                </Link>

                <div
                    className="flex sm:hidden"
                    onClick={() => setSideBarOpen(!sideBarOpen)}
                >
                    <div className="bg-bgHighlight rounded-full p-2 w-10 h-10 relative">
                        <span className="text-xs font-headline text-headline absolute align-avatar whitespace-nowrap">
                            {auth?.user?.firstName[0]} {auth?.user?.lastName[0]}
                        </span>
                    </div>
                </div>

                <div className="hidden sm:flex">
                    <div
                        className={`${
                            router.pathname === "/dashboard" &&
                            "border-b-2 border-primary"
                        } p-2`}
                    >
                        <Link href="/dashboard">Dashboard</Link>
                    </div>
                    <div
                        className={`${
                            router.pathname === "/exercises" &&
                            "border-b-2 border-primary"
                        } p-2`}
                    >
                        <Link href="/exercises">Exercises</Link>
                    </div>
                    {auth?.user?.role === "ADMIN" && (
                        <div
                            className={`${
                                router.pathname === "/admin" &&
                                "border-b-2 border-primary"
                            } p-2`}
                        >
                            <Link href="/admin">Admin</Link>
                        </div>
                    )}
                    <div>
                        <p className="text-headline p-2 font-headline">
                            {auth?.user?.firstName} {auth?.user?.lastName}
                        </p>
                    </div>
                    <div
                        className={`${
                            router.pathname === "/login" &&
                            "border-b-2 border-primary"
                        } p-2`}
                    >
                        <button
                            className="text-headline cursor-pointer"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Navigation;
