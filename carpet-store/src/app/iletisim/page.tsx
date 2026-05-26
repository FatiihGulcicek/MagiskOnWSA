"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

export default function IletisimPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-obsidian-950 py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-terracotta-400 uppercase tracking-[0.25em] mb-4 ornament">
              Bize Ulaşın
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-5xl font-bold text-white mb-4">
              İletişim
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-obsidian-400">
              Sorularınız, özel sipariş talepleriniz veya uzman danışmanlık için buradayız.
            </motion.p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fefdfb]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-obsidian-950 mb-8">Nasıl Ulaşılır?</h2>
              <div className="space-y-5">
                {[
                  { icon: MapPin, title: "Adres", content: "Kapalıçarşı, Nuruosmaniye Cad. No: 14, Beyazıt — Fatih, İstanbul" },
                  { icon: Phone, title: "Telefon", content: "+90 212 555 0100" },
                  { icon: Mail, title: "E-posta", content: "info@anadolu-hali.com" },
                  { icon: Clock, title: "Çalışma Saatleri", content: "Pzt–Cmt: 09:00–19:00 | Pazar: 10:00–17:00" },
                ].map(({ icon: Icon, title, content }) => (
                  <div key={title} className="flex gap-4 p-5 bg-cream-50 rounded-2xl border border-cream-200">
                    <div className="w-10 h-10 bg-terracotta-50 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-terracotta-500" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-obsidian-400 uppercase tracking-wide mb-1">{title}</p>
                      <p className="text-obsidian-700">{content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/902125550100"
                className="mt-6 flex items-center gap-3 p-5 bg-green-500 text-white rounded-2xl hover:bg-green-600 transition-colors shadow-[0_4px_16px_-4px_rgba(34,197,94,0.5)]"
              >
                <MessageCircle className="w-5 h-5" />
                <div>
                  <p className="font-medium">WhatsApp ile Hemen Yazın</p>
                  <p className="text-green-100 text-sm">Genellikle birkaç dakika içinde yanıt veriyoruz</p>
                </div>
              </a>
            </div>

            {/* Contact form */}
            <div className="bg-white rounded-3xl p-8 border border-cream-200 shadow-card">
              <h2 className="font-display text-2xl font-bold text-obsidian-950 mb-6">Mesaj Gönderin</h2>
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✉️</div>
                  <h3 className="font-display text-xl font-bold text-obsidian-900 mb-2">Mesajınız Ulaştı!</h3>
                  <p className="text-obsidian-500">En kısa sürede size geri döneceğiz.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-obsidian-600 mb-1.5">Ad Soyad</label>
                      <input type="text" required placeholder="Ahmet Yılmaz" className="input-luxury" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-obsidian-600 mb-1.5">E-posta</label>
                      <input type="email" required placeholder="ahmet@mail.com" className="input-luxury" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-obsidian-600 mb-1.5">Telefon (Opsiyonel)</label>
                    <input type="tel" placeholder="+90 5xx xxx xx xx" className="input-luxury" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-obsidian-600 mb-1.5">Konu</label>
                    <select className="input-luxury">
                      <option>Ürün Bilgisi</option>
                      <option>Özel Sipariş</option>
                      <option>Fiyat Teklifi</option>
                      <option>Kargo & Teslimat</option>
                      <option>Diğer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-obsidian-600 mb-1.5">Mesajınız</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Mesajınızı buraya yazın..."
                      className="input-luxury resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send className="w-4 h-4" />
                    Gönder
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Map placeholder */}
        <div className="h-80 bg-cream-100 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
            <MapPin className="w-8 h-8 text-terracotta-400" />
            <p className="text-obsidian-500 font-medium">Kapalıçarşı, İstanbul</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-terracotta-500 hover:text-terracotta-600 font-medium underline underline-offset-2"
            >
              Google Maps'te Aç →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
