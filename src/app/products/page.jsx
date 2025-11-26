"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const CATEGORIES = ["All", "Electronics", "Wearables", "Furniture", "Storage"];

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/proxy/products", { cache: "no-store" });
        const data = await res.json();
        if (res.ok && data.products) {
          setProducts(data.products);
        }
      } catch (err) {
        console.error("Failed to load products", err);
      }
    }

    load();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.shortDescription.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, search, category]);

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Products
            </h1>
            <p className="mt-2 text-sm md:text-base text-slate-600 max-w-xl">
              Browse all products. Use the search and category filter to quickly
              find an item.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full md:w-auto">
            <div className="flex-1 sm:w-64">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full sm:w-40 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-indigo-500/70 hover:shadow-md focus-within:ring-2 focus-within:ring-indigo-500"
            >
              <div className="h-40 w-full overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-4">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h2 className="text-sm font-semibold text-slate-900">
                    {product.title}
                  </h2>
                  <span className="text-xs font-semibold text-indigo-600">
                    ${product.price}
                  </span>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2">
                  {product.shortDescription}
                </p>

                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                  <span className="rounded-full bg-slate-100 px-2 py-1">
                    {product.priority}
                  </span>
                </div>

                <div className="mt-4">
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-flex w-full items-center justify-center rounded-lg border border-indigo-500 px-3 py-2 text-xs font-semibold text-indigo-600 transition group-hover:bg-indigo-50"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </article>
          ))}

          {filteredProducts.length === 0 && (
            <p className="text-sm text-slate-500">
              No products found. Try adjusting your filters.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
