import React, {
    ButtonHTMLAttributes,
    DetailedHTMLProps,
    ReactNode,
} from "react";

import { SpinnerSmall } from "./SpinnerSmall";

const sizeClassNames = {
    big: "py-2 px-6 text-sm rounded-md",
    small: "px-2 py-1 text-sm rounded-md",
    tiny: "px-1 text-sm rounded-md",
};

const colorClassNames = {
    primary: "bg-primary",
    secondary: "border border-primary",
    dangerPrimary: "bg-danger",
    dangerSecondary: "border border-danger",
};

export type ButtonProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    size?: keyof typeof sizeClassNames;
    color?: keyof typeof colorClassNames;
    icon?: ReactNode;
    loading?: boolean;
    className?: string;
};

const Button: React.FC<ButtonProps> = ({
    children,
    color = "primary",
    size = "big",
    className = "",
    disabled,
    icon,
    loading,
    ...props
}) => {
    return (
        <button
            disabled={disabled || loading}
            className={`w-full md:w-auto outline-none mb-2 text-headline px-4 py-2 rounded-md 
            font-headline ${colorClassNames[color]} ${sizeClassNames[size]}
            whitespace-nowrap flex items-center justify-center ${className}`}
            {...props}
        >
            <span className={loading ? "opacity-0" : `flex items-center`}>
                {icon && <span className={`mr-2 items-center`}>{icon}</span>}
                {children}
            </span>
            {loading && (
                <span className={`absolute`}>
                    <SpinnerSmall />
                </span>
            )}
        </button>
    );
};
export default Button;
