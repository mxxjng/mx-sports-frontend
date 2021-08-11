import { colors } from "../../../utils/styles";

const ExerciseIcon = ({ isActive }) => {
    return (
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
                    stroke={isActive ? colors.primary : colors.text}
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M21.909 1H18.7272C18.5464 1 18.373 1.07183 18.2451 1.1997C18.1172 1.32757 18.0454 1.50099 18.0454 1.68182V11.6818C18.0454 11.7714 18.063 11.86 18.0973 11.9427C18.1316 12.0255 18.1818 12.1006 18.2451 12.1639C18.3084 12.2272 18.3836 12.2775 18.4663 12.3117C18.549 12.346 18.6377 12.3636 18.7272 12.3636H21.909C21.9986 12.3636 22.0872 12.346 22.17 12.3117C22.2527 12.2775 22.3279 12.2272 22.3912 12.1639C22.4545 12.1006 22.5047 12.0255 22.539 11.9427C22.5732 11.86 22.5909 11.7714 22.5909 11.6818V1.68182C22.5909 1.50099 22.519 1.32757 22.3912 1.1997C22.2633 1.07183 22.0899 1 21.909 1V1Z"
                    stroke={isActive ? colors.primary : colors.text}
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M1 9.40919V3.95465C1 3.77382 1.07183 3.60039 1.1997 3.47253C1.32757 3.34466 1.50099 3.27283 1.68182 3.27283H3.72727C3.9081 3.27283 4.08153 3.34466 4.20939 3.47253C4.33726 3.60039 4.40909 3.77382 4.40909 3.95465V9.40919C4.40909 9.59002 4.33726 9.76344 4.20939 9.89131C4.08153 10.0192 3.9081 10.091 3.72727 10.091H1.68182C1.50099 10.091 1.32757 10.0192 1.1997 9.89131C1.07183 9.76344 1 9.59002 1 9.40919V9.40919Z"
                    stroke={isActive ? colors.primary : colors.text}
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M25.9999 9.40919V3.95465C25.9999 3.77382 25.9281 3.60039 25.8002 3.47253C25.6723 3.34466 25.4989 3.27283 25.3181 3.27283H23.2726C23.0918 3.27283 22.9184 3.34466 22.7905 3.47253C22.6627 3.60039 22.5908 3.77382 22.5908 3.95465V9.40919C22.5908 9.59002 22.6627 9.76344 22.7905 9.89131C22.9184 10.0192 23.0918 10.091 23.2726 10.091H25.3181C25.4989 10.091 25.6723 10.0192 25.8002 9.89131C25.9281 9.76344 25.9999 9.59002 25.9999 9.40919V9.40919Z"
                    stroke={isActive ? colors.primary : colors.text}
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M8.95459 6.68176H18.0455"
                    stroke={isActive ? colors.primary : colors.text}
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
    );
};
export default ExerciseIcon;