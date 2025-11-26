export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">Contact</h1>
          <p className="text-sm md:text-base text-slate-600 mb-6 max-w-2xl">
            Have questions or feedback about Productify? Use the form below or
            reach out using the contact details.
          </p>

          <div className="grid gap-8 md:grid-cols-[2fr,1.2fr]">
            {/* Contact form (UI only) */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="button"
                className="inline-flex w-full md:w-auto items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition"
              >
                Send message
              </button>
            </form>

            {/* Side info */}
            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <h2 className="text-sm font-semibold text-slate-900 mb-1">
                  Email
                </h2>
                <p className="text-sm text-slate-600">support@productify.app</p>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-slate-900 mb-1">
                  Address
                </h2>
                <p className="text-sm text-slate-600">
                  Remote-first • Available worldwide
                </p>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-slate-900 mb-1">
                  Social
                </h2>
                <ul className="space-y-1 text-sm text-indigo-600">
                  <li>Twitter / X</li>
                  <li>GitHub</li>
                  <li>LinkedIn</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
