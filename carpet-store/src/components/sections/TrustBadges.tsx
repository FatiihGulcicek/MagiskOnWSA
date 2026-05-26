"use client";

import { motion } from "framer-motion";
import { Shield, Truck, RefreshCw, Headphones, Award, Lock } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "%100 Orijinallik Garantisi",
    desc: "Her ürün el yapımı ve belgelenmiş özgün",
  },
  {
    icon: Truck,
    title: "Dünyaya Ücretsiz Kargo",
    desc: "₺5.000 üzeri siparişlerde ücretsiz teslimat",
  },
  {
    icon: RefreshCw,
    title: "30 Gün İade",
    desc: "Memnun kalmazsan sorunsuz iade imkanı",
  },
  {
    icon: Headphones,
    title: "Uzman Danışmanlık",
    desc: "Uzman ekibimiz seçiminde yardımcı olur",
  },
  {
    icon: Award,
    title: "Ödüllü Zanaat",
    desc: "UNESCO tescilli el sanatları geleneği",
  },
  {
    icon: Lock,
    title: "Güvenli Ödeme",
    desc: "256-bit SSL ile şifreli güvenli alışveriş",
  },
];

export function TrustBadges() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cream-50 border-y border-cream-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl hover:bg-white hover:shadow-card transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-full bg-terracotta-50 border border-terracotta-100 flex items-center justify-center">
                <badge.icon className="w-5 h-5 text-terracotta-500" />
              </div>
              <div>
                <p className="text-xs font-semibold text-obsidian-800 leading-tight mb-1">{badge.title}</p>
                <p className="text-[10px] text-obsidian-400 leading-snug">{badge.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
