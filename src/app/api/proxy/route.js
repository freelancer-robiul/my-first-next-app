export async function POST(req) {
  try {
    const body = await req.json();

    const res = await fetch(`${process.env.BACKEND_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const data = await res.json();

    return Response.json(data, { status: res.status });
  } catch (err) {
    console.error("Proxy login error:", err);
    return Response.json({ message: "Proxy login error" }, { status: 500 });
  }
}
