"use client";

import { motion } from "framer-motion";

export default function DatLichPage() {
    return (
        <div className="bg-black/60 text-white">
            {/* Hero */}
            <section className="text-center py-16 sm:py-20 px-4 sm:px-6">
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-300 drop-shadow mb-4"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Đặt lịch xem bài
                </motion.h1>
                <motion.p
                    className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Chọn gói dịch vụ bạn mong muốn và để lại thông tin, <span className="text-purple-400">Len Laverna</span> sẽ liên hệ xác nhận lịch hẹn trong thời gian sớm nhất.
                </motion.p>
            </section>

            {/* Form đặt lịch */}
            <section className="max-w-xl mx-auto px-4 py-10 sm:py-16">
                <form className="space-y-6 bg-black/40 border border-purple-800 rounded-2xl p-6 sm:p-8 shadow-lg backdrop-blur">
                    <div>
                        <label className="block text-sm text-purple-300 mb-1">Họ tên</label>
                        <input
                            type="text"
                            required
                            placeholder="Nguyễn Lan Chi..."
                            className="w-full px-4 py-2 rounded-md bg-black/30 border border-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-purple-300 mb-1">Ngày sinh</label>
                        <input
                            type="date"
                            required
                            className="w-full px-4 py-2 rounded-md bg-black/30 border border-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-purple-300 mb-1">Giờ sinh (nếu có)</label>
                        <input
                            type="time"
                            className="w-full px-4 py-2 rounded-md bg-black/30 border border-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-purple-300 mb-1">Chọn dịch vụ</label>
                        <select
                            required
                            className="w-full px-4 py-2 rounded-md bg-black/30 border border-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="">-- Chọn một gói --</option>
                            <option value="tarot">🔮 Tarot Cơ Bản</option>
                            <option value="chiemtinh">🌌 Chiêm Tinh Cá Nhân</option>
                            <option value="go-roi">🧿 Gỡ Rối Tâm Linh</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm text-purple-300 mb-1">Lời nhắn thêm (nếu có)</label>
                        <textarea
                            rows={4}
                            className="w-full px-4 py-2 rounded-md bg-black/30 border border-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Bạn đang quan tâm điều gì? Có điều gì muốn chia sẻ trước khi trải bài không?"
                        />
                    </div>

                    <motion.button
                        type="submit"
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-full transition"
                    >
                        Gửi yêu cầu đặt lịch
                    </motion.button>
                </form>
            </section>

            {/* Gợi ý liên hệ */}
            <section className="text-sm text-gray-400 text-center py-10 px-4 border-t border-purple-800">
                <p>
                    ✨ Nếu không đặt được lịch qua form, bạn có thể liên hệ trực tiếp:
                </p>
                <p className="mt-2">
                    📩{" "}
                    <a
                        href="https://m.me/lenlaverna"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-300 underline"
                    >
                        Fanpage Len Laverna
                    </a>
                </p>
            </section>
        </div>
    );
}
