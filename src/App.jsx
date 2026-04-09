// import { useState, useEffect, useRef } from "react";

// /* ─── DATA ─────────────────────────────────────────── */
// const NAV_LINKS = ["Home", "About", "Services", "Portfolio", "Contact"];

// const DISHES = [
//   { name: "Saffron Lamb Tagine", desc: "Tender lamb, dried apricots, almonds, preserved lemon", tag: "Chef's Signature", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80" },
//   { name: "Moroccan Seafood Couscous", desc: "Fresh catch, pearled couscous, roasted vegetables, chermoula", tag: "Most Loved", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80" },
//   { name: "Za'atar Crusted Branzino", desc: "Wood-fired, sumac, olive oil, herb salad", tag: "Vegetarian", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80" },
//   { name: "Spiced Dates & Pistachio", desc: "Stuffed with goat cheese, pomegranate molasses, rose petals", tag: "Seasonal", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80" },
// ];

// const USPS = [
//   { icon: "🌴", title: "Desert Sourced Spices", desc: "Every spice hand-selected from markets across Morocco, Egypt, and the Levant for authentic, uncompromised flavors." },
//   { icon: "🏺", title: "Ancient Culinary Arts", desc: "Traditional cooking methods passed through generations — clay tagines, sand ovens, and slow-roasted perfection." },
//   { icon: "✨", title: "Oasis Sanctuary", desc: "Immerse yourself in warm lighting, handcrafted furnishings, and design inspired by desert palaces." },
//   { icon: "🍇", title: "Wine & Spiced Selections", desc: "Curated collection of Mediterranean wines paired with traditional mint teas and exotic beverages." },
// ];

// const TESTIMONIALS = [
//   { name: "Aisha Patel", role: "Travel Critic, National Geographic", quote: "Mirage doesn't just serve food — it transports you to the heart of the Sahara. An absolute sensory pilgrimage.", stars: 5 },
//   { name: "Omar Khalil", role: "Food Author", quote: "The authenticity here is remarkable. Every dish tells the story of centuries-old desert traditions, lovingly preserved.", stars: 5 },
//   { name: "Priya Sharma", role: "Lifestyle Blogger", quote: "I've dined across North Africa, and this place rivals the very best. The spice harmony is pure poetry.", stars: 5 },
// ];

// const SERVICES = [
//   { icon: "🍽️", title: "Fine Dining Experience", desc: "An intimate journey through traditional tagines and spiced delicacies. À la carte or chef's multi-course desert collection." },
//   { icon: "🏕️", title: "Desert Events & Dining", desc: "Exclusive spaces for celebrations. Host your gathering in our Oasis room with traditional entertainment included." },
//   { icon: "📦", title: "Catering & Delivery", desc: "Bring the magic of the desert to your home. Authentic spiced platters and feast packages for any occasion." },
//   { icon: "📅", title: "Online Reservations", desc: "Secure your seat at our desert table. Book instantly with dietary preferences and special requests noted." },
// ];

// const PORTFOLIO_ITEMS = [
//   { category: "Food", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80", title: "Saffron Elegance" },
//   { category: "Interior", img: "https://images.unsplash.com/photo-1522157183959-39b1e2e50ebc?w=600&q=80", title: "The Grand Hall" },
//   { category: "Food", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80", title: "Spiced Perfection" },
//   { category: "Events", img: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&q=80", title: "Desert Celebration" },
//   { category: "Interior", img: "https://images.unsplash.com/photo-1564636684928-8f5293c34c16?w=600&q=80", title: "Amber Lounge" },
//   { category: "Food", img: "https://images.unsplash.com/photo-1509439066919-dfc8dba36dd1?w=600&q=80", title: "Spice Heritage" },
//   { category: "Events", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80", title: "Festival Evening" },
//   { category: "Interior", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80", title: "Sunset Terrace" },
//   { category: "Food", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80", title: "Dessert Art" },
//   { category: "Events", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80", title: "Gala Night" },
//   { category: "Interior", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80", title: "Tea House" },
// ];

// const TIMELINE = [
//   { year: "2010", title: "The Beginning", desc: "Chef Amira Hassan opens Mirage with a dream: authentic desert cuisine in a modern sanctuary." },
//   { year: "2015", title: "Recognition", desc: "Named Best Ethnic Restaurant by international dining critics. Expansion to our current location." },
//   { year: "2019", title: "Heritage Preservation", desc: "Launch of our spice academy and traditional cooking classes. Over 1000 students trained." },
//   { year: "2023", title: "Global Icon", desc: "Mirage becomes the most sought-after desert dining destination across the continent." },
// ];

// const SOCIAL_LINKS = [
//   { icon: "📱 Instagram", url: "https://instagram.com", label: "@mirage_desert" },
//   { icon: "👍 Facebook", url: "https://facebook.com", label: "Mirage Desert Restaurant" },
//   { icon: "🐦 Twitter", url: "https://twitter.com", label: "@mirage_eats" },
//   { icon: "▶️ YouTube", url: "https://youtube.com", label: "Mirage Cooking" },
// ];

// /* ─── HELPERS ───────────────────────────────────────── */
// function GoldDivider() {
//   return (
//     <div className="flex items-center justify-center gap-3 my-4">
//       <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D97706]" />
//       <div className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
//       <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D97706]" />
//     </div>
//   );
// }

// function SectionLabel({ label }) {
//   return (
//     <p className="text-[#D97706] text-[0.65rem] tracking-[0.3em] uppercase font-medium font-sans mb-2">
//       {label}
//     </p>
//   );
// }

// function Toast({ message, type = "success" }) {
//   const colors = { success: "bg-amber-900/80 text-amber-300", error: "bg-red-900/80 text-red-300" };
//   return (
//     <div className={`fixed bottom-6 right-6 px-6 py-3 rounded text-sm tracking-wide ${colors[type]} backdrop-blur-lg border border-white/10 animate-in fade-in slide-in-from-right z-50`}>
//       {message}
//     </div>
//   );
// }

// /* ─── NAVBAR ─────────────────────────────────────────── */
// function Navbar({ activePage, setActivePage }) {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 40);
//       const height = document.documentElement.scrollHeight - window.innerHeight;
//       setScrollProgress((window.scrollY / height) * 100);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <>
//       <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#D97706] to-[#EA580C] z-40" style={{ width: `${scrollProgress}%` }} />
//       <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-500 ${
//   scrolled 
//     ? "py-3 bg-[#1F1105]/95 backdrop-blur-xl border-b border-[#D97706]/20 shadow-lg" 
//     : "py-5 bg-[#1F1105]/80"
// }`}>
//         <button onClick={() => { setActivePage("Home"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="font-serif text-2xl font-bold text-[#D97706] tracking-widest hover:text-[#F59E0B] transition-colors">
//           MIRAGE<span className="italic font-light text-[#FCD34D]">.</span>
//         </button>

//         <ul className="hidden md:flex items-center gap-8">
//           {NAV_LINKS.map(p => (
//             <li key={p}>
//               <button onClick={() => { setActivePage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }}
//                 className={`text-[0.9rem] tracking-[0.15em] uppercase font-semibold transition-colors duration-300 relative group ${
//   activePage === p ? "text-[#FCD34D]" : "text-[#D4AF85] hover:text-[#FCD34D]"
// }`}>
//                 {p}
//                 <span className={`absolute bottom-0 left-0 h-px bg-[#D97706] transition-all duration-300 ${activePage === p ? "w-full" : "w-0 group-hover:w-full"}`} />
//               </button>
//             </li>
//           ))}
//         </ul>

//         <button onClick={() => { setActivePage("Contact"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
//           className="hidden md:block text-[1rem] tracking-[0.18em] uppercase border border-[#D97706] text-[#D97706] px-5 py-2 hover:bg-[#D97706] hover:text-[#1F1105] transition-all duration-300 font-medium">
//           Book a Table
//         </button>

//         <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#D97706] text-2xl hover:text-[#F59E0B] transition-colors">
//           {menuOpen ? "✕" : "☰"}
//         </button>

//         {menuOpen && (
//           <div className="absolute top-full left-0 right-0 bg-[#1F1105]/98 backdrop-blur-xl border-t border-[#D97706]/10 py-6 flex flex-col items-center gap-5 animate-in fade-in slide-in-from-top">
//             {NAV_LINKS.map(p => (
//               <button key={p} onClick={() => { setActivePage(p); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
//                 className={`text-[0.7rem] tracking-[0.2em] uppercase transition-colors ${activePage === p ? "text-[#D97706]" : "text-[#A16207]"}`}>
//                 {p}
//               </button>
//             ))}
//             <button onClick={() => { setActivePage("Contact"); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
//               className="mt-2 text-xl tracking-[0.18em] uppercase border border-[#D97706] text-[#D97706] px-6 py-2 hover:bg-[#D97706] hover:text-[#1F1105] transition-all duration-300">
//               Book a Table
//             </button>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// }

// /* ─── HOME PAGE ──────────────────────────────────────── */
// function Home({ setActivePage }) {
//   const [activeTestimonial, setActiveTestimonial] = useState(0);
//   const [stats, setStats] = useState({ stars: 0, years: 0, dishes: 0 });

//   useEffect(() => {
//     const timer = setInterval(() => setActiveTestimonial(p => (p + 1) % TESTIMONIALS.length), 5000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const animate = setInterval(() => {
//       setStats(s => ({
//         stars: Math.min(s.stars + 1, 5),
//         years: Math.min(s.years + 1, 14),
//         dishes: Math.min(s.dishes + 1, 200),
//       }));
//     }, 50);
//     return () => clearInterval(animate);
//   }, []);

