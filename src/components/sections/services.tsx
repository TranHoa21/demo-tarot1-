"use client";
import { motion } from "framer-motion";

export default function Services() {
    return (
        <section className="tarot-cards-section w-full py-16 sm:py-20 bg-black/60 relative text-white overflow-hidden px-4 sm:px-6 md:px-8">
            {/* Nền mờ fog */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/fog.png')] bg-cover bg-no-repeat z-0" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.h2
                    className="text-center text-2xl sm:text-3xl md:text-4xl font-serif tracking-wider text-yellow-300 mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    GÓI DỊCH VỤ TAROT
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 place-items-center">
                    {[
                        {
                            title: "Tarot Cơ Bản",
                            description: "Trải bài 3 lá cho 1 vấn đề cụ thể:\nTình yêu – Công việc – Hướng đi",
                            price: "100.000đ",
                            rotate: "-2deg",
                        },
                        {
                            title: "Chiêm Tinh Cá Nhân",
                            description: "Giải mã bản đồ sao cá nhân:\nSứ mệnh – Tính cách – Tiềm năng",
                            price: "300.000đ",
                            rotate: "1.5deg",
                        },
                        {
                            title: "Gỡ Rối Tâm Linh",
                            description: "Kết hợp Tarot + Chiêm tinh:\nGỡ nút thắt – Hướng chữa lành",
                            price: "500.000đ",
                            rotate: "-1.5deg",
                        },
                    ].map((card, index) => (
                        <motion.div
                            key={index}
                            className={`relative w-[220px] sm:w-[240px] h-[360px] min-h-[360px] bg-gradient-to-b from-[#0f0a14] to-[#1f1c2e] border-[3px] border-yellow-500 rounded-2xl shadow-xl transform hover:-translate-y-2 transition duration-300 hover:rotate-[${card.rotate}] flex flex-col items-center justify-between p-5`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-yellow-300 text-base sm:text-lg font-semibold min-h-[24px]">{card.title}</p>

                            <div className="text-xs sm:text-sm text-gray-300 text-center whitespace-pre-line min-h-[96px]">
                                {card.description}
                            </div>

                            <p className="text-yellow-400 font-bold text-lg sm:text-xl mt-2 min-h-[28px]">
                                {card.price}
                            </p>

                            <button className="mt-4 px-4 py-1 bg-yellow-500 hover:bg-yellow-600 rounded-full text-xs sm:text-sm text-black font-semibold min-h-[32px]">
                                Đặt lịch
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
