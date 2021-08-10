const sizes = {
    small: "w-10 h-10",
    medium: "w-20 h-20",
    large: "w-32 h-32",
};

const Avatar: React.FC<{ initials: string; size?: keyof typeof sizes }> = ({
    initials,
    size = "small",
}) => {
    return (
        <div
            className={`${sizes[size]} bg-bgHighlight rounded-full p-2 relative`}
        >
            <span className="text-xs font-headline text-headline absolute align-avatar whitespace-nowrap">
                {initials}
            </span>
        </div>
    );
};
export default Avatar;