//   return (
//     <div className="bg-[#0F0804]">
//       {/* ── HERO ── */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1800&q=85"
//             alt="Desert spices" className="w-full h-full object-cover opacity-30" loading="lazy" />
//           <div className="absolute inset-0 bg-gradient-to-b from-[#1F1105]/70 via-transparent to-[#0F0804]" />
//         </div>
//         <div className="relative text-center px-6 max-w-4xl mx-auto animate-in fade-in duration-1000">
//           <SectionLabel label="Established 2010 · Celebrating Desert Heritage" />
//           <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-[#FCD34D] leading-[1.1] mb-6 hover:text-[#F59E0B] transition-colors duration-500">
//             Where Spice<br /><em className="text-[#D97706] font-normal">Meets Magic</em>
//           </h1>
//           <p className="font-light text-[#D4AF85] text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
//             A culinary journey through Morocco, Egypt, and the Levant — authentic desert cuisine in an oasis of elegance.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button onClick={() => setActivePage("Contact")}
//               className="px-8 py-4 bg-[#D97706] text-[#1F1105] text-[0.7rem] tracking-[0.2em] uppercase font-medium hover:bg-[#F59E0B] hover:shadow-lg transition-all duration-300 active:scale-95">
//               Reserve a Table
//             </button>
//             <button onClick={() => setActivePage("Services")}
//               className="px-8 py-4 border border-[#D97706]/50 text-[#D97706] text-[0.7rem] tracking-[0.2em] uppercase font-medium hover:border-[#D97706] hover:bg-[#D97706]/10 transition-all duration-300">
//               View Services
//             </button>
//           </div>
//         </div>
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
//           <div className="w-px h-10 bg-gradient-to-b from-[#D97706] to-transparent" />
//           <p className="text-[#D97706] text-[0.6rem] tracking-[0.3em] uppercase">Scroll</p>
//         </div>
//       </section>

