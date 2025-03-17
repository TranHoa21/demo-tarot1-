"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const feedbackImages = [
    "/image/fb1.webp",
    "/image/fb2.webp",
    "/image/fb3.webp",
    "/image/fb4.webp",
    "/image/fb5.webp",
    "/image/fb6.webp",
];

export default function FeedbackPage() {
    return (
        <div className="bg-black/60 text-white min-h-screen py-20 px-4">
            {/* Tiêu đề */}
            <motion.h1
                className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-purple-300 mb-12"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Lời cảm ơn từ khách hàng
            </motion.h1>

            {/* Hình ảnh feedback */}
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 max-w-6xl mx-auto">
                {feedbackImages.map((src, index) => (
                    <motion.div
                        key={index}
                        className="overflow-hidden rounded-xl border border-purple-800 shadow-lg backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src={src}
                            alt={`Feedback ${index + 1}`}
                            width={800}
                            height={800}
                            className="w-full h-auto object-cover rounded-xl"
                            loading="lazy"

                        />
                    </motion.div>
                ))}
            </div>

            {/* Ghi chú nhỏ */}
            <p className="text-sm text-center text-gray-400 mt-12">
                ✨ Cảm ơn bạn đã tin tưởng <span className="text-purple-400">Len Laverna</span>. Mỗi lời nhắn là nguồn động lực và là điều thiêng liêng nhất với mình.
            </p>
        </div>
    );
}
