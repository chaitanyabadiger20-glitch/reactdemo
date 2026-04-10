import { useState } from "react";
import Toast from "../components/Toast";
import SectionLabel from "../components/SectionLabel";
import GoldDivider from "../components/GoldDivider";
import { SOCIAL_LINKS } from "../data/data"; // ✅ make sure this exists

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", guests: "2", message: "" });
  const [sent, setSent] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSent(true);
      setLoading(false);
      setTimeout(() => setSent(false), 4000);
      setForm({ name: "", email: "", phone: "", date: "", guests: "2", message: "" });
    }, 1000);
  };

  const inputClass = "w-full bg-transparent border-b border-[#D97706]/20 focus:border-[#D97706] outline-none py-3 text-[#F9E8D9] text-sm placeholder-[#D4AF85]/50 transition-colors duration-300 font-light";

  return (
    <div className="bg-[#0F0804] pt-28">
      
      {/* Header */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center animate-in fade-in duration-700">
        <SectionLabel label="Get In Touch" />
        <h2 className="font-serif text-5xl md:text-6xl text-[#FCD34D] mb-4">
          Make a <em className="text-[#D97706]">Reservation</em>
        </h2>
        <GoldDivider />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-28 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* FORM */}
        <div className="bg-[#1A1107] border border-[#D97706]/15 p-10 hover:border-[#D97706]/30 transition-colors">
          <h3 className="font-serif text-2xl text-[#FCD34D] mb-8">Reserve Your Table</h3>

          {sent && <Toast message="✓ Reservation request received! We'll confirm within 24 hours." type="success" />}

          <form onSubmit={handleSubmit} className="space-y-8">

            <input type="text" required placeholder="Your Name" className={inputClass}
              value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />

            <input type="email" required placeholder="your@email.com" className={inputClass}
              value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />

            <input type="tel" placeholder="+91 98765 43210" className={inputClass}
              value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />

            <input type="date" required className={inputClass}
              value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />

            <button type="submit" disabled={loading}
              className="w-full py-4 bg-[#D97706] text-[#1F1105] text-[0.7rem] tracking-[0.25em] uppercase font-medium hover:bg-[#F59E0B] disabled:opacity-50 transition-all duration-300">
              {loading ? "Processing..." : "Confirm Reservation"}
            </button>
          </form>
        </div>

        {/* INFO */}
        <div className="space-y-10">

          {/* MAP */}
          <div className="relative overflow-hidden h-56 bg-[#251608] border border-[#D97706]/15 flex items-center justify-center">
            <iframe width="100%" height="100%" frameBorder="0" loading="lazy" allowFullScreen
              src="https://www.google.com/maps?q=12+Napean+Sea+Road+Mumbai&output=embed"
              style={{ border: "none" }} />
          </div>

          {/* HOURS */}
          <div className="p-8 border border-[#D97706]/15 bg-[#1A1107]">
            <h3 className="font-serif text-xl text-[#F59E0B] mb-6">Opening Hours</h3>
            {[["Mon–Fri", "12PM – 11PM"], ["Sat", "11AM – 11:30PM"], ["Sun", "11AM – 10PM"]].map(([d, t]) => (
              <div key={d} className="flex justify-between py-2">
                <span className="text-[#D4AF85]">{d}</span>
                <span className="text-[#FCD34D]">{t}</span>
              </div>
            ))}
          </div>

          {/* CONTACT DETAILS */}
          <div className="space-y-4">
            <a href="tel:+912240019999" className="block text-[#FCD34D]">📞 +91 22 4001 9999</a>
            <a href="mailto:reserve@mirage.in" className="block text-[#FCD34D]">✉️ reserve@mirage.in</a>
            <a href="https://maps.google.com" target="_blank" className="block text-[#FCD34D]">
              📍 12, Napean Sea Road, Mumbai
            </a>
          </div>

          {/* SOCIAL */}
          <div>
            <p className="text-[#D97706] mb-3">Follow Us</p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2 border border-[#D97706]/30 text-[#D97706] hover:border-[#D97706]">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}