import { useState } from "react";
import SectionLabel from "../components/SectionLabel";
import GoldDivider from "../components/GoldDivider";

// ✅ IMPORT FAQS FROM data.js
import { FAQS } from "../data/data"; // ⚠️ adjust path if needed

export default function Help() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <div className="bg-[#0F0804] pt-28">
      
      {/* Header */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <SectionLabel label="We're Here to Help" />
        <h2 className="font-serif text-5xl text-[#FCD34D] mb-4">
          Frequently Asked <em className="text-[#D97706]">Questions</em>
        </h2>
        <GoldDivider />
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 pb-28">
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              onMouseEnter={() => setOpenFaqIndex(index)}
              onMouseLeave={() => setOpenFaqIndex(null)}
              className="border border-[#D97706]/20 hover:border-[#D97706] transition-all duration-300"
            >
              <div className="flex justify-between p-6">
                <h3 className="text-[#FCD34D]">{faq.question}</h3>
                <span className="text-[#D97706]">
                  {openFaqIndex === index ? "▲" : "▼"}
                </span>
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openFaqIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4 text-[#D4AF85]">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}