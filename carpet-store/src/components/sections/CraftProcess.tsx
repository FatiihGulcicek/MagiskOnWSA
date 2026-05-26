"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Ham Madde Seçimi",
    description: "Anadolu'nun farklı bölgelerinden el seçimiyle toplanan en kaliteli yünler ve doğal ipekler kullanılır.",
    icon: "🌿",
    color: "from-emerald-500 to-teal-600",
  },
  {
    number: "02",
    title: "Doğal Boyama",
    description: "Bitki, maden ve böcek kökenli doğal boyalar kullanılarak renklere solmayan bir karakter kazandırılır.",
    icon: "🎨",
    color: "from-terracotta-500 to-orange-600",
  },
  {
    number: "03",
    title: "Desen Tasarımı",
    description: "Yüzyıllık motif şablonları esas alınarak her halı için eşsiz bir desen haritası çizilir.",
    icon: "✏️",
    color: "from-blue-500 to-indigo-600",
  },
  {
    number: "04",
    title: "El Dokuma",
    description: "Ustalar tarafından el tezgahında düğüm düğüm dokunur. Bir m² için haftalar harcanabilir.",
    icon: "🧵",
    color: "from-gold-500 to-amber-600",
  },
  {
    number: "05",
    title: "Kalite Kontrolü",
    description: "Her parça ustalar tarafından incelenir; düzensizlikler tek tek el ile giderilir.",
    icon: "🔍",
    color: "from-purple-500 to-violet-600",
  },
  {
    number: "06",
    title: "Yıkama & Kurutma",
    description: "Geleneksel yöntemlerle yıkanan halılar güneşte kurutulur; renk ve doku mükemmelleşir.",
    icon: "💧",
    color: "from-cyan-500 to-blue-600",
  },
];

export function CraftProcess() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-obsidian-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-terracotta-500 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gold-500 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-medium text-terracotta-400 uppercase tracking-[0.25em] mb-4 ornament"
          >
            Zanaat Hikayesi
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-bold text-white mb-5"
          >
            Her Halı Bir{" "}
            <span className="text-gradient-gold italic font-normal">Yolculuk</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-obsidian-400 leading-relaxed"
          >
            Ham yünden mükemmel bir esere uzanan süreç, yüzyıllık bilgi ve modern kalite anlayışının birleşimidir.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-obsidian-900 rounded-3xl p-7 border border-obsidian-800 hover:border-obsidian-700 transition-all duration-300"
            >
              {/* Number */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-obsidian-950 border border-obsidian-800 flex items-center justify-center">
                <span className="text-xs font-bold text-terracotta-400">{step.number}</span>
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-xl mb-5 shadow-lg`}>
                {step.icon}
              </div>

              <h3 className="font-display font-semibold text-lg text-white mb-3">{step.title}</h3>
              <p className="text-sm text-obsidian-400 leading-relaxed">{step.description}</p>

              {/* Arrow for non-last items */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  {(i + 1) % 3 !== 0 && (
                    <div className="w-8 h-0.5 bg-gradient-to-r from-obsidian-700 to-transparent" />
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <p className="font-display italic text-xl text-cream-300">
            "Her düğüm, ustalığın sessiz bir şahididir."
          </p>
          <p className="text-sm text-obsidian-500 mt-2">— Anadolu Dokuma Ustası Geleneği</p>
        </motion.div>
      </div>
    </section>
  );
}
