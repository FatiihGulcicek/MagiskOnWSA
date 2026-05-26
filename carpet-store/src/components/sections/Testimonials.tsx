"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Emma Richardson",
    location: "London, UK",
    avatar: "https://i.pravatar.cc/80?img=47",
    rating: 5,
    text: "I ordered the Hereke silk carpet for our living room renovation. The quality is absolutely extraordinary — the silk shimmers in different lights and the detail work is breathtaking. Shipped within 3 days to London. Highly recommend!",
    product: "Hereke İpek Halısı",
    flag: "🇬🇧",
  },
  {
    id: 2,
    name: "Mehmet Kaya",
    location: "Berlin, Almanya",
    avatar: "https://i.pravatar.cc/80?img=12",
    rating: 5,
    text: "Annem için geleneksel bir kilim aldım. Harika paketleme, mükemmel kalite. Tam tanımlandığı gibi geldi. Anadolu'nun ruhunu Berlin'e taşıdım. Teşekkürler!",
    product: "Anadolu Kilim",
    flag: "🇩🇪",
  },
  {
    id: 3,
    name: "Sophie Laurent",
    location: "Paris, Fransa",
    avatar: "https://i.pravatar.cc/80?img=29",
    rating: 5,
    text: "J'ai acheté deux kilims pour notre boutique à Paris. Mes clients les adorent! La qualité est incomparable avec ce qu'on trouve localement. Je reviendrai certainement pour une commande plus importante.",
    product: "Konya Kilim Seti",
    flag: "🇫🇷",
  },
  {
    id: 4,
    name: "James Park",
    location: "New York, ABD",
    avatar: "https://i.pravatar.cc/80?img=33",
    rating: 5,
    text: "Third purchase from Anadolu and every time better than the last. Their vintage selection is curated with genuine expertise. The care and authenticity in every piece is evident. A true treasure.",
    product: "Vintage Anadolu Halısı",
    flag: "🇺🇸",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fefdfb] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-medium text-terracotta-500 uppercase tracking-[0.25em] mb-4 ornament"
            >
              Müşteri Yorumları
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl font-bold text-obsidian-950 mb-6"
            >
              Dünyadan{" "}
              <span className="text-gradient italic font-normal">Sesler</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-obsidian-500 mb-10 leading-relaxed"
            >
              68 ülkeden müşterilerimiz, Anadolu el sanatının mükemmeliyetini yaşıyor ve bizimle paylaşıyor.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "4.9/5", label: "Ortalama Puan" },
                { value: "850+", label: "Müşteri Yorumu" },
                { value: "98%", label: "Memnuniyet" },
              ].map((s) => (
                <div key={s.label} className="text-center p-4 bg-cream-50 rounded-2xl border border-cream-200">
                  <div className="font-display font-bold text-2xl text-terracotta-500">{s.value}</div>
                  <div className="text-xs text-obsidian-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Testimonial card carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-8 border border-cream-200 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.1)]"
              >
                <Quote className="w-8 h-8 text-terracotta-200 mb-5" />
                <p className="text-obsidian-700 leading-relaxed text-lg mb-7 font-light italic">
                  "{testimonials[current].text}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[current].avatar}
                      alt={testimonials[current].name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-cream-200"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-obsidian-900">{testimonials[current].name}</span>
                        <span className="text-base">{testimonials[current].flag}</span>
                      </div>
                      <div className="text-xs text-obsidian-500">{testimonials[current].location}</div>
                      <div className="text-xs text-terracotta-500 font-medium mt-0.5">{testimonials[current].product}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                      ))}
                    </div>
                    <span className="text-xs text-obsidian-400">Doğrulanmış Alışveriş</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-5">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? "w-8 bg-terracotta-500" : "w-1.5 bg-cream-300 hover:bg-cream-400"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-cream-300 hover:border-terracotta-400 flex items-center justify-center text-obsidian-600 hover:text-terracotta-500 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-terracotta-500 hover:bg-terracotta-600 flex items-center justify-center text-white transition-all shadow-[0_4px_12px_-2px_rgba(212,82,42,0.4)]"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
