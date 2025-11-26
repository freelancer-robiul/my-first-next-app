const BASE_URL = "http://localhost:4000/products";

// একই fallback list – /products
const fallbackProducts = [
  {
    id: 1,
    title: "Wireless Headphones",
    shortDescription: "High-quality wireless audio for work and travel.",
    description:
      "Experience rich, detailed sound with active noise cancellation and up to 30 hours of battery life. Perfect for focus, travel, and daily use.",
    price: 89,
    date: "2024-10-01",
    priority: "High",
    image:
      "https://images.pexels.com/photos/3394659/pexels-photo-3394659.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    title: "Smartwatch Pro",
    shortDescription: "Track health, notifications, and workouts.",
    description:
      "Stay on top of your day with heart-rate monitoring, step tracking, sleep insights, notifications, and more—all from your wrist.",
    price: 129,
    date: "2024-09-20",
    priority: "Medium",
    image:
      "https://images.pexels.com/photos/277394/pexels-photo-277394.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    title: "Ergonomic Office Chair",
    shortDescription: "Comfortable and adjustable for long sessions.",
    description:
      "Supportive backrest, adjustable height, and breathable mesh keep you productive and comfortable for long working hours.",
    price: 199,
    date: "2024-08-15",
    priority: "High",
    image:
      "https://images.pexels.com/photos/3965556/pexels-photo-3965556.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    title: "Mechanical Keyboard",
    shortDescription: "Tactile switches with customizable backlight.",
    description:
      "A compact mechanical keyboard with hot-swappable switches and per-key RGB lighting, ideal for coding and gaming.",
    price: 79,
    date: "2024-07-10",
    priority: "Low",
    image:
      "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 5,
    title: "4K Ultra Monitor",
    shortDescription: "Crisp 4K panel for design and content.",
    description:
      "A 27-inch 4K IPS display with accurate colors, thin bezels, and multiple input options—perfect for design and productivity.",
    price: 299,
    date: "2024-06-05",
    priority: "High",
    image:
      "https://images.pexels.com/photos/3746317/pexels-photo-3746317.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 6,
    title: "Portable SSD 1TB",
    shortDescription: "Fast, compact storage for projects.",
    description:
      "Transfer large files in seconds with this portable NVMe SSD. Shock-resistant design and USB-C connectivity.",
    price: 99,
    date: "2024-05-18",
    priority: "Medium",
    image:
      "https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export async function GET(req, { params }) {
  const id = Number(params.id);

  try {
    // 🔹 Local backend থাকলে ওটা use হবে
    const res = await fetch(`${BASE_URL}/${id}`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Backend returned non-200");
    }

    const data = await res.json(); // backend theke single product object আসবে

    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Proxy GET /products/:id error, using fallback:", err);

    // 🔹 Backend না থাকলে (Vercel এ) – fallback list থেকে খুঁজে নাও
    const product = fallbackProducts.find((p) => p.id === id);

    if (!product) {
      return new Response(JSON.stringify({ message: "Product not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
