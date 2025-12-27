"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface ImageGalleryProps {
	images: string[];
	title: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title }) => {
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	const goToPrevious = () => {
		setSelectedImageIndex((prev) =>
			prev === 0 ? images.length - 1 : prev - 1
		);
	};

	const goToNext = () => {
		setSelectedImageIndex((prev) =>
			prev === images.length - 1 ? 0 : prev + 1
		);
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "ArrowLeft") goToPrevious();
		if (e.key === "ArrowRight") goToNext();
		if (e.key === "Escape") setIsOpen(false);
	};

	if (images.length === 0) return null;

	return (
		<div className="space-y-4">
			<h3 className="text-xl font-semibold">Project Gallery</h3>

			{/* Thumbnail Grid */}
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{images.map((image, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.3, delay: index * 0.1 }}
						className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
						onClick={() => {
							setSelectedImageIndex(index);
							setIsOpen(true);
						}}
					>
						<Image
							src={image}
							alt={`${title} - Image ${index + 1}`}
							fill
							className="object-cover group-hover:scale-105 transition-transform duration-300"
						/>
						<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
							<div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<span className="text-black text-sm font-medium">+</span>
							</div>
						</div>
					</motion.div>
				))}
			</div>

			{/* Lightbox Modal */}
			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent
					className="max-w-7xl w-full h-[90vh] p-0 border-0 bg-black/95"
					onKeyDown={handleKeyDown}
				>
					<div className="sr-only">
						<DialogTitle>{title}</DialogTitle>
					</div>
					<div className="relative w-full h-full flex items-center justify-center">
						{/* Close Button */}
						<Button
							variant="ghost"
							size="icon"
							className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
							onClick={() => setIsOpen(false)}
						>
							<XIcon className="w-6 h-6" />
						</Button>

						{/* Navigation Arrows */}
						{images.length > 1 && (
							<>
								<Button
									variant="ghost"
									size="icon"
									className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
									onClick={goToPrevious}
								>
									<ChevronLeftIcon className="w-8 h-8" />
								</Button>
								<Button
									variant="ghost"
									size="icon"
									className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
									onClick={goToNext}
								>
									<ChevronRightIcon className="w-8 h-8" />
								</Button>
							</>
						)}

						{/* Main Image */}
						<div className="relative w-full h-full p-8">
							<Image
								src={images[selectedImageIndex]}
								alt={`${title} - Image ${selectedImageIndex + 1}`}
								fill
								className="object-contain"
								priority
							/>
						</div>

						{/* Image Counter */}
						{images.length > 1 && (
							<div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
								{selectedImageIndex + 1} / {images.length}
							</div>
						)}

						{/* Thumbnail Strip */}
						{images.length > 1 && (
							<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 p-2 rounded-lg">
								{images.map((image, index) => (
									<button
										key={index}
										className={`w-12 h-8 relative overflow-hidden rounded border-2 transition-all duration-200 ${
											index === selectedImageIndex
												? "border-white scale-110"
												: "border-transparent hover:border-white/50"
										}`}
										onClick={() => setSelectedImageIndex(index)}
									>
										<Image
											src={image}
											alt={`Thumbnail ${index + 1}`}
											fill
											className="object-cover"
										/>
									</button>
								))}
							</div>
						)}
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default ImageGallery;
