"use client";

import Link from "next/link";

export default function SectionCTA() {
  return (
    <section className="py-14 md:py-16 bg-indigo-600">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-indigo-700 px-6 py-10 md:px-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Ready to manage your products?
            </h2>
            <p className="mt-2 text-sm md:text-base text-indigo-100 max-w-xl">
              Sign in to access protected pages like Add Product and Manage
              Products, and experience the full flow of this demo app.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-indigo-700 shadow-md transition hover:bg-indigo-100"
            >
              Login / Register
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-indigo-100/60 px-6 py-2.5 text-sm font-semibold text-white/90 hover:bg-indigo-500/60 transition"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
