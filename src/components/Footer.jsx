import { ModemAnimatedFooter } from "./ui/ModemAnimatedFooter";
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Zap
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com",
      label: "Twitter/X",
    },
    {
        icon: <Facebook className="w-5 h-5" />,
        href: "https://facebook.com",
        label: "Facebook",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com",
      label: "Instagram",
    },
  ];

  const navLinks = [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ];

  return (
    <ModemAnimatedFooter
      brandName="Pitchsap"
      brandDescription="Pitchsap is committed to helping entrepreneurs turn their ideas into reality. With expert guidance, community support, and a proven process, we're your partner in success."
      socialLinks={socialLinks}
      navLinks={navLinks}
      creatorName="Ankit Pandey"
      creatorUrl="https://ankit.1forge.in"
      brandIcon={<Zap className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-bg drop-shadow-lg" />}
    />
  );
}
