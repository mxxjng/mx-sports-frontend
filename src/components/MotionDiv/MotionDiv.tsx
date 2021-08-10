import { motion, AnimatePresence, MotionProps } from "framer-motion";
import { ReactNode } from "react";

type MotionDivProps = MotionProps & {
    isOpen: boolean;
    children: ReactNode;
    className?: string;
};

const MotionDiv: React.FC<MotionDivProps> = ({
    isOpen,
    children,
    className = "",
    ...props
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div className={className} {...props}>
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};
export default MotionDiv;
