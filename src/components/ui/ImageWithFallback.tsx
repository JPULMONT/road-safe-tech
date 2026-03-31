import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
  blurPlaceholder?: string;
  aspectRatio?: string;
}

export const ImageWithFallback = ({
  src,
  alt,
  fallbackText,
  blurPlaceholder,
  className,
  ...props
}: ImageWithFallbackProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = useCallback(() => setLoaded(true), []);
  const handleError = useCallback(() => {
    setError(true);
    setLoaded(true);
  }, []);

  if (error) {
    return (
      <div className={cn("w-full h-full bg-card/80 flex items-center justify-center", className)}>
        <span className="text-sm text-muted-foreground font-medium text-center px-4">
          {fallbackText || alt || "Imagen no disponible"}
        </span>
      </div>
    );
  }

  return (
    <>
      {/* Shimmer placeholder */}
      {!loaded && (
        <div
          className="absolute inset-0 animate-pulse bg-card/60 z-10"
          style={
            blurPlaceholder
              ? {
                  backgroundImage: `url(${blurPlaceholder})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "blur(20px)",
                  transform: "scale(1.1)",
                }
              : undefined
          }
        />
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          "transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </>
  );
};
