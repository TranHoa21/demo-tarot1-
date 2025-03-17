'use client'
import { FaFacebookMessenger, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { SiZalo } from 'react-icons/si'
import { motion } from 'framer-motion'

const contactMethods = [
    {
        icon: <FaFacebookMessenger size={36} className="text-[#00B2FF]" />,
        label: 'Messenger',
        link: 'https://m.me/yourfacebookpage',
    },
    {
        icon: <FaEnvelope size={36} className="text-[#f39c12]" />,
        label: 'Email',
        link: 'mailto:your@email.com',
    },
    {
        icon: <FaPhoneAlt size={36} className="text-green-400" />,
        label: 'Gọi điện',
        link: 'tel:+84901234567',
    },
    {
        icon: <SiZalo size={36} className="text-[#0068FF]" />,
        label: 'Zalo',
        link: 'https://zalo.me/yourzaloid',
    },
]

export default function LienHePage() {
    return (
        <div className="min-h-screen bg-[url('/bg-stars.jpg')] bg-cover bg-center text-white flex flex-col items-center justify-center px-4 py-20 space-y-8 text-center">
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-purple-300"
            >
                Kết nối với Len Laverna
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="max-w-xl text-lg text-gray-200"
            >
                Nếu bạn có bất kỳ câu hỏi, mong muốn đặt lịch hoặc muốn chia sẻ trải nghiệm —
                hãy nhắn cho mình qua các kênh bên dưới nhé. Mình luôn sẵn sàng lắng nghe 🌙
            </motion.p>

            <div className="flex flex-wrap justify-center gap-8 mt-6">
                {contactMethods.map((method, index) => (
                    <motion.a
                        key={method.label}
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
                        whileHover={{ scale: 1.2 }}
                        className="flex flex-col items-center transition-transform"
                    >
                        {method.icon}
                        <span className="mt-2 text-sm">{method.label}</span>
                    </motion.a>
                ))}
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
                className="text-sm mt-10 text-gray-300"
            >
                💌 Mình sẽ phản hồi trong vòng 24h. Cảm ơn bạn đã tin tưởng!
            </motion.p>
        </div>
    )
}
