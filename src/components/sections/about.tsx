"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <>
            <section className="about-section w-full py-16 sm:py-20 bg-black/60 text-white px-4 sm:px-6 md:px-10">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-12">

                    {/* Bên phải: Nội dung mô tả */}
                    <motion.div
                        className="flex-1 text-center md:text-left space-y-4 sm:space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400">
                            Khám phá bản thân qua chiêm tinh và Tarot
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                            Len Laverna giúp bạn lắng nghe tiếng gọi của vũ trụ. Từ những trải bài Tarot sâu sắc
                            đến các biểu đồ chiêm tinh cá nhân hóa, chúng tôi giúp bạn kết nối với linh hồn,
                            định hướng tương lai, và thấu hiểu chính mình.
                        </p>
                        <p className="text-xs sm:text-sm md:text-base text-gray-400">
                            Dù bạn đang tìm câu trả lời, chữa lành vết thương quá khứ, hay chỉ đơn giản là muốn khám phá,
                            chúng tôi luôn đồng hành cùng bạn trên hành trình tâm linh này.
                        </p>
                    </motion.div>

                    {/* Bên trái: Hình minh họa */}
                    <motion.div
                        className="flex justify-center md:justify-start w-full sm:w-auto"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="floating-image w-[240px] sm:w-[280px] md:w-[400px] max-w-full">
                            <Image
                                src="/image/1c0ddced-b0ea-4983-888d-445c39c01731.webp"
                                alt="Pha mặt trăng"
                                width={400}
                                height={400}
                                className="rounded-2xl shadow-2xl w-full"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .floating-image {
          animation: float 4s ease-in-out infinite;
          will-change: transform;
          transition: transform 0.3s ease-in-out;
        }

        @media (min-width: 768px) {
          .floating-image:hover {
            animation: float 4s ease-in-out infinite, spinSlow 20s linear infinite;
          }
        }
      `}</style>
        </>
    );
}
