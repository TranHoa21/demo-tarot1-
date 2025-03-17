// src/app/HomeClient.tsx
"use client";

import dynamic from "next/dynamic";

// Dynamic import các section với ssr: false
const Hero = dynamic(() => import("@/components/sections/Hero"), { ssr: false });
const Services = dynamic(() => import("@/components/sections/services"), { ssr: false });
const Review = dynamic(() => import("@/components/sections/Review"), { ssr: false });
const About = dynamic(() => import("@/components/sections/about"), { ssr: false });

export default function HomeClient() {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <Review />
        </div>
    );
}
