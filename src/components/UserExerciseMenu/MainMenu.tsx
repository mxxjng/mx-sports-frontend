import { motion, AnimatePresence } from "framer-motion";

const MainMenu = ({ activeMenu, setActiveMenu }) => {
    return (
        <AnimatePresence>
            {activeMenu === "main" && (
                <motion.div
                    initial={{ opacity: 0, translateX: -200 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    exit={{ opacity: 0, translateX: -200 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 left-0 w-full"
                >
                    <div></div>
                    <div
                        className="flex items-center pr-2 py-3 rounded-md cursor-pointer"
                        onClick={() => setActiveMenu("oneRepMax")}
                    >
                        <div className="relative h-8 w-8  rounded-full mr-2">
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
                                    d="M9.99976 20C15.5226 20 19.9998 15.5225 19.9998 10C19.9998 4.47745 15.5226 0 9.99976 0C4.47754 0 -0.000244141 4.47779 -0.000244141 10C-0.000244141 15.5222 4.47754 20 9.99976 20ZM9.99976 18.5C5.30597 18.5 1.49976 14.6938 1.49976 10C1.49976 5.30621 5.30597 1.5 9.99976 1.5C14.6942 1.5 18.4998 5.30586 18.4998 10C18.4998 14.6941 14.6942 18.5 9.99976 18.5ZM13.0234 12.0443C13.3166 12.2628 13.7333 12.2395 14.0001 11.9738C14.2937 11.6815 14.2947 11.2066 14.0024 10.9131L10.5314 7.42711L10.4472 7.35412C10.1531 7.13513 9.73499 7.15946 9.46848 7.42711L5.99748 10.9131L5.92505 10.9974C5.70783 11.2915 5.73293 11.7081 5.99977 11.9738L6.08405 12.0462C6.37813 12.2634 6.79474 12.2383 7.06043 11.9715L10.001 9.02L12.9395 11.9715L13.0234 12.0443Z"
                                    fill="white"
                                />
                            </svg>
                        </div>

                        <button className="text-headline font-text font-semibold">
                            Maximalversuch hinzufügen
                        </button>
                    </div>
                    <div className="flex items-center pr-2 py-3 rounded-md cursor-pointer">
                        <div className="relative h-8 w-8  rounded-full mr-2">
                            <svg
                                width="22"
                                height="11"
                                viewBox="0 0 22 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute align-avatar"
                            >
                                <path
                                    d="M6.8182 1H4.27275C4.12809 1 3.98935 1.05747 3.88705 1.15976C3.78476 1.26205 3.72729 1.40079 3.72729 1.54545V9.54545C3.72729 9.61708 3.7414 9.68801 3.76882 9.75419C3.79623 9.82037 3.8364 9.8805 3.88705 9.93115C3.93771 9.9818 3.99784 10.022 4.06401 10.0494C4.13019 10.0768 4.20112 10.0909 4.27275 10.0909H6.8182C6.88983 10.0909 6.96076 10.0768 7.02694 10.0494C7.09312 10.022 7.15325 9.9818 7.2039 9.93115C7.25455 9.8805 7.29473 9.82037 7.32214 9.75419C7.34955 9.68801 7.36366 9.61708 7.36366 9.54545V1.54545C7.36366 1.40079 7.30619 1.26205 7.2039 1.15976C7.10161 1.05747 6.96287 1 6.8182 1V1Z"
                                    stroke="white"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M17.7273 1H15.1818C15.0371 1 14.8984 1.05747 14.7961 1.15976C14.6938 1.26205 14.6364 1.40079 14.6364 1.54545V9.54545C14.6364 9.61708 14.6505 9.68801 14.6779 9.75419C14.7053 9.82037 14.7455 9.8805 14.7961 9.93115C14.8468 9.9818 14.9069 10.022 14.9731 10.0494C15.0392 10.0768 15.1102 10.0909 15.1818 10.0909H17.7273C17.7989 10.0909 17.8698 10.0768 17.936 10.0494C18.0022 10.022 18.0623 9.9818 18.113 9.93115C18.1636 9.8805 18.2038 9.82037 18.2312 9.75419C18.2586 9.68801 18.2727 9.61708 18.2727 9.54545V1.54545C18.2727 1.40079 18.2152 1.26205 18.113 1.15976C18.0107 1.05747 17.8719 1 17.7273 1V1Z"
                                    stroke="white"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M1 7.72733V3.36369C1 3.21903 1.05747 3.08029 1.15976 2.978C1.26205 2.8757 1.40079 2.81824 1.54545 2.81824H3.18182C3.32648 2.81824 3.46522 2.8757 3.56751 2.978C3.66981 3.08029 3.72727 3.21903 3.72727 3.36369V7.72733C3.72727 7.87199 3.66981 8.01073 3.56751 8.11302C3.46522 8.21532 3.32648 8.27278 3.18182 8.27278H1.54545C1.40079 8.27278 1.26205 8.21532 1.15976 8.11302C1.05747 8.01073 1 7.87199 1 7.72733V7.72733Z"
                                    stroke="white"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M21 7.72733V3.36369C21 3.21903 20.9425 3.08029 20.8402 2.978C20.7379 2.8757 20.5992 2.81824 20.4545 2.81824H18.8182C18.6735 2.81824 18.5348 2.8757 18.4325 2.978C18.3302 3.08029 18.2727 3.21903 18.2727 3.36369V7.72733C18.2727 7.87199 18.3302 8.01073 18.4325 8.11302C18.5348 8.21532 18.6735 8.27278 18.8182 8.27278H20.4545C20.5992 8.27278 20.7379 8.21532 20.8402 8.11302C20.9425 8.01073 21 7.87199 21 7.72733V7.72733Z"
                                    stroke="white"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M7.36365 5.54541H14.6364"
                                    stroke="white"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                        <button
                            onClick={() => setActiveMenu("training")}
                            className="text-headline font-text font-semibold"
                        >
                            Trainingseinheit hinzufügen
                        </button>
                    </div>
                    <div className="flex items-center pr-2 py-3 rounded-md cursor-pointer">
                        <div className="relative h-8 w-8  rounded-full mr-2">
                            <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute align-avatar"
                            >
                                <path
                                    d="M2.11701 11.8504L12.3712 1.59532C12.7763 1.20765 13.3171 0.994001 13.8778 1.00013C14.4385 1.00626 14.9745 1.23167 15.3711 1.6281C15.7676 2.02454 15.9932 2.56048 15.9995 3.12116C16.0057 3.68185 15.7922 4.22271 15.4047 4.62793L5.14878 14.883C4.91482 15.117 4.61684 15.2765 4.29238 15.3414L1 16L1.65864 12.7068C1.72354 12.3823 1.88303 12.0843 2.11701 11.8504V11.8504Z"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M10.6366 3.84949L13.1505 6.36339"
                                    stroke="white"
                                    stroke-width="2"
                                />
                            </svg>
                        </div>

                        <button
                            className="text-headline font-text font-semibold"
                            onClick={() => setActiveMenu("comment")}
                        >
                            Übungsanmerkung hinzufügen
                        </button>
                    </div>
                    <div className="flex items-center pr-2 py-3 rounded-md cursor-pointer">
                        <div className="relative h-8 w-8  rounded-full mr-2">
                            <svg
                                width="15"
                                height="16"
                                viewBox="0 0 15 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute align-avatar"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.39738 16.0002C6.31337 16.0002 5.25655 15.9882 4.21094 15.9666C2.87332 15.9402 1.9477 15.073 1.7965 13.7034C1.5445 11.4314 1.11329 6.07608 1.10929 6.02248C1.08209 5.69208 1.32849 5.40247 1.6589 5.37607C1.9845 5.36727 2.27891 5.59607 2.30531 5.92568C2.30931 5.98008 2.73972 11.317 2.98932 13.5714C3.07492 14.3498 3.49493 14.7514 4.23574 14.7666C6.23577 14.809 8.2766 14.8114 10.4766 14.7714C11.2638 14.7562 11.6894 14.3626 11.7775 13.5658C12.0255 11.3306 12.4575 5.98008 12.4623 5.92568C12.4887 5.59607 12.7807 5.36567 13.1079 5.37607C13.4383 5.40327 13.6847 5.69208 13.6583 6.02248C13.6535 6.07688 13.2199 11.4458 12.9703 13.6978C12.8151 15.0954 11.8919 15.9458 10.4982 15.9714C9.43182 15.9898 8.403 16.0002 7.39738 16.0002"
                                    fill="white"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M14.1666 3.99152H0.600009C0.268804 3.99152 0 3.72272 0 3.39151C0 3.06031 0.268804 2.7915 0.600009 2.7915H14.1666C14.4978 2.7915 14.7666 3.06031 14.7666 3.39151C14.7666 3.72272 14.4978 3.99152 14.1666 3.99152"
                                    fill="white"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.5525 3.9915C10.6421 3.9915 9.85166 3.34269 9.67246 2.44988L9.47805 1.47707C9.43725 1.32906 9.26845 1.20026 9.07645 1.20026H5.69C5.498 1.20026 5.32919 1.32906 5.28039 1.51387L5.09399 2.44988C4.91559 3.34269 4.12438 3.9915 3.21396 3.9915C2.88276 3.9915 2.61395 3.7227 2.61395 3.39149C2.61395 3.06029 2.88276 2.79149 3.21396 2.79149C3.55477 2.79149 3.85077 2.54828 3.91797 2.21388L4.11238 1.24106C4.30998 0.495452 4.95559 0.000244141 5.69 0.000244141H9.07645C9.81086 0.000244141 10.4565 0.495452 10.6461 1.20506L10.8493 2.21388C10.9157 2.54828 11.2117 2.79149 11.5525 2.79149C11.8837 2.79149 12.1525 3.06029 12.1525 3.39149C12.1525 3.7227 11.8837 3.9915 11.5525 3.9915"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <button
                            className="text-danger font-text font-semibold"
                            onClick={() => setActiveMenu("delete")}
                        >
                            Übung löschen
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
export default MainMenu;
