import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const XIcon = ({ size }: { size: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokIcon = ({ size }: { size: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
  </svg>
);

type CustomIconComponent = (({ size }: { size: number }) => JSX.Element) | null;

const socialLinks: { href: string; label: string; Icon: typeof Facebook | null; CustomIcon?: CustomIconComponent }[] = [
  { href: "https://www.facebook.com/carstoremexico/", label: "Carstore en Facebook", Icon: Facebook },
  { href: "https://x.com/CarStoreMEX", label: "Carstore en X", Icon: null, CustomIcon: XIcon },
  { href: "https://www.instagram.com/carstoremexico/", label: "Carstore en Instagram", Icon: Instagram },
  { href: "https://www.youtube.com/channel/UCRXURzjNwZjx39JiZo35mLg", label: "Carstore en YouTube", Icon: Youtube },
  { href: "https://www.linkedin.com/company/carstoremexico/posts/?feedView=all", label: "Carstore en LinkedIn", Icon: Linkedin },
  { href: "https://www.tiktok.com/@carstoreseguridadvialmex", label: "Carstore en TikTok", Icon: null, CustomIcon: TikTokIcon },
];

const sizeMap = { sm: { px: 20, gap: "gap-4" }, md: { px: 24, gap: "gap-5" }, lg: { px: 30, gap: "gap-6" } };
const variantMap = {
  muted: "text-muted-foreground hover:text-foreground",
  accent: "text-muted-foreground hover:text-accent",
};

interface SocialLinksProps {
  size?: "sm" | "md" | "lg";
  variant?: "muted" | "accent";
}

export const SocialLinks = ({ size = "md", variant = "muted" }: SocialLinksProps) => {
  const { px, gap } = sizeMap[size];
  const colorClasses = variantMap[variant];

  return (
    <div className={`flex items-center ${gap}`}>
      {socialLinks.map(({ href, label, Icon, CustomIcon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`${colorClasses} transition-colors duration-200`}
        >
          {Icon ? <Icon size={px} /> : CustomIcon ? <CustomIcon size={px} /> : null}
        </a>
      ))}
    </div>
  );
};
