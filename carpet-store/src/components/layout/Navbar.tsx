"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, Globe, Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    label: "Koleksiyon",
    href: "/koleksiyon",
    children: [
      { label: "Kilimler", href: "/koleksiyon?kategori=kilim", desc: "Düz dokuma el kilimler" },
      { label: "El Halıları", href: "/koleksiyon?kategori=hali", desc: "Geleneksel düğümlü halılar" },
      { label: "Runner & Yolluk", href: "/koleksiyon?kategori=runner", desc: "Uzun dar halılar" },
      { label: "Yastık & Aksesuar", href: "/koleksiyon?kategori=cushion", desc: "Dekoratif objeler" },
      { label: "Vintage & Antika", href: "/koleksiyon?kategori=vintage", desc: "Koleksiyonluk parçalar" },
    ],
  },
  { label: "Bölgesel", href: "/bolgesel" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Mağaza", href: "/magaza" },
  { label: "İletişim", href: "/iletisim" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [lang, setLang] = useState<"TR" | "EN">("TR");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-obsidian-950 text-cream-200 text-xs py-2 px-4 text-center hidden sm:flex items-center justify-between">
        <span className="flex items-center gap-2">
          <Phone className="w-3 h-3" />
          +90 212 555 0100
        </span>
        <span className="ornament text-cream-400 font-medium tracking-wider uppercase text-[10px]">
          Türkiye &amp; Dünya Geneli Kargo
        </span>
        <span className="flex items-center gap-3">
          <Link href="#" className="hover:text-gold-400 transition-colors">Instagram</Link>
          <Link href="#" className="hover:text-gold-400 transition-colors">Facebook</Link>
        </span>
      </div>

      {/* Main navbar */}
      <motion.header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] border-b border-cream-200"
            : "bg-transparent"
        )}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-terracotta-500 rounded-xl rotate-3 group-hover:rotate-6 transition-transform duration-300" />
              <div className="absolute inset-0 bg-terracotta-600 rounded-xl -rotate-3 group-hover:-rotate-6 transition-transform duration-300 opacity-60" />
              <div className="relative flex items-center justify-center w-full h-full">
                <span className="text-white font-display font-bold text-lg">A</span>
              </div>
            </div>
            <div>
              <div className="font-display font-bold text-xl text-obsidian-950 tracking-tight">
                ANADOLU
              </div>
              <div className="text-[9px] tracking-[0.25em] text-terracotta-500 uppercase font-medium -mt-0.5">
                El Dokuma Halı
              </div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-4 py-2.5 text-sm font-medium text-obsidian-700 hover:text-terracotta-500 rounded-full hover:bg-cream-100 transition-all duration-200">
                    {link.label}
                    <ChevronDown
                      className={cn("w-3.5 h-3.5 transition-transform duration-200", activeDropdown === link.label && "rotate-180")}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-[0_20px_60px_-8px_rgba(0,0,0,0.15)] border border-cream-200 overflow-hidden"
                      >
                        <div className="p-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-cream-50 transition-colors group/item"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-terracotta-400 mt-2 group-hover/item:bg-terracotta-500 transition-colors shrink-0" />
                              <div>
                                <div className="text-sm font-medium text-obsidian-800 group-hover/item:text-terracotta-600 transition-colors">
                                  {child.label}
                                </div>
                                <div className="text-xs text-obsidian-500 mt-0.5">{child.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="px-4 py-3 bg-cream-50 border-t border-cream-200">
                          <Link
                            href="/koleksiyon"
                            className="text-xs font-medium text-terracotta-500 hover:text-terracotta-600 flex items-center gap-1"
                          >
                            Tüm Koleksiyonu Gör →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2.5 text-sm font-medium text-obsidian-700 hover:text-terracotta-500 rounded-full hover:bg-cream-100 transition-all duration-200"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "TR" ? "EN" : "TR")}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-obsidian-600 hover:text-terracotta-500 rounded-full hover:bg-cream-100 transition-all"
            >
              <Globe className="w-3.5 h-3.5" />
              {lang}
            </button>
            <button className="p-2.5 rounded-full hover:bg-cream-100 text-obsidian-600 hover:text-terracotta-500 transition-all">
              <Search className="w-4.5 h-4.5" />
            </button>
            <Link
              href="/sepet"
              className="relative flex items-center gap-2 px-4 py-2.5 bg-terracotta-500 hover:bg-terracotta-600 text-white text-sm font-medium rounded-full transition-all duration-200 shadow-[0_4px_12px_-2px_rgba(212,82,42,0.4)] hover:shadow-[0_8px_20px_-4px_rgba(212,82,42,0.5)]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:block">Sepet</span>
              <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-gold-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                2
              </span>
            </Link>
            <button
              className="lg:hidden p-2.5 rounded-full hover:bg-cream-100 text-obsidian-600 transition-all"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-80 bg-white z-50 shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-cream-200">
                <span className="font-display font-bold text-lg text-obsidian-950">ANADOLU</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-full hover:bg-cream-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-5 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href || "#"}
                      className="block px-4 py-3 rounded-xl text-sm font-medium text-obsidian-700 hover:text-terracotta-500 hover:bg-cream-50 transition-all"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 rounded-lg text-xs text-obsidian-500 hover:text-terracotta-500 hover:bg-cream-50 transition-all"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="p-5 border-t border-cream-200 space-y-3">
                <a href="tel:+902125550100" className="flex items-center gap-2 text-sm text-obsidian-600">
                  <Phone className="w-4 h-4 text-terracotta-500" />
                  +90 212 555 0100
                </a>
                <div className="flex gap-2">
                  <Link href="/sepet" className="flex-1 btn-primary justify-center text-sm py-3">
                    <ShoppingBag className="w-4 h-4" />
                    Sepet (2)
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
