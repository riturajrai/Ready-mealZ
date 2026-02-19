"use client";

import Link from "next/link";
import { useState } from "react";

// SVG Icons
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 1m8-11h3l3 4v5h-6V5z" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17 8C8 10 5.9 16.17 3.82 19.08L5.6 20l1-2c.5.5 1 1 1.5 1.5C11 22 17 21 19 14c2-7-2-11-2-11s-1 3-5 4c0 0 3 0 5 5z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

// Category SVG Icons
const AllItemsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
  </svg>
);

const MainCourseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h18M12 3v1m0 16v1M4.22 4.22l.707.707m13.86 13.86l.707.707M1 13H3m18 0h2M4.22 21.78l.707-.707M19.07 4.93l.707-.707" />
    <circle cx="12" cy="13" r="5" />
  </svg>
);

const BiryaniIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 8c0-3.87 3.13-7 7-7s7 3.13 7 7H5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h18M5 8c0 2 1.5 4 7 4s7-2 7-4M8 20h8M12 12v8" />
  </svg>
);

const ThaliIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="7" cy="8" r="1.5" />
    <circle cx="17" cy="8" r="1.5" />
    <circle cx="17" cy="16" r="1.5" />
  </svg>
);

const BreakfastIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
  </svg>
);

const SnacksIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v1a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM6 12v5a2 2 0 002 2h8a2 2 0 002-2v-5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
  </svg>
);

const lunchItems = [
  {
    name: "Dal Makhani with Jeera Rice",
    desc: "Creamy black lentils slow-cooked with butter and cream, served with aromatic jeera rice.",
    price: "₹120",
    tag: "Veg",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  },
  {
    name: "Butter Chicken with Naan",
    desc: "Tender chicken in rich tomato-butter gravy with soft butter naan.",
    price: "₹180",
    tag: "Non-Veg",
    img: "https://images.unsplash.com/photo-1604908176997-4318c6e3f4f6",
  },
  {
    name: "Paneer Tikka Masala",
    desc: "Grilled cottage cheese cubes in spicy tomato gravy with rice.",
    price: "₹150",
    tag: "Veg",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
  },
  {
    name: "Chole Bhature",
    desc: "Spicy chickpea curry with fluffy fried bread.",
    price: "₹110",
    tag: "Veg",
    img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
  },
];

