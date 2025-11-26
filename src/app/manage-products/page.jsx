"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ManageProductsPage() {
  const { status } = useSession();
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  // protect page
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // load products from backend
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

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product from this view?"
    );
    if (!confirmed) return;

    //  local state update — backend DELETE call নেই
    setProducts((prev) => prev.filter((p) => p.id !== id));

    setMessage("Product removed from this list (backend data unchanged).");
    setTimeout(() => setMessage(""), 2000);
  };

  if (status === "loading") {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-sm text-slate-500">Checking authentication...</p>
      </main>
    );
  }

  if (status === "unauthenticated") {
    return null;
  }

  return (
    <main className="min-h-screen bg-slate-50 py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Manage Products
            </h1>
            <p className="mt-2 text-sm md:text-base text-slate-600 max-w-xl">
              View and manage all products. You can open the details page or
              delete an item.
            </p>
          </div>
        </div>

        {message && (
          <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            {message}
          </div>
        )}

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-100 bg-slate-50/70">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-700">
                  Title
                </th>
                <th className="px-4 py-3 font-semibold text-slate-700">
                  Price
                </th>
                <th className="px-4 py-3 font-semibold text-slate-700">
                  Priority
                </th>
                <th className="px-4 py-3 font-semibold text-slate-700">Date</th>
                <th className="px-4 py-3 font-semibold text-slate-700 text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-6 text-center text-sm text-slate-500"
                  >
                    No products to manage.
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr
                    key={product.id}
                    className="border-t border-slate-100 hover:bg-slate-50/60"
                  >
                    <td className="px-4 py-3 align-middle">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 overflow-hidden rounded-md bg-slate-100">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900 line-clamp-1">
                            {product.title}
                          </p>
                          <p className="text-xs text-slate-500 line-clamp-1">
                            {product.shortDescription}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 align-middle text-sm text-slate-700">
                      ${product.price}
                    </td>
                    <td className="px-4 py-3 align-middle">
                      <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                        {product.priority}
                      </span>
                    </td>
                    <td className="px-4 py-3 align-middle text-xs text-slate-500">
                      {product.date}
                    </td>
                    <td className="px-4 py-3 align-middle">
                      <div className="flex justify-end gap-2">
                        <Link
                          href={`/products/${product.id}`}
                          className="inline-flex items-center rounded-lg border border-indigo-500 px-3 py-1.5 text-xs font-semibold text-indigo-600 hover:bg-indigo-50"
                        >
                          View
                        </Link>
                        <button
                          type="button"
                          onClick={() => handleDelete(product.id)}
                          className="inline-flex items-center rounded-lg border border-red-500 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {products.length === 0 ? (
            <p className="text-sm text-slate-500 text-center bg-white rounded-xl border border-slate-200 py-6">
              No products to manage.
            </p>
          ) : (
            products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex gap-3">
                  <div className="h-16 w-16 overflow-hidden rounded-md bg-slate-100">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-sm font-semibold text-slate-900 line-clamp-1">
                      {product.title}
                    </h2>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {product.shortDescription}
                    </p>
                    <div className="mt-2 flex items-center justify-between text-xs text-slate-600">
                      <span>${product.price}</span>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5">
                        {product.priority}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex justify-end gap-2">
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-flex flex-1 items-center justify-center rounded-lg border border-indigo-500 px-3 py-1.5 text-xs font-semibold text-indigo-600 hover:bg-indigo-50"
                  >
                    View
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(product.id)}
                    className="inline-flex flex-1 items-center justify-center rounded-lg border border-red-500 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
