"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-10 md:px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold">Productify</h2>
            <p className="text-sm text-slate-400 mt-2">
              Simple product management app built with Next.js & NextAuth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/add-product"
                  className="hover:text-white transition"
                >
                  Add Product
                </Link>
              </li>
              <li>
                <Link
                  href="/manage-products"
                  className="hover:text-white transition"
                >
                  Manage Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4 text-xl">
              <a
                href="https://facebook.com"
                target="_blank"
                className="hover:text-white transition"
              >
                <i className="ri-facebook-fill"></i>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                className="hover:text-white transition"
              >
                <i className="ri-twitter-x-fill"></i>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                className="hover:text-white transition"
              >
                <i className="ri-instagram-line"></i>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="hover:text-white transition"
              >
                <i className="ri-github-fill"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Productify — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
