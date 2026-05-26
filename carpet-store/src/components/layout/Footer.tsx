import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, Globe, Share2, Video } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-obsidian-950 text-cream-300">
      {/* Newsletter section */}
      <div className="border-b border-obsidian-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-terracotta-400 mb-3 font-medium ornament">
                Bültenimize Katılın
              </p>
              <h2 className="font-display text-3xl font-bold text-white mb-3">
                Yeni Koleksiyonlardan{" "}
                <span className="text-gradient-gold">Haberdar Olun</span>
              </h2>
              <p className="text-obsidian-400 text-sm leading-relaxed">
                El sanatı dünyasından haberler, yeni koleksiyonlar ve özel teklifler için abone olun.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-5 py-3.5 bg-obsidian-900 border border-obsidian-700 rounded-full text-white placeholder-obsidian-500 focus:outline-none focus:border-terracotta-500 transition-colors text-sm"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-7 py-3.5 bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium rounded-full transition-all duration-200 text-sm shrink-0"
              >
                Abone Ol <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-9 h-9 bg-terracotta-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-display font-bold">A</span>
              </div>
              <div>
                <div className="font-display font-bold text-lg text-white">ANADOLU</div>
                <div className="text-[9px] tracking-[0.2em] text-terracotta-400 uppercase">El Dokuma Halı</div>
              </div>
            </Link>
            <p className="text-sm text-obsidian-400 leading-relaxed mb-6 max-w-xs">
              Türkiye'nin köklü dokuma geleneğini yaşatarak dünya pazarına sunuyoruz. Her halı bir hikaye, her kilim bir miras.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Globe, href: "#", label: "Instagram" },
                { icon: Share2, href: "#", label: "Facebook" },
                { icon: Video, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-obsidian-800 hover:bg-terracotta-500 flex items-center justify-center text-obsidian-400 hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Koleksiyon */}
          <div>
            <h3 className="font-medium text-white mb-5 text-sm uppercase tracking-wider">Koleksiyon</h3>
            <ul className="space-y-3">
              {["Kilimler", "El Halıları", "Runner & Yolluk", "Yastık & Aksesuar", "Vintage & Antika", "Tüm Ürünler"].map((item) => (
                <li key={item}>
                  <Link
                    href="/koleksiyon"
                    className="text-sm text-obsidian-400 hover:text-terracotta-400 transition-colors hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bilgi */}
          <div>
            <h3 className="font-medium text-white mb-5 text-sm uppercase tracking-wider">Bilgi</h3>
            <ul className="space-y-3">
              {[
                "Hakkımızda",
                "Dokuma Sürecimiz",
                "Bakım Rehberi",
                "Kargo & İade",
                "Gizlilik Politikası",
                "Kullanım Koşulları",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-obsidian-400 hover:text-terracotta-400 transition-colors hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="font-medium text-white mb-5 text-sm uppercase tracking-wider">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-obsidian-400">
                <MapPin className="w-4 h-4 text-terracotta-400 shrink-0 mt-0.5" />
                <span>Kapalıçarşı, Nuruosmaniye Cad. No: 14, Beyazıt — İstanbul</span>
              </li>
              <li>
                <a href="tel:+902125550100" className="flex gap-3 text-sm text-obsidian-400 hover:text-terracotta-400 transition-colors">
                  <Phone className="w-4 h-4 text-terracotta-400 shrink-0" />
                  +90 212 555 0100
                </a>
              </li>
              <li>
                <a href="mailto:info@anadolu.com" className="flex gap-3 text-sm text-obsidian-400 hover:text-terracotta-400 transition-colors">
                  <Mail className="w-4 h-4 text-terracotta-400 shrink-0" />
                  info@anadolu.com
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-obsidian-900 rounded-2xl border border-obsidian-800">
              <p className="text-xs text-obsidian-500 mb-1">Mağaza Saatleri</p>
              <p className="text-sm text-obsidian-300">Pzt–Cmt: 09:00–19:00</p>
              <p className="text-sm text-obsidian-300">Pazar: 10:00–17:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-obsidian-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-obsidian-500">
            © 2024 ANADOLU El Dokuma Halı. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" alt="Visa" className="h-5 opacity-40 hover:opacity-60 transition-opacity" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" alt="Mastercard" className="h-5 opacity-40 hover:opacity-60 transition-opacity" />
          </div>
          <div className="flex items-center gap-4 text-xs text-obsidian-500">
            <span>🇹🇷 Türkiye'de Üretildi</span>
            <span>•</span>
            <span>🌍 Dünyaya Kargo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
