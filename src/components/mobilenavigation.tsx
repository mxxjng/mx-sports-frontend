import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import { logout } from "../utils/utils";
import { useAuth } from "../contexts/auth";

const MobileNavigation = (props) => {
    const router = useRouter();
    const auth = useAuth();

    const handleLogout = (e) => {
        auth.logout();
    };

    if (auth.error) {
        return <div className="hidden"></div>;
    }

    return (
        <div className="fixed sm:hidden z-40 w-full bottom-0 left-0 bg-bg">
            <div className="flex justify-around flex-wrap p-2 px-4 pt-2">
                <div className="text-center">
                    <Link href="/exercises">
                        <div>
                            <div className="relative w-8 h-8 mx-auto">
                                <svg
                                    width="27"
                                    height="14"
                                    viewBox="0 0 27 14"
                                    fill="none"
                                    className="absolute align-avatar"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.27282 1H5.091C4.91017 1 4.73675 1.07183 4.60888 1.1997C4.48101 1.32757 4.40918 1.50099 4.40918 1.68182V11.6818C4.40918 11.7714 4.42682 11.86 4.46108 11.9427C4.49534 12.0255 4.54557 12.1006 4.60888 12.1639C4.67219 12.2272 4.74736 12.2775 4.83008 12.3117C4.9128 12.346 5.00146 12.3636 5.091 12.3636H8.27282C8.36235 12.3636 8.45101 12.346 8.53374 12.3117C8.61646 12.2775 8.69162 12.2272 8.75493 12.1639C8.81825 12.1006 8.86847 12.0255 8.90273 11.9427C8.937 11.86 8.95463 11.7714 8.95463 11.6818V1.68182C8.95463 1.50099 8.8828 1.32757 8.75493 1.1997C8.62707 1.07183 8.45365 1 8.27282 1V1Z"
                                        stroke={
                                            router.pathname === "/exercises"
                                                ? "#7668CB"
                                                : "#B5BBC9"
                                        }
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M21.909 1H18.7272C18.5464 1 18.373 1.07183 18.2451 1.1997C18.1172 1.32757 18.0454 1.50099 18.0454 1.68182V11.6818C18.0454 11.7714 18.063 11.86 18.0973 11.9427C18.1316 12.0255 18.1818 12.1006 18.2451 12.1639C18.3084 12.2272 18.3836 12.2775 18.4663 12.3117C18.549 12.346 18.6377 12.3636 18.7272 12.3636H21.909C21.9986 12.3636 22.0872 12.346 22.17 12.3117C22.2527 12.2775 22.3279 12.2272 22.3912 12.1639C22.4545 12.1006 22.5047 12.0255 22.539 11.9427C22.5732 11.86 22.5909 11.7714 22.5909 11.6818V1.68182C22.5909 1.50099 22.519 1.32757 22.3912 1.1997C22.2633 1.07183 22.0899 1 21.909 1V1Z"
                                        stroke={
                                            router.pathname === "/exercises"
                                                ? "#7668CB"
                                                : "#B5BBC9"
                                        }
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M1 9.40919V3.95465C1 3.77382 1.07183 3.60039 1.1997 3.47253C1.32757 3.34466 1.50099 3.27283 1.68182 3.27283H3.72727C3.9081 3.27283 4.08153 3.34466 4.20939 3.47253C4.33726 3.60039 4.40909 3.77382 4.40909 3.95465V9.40919C4.40909 9.59002 4.33726 9.76344 4.20939 9.89131C4.08153 10.0192 3.9081 10.091 3.72727 10.091H1.68182C1.50099 10.091 1.32757 10.0192 1.1997 9.89131C1.07183 9.76344 1 9.59002 1 9.40919V9.40919Z"
                                        stroke={
                                            router.pathname === "/exercises"
                                                ? "#7668CB"
                                                : "#B5BBC9"
                                        }
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M25.9999 9.40919V3.95465C25.9999 3.77382 25.9281 3.60039 25.8002 3.47253C25.6723 3.34466 25.4989 3.27283 25.3181 3.27283H23.2726C23.0918 3.27283 22.9184 3.34466 22.7905 3.47253C22.6627 3.60039 22.5908 3.77382 22.5908 3.95465V9.40919C22.5908 9.59002 22.6627 9.76344 22.7905 9.89131C22.9184 10.0192 23.0918 10.091 23.2726 10.091H25.3181C25.4989 10.091 25.6723 10.0192 25.8002 9.89131C25.9281 9.76344 25.9999 9.59002 25.9999 9.40919V9.40919Z"
                                        stroke={
                                            router.pathname === "/exercises"
                                                ? "#7668CB"
                                                : "#B5BBC9"
                                        }
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M8.95459 6.68176H18.0455"
                                        stroke={
                                            router.pathname === "/exercises"
                                                ? "#7668CB"
                                                : "#B5BBC9"
                                        }
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>

                            <p
                                className={`${
                                    router.pathname === "/exercises"
                                        ? "text-primary"
                                        : "text-textColor"
                                } text-xs`}
                            >
                                ??bungen
                            </p>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href="/dashboard">
                        <div>
                            <div className="relative w-8 h-8 mx-auto">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute align-avatar"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.76902 0H2.6921C2.33982 0 2.03677 1.14615e-08 1.76909 0.0630721C1.35472 0.162087 0.975848 0.373889 0.674457 0.675009C0.373065 0.976129 0.160922 1.35481 0.0615337 1.76909C-5.73077e-08 2.03677 0 2.33828 0 2.6921V6.53796C0 6.89024 1.14615e-08 7.19329 0.0630721 7.46096C0.162087 7.87534 0.373889 8.25421 0.675009 8.5556C0.976129 8.85699 1.35481 9.06914 1.76909 9.16853C2.03677 9.23006 2.33828 9.23006 2.6921 9.23006H6.53796C6.89024 9.23006 7.19329 9.23006 7.46096 9.16699C7.87534 9.06797 8.25421 8.85617 8.5556 8.55505C8.85699 8.25393 9.06914 7.87525 9.16853 7.46096C9.23006 7.19329 9.23006 6.89178 9.23006 6.53796V2.6921C9.23006 2.33982 9.23006 2.03677 9.16699 1.76909C9.06797 1.35472 8.85617 0.975848 8.55505 0.674457C8.25393 0.373065 7.87525 0.160922 7.46096 0.0615337C7.19329 -5.73077e-08 6.89178 0 6.53796 0H2.76902ZM2.12753 1.55988C2.19368 1.5445 2.29675 1.53834 2.76902 1.53834H6.46104C6.93485 1.53834 7.03638 1.54296 7.10253 1.55988C7.24072 1.59293 7.36705 1.6636 7.46752 1.76407C7.56799 1.86454 7.63867 1.99088 7.67172 2.12907C7.6871 2.19368 7.69172 2.29521 7.69172 2.76902V6.46104C7.69172 6.93485 7.6871 7.03638 7.67018 7.10253C7.63713 7.24072 7.56646 7.36705 7.46599 7.46752C7.36552 7.56799 7.23918 7.63867 7.10099 7.67172C7.03792 7.68556 6.93639 7.69172 6.46104 7.69172H2.76902C2.29521 7.69172 2.19368 7.6871 2.12753 7.67018C1.98934 7.63713 1.863 7.56646 1.76253 7.46599C1.66206 7.36552 1.59139 7.23918 1.55834 7.10099C1.5445 7.03792 1.53834 6.93639 1.53834 6.46104V2.76902C1.53834 2.29521 1.54296 2.19368 1.55988 2.12753C1.59293 1.98934 1.6636 1.863 1.76407 1.76253C1.86454 1.66206 1.99088 1.59139 2.12907 1.55834L2.12753 1.55988ZM13.5374 0H13.4605C13.1082 0 12.8052 1.14615e-08 12.5375 0.0630721C12.1231 0.162087 11.7443 0.373889 11.4429 0.675009C11.1415 0.976129 10.9293 1.35481 10.8299 1.76909C10.7684 2.03677 10.7684 2.33828 10.7684 2.6921V6.53796C10.7684 6.89024 10.7684 7.19329 10.8315 7.46096C10.9305 7.87534 11.1423 8.25421 11.4434 8.5556C11.7445 8.85699 12.1232 9.06914 12.5375 9.16853C12.8052 9.23006 13.1067 9.23006 13.4605 9.23006H17.3064C17.6586 9.23006 17.9617 9.23006 18.2294 9.16699C18.6437 9.06797 19.0226 8.85617 19.324 8.55505C19.6254 8.25393 19.8375 7.87525 19.9369 7.46096C19.9985 7.19329 19.9985 6.89178 19.9985 6.53796V2.6921C19.9985 2.33982 19.9985 2.03677 19.9354 1.76909C19.8364 1.35472 19.6246 0.975848 19.3235 0.674457C19.0223 0.373065 18.6437 0.160922 18.2294 0.0615337C17.9617 -5.73077e-08 17.6602 0 17.3064 0H13.5374ZM12.8959 1.55988C12.9621 1.5445 13.0651 1.53834 13.5374 1.53834H17.2294C17.7033 1.53834 17.8048 1.54296 17.8709 1.55988C18.0091 1.59293 18.1355 1.6636 18.2359 1.76407C18.3364 1.86454 18.4071 1.99088 18.4401 2.12907C18.4555 2.19368 18.4601 2.29521 18.4601 2.76902V6.46104C18.4601 6.93485 18.454 7.03638 18.4386 7.10253C18.4055 7.24072 18.3349 7.36705 18.2344 7.46752C18.1339 7.56799 18.0076 7.63867 17.8694 7.67172C17.8048 7.6871 17.7033 7.69172 17.2294 7.69172H13.5374C13.0636 7.69172 12.9621 7.6871 12.8959 7.67018C12.7577 7.63713 12.6314 7.56646 12.5309 7.46599C12.4305 7.36552 12.3598 7.23918 12.3267 7.10099C12.3129 7.03792 12.3067 6.93639 12.3067 6.46104V2.76902C12.3067 2.29521 12.3114 2.19368 12.3283 2.12753C12.3613 1.98934 12.432 1.863 12.5325 1.76253C12.6329 1.66206 12.7593 1.59139 12.8975 1.55834L12.8959 1.55988ZM2.6921 10.7684H6.53796C6.89024 10.7684 7.19329 10.7684 7.46096 10.8315C7.87534 10.9305 8.25421 11.1423 8.5556 11.4434C8.85699 11.7445 9.06914 12.1232 9.16853 12.5375C9.23006 12.8052 9.23006 13.1067 9.23006 13.4605V17.3064C9.23006 17.6586 9.23006 17.9617 9.16699 18.2294C9.06797 18.6437 8.85617 19.0226 8.55505 19.324C8.25393 19.6254 7.87525 19.8375 7.46096 19.9369C7.19329 19.9985 6.89178 19.9985 6.53796 19.9985H2.6921C2.33982 19.9985 2.03677 19.9985 1.76909 19.9354C1.35472 19.8364 0.975848 19.6246 0.674457 19.3235C0.373065 19.0223 0.160922 18.6437 0.0615337 18.2294C-5.73077e-08 17.9617 0 17.6602 0 17.3064V13.4605C0 13.1082 1.14615e-08 12.8052 0.0630721 12.5375C0.162087 12.1231 0.373889 11.7443 0.675009 11.4429C0.976129 11.1415 1.35481 10.9293 1.76909 10.8299C2.03677 10.7684 2.33828 10.7684 2.6921 10.7684ZM2.76902 12.3067C2.29521 12.3067 2.19368 12.3114 2.12753 12.3283C1.98934 12.3613 1.863 12.432 1.76253 12.5325C1.66206 12.6329 1.59139 12.7593 1.55834 12.8975C1.5445 12.9605 1.53834 13.0621 1.53834 13.5374V17.2294C1.53834 17.7033 1.54296 17.8048 1.55988 17.8709C1.59293 18.0091 1.6636 18.1355 1.76407 18.2359C1.86454 18.3364 1.99088 18.4071 2.12907 18.4401C2.19368 18.4555 2.29521 18.4601 2.76902 18.4601H6.46104C6.93485 18.4601 7.03638 18.454 7.10253 18.4386C7.24072 18.4055 7.36705 18.3349 7.46752 18.2344C7.56799 18.1339 7.63867 18.0076 7.67172 17.8694C7.6871 17.8048 7.69172 17.7033 7.69172 17.2294V13.5374C7.69172 13.0636 7.6871 12.9621 7.67018 12.8959C7.63713 12.7577 7.56646 12.6314 7.46599 12.5309C7.36552 12.4305 7.23918 12.3598 7.10099 12.3267C7.03792 12.3129 6.93639 12.3067 6.46104 12.3067H2.76902ZM13.5374 10.7684H13.4605C13.1082 10.7684 12.8052 10.7684 12.5375 10.8315C12.1231 10.9305 11.7443 11.1423 11.4429 11.4434C11.1415 11.7445 10.9293 12.1232 10.8299 12.5375C10.7684 12.8052 10.7684 13.1067 10.7684 13.4605V17.3064C10.7684 17.6586 10.7684 17.9617 10.8315 18.2294C10.9305 18.6437 11.1423 19.0226 11.4434 19.324C11.7445 19.6254 12.1232 19.8375 12.5375 19.9369C12.8052 20 13.1082 20 13.4605 20H17.3064C17.6586 20 17.9617 20 18.2294 19.9369C18.6435 19.8377 19.022 19.6257 19.3231 19.3246C19.6242 19.0235 19.8361 18.645 19.9354 18.2309C19.9985 17.9632 19.9985 17.6602 19.9985 17.3079V13.4605C19.9985 13.1082 19.9985 12.8052 19.9354 12.5375C19.8364 12.1231 19.6246 11.7443 19.3235 11.4429C19.0223 11.1415 18.6437 10.9293 18.2294 10.8299C17.9617 10.7684 17.6602 10.7684 17.3064 10.7684H13.5374ZM12.8959 12.3283C12.9621 12.3129 13.0651 12.3067 13.5374 12.3067H17.2294C17.7033 12.3067 17.8048 12.3114 17.8709 12.3283C18.0091 12.3613 18.1355 12.432 18.2359 12.5325C18.3364 12.6329 18.4071 12.7593 18.4401 12.8975C18.4555 12.9621 18.4601 13.0636 18.4601 13.5374V17.2294C18.4601 17.7033 18.454 17.8048 18.4386 17.8709C18.4055 18.0091 18.3349 18.1355 18.2344 18.2359C18.1339 18.3364 18.0076 18.4071 17.8694 18.4401C17.8048 18.4555 17.7033 18.4601 17.2294 18.4601H13.5374C13.0636 18.4601 12.9621 18.454 12.8959 18.4386C12.7577 18.4055 12.6314 18.3349 12.5309 18.2344C12.4305 18.1339 12.3598 18.0076 12.3267 17.8694C12.3129 17.8063 12.3067 17.7048 12.3067 17.2294V13.5374C12.3067 13.0636 12.3114 12.9621 12.3283 12.8959C12.3613 12.7577 12.432 12.6314 12.5325 12.5309C12.6329 12.4305 12.7593 12.3598 12.8975 12.3267L12.8959 12.3283Z"
                                        fill={
                                            router.pathname === "/dashboard"
                                                ? "#7668CB"
                                                : "#B5BBC9"
                                        }
                                    />
                                </svg>
                            </div>

                            <p
                                className={`${
                                    router.pathname === "/dashboard"
                                        ? "text-primary"
                                        : "text-textColor"
                                } text-xs`}
                            >
                                Dashboard
                            </p>
                        </div>
                    </Link>
                </div>
                {auth?.user?.role === "ADMIN" && (
                    <div>
                        <Link href="/admin">
                            <div>
                                <div className="relative w-8 h-8 mx-auto">
                                    <svg
                                        width="16"
                                        height="20"
                                        viewBox="0 0 16 20"
                                        className="absolute align-avatar"
                                        fill={
                                            router.pathname === "/admin"
                                                ? "#7668CB"
                                                : "#B5BBC9"
                                        }
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <mask
                                            id="mask0"
                                            mask-type="alpha"
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="12"
                                            width="16"
                                            height="9"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M0 12.5779H15.9435V20.0001H0V12.5779Z"
                                                fill={
                                                    router.pathname === "/admin"
                                                        ? "#7668CB"
                                                        : "#B5BBC9"
                                                }
                                            />
                                        </mask>
                                        <g mask="url(#mask0)">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M7.9727 14.0877C3.68382 14.0877 1.50969 14.8245 1.50969 16.2789C1.50969 17.7464 3.68382 18.4903 7.9727 18.4903C12.2606 18.4903 14.4337 17.7535 14.4337 16.299C14.4337 14.8315 12.2606 14.0877 7.9727 14.0877M7.9727 20.0001C6.00088 20.0001 -0.00012207 20.0001 -0.00012207 16.2789C-0.00012207 12.9614 4.55046 12.5779 7.9727 12.5779C9.94452 12.5779 15.9435 12.5779 15.9435 16.2991C15.9435 19.6166 11.3939 20.0001 7.9727 20.0001"
                                                fill={
                                                    router.pathname === "/admin"
                                                        ? "#7668CB"
                                                        : "#B5BBC9"
                                                }
                                            />
                                        </g>
                                        <mask
                                            id="mask1"
                                            mask-type="alpha"
                                            maskUnits="userSpaceOnUse"
                                            x="2"
                                            y="0"
                                            width="12"
                                            height="11"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M2.62695 0.00012207H13.3165V10.6882H2.62695V0.00012207Z"
                                                fill={
                                                    router.pathname === "/admin"
                                                        ? "#7668CB"
                                                        : "#B5BBC9"
                                                }
                                            />
                                        </mask>
                                        <g mask="url(#mask1)">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M7.97268 1.43707C5.81768 1.43707 4.06428 3.18947 4.06428 5.34447C4.05723 7.49243 5.79755 9.24382 7.9435 9.25187L7.97268 9.97054V9.25187C10.1267 9.25187 11.8791 7.49847 11.8791 5.34447C11.8791 3.18947 10.1267 1.43707 7.97268 1.43707M7.97273 10.6882H7.94052C4.99941 10.6792 2.61692 8.28058 2.62698 5.34148C2.62698 2.39734 5.02457 -0.000244141 7.97273 -0.000244141C10.9199 -0.000244141 13.3165 2.39734 13.3165 5.3445C13.3165 8.29165 10.9199 10.6882 7.97273 10.6882"
                                                fill={
                                                    router.pathname === "/admin"
                                                        ? "#7668CB"
                                                        : "#B5BBC9"
                                                }
                                            />
                                        </g>
                                    </svg>
                                </div>

                                <p
                                    className={`${
                                        router.pathname === "/admin"
                                            ? "text-primary"
                                            : "text-textColor"
                                    } text-xs`}
                                >
                                    Admin
                                </p>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};
export default MobileNavigation;
