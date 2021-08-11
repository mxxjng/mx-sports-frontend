const sizes = {
    small: "w-10 h-10 text-xs",
    medium: "w-12 h-12 text-md",
    large: "w-16 h-16 text-lg",
};

export interface AvatarProps {
    initials: string;
    size?: keyof typeof sizes;
}

const Avatar: React.FC<AvatarProps> = ({ initials, size = "small" }) => {
    return (
        <div
            className={`${sizes[size]} bg-bgHighlight rounded-full p-2 relative`}
        >
            <span className="font-headline text-headline absolute align-avatar whitespace-nowrap">
                {initials.toUpperCase()}
            </span>
        </div>
    );
};
export default Avatar;
