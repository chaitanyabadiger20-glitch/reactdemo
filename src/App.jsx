import { useState, useEffect, useRef } from "react";

/* ─── DATA ─────────────────────────────────────────── */
const NAV_LINKS = ["Home", "About", "Services", "Portfolio", "Contact"];

const DISHES = [
  { name: "Saffron Lobster Bisque", desc: "House-smoked cream, micro herbs, caviar pearls", tag: "Chef's Signature", img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80" },
  { name: "Wagyu Tenderloin A5", desc: "Truffle jus, pomme purée, seasonal greens", tag: "Most Loved", img: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80" },
  { name: "Black Truffle Risotto", desc: "Aged parmesan, wild mushrooms, gold leaf", tag: "Vegetarian", img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80" },
  { name: "Miso Glazed Sea Bass", desc: "Dashi broth, pickled radish, yuzu foam", tag: "Seasonal", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80" },
];

const USPS = [
  { icon: "🌿", title: "Farm-to-Table Ingredients", desc: "Every ingredient is sourced fresh daily from certified organic farms and local artisan producers." },
  { icon: "🏆", title: "Award-Winning Chefs", desc: "Our team holds 3 Michelin stars and has been recognized by the World's 50 Best Restaurants." },
  { icon: "✨", title: "Unmatched Ambience", desc: "Every corner of Aurum is designed to transport you — from the lighting to the table linens." },
  { icon: "🍷", title: "Curated Wine Cellar", desc: "Over 800 labels selected by our resident sommelier from the finest vineyards worldwide." },
];

const TESTIMONIALS = [
  { name: "Priya Mehta", role: "Food Critic, Condé Nast", quote: "Aurum doesn't just serve food — it orchestrates an entire sensory performance. A transcendent evening every single time.", stars: 5 },
  { name: "James Whitfield", role: "CEO, Whitfield Group", quote: "We've hosted board dinners at Aurum for three years. The consistency of excellence is simply unmatched anywhere in the city.", stars: 5 },
  { name: "Aisha Kapoor", role: "Travel Blogger", quote: "If I could only eat at one restaurant for the rest of my life, it would be Aurum. Bold claim — absolutely meant.", stars: 5 },
];

const SERVICES = [
  { icon: "🍽️", title: "Fine Dining Experience", desc: "An intimate à la carte journey through seasonal tasting menus, crafted fresh each evening by Chef Laurent and his brigade." },
  { icon: "🥂", title: "Private Events & Dining", desc: "Exclusive private rooms for up to 40 guests. Perfect for anniversaries, proposals, corporate celebrations, and bespoke occasions." },
  { icon: "🚐", title: "Luxury Catering", desc: "Bring the Aurum experience to your venue. Our catering team delivers the same Michelin-starred quality, wherever you are." },
  { icon: "📅", title: "Online Reservations", desc: "Secure your table instantly via our seamless booking system. Personalise your visit with dietary notes and special requests." },
];

const PORTFOLIO_ITEMS = [
  { category: "Food", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", title: "Wagyu Elegance" },
  { category: "Interior", img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80", title: "The Main Hall" },
  { category: "Food", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80", title: "Dessert Architecture" },
  { category: "Events", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80", title: "Private Gala Evening" },
  { category: "Interior", img: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&q=80", title: "Wine Cellar" },
  { category: "Food", img: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?w=400&q=40", title: "Garden Harvest" },
  { category: "Events", img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80", title: "Corporate Dinner" },
  { category: "Interior", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80", title: "The Lounge Bar" },
  { category: "Food", img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80", title: "Seasonal Plating" },
  { category: "Events",img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",title: "Corporate Dinner"},
  {category: "Interior", img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&q=80",title: "Night Bar Experience"},
];
const TIMELINE = [
  { year: "2008", title: "The Beginning", desc: "Chef Laurent Moreau opens Aurum as a 30-seat bistro in South Mumbai with a single vision: honest luxury." },
  { year: "2012", title: "First Michelin Star", desc: "Four years of relentless refinement earns Aurum its first Michelin star — the first in Maharashtra." },
  { year: "2017", title: "The Grand Expansion", desc: "A full renovation transforms Aurum into a 120-seat temple of fine dining, with a private event wing." },
  { year: "2022", title: "Third Star Awarded", desc: "Aurum joins a rarefied group of three-star establishments in Asia, cementing its global reputation." },
];

/* ─── HELPERS ───────────────────────────────────────── */
function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-4">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A84C]" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A84C]" />
    </div>
  );
}

function SectionLabel({ label }) {
  return (
    <p className="text-[#C9A84C] text-[0.65rem] tracking-[0.3em] uppercase font-medium font-sans mb-2">
      {label}
    </p>
  );
}

function Toast({ message, type = "success" }) {
  const colors = { success: "bg-green-900/80 text-green-300", error: "bg-red-900/80 text-red-300" };
  return (
    <div className={`fixed bottom-6 right-6 px-6 py-3 rounded text-sm tracking-wide ${colors[type]} backdrop-blur-lg border border-white/10 animate-in fade-in slide-in-from-right z-50`}>
      {message}
    </div>
  );
}

/* ─── NAVBAR ─────────────────────────────────────────── */
function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / height) * 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#C9A84C] to-[#E8C97A] z-40" style={{ width: `${scrollProgress}%` }} />
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-500 ${
  scrolled 
    ? "py-3 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg" 
    : "py-5 bg-white"
}`}>
        <button onClick={() => { setActivePage("Home"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="font-serif text-xl font-bold text-[#C9A84C] tracking-widest hover:text-[#E8C97A] transition-colors">
          AURUM<span className="italic font-light text-[#F5EDD6]">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(p => (
            <li key={p}>
              <button onClick={() => { setActivePage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className={`text-[0.9rem] tracking-[0.15em] uppercase font-semibold transition-colors duration-300 relative group ${
  activePage === p ? "text-black" : "text-gray-700 hover:text-black"
}`}>
                {p}
                <span className={`absolute bottom-0 left-0 h-px bg-[#C9A84C] transition-all duration-300 ${activePage === p ? "w-full" : "w-0 group-hover:w-full"}`} />
              </button>
            </li>
          ))}
        </ul>

        <button onClick={() => { setActivePage("Contact"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="hidden md:block text-[1rem] tracking-[0.18em] uppercase border border-[#0A0E27] text-[#0A0E27] px-5 py-2 hover:bg-[#C9A84C] hover:text-[#0D0B08] transition-all duration-300 font-medium">
          Book a Table
        </button>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#C9A84C] text-2xl hover:text-[#E8C97A] transition-colors">
          {menuOpen ? "✕" : "☰"}
        </button>

        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#0D0B08]/98 backdrop-blur-xl border-t border-[#C9A84C]/10 py-6 flex flex-col items-center gap-5 animate-in fade-in slide-in-from-top">
            {NAV_LINKS.map(p => (
              <button key={p} onClick={() => { setActivePage(p); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className={`text-[0.7rem] tracking-[0.2em] uppercase transition-colors ${activePage === p ? "text-[#C9A84C]" : "text-[#A89878]"}`}>
                {p}
              </button>
            ))}
            <button onClick={() => { setActivePage("Contact"); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="mt-2 text-xl tracking-[0.18em] uppercase border border-[#0A0E27] text-[#0A0E27] px-6 py-2 hover:bg-[#0A0E27] hover:text-[#0A0E27] transition-all duration-300">
              Book a Table
            </button>
          </div>
        )}
      </nav>
    </>
  );
}

/* ─── HOME PAGE ──────────────────────────────────────── */
function Home({ setActivePage }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeDish, setActiveDish] = useState(0);
  const [stats, setStats] = useState({ stars: 0, years: 0, dishes: 0 });

  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial(p => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(timer);
  }, []);

  // Animate counters
  useEffect(() => {
    const animate = setInterval(() => {
      setStats(s => ({
        stars: Math.min(s.stars + 1, 3),
        years: Math.min(s.years + 1, 18),
        dishes: Math.min(s.dishes + 1, 800),
      }));
    }, 50);
    return () => clearInterval(animate);
  }, []);

  return (
    <div className="bg-[#0A0E27]">
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=85"
            alt="Fine dining" className="w-full h-full object-cover opacity-40" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0B08]/60 via-transparent to-[#0D0B08]" />
        </div>
        <div className="relative text-center px-6 max-w-4xl mx-auto animate-in fade-in duration-1000">
          <SectionLabel label="Established 2008 · Mumbai" />
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-[#F5EDD6] leading-[1.1] mb-6 hover:text-[#E8C97A] transition-colors duration-500">
            Where Taste<br /><em className="text-[#C9A84C] font-normal">Meets Luxury</em>
          </h1>
          <p className="font-light text-[#A89878] text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            A culinary experience beyond expectations — three Michelin stars, one unforgettable evening.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setActivePage("Contact")}
              className="px-8 py-4 bg-[#C9A84C] text-[#0D0B08] text-[0.7rem] tracking-[0.2em] uppercase font-medium hover:bg-[#E8C97A] hover:shadow-lg transition-all duration-300 active:scale-95">
              Reserve a Table
            </button>
            <button onClick={() => setActivePage("Services")}
              className="px-8 py-4 border border-[#C9A84C]/50 text-[#C9A84C] text-[0.7rem] tracking-[0.2em] uppercase font-medium hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-300">
              View Service
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-[#C9A84C] to-transparent" />
          <p className="text-[#C9A84C] text-[0.6rem] tracking-[0.3em] uppercase">Scroll</p>
        </div>
      </section>

      {/* ── FEATURED DISHES ── */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel label="Our Creations" />
          <h2 className="font-serif text-4xl md:text-5xl text-[#F5EDD6] mb-4">Featured Dishes</h2>
          <GoldDivider />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DISHES.map((dish, i) => (
            <div key={i} onClick={() => setActiveDish(i)}
              className="group relative overflow-hidden cursor-pointer border border-[#C9A84C]/10 hover:border-[#C9A84C]/40 transition-all duration-500 hover:shadow-xl">
              <div className="overflow-hidden h-72">
                <img src={dish.img} alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B08] via-[#0D0B08]/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-[0.6rem] tracking-[0.2em] uppercase bg-[#C9A84C] text-[#0D0B08] px-3 py-1 font-medium">{dish.tag}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-serif text-lg text-[#F5EDD6] mb-1">{dish.name}</h3>
                <p className="text-[#A89878] text-sm font-light">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 bg-[#111009] border-6 border-[#FFFFFF]/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
          <div className="group">
            <p className="font-serif text-4xl md:text-5xl text-[#C9A84C] group-hover:text-[#E8C97A] transition-colors">{stats.stars}</p>
            <p className="text-[#A89878] text-sm tracking-widest uppercase mt-2">Michelin Stars</p>
          </div>
          <div className="group">
            <p className="font-serif text-4xl md:text-5xl text-[#C9A84C] group-hover:text-[#E8C97A] transition-colors">{stats.years}+</p>
            <p className="text-[#A89878] text-sm tracking-widest uppercase mt-2">Years of Excellence</p>
          </div>
          <div className="group">
            <p className="font-serif text-4xl md:text-5xl text-[#C9A84C] group-hover:text-[#E8C97A] transition-colors">{stats.dishes}+</p>
            <p className="text-[#A89878] text-sm tracking-widest uppercase mt-2">Wine Labels</p>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-[#0A0E27] border-b border-[#C9A84C]/10">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <SectionLabel label="The Aurum Promise" />
      <h2 className="font-serif text-4xl md:text-5xl text-[#F5EDD6] mb-4">Why Choose Us</h2>
      <GoldDivider />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {USPS.map((u, i) => (
        <div 
          key={i} 
          className="group text-center p-8 bg-[#1f1f1f] border-5 border-[#FFFFFF]/10 hover:border-[#C9A84C]/30 hover:bg-[#2a2a2a] transition-all duration-500 cursor-pointer"
        >
          <div className="text-4xl mb-5 group-hover:scale-125 transition-transform duration-300">{u.icon}</div>
          <h3 className="font-serif text-lg text-[#F5EDD6] mb-3">{u.title}</h3>
          <p className="text-[#D4C5A9] text-sm leading-relaxed font-light">{u.desc}</p>
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
              alt="Chef Laurent" className="w-full h-[600px] object-cover group-hover:shadow-2xl transition-shadow duration-500" loading="lazy" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#C9A84C]/40 group-hover:border-[#C9A84C] transition-colors" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-[#C9A84C]/20 group-hover:border-[#C9A84C]/40 transition-colors" />
          </div>
          <div>
            <SectionLabel label="Meet the Maestro" />
            <h2 className="font-serif text-4xl md:text-5xl text-[#F5EDD6] leading-tight mb-2">
              Chef Laurent<br /><em className="text-[#C9A84C]">Moreau</em>
            </h2>
            <GoldDivider />
            <p className="text-[#A89878] leading-relaxed mb-6 font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}>
              With over 18 years of mastery across Paris, Tokyo, and New York, Chef Laurent brings a philosophy that food is emotion — plated. His menus are seasonal, instinctive, and deeply personal.
            </p>
            <p className="text-[#A89878] leading-relaxed mb-10 font-light italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}>
              "Cooking is not a profession — it is a conversation between the earth and the soul. Every dish I create is a sentence in that story."
            </p>
            <div className="flex gap-8">
              {[["18+", "Years of Mastery"], ["3", "Michelin Stars"], ["12", "Global Awards"]].map(([num, label]) => (
                <div key={label} className="group cursor-pointer">
                  <p className="font-serif text-3xl text-[#C9A84C] group-hover:text-[#E8C97A] transition-colors">{num}</p>
                  <p className="text-[#A89878] text-xs tracking-widest uppercase mt-1 group-hover:text-[#F5EDD6] transition-colors">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-[#111009] border-y border-[#C9A84C]/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionLabel label="Guest Voices" />
          <h2 className="font-serif text-4xl text-[#F5EDD6] mb-4">What They Say</h2>
          <GoldDivider />
          <div className="mt-12 min-h-[180px] transition-all duration-500">
            <p className="text-[#F2EBD9] text-xl md:text-2xl font-light leading-relaxed mb-8 italic"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              "{TESTIMONIALS[activeTestimonial].quote}"
            </p>
            <div className="text-[#C9A84C] text-lg mb-3">{"★".repeat(TESTIMONIALS[activeTestimonial].stars)}</div>
            <p className="text-[#F5EDD6] font-medium text-sm tracking-wide">{TESTIMONIALS[activeTestimonial].name}</p>
            <p className="text-[#A89878] text-xs tracking-widest uppercase mt-1">{TESTIMONIALS[activeTestimonial].role}</p>
          </div>
          <div className="flex justify-center gap-2 mt-10">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)}
                className={`h-px transition-all duration-300 cursor-pointer ${i === activeTestimonial ? "bg-[#C9A84C] w-10" : "bg-[#A89878]/40 w-6 hover:w-8"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel label="The Aurum World" />
          <h2 className="font-serif text-4xl md:text-5xl text-[#F5EDD6] mb-4">Gallery Preview</h2>
          <GoldDivider />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {PORTFOLIO_ITEMS.slice(0, 6).map((item, i) => (
            <button key={i} onClick={() => setActivePage("Portfolio")}
              className="group relative overflow-hidden aspect-square cursor-pointer">
              <img src={item.img} alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-[#0D0B08]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="font-serif text-[#F5EDD6] text-sm">{item.title}</p>
              </div>
            </button>
          ))}
        </div>
        <div className="text-center mt-10">
          <button onClick={() => setActivePage("Portfolio")}
            className="text-[0.65rem] tracking-[0.25em] uppercase border border-[#C9A84C]/50 text-[#C9A84C] px-8 py-3 hover:bg-[#C9A84C] hover:text-[#0D0B08] transition-all duration-300 active:scale-95">
            View Full Portfolio
          </button>
        </div>
      </section>
    </div>
  );
}

/* ─── ABOUT PAGE ─────────────────────────────────────── */
function About() {
  return (
    <div className="bg-[#0A0E27] pt-28">
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="animate-in fade-in duration-700">
          <SectionLabel label="Our Story" />
          <h2 className="font-serif text-5xl md:text-6xl text-[#F5EDD6] leading-tight mb-6">
            Born from<br /><em className="text-[#C9A84C]">Passion.</em><br />Refined by Time.
          </h2>
          <GoldDivider />
          <div className="space-y-5 mt-8" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}>
            <p className="text-[#A89878] leading-relaxed hover:text-[#F5EDD6] transition-colors cursor-pointer">Aurum was never meant to be just a restaurant. When Chef Laurent Moreau arrived in Mumbai in 2008 with nothing but two suitcases and an obsession with honest flavour, he found a city hungry for something different — something that honoured tradition while embracing the bold.</p>
            <p className="text-[#A89878] leading-relaxed hover:text-[#F5EDD6] transition-colors cursor-pointer">What began as a 30-seat bistro in Colaba has grown into one of Asia's most celebrated dining destinations. Three Michelin stars, countless memories, and an unwavering commitment to the idea that dining is theatre — and every guest deserves a front-row seat.</p>
          </div>
        </div>
        <div className="relative group animate-in fade-in duration-700 delay-200">
          <img src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=85"
            alt="Aurum interior" className="w-full h-[500px] object-cover group-hover:shadow-2xl transition-shadow" loading="lazy" />
          <div className="absolute -bottom-5 -left-5 bg-[#C9A84C] p-6 group-hover:bg-[#E8C97A] transition-colors cursor-pointer">
            <p className="font-serif text-4xl text-[#0D0B08] font-bold">2008</p>
            <p className="text-[#0D0B08] text-xs tracking-widest uppercase mt-1">Est. Mumbai</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#111009] border-y border-[#C9A84C]/10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel label="Our Journey" />
            <h2 className="font-serif text-4xl text-[#F5EDD6]">Milestones</h2>
            <GoldDivider />
          </div>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A84C] via-[#C9A84C]/50 to-transparent" />
            <div className="space-y-12">
              {TIMELINE.map((item, i) => (
                <div key={i} className={`flex gap-8 items-start group cursor-pointer ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} pl-16 md:pl-0 group-hover:translate-x-2 transition-transform`}>
                    <span className="font-serif text-[#C9A84C] text-2xl block mb-2 group-hover:text-[#E8C97A] transition-colors">{item.year}</span>
                    <h3 className="font-serif text-xl text-[#F5EDD6] mb-2">{item.title}</h3>
                    <p className="text-[#A89878] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="relative flex-shrink-0 hidden md:block">
                    <div className="w-3 h-3 rounded-full bg-[#C9A84C] ring-4 ring-[#C9A84C]/20 group-hover:ring-[#C9A84C]/40 transition-all" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel label="Recognition" />
          <h2 className="font-serif text-4xl text-[#F5EDD6]">Awards & Acclaim</h2>
          <GoldDivider />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["⭐⭐⭐", "Michelin Stars", "2022–Present"],
            ["🥇", "Asia's Best Restaurant", "World's 50 Best, 2023"],
            ["🍷", "Best Wine Programme", "James Beard, 2021"],
            ["🏛️", "Luxury Dining Award", "Condé Nast, 2024"],
          ].map(([icon, award, org]) => (
            <div key={award} className="text-center p-8 border border-[#C9A84C]/15 hover:border-[#C9A84C]/40 hover:bg-[#C9A84C]/5 transition-all duration-300 cursor-pointer group">
              <div className="text-3xl mb-4 group-hover:scale-125 transition-transform">{icon}</div>
              <p className="font-serif text-[#E8C97A] text-sm mb-1">{award}</p>
              <p className="text-[#A89878] text-xs tracking-widest">{org}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ambience Images */}
      <section className="pb-28 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-3 h-[400px] md:h-[500px]">
          <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=85" alt="Ambience 1" className="col-span-2 w-full h-full object-cover hover:shadow-2xl transition-shadow cursor-pointer" loading="lazy" />
          <div className="flex flex-col gap-3">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=85" alt="Ambience 2" className="w-full h-1/2 object-cover hover:shadow-lg transition-shadow cursor-pointer" loading="lazy" />
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=85" alt="Ambience 3" className="w-full h-1/2 object-cover hover:shadow-lg transition-shadow cursor-pointer" loading="lazy" />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── SERVICES PAGE ──────────────────────────────────── */
function Services({ setActivePage }) {
  return (
    <div className="bg-[#0A0E27] pt-28">
      <section className="max-w-3xl mx-auto px-6 py-20 text-center animate-in fade-in duration-700">
        <SectionLabel label="What We Offer" />
        <h2 className="font-serif text-5xl md:text-6xl text-[#F5EDD6] leading-tight mb-4">
          Our <em className="text-[#C9A84C]">Services</em>
        </h2>
        <GoldDivider />
        <p className="text-[#A89878] mt-6 leading-relaxed hover:text-[#F5EDD6] transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}>
          Every service at Aurum is curated with the same exacting standard — an obsessive attention to detail that transforms any occasion into an extraordinary memory.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-28 grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((s, i) => (
          <button key={i} onClick={() => setActivePage("Contact")}
            className="group relative p-10 border border-[#C9A84C]/15 hover:border-[#C9A84C]/50 bg-[#111009] hover:bg-[#C9A84C]/5 transition-all duration-500 overflow-hidden text-left cursor-pointer active:scale-95">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-5xl mb-6 group-hover:scale-125 transition-transform">{s.icon}</div>
            <h3 className="font-serif text-2xl text-[#F5EDD6] mb-3 group-hover:text-[#C9A84C] transition-colors duration-300">{s.title}</h3>
            <p className="text-[#A89878] leading-relaxed font-light">{s.desc}</p>
            <p className="mt-8 text-[0.6rem] tracking-[0.2em] uppercase text-[#C9A84C] border-b border-[#C9A84C]/30 pb-0.5 inline-block group-hover:border-[#C9A84C] transition-all duration-300">
              Enquire Now →
            </p>
          </button>
        ))}
      </section>

      {/* Private dining promo */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden group">
        <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1800&q=80"
          alt="Private dining" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500" loading="lazy" />
        <div className="relative text-center px-6 animate-in fade-in duration-700">
          <p className="font-serif text-3xl md:text-4xl text-[#F5EDD6] mb-4 italic">Planning something special?</p>
          <button onClick={() => setActivePage("Contact")}
            className="px-8 py-4 bg-[#C9A84C] text-[#0D0B08] text-[0.7rem] tracking-[0.2em] uppercase font-medium hover:bg-[#E8C97A] hover:shadow-lg transition-all duration-300 active:scale-95">
            Talk to Our Events Team
          </button>
        </div>
      </section>
    </div>
  );
}

/* ─── PORTFOLIO PAGE ─────────────────────────────────── */
function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const FILTERS = ["All", "Food", "Interior", "Events"];
  const filtered = filter === "All" ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(i => i.category === filter);

  return (
    <div className="bg-[#0A0E27] pt-28">
      <section className="max-w-3xl mx-auto px-6 py-20 text-center animate-in fade-in duration-700">
        <SectionLabel label="Visual Story" />
        <h2 className="font-serif text-5xl md:text-6xl text-[#F5EDD6] mb-4">Our <em className="text-[#C9A84C]">Portfolio</em></h2>
        <GoldDivider />
      </section>

      {/* Filters */}
      <div className="flex justify-center gap-6 mb-12 px-6 flex-wrap">
        {FILTERS.map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`text-[0.65rem] tracking-[0.2em] uppercase pb-1 border-b transition-all duration-300 cursor-pointer ${filter === f ? "border-[#C9A84C] text-[#C9A84C]" : "border-transparent text-[#A89878] hover:text-[#F5EDD6]"}`}>
            {f}
          </button>
        ))}
      </div>

      {/* Masonry-style grid */}
      <div className="max-w-7xl mx-auto px-6 pb-28">
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {filtered.map((item, i) => (
            <div key={`${filter}-${i}`} onClick={() => setLightbox(item)}
              className="group relative break-inside-avoid overflow-hidden cursor-zoom-in hover:shadow-2xl transition-shadow">
              <img src={item.img} alt={item.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-[#0D0B08]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#C9A84C]">{item.category}</span>
                <p className="font-serif text-[#F5EDD6] text-base">{item.title}</p>
                <p className="text-[#A89878] text-xl">⊕</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-[#0D0B08]/95 backdrop-blur-xl flex items-center justify-center p-6 animate-in fade-in duration-300"
          onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-8 text-[#C9A84C] text-2xl hover:text-[#E8C97A] transition-colors active:scale-95">✕</button>
          <div className="max-w-3xl w-full" onClick={e => e.stopPropagation()}>
            <img src={lightbox.img} alt={lightbox.title} className="w-full max-h-[80vh] object-contain animate-in zoom-in duration-300" />
            <div className="mt-4 text-center">
              <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#C9A84C]">{lightbox.category}</span>
              <p className="font-serif text-xl text-[#F5EDD6] mt-1">{lightbox.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── CONTACT PAGE ───────────────────────────────────── */
function Contact() {
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

  const inputClass = "w-full bg-transparent border-b border-[#C9A84C]/20 focus:border-[#C9A84C] outline-none py-3 text-[#F2EBD9] text-sm placeholder-[#A89878]/50 transition-colors duration-300 font-light";

  return (
    <div className="bg-[#0A0E27] pt-28">
      <section className="max-w-3xl mx-auto px-6 py-20 text-center animate-in fade-in duration-700">
        <SectionLabel label="Get In Touch" />
        <h2 className="font-serif text-5xl md:text-6xl text-[#F5EDD6] mb-4">
          Make a <em className="text-[#C9A84C]">Reservation</em>
        </h2>
        <GoldDivider />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-28 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Form */}
        <div className="bg-[#111009] border border-[#C9A84C]/15 p-10 hover:border-[#C9A84C]/30 transition-colors">
          <h3 className="font-serif text-2xl text-[#F5EDD6] mb-8">Reserve Your Table</h3>
          {sent && <Toast message="✓ Reservation request received! We'll confirm within 24 hours." type="success" />}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A89878] block mb-2">Full Name</label>
                <input type="text" required placeholder="Your Name" className={inputClass}
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A89878] block mb-2">Email</label>
                <input type="email" required placeholder="your@email.com" className={inputClass}
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A89878] block mb-2">Phone</label>
                <input type="tel" placeholder="+91 98765 43210" className={inputClass}
                  value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div>
                <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A89878] block mb-2">Preferred Date</label>
                <input type="date" required className={inputClass}
                  value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A89878] block mb-2">Number of Guests</label>
                <select className={inputClass}
                  value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A89878] block mb-2">Occasion</label>
                <select className={inputClass}
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}>
                  <option value="">Select occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Proposal">Proposal</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <button type="submit" disabled={loading}
              className="w-full py-4 bg-[#C9A84C] text-[#0D0B08] text-[0.7rem] tracking-[0.25em] uppercase font-medium hover:bg-[#E8C97A] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 active:scale-95">
              {loading ? "Processing..." : "Confirm Reservation"}
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="space-y-10">
          {/* Map */}
          <div className="relative overflow-hidden h-56 bg-[#1A1611] border border-[#C9A84C]/15 flex items-center justify-center group cursor-pointer hover:border-[#C9A84C]/40 transition-colors"
            onClick={() => setMapOpen(true)}>
            <iframe width="100%" height="100%" frameBorder="0" loading="lazy" allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.823856782605!2d72.82365!3d19.0173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c5c5c5c5c5%3A0x0!2s12%20Napean%20Sea%20Road%2C%20Malabar%20Hill!5e0!3m2!1sen!2sin!4v1234567890"
              style={{ border: "none", opacity: mapOpen ? 1 : 0.5 }} />
            <div className="absolute inset-0 bg-[#0D0B08]/30 group-hover:bg-transparent transition-colors flex items-center justify-center">
              <p className="text-[#C9A84C] text-center">📍 Click to Open Full Map<br/><span className="text-xs">12, Napean Sea Road, Mumbai</span></p>
            </div>
          </div>

          {/* Hours */}
          <div className="p-8 border border-[#C9A84C]/15 bg-[#111009] hover:border-[#C9A84C]/40 transition-colors">
            <h3 className="font-serif text-xl text-[#E8C97A] mb-6">Opening Hours</h3>
            {[["Monday – Friday", "12:00 PM – 11:00 PM"], ["Saturday", "11:00 AM – 11:30 PM"], ["Sunday", "11:00 AM – 10:00 PM"]].map(([day, time]) => (
              <div key={day} className="flex justify-between py-3 border-b border-[#C9A84C]/10 last:border-0 hover:text-[#F5EDD6] transition-colors cursor-pointer">
                <span className="text-[#A89878] text-sm">{day}</span>
                <span className="text-[#F5EDD6] text-sm font-light">{time}</span>
              </div>
            ))}
          </div>

          {/* Contact details
          <div className="space-y-5">
            {[["📞", "Reservations", "+91 22 4001 9999", "tel:+912240019999"], ["✉️", "Email", "reserve@aurum.in", "mailto:reserve@aurum.in"], ["📍", "Address", "12, Napean Sea Road", "https://maps.google.com"]].map(([icon, label, val, link]) => (
              <a key={label} href={link} target="_blank" rel="noreferrer"
                className="flex items-center gap-4 group hover:translate-x-1 transition-transform cursor-pointer">
                <div className="w-10 h-10 border border-[#C9A84C]/25 group-hover:border-[#C9A84C] flex items-center justify-center text-sm flex-shrink-0 transition-colors">{icon}</div>
                <div>
                  <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A89878] group-hover:text-[#C9A84C] transition-colors">{label}</p>
                  <p className="text-[#F5EDD6] text-sm mt-0.5 group-hover:text-[#E8C97A] transition-colors">{val}</p>
                </div>
              </a>
            ))}
          </div> */}
          <div className="space-y-5">
  {/* PHONE */}
  <a href="tel:+912240019999"
    className="flex items-center gap-4 group hover:translate-x-1 transition-transform">
    
    <div className="w-10 h-10 border border-[#C9A84C]/25 group-hover:border-[#C9A84C] flex items-center justify-center">
      📞
    </div>

    <div>
      <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A89878] group-hover:text-[#C9A84C]">
        Reservations
      </p>
      <p className="text-[#F5EDD6] text-sm group-hover:text-[#E8C97A]">
        +91 22 4001 9999
      </p>
    </div>
  </a>

  {/* EMAIL */}
  <a href="mailto:reserve@aurum.in"
    className="flex items-center gap-4 group hover:translate-x-1 transition-transform">
    
    <div className="w-10 h-10 border border-[#C9A84C]/25 group-hover:border-[#C9A84C] flex items-center justify-center">
      ✉️
    </div>

    <div>
      <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A89878] group-hover:text-[#C9A84C]">
        Email
      </p>
      <p className="text-[#F5EDD6] text-sm group-hover:text-[#E8C97A]">
        reserve@aurum.in
      </p>
    </div>
  </a>

  {/* ADDRESS */}
  <a 
    href="https://www.google.com/maps/search/?api=1&query=12+Napean+Sea+Road+Mumbai"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 group hover:translate-x-1 transition-transform">
    
    <div className="w-10 h-10 border border-[#C9A84C]/25 group-hover:border-[#C9A84C] flex items-center justify-center">
      📍
    </div>

    <div>
      <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A89878] group-hover:text-[#C9A84C]">
        Address
      </p>
      <p className="text-[#F5EDD6] text-sm group-hover:text-[#E8C97A]">
        12, Napean Sea Road, Mumbai
      </p>
    </div>
  </a>
</div>
        </div>
      </section>

      {/* Full Map Modal */}
      {mapOpen && (
        <div className="fixed inset-0 z-50 bg-[#0D0B08]/95 backdrop-blur-xl flex items-center justify-center p-6 animate-in fade-in"
          onClick={() => setMapOpen(false)}>
          <button className="absolute top-6 right-8 text-[#C9A84C] text-2xl hover:text-[#E8C97A] transition-colors z-10">✕</button>
          <div className="w-full max-w-4xl h-[70vh]" onClick={e => e.stopPropagation()}>
            <iframe width="100%" height="100%" frameBorder="0" loading="lazy" allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.823856782605!2d72.82365!3d19.0173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c5c5c5c5c5%3A0x0!2s12%20Napean%20Sea%20Road%2C%20Malabar%20Hill!5e0!3m2!1sen!2sin!4v1234567890" />
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── FOOTER ─────────────────────────────────────────── */
function Footer({ setActivePage }) {
  return (
    <footer className="bg-[#080705] border-t border-[#C9A84C]/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <button onClick={() => { setActivePage("Home"); window.scrollTo({ top: 0 }); }}
              className="font-serif text-2xl font-bold text-[#C9A84C] tracking-widest mb-4 hover:text-[#E8C97A] transition-colors cursor-pointer">
              AURUM<span className="italic font-light text-[#F5EDD6]">.</span>
            </button>
            <p className="text-[#A89878] text-sm leading-relaxed font-light max-w-xs hover:text-[#F5EDD6] transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Three Michelin stars. One unforgettable evening. Mumbai's temple of fine dining since 2008.
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold tracking-[0.15em] uppercase text-[#C9A84C] mb-5">Navigation</p>
            <ul className="space-y-3">
              {NAV_LINKS.map(p => (
                <li key={p}>
                  <button onClick={() => { setActivePage(p); window.scrollTo({ top: 0 }); }}
                    className="text-[#A89878] text-sm hover:text-[#F5EDD6] transition-colors cursor-pointer">
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {/* <p className="text-[0.6rem] tracking-[0.25em] uppercase text-[#C9A84C] mb-5">Contact</p> */}
            {/* <div className="space-y-2 text-[#A89878] text-sm font-light hover:text-[#F5EDD6] transition-colors cursor-pointer">
              <p>12, Napean Sea Road, Malabar Hill</p>
              <p>Mumbai, Maharashtra 400 006</p>
              <p className="mt-4">+91 22 4001 9999</p>
              <p>reserve@aurum.in</p>
            </div> */}
            <div>
  <p className="text-xl font-semibold tracking-[0.15em] uppercase text-[#C9A84C] mb-5">
  Contact
</p>

  <div className="space-y-4">

    {/* ADDRESS */}
    <a 
      href="https://www.google.com/maps/search/?api=1&query=12+Napean+Sea+Road+Mumbai"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-[#A89878] text-sm hover:text-[#F5EDD6] transition-colors"
    >
      📍 12, Napean Sea Road<br/>
      Mumbai, Maharashtra 400006
    </a>

    {/* PHONE */}
    <a 
      href="tel:+912240019999"
      className="block text-[#A89878] text-sm hover:text-[#F5EDD6] transition-colors"
    >
      📞 +91 22 4001 9999
    </a>

    {/* EMAIL */}
    <a 
      href="mailto:reserve@aurum.in"
      className="block text-[#A89878] text-sm hover:text-[#F5EDD6] transition-colors"
    >
      ✉️ reserve@aurum.in
    </a>

  </div>
</div>
          </div>
        </div>
        <div className="border-t border-[#C9A84C]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#A89878] text-xs tracking-widest hover:text-[#F5EDD6] transition-colors cursor-pointer">© 2025 Aurum Fine Dining. All rights reserved.</p>
          <p className="text-[#A89878] text-xs tracking-widest hover:text-[#F5EDD6] transition-colors cursor-pointer">Crafted with passion in Mumbai</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── APP ROOT ───────────────────────────────────────── */
export default function App() {
  const [activePage, setActivePage] = useState("Home");

  const navigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const PAGE = { Home, About, Services, Portfolio, Contact };
  const PageComponent = PAGE[activePage];

  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar activePage={activePage} setActivePage={navigate} />
      <main>
        <PageComponent setActivePage={navigate} />
      </main>
      <Footer setActivePage={navigate} />
    </div>
  );
}

