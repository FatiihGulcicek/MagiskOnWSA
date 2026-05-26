"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const regions = [
  {
    id: "hereke",
    name: "Hereke",
    city: "Kocaeli",
    specialty: "İpek Halı",
    description: "Osmanlı saray geleneğinin devamı. Milyonlarca düğüm/m² yoğunluğuyla dünyanın en ince halıları.",
    color: "#d4522a",
    products: 18,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  },
  {
    id: "oushak",
    name: "Uşak",
    city: "Uşak",
    specialty: "Yün Halı",
    description: "Asırlık Uşak dokuma okulu. Soft renk paletleri ve görkemli madalyon desenleriyle tanınan halılar.",
    color: "#b45309",
    products: 24,
    image: "https://images.unsplash.com/photo-1588362951121-3ee319b018b2?w=400&q=80",
  },
  {
    id: "konya",
    name: "Konya",
    city: "Konya",
    specialty: "Kilim",
    description: "Düz dokuma kilimin merkezi. Geometrik motifler ve geleneksel sembollerle bezenmiş özgün parçalar.",
    color: "#0f766e",
    products: 31,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80",
  },
  {
    id: "gaziantep",
    name: "Gaziantep",
    city: "Gaziantep",
    specialty: "Sumak & Cicim",
    description: "Güneydoğu Anadolu'nun zengin dokusu. Sumak ve cicim tekniğiyle üretilen yıldız ve eşkenar dörtgen motifleri.",
    color: "#7c3aed",
    products: 15,
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=400&q=80",
  },
  {
    id: "kayseri",
    name: "Kayseri",
    city: "Kayseri",
    specialty: "İpek Kilim",
    description: "Hem ticaret hem zanaat şehri. İpek kilim ve bukağılı halılarıyla tanınan İç Anadolu merkezi.",
    color: "#0369a1",
    products: 12,
    image: "https://images.unsplash.com/photo-1567225591450-06036b3392a6?w=400&q=80",
  },
];

export function RegionalMap() {
  const [active, setActive] = useState(regions[0]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-medium text-terracotta-500 uppercase tracking-[0.25em] mb-4 ornament"
          >
            Bölgesel Koleksiyonlar
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-bold text-obsidian-950 mb-4"
          >
            Türkiye&apos;nin Dokuma{" "}
            <span className="text-gradient italic font-normal">Merkezleri</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-obsidian-500 max-w-2xl mx-auto"
          >
            Her bölge, kendine özgü teknik, motif ve renk anlayışıyla yüzyıllardır dokuma sanatını yaşatmaktadır.
          </motion.p>
        </div>

        {/* Region tabs + detail */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-8">
          {/* Region list */}
          <div className="space-y-2">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setActive(region)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border ${
                  active.id === region.id
                    ? "bg-white border-cream-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]"
                    : "border-transparent hover:bg-white/60 hover:border-cream-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: region.color }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-semibold text-obsidian-900">{region.name}</span>
                      <span className="text-xs text-obsidian-400">{region.products} parça</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full text-white"
                        style={{ backgroundColor: region.color }}
                      >
                        {region.specialty}
                      </span>
                      <span className="text-xs text-obsidian-400 flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5" />
                        {region.city}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-3xl overflow-hidden border border-cream-200 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)]"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={active.image}
                  alt={active.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">{active.name}</h3>
                    <p className="text-cream-300 text-sm">{active.city}, Türkiye</p>
                  </div>
                  <span
                    className="px-3 py-1.5 rounded-full text-sm font-medium text-white"
                    style={{ backgroundColor: active.color + "cc" }}
                  >
                    {active.specialty}
                  </span>
                </div>
              </div>
              <div className="p-7">
                <p className="text-obsidian-600 leading-relaxed mb-6">{active.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-7">
                  <div className="p-4 bg-cream-50 rounded-2xl border border-cream-200">
                    <div className="text-2xl font-display font-bold text-obsidian-900">{active.products}</div>
                    <div className="text-xs text-obsidian-500 mt-1">Koleksiyondaki Parça</div>
                  </div>
                  <div className="p-4 bg-cream-50 rounded-2xl border border-cream-200">
                    <div className="text-2xl font-display font-bold text-obsidian-900">Özgün</div>
                    <div className="text-xs text-obsidian-500 mt-1">Her Parça Eşsiz</div>
                  </div>
                </div>
                <Link
                  href={`/bolgesel/${active.id}`}
                  className="flex items-center gap-2 px-6 py-3 bg-obsidian-950 text-white font-medium rounded-full hover:bg-obsidian-800 transition-colors text-sm w-fit group"
                >
                  {active.name} Koleksiyonu
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
