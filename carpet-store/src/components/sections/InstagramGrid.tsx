"use client";

import { motion } from "framer-motion";
import { Globe, Heart, MessageCircle } from "lucide-react";

const posts = [
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80", likes: "1.2k", comments: "34" },
  { src: "https://images.unsplash.com/photo-1588362951121-3ee319b018b2?w=400&q=80", likes: "890", comments: "21" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", likes: "2.1k", comments: "67" },
  { src: "https://images.unsplash.com/photo-1567225591450-06036b3392a6?w=400&q=80", likes: "743", comments: "15" },
  { src: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=400&q=80", likes: "1.5k", comments: "42" },
  { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80", likes: "988", comments: "28" },
];

export function InstagramGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fefdfb]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Globe className="w-5 h-5 text-terracotta-500" />
            <span className="text-sm font-medium text-obsidian-700">@anadolu_hali</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl font-bold text-obsidian-950"
          >
            Instagram&apos;dan{" "}
            <span className="text-gradient italic font-normal">İlham Al</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="relative aspect-square overflow-hidden rounded-2xl group"
            >
              <img
                src={post.src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-obsidian-950/0 group-hover:bg-obsidian-950/50 transition-all duration-300 flex items-center justify-center">
                <div className="flex items-center gap-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="flex items-center gap-1 text-xs font-medium">
                    <Heart className="w-3.5 h-3.5 fill-white" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium">
                    <MessageCircle className="w-3.5 h-3.5 fill-white" /> {post.comments}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-obsidian-200 text-obsidian-700 font-medium rounded-full hover:border-terracotta-400 hover:text-terracotta-500 transition-all duration-200 text-sm"
          >
            <Globe className="w-4 h-4" />
            Instagram&apos;da Takip Et
          </a>
        </div>
      </div>
    </section>
  );
}
