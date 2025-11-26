export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            About Productify
          </h1>
          <p className="text-sm md:text-base text-slate-600 mb-6 max-w-3xl">
            Productify helps you keep track of the products you&apos;re
            building, testing or managing every day. It&apos;s a simple
            dashboard to add items, review details and stay organised.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-indigo-50 p-4">
              <h2 className="text-sm font-semibold text-indigo-700 mb-1">
                Clean UI
              </h2>
              <p className="text-xs text-slate-600">
                Minimal, distraction-free interface focused on the essentials.
              </p>
            </div>

            <div className="rounded-xl bg-emerald-50 p-4">
              <h2 className="text-sm font-semibold text-emerald-700 mb-1">
                Protected Pages
              </h2>
              <p className="text-xs text-slate-600">
                Add and manage products only when you&apos;re logged in.
              </p>
            </div>

            <div className="rounded-xl bg-sky-50 p-4">
              <h2 className="text-sm font-semibold text-sky-700 mb-1">
                Modern Stack
              </h2>
              <p className="text-xs text-slate-600">
                Built with Next.js, NextAuth, and an Express backend.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <h2 className="text-sm font-semibold text-slate-800 mb-2">
              Our goal
            </h2>
            <p className="text-xs md:text-sm text-slate-600 max-w-2xl">
              The goal of this project is to demonstrate a complete, modern
              full-stack setup: public pages, protected routes, authentication,
              and basic CRUD operations with a polished and responsive UI.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
