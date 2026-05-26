"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Award, Users, Globe, Heart } from "lucide-react";

const team = [
  { name: "Ahmet Yılmaz", role: "Kurucu & Baş Usta", image: "https://i.pravatar.cc/200?img=57", years: "30+ yıl" },
  { name: "Fatma Kaya", role: "Koleksiyon Direktörü", image: "https://i.pravatar.cc/200?img=47", years: "15+ yıl" },
  { name: "Mehmet Demir", role: "Teknik Uzman", image: "https://i.pravatar.cc/200?img=12", years: "20+ yıl" },
];

const milestones = [
  { year: "1999", event: "İstanbul'da küçük bir atölye ile başladık" },
  { year: "2004", event: "İlk uluslararası fuara katıldık — Frankfurt Domotex" },
  { year: "2010", event: "100 ülkeye ihracat hedefine ulaştık" },
  { year: "2016", event: "UNESCO Yaşayan Miras tescili aldık" },
  { year: "2020", event: "Online mağazamızı açtık, dünyaya kapı açtık" },
  { year: "2024", event: "2.400+ parçalık koleksiyonumuza ulaştık" },
];

export default function HakkimizdaPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-obsidian-950 py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=60')",
            backgroundSize: "cover", backgroundPosition: "center"
          }} />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950/80 to-obsidian-950" />
          <div className="relative max-w-4xl mx-auto text-center">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-terracotta-400 uppercase tracking-[0.25em] mb-4 ornament">
              Hikayemiz
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-5xl sm:text-6xl font-bold text-white mb-6">
              25 Yıllık{" "}<span className="text-gradient-gold italic font-normal">Tutku</span>{" "}ve Zanaat
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-obsidian-400 text-lg leading-relaxed max-w-2xl mx-auto">
              1999'dan bu yana Anadolu'nun köklü dokuma geleneğini modern dünyayla buluşturuyoruz. Her halı, bir aile mirasının devamıdır.
            </motion.p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fefdfb]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium text-terracotta-500 uppercase tracking-[0.2em] mb-4 ornament">Misyonumuz</p>
              <h2 className="font-display text-4xl font-bold text-obsidian-950 mb-6">
                Zanaatçıyı ve{" "}<span className="text-gradient italic font-normal">Müşteriyi</span>{" "}Buluşturmak
              </h2>
              <div className="space-y-4 text-obsidian-600 leading-relaxed">
                <p>Türkiye'nin dört köşesindeki dokuma ustalarıyla doğrudan çalışıyoruz. Aracısız bu ilişki; hem ustanın emeğinin hakkını almasını sağlıyor hem de size orijinalliği garanti ediyor.</p>
                <p>Her ürünün nereden geldiğini, kimin dokunduğunu ve hangi geleneği taşıdığını tam olarak biliyoruz. Bu şeffaflık, bizi sıradan bir e-ticaret sitesinden ayırıyor.</p>
                <p>Amacımız yalnızca satmak değil; Anadolu'nun yaşayan kültürel mirasını gelecek nesillere aktarmak.</p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-luxury">
                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" alt="Atölye" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-terracotta-500 rounded-2xl p-6 text-white shadow-luxury">
                <div className="font-display text-3xl font-bold">2,400+</div>
                <div className="text-terracotta-200 text-sm">Eşsiz Koleksiyon Parçası</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-medium text-terracotta-500 uppercase tracking-[0.25em] mb-4 ornament">Değerlerimiz</p>
              <h2 className="font-display text-4xl font-bold text-obsidian-950">
                Ne İçin <span className="text-gradient italic font-normal">Duruyoruz</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Award, title: "Orijinallik", desc: "Her parça el yapımı ve belgelenmiş orijinal Türk dokuma eseri.", color: "terracotta" },
                { icon: Users, title: "Ustalık Saygısı", desc: "Zanaatçılarla adil ücret ve uzun vadeli ortaklık ilişkisi.", color: "gold" },
                { icon: Globe, title: "Sürdürülebilirlik", desc: "Doğal boyalar, yenilenebilir ham maddeler ve sıfır atık hedefi.", color: "emerald" },
                { icon: Heart, title: "Tutku", desc: "Her halı bir sevgi eseri; üretimden paketlemeye özenle yapılır.", color: "rose" },
              ].map((v) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-7 border border-cream-200 shadow-card"
                >
                  <div className="w-12 h-12 bg-terracotta-50 rounded-2xl flex items-center justify-center mb-5">
                    <v.icon className="w-5 h-5 text-terracotta-500" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-obsidian-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-obsidian-500 leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fefdfb]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-medium text-terracotta-500 uppercase tracking-[0.25em] mb-4 ornament">Tarihçe</p>
              <h2 className="font-display text-4xl font-bold text-obsidian-950">
                25 Yıllık <span className="text-gradient italic font-normal">Yolculuk</span>
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-cream-300" />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-8 items-start"
                  >
                    <div className="relative shrink-0">
                      <div className="w-12 h-12 bg-terracotta-500 rounded-full flex items-center justify-center shadow-[0_4px_12px_-2px_rgba(212,82,42,0.4)]">
                        <span className="text-white text-xs font-bold">{m.year.slice(2)}</span>
                      </div>
                    </div>
                    <div className="bg-white border border-cream-200 rounded-2xl p-5 flex-1 shadow-card">
                      <div className="font-display font-bold text-terracotta-500 mb-1">{m.year}</div>
                      <p className="text-obsidian-700">{m.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-medium text-terracotta-500 uppercase tracking-[0.25em] mb-4 ornament">Ekibimiz</p>
              <h2 className="font-display text-4xl font-bold text-obsidian-950">
                Arkamızdaki <span className="text-gradient italic font-normal">İnsanlar</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-7 text-center border border-cream-200 shadow-card"
                >
                  <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-3 border-cream-200" />
                  <h3 className="font-display font-bold text-obsidian-900">{member.name}</h3>
                  <p className="text-sm text-terracotta-500 mb-2">{member.role}</p>
                  <span className="tag bg-cream-100 text-obsidian-500 text-xs">{member.years} deneyim</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
