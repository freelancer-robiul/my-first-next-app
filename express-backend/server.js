// express-backend/server.js  (ESM style)

import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

// Middlewares
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

// ============ Optional: Users for credentials auth ============
let users = [];
let nextUserId = 1;

app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body || {};

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const existing = users.find((u) => u.email === email);
  if (existing) {
    return res.status(400).json({ message: "Email already registered." });
  }

  const newUser = {
    id: nextUserId++,
    name,
    email,
    password,
  };

  users.push(newUser);

  return res.status(201).json({
    message: "User registered successfully",
    user: { id: newUser.id, name: newUser.name, email: newUser.email },
  });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body || {};

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  return res.json({
    user: { id: user.id, name: user.name, email: user.email },
  });
});

// =================== Products (in-memory) ======================

let products = [
  {
    id: 1,
    title: "Wireless Headphones",
    shortDescription:
      "High-quality wireless audio with noise cancellation for daily work and travel.",
    description:
      "High-quality wireless audio with active noise cancellation, long battery life, and comfortable ear cushions. Perfect for work, travel, and everyday use.",
    price: 89,
    date: "2024-10-01",
    priority: "High",
    image:
      "https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    title: "Smartwatch Pro",
    shortDescription:
      "Track your health, notifications, and workouts with a bright OLED display.",
    description:
      "Track your fitness, monitor your heart rate, receive notifications, and control music directly from your wrist. Bright OLED screen and multiple sport modes.",
    price: 129,
    date: "2024-09-20",
    priority: "Medium",
    image:
      "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    title: "Ergonomic Office Chair",
    shortDescription:
      "Designed for comfort with lumbar support and adjustable height for long sessions.",
    description:
      "Supportive ergonomic chair with adjustable height, lumbar support, and breathable mesh back. Ideal for long working or gaming sessions.",
    price: 199,
    date: "2024-08-15",
    priority: "High",
    image:
      "https://images.pexels.com/photos/8111329/pexels-photo-8111329.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    title: "Mechanical Keyboard",
    shortDescription:
      "Tactile switches with customizable keycaps, perfect for typing and gaming.",
    description:
      "Tactile mechanical switches with customizable RGB lighting and durable keycaps. Great for fast typing and gaming with satisfying feedback.",
    price: 79,
    date: "2024-07-10",
    priority: "Low",
    image:
      "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 5,
    title: "4K Ultra Monitor",
    shortDescription:
      "Crisp 4K resolution with slim bezels, ideal for design, coding, and media.",
    description:
      "27-inch 4K UHD display with vivid colors and slim bezels. Ideal for design, coding, productivity, and entertainment.",
    price: 299,
    date: "2024-06-05",
    priority: "High",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 6,
    title: "Portable SSD 1TB",
    shortDescription:
      "Fast and compact external SSD for backups, media, and project files.",
    description:
      "Compact and durable 1TB SSD with fast read/write speeds. Perfect for backups, large media files, and project storage on the go.",
    price: 99,
    date: "2024-05-18",
    priority: "Medium",
    image:
      "https://images.pexels.com/photos/1036841/pexels-photo-1036841.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

let nextProductId = products.length + 1;

// GET all products
app.get("/products", (req, res) => {
  return res.json({ products });
});

// GET single product
app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.json({ product });
});

// ADD product
app.post("/products", (req, res) => {
  const { title, shortDescription, description, price, date, priority, image } =
    req.body || {};

  if (
    !title ||
    !shortDescription ||
    !description ||
    !price ||
    !date ||
    !priority
  ) {
    return res
      .status(400)
      .json({ message: "All required fields must be filled." });
  }

  const newProduct = {
    id: nextProductId++,
    title,
    shortDescription,
    description,
    price: Number(price),
    date,
    priority,
    image:
      image ||
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200",
  };

  products.push(newProduct);

  return res
    .status(201)
    .json({ message: "Product added successfully", product: newProduct });
});

// DELETE product
app.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products.splice(index, 1);
  return res.json({ message: "Product deleted" });
});

app.listen(PORT, () => {
  console.log(`Express backend running on http://localhost:${PORT}`);
});
