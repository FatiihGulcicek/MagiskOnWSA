"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Award, Globe } from "lucide-react";

const stats = [
  { value: "25+", label: "Yıllık Deneyim" },
  { value: "2,400+", label: "Parça Koleksiyon" },
  { value: "68", label: "Ülkeye İhracat" },
  { value: "100%", label: "El Yapımı" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-cream-100">
      {/* Background image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/85 via-obsidian-950/60 to-obsidian-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/50 via-transparent to-transparent" />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-16 w-64 h-64 rounded-full bg-terracotta-500/10 blur-3xl" />
      <div className="absolute bottom-20 left-1/3 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-16 items-center"
      >
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
          >
            <Award className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-xs font-medium text-cream-200 tracking-wider uppercase">
              UNESCO Yaşayan Miras Zanaatı
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Yüzyıllık{" "}
            <span className="relative">
              <span className="text-gradient-gold">Ustalık</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6C50 2 100 2 198 6"
                  stroke="#d97706"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            ,{" "}
            <br />
            Modern{" "}
            <span className="italic font-normal text-cream-300">Estetik</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-cream-300 text-lg leading-relaxed mb-10 max-w-lg"
          >
            Anadolu'nun dört köşesinden getirilen yünler, doğal boyalar ve nesiller boyu aktarılan tekniklerle dokunmuş eşsiz el halıları. Her parça bir sanat eseri.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/koleksiyon" className="btn-primary group text-base">
              Koleksiyonu Keşfet
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/hakkimizda"
              className="flex items-center gap-2 px-8 py-4 text-white border-2 border-white/30 hover:border-white/60 rounded-full font-medium transition-all duration-200 hover:bg-white/10 backdrop-blur-sm text-base"
            >
              Hikayemiz
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center gap-4 mt-10"
          >
            <div className="flex -space-x-2">
              {["https://i.pravatar.cc/40?img=1","https://i.pravatar.cc/40?img=2","https://i.pravatar.cc/40?img=3","https://i.pravatar.cc/40?img=4"].map((src, i) => (
                <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-3 h-3 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-xs text-cream-400">4.9 — 850+ müşteri yorumu</p>
            </div>
          </motion.div>
        </div>

        {/* Stats card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="relative">
            {/* Main card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-[0_32px_80px_-16px_rgba(0,0,0,0.4)]">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-5 h-5 text-terracotta-400" />
                <span className="text-sm font-medium text-cream-200">Dünyaya Ulaşıyoruz</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="bg-white/10 rounded-2xl p-5 text-center"
                  >
                    <div className="font-display text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-cream-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-terracotta-500/20 border border-terracotta-500/30 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-cream-200">Bu Hafta En Çok Satılanlar</span>
                  <span className="tag bg-terracotta-500 text-white">Canlı</span>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=100&q=70"
                    alt=""
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-white">Anadolu Kilim</p>
                    <p className="text-xs text-cream-400">Konya Kökenli</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-sm font-bold text-gold-400">₺8.500</p>
                    <p className="text-xs text-cream-400">~$280</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-gold-500 text-obsidian-950 rounded-2xl px-4 py-2 shadow-luxury-sm"
            >
              <p className="text-xs font-bold">Yeni Koleksiyon</p>
              <p className="text-[10px] font-medium">Sonbahar 2024</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fefdfb] to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-cream-400 tracking-widest uppercase">Aşağı Kaydır</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-cream-400/50 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-cream-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