//       {/* ── FEATURED DISHES ── */}
//       <section className="py-28 px-6 max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <SectionLabel label="Our Creations" />
//           <h2 className="font-serif text-4xl md:text-5xl text-[#FCD34D] mb-4">Featured Dishes</h2>
//           <GoldDivider />
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {DISHES.map((dish, i) => (
//             <div key={i}
//               className="group relative overflow-hidden border border-[#D97706]/10 hover:border-[#D97706]/40 transition-all duration-500 hover:shadow-xl">
//               <div className="overflow-hidden h-72">
//                 <img src={dish.img} alt={dish.name}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-[#0F0804] via-[#0F0804]/20 to-transparent" />
//               <div className="absolute top-4 left-4">
//                 <span className="text-[0.6rem] tracking-[0.2em] uppercase bg-[#D97706] text-[#1F1105] px-3 py-1 font-medium">{dish.tag}</span>
//               </div>
//               <div className="absolute bottom-0 left-0 right-0 p-5">
//                 <h3 className="font-serif text-lg text-[#FCD34D] mb-1">{dish.name}</h3>
//                 <p className="text-[#D4AF85] text-sm font-light">{dish.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── STATS ── */}
//       <section className="py-16 bg-[#1A1107] border-6 border-[#FFFFFF]/5">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
//           <div className="group">
//             <p className="font-serif text-4xl md:text-5xl text-[#D97706] group-hover:text-[#F59E0B] transition-colors">⭐⭐⭐⭐⭐</p>
//             <p className="text-[#D4AF85] text-sm tracking-widest uppercase mt-2">5-Star Rated</p>
//           </div>
//           <div className="group">
//             <p className="font-serif text-4xl md:text-5xl text-[#D97706] group-hover:text-[#F59E0B] transition-colors">{stats.years}+</p>
//             <p className="text-[#D4AF85] text-sm tracking-widest uppercase mt-2">Years Excellence</p>
//           </div>
//           <div className="group">
//             <p className="font-serif text-4xl md:text-5xl text-[#D97706] group-hover:text-[#F59E0B] transition-colors">{stats.dishes}+</p>
//             <p className="text-[#D4AF85] text-sm tracking-widest uppercase mt-2">Spice Blends</p>
//           </div>
//         </div>
//       </section>

//       {/* ── WHY CHOOSE US ── */}
//       <section className="py-24 bg-[#0F0804] border-b border-[#D97706]/10">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <SectionLabel label="The Mirage Promise" />
//             <h2 className="font-serif text-4xl md:text-5xl text-[#FCD34D] mb-4">Why Choose Us</h2>
//             <GoldDivider />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {USPS.map((u, i) => (
//               <div 
//                 key={i} 
//                 className="group text-center p-8 bg-[#1A1107] border-2 border-[#D97706]/20 hover:border-[#D97706]/50 hover:bg-[#251608] transition-all duration-500 cursor-pointer"
//               >
//                 <div className="text-4xl mb-5 group-hover:scale-125 transition-transform duration-300">{u.icon}</div>
//                 <h3 className="font-serif text-lg text-[#FCD34D] mb-3">{u.title}</h3>
//                 <p className="text-[#D4AF85] text-sm leading-relaxed font-light">{u.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── CHEF HIGHLIGHT ── */}
//       <section className="py-28 max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           <div className="relative group">
//             <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=85"
//               alt="Chef Amira" className="w-full h-[600px] object-cover group-hover:shadow-2xl transition-shadow duration-500" loading="lazy" />
//             <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#D97706]/40 group-hover:border-[#D97706] transition-colors" />
//             <div className="absolute -top-6 -left-6 w-32 h-32 border border-[#D97706]/20 group-hover:border-[#D97706]/40 transition-colors" />
//           </div>
//           <div>
//             <SectionLabel label="Meet the Visionary" />
//             <h2 className="font-serif text-4xl md:text-5xl text-[#FCD34D] leading-tight mb-2">
//               Chef Amira<br /><em className="text-[#D97706]">Hassan</em>
//             </h2>
//             <GoldDivider />
//             <p className="text-[#D4AF85] leading-relaxed mb-6 font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}>
//               With roots in Cairo and training across the Maghreb, Chef Amira brings the soul of ancient desert traditions to every plate. Her philosophy: food is memory, and every recipe tells a story of heritage.
//             </p>
//             <p className="text-[#D4AF85] leading-relaxed mb-10 font-light italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}>
//               "In the desert, we waste nothing. Every spice, every grain is sacred. Cooking is how we honor those who came before us."
//             </p>
//             <div className="flex gap-8">
//               {[["25+", "Years Heritage"], ["5", "Star Rating"], ["15", "Awards"]].map(([num, label]) => (
//                 <div key={label} className="group cursor-pointer">
//                   <p className="font-serif text-3xl text-[#D97706] group-hover:text-[#F59E0B] transition-colors">{num}</p>
//                   <p className="text-[#D4AF85] text-xs tracking-widest uppercase mt-1 group-hover:text-[#FCD34D] transition-colors">{label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── TESTIMONIALS ── */}
//       <section className="py-24 bg-[#1A1107] border-y border-[#D97706]/10">
//         <div className="max-w-3xl mx-auto px-6 text-center">
//           <SectionLabel label="Guest Voices" />
//           <h2 className="font-serif text-4xl text-[#FCD34D] mb-4">What They Say</h2>
//           <GoldDivider />
//           <div className="mt-12 min-h-[180px] transition-all duration-500">
//             <p className="text-[#F9E8D9] text-xl md:text-2xl font-light leading-relaxed mb-8 italic"
//               style={{ fontFamily: "'Cormorant Garamond', serif" }}>
//               "{TESTIMONIALS[activeTestimonial].quote}"
//             </p>
//             <div className="text-[#D97706] text-lg mb-3">{"★".repeat(TESTIMONIALS[activeTestimonial].stars)}</div>
//             <p className="text-[#FCD34D] font-medium text-sm tracking-wide">{TESTIMONIALS[activeTestimonial].name}</p>
//             <p className="text-[#D4AF85] text-xs tracking-widest uppercase mt-1">{TESTIMONIALS[activeTestimonial].role}</p>
//           </div>
//           <div className="flex justify-center gap-2 mt-10">
//             {TESTIMONIALS.map((_, i) => (
//               <button key={i} onClick={() => setActiveTestimonial(i)}
//                 className={`h-px transition-all duration-300 cursor-pointer ${i === activeTestimonial ? "bg-[#D97706] w-10" : "bg-[#D4AF85]/40 w-6 hover:w-8"}`} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── GALLERY PREVIEW ── */}
//       <section className="py-28 max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <SectionLabel label="The Mirage World" />
//           <h2 className="font-serif text-4xl md:text-5xl text-[#FCD34D] mb-4">Gallery Preview</h2>
//           <GoldDivider />
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//           {PORTFOLIO_ITEMS.slice(0, 6).map((item, i) => (
//             <button key={i} onClick={() => setActivePage("Portfolio")}
//               className="group relative overflow-hidden aspect-square cursor-pointer">
//               <img src={item.img} alt={item.title}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
//               <div className="absolute inset-0 bg-[#1F1105]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                 <p className="font-serif text-[#FCD34D] text-sm">{item.title}</p>
//               </div>
//             </button>
//           ))}
//         </div>
//         <div className="text-center mt-10">
//           <button onClick={() => setActivePage("Portfolio")}
//             className="text-[0.65rem] tracking-[0.25em] uppercase border border-[#D97706]/50 text-[#D97706] px-8 py-3 hover:bg-[#D97706] hover:text-[#1F1105] transition-all duration-300 active:scale-95">
//             View Full Portfolio
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }

// /* ─── ABOUT PAGE ─────────────────────────────────────── */
// function About() {
//   return (
//     <div className="bg-[#0F0804] pt-28">
//       <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//         <div className="animate-in fade-in duration-700">
//           <SectionLabel label="Our Story" />
//           <h2 className="font-serif text-5xl md:text-6xl text-[#FCD34D] leading-tight mb-6">
//             Born from<br /><em className="text-[#D97706]">Ancient Spice Roads.</em><br />Crafted with Love.
//           </h2>
//           <GoldDivider />
//           <div className="space-y-5 mt-8" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}>
//             <p className="text-[#D4AF85] leading-relaxed hover:text-[#F9E8D9] transition-colors cursor-pointer">Mirage began as a dream to preserve the culinary heritage of the Sahara and Levantine traditions. Chef Amira Hassan, drawing from her family's recipes spanning generations, envisioned a space where desert gastronomy could be honored with elegance and authenticity.</p>
//             <p className="text-[#D4AF85] leading-relaxed hover:text-[#F9E8D9] transition-colors cursor-pointer">Today, Mirage stands as a beacon for those seeking genuine, soul-stirring desert cuisine. Every tagine, every spice blend, every shared moment echoes the warmth and generosity of desert hospitality — where guests become family.</p>
//           </div>
//         </div>
//         <div className="relative group animate-in fade-in duration-700 delay-200">
//           <img src="https://images.unsplash.com/photo-1522157183959-39b1e2e50ebc?w=800&q=85"
//             alt="Mirage interior" className="w-full h-[500px] object-cover group-hover:shadow-2xl transition-shadow" loading="lazy" />
//           <div className="absolute -bottom-5 -left-5 bg-[#D97706] p-6 group-hover:bg-[#F59E0B] transition-colors cursor-pointer">
//             <p className="font-serif text-4xl text-[#1F1105] font-bold">2010</p>
//             <p className="text-[#1F1105] text-xs tracking-widest uppercase mt-1">Est. Desert Home</p>
//           </div>
//         </div>
//       </section>

//       {/* Timeline */}
//       <section className="bg-[#1A1107] border-y border-[#D97706]/10 py-24 px-6">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-16">
//             <SectionLabel label="Our Journey" />
//             <h2 className="font-serif text-4xl text-[#FCD34D]">Milestones</h2>
//             <GoldDivider />
//           </div>
//           <div className="relative">
//             <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D97706] via-[#D97706]/50 to-transparent" />
//             <div className="space-y-12">
//               {TIMELINE.map((item, i) => (
//                 <div key={i} className={`flex gap-8 items-start group cursor-pointer ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
//                   <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} pl-16 md:pl-0 group-hover:translate-x-2 transition-transform`}>
//                     <span className="font-serif text-[#D97706] text-2xl block mb-2 group-hover:text-[#F59E0B] transition-colors">{item.year}</span>
//                     <h3 className="font-serif text-xl text-[#FCD34D] mb-2">{item.title}</h3>
//                     <p className="text-[#D4AF85] text-sm leading-relaxed">{item.desc}</p>
//                   </div>
//                   <div className="relative flex-shrink-0 hidden md:block">
//                     <div className="w-3 h-3 rounded-full bg-[#D97706] ring-4 ring-[#D97706]/20 group-hover:ring-[#D97706]/40 transition-all" />
//                   </div>
//                   <div className="flex-1 hidden md:block" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Awards */}
//       <section className="py-24 max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <SectionLabel label="Recognition" />
//           <h2 className="font-serif text-4xl text-[#FCD34D]">Awards & Acclaim</h2>
//           <GoldDivider />
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {[
//             ["⭐⭐⭐⭐⭐", "Best Desert Cuisine", "Culinary Awards, 2023"],
//             ["🏆", "Heritage Restaurant", "Intl. Dining, 2022"],
//             ["🍷", "Spice Excellence", "Gastro Review, 2021"],
//             ["🌟", "Critic's Choice", "Food Magazine, 2024"],
//           ].map(([icon, award, org]) => (
//             <div key={award} className="text-center p-8 border border-[#D97706]/15 hover:border-[#D97706]/40 hover:bg-[#D97706]/5 transition-all duration-300 cursor-pointer group">
//               <div className="text-3xl mb-4 group-hover:scale-125 transition-transform">{icon}</div>
//               <p className="font-serif text-[#F59E0B] text-sm mb-1">{award}</p>
//               <p className="text-[#D4AF85] text-xs tracking-widest">{org}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Ambience Images */}
//       <section className="pb-28 max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-3 gap-3 h-[400px] md:h-[500px]">
//           <img src="https://images.unsplash.com/photo-1522157183959-39b1e2e50ebc?w=600&q=85" alt="Ambience 1" className="col-span-2 w-full h-full object-cover hover:shadow-2xl transition-shadow cursor-pointer" loading="lazy" />
//           <div className="flex flex-col gap-3">
//             <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=85" alt="Ambience 2" className="w-full h-1/2 object-cover hover:shadow-lg transition-shadow cursor-pointer" loading="lazy" />
//             <img src="https://images.unsplash.com/photo-1564636684928-8f5293c34c16?w=400&q=85" alt="Ambience 3" className="w-full h-1/2 object-cover hover:shadow-lg transition-shadow cursor-pointer" loading="lazy" />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// /* ─── SERVICES PAGE ──────────────────────────────────── */
// function Services({ setActivePage }) {
//   return (
//     <div className="bg-[#0F0804] pt-28">
//       <section className="max-w-3xl mx-auto px-6 py-20 text-center animate-in fade-in duration-700">
//         <SectionLabel label="What We Offer" />
//         <h2 className="font-serif text-5xl md:text-6xl text-[#FCD34D] leading-tight mb-4">
//           Our <em className="text-[#D97706]">Services</em>
//         </h2>
//         <GoldDivider />
//         <p className="text-[#D4AF85] mt-6 leading-relaxed hover:text-[#F9E8D9] transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}>
//           Every service reflects our commitment to desert authenticity and modern luxury — where tradition and elegance dance together.
//         </p>
//       </section>

//       <section className="max-w-7xl mx-auto px-6 pb-28 grid grid-cols-1 md:grid-cols-2 gap-8">
//         {SERVICES.map((s, i) => (
//           <button key={i} onClick={() => setActivePage("Contact")}
//             className="group relative p-10 border border-[#D97706]/15 hover:border-[#D97706]/50 bg-[#1A1107] hover:bg-[#D97706]/5 transition-all duration-500 overflow-hidden text-left cursor-pointer active:scale-95">
//             <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#D97706] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//             <div className="text-5xl mb-6 group-hover:scale-125 transition-transform">{s.icon}</div>
//             <h3 className="font-serif text-2xl text-[#FCD34D] mb-3 group-hover:text-[#D97706] transition-colors duration-300">{s.title}</h3>
//             <p className="text-[#D4AF85] leading-relaxed font-light">{s.desc}</p>
//             <p className="mt-8 text-[0.6rem] tracking-[0.2em] uppercase text-[#D97706] border-b border-[#D97706]/30 pb-0.5 inline-block group-hover:border-[#D97706] transition-all duration-300">
//               Enquire Now →
//             </p>
//           </button>
//         ))}
//       </section>

//       {/* Private dining promo */}
//       <section className="relative h-80 flex items-center justify-center overflow-hidden group">
//         <img src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1800&q=80"
//           alt="Private dining" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500" loading="lazy" />
//         <div className="relative text-center px-6 animate-in fade-in duration-700">
//           <p className="font-serif text-3xl md:text-4xl text-[#FCD34D] mb-4 italic">Planning something special?</p>
//           <button onClick={() => setActivePage("Contact")}
//             className="px-8 py-4 bg-[#D97706] text-[#1F1105] text-[0.7rem] tracking-[0.2em] uppercase font-medium hover:bg-[#F59E0B] hover:shadow-lg transition-all duration-300 active:scale-95">
//             Talk to Our Team
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }

// /* ─── PORTFOLIO PAGE ─────────────────────────────────── */
// function Portfolio() {
//   const [filter, setFilter] = useState("All");
//   const [lightbox, setLightbox] = useState(null);
//   const FILTERS = ["All", "Food", "Interior", "Events"];
//   const filtered = filter === "All" ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(i => i.category === filter);

//   return (
//     <div className="bg-[#0F0804] pt-28">
//       <section className="max-w-3xl mx-auto px-6 py-20 text-center animate-in fade-in duration-700">
//         <SectionLabel label="Visual Story" />
//         <h2 className="font-serif text-5xl md:text-6xl text-[#FCD34D] mb-4">Our <em className="text-[#D97706]">Portfolio</em></h2>
//         <GoldDivider />
//       </section>

//       {/* Filters */}
//       <div className="flex justify-center gap-6 mb-12 px-6 flex-wrap">
//         {FILTERS.map(f => (
//           <button key={f} onClick={() => setFilter(f)}
//             className={`text-[0.65rem] tracking-[0.2em] uppercase pb-1 border-b transition-all duration-300 cursor-pointer ${filter === f ? "border-[#D97706] text-[#D97706]" : "border-transparent text-[#D4AF85] hover:text-[#FCD34D]"}`}>
//             {f}
//           </button>
//         ))}
//       </div>

//       {/* Masonry-style grid */}
//       <div className="max-w-7xl mx-auto px-6 pb-28">
//         <div className="columns-2 md:columns-3 gap-4 space-y-4">
//           {filtered.map((item, i) => (
//             <div key={`${filter}-${i}`} onClick={() => setLightbox(item)}
//               className="group relative break-inside-avoid overflow-hidden cursor-zoom-in hover:shadow-2xl transition-shadow">
//               <img src={item.img} alt={item.title}
//                 className="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
//               <div className="absolute inset-0 bg-[#1F1105]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
//                 <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D97706]">{item.category}</span>
//                 <p className="font-serif text-[#FCD34D] text-base">{item.title}</p>
//                 <p className="text-[#D4AF85] text-xl">⊕</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Lightbox */}
//       {lightbox && (
//         <div className="fixed inset-0 z-50 bg-[#1F1105]/95 backdrop-blur-xl flex items-center justify-center p-6 animate-in fade-in duration-300"
//           onClick={() => setLightbox(null)}>
//           <button className="absolute top-6 right-8 text-[#D97706] text-2xl hover:text-[#F59E0B] transition-colors active:scale-95">✕</button>
//           <div className="max-w-3xl w-full" onClick={e => e.stopPropagation()}>
//             <img src={lightbox.img} alt={lightbox.title} className="w-full max-h-[80vh] object-contain animate-in zoom-in duration-300" />
//             <div className="mt-4 text-center">
//               <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D97706]">{lightbox.category}</span>
//               <p className="font-serif text-xl text-[#FCD34D] mt-1">{lightbox.title}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// /* ─── CONTACT PAGE ───────────────────────────────────── */
// function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", guests: "2", message: "" });
//   const [sent, setSent] = useState(false);
//   const [mapOpen, setMapOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//       setSent(true);
//       setLoading(false);
//       setTimeout(() => setSent(false), 4000);
//       setForm({ name: "", email: "", phone: "", date: "", guests: "2", message: "" });
//     }, 1000);
//   };

//   const inputClass = "w-full bg-transparent border-b border-[#D97706]/20 focus:border-[#D97706] outline-none py-3 text-[#F9E8D9] text-sm placeholder-[#D4AF85]/50 transition-colors duration-300 font-light";

//   return (
//     <div className="bg-[#0F0804] pt-28">
//       <section className="max-w-3xl mx-auto px-6 py-20 text-center animate-in fade-in duration-700">
//         <SectionLabel label="Get In Touch" />
//         <h2 className="font-serif text-5xl md:text-6xl text-[#FCD34D] mb-4">
//           Make a <em className="text-[#D97706]">Reservation</em>
//         </h2>
//         <GoldDivider />
//       </section>

//       <section className="max-w-7xl mx-auto px-6 pb-28 grid grid-cols-1 lg:grid-cols-2 gap-16">
//         {/* Form */}
//         <div className="bg-[#1A1107] border border-[#D97706]/15 p-10 hover:border-[#D97706]/30 transition-colors">
//           <h3 className="font-serif text-2xl text-[#FCD34D] mb-8">Reserve Your Table</h3>
//           {sent && <Toast message="✓ Reservation request received! We'll confirm within 24 hours." type="success" />}
//           <form onSubmit={handleSubmit} className="space-y-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div>
//                 <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D4AF85] block mb-2">Full Name</label>
//                 <input type="text" required placeholder="Your Name" className={inputClass}
//                   value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
//               </div>
//               <div>
//                 <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D4AF85] block mb-2">Email</label>
//                 <input type="email" required placeholder="your@email.com" className={inputClass}
//                   value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
//               </div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div>
//                 <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D4AF85] block mb-2">Phone</label>
//                 <input type="tel" placeholder="+91 98765 43210" className={inputClass}
//                   value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
//               </div>
//               <div>
//                 <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D4AF85] block mb-2">Preferred Date</label>
//                 <input type="date" required className={inputClass}
//                   value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
//               </div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div>
//                 <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D4AF85] block mb-2">Number of Guests</label>
//                 <select className={inputClass}
//                   value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })}>
//                   {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>)}
//                 </select>
//               </div>
//               <div>
//                 <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D4AF85] block mb-2">Occasion</label>
//                 <select className={inputClass}
//                   value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}>
//                   <option value="">Select occasion</option>
//                   <option value="Birthday">Birthday</option>
//                   <option value="Anniversary">Anniversary</option>
//                   <option value="Corporate">Corporate</option>
//                   <option value="Proposal">Proposal</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>
//             </div>
//             <button type="submit" disabled={loading}
//               className="w-full py-4 bg-[#D97706] text-[#1F1105] text-[0.7rem] tracking-[0.25em] uppercase font-medium hover:bg-[#F59E0B] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 active:scale-95">
//               {loading ? "Processing..." : "Confirm Reservation"}
//             </button>
//           </form>
//         </div>

//         {/* Info */}
//         <div className="space-y-10">
//           {/* Map */}
//           <div className="relative overflow-hidden h-56 bg-[#251608] border border-[#D97706]/15 flex items-center justify-center group cursor-pointer hover:border-[#D97706]/40 transition-colors"
//             onClick={() => setMapOpen(true)}>
//             <iframe width="100%" height="100%" frameBorder="0" loading="lazy" allowFullScreen
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.823856782605!2d72.82365!3d19.0173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c5c5c5c5c5%3A0x0!2s12%20Napean%20Sea%20Road%2C%20Malabar%20Hill!5e0!3m2!1sen!2sin!4v1234567890"
//               style={{ border: "none", opacity: mapOpen ? 1 : 0.5 }} />
//             <div className="absolute inset-0 bg-[#1F1105]/30 group-hover:bg-transparent transition-colors flex items-center justify-center">
//               <p className="text-[#D97706] text-center">📍 Click to Open Full Map<br/><span className="text-xs">12, Napean Sea Road, Mumbai</span></p>
//             </div>
//           </div>

//           {/* Hours */}
//           <div className="p-8 border border-[#D97706]/15 bg-[#1A1107] hover:border-[#D97706]/40 transition-colors">
//             <h3 className="font-serif text-xl text-[#F59E0B] mb-6">Opening Hours</h3>
//             {[["Monday – Friday", "12:00 PM – 11:00 PM"], ["Saturday", "11:00 AM – 11:30 PM"], ["Sunday", "11:00 AM – 10:00 PM"]].map(([day, time]) => (
//               <div key={day} className="flex justify-between py-3 border-b border-[#D97706]/10 last:border-0 hover:text-[#F9E8D9] transition-colors cursor-pointer">
//                 <span className="text-[#D4AF85] text-sm">{day}</span>
//                 <span className="text-[#FCD34D] text-sm font-light">{time}</span>
//               </div>
//             ))}
//           </div>

//           {/* Contact Details */}
//           <div className="space-y-5">
//             {/* PHONE */}
//             <a href="tel:+912240019999"
//               className="flex items-center gap-4 group hover:translate-x-1 transition-transform">
//               <div className="w-10 h-10 border border-[#D97706]/25 group-hover:border-[#D97706] flex items-center justify-center">
//                 📞
//               </div>
//               <div>
//                 <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D4AF85] group-hover:text-[#D97706]">
//                   Reservations
//                 </p>
//                 <p className="text-[#FCD34D] text-sm group-hover:text-[#F59E0B]">
//                   +91 22 4001 9999
//                 </p>
//               </div>
//             </a>

//             {/* EMAIL */}
//             <a href="mailto:reserve@mirage.in"
//               className="flex items-center gap-4 group hover:translate-x-1 transition-transform">
//               <div className="w-10 h-10 border border-[#D97706]/25 group-hover:border-[#D97706] flex items-center justify-center">
//                 ✉️
//               </div>
//               <div>
//                 <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D4AF85] group-hover:text-[#D97706]">
//                   Email
//                 </p>
//                 <p className="text-[#FCD34D] text-sm group-hover:text-[#F59E0B]">
//                   reserve@mirage.in
//                 </p>
//               </div>
//             </a>

//             {/* ADDRESS */}
//             <a 
//               href="https://www.google.com/maps/search/?api=1&query=12+Napean+Sea+Road+Mumbai"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-4 group hover:translate-x-1 transition-transform">
//               <div className="w-10 h-10 border border-[#D97706]/25 group-hover:border-[#D97706] flex items-center justify-center">
//                 📍
//               </div>
//               <div>
//                 <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D4AF85] group-hover:text-[#D97706]">
//                   Address
//                 </p>
//                 <p className="text-[#FCD34D] text-sm group-hover:text-[#F59E0B]">
//                   12, Napean Sea Road, Mumbai
//                 </p>
//               </div>
//             </a>
//           </div>

//           {/* Social Links */}
//           <div className="pt-6 border-t border-[#D97706]/10">
//             <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D4AF85] mb-4">Follow Us</p>
//             <div className="flex flex-wrap gap-3">
//               {SOCIAL_LINKS.map((social, i) => (
//                 <a key={i} href={social.url} target="_blank" rel="noopener noreferrer"
//                   className="px-4 py-2 border border-[#D97706]/30 text-[0.65rem] text-[#D97706] hover:border-[#D97706] hover:bg-[#D97706]/10 transition-all duration-300 group">
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Full Map Modal */}
//       {mapOpen && (
//         <div className="fixed inset-0 z-50 bg-[#1F1105]/95 backdrop-blur-xl flex items-center justify-center p-6 animate-in fade-in"
//           onClick={() => setMapOpen(false)}>
//           <button className="absolute top-6 right-8 text-[#D97706] text-2xl hover:text-[#F59E0B] transition-colors z-10">✕</button>
//           <div className="w-full max-w-4xl h-[70vh]" onClick={e => e.stopPropagation()}>
//             <iframe width="100%" height="100%" frameBorder="0" loading="lazy" allowFullScreen
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.823856782605!2d72.82365!3d19.0173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c5c5c5c5c5%3A0x0!2s12%20Napean%20Sea%20Road%2C%20Malabar%20Hill!5e0!3m2!1sen!2sin!4v1234567890" />
//             </div>
//         </div>
//       )}
//     </div>
//   );
// }

// /* ─── FOOTER ─────────────────────────────────────────── */
// function Footer({ setActivePage }) {
//   return (
//     <footer className="bg-[#0A0603] border-t border-[#D97706]/10 py-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
//           <div>
//             <button onClick={() => { setActivePage("Home"); window.scrollTo({ top: 0 }); }}
//               className="font-serif text-2xl font-bold text-[#D97706] tracking-widest mb-4 hover:text-[#F59E0B] transition-colors cursor-pointer">
//               MIRAGE<span className="italic font-light text-[#FCD34D]">.</span>
//             </button>
//             <p className="text-[#D4AF85] text-sm leading-relaxed font-light max-w-xs hover:text-[#F9E8D9] transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
//               Authentic desert cuisine. Five-star experience. Where ancient spice roads meet modern elegance.
//             </p>
//           </div>
//           <div>
//             <p className="text-xl font-semibold tracking-[0.15em] uppercase text-[#D97706] mb-5">Navigation</p>
//             <ul className="space-y-3">
//               {NAV_LINKS.map(p => (
//                 <li key={p}>
//                   <button onClick={() => { setActivePage(p); window.scrollTo({ top: 0 }); }}
//                     className="text-[#D4AF85] text-sm hover:text-[#F9E8D9] transition-colors cursor-pointer">
//                     {p}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <p className="text-xl font-semibold tracking-[0.15em] uppercase text-[#D97706] mb-5">Contact</p>
//             <div className="space-y-4">
//               {/* ADDRESS */}
//               <a 
//                 href="https://www.google.com/maps/search/?api=1&query=12+Napean+Sea+Road+Mumbai"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block text-[#D4AF85] text-sm hover:text-[#F9E8D9] transition-colors"
//               >
//                 📍 12, Napean Sea Road<br/>
//                 Mumbai, Maharashtra 400006
//               </a>

//               {/* PHONE */}
//               <a 
//                 href="tel:+912240019999"
//                 className="block text-[#D4AF85] text-sm hover:text-[#F9E8D9] transition-colors"
//               >
//                 📞 +91 22 4001 9999
//               </a>

//               {/* EMAIL */}
//               <a 
//                 href="mailto:reserve@mirage.in"
//                 className="block text-[#D4AF85] text-sm hover:text-[#F9E8D9] transition-colors"
//               >
//                 ✉️ reserve@mirage.in
//               </a>
//             </div>

//             {/* Social Icons */}
//             <div className="mt-6 pt-6 border-t border-[#D97706]/10">
//               <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D97706] mb-3">Follow</p>
//               <div className="flex gap-2">
//                 {[
//                   { icon: "📱", url: "https://instagram.com" },
//                   { icon: "👍", url: "https://facebook.com" },
//                   { icon: "🐦", url: "https://twitter.com" },
//                   { icon: "▶️", url: "https://youtube.com" },
//                 ].map((s, i) => (
//                   <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
//                     className="w-8 h-8 border border-[#D97706]/25 flex items-center justify-center hover:border-[#D97706] hover:bg-[#D97706]/10 transition-all text-sm">
//                     {s.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="border-t border-[#D97706]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="text-[#D4AF85] text-xs tracking-widest hover:text-[#F9E8D9] transition-colors cursor-pointer">© 2025 Mirage Fine Dining. All rights reserved.</p>
//           <p className="text-[#D4AF85] text-xs tracking-widest hover:text-[#F9E8D9] transition-colors cursor-pointer">Crafted with passion in the heart of tradition</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// /* ─── APP ROOT ───────────────────────────────────────── */
// export default function App() {
//   const [activePage, setActivePage] = useState("Home");

//   const navigate = (page) => {
//     setActivePage(page);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const PAGE = { Home, About, Services, Portfolio, Contact };
//   const PageComponent = PAGE[activePage];

//   return (
//     <div className="min-h-screen bg-[#0F0804]">
//       <Navbar activePage={activePage} setActivePage={navigate} />
//       <main>
//         <PageComponent setActivePage={navigate} />
//       </main>
//       <Footer setActivePage={navigate} />
//     </div>
//   );
// }



import { useState, useEffect, useRef } from "react";

/* ─── DATA ─────────────────────────────────────────── */
const NAV_LINKS = ["Home", "About", "Services", "Portfolio", "Help", "Contact"];

const DISHES = [
  { name: "Saffron Lamb Tagine", desc: "Tender lamb, dried apricots, almonds, preserved lemon", tag: "Chef's Signature", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80" },
  { name: "Moroccan Seafood Couscous", desc: "Fresh catch, pearled couscous, roasted vegetables, chermoula", tag: "Most Loved", img: "https://tse2.mm.bing.net/th/id/OIP.z56KBVobVQUoxuAizoBfwgHaEO?pid=Api&P=0&h=220" },
  { name: "Za'atar Crusted Branzino", desc: "Wood-fired, sumac, olive oil, herb salad", tag: "Vegetarian", img: "https://panmastery.com/wp-content/uploads/2025/11/ZaatarCrusted-Roast-Chicken-with-Herbed-Couscous.jpg" },
  { name: "Spiced Dates & Pistachio", desc: "Stuffed with goat cheese, pomegranate molasses, rose petals", tag: "Seasonal", img: "https://tse1.mm.bing.net/th/id/OIP.Ixunqn767Esxp4rok-fTgwHaHa?pid=Api&P=0&h=220" },
];

const USPS = [
  { icon: "🌴", title: "Desert Sourced Spices", desc: "Every spice hand-selected from markets across Morocco, Egypt, and the Levant for authentic, uncompromised flavors." },
  { icon: "🏺", title: "Ancient Culinary Arts", desc: "Traditional cooking methods passed through generations — clay tagines, sand ovens, and slow-roasted perfection." },
  { icon: "✨", title: "Oasis Sanctuary", desc: "Immerse yourself in warm lighting, handcrafted furnishings, and design inspired by desert palaces." },
  { icon: "🍇", title: "Wine & Spiced Selections", desc: "Curated collection of Mediterranean wines paired with traditional mint teas and exotic beverages." },
];

const TESTIMONIALS = [
  { name: "Aisha Patel", role: "Travel Critic, National Geographic", quote: "Mirage doesn't just serve food — it transports you to the heart of the Sahara. An absolute sensory pilgrimage.", stars: 5 },
  { name: "Omar Khalil", role: "Food Author", quote: "The authenticity here is remarkable. Every dish tells the story of centuries-old desert traditions, lovingly preserved.", stars: 5 },
  { name: "Priya Sharma", role: "Lifestyle Blogger", quote: "I've dined across North Africa, and this place rivals the very best. The spice harmony is pure poetry.", stars: 5 },
];

const SERVICES = [
  { icon: "🍽️", title: "Fine Dining Experience", desc: "An intimate journey through traditional tagines and spiced delicacies. À la carte or chef's multi-course desert collection." },
  { icon: "🏕️", title: "Desert Events & Dining", desc: "Exclusive spaces for celebrations. Host your gathering in our Oasis room with traditional entertainment included." },
  { icon: "📦", title: "Catering & Delivery", desc: "Bring the magic of the desert to your home. Authentic spiced platters and feast packages for any occasion." },
  { icon: "📅", title: "Online Reservations", desc: "Secure your seat at our desert table. Book instantly with dietary preferences and special requests noted." },
];

const PORTFOLIO_ITEMS = [
  { category: "Food", img: "https://tse2.mm.bing.net/th/id/OIP.X8sCyJdvtxr2aNLyHmhxcQHaE7?pid=Api&P=0&h=220", title: "Saffron Elegance" },
  { category: "Interior", img: "https://pittsburghsgrandhall.com/images/home/eventspace.jpg", title: "The Grand Hall" },
  { category: "Food", img: "https://tse3.mm.bing.net/th/id/OIP.zl3I5Vdw5aKAeUfnbRxZcwHaE8?pid=Api&P=0&h=220", title: "Spiced Perfection" },
  { category: "Events", img: "https://www.vivaahcelebrations.com/wp-content/uploads/2023/10/2-1.jpg", title: "Desert Celebration" },
  { category: "Interior", img: "https://tse4.mm.bing.net/th/id/OIP.sMzpLzQluyaRrhThHnjgDgHaEo?pid=Api&P=0&h=220", title: "Amber Lounge" },
  { category: "Food", img: "https://tse1.mm.bing.net/th/id/OIP.QbfsmCrQQvyb2vKW1frG_AHaDp?pid=Api&P=0&h=220", title: "Spice Heritage" },
  { category: "Events", img: "https://tse3.mm.bing.net/th/id/OIP.47XjhPgpo9qgnJ_yGLKx3wHaEJ?pid=Api&P=0&h=220", title: "Festival Evening" },
  { category: "Interior", img: "https://images.ctfassets.net/m868ks80jg7q/2i6Pr71M0BcTCqnnXXbc52/8af99b4f4088a99ce9defd58a2e173b9/Sunset.jpg?w=600&h=415&fm=webp&fit=fill&q=75", title: "Sunset Terrace" },
  { category: "Food", img: "https://tse1.mm.bing.net/th/id/OIP.VjB7SEn7V0TODQfnJIgO4QHaEJ?pid=Api&P=0&h=220", title: "Dessert Art" },
  { category: "Events", img: "https://tse1.mm.bing.net/th/id/OIP._WvqUaOSOjfA-p_MPQI5MgHaFj?pid=Api&P=0&h=220", title: "Gala Night" },
  { category: "Interior", img: "https://tse2.mm.bing.net/th/id/OIP.ExGGAijHUQVPUUZ46jBxqwHaHa?pid=Api&P=0&h=220", title: "Tea House" },
];

const TIMELINE = [
  { year: "2010", title: "The Beginning", desc: "Chef Amira Hassan opens Mirage with a dream: authentic desert cuisine in a modern sanctuary." },
  { year: "2015", title: "Recognition", desc: "Named Best Ethnic Restaurant by international dining critics. Expansion to our current location." },
  { year: "2019", title: "Heritage Preservation", desc: "Launch of our spice academy and traditional cooking classes. Over 1000 students trained." },
  { year: "2023", title: "Global Icon", desc: "Mirage becomes the most sought-after desert dining destination across the continent." },
];

const SOCIAL_LINKS = [
  { icon: "📱 Instagram", url: "https://instagram.com", label: "@mirage_desert" },
  { icon: "👍 Facebook", url: "https://facebook.com", label: "Mirage Desert Restaurant" },
  { icon: "🐦 Twitter", url: "https://twitter.com", label: "@mirage_eats" },
  { icon: "▶️ YouTube", url: "https://youtube.com", label: "Mirage Cooking" },
];

const FAQS = [
  {
    question: "How do I make a reservation at Mirage?",
    answer: "You can reserve a table through our online booking system on the Contact page, call us at +91 22 4001 9999, or email reserve@mirage.in. We recommend booking at least 2-3 days in advance for optimal availability. Walk-ins are welcome based on table availability."
  },
  {
    question: "Do you accommodate dietary restrictions and allergies?",
    answer: "Absolutely! We take dietary requirements very seriously. Please mention any allergies, vegetarian, vegan, or religious dietary preferences when making your reservation. Our culinary team will prepare customized dishes that honor both your health needs and our authentic culinary traditions."
  },
  {
    question: "What is the dress code at Mirage?",
    answer: "Mirage maintains an elegant, sophisticated atmosphere. We recommend smart casual to formal attire. Jeans and t-shirts are acceptable for casual lunch, but for dinner, we suggest dressier clothing to match the fine dining experience. No strict dress code enforced, but we appreciate guests dressing appropriately."
  },
  {
    question: "Do you offer private dining and event hosting?",
    answer: "Yes! Our exclusive Oasis room is perfect for private celebrations, corporate events, and intimate gatherings. We offer customized menu options, traditional entertainment, and dedicated event coordination. Contact our events team at reserve@mirage.in or call for detailed packages and availability."
  },
  {
    question: "What are your opening hours?",
    answer: "Monday to Friday: 12:00 PM – 11:00 PM | Saturday: 11:00 AM – 11:30 PM | Sunday: 11:00 AM – 10:00 PM. We're closed on select holidays. For special hours during festivals or private events, please contact us directly."
  },
  {
    question: "Do you offer delivery and catering services?",
    answer: "Yes! We provide authentic spiced platters and feast packages for delivery within the city. Our catering service is ideal for corporate events, weddings, and celebrations. Minimum order applies. Contact our catering team at reserve@mirage.in for customized quotes and menu options."
  },
  {
    question: "Are there vegetarian and vegan options available?",
    answer: "We offer an extensive range of vegetarian dishes honoring traditional desert recipes. Vegan options are available upon request. Our chefs excel at creating plant-based versions of our signature dishes without compromising on authentic flavors and presentation."
  },
  {
    question: "Do you have a kids' menu or family packages?",
    answer: "We welcome families! While we don't have a separate kids' menu, our chefs can prepare milder versions of our signature dishes suitable for children. Ask our staff about family packages and sharing platters that are perfect for dining with kids."
  },
  {
    question: "Can I purchase your spice blends and specialty ingredients?",
    answer: "Yes! Our signature spice blends and selected ingredients are available for purchase. We also offer our spice academy and traditional cooking classes where you can learn to create authentic desert cuisine at home. Visit us or contact reserve@mirage.in for product availability and class schedules."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), digital payment methods (Google Pay, Apple Pay, PayTM), and cash. For reservations and large events, advance deposits may be required. Please ask about available payment options when booking."
  },
];

/* ─── HELPERS ───────────────────────────────────────── */
function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-4">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D97706]" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D97706]" />
    </div>
  );
}

