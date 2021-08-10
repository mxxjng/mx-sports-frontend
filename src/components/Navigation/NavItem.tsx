import Link from "next/link";
import { NavItemInterface } from "./Navigation";

interface NavItemProps extends NavItemInterface {
    routerPath: string;
}

const NavItem: React.FC<NavItemProps> = ({ routerPath, link, text }) => {
    return (
        <div
            className={`${
                routerPath === link && "border-b-2 border-primary"
            } p-2`}
        >
            <Link href={link}>{text}</Link>
        </div>
    );
};
export default NavItem;
