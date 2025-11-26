export async function POST(req) {
  try {
    const body = await req.json();

    const res = await fetch(`${process.env.BACKEND_URL}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const data = await res.json();

    return Response.json(data, { status: res.status });
  } catch (err) {
    console.error("Proxy register error:", err);
    return Response.json({ message: "Proxy register error" }, { status: 500 });
  }
}
