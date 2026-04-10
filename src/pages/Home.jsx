import { useState, useEffect } from "react";
import { DISHES, USPS, TESTIMONIALS, PORTFOLIO_ITEMS } from "../data/data";
import SectionLabel from "../components/SectionLabel";
import GoldDivider from "../components/GoldDivider";

export default function Home({ navigate }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [stats, setStats] = useState({ stars: 0, years: 0, dishes: 0 });

  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial(p => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const animate = setInterval(() => {
      setStats(s => ({
        stars: Math.min(s.stars + 1, 5),
        years: Math.min(s.years + 1, 14),
        dishes: Math.min(s.dishes + 1, 200),
      }));
    }, 50);
    return () => clearInterval(animate);
  }, []);

  return (
    <div className="bg-[#0F0804]">
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1800&q=85"
            alt="Desert spices" className="w-full h-full object-cover opacity-30" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1F1105]/70 via-transparent to-[#0F0804]" />
        </div>
        <div className="relative text-center px-6 max-w-4xl mx-auto animate-in fade-in duration-1000">
          <SectionLabel label="Established 2010 · Celebrating Desert Heritage" />
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-[#FCD34D] leading-[1.1] mb-6 hover:text-[#F59E0B] transition-colors duration-500">
            Where Spice<br /><em className="text-[#D97706] font-normal">Meets Magic</em>
          </h1>
          <p className="font-light text-[#D4AF85] text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            A culinary journey through Morocco, Egypt, and the Levant — authentic desert cuisine in an oasis of elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setActivePage("Contact")}
              className="px-8 py-4 bg-[#D97706] text-[#1F1105] text-[0.7rem] tracking-[0.2em] uppercase font-medium hover:bg-[#F59E0B] hover:shadow-lg transition-all duration-300 active:scale-95">
              Reserve a Table
            </button>
            <button onClick={() => setActivePage("Services")}
              className="px-8 py-4 border border-[#D97706]/50 text-[#D97706] text-[0.7rem] tracking-[0.2em] uppercase font-medium hover:border-[#D97706] hover:bg-[#D97706]/10 transition-all duration-300">
              View Services
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-[#D97706] to-transparent" />
          <p className="text-[#D97706] text-[0.6rem] tracking-[0.3em] uppercase">Scroll</p>
        </div>
      </section>

      {/* ── FEATURED DISHES ── */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel label="Our Creations" />
          <h2 className="font-serif text-4xl md:text-5xl text-[#FCD34D] mb-4">Featured Dishes</h2>
          <GoldDivider />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DISHES.map((dish, i) => (
            <div key={i}
              className="group relative overflow-hidden border border-[#D97706]/10 hover:border-[#D97706]/40 transition-all duration-500 hover:shadow-xl">
              <div className="overflow-hidden h-72">
                <img src={dish.img} alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0804] via-[#0F0804]/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-[0.6rem] tracking-[0.2em] uppercase bg-[#D97706] text-[#1F1105] px-3 py-1 font-medium">{dish.tag}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-serif text-lg text-[#FCD34D] mb-1">{dish.name}</h3>
                <p className="text-[#D4AF85] text-sm font-light">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 bg-[#1A1107] border-6 border-[#FFFFFF]/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
          <div className="group">
            <p className="font-serif text-4xl md:text-5xl text-[#D97706] group-hover:text-[#F59E0B] transition-colors">⭐⭐⭐⭐⭐</p>
            <p className="text-[#D4AF85] text-sm tracking-widest uppercase mt-2">5-Star Rated</p>
          </div>
          <div className="group">
            <p className="font-serif text-4xl md:text-5xl text-[#D97706] group-hover:text-[#F59E0B] transition-colors">{stats.years}+</p>
            <p className="text-[#D4AF85] text-sm tracking-widest uppercase mt-2">Years Excellence</p>
          </div>
          <div className="group">
            <p className="font-serif text-4xl md:text-5xl text-[#D97706] group-hover:text-[#F59E0B] transition-colors">{stats.dishes}+</p>
            <p className="text-[#D4AF85] text-sm tracking-widest uppercase mt-2">Spice Blends</p>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-[#0F0804] border-b border-[#D97706]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel label="The Mirage Promise" />
            <h2 className="font-serif text-4xl md:text-5xl text-[#FCD34D] mb-4">Why Choose Us</h2>
            <GoldDivider />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {USPS.map((u, i) => (
              <div 
                key={i} 
                className="group text-center p-8 bg-[#1A1107] border-2 border-[#D97706]/20 hover:border-[#D97706]/50 hover:bg-[#251608] transition-all duration-500 cursor-pointer"
              >
                <div className="text-4xl mb-5 group-hover:scale-125 transition-transform duration-300">{u.icon}</div>
                <h3 className="font-serif text-lg text-[#FCD34D] mb-3">{u.title}</h3>
                <p className="text-[#D4AF85] text-sm leading-relaxed font-light">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHEF HIGHLIGHT ── */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=85"
              alt="Chef Amira" className="w-full h-[600px] object-cover group-hover:shadow-2xl transition-shadow duration-500" loading="lazy" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#D97706]/40 group-hover:border-[#D97706] transition-colors" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-[#D97706]/20 group-hover:border-[#D97706]/40 transition-colors" />
          </div>
          <div>
            <SectionLabel label="Meet the Visionary" />
            <h2 className="font-serif text-4xl md:text-5xl text-[#FCD34D] leading-tight mb-2">
              Chef Amira<br /><em className="text-[#D97706]">Hassan</em>
            </h2>
            <GoldDivider />
            <p className="text-[#D4AF85] leading-relaxed mb-6 font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}>
              With roots in Cairo and training across the Maghreb, Chef Amira brings the soul of ancient desert traditions to every plate. Her philosophy: food is memory, and every recipe tells a story of heritage.
            </p>
            <p className="text-[#D4AF85] leading-relaxed mb-10 font-light italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}>
              "In the desert, we waste nothing. Every spice, every grain is sacred. Cooking is how we honor those who came before us."
            </p>
            <div className="flex gap-8">
              {[["25+", "Years Heritage"], ["5", "Star Rating"], ["15", "Awards"]].map(([num, label]) => (
                <div key={label} className="group cursor-pointer">
                  <p className="font-serif text-3xl text-[#D97706] group-hover:text-[#F59E0B] transition-colors">{num}</p>
                  <p className="text-[#D4AF85] text-xs tracking-widest uppercase mt-1 group-hover:text-[#FCD34D] transition-colors">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-[#1A1107] border-y border-[#D97706]/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionLabel label="Guest Voices" />
          <h2 className="font-serif text-4xl text-[#FCD34D] mb-4">What They Say</h2>
          <GoldDivider />
          <div className="mt-12 min-h-[180px] transition-all duration-500">
            <p className="text-[#F9E8D9] text-xl md:text-2xl font-light leading-relaxed mb-8 italic"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              "{TESTIMONIALS[activeTestimonial].quote}"
            </p>
            <div className="text-[#D97706] text-lg mb-3">{"★".repeat(TESTIMONIALS[activeTestimonial].stars)}</div>
            <p className="text-[#FCD34D] font-medium text-sm tracking-wide">{TESTIMONIALS[activeTestimonial].name}</p>
            <p className="text-[#D4AF85] text-xs tracking-widest uppercase mt-1">{TESTIMONIALS[activeTestimonial].role}</p>
          </div>
          <div className="flex justify-center gap-2 mt-10">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)}
                className={`h-px transition-all duration-300 cursor-pointer ${i === activeTestimonial ? "bg-[#D97706] w-10" : "bg-[#D4AF85]/40 w-6 hover:w-8"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel label="The Mirage World" />
          <h2 className="font-serif text-4xl md:text-5xl text-[#FCD34D] mb-4">Gallery Preview</h2>
          <GoldDivider />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {PORTFOLIO_ITEMS.slice(0, 6).map((item, i) => (
            <button key={i} onClick={() => setActivePage("Portfolio")}
              className="group relative overflow-hidden aspect-square cursor-pointer">
              <img src={item.img} alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-[#1F1105]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="font-serif text-[#FCD34D] text-sm">{item.title}</p>
              </div>
            </button>
          ))}
        </div>
        <div className="text-center mt-10">
          <button onClick={() => setActivePage("Portfolio")}
            className="text-[0.65rem] tracking-[0.25em] uppercase border border-[#D97706]/50 text-[#D97706] px-8 py-3 hover:bg-[#D97706] hover:text-[#1F1105] transition-all duration-300 active:scale-95">
            View Full Portfolio
          </button>
        </div>
      </section>
    </div>
  );
}