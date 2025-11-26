// src/app/api/proxy/products/route.js

const BASE_URL = "http://localhost:4000/products";

export async function GET() {
  try {
    const res = await fetch(BASE_URL, { cache: "no-store" });
    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Proxy GET /products error:", err);
    return new Response(
      JSON.stringify({ message: "Proxy GET /products error" }),
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Proxy POST /products error:", err);
    return new Response(
      JSON.stringify({ message: "Proxy POST /products error" }),
      { status: 500 }
    );
  }
}