function SectionLabel({ label }) {
  return (
    <p className="text-[#D97706] text-[0.65rem] tracking-[0.3em] uppercase font-medium font-sans mb-2">
      {label}
    </p>
  );
}

function Toast({ message, type = "success" }) {
  const colors = { success: "bg-amber-900/80 text-amber-300", error: "bg-red-900/80 text-red-300" };
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
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#D97706] to-[#EA580C] z-40" style={{ width: `${scrollProgress}%` }} />
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-500 ${
  scrolled 
    ? "py-3 bg-[#1F1105]/95 backdrop-blur-xl border-b border-[#D97706]/20 shadow-lg" 
    : "py-5 bg-[#1F1105]/80"
}`}>
        <button onClick={() => { setActivePage("Home"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="font-serif text-2xl font-bold text-[#D97706] tracking-widest hover:text-[#F59E0B] transition-colors">
          MIRAGE<span className="italic font-light text-[#FCD34D]">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(p => (
            <li key={p}>
              <button onClick={() => { setActivePage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className={`text-[0.9rem] tracking-[0.15em] uppercase font-semibold transition-colors duration-300 relative group ${
  activePage === p ? "text-[#FCD34D]" : "text-[#D4AF85] hover:text-[#FCD34D]"
}`}>
                {p}
                <span className={`absolute bottom-0 left-0 h-px bg-[#D97706] transition-all duration-300 ${activePage === p ? "w-full" : "w-0 group-hover:w-full"}`} />
              </button>
            </li>
          ))}
        </ul>

        <button onClick={() => { setActivePage("Contact"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="hidden md:block text-[1rem] tracking-[0.18em] uppercase border border-[#D97706] text-[#D97706] px-5 py-2 hover:bg-[#D97706] hover:text-[#1F1105] transition-all duration-300 font-medium">
          Book a Table
        </button>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#D97706] text-2xl hover:text-[#F59E0B] transition-colors">
          {menuOpen ? "✕" : "☰"}
        </button>

        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#1F1105]/98 backdrop-blur-xl border-t border-[#D97706]/10 py-6 flex flex-col items-center gap-5 animate-in fade-in slide-in-from-top">
            {NAV_LINKS.map(p => (
              <button key={p} onClick={() => { setActivePage(p); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className={`text-[0.7rem] tracking-[0.2em] uppercase transition-colors ${activePage === p ? "text-[#D97706]" : "text-[#A16207]"}`}>
                {p}
              </button>
            ))}
            <button onClick={() => { setActivePage("Contact"); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="mt-2 text-xl tracking-[0.18em] uppercase border border-[#D97706] text-[#D97706] px-6 py-2 hover:bg-[#D97706] hover:text-[#1F1105] transition-all duration-300">
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

/* ─── ABOUT PAGE ─────────────────────────────────────── */
function About() {
  return (
    <div className="bg-[#0F0804] pt-28">
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="animate-in fade-in duration-700">
          <SectionLabel label="Our Story" />
          <h2 className="font-serif text-5xl md:text-6xl text-[#FCD34D] leading-tight mb-6">
            Born from<br /><em className="text-[#D97706]">Ancient Spice Roads.</em><br />Crafted with Love.
          </h2>
          <GoldDivider />
          <div className="space-y-5 mt-8" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}>
            <p className="text-[#D4AF85] leading-relaxed hover:text-[#F9E8D9] transition-colors cursor-pointer">Mirage began as a dream to preserve the culinary heritage of the Sahara and Levantine traditions. Chef Amira Hassan, drawing from her family's recipes spanning generations, envisioned a space where desert gastronomy could be honored with elegance and authenticity.</p>
            <p className="text-[#D4AF85] leading-relaxed hover:text-[#F9E8D9] transition-colors cursor-pointer">Today, Mirage stands as a beacon for those seeking genuine, soul-stirring desert cuisine. Every tagine, every spice blend, every shared moment echoes the warmth and generosity of desert hospitality — where guests become family.</p>
          </div>
        </div>
        <div className="relative group animate-in fade-in duration-700 delay-200">
          <img src="https://luxe.net/wp-content/uploads/2015/08/dubai-one-only-royal-mirage-1.jpg"
            alt="Mirage interior" className="w-full h-[500px] object-cover group-hover:shadow-2xl transition-shadow" loading="lazy" />
          <div className="absolute -bottom-5 -left-5 bg-[#D97706] p-6 group-hover:bg-[#F59E0B] transition-colors cursor-pointer">
            <p className="font-serif text-4xl text-[#1F1105] font-bold">2010</p>
            <p className="text-[#1F1105] text-xs tracking-widest uppercase mt-1">Est. Desert Home</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#1A1107] border-y border-[#D97706]/10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel label="Our Journey" />
            <h2 className="font-serif text-4xl text-[#FCD34D]">Milestones</h2>
            <GoldDivider />
          </div>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D97706] via-[#D97706]/50 to-transparent" />
            <div className="space-y-12">
              {TIMELINE.map((item, i) => (
                <div key={i} className={`flex gap-8 items-start group cursor-pointer ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} pl-16 md:pl-0 group-hover:translate-x-2 transition-transform`}>
                    <span className="font-serif text-[#D97706] text-2xl block mb-2 group-hover:text-[#F59E0B] transition-colors">{item.year}</span>
                    <h3 className="font-serif text-xl text-[#FCD34D] mb-2">{item.title}</h3>
                    <p className="text-[#D4AF85] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="relative flex-shrink-0 hidden md:block">
                    <div className="w-3 h-3 rounded-full bg-[#D97706] ring-4 ring-[#D97706]/20 group-hover:ring-[#D97706]/40 transition-all" />
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
          <h2 className="font-serif text-4xl text-[#FCD34D]">Awards & Acclaim</h2>
          <GoldDivider />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["⭐⭐⭐⭐⭐", "Best Desert Cuisine", "Culinary Awards, 2023"],
            ["🏆", "Heritage Restaurant", "Intl. Dining, 2022"],
            ["🍷", "Spice Excellence", "Gastro Review, 2021"],
            ["🌟", "Critic's Choice", "Food Magazine, 2024"],
          ].map(([icon, award, org]) => (
            <div key={award} className="text-center p-8 border border-[#D97706]/15 hover:border-[#D97706]/40 hover:bg-[#D97706]/5 transition-all duration-300 cursor-pointer group">
              <div className="text-3xl mb-4 group-hover:scale-125 transition-transform">{icon}</div>
              <p className="font-serif text-[#F59E0B] text-sm mb-1">{award}</p>
              <p className="text-[#D4AF85] text-xs tracking-widest">{org}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ambience Images */}
      <section className="pb-28 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-3 h-[400px] md:h-[500px]">
          <img src="https://images.unsplash.com/photo-1522157183959-39b1e2e50ebc?w=600&q=85" alt="Ambience 1" className="col-span-2 w-full h-full object-cover hover:shadow-2xl transition-shadow cursor-pointer" loading="lazy" />
          <div className="flex flex-col gap-3">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=85" alt="Ambience 2" className="w-full h-1/2 object-cover hover:shadow-lg transition-shadow cursor-pointer" loading="lazy" />
            <img src="https://images.unsplash.com/photo-1564636684928-8f5293c34c16?w=400&q=85" alt="Ambience 3" className="w-full h-1/2 object-cover hover:shadow-lg transition-shadow cursor-pointer" loading="lazy" />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── SERVICES PAGE ──────────────────────────────────── */
function Services({ setActivePage }) {
  return (
    <div className="bg-[#0F0804] pt-28">
      <section className="max-w-3xl mx-auto px-6 py-20 text-center animate-in fade-in duration-700">
        <SectionLabel label="What We Offer" />
        <h2 className="font-serif text-5xl md:text-6xl text-[#FCD34D] leading-tight mb-4">
          Our <em className="text-[#D97706]">Services</em>
        </h2>
        <GoldDivider />
        <p className="text-[#D4AF85] mt-6 leading-relaxed hover:text-[#F9E8D9] transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}>
          Every service reflects our commitment to desert authenticity and modern luxury — where tradition and elegance dance together.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-28 grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((s, i) => (
          <button key={i} onClick={() => setActivePage("Contact")}
            className="group relative p-10 border border-[#D97706]/15 hover:border-[#D97706]/50 bg-[#1A1107] hover:bg-[#D97706]/5 transition-all duration-500 overflow-hidden text-left cursor-pointer active:scale-95">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#D97706] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-5xl mb-6 group-hover:scale-125 transition-transform">{s.icon}</div>
            <h3 className="font-serif text-2xl text-[#FCD34D] mb-3 group-hover:text-[#D97706] transition-colors duration-300">{s.title}</h3>
            <p className="text-[#D4AF85] leading-relaxed font-light">{s.desc}</p>
            <p className="mt-8 text-[0.6rem] tracking-[0.2em] uppercase text-[#D97706] border-b border-[#D97706]/30 pb-0.5 inline-block group-hover:border-[#D97706] transition-all duration-300">
              Enquire Now →
            </p>
          </button>
        ))}
      </section>

      {/* Private dining promo */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden group">
        <img src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1800&q=80"
          alt="Private dining" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500" loading="lazy" />
        <div className="relative text-center px-6 animate-in fade-in duration-700">
          <p className="font-serif text-3xl md:text-4xl text-[#FCD34D] mb-4 italic">Planning something special?</p>
          <button onClick={() => setActivePage("Contact")}
            className="px-8 py-4 bg-[#D97706] text-[#1F1105] text-[0.7rem] tracking-[0.2em] uppercase font-medium hover:bg-[#F59E0B] hover:shadow-lg transition-all duration-300 active:scale-95">
            Talk to Our Team
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
    <div className="bg-[#0F0804] pt-28">
      <section className="max-w-3xl mx-auto px-6 py-20 text-center animate-in fade-in duration-700">
        <SectionLabel label="Visual Story" />
        <h2 className="font-serif text-5xl md:text-6xl text-[#FCD34D] mb-4">Our <em className="text-[#D97706]">Portfolio</em></h2>
        <GoldDivider />
      </section>

      {/* Filters */}
      <div className="flex justify-center gap-6 mb-12 px-6 flex-wrap">
        {FILTERS.map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`text-[0.65rem] tracking-[0.2em] uppercase pb-1 border-b transition-all duration-300 cursor-pointer ${filter === f ? "border-[#D97706] text-[#D97706]" : "border-transparent text-[#D4AF85] hover:text-[#FCD34D]"}`}>
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
              <div className="absolute inset-0 bg-[#1F1105]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D97706]">{item.category}</span>
                <p className="font-serif text-[#FCD34D] text-base">{item.title}</p>
                <p className="text-[#D4AF85] text-xl">⊕</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-[#1F1105]/95 backdrop-blur-xl flex items-center justify-center p-6 animate-in fade-in duration-300"
          onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-8 text-[#D97706] text-2xl hover:text-[#F59E0B] transition-colors active:scale-95">✕</button>
          <div className="max-w-3xl w-full" onClick={e => e.stopPropagation()}>
            <img src={lightbox.img} alt={lightbox.title} className="w-full max-h-[80vh] object-contain animate-in zoom-in duration-300" />
            <div className="mt-4 text-center">
              <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D97706]">{lightbox.category}</span>
              <p className="font-serif text-xl text-[#FCD34D] mt-1">{lightbox.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── HELP PAGE ──────────────────────────────────────── */
function Help() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <div className="bg-[#0F0804] pt-28">
      <section className="max-w-3xl mx-auto px-6 py-20 text-center animate-in fade-in duration-700">
        <SectionLabel label="We're Here to Help" />
        <h2 className="font-serif text-5xl md:text-6xl text-[#FCD34D] mb-4">
          Frequently Asked <em className="text-[#D97706]">Questions</em>
        </h2>
        <GoldDivider />
        <p className="text-[#D4AF85] mt-6 leading-relaxed hover:text-[#F9E8D9] transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}>
          Find answers to common questions about reservations, dining, and everything Mirage.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-28">
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index}
              className="group border border-[#D97706]/15 hover:border-[#D97706]/40 transition-all duration-300"
            >
              <button
                     onMouseEnter={() => setOpenFaqIndex(index)}
                    onMouseLeave={() => setOpenFaqIndex(null)}
                     className="w-full flex items-center justify-between p-6 text-left hover:bg-[#1A1107]/50 transition-colors duration-300"
              >
                 <h3 className="font-serif text-lg md:text-xl text-[#FCD34D] group-hover:text-[#F59E0B] transition-colors flex-1 pr-4">
                  {faq.question}
                </h3>

                 <span
                  className={`text-xl text-[#D97706] transition-transform duration-300 ${
                  openFaqIndex === index ? "rotate-180" : ""
                  }`}
                  >
    ▼
                 </span>
             </button>
              {openFaqIndex === index && (
                <div className="border-t border-[#D97706]/10 px-6 py-4 bg-[#1A1107]/30 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-[#D4AF85] leading-relaxed font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 p-10 border border-[#D97706]/15 bg-[#1A1107] hover:border-[#D97706]/40 hover:bg-[#1A1107]/80 transition-all duration-300 text-center">
          <p className="font-serif text-2xl text-[#FCD34D] mb-4">Didn't find your answer?</p>
          <p className="text-[#D4AF85] mb-6 font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem" }}>
            Our team is here to help you with any questions or special requests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+912240019999"
              className="px-8 py-3 bg-[#D97706] text-[#1F1105] text-[0.7rem] tracking-[0.2em] uppercase font-medium hover:bg-[#F59E0B] transition-all duration-300 inline-block">
              📞 Call Us
            </a>
            <a href="mailto:reserve@mirage.in"
              className="px-8 py-3 border border-[#D97706]/50 text-[#D97706] text-[0.7rem] tracking-[0.2em] uppercase font-medium hover:border-[#D97706] hover:bg-[#D97706]/10 transition-all duration-300 inline-block">
              ✉️ Email Us
            </a>
          </div>
        </div>
      </section>
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

  const inputClass = "w-full bg-transparent border-b border-[#D97706]/20 focus:border-[#D97706] outline-none py-3 text-[#F9E8D9] text-sm placeholder-[#D4AF85]/50 transition-colors duration-300 font-light";

  return (
    <div className="bg-[#0F0804] pt-28">
      <section className="max-w-3xl mx-auto px-6 py-20 text-center animate-in fade-in duration-700">
        <SectionLabel label="Get In Touch" />
        <h2 className="font-serif text-5xl md:text-6xl text-[#FCD34D] mb-4">
          Make a <em className="text-[#D97706]">Reservation</em>
        </h2>
        <GoldDivider />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-28 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Form */}
        <div className="bg-[#1A1107] border border-[#D97706]/15 p-10 hover:border-[#D97706]/30 transition-colors">
          <h3 className="font-serif text-2xl text-[#FCD34D] mb-8">Reserve Your Table</h3>
          {sent && <Toast message="✓ Reservation request received! We'll confirm within 24 hours." type="success" />}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D4AF85] block mb-2">Full Name</label>
                <input type="text" required placeholder="Your Name" className={inputClass}
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D4AF85] block mb-2">Email</label>
                <input type="email" required placeholder="your@email.com" className={inputClass}
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D4AF85] block mb-2">Phone</label>
                <input type="tel" placeholder="+91 98765 43210" className={inputClass}
                  value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div>
                <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D4AF85] block mb-2">Preferred Date</label>
                <input type="date" required className={inputClass}
                  value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D4AF85] block mb-2">Number of Guests</label>
                <select className={inputClass}
                  value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D4AF85] block mb-2">Occasion</label>
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
              className="w-full py-4 bg-[#D97706] text-[#1F1105] text-[0.7rem] tracking-[0.25em] uppercase font-medium hover:bg-[#F59E0B] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 active:scale-95">
              {loading ? "Processing..." : "Confirm Reservation"}
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="space-y-10">
          {/* Map */}
          <div className="relative overflow-hidden h-56 bg-[#251608] border border-[#D97706]/15 flex items-center justify-center group cursor-pointer hover:border-[#D97706]/40 transition-colors"
            onClick={() => setMapOpen(true)}>
            <iframe width="100%" height="100%" frameBorder="0" loading="lazy" allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.823856782605!2d72.82365!3d19.0173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c5c5c5c5c5%3A0x0!2s12%20Napean%20Sea%20Road%2C%20Malabar%20Hill!5e0!3m2!1sen!2sin!4v1234567890"
              style={{ border: "none", opacity: mapOpen ? 1 : 0.5 }} />
            <div className="absolute inset-0 bg-[#1F1105]/30 group-hover:bg-transparent transition-colors flex items-center justify-center">
              <p className="text-[#D97706] text-center">📍 Click to Open Full Map<br/><span className="text-xs">12, Napean Sea Road, Mumbai</span></p>
            </div>
          </div>

          {/* Hours */}
          <div className="p-8 border border-[#D97706]/15 bg-[#1A1107] hover:border-[#D97706]/40 transition-colors">
            <h3 className="font-serif text-xl text-[#F59E0B] mb-6">Opening Hours</h3>
            {[["Monday – Friday", "12:00 PM – 11:00 PM"], ["Saturday", "11:00 AM – 11:30 PM"], ["Sunday", "11:00 AM – 10:00 PM"]].map(([day, time]) => (
              <div key={day} className="flex justify-between py-3 border-b border-[#D97706]/10 last:border-0 hover:text-[#F9E8D9] transition-colors cursor-pointer">
                <span className="text-[#D4AF85] text-sm">{day}</span>
                <span className="text-[#FCD34D] text-sm font-light">{time}</span>
              </div>
            ))}
          </div>

          {/* Contact Details */}
          <div className="space-y-5">
            {/* PHONE */}
            <a href="tel:+912240019999"
              className="flex items-center gap-4 group hover:translate-x-1 transition-transform">
              <div className="w-10 h-10 border border-[#D97706]/25 group-hover:border-[#D97706] flex items-center justify-center">
                📞
              </div>
              <div>
                <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D4AF85] group-hover:text-[#D97706]">
                  Reservations
                </p>
                <p className="text-[#FCD34D] text-sm group-hover:text-[#F59E0B]">
                  +91 22 4001 9999
                </p>
              </div>
            </a>

            {/* EMAIL */}
            <a href="mailto:reserve@mirage.in"
              className="flex items-center gap-4 group hover:translate-x-1 transition-transform">
              <div className="w-10 h-10 border border-[#D97706]/25 group-hover:border-[#D97706] flex items-center justify-center">
                ✉️
              </div>
              <div>
                <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D4AF85] group-hover:text-[#D97706]">
                  Email
                </p>
                <p className="text-[#FCD34D] text-sm group-hover:text-[#F59E0B]">
                  reserve@mirage.in
                </p>
              </div>
            </a>

            {/* ADDRESS */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=12+Napean+Sea+Road+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group hover:translate-x-1 transition-transform">
              <div className="w-10 h-10 border border-[#D97706]/25 group-hover:border-[#D97706] flex items-center justify-center">
                📍
              </div>
              <div>
                <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D4AF85] group-hover:text-[#D97706]">
                  Address
                </p>
                <p className="text-[#FCD34D] text-sm group-hover:text-[#F59E0B]">
                  12, Napean Sea Road, Mumbai
                </p>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-6 border-t border-[#D97706]/10">
            <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D97706] mb-4">Follow Us</p>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social, i) => (
                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2 border border-[#D97706]/30 text-[0.65rem] text-[#D97706] hover:border-[#D97706] hover:bg-[#D97706]/10 transition-all duration-300 group">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Map Modal */}
      {mapOpen && (
        <div className="fixed inset-0 z-50 bg-[#1F1105]/95 backdrop-blur-xl flex items-center justify-center p-6 animate-in fade-in"
          onClick={() => setMapOpen(false)}>
          <button className="absolute top-6 right-8 text-[#D97706] text-2xl hover:text-[#F59E0B] transition-colors z-10">✕</button>
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
    <footer className="bg-[#0A0603] border-t border-[#D97706]/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <button onClick={() => { setActivePage("Home"); window.scrollTo({ top: 0 }); }}
              className="font-serif text-2xl font-bold text-[#D97706] tracking-widest mb-4 hover:text-[#F59E0B] transition-colors cursor-pointer">
              MIRAGE<span className="italic font-light text-[#FCD34D]">.</span>
            </button>
            <p className="text-[#D4AF85] text-sm leading-relaxed font-light max-w-xs hover:text-[#F9E8D9] transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Authentic desert cuisine. Five-star experience. Where ancient spice roads meet modern elegance.
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold tracking-[0.15em] uppercase text-[#D97706] mb-5">Navigation</p>
            <ul className="space-y-3">
              {NAV_LINKS.map(p => (
                <li key={p}>
                  <button onClick={() => { setActivePage(p); window.scrollTo({ top: 0 }); }}
                    className="text-[#D4AF85] text-sm hover:text-[#F9E8D9] transition-colors cursor-pointer">
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xl font-semibold tracking-[0.15em] uppercase text-[#D97706] mb-5">Contact</p>
            <div className="space-y-4">
              {/* ADDRESS */}
              <a 
                href="https://www.google.com/maps/search/?api=1&query=12+Napean+Sea+Road+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#D4AF85] text-sm hover:text-[#F9E8D9] transition-colors"
              >
                📍 12, Napean Sea Road<br/>
                Mumbai, Maharashtra 400006
              </a>

              {/* PHONE */}
              <a 
                href="tel:+912240019999"
                className="block text-[#D4AF85] text-sm hover:text-[#F9E8D9] transition-colors"
              >
                📞 +91 22 4001 9999
              </a>

              {/* EMAIL */}
              <a 
                href="mailto:reserve@mirage.in"
                className="block text-[#D4AF85] text-sm hover:text-[#F9E8D9] transition-colors"
              >
                ✉️ reserve@mirage.in
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-6 pt-6 border-t border-[#D97706]/10">
              <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D97706] mb-3">Follow</p>
              <div className="flex gap-2">
                {[
                  { icon: "📱", url: "https://instagram.com" },
                  { icon: "👍", url: "https://facebook.com" },
                  { icon: "🐦", url: "https://twitter.com" },
                  { icon: "▶️", url: "https://youtube.com" },
                ].map((s, i) => (
                  <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                    className="w-8 h-8 border border-[#D97706]/25 flex items-center justify-center hover:border-[#D97706] hover:bg-[#D97706]/10 transition-all text-sm">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#D97706]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#D4AF85] text-xs tracking-widest hover:text-[#F9E8D9] transition-colors cursor-pointer">© 2025 Mirage Fine Dining. All rights reserved.</p>
          <p className="text-[#D4AF85] text-xs tracking-widest hover:text-[#F9E8D9] transition-colors cursor-pointer">Crafted with passion in the heart of tradition</p>
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

  const PAGE = { Home, About, Services, Portfolio, Help, Contact };
  const PageComponent = PAGE[activePage];

  return (
    <div className="min-h-screen bg-[#0F0804]">
      <Navbar activePage={activePage} setActivePage={navigate} />
      <main>
        <PageComponent setActivePage={navigate} />
      </main>
      <Footer setActivePage={navigate} />
    </div>
  );
}
