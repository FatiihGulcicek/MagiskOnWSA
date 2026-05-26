export interface Product {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  category: "kilim" | "hali" | "runner" | "cushion" | "vintage";
  origin: string;
  price: number;
  priceUSD: number;
  dimensions: string;
  materials: string[];
  colors: string[];
  age: string;
  technique: string;
  images: string[];
  description: string;
  descriptionEn: string;
  inStock: boolean;
  featured: boolean;
  new: boolean;
  knotCount?: string;
  region?: string;
  tags: string[];
}

export const products: Product[] = [
  {
    id: "1",
    slug: "anadolu-kilim-geleneksel",
    name: "Anadolu Kilim — Geleneksel Motifler",
    nameEn: "Anatolian Kilim — Traditional Motifs",
    category: "kilim",
    origin: "Konya, Türkiye",
    price: 8500,
    priceUSD: 280,
    dimensions: "150 × 210 cm",
    materials: ["Yün", "Doğal Boya"],
    colors: ["Terracotta", "Krem", "Kobalt"],
    age: "El Dokuma 2024",
    technique: "Düz Dokuma (Kilim)",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=85",
    ],
    description: "Konya'nın geleneksel dokuma ustalarından, nesiller boyunca aktarılan motiflerle yün ipliğinden el dokuma kilim.",
    descriptionEn: "Hand-woven kilim from Konya's traditional master weavers, featuring motifs passed down through generations.",
    inStock: true,
    featured: true,
    new: false,
    region: "İç Anadolu",
    tags: ["kilim", "geleneksel", "yün", "konya"],
  },
  {
    id: "2",
    slug: "oushak-halisi-antik",
    name: "Uşak Halısı — Antik Desen",
    nameEn: "Oushak Rug — Antique Pattern",
    category: "hali",
    origin: "Uşak, Türkiye",
    price: 24000,
    priceUSD: 790,
    dimensions: "200 × 290 cm",
    materials: ["Merino Yün", "İpek Detay"],
    colors: ["Altın", "Fil Dişi", "Aztek Kırmızısı"],
    age: "El Dokuma 2023",
    technique: "Türk Düğümü (Gördes)",
    images: [
      "https://images.unsplash.com/photo-1588362951121-3ee319b018b2?w=800&q=85",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=85",
    ],
    description: "Uşak'ın dünyaca ünlü dokuma geleneğinden, antik desenli ve ipek vurgularıyla bezeli premium el halısı.",
    descriptionEn: "Premium handmade rug from Oushak's world-renowned weaving tradition, with antique patterns and silk highlights.",
    inStock: true,
    featured: true,
    new: false,
    knotCount: "120,000 düğüm/m²",
    region: "Ege",
    tags: ["uşak", "premium", "ipek", "antik"],
  },
  {
    id: "3",
    slug: "hereke-ipek-halisi",
    name: "Hereke İpek Halısı",
    nameEn: "Hereke Silk Carpet",
    category: "hali",
    origin: "Hereke, Kocaeli",
    price: 85000,
    priceUSD: 2800,
    dimensions: "120 × 180 cm",
    materials: ["Saf İpek", "Altın Tel"],
    colors: ["Navi Mavi", "Altın", "Kırmızı"],
    age: "El Dokuma 2022",
    technique: "Hereke Türk Düğümü",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=85",
    ],
    description: "Osmanlı saray geleneğinin mirasçısı Hereke'nin efsanevi ipek halıları. Saf ipek ve altın tellerle dokunmuş sanat eseri.",
    descriptionEn: "Legendary Hereke silk carpets, heir to the Ottoman palace tradition. A masterpiece woven with pure silk and gold threads.",
    inStock: true,
    featured: true,
    new: false,
    knotCount: "1,000,000+ düğüm/m²",
    region: "Marmara",
    tags: ["hereke", "ipek", "lüks", "osmanlı"],
  },
  {
    id: "4",
    slug: "kapadokya-runner-kilim",
    name: "Kapadokya Runner Kilim",
    nameEn: "Cappadocia Runner Kilim",
    category: "runner",
    origin: "Nevşehir, Türkiye",
    price: 4200,
    priceUSD: 138,
    dimensions: "80 × 300 cm",
    materials: ["Yün", "Pamuk"],
    colors: ["Toprak", "Rust", "Bej"],
    age: "El Dokuma 2024",
    technique: "Cicim Tekniği",
    images: [
      "https://images.unsplash.com/photo-1567225591450-06036b3392a6?w=800&q=85",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=85",
    ],
    description: "Kapadokya'nın volkanik toprak renklerinden ilham alan, cicim tekniğiyle dokunmuş dar halı.",
    descriptionEn: "Narrow runner woven in cicim technique, inspired by the volcanic earth tones of Cappadocia.",
    inStock: true,
    featured: false,
    new: true,
    region: "İç Anadolu",
    tags: ["runner", "kapadokya", "cicim", "yeni"],
  },
  {
    id: "5",
    slug: "berber-cushion-set",
    name: "Berber Yastık Seti — 2'li",
    nameEn: "Berber Cushion Set — Pair",
    category: "cushion",
    origin: "Gaziantep, Türkiye",
    price: 1800,
    priceUSD: 59,
    dimensions: "45 × 45 cm",
    materials: ["Yün", "Pamuk"],
    colors: ["Siyah", "Kırmızı", "Bej"],
    age: "El Dokuma 2024",
    technique: "Sumak Tekniği",
    images: [
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=85",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=85",
    ],
    description: "Güneydoğu Anadolu'nun zengin dokuma kültüründen, sumak tekniği ile örülmüş dekoratif yastık seti.",
    descriptionEn: "Decorative cushion set woven in sumak technique from Southeast Anatolia's rich weaving culture.",
    inStock: true,
    featured: false,
    new: true,
    region: "Güneydoğu Anadolu",
    tags: ["yastık", "sumak", "gaziantep"],
  },
  {
    id: "6",
    slug: "vintage-anatolia-large",
    name: "Vintage Anadolu — Büyük Boy",
    nameEn: "Vintage Anatolia — Large Format",
    category: "vintage",
    origin: "Çeşitli Bölgeler",
    price: 32000,
    priceUSD: 1050,
    dimensions: "240 × 340 cm",
    materials: ["Yün", "Doğal Boya"],
    colors: ["İndigo", "Fıstık", "Kırmızı"],
    age: "1970'ler",
    technique: "Karışık Teknik",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=85",
      "https://images.unsplash.com/photo-1617104678098-de229db51175?w=800&q=85",
    ],
    description: "1970'lerden kalma, doğal boyaların zamanla aldığı eşsiz patina ile koleksiyonluk Anadolu halısı.",
    descriptionEn: "Collectible Anatolian rug from the 1970s, with a unique patina that natural dyes have acquired over time.",
    inStock: true,
    featured: false,
    new: false,
    region: "Anadolu",
    tags: ["vintage", "koleksiyon", "indigo", "büyük"],
  },
];

export const categories = [
  { id: "all", label: "Tümü", labelEn: "All" },
  { id: "kilim", label: "Kilim", labelEn: "Kilim" },
  { id: "hali", label: "El Halısı", labelEn: "Hand Rug" },
  { id: "runner", label: "Runner", labelEn: "Runner" },
  { id: "cushion", label: "Yastık", labelEn: "Cushion" },
  { id: "vintage", label: "Vintage", labelEn: "Vintage" },
];

export const regions = [
  "İç Anadolu",
  "Ege",
  "Marmara",
  "Güneydoğu Anadolu",
  "Karadeniz",
];

export const featuredProducts = products.filter((p) => p.featured);
export const newProducts = products.filter((p) => p.new);