const dinnerItems = [
  {
    name: "Shahi Paneer with Roti",
    desc: "Rich and creamy paneer curry in mughlai style gravy, served with soft rotis.",
    price: "₹140",
    tag: "Veg",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
  },
  {
    name: "Chicken Biryani",
    desc: "Fragrant basmati rice layered with spiced chicken, slow-cooked to perfection.",
    price: "₹200",
    tag: "Non-Veg",
    img: "https://images.unsplash.com/photo-1604908176997-4318c6e3f4f6",
  },
  {
    name: "Mix Veg Thali",
    desc: "Wholesome thali with seasonal vegetables, dal, roti, rice and dessert.",
    price: "₹130",
    tag: "Veg",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  },
  {
    name: "Egg Curry with Rice",
    desc: "Spiced egg curry in tangy onion-tomato gravy served with steamed rice.",
    price: "₹120",
    tag: "Non-Veg",
    img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"lunch" | "dinner">("lunch");
  const menuItems = activeTab === "lunch" ? lunchItems : dinnerItems;

  return (
    <main className="bg-[#FFF8F0]">
      {/* ANNOUNCEMENT BAR */}
      <div className="bg-orange-500 text-white text-center py-2 text-sm font-medium">
        🍱 <strong>New:</strong> Explore all platform features and screens -{" "}
        <a href="#" className="underline font-semibold">
          View Feature Tour
        </a>
      </div>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-5">
            Serving Fresh in Bhopal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Homemade Meals,
            <br />
            Delivered Daily
          </h1>
          <p className="mt-5 text-gray-600 text-lg">
            Subscribe to healthy, delicious tiffin service. Fresh meals made
            with love, delivered right to your door.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/subscribe"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition flex items-center gap-2 font-medium"
            >
              Start Subscription <ArrowRightIcon />
            </Link>
            <Link
              href="/menu"
              className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-medium text-gray-700"
            >
              View Menu
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 flex gap-8">
            {[
              { icon: <ClockIcon />, label: "On Time", sub: "Delivery" },
              { icon: <ShieldIcon />, label: "100%", sub: "Hygienic" },
              { icon: <TruckIcon />, label: "Free", sub: "Delivery" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-orange-500">
                  {stat.icon}
                </div>
                <div>
                  <div className="font-semibold text-sm">{stat.label}</div>
                  <div className="text-gray-500 text-xs">{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
          className="rounded-2xl shadow-xl w-full object-cover h-[450px]"
          alt="meal"
        />
      </section>

      {/* TODAY'S MENU */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Today's Menu
          </h2>
          <p className="text-center text-gray-500 mt-2">
            Freshly prepared with premium ingredients
          </p>

          {/* Tabs */}
          <div className="flex justify-center mt-6">
            <div className="bg-white border border-gray-200 rounded-full p-1 flex gap-1 shadow-sm">
              <button
                onClick={() => setActiveTab("lunch")}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === "lunch"
                    ? "bg-orange-500 text-white shadow"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                <SunIcon />
                Lunch
              </button>
              <button
                onClick={() => setActiveTab("dinner")}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === "dinner"
                    ? "bg-orange-500 text-white shadow"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                <MoonIcon />
                Dinner
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <div className="relative">
                  <img
                    src={item.img}
                    className="h-44 w-full object-cover"
                    alt={item.name}
                  />
                  <span
                    className={`absolute top-2 right-2 ${
                      item.tag === "Veg" ? "bg-green-500" : "bg-red-500"
                    } text-white text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1`}
                  >
                    {item.tag === "Veg" && <LeafIcon />}
                    {item.tag}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 truncate">{item.name}</h3>
                  <p className="text-gray-500 text-sm mt-1 line-clamp-2">{item.desc}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-orange-500 font-bold">{item.price}</span>
                    <button className="bg-orange-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-orange-600 transition">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/menu"
              className="border border-gray-300 px-6 py-2.5 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition inline-flex items-center gap-2"
            >
              View Full Menu <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* SUBSCRIPTION PLANS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Subscription Plans
          </h2>
          <p className="text-center text-gray-500 mt-2">
            Choose a plan that fits your lifestyle
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { price: "₹99", days: "3 Days Plan", meals: 3, total: "₹297", savings: null, popular: false },
              { price: "₹89", days: "7 Days Plan", meals: 7, total: "₹623", savings: "Save ₹70", popular: true },
              { price: "₹79", days: "15 Days Plan", meals: 15, total: "₹1185", savings: "Save ₹300", popular: false },
              { price: "₹69", days: "30 Days Plan", meals: 30, total: "₹2070", savings: "Save ₹900", popular: false },
            ].map((plan) => (
              <div
                key={plan.days}
                className={`relative rounded-2xl p-6 border-2 ${
                  plan.popular ? "border-orange-500 shadow-lg" : "border-gray-100 shadow"
                } bg-white`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">{plan.price}</div>
                  <div className="text-gray-500 text-sm">per meal</div>
                  <div className="font-bold text-lg mt-2 text-gray-900">{plan.days}</div>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckIcon />{plan.meals} meals included
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />Free delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />Skip/Pause anytime
                  </li>
                  {plan.savings && (
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      <span className="text-green-600 font-medium">{plan.savings}</span>
                    </li>
                  )}
                </ul>
                <div className="mt-4 text-center text-gray-500 text-sm">Total: {plan.total}</div>
                <button
                  className={`mt-4 w-full py-2.5 rounded-lg font-medium transition ${
                    plan.popular
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Subscribe Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BROWSE BY CATEGORY */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Browse by Category
          </h2>
          <p className="text-center text-gray-500 mt-2">
            Explore our diverse menu options
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {[
              { label: "All Items", icon: <AllItemsIcon />, active: false },
              { label: "Main Course", icon: <MainCourseIcon />, active: true },
              { label: "Biryani", icon: <BiryaniIcon />, active: false },
              { label: "Thali", icon: <ThaliIcon />, active: false },
              { label: "Breakfast", icon: <BreakfastIcon />, active: false },
              { label: "Snacks", icon: <SnacksIcon />, active: false },
            ].map((cat) => (
              <button
                key={cat.label}
                className={`flex flex-col items-center gap-2 px-8 py-4 rounded-xl border-2 transition ${
                  cat.active
                    ? "border-orange-500 bg-white shadow text-orange-500"
                    : "border-gray-200 bg-white hover:border-orange-300 text-gray-500"
                }`}
              >
                {cat.icon}
                <span className="text-sm font-medium text-gray-700">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BULK ORDERS CTA */}
      <section className="bg-orange-500 py-16">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Bulk Orders for Events &amp; Parties
          </h2>
          <p className="mt-3 text-orange-100">
            Planning an event? Get special pricing for bulk orders starting from 20 meals
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-6 bg-white text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Request Quote <ArrowRightIcon />
          </a>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10 mt-10">
            {["Choose Your Plan", "We Cook Fresh", "Delivered To You"].map((step, i) => (
              <div key={i}>
                <div className="w-14 h-14 bg-orange-500 text-white flex items-center justify-center rounded-full mx-auto text-xl font-bold">
                  {i + 1}
                </div>
                <h3 className="mt-5 font-semibold text-lg">{step}</h3>
                <p className="text-gray-500 mt-2">Simple process designed for busy lifestyles.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}