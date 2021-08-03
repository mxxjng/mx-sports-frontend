import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import { logout } from "../utils/utils";
import { useAuth } from "../contexts/auth";

const Navigation = () => {
    const router = useRouter();
    const auth: any = useAuth();

    const handleLogout = (e) => {
        auth.logout();
    };

    if (auth.error) {
        return (
            <div>
                <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            width="66"
                            height="34"
                            alt="MX Sports"
                        />
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
            <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        width="66"
                        height="34"
                        alt="MX Sports"
                    />
                </Link>

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
                    <div>
                        <p className="text-headline p-2 font-bold">
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
