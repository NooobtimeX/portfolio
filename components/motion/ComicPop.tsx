"use client";

import { motion } from "framer-motion";
import React from "react";

interface ComicPopProps {
	children: React.ReactNode;
	delay?: number;
	className?: string; // Allow passing classes for positioning etc.
}

const ComicPop: React.FC<ComicPopProps> = ({
	children,
	delay = 0,
	className = "",
}) => {
	return (
		<motion.div
			initial={{ scale: 0.8, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{
				type: "spring",
				stiffness: 260,
				damping: 20,
				delay: delay,
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
};

export default ComicPop;
