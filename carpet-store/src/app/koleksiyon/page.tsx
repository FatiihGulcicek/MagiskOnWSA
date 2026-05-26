"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, Grid3X3, LayoutList, X, ChevronDown } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ui/ProductCard";
import { products, categories } from "@/data/products";
import { cn } from "@/lib/utils";

const sortOptions = [
  { value: "featured", label: "Öne Çıkanlar" },
  { value: "price-asc", label: "Fiyat: Düşükten Yükseğe" },
  { value: "price-desc", label: "Fiyat: Yüksekten Düşüğe" },
  { value: "newest", label: "En Yeniler" },
];

const priceRanges = [
  { label: "Tümü", min: 0, max: Infinity },
  { label: "₺0 – ₺5.000", min: 0, max: 5000 },
  { label: "₺5.000 – ₺15.000", min: 5000, max: 15000 },
  { label: "₺15.000 – ₺50.000", min: 15000, max: 50000 },
  { label: "₺50.000+", min: 50000, max: Infinity },
];

export default function KoleksiyonPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sort, setSort] = useState("featured");
  const [priceRange, setPriceRange] = useState(0);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory);
    }
    const range = priceRanges[priceRange];
    list = list.filter((p) => p.price >= range.min && p.price <= range.max);
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sort === "newest") list.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
    else list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    return list;
  }, [activeCategory, sort, priceRange]);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero banner */}
        <section className="relative bg-obsidian-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=60')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/90 to-obsidian-950/60" />
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-terracotta-400 uppercase tracking-[0.2em] mb-4 ornament font-medium"
            >
              Koleksiyonumuz
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-5xl sm:text-6xl font-bold text-white mb-4"
            >
              El Dokuma{" "}
              <span className="text-gradient-gold italic font-normal">Hazineler</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-obsidian-400 max-w-xl mx-auto"
            >
              {products.length} eşsiz parça — Kilimden ipek halıya, vintage koleksiyondan modern tasarımlara
            </motion.p>
          </div>
        </section>

        {/* Filters & products */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#fefdfb]">
          <div className="max-w-7xl mx-auto">
            {/* Top toolbar */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              {/* Category pills */}
              <div className="flex flex-wrap gap-2 flex-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200",
                      activeCategory === cat.id
                        ? "bg-terracotta-500 text-white shadow-[0_4px_12px_-2px_rgba(212,82,42,0.4)]"
                        : "bg-cream-100 text-obsidian-600 hover:bg-cream-200"
                    )}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                {/* Price filter */}
                <div className="relative">
                  <button
                    onClick={() => setFiltersOpen(!filtersOpen)}
                    className="flex items-center gap-2 px-4 py-2 border border-cream-300 rounded-full text-sm text-obsidian-600 hover:border-terracotta-400 transition-colors"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    Filtrele
                    {priceRange > 0 && (
                      <span className="w-4 h-4 bg-terracotta-500 text-white text-[10px] rounded-full flex items-center justify-center">
                        1
                      </span>
                    )}
                  </button>
                  {filtersOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-luxury border border-cream-200 p-3 z-30">
                      <p className="text-xs font-medium text-obsidian-500 px-2 mb-2">Fiyat Aralığı</p>
                      {priceRanges.map((range, i) => (
                        <button
                          key={i}
                          onClick={() => { setPriceRange(i); setFiltersOpen(false); }}
                          className={cn(
                            "w-full text-left px-3 py-2 rounded-xl text-sm transition-colors",
                            priceRange === i ? "bg-terracotta-50 text-terracotta-600" : "hover:bg-cream-50 text-obsidian-700"
                          )}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sort */}
                <div className="relative">
                  <button
                    onClick={() => setSortOpen(!sortOpen)}
                    className="flex items-center gap-2 px-4 py-2 border border-cream-300 rounded-full text-sm text-obsidian-600 hover:border-terracotta-400 transition-colors"
                  >
                    {sortOptions.find((s) => s.value === sort)?.label}
                    <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", sortOpen && "rotate-180")} />
                  </button>
                  {sortOpen && (
                    <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-luxury border border-cream-200 p-2 z-30">
                      {sortOptions.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => { setSort(opt.value); setSortOpen(false); }}
                          className={cn(
                            "w-full text-left px-4 py-2.5 rounded-xl text-sm transition-colors",
                            sort === opt.value ? "bg-terracotta-50 text-terracotta-600" : "hover:bg-cream-50 text-obsidian-700"
                          )}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* View toggle */}
                <div className="flex bg-cream-100 rounded-full p-1">
                  <button
                    onClick={() => setView("grid")}
                    className={cn("p-2 rounded-full transition-all", view === "grid" ? "bg-white shadow-sm text-terracotta-500" : "text-obsidian-400")}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setView("list")}
                    className={cn("p-2 rounded-full transition-all", view === "list" ? "bg-white shadow-sm text-terracotta-500" : "text-obsidian-400")}
                  >
                    <LayoutList className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Active filters */}
            {(activeCategory !== "all" || priceRange > 0) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {activeCategory !== "all" && (
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-terracotta-50 border border-terracotta-200 text-terracotta-600 rounded-full text-xs font-medium">
                    {categories.find((c) => c.id === activeCategory)?.label}
                    <button onClick={() => setActiveCategory("all")}><X className="w-3 h-3" /></button>
                  </span>
                )}
                {priceRange > 0 && (
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-cream-100 border border-cream-300 text-obsidian-600 rounded-full text-xs font-medium">
                    {priceRanges[priceRange].label}
                    <button onClick={() => setPriceRange(0)}><X className="w-3 h-3" /></button>
                  </span>
                )}
              </div>
            )}

            {/* Result count */}
            <p className="text-sm text-obsidian-400 mb-6">
              <span className="font-semibold text-obsidian-700">{filtered.length}</span> ürün bulundu
            </p>

            {/* Grid */}
            {filtered.length > 0 ? (
              <div
                className={cn(
                  "grid gap-6",
                  view === "grid"
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1"
                )}
              >
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="font-display text-xl font-semibold text-obsidian-900 mb-2">Ürün bulunamadı</h3>
                <p className="text-obsidian-400 mb-6">Farklı filtreler deneyin</p>
                <button
                  onClick={() => { setActiveCategory("all"); setPriceRange(0); }}
                  className="btn-primary"
                >
                  Filtreleri Temizle
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
