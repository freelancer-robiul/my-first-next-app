"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const isActive = (href) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 text-white text-lg font-bold">
            P
          </div>
          <span className="text-lg font-semibold tracking-tight">
            Productify
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-indigo-600"
                  : "text-slate-600 hover:text-indigo-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side: auth / user */}
        <div className="hidden items-center gap-3 md:flex">
          {!session && (
            <button
              onClick={() => signIn()}
              className="rounded-full border border-slate-200 px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-indigo-500 hover:text-indigo-600 hover:shadow"
            >
              Login / Register
            </button>
          )}

          {session && (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen((prev) => !prev)}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-left text-sm shadow-sm transition hover:border-indigo-500 hover:shadow"
              >
                {session.user?.image ? (
                  <img
                    src={session.user.image}
                    alt={session.user.name ?? "User avatar"}
                    className="h-7 w-7 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500 text-xs font-semibold text-white">
                    {session.user?.name?.[0]?.toUpperCase() ??
                      session.user?.email?.[0]?.toUpperCase() ??
                      "U"}
                  </div>
                )}
                <div className="flex flex-col">
                  <span className="max-w-[130px] truncate font-medium text-slate-800">
                    {session.user?.name ?? session.user?.email}
                  </span>
                  <span className="text-[11px] text-slate-500">Logged in</span>
                </div>
                <svg
                  className={`h-4 w-4 text-slate-500 transition-transform ${
                    userMenuOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-100 bg-white p-2 shadow-lg">
                  <div className="mb-2 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600">
                    <p className="font-medium text-slate-800">
                      {session.user?.name ?? "User"}
                    </p>
                    <p className="truncate text-[11px] text-slate-500">
                      {session.user?.email}
                    </p>
                  </div>

                  <Link
                    href="/add-product"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Add Product
                  </Link>
                  <Link
                    href="/manage-products"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Manage Products
                  </Link>

                  <button
                    onClick={() => {
                      setUserMenuOpen(false);
                      signOut();
                    }}
                    className="mt-1 flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-red-600 transition hover:bg-red-50"
                  >
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <svg
            className="h-5 w-5 text-slate-700"
            viewBox="0 0 24 24"
            fill="none"
          >
            {mobileOpen ? (
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7H20M4 12H16M4 17H20"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="border-b bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 md:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive(link.href)
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {!session && (
              <button
                onClick={() => signIn()}
                className="mt-2 rounded-lg border border-indigo-500 px-3 py-2 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
              >
                Login / Register
              </button>
            )}

            {session && (
              <div className="mt-2 space-y-1 border-t pt-2">
                <div className="mb-1 px-1 text-xs text-slate-500">
                  Logged in as{" "}
                  <span className="font-medium text-slate-700">
                    {session.user?.name ?? session.user?.email}
                  </span>
                </div>
                <Link
                  href="/add-product"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
                  onClick={() => setMobileOpen(false)}
                >
                  Add Product
                </Link>
                <Link
                  href="/manage-products"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
                  onClick={() => setMobileOpen(false)}
                >
                  Manage Products
                </Link>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    signOut();
                  }}
                  className="mt-1 w-full rounded-lg px-3 py-2 text-left text-sm text-red-600 transition hover:bg-red-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
