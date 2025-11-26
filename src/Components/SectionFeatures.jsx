"use client";

export default function SectionFeatures() {
  const features = [
    {
      title: "Fast Product Setup",
      description: "Add new products in seconds with a clean and simple form.",
    },
    {
      title: "Centralized Management",
      description: "View and manage all your items from a single dashboard.",
    },
    {
      title: "Secure Authentication",
      description: "Protected routes powered by NextAuth for safe access.",
    },
    {
      title: "Modern UI",
      description:
        "Responsive, polished interface that looks great on any device.",
    },
  ];

  return (
    <section className="py-14 md:py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Powerful Features
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-500 max-w-2xl mx-auto">
            Everything you need to add, manage, and explore products in one
            simple interface.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-indigo-500/70 hover:shadow-md focus-within:ring-2 focus-within:ring-indigo-500"
            >
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
