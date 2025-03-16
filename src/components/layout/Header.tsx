// Header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Cài nếu chưa có: npm i lucide-react

const Header = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { href: '/', label: 'Trang chủ' },
        { href: '/services', label: 'Dịch vụ' },
        { href: '/booking', label: 'Đặt lịch' },
        { href: '/feedback', label: 'Feedback' },
        { href: '/contact', label: 'Liên hệ' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-transparent z-50">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
                <div className="text-xl font-bold text-purple-700 tracking-wide">
                    Len Laverna
                </div>

                {/* Hamburger - hiện trên mobile */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Menu desktop */}
                <nav className="hidden md:flex space-x-6 text-sm font-medium text-white">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`hover:text-purple-500 transition ${pathname === item.href
                                    ? 'text-purple-400 font-semibold underline'
                                    : ''
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Menu mobile dropdown */}
            {isOpen && (
                <div className="md:hidden bg-black/90 backdrop-blur-md px-4 pb-4 pt-2 space-y-4 text-center text-white">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`block text-lg hover:text-purple-400 transition ${pathname === item.href ? 'text-purple-300 font-semibold underline' : ''
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
