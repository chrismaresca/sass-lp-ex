import logo from "@/assets/logosaas.png";
import SocialXIcon from "@/assets/social-x.svg";
import SocialInstaIcon from "@/assets/social-insta.svg";
import SocialLinkedinIcon from "@/assets/social-linkedin.svg";
import SocialPinIcon from "@/assets/social-pin.svg";
import SocialYoutubeIcon from "@/assets/social-youtube.svg";

// Next Imports
import Image from "next/image";
import Link from "next/link";

const Links: { label: string; href: string }[] = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Customers", href: "#customers" },
  { label: "Updates", href: "#updates" },
  { label: "Help", href: "#help" },
];

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container ">
      <div className="relative inline-flex before:content-[''] before:absolute before:h-full before:w-full before:bg-[linear-gradient(to_right,#FB78FF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] before:blur ">
      <Image src={logo} height={40} alt="sass logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6 items-center">
          {Links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialXIcon />
          <SocialLinkedinIcon />
          <SocialInstaIcon />
          <SocialPinIcon />
          <SocialYoutubeIcon />
        </div>
        <p className="mt-6">
          &copy; 2024 Chris Maresca. All Rights Reservered.
        </p>
      </div>
    </footer>
  );
};
