// src/app/dich-vu/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DịchVụPage() {
    return (
        <div className="bg-black text-white">
            {/* Hero section */}
            <section className="relative py-24 px-6 text-center bg-black/70 backdrop-blur-md">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-purple-300 drop-shadow mb-4"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Dịch vụ Tarot & Chiêm tinh
                </motion.h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Mỗi gói dịch vụ tại <span className="text-purple-400">Len Laverna</span> là một hành trình kết nối với chính mình.
                    Hãy chọn điều bạn cần và để những dấu hiệu dẫn lối cho bạn.
                </p>
            </section>

            {/* Chi tiết dịch vụ */}
            <section className="max-w-5xl mx-auto px-4 py-20 space-y-16">
                {[
                    {
                        title: "🔮 Tarot Cơ Bản",
                        image: "/image/card1.webp",
                        description: `Phù hợp khi bạn có một câu hỏi cụ thể (tình yêu, công việc, hướng đi...)\nTrải bài 3 lá giúp bạn soi chiếu vấn đề và đưa ra hướng đi rõ ràng.`,
                        price: "100.000đ",
                    },
                    {
                        title: "🌌 Chiêm Tinh Cá Nhân",
                        image: "/image/card2.webp",
                        description: `Đọc bản đồ sao cá nhân dựa trên ngày giờ sinh của bạn.\nKhám phá sứ mệnh linh hồn, tiềm năng bẩm sinh và hành trình phát triển cá nhân.`,
                        price: "300.000đ",
                    },
                    {
                        title: "🧿 Gỡ Rối Tâm Linh (Tarot + Chiêm Tinh)",
                        image: "/image/card3.webp",
                        description: `Kết hợp bài Tarot & Chiêm tinh để gỡ các nút thắt sâu trong tâm hồn.\nPhù hợp với những ai đang cảm thấy lạc lối, mệt mỏi hoặc cần được chữa lành.`,
                        price: "500.000đ",
                    },
                ].map((service, index) => (
                    <motion.div
                        key={index}
                        className="bg-black/50 border border-purple-800 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 backdrop-blur-sm shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src={service.image}
                            alt={service.title}
                            width={260}
                            height={360}
                            className="rounded-xl shadow-xl object-cover"
                        />
                        <div className="text-left space-y-4">
                            <h2 className="text-2xl md:text-3xl text-purple-300 font-bold">{service.title}</h2>
                            <p className="text-gray-300 whitespace-pre-line leading-relaxed">{service.description}</p>
                            <p className="text-yellow-400 font-semibold text-lg">Giá: {service.price}</p>
                            <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 text-white rounded-full font-semibold transition">
                                Đặt lịch ngay
                            </button>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* Ghi chú */}
            <section className="bg-black/60 text-sm text-gray-400 text-center py-10 px-4 border-t border-purple-800">
                <p>
                    ✨ Dịch vụ chỉ nhận đặt lịch qua tin nhắn trực tiếp. Hãy chuẩn bị sẵn ngày sinh (và giờ sinh nếu có) để được tư vấn chính xác nhất.
                </p>
                <p className="mt-2">
                    📩 Liên hệ: <a href="https://m.me/lenlaverna" target="_blank" className="text-purple-300 underline">Fanpage Len Laverna</a>
                </p>
            </section>
        </div>
    );
}
