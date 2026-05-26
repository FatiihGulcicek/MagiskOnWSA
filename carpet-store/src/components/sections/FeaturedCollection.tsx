"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

export function FeaturedCollection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? products.slice(0, 6)
    : products.filter((p) => p.category === activeCategory).slice(0, 6);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fefdfb]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span className="text-xs font-medium text-terracotta-500 uppercase tracking-[0.2em]">
                Seçkin Parçalar
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl font-bold text-obsidian-950"
            >
              Öne Çıkan{" "}
              <span className="text-gradient italic font-normal">Koleksiyon</span>
            </motion.h2>
          </div>
          <Link
            href="/koleksiyon"
            className="flex items-center gap-2 text-sm font-medium text-terracotta-500 hover:text-terracotta-600 group shrink-0"
          >
            Tümünü Gör
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-terracotta-500 text-white shadow-[0_4px_12px_-2px_rgba(212,82,42,0.4)]"
                  : "bg-cream-100 text-obsidian-600 hover:bg-cream-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Products grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link href="/koleksiyon" className="btn-primary text-base inline-flex">
            Tüm Koleksiyona Göz At
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
