"use client";

export default function SectionTestimonials() {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Store Owner",
      quote:
        "Productify made it super easy to track all my items in one place. The interface is clean and fast.",
    },
    {
      name: "Rafiul Islam",
      role: "Freelancer",
      quote:
        "I love how quickly I can add and update products. The protected routes give me peace of mind.",
    },
    {
      name: "Nusrat Jahan",
      role: "Product Manager",
      quote:
        "Perfect for demos and prototypes. The layout is consistent and looks professional on all devices.",
    },
  ];

  return (
    <section className="py-14 md:py-16 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            What Users Say
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
            A few words from people using this style of product management
            experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="group flex h-full flex-col rounded-xl border border-slate-700 bg-slate-800/70 p-5 shadow-sm transition hover:-translate-y-1 hover:border-indigo-400 hover:shadow-md focus-within:ring-2 focus-within:ring-indigo-400"
            >
              <p className="text-sm text-slate-100 leading-relaxed mb-4">
                “{item.quote}”
              </p>
              <figcaption className="mt-auto">
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="text-xs text-slate-400">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
