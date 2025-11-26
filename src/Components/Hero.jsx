"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 text-white py-20 md:py-28">
      {/* Optional Background Overlay Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-6 text-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-md">
          Manage Your Products
          <br /> Smarter & Faster
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto">
          A simple product management platform built with Next.js & NextAuth.
          Add, manage, and explore items effortlessly.
        </p>

        {/* Primary CTA */}
        <div className="mt-8">
          <Link
            href="/products"
            className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-indigo-100 transition"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
}
