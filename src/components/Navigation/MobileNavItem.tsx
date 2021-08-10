import Link from "next/link";
import { NavItemInterface } from "./Navigation";

interface MobileNavItemProps extends NavItemInterface {
    isActive: boolean;
    icon: React.ReactNode;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({
    isActive,
    icon,
    text,
    link,
}) => {
    return (
        <div className="text-center">
            <Link href={link}>
                <div>
                    {icon}
                    <p
                        className={`${
                            isActive ? "text-primary" : "text-textColor"
                        } text-xs`}
                    >
                        {text}
                    </p>
                </div>
            </Link>
        </div>
    );
};
export default MobileNavItem;
