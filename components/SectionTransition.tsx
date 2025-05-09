"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionTransitionProps {
    children: ReactNode;
}

const SectionTransition = ({ children }: SectionTransitionProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: "some" }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default SectionTransition;
