import { useState } from "react";
import SectionLabel from "../components/SectionLabel";
import GoldDivider from "../components/GoldDivider";

const PORTFOLIO_ITEMS = [
  {
    img: "https://images.unsplash.com/photo-1543353071-873f17a7a088?w=800",
    title: "Luxury Dining",
    category: "Food"
  },
  {
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
    title: "Restaurant Interior",
    category: "Interior"
  },
  {
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    title: "Fine Dining Setup",
    category: "Events"
  },
  {
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    title: "Signature Dish",
    category: "Food"
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const FILTERS = ["All", "Food", "Interior", "Events"];

  const filtered =
    filter === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter(i => i.category === filter);

  return (
    <div className="bg-[#0F0804] pt-28">
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <SectionLabel label="Visual Story" />
        <h2 className="font-serif text-5xl text-[#FCD34D] mb-4">
          Our <em className="text-[#D97706]">Portfolio</em>
        </h2>
        <GoldDivider />
      </section>

      {/* Filters */}
      <div className="flex justify-center gap-6 mb-12 px-6 flex-wrap">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-xs uppercase pb-1 border-b ${
              filter === f
                ? "border-[#D97706] text-[#D97706]"
                : "text-[#D4AF85]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid md:grid-cols-3 gap-4">
          {filtered.map((item, i) => (
            <div
              key={i}
              onClick={() => setLightbox(item)}
              className="cursor-pointer"
            >
              <img src={item.img} alt={item.title} />
              <p className="text-[#FCD34D] mt-2">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox.img} alt="" className="max-h-[80vh]" />
        </div>
      )}
    </div>
  );
}