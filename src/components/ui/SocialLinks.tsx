import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const socialLinks = [
  { href: "https://www.facebook.com/carstoremexico/", label: "Carstore en Facebook", Icon: Facebook },
  { href: "https://x.com/CarStoreMEX", label: "Carstore en X / Twitter", Icon: Twitter },
  { href: "https://www.instagram.com/carstoremexico/", label: "Carstore en Instagram", Icon: Instagram },
  { href: "https://www.youtube.com/channel/UCRXURzjNwZjx39JiZo35mLg", label: "Carstore en YouTube", Icon: Youtube },
  { href: "https://www.linkedin.com/company/carstoremexico/posts/?feedView=all", label: "Carstore en LinkedIn", Icon: Linkedin },
  { href: "https://www.tiktok.com/@carstoreseguridadvialmex", label: "Carstore en TikTok", Icon: null },
];

const sizeMap = { sm: { px: 16, gap: "gap-3" }, md: { px: 18, gap: "gap-4" }, lg: { px: 24, gap: "gap-5" } };
const variantMap = {
  muted: "text-muted-foreground hover:text-foreground",
  accent: "text-muted-foreground hover:text-accent",
};

const TikTokIcon = ({ size }: { size: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
  </svg>
);

interface SocialLinksProps {
  size?: "sm" | "md" | "lg";
  variant?: "muted" | "accent";
}

export const SocialLinks = ({ size = "md", variant = "muted" }: SocialLinksProps) => {
  const { px, gap } = sizeMap[size];
  const colorClasses = variantMap[variant];

  return (
    <div className={`flex items-center ${gap}`}>
      {socialLinks.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`${colorClasses} transition-colors duration-200`}
        >
          {Icon ? <Icon size={px} /> : <TikTokIcon size={px} />}
        </a>
      ))}
    </div>
  );
};
