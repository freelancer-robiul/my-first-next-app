"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const { status } = useSession();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Protect page
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  async function handleSubmit(e) {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");
    setLoading(true);

    const form = e.target;

    const newProduct = {
      title: form.title.value,
      shortDescription: form.shortDescription.value,
      description: form.description.value,
      price: form.price.value,
      date: form.date.value,
      priority: form.priority.value,
      image: form.imageUrl.value, // optional
    };

    try {
      const res = await fetch("/api/proxy/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        setErrorMsg(data.message || "Failed to add product.");
        return;
      }

      setSuccessMsg("Product added successfully!");
      form.reset();
    } catch (err) {
      console.error(err);
      setLoading(false);
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

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
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
          Add New Product
        </h1>
        <p className="text-sm md:text-base text-slate-600 mb-6">
          Fill in the details below to add a new product to your list.
        </p>

        {successMsg && (
          <div className="mb-4 rounded-lg bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm text-emerald-800">
            {successMsg}
          </div>
        )}
        {errorMsg && (
          <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
            {errorMsg}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl bg-white border border-slate-200 p-6 md:p-8 shadow-sm"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700">
                Title
              </label>
              <input
                type="text"
                name="title"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Product title"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700">
                Short description
              </label>
              <input
                type="text"
                name="shortDescription"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="1–2 line summary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Price
              </label>
              <input
                type="number"
                name="price"
                min="0"
                step="0.01"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g. 99.99"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Date
              </label>
              <input
                type="date"
                name="date"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Priority
              </label>
              <select
                name="priority"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                defaultValue="Medium"
                required
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Image URL (optional)
              </label>
              <input
                type="url"
                name="imageUrl"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Full description
            </label>
            <textarea
              name="description"
              rows={4}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write a detailed description of the product..."
              required
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              {loading ? "Adding product..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
