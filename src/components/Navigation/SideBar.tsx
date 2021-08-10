import LogoutIcon from "../Icons/NavIcons/LogoutIcon";
import MotionDiv from "../MotionDiv/MotionDiv";

const SideBar = ({ isOpen, userName, logout }) => {
    return (
        <div>
            <MotionDiv
                isOpen={isOpen}
                className="fixed top-0 left-0 h-full w-10/12 bg-bg p-4 z-highest"
                initial={{ translateX: -200 }}
                animate={{ translateX: 0 }}
                exit={{ translateX: -200 }}
                transition={{ duration: 0.3 }}
            >
                <div>
                    <h2 className="text-headline font-headline text-xl">
                        {userName}
                    </h2>

                    <div className="py-2">
                        <div onClick={logout} className="flex items-center">
                            <LogoutIcon />
                            <p className={``}>Ausloggen</p>
                        </div>
                    </div>
                </div>
            </MotionDiv>
        </div>
    );
};
export default SideBar;
