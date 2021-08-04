import React from "react";

interface InputProps {
    className?: string;
    placeHolder: string;
    type: string;
    required: boolean;
    handleChange: any;
    name: string;
    value: string | number;
    min?: number;
}

const Input: React.FC<InputProps> = ({
    className,
    placeHolder,
    type,
    required,
    handleChange,
    name,
    value,
    min,
}): JSX.Element => {
    return (
        <input
            className={
                className
                    ? className
                    : "w-full rounded-md bg-bgHighlight text-headline px-2 py-3 mb-3"
            }
            placeholder={placeHolder}
            type={type}
            required={required ? true : false}
            onChange={handleChange}
            name={name}
            value={value}
            min={min ? min : ""}
        />
    );
};
export default Input;
