"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Eye, MapPin, Ruler } from "lucide-react";
import { type Product } from "@/data/products";
import { cn, formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [liked, setLiked] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="card-luxury group"
    >
      {/* Image container */}
      <div className="relative overflow-hidden aspect-[4/3] bg-cream-100">
        {!imgLoaded && <div className="absolute inset-0 skeleton" />}
        <img
          src={product.images[0]}
          alt={product.name}
          className={cn(
            "w-full h-full object-cover transition-all duration-700 group-hover:scale-110",
            imgLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setImgLoaded(true)}
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-obsidian-950/0 group-hover:bg-obsidian-950/40 transition-all duration-400" />

        {/* Action buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => setLiked(!liked)}
            className={cn(
              "w-9 h-9 rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-200 shadow-sm",
              liked
                ? "bg-terracotta-500 text-white"
                : "bg-white/90 text-obsidian-600 hover:bg-white"
            )}
          >
            <Heart className={cn("w-4 h-4", liked && "fill-current")} />
          </motion.button>
          <Link
            href={`/urun/${product.slug}`}
            className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-obsidian-600 hover:bg-white opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm translate-y-2 group-hover:translate-y-0"
          >
            <Eye className="w-4 h-4" />
          </Link>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.new && (
            <span className="tag bg-gold-500 text-obsidian-950 font-semibold text-[10px] shadow-sm">
              Yeni
            </span>
          )}
          {product.featured && (
            <span className="tag bg-obsidian-950 text-white font-medium text-[10px]">
              Öne Çıkan
            </span>
          )}
          {product.category === "vintage" && (
            <span className="tag bg-cream-200 text-obsidian-700 font-medium text-[10px]">
              Vintage
            </span>
          )}
        </div>

        {/* Quick add button */}
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-all duration-300">
          <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-white/95 backdrop-blur-sm text-obsidian-800 font-medium text-sm rounded-2xl hover:bg-white transition-colors shadow-sm">
            <ShoppingBag className="w-4 h-4" />
            Sepete Ekle
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category & origin */}
        <div className="flex items-center gap-2 mb-2.5">
          <span className="tag bg-cream-100 text-terracotta-600 text-[10px] font-medium uppercase tracking-wide">
            {product.category === "kilim" ? "Kilim" :
             product.category === "hali" ? "El Halısı" :
             product.category === "runner" ? "Runner" :
             product.category === "cushion" ? "Yastık" : "Vintage"}
          </span>
          {product.region && (
            <span className="flex items-center gap-1 text-[10px] text-obsidian-400">
              <MapPin className="w-2.5 h-2.5" />
              {product.region}
            </span>
          )}
        </div>

        {/* Name */}
        <Link href={`/urun/${product.slug}`}>
          <h3 className="font-display font-semibold text-obsidian-900 mb-1.5 line-clamp-2 hover:text-terracotta-600 transition-colors leading-snug">
            {product.name}
          </h3>
        </Link>

        {/* Dimensions */}
        <div className="flex items-center gap-1 text-xs text-obsidian-400 mb-4">
          <Ruler className="w-3 h-3" />
          {product.dimensions}
        </div>

        {/* Materials */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.materials.map((m) => (
            <span key={m} className="px-2 py-0.5 bg-cream-50 border border-cream-200 rounded-full text-[10px] text-obsidian-500">
              {m}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <div className="font-display font-bold text-xl text-terracotta-500">
              {formatPrice(product.price)}
            </div>
            <div className="text-xs text-obsidian-400 -mt-0.5">
              ≈ {formatPrice(product.priceUSD, "USD")}
            </div>
          </div>
          <div className="flex gap-1">
            {product.colors.slice(0, 4).map((color, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                style={{
                  backgroundColor:
                    color === "Terracotta" ? "#e87549" :
                    color === "Krem" ? "#f5e6cc" :
                    color === "Kobalt" ? "#3840d4" :
                    color === "Altın" ? "#fbbf24" :
                    color === "Navi Mavi" ? "#1e2266" :
                    color === "Toprak" ? "#78350f" :
                    color === "Rust" ? "#b45309" :
                    color === "Bej" ? "#e2bf84" :
                    color === "İndigo" ? "#3730a3" :
                    color === "Siyah" ? "#18171a" :
                    color === "Kırmızı" ? "#dc2626" :
                    "#d4a55e",
                }}
                title={color}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
