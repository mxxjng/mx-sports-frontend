import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

import Layout from "../components/layout";
import { useAuth } from "../contexts/auth";
import { useFetch } from "../hooks/fetchData";
import { API_URL } from "../utils/constants";
import CreateExercise from "../components/create-exercise/createExercise";
import { UserExercise } from "../interfaces/interfaces";
import Spinner from "../components/spinner";
import FilterMenu from "../components/filter-menu/filterMenu";

export default function Dashboard() {
    const [openCreate, setOpenCreate] = useState(false);
    const [openFilterMenu, setOpenFilterMenu] = useState(false);
    const [filterCategory, setFilterCategory] = useState(() => {
        if (process.browser) {
            return window?.localStorage?.getItem("mx-filter") || "";
        }

        return "";
    });
    const router = useRouter();
    const auth = useAuth();
    const { status, error, data } = useFetch<UserExercise[]>(
        `${API_URL}/api/v1/userexercise${
            filterCategory !== "" ? `?category=${filterCategory}` : ``
        }`,
        "GET",
        [auth, filterCategory]
    );

    const handleFilterChange = (category) => {
        setFilterCategory(category);
        localStorage.setItem("mx-filter", category);
    };

    console.log(auth);
    console.log(data);

    if (auth.error) {
        router.push("/login");
    }

    if (auth.user) {
        return (
            <div>
                <Head>
                    <title>Exercises</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Layout>
                    <CreateExercise
                        close={() => {
                            setOpenCreate(false);
                        }}
                        isOpen={openCreate}
                    />
                    <FilterMenu
                        close={() => {
                            setOpenFilterMenu(false);
                        }}
                        isOpen={openFilterMenu}
                        setFilter={handleFilterChange}
                        results={data?.length}
                        filter={filterCategory}
                    />
                    <div className="max-w-7xl mx-auto px-4 mb-40">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl md:text-4xl text-headline font-headline my-3">
                                Meine Übungen
                            </h1>
                            <div
                                onClick={() => setOpenFilterMenu(true)}
                                className="cursor-pointer"
                            >
                                <svg
                                    width="20"
                                    height="19"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.09157 15.5347H0.89039C0.417244 15.5347 0.0332418 15.1507 0.0332418 14.6776C0.0332418 14.2044 0.417244 13.8204 0.89039 13.8204H8.09157C8.56472 13.8204 8.94872 14.2044 8.94872 14.6776C8.94872 15.1507 8.56472 15.5347 8.09157 15.5347Z"
                                        fill={
                                            filterCategory !== ""
                                                ? "#7668CB"
                                                : "white"
                                        }
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M18.504 4.45763H11.3039C10.8308 4.45763 10.4468 4.07362 10.4468 3.60048C10.4468 3.12733 10.8308 2.74333 11.3039 2.74333H18.504C18.9771 2.74333 19.3611 3.12733 19.3611 3.60048C19.3611 4.07362 18.9771 4.45763 18.504 4.45763Z"
                                        fill={
                                            filterCategory !== ""
                                                ? "#7668CB"
                                                : "white"
                                        }
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3.55749 1.7143C2.54148 1.7143 1.71405 2.53259 1.71405 3.53945C1.71405 4.54517 2.54148 5.36232 3.55749 5.36232C4.57464 5.36232 5.40093 4.54517 5.40093 3.53945C5.40093 2.53259 4.57464 1.7143 3.55749 1.7143ZM3.55749 7.07661C1.59634 7.07661 -0.000244141 5.49032 -0.000244141 3.53945C-0.000244141 1.58858 1.59634 0 3.55749 0C5.51979 0 7.11523 1.58858 7.11523 3.53945C7.11523 5.49032 5.51979 7.07661 3.55749 7.07661Z"
                                        fill={
                                            filterCategory !== ""
                                                ? "#7668CB"
                                                : "white"
                                        }
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16.4432 12.8092C15.426 12.8092 14.5986 13.6275 14.5986 14.6332C14.5986 15.6401 15.426 16.4572 16.4432 16.4572C17.4592 16.4572 18.2855 15.6401 18.2855 14.6332C18.2855 13.6275 17.4592 12.8092 16.4432 12.8092ZM16.4432 18.1715C14.4809 18.1715 12.8843 16.5841 12.8843 14.6332C12.8843 12.6824 14.4809 11.0949 16.4432 11.0949C18.4043 11.0949 19.9998 12.6824 19.9998 14.6332C19.9998 16.5841 18.4043 18.1715 16.4432 18.1715Z"
                                        fill={
                                            filterCategory !== ""
                                                ? "#7668CB"
                                                : "white"
                                        }
                                    />
                                </svg>
                            </div>
                        </div>
                        <div
                            onClick={() => setOpenCreate(true)}
                            className="fixed w-14 h-14 z-50 rounded-full bottom-16  right-4 md:right-12 bg-primary flex items-center justify-center cursor-pointer"
                        >
                            <button className="font-headline text-headline text-xl">
                                +
                            </button>
                        </div>
                        <div>
                            {data ? (
                                <div>
                                    {data.length > 0 ? (
                                        <div>
                                            {data.map((d) => {
                                                return (
                                                    <div
                                                        key={d.id}
                                                        className="cursor-pointer px-3 py-3 bg-bgHighlight rounded-md mb-2"
                                                    >
                                                        <Link
                                                            href={`/exercises/${d.id}`}
                                                        >
                                                            <div className="flex items-center">
                                                                <div className="mr-4">
                                                                    <svg
                                                                        width="27"
                                                                        height="14"
                                                                        viewBox="0 0 27 14"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M8.27282 1H5.091C4.91017 1 4.73675 1.07183 4.60888 1.1997C4.48101 1.32757 4.40918 1.50099 4.40918 1.68182V11.6818C4.40918 11.7714 4.42682 11.86 4.46108 11.9427C4.49534 12.0255 4.54557 12.1006 4.60888 12.1639C4.67219 12.2272 4.74736 12.2775 4.83008 12.3117C4.9128 12.346 5.00146 12.3636 5.091 12.3636H8.27282C8.36235 12.3636 8.45101 12.346 8.53374 12.3117C8.61646 12.2775 8.69162 12.2272 8.75493 12.1639C8.81825 12.1006 8.86847 12.0255 8.90273 11.9427C8.937 11.86 8.95463 11.7714 8.95463 11.6818V1.68182C8.95463 1.50099 8.8828 1.32757 8.75493 1.1997C8.62707 1.07183 8.45365 1 8.27282 1V1Z"
                                                                            stroke="white"
                                                                            stroke-width="1.5"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                        />
                                                                        <path
                                                                            d="M21.909 1H18.7272C18.5464 1 18.373 1.07183 18.2451 1.1997C18.1172 1.32757 18.0454 1.50099 18.0454 1.68182V11.6818C18.0454 11.7714 18.063 11.86 18.0973 11.9427C18.1316 12.0255 18.1818 12.1006 18.2451 12.1639C18.3084 12.2272 18.3836 12.2775 18.4663 12.3117C18.549 12.346 18.6377 12.3636 18.7272 12.3636H21.909C21.9986 12.3636 22.0872 12.346 22.17 12.3117C22.2527 12.2775 22.3279 12.2272 22.3912 12.1639C22.4545 12.1006 22.5047 12.0255 22.539 11.9427C22.5732 11.86 22.5909 11.7714 22.5909 11.6818V1.68182C22.5909 1.50099 22.519 1.32757 22.3912 1.1997C22.2633 1.07183 22.0899 1 21.909 1V1Z"
                                                                            stroke="white"
                                                                            stroke-width="1.5"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                        />
                                                                        <path
                                                                            d="M1 9.40919V3.95465C1 3.77382 1.07183 3.60039 1.1997 3.47253C1.32757 3.34466 1.50099 3.27283 1.68182 3.27283H3.72727C3.9081 3.27283 4.08153 3.34466 4.20939 3.47253C4.33726 3.60039 4.40909 3.77382 4.40909 3.95465V9.40919C4.40909 9.59002 4.33726 9.76344 4.20939 9.89131C4.08153 10.0192 3.9081 10.091 3.72727 10.091H1.68182C1.50099 10.091 1.32757 10.0192 1.1997 9.89131C1.07183 9.76344 1 9.59002 1 9.40919V9.40919Z"
                                                                            stroke="white"
                                                                            stroke-width="1.5"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                        />
                                                                        <path
                                                                            d="M25.9999 9.40919V3.95465C25.9999 3.77382 25.9281 3.60039 25.8002 3.47253C25.6723 3.34466 25.4989 3.27283 25.3181 3.27283H23.2726C23.0918 3.27283 22.9184 3.34466 22.7905 3.47253C22.6627 3.60039 22.5908 3.77382 22.5908 3.95465V9.40919C22.5908 9.59002 22.6627 9.76344 22.7905 9.89131C22.9184 10.0192 23.0918 10.091 23.2726 10.091H25.3181C25.4989 10.091 25.6723 10.0192 25.8002 9.89131C25.9281 9.76344 25.9999 9.59002 25.9999 9.40919V9.40919Z"
                                                                            stroke="white"
                                                                            stroke-width="1.5"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                        />
                                                                        <path
                                                                            d="M8.95459 6.68176H18.0455"
                                                                            stroke="white"
                                                                            stroke-width="1.5"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <p className="text-headline text-sm font-text font-semibold">
                                                                        {
                                                                            d
                                                                                .exercise
                                                                                .name
                                                                        }
                                                                    </p>
                                                                    <p className="text-primary font-text  text-xs">
                                                                        {
                                                                            d
                                                                                .exercise
                                                                                .exerciseCategory
                                                                                .name
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        <div>
                                            {filterCategory !== "" ? (
                                                <p className="text-sm">
                                                    Keine Übungen in dieser
                                                    Kategorie angelegt. Lege
                                                    jetzt eine Übung an!
                                                </p>
                                            ) : (
                                                <p className="text-sm">
                                                    Noch keine Übungen angelegt.
                                                    Lege jetzt eine Übung an!
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="flex justify-center my-4">
                                    <Spinner />
                                </div>
                            )}
                        </div>
                    </div>
                </Layout>
            </div>
        );
    }

    return (
        <div className="flex justify-center my-4">
            <Spinner />
        </div>
    );
}
