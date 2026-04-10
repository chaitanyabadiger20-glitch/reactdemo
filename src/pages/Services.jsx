import { useNavigate } from "react-router-dom";
import SectionLabel from "../components/SectionLabel";
import GoldDivider from "../components/GoldDivider";

const SERVICES = [
  {
    icon: "🍽️",
    title: "Fine Dining",
    desc: "Luxury desert dining experience with curated menus."
  },
  {
    icon: "🏜️",
    title: "Private Events",
    desc: "Host exclusive events under a magical desert ambience."
  },
  {
    icon: "🍷",
    title: "Wine Pairing",
    desc: "Premium wines paired perfectly with every dish."
  },
  {
    icon: "👨‍🍳",
    title: "Chef Specials",
    desc: "Signature creations crafted by our master chefs."
  }
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0F0804] pt-28">
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <SectionLabel label="What We Offer" />
        <h2 className="font-serif text-5xl text-[#FCD34D] mb-4">
          Our <em className="text-[#D97706]">Services</em>
        </h2>
        <GoldDivider />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-28 grid md:grid-cols-2 gap-8">
        {SERVICES.map((s, i) => (
          <div key={i}
            className="p-10 border border-[#D97706]/20 bg-[#1A1107] hover:bg-[#D97706]/5 transition">

            <div className="text-4xl mb-4">{s.icon}</div>
            <h3 className="text-xl text-[#FCD34D] mb-2">{s.title}</h3>
            <p className="text-[#D4AF85]">{s.desc}</p>

            <button
              onClick={() => navigate("/contact")}
              className="mt-6 text-[#D97706]"
            >
              Enquire →
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}