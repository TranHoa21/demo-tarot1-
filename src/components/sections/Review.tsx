// components/sections/ReviewSection.tsx
"use client";
import { motion } from "framer-motion";

const reviews = [
    {
        name: "Lan Chi",
        content:
            "Trải bài của Len Laverna khiến mình nổi da gà. Mọi thứ được nói ra như thể đã thấy được linh hồn mình vậy.",
        avatar: "/image/avatar1.webp",
    },
    {
        name: "Thành Đạt",
        content:
            "Chiêm tinh và lời khuyên rất chuẩn xác. Nhờ đó mình tìm lại được định hướng trong công việc.",
        avatar: "/image/avatar2.webp",
    },
    {
        name: "Minh Anh",
        content:
            "Lần đầu tiên mình cảm thấy được lắng nghe sâu như vậy. Tarot ở đây không chỉ là bói, mà là chữa lành.",
        avatar: "/image/avatar3.webp",
    },
];

export default function ReviewSection() {
    return (
        <section className="w-full bg-black/60 from-black via-purple-950 to-black py-20 text-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <motion.h2
                    className="text-4xl font-bold mb-12 text-purple-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Khách hàng nói gì về Len Laverna?
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            className="bg-black/50 border border-purple-700 rounded-2xl p-6 shadow-lg backdrop-blur-md hover:shadow-purple-500/30 transition duration-300"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-16 h-16 rounded-full border-2 border-purple-400 shadow-md"
                                />
                                <p className="italic text-gray-300 leading-relaxed">{review.content}</p>
                                <h4 className="text-purple-400 font-semibold">{review.name}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
