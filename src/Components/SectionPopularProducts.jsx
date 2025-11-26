"use client";

import Link from "next/link";

export default function SectionPopularProducts() {
  const products = [
    {
      title: "Wireless Headphones",
      description: "High-quality sound with noise cancellation for daily use.",
      price: "$89",
    },
    {
      title: "Smartwatch Pro",
      description: "Track your fitness, sleep, and notifications with ease.",
      price: "$129",
    },
    {
      title: "Ergonomic Chair",
      description: "Designed for comfort during long working hours.",
      price: "$199",
    },
    {
      title: "Mechanical Keyboard",
      description: "Tactile feedback and RGB lighting for productivity.",
      price: "$79",
    },
    {
      title: "4K Monitor",
      description: "Crisp visuals for work and entertainment.",
      price: "$299",
    },
    {
      title: "Portable SSD",
      description: "Fast, reliable storage you can take anywhere.",
      price: "$99",
    },
  ];

  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Popular Products
            </h2>
            <p className="mt-2 text-sm md:text-base text-slate-500 max-w-xl">
              Explore some example items to visualize how your product catalog
              could look.
            </p>
          </div>
          <Link
            href="/products"
            className="hidden md:inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            View all products →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.title}
              className="group flex flex-col rounded-xl border border-slate-200 bg-slate-50/60 p-5 shadow-sm transition hover:-translate-y-1 hover:border-indigo-500/70 hover:bg-white hover:shadow-md focus-within:ring-2 focus-within:ring-indigo-500"
            >
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  {product.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 line-clamp-2">
                  {product.description}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-indigo-600">
                  {product.price}
                </span>
                <button className="text-xs font-medium text-slate-600 underline-offset-2 group-hover:text-indigo-600 group-hover:underline">
                  View details
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link
            href="/products"
            className="inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            View all products →
          </Link>
        </div>
      </div>
    </section>
  );
}
