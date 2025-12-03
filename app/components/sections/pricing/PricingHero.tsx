"use client";

const plans = [
  {
    name: "Basic",
    price: "GHS 99.99/Year",
    features: [
      "Detail Page",
      "Ratings and Reviews",
      "E-mail",
      "Url",
      "Phone",
      "Additional Phone",
    ],
    highlight: false,
  },
  {
    name: "Standard",
    price: "GHS 199.99/Year",
    features: [
      "Detail Page",
      "Ratings and Reviews",
      "E-mail",
      "Url",
      "Phone",
      "Additional Phone",
    ],
    highlight: false,
  },
  {
    name: "Premium",
    price: "GHS 349.99/Year",
    features: [
      "Detail Page",
      "Ratings and Reviews",
      "E-mail",
      "Url",
      "Phone",
      "Additional Phone",
    ],
    highlight: true,
  },
  {
    name: "Diamond",
    price: "GHS 544.99/Year",
    features: [
      "Detail Page",
      "Ratings and Reviews",
      "E-mail",
      "Url",
      "Phone",
      "Additional Phone",
    ],
    highlight: false,
  },
];

export function PricingHero() {
  return (
    <section className="space-y-10 rounded-[36px] bg-white px-6 py-16 ring-1 ring-slate-100 lg:px-14">
      <header className="text-center">
        <p className="text-2xl font-light text-slate-800">
          Simple. Powerful. <span className="font-semibold text-[#2563eb]">Free.</span>
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-[26px] border bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] ${
              plan.highlight ? "border-[#3dd09d]" : "border-slate-100"
            }`}
          >
            {plan.highlight && (
              <span className="mb-4 inline-flex rounded-full bg-[#2563eb] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Recommended
              </span>
            )}
            <p className="text-sm font-semibold text-slate-500">{plan.name}</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">
              {plan.price}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="text-[#3dd09d]">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full rounded-tr-lg rounded-bl-lg border border-slate-300 py-2 text-sm font-semibold text-slate-800 transition hover:border-[#3dd09d] hover:text-[#3dd09d]">
              Start Today
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

