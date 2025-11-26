// src/app/api/proxy/products/[id]/route.js

const BASE_URL = "http://localhost:4000/api/products";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const res = await fetch(`${BASE_URL}/${id}`, { cache: "no-store" });
    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Proxy GET /products/:id error:", err);
    return new Response(
      JSON.stringify({ message: "Proxy GET /products/:id error" }),
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      cache: "no-store",
    });
    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Proxy DELETE /products/:id error:", err);
    return new Response(
      JSON.stringify({ message: "Proxy DELETE /products/:id error" }),
      { status: 500 }
    );
  }
}
