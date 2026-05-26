"use client";

import { useState } from "react";
import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag, Heart, Share2, ChevronLeft, ChevronRight,
  Shield, Truck, RefreshCw, Star, MapPin, Ruler, Layers,
  MessageCircle, ZoomIn
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);
  const [currentImg, setCurrentImg] = useState(0);
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"desc" | "specs" | "care">("desc");

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <Navbar />
      <main className="bg-[#fefdfb]">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <nav className="flex items-center gap-2 text-xs text-obsidian-400">
            <Link href="/" className="hover:text-terracotta-500 transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/koleksiyon" className="hover:text-terracotta-500 transition-colors">Koleksiyon</Link>
            <span>/</span>
            <span className="text-obsidian-700 font-medium truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>

        {/* Product detail */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Images */}
            <div>
              <div className="relative aspect-[4/3] bg-cream-100 rounded-3xl overflow-hidden mb-3 group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImg}
                    src={product.images[currentImg]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>
                <button className="absolute top-4 right-4 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <ZoomIn className="w-4 h-4 text-obsidian-600" />
                </button>
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImg((c) => (c - 1 + product.images.length) % product.images.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCurrentImg((c) => (c + 1) % product.images.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
              <div className="flex gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImg(i)}
                    className={`relative aspect-square w-20 rounded-xl overflow-hidden border-2 transition-all ${
                      currentImg === i ? "border-terracotta-500" : "border-transparent hover:border-cream-400"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="flex flex-col">
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tag bg-cream-100 text-terracotta-600 text-xs font-medium uppercase tracking-wide">
                  {product.category}
                </span>
                {product.new && <span className="tag bg-gold-500 text-obsidian-950 font-semibold text-xs">Yeni</span>}
                {product.knotCount && (
                  <span className="tag bg-obsidian-50 text-obsidian-600 text-xs">{product.knotCount}</span>
                )}
              </div>

              <h1 className="font-display text-3xl sm:text-4xl font-bold text-obsidian-950 mb-3 leading-tight">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mb-5">
                <div className="flex">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <span className="text-sm text-obsidian-500">4.9 (32 yorum)</span>
                <span className="text-obsidian-300">|</span>
                <span className="flex items-center gap-1 text-sm text-obsidian-500">
                  <MapPin className="w-3.5 h-3.5 text-terracotta-400" />
                  {product.origin}
                </span>
              </div>

              {/* Price */}
              <div className="bg-cream-50 rounded-2xl p-5 border border-cream-200 mb-6">
                <div className="flex items-end gap-3">
                  <div className="font-display text-4xl font-bold text-terracotta-500">
                    {formatPrice(product.price)}
                  </div>
                  <div className="text-lg text-obsidian-400 pb-0.5">
                    ≈ {formatPrice(product.priceUSD, "USD")}
                  </div>
                </div>
                <p className="text-xs text-obsidian-400 mt-1.5">KDV dahil • Ücretsiz kargo</p>
              </div>

              {/* Quick specs */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2.5 p-3 bg-white border border-cream-200 rounded-xl">
                  <Ruler className="w-4 h-4 text-terracotta-400 shrink-0" />
                  <div>
                    <p className="text-[10px] text-obsidian-400">Boyutlar</p>
                    <p className="text-sm font-medium text-obsidian-800">{product.dimensions}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 bg-white border border-cream-200 rounded-xl">
                  <Layers className="w-4 h-4 text-terracotta-400 shrink-0" />
                  <div>
                    <p className="text-[10px] text-obsidian-400">Teknik</p>
                    <p className="text-sm font-medium text-obsidian-800 leading-tight">{product.technique}</p>
                  </div>
                </div>
              </div>

              {/* Colors */}
              <div className="mb-6">
                <p className="text-sm font-medium text-obsidian-700 mb-2">Renkler</p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <span key={color} className="px-3 py-1 bg-cream-50 border border-cream-200 rounded-full text-xs text-obsidian-600">
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quantity + Add to cart */}
              <div className="flex gap-3 mb-5">
                <div className="flex items-center bg-cream-100 rounded-full">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-11 h-11 flex items-center justify-center text-obsidian-600 hover:text-terracotta-500 transition-colors"
                  >
                    −
                  </button>
                  <span className="w-10 text-center font-medium text-obsidian-800">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-11 h-11 flex items-center justify-center text-obsidian-600 hover:text-terracotta-500 transition-colors"
                  >
                    +
                  </button>
                </div>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={handleAddToCart}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                    added
                      ? "bg-green-500 text-white"
                      : "bg-terracotta-500 hover:bg-terracotta-600 text-white shadow-[0_4px_16px_-4px_rgba(212,82,42,0.5)]"
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  {added ? "Sepete Eklendi ✓" : "Sepete Ekle"}
                </motion.button>
                <button
                  onClick={() => setLiked(!liked)}
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                    liked ? "border-terracotta-500 bg-terracotta-500 text-white" : "border-cream-300 hover:border-terracotta-300 text-obsidian-400"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
                </button>
                <button className="w-12 h-12 rounded-full border-2 border-cream-300 hover:border-terracotta-300 flex items-center justify-center text-obsidian-400 transition-all">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              {/* Delivery info */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {[
                  { icon: Shield, text: "Orijinallik Garantisi" },
                  { icon: Truck, text: "Ücretsiz Kargo" },
                  { icon: RefreshCw, text: "30 Gün İade" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex flex-col items-center gap-1.5 p-3 bg-cream-50 rounded-xl text-center border border-cream-100">
                    <Icon className="w-4 h-4 text-terracotta-400" />
                    <span className="text-[10px] text-obsidian-500 font-medium">{text}</span>
                  </div>
                ))}
              </div>

              {/* CTA: Expert Advice */}
              <a
                href="https://wa.me/902125550100"
                className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-2xl hover:bg-green-100 transition-colors"
              >
                <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-green-800">Uzman Danışmanlık</p>
                  <p className="text-xs text-green-600">WhatsApp ile hemen bağlanın</p>
                </div>
              </a>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-16">
            <div className="flex border-b border-cream-200 mb-8">
              {[
                { id: "desc", label: "Ürün Hakkında" },
                { id: "specs", label: "Teknik Detaylar" },
                { id: "care", label: "Bakım Rehberi" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "desc" | "specs" | "care")}
                  className={`px-6 py-4 text-sm font-medium border-b-2 transition-all ${
                    activeTab === tab.id
                      ? "border-terracotta-500 text-terracotta-600"
                      : "border-transparent text-obsidian-500 hover:text-obsidian-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {activeTab === "desc" && (
                <motion.div
                  key="desc"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="max-w-2xl text-obsidian-600 leading-relaxed"
                >
                  <p className="mb-4">{product.description}</p>
                  <p className="text-sm text-obsidian-400 italic">English: {product.descriptionEn}</p>
                </motion.div>
              )}
              {activeTab === "specs" && (
                <motion.div
                  key="specs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="max-w-lg"
                >
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-cream-100">
                      {[
                        ["Boyutlar", product.dimensions],
                        ["Teknik", product.technique],
                        ["Malzeme", product.materials.join(", ")],
                        ["Yaş / Dönem", product.age],
                        ["Köken", product.origin],
                        ...(product.knotCount ? [["Düğüm Sayısı", product.knotCount]] : []),
                        ...(product.region ? [["Bölge", product.region]] : []),
                      ].map(([label, value]) => (
                        <tr key={label}>
                          <td className="py-3 pr-6 text-obsidian-400 font-medium whitespace-nowrap">{label}</td>
                          <td className="py-3 text-obsidian-700">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              )}
              {activeTab === "care" && (
                <motion.div
                  key="care"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="max-w-2xl space-y-4 text-obsidian-600"
                >
                  {[
                    { icon: "🧹", title: "Süpürme", text: "Hafif tüy bırakmayan bir süpürge kullanın, ipek halılarda tokmaklı başlık tercih edin." },
                    { icon: "💧", title: "Leke Temizleme", text: "Derhal soğuk su ve yumuşak deterjanla silin. Ovalamayın, bastırın." },
                    { icon: "☀️", title: "Güneş Işığı", text: "Uzun süreli direkt güneş ışığından koruyun, renk solmasını önler." },
                    { icon: "🔄", title: "Döndürme", text: "6 ayda bir halınızı 180° döndürün; eşit aşınma sağlar." },
                    { icon: "🧺", title: "Profesyonel Yıkama", text: "2-3 yılda bir mutlaka profesyonel halı yıkama tercih edin." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 p-4 bg-cream-50 rounded-2xl border border-cream-100">
                      <span className="text-xl shrink-0">{item.icon}</span>
                      <div>
                        <p className="font-semibold text-obsidian-800 mb-1">{item.title}</p>
                        <p className="text-sm text-obsidian-500">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="font-display text-2xl font-bold text-obsidian-950 mb-8">
                Benzer <span className="text-gradient italic font-normal">Ürünler</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
