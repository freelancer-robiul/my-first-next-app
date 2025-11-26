import Link from "next/link";

const BASE_URL = "http://localhost:4000/products";

async function fetchProduct(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json(); // { product: {...} }
    return data.product;
  } catch (err) {
    console.error("Fetch product error:", err);
    return null;
  }
}

// Note: Next 16 e params ekta Promise, tai await korte hocche
export default async function ProductDetailsPage({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const product = await fetchProduct(id);

  if (!product) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Product not found
          </h1>
          <p className="text-sm text-slate-600 mb-4">
            The product you are looking for does not exist or was removed.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition"
          >
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-10 md:py-12">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <Link
          href="/products"
          className="mb-4 inline-flex items-center text-sm font-medium text-slate-600 hover:text-indigo-600"
        >
          ← Back
        </Link>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="h-56 w-full overflow-hidden bg-slate-200 md:h-72">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                {product.title}
              </h1>
              <span className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1 text-sm font-semibold text-indigo-700">
                ${product.price}
              </span>
            </div>

            <div className="flex flex-wrap gap-3 text-xs md:text-sm text-slate-600 mb-5">
              <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1">
                Priority:
                <span className="ml-1 font-medium text-indigo-600">
                  {product.priority}
                </span>
              </span>
              <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1">
                Added:
                <span className="ml-1 font-medium">{product.date}</span>
              </span>
            </div>

            <p className="text-sm md:text-base leading-relaxed text-slate-700">
              {product.description}
            </p>

            <div className="mt-6">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
              >
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
