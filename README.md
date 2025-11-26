Productify – Product Management App

A modern, responsive product management application built using Next.js (App Router), NextAuth.js, and a custom Express.js backend.
The app includes public pages, authentication, protected routes, item listings, details page, product creation, and management dashboard.

🚀 Live Demo

👉 Vercel Link: Add after deployment
👉 GitHub Repository: Add repo link

📦 Tech Stack

Next.js 16 (App Router, Server Components, Client Components)

NextAuth.js (Google OAuth + Credentials)

Express.js backend API

Tailwind CSS for styling

Fully responsive UI for Mobile → Tablet → Desktop

📌 Key Features
🔓 Public Pages
• Landing Page

Hero section

Navbar (sticky, responsive)

4 Feature sections

Footer

• Products Page

Product list (from Express backend)

Search (UI only)

Category filter (UI only)

6+ product cards with hover effects

• Product Details Page

Large banner

Title, description, metadata

Back button

404-friendly for unknown ID

🔐 Authentication
• Login / Register

Google login (NextAuth)

Credentials login (NextAuth + Express)

Redirects after login

Error handling

Session-aware navbar

🔒 Protected Pages
🟣 Add Product

Only accessible when authenticated

Form fields: title, short desc, full desc, price, date, priority, image URL

Toast message after success

Saves new product (local add for UI / optional backend support)

🟣 Manage Products

View all products

Delete from list (UI-only delete)

View details button

Clean table layout with priority tags

📁 Project Structure
my-first-next-app/
│
├── express-backend/
│   └── server.js
│
├── src/
│   ├── app/
│   │   ├── page.jsx                 (Home / Landing)
│   │   ├── products/
│   │   │   ├── page.jsx             (Products List)
│   │   │   └── [id]/page.jsx        (Product Details)
│   │   ├── add-product/page.jsx     (Protected)
│   │   ├── manage-products/page.jsx (Protected)
│   │   ├── login/page.jsx
│   │   ├── register/page.jsx
│   │   ├── about/page.jsx
│   │   └── contact/page.jsx
│   │
│   ├── Components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Footer.jsx
│   │   └── ...other UI components
│
└── README.md
