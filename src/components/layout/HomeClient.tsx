// src/app/HomeClient.tsx
"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamic import các section với ssr: false
const Hero = dynamic(() => import("@/components/sections/Hero"), { ssr: false });
const Services = dynamic(() => import("@/components/sections/services"), { ssr: false });
const Review = dynamic(() => import("@/components/sections/Review"), { ssr: false });
const About = dynamic(() => import("@/components/sections/about"), { ssr: false });

export default function HomeClient() {
    return (
        <>
            <Suspense fallback={<div>Loading Hero...</div>}>
                <Hero />
            </Suspense>

            <Suspense fallback={<div>Loading About...</div>}>
                <About />
            </Suspense>

            <Suspense fallback={<div>Loading Services...</div>}>
                <Services />
            </Suspense>

            <Suspense fallback={<div>Loading Review...</div>}>
                <Review />
            </Suspense>
        </>
    );
}
