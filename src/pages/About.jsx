import SectionLabel from "../components/SectionLabel";
import GoldDivider from "../components/GoldDivider";
import { TIMELINE } from "../data/data";

export default function About() {
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
          <img src="https://i.pinimg.com/originals/8f/dc/32/8fdc32e3ccdf1faa0d0cbf3a21922eee.png" alt="Ambience 1" className="col-span-2 w-full h-full object-cover hover:shadow-2xl transition-shadow cursor-pointer" loading="lazy" />
          <div className="flex flex-col gap-3">
            <img src="https://images.unsplash.com/photo-1588881032495-5c85f600ccce?mark=https:%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&crop=faces%2Cedges&blend-w=1&blend=000000&blend-mode=normal&blend-alpha=10&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzU3OTg2NTg0fA&ixlib=rb-4.1.0" alt="Ambience 2" className="w-full h-1/2 object-cover hover:shadow-lg transition-shadow cursor-pointer" loading="lazy" />
            <img src="https://img95.699pic.com/photo/60018/5015.jpg_wh300.jpg!/fh/300/quality/90" alt="Ambience 3" className="w-full h-1/2 object-cover hover:shadow-lg transition-shadow cursor-pointer" loading="lazy" />
          </div>
        </div>
      </section>
    </div>
  );
}