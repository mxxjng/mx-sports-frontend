import { colors } from "../../../utils/styles";

const AdminIcon = ({ isActive }) => {
    return (
        <div className="relative w-8 h-8 mx-auto">
            <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                className="absolute align-avatar"
                fill={isActive ? colors.primary : colors.text}
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
                        fill={isActive ? colors.primary : colors.text}
                    />
                </mask>
                <g mask="url(#mask0)">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.9727 14.0877C3.68382 14.0877 1.50969 14.8245 1.50969 16.2789C1.50969 17.7464 3.68382 18.4903 7.9727 18.4903C12.2606 18.4903 14.4337 17.7535 14.4337 16.299C14.4337 14.8315 12.2606 14.0877 7.9727 14.0877M7.9727 20.0001C6.00088 20.0001 -0.00012207 20.0001 -0.00012207 16.2789C-0.00012207 12.9614 4.55046 12.5779 7.9727 12.5779C9.94452 12.5779 15.9435 12.5779 15.9435 16.2991C15.9435 19.6166 11.3939 20.0001 7.9727 20.0001"
                        fill={isActive ? colors.primary : colors.text}
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
                        fill={isActive ? colors.primary : colors.text}
                    />
                </mask>
                <g mask="url(#mask1)">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.97268 1.43707C5.81768 1.43707 4.06428 3.18947 4.06428 5.34447C4.05723 7.49243 5.79755 9.24382 7.9435 9.25187L7.97268 9.97054V9.25187C10.1267 9.25187 11.8791 7.49847 11.8791 5.34447C11.8791 3.18947 10.1267 1.43707 7.97268 1.43707M7.97273 10.6882H7.94052C4.99941 10.6792 2.61692 8.28058 2.62698 5.34148C2.62698 2.39734 5.02457 -0.000244141 7.97273 -0.000244141C10.9199 -0.000244141 13.3165 2.39734 13.3165 5.3445C13.3165 8.29165 10.9199 10.6882 7.97273 10.6882"
                        fill={isActive ? colors.primary : colors.text}
                    />
                </g>
            </svg>
        </div>
    );
};
export default AdminIcon;
