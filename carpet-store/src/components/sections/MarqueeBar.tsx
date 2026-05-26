import { cn } from "@/lib/utils";

const items = [
  "El Dokuma Kilim",
  "❖",
  "Hereke İpek",
  "❖",
  "Uşak Halısı",
  "❖",
  "Kapadokya Cicim",
  "❖",
  "Osmanlı Motifi",
  "❖",
  "Doğal Boyama",
  "❖",
  "Yün & İpek",
  "❖",
  "Anadolu Deseni",
  "❖",
  "El Sanatı",
  "❖",
  "Türk Düğümü",
  "❖",
];

export function MarqueeBar({ className }: { className?: string }) {
  return (
    <div className={cn("overflow-hidden bg-terracotta-500 py-4", className)}>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={cn(
              "mx-4 text-sm font-medium",
              item === "❖" ? "text-terracotta-300 text-xs" : "text-white tracking-wider uppercase"
            )}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
