import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxBackgroundProps {
  src: string;
  alt?: string;
  opacity?: string;
  eager?: boolean;
  gradientDirection?: "vertical" | "hero";
  gradientStrength?: { from: string; via: string; to: string };
  opacityRange?: [number, number, number, number];
}

export const ParallaxBackground = ({
  src,
  alt = "",
  opacity = "opacity-[0.30]",
  eager = false,
  gradientDirection = "vertical",
  gradientStrength = { from: "from-background/60", via: "via-background/50", to: "to-background/60" },
  opacityRange = [0.4, 1, 1, 0.4],
}: ParallaxBackgroundProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.0, 1.1]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], opacityRange);

  const gradientClass =
    gradientDirection === "hero"
      ? ""
      : `bg-gradient-to-b ${gradientStrength.from} ${gradientStrength.via} ${gradientStrength.to}`;

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-[130%] object-cover ${opacity}`}
        style={{ y, scale, opacity: imgOpacity }}
        loading={eager ? "eager" : "lazy"}
        {...(eager ? { fetchPriority: "high" as const } : {})}
        width={1920}
        height={1080}
      />
      {gradientDirection === "hero" ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-background/82 via-background/62 to-background/18" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/58 via-transparent to-background/38" />
        </>
      ) : (
        <div className={`absolute inset-0 ${gradientClass}`} />
      )}
    </div>
  );
};
