"use client";
import { useEffect } from "react";
import { tsParticles } from "tsparticles-engine";
import { motion } from "framer-motion";
import Image from "next/image";

declare global {
    interface Window {
        tsParticles: typeof tsParticles;
    }
}

export default function Hero() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "https://cdn.jsdelivr.net/npm/tsparticles@2.11.1/tsparticles.bundle.min.js";
        script.async = true;
        script.onload = () => {
            window.tsParticles.load("tsparticles", {
                fullScreen: false,
                background: { color: "transparent" },
                particles: {
                    number: { value: 200 },
                    color: { value: ["#ffffff", "#f0abfc", "#a78bfa", "#e879f9"] },
                    shape: { type: "circle" },
                    size: { value: { min: 1.5, max: 4.5 }, random: true },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        outModes: { default: "bounce" },
                    },
                    opacity: {
                        value: 0.9,
                        random: true,
                        animation: {
                            enable: true,
                            speed: 0.6,
                            minimumValue: 0.3,
                            sync: false,
                        },
                    },
                    links: {
                        enable: true,
                        distance: 120,
                        color: "#e9d5ff",
                        opacity: 0.6,
                        width: 1.2,
                    },
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "repulse" },
                        onClick: { enable: true, mode: "push" },
                        resize: true,
                    },
                    modes: {
                        repulse: { distance: 140, duration: 0.6 },
                        push: { quantity: 4 },
                    },
                },
            });

        };
        document.body.appendChild(script);
    }, []);

    return (
        <>
            <section
                className="relative min-h-screen flex flex-col items-center justify-center text-center text-white px-4 overflow-hidden"
                style={{
                    backgroundImage: "url('/image/6512217-_1_.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    fontFamily: "'Cormorant Garamond', serif",
                }}
            >
                {/* Particles */}
                <div id="tsparticles" className="absolute inset-0 z-0" />

                {/* Overlay */}
                <div className="absolute inset-0 z-0 bg-black/60 transition-all duration-1000 ease-in-out" />

                {/* Nội dung chính */}
                <div className="relative z-10 max-w-3xl space-y-6 animate-fadeIn">
                    <h1 className="text-6xl md:text-7xl font-bold tracking-wide text-white drop-shadow-[0_0_40px_rgba(244,114,182,0.85)]">
                        LenLaverna
                    </h1>
                    <p className="text-xl md:text-2xl text-violet-100 leading-relaxed drop-shadow">
                        Hãy để những dấu hiệu dẫn lối cho tâm hồn bạn.<br />
                        Len Laverna giúp bạn khám phá điều huyền bí qua Tarot & Chiêm tinh.
                    </p>
                    <button className="glow-button">
                        Đặt lịch xem bài
                    </button>
                </div>
            </section>

            <section className="about-section bg-black/60 text-white md:px-16 py-16">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Hình minh họa mặt trăng */}
                    <motion.div
                        className="flex justify-center md:justify-start"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/image/3fbf8c25-f386-455f-84fb-5e9438d7ac65-_3__optimized-_1_.webp"
                            alt="Pha mặt trăng"
                            width={400}
                            height={400}
                            className="w-full max-w-md rounded-2xl shadow-2xl floating-image"
                        />
                    </motion.div>

                    {/* Nội dung mô tả */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-300">
                            Trải nghiệm bói bài tâm linh
                        </h2>
                        <p className="text-lg text-gray-200 leading-relaxed mb-6">
                            Len Laverna mang đến cho bạn những trải bài Tarot, chiêm tinh và nghi thức tâm linh, giúp soi sáng những khúc mắc trong tâm trí bạn.
                            Dù là tình yêu, sự nghiệp hay hành trình bản thân – các lá bài sẽ là ngọn đèn dẫn lối.
                        </p>
                        <motion.button
                            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Xem các gói dịch vụ
                        </motion.button>
                    </motion.div>

                </div>
            </section>

            {/* CSS Animation và Glow Button */}
            <style jsx>{`
                @keyframes fadeIn {
                    0% {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeInUp {
                    0% {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 1.2s ease-in-out forwards;
                }

                .animate-fadeInUp {
                    animation: fadeInUp 1.2s ease-in-out forwards;
                }

                .glow-button {
                    background: radial-gradient(circle at 30% 30%, #d946ef, #7e22ce);
                    color: white;
                    padding: 0.75rem 2rem;
                    border-radius: 9999px;
                    font-size: 1.125rem;
                    font-weight: 600;
                    box-shadow: 0 0 20px rgba(168, 85, 247, 0.6);
                    transition: all 0.3s ease;
                    backdrop-filter: blur(5px);
                }

                .glow-button:hover {
                    box-shadow: 0 0 40px rgba(244, 114, 182, 0.9);
                    transform: scale(1.07);
                }

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

                .floating-image:hover {
                    animation: float 4s ease-in-out infinite, spinSlow 20s linear infinite;
                }
            `}</style>
        </>
    );
}
