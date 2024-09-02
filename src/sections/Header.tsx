// Next Image
import Image from "next/image";

// Assets
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";

const Links: { label: string; href: string }[] = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Customers", href: "#customers" },
  { label: "Updates", href: "#updates" },
  { label: "Help", href: "#help" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white gap-3">
        <p className="hidden md:flex font-light text-white/60">Steamline your workflow and boost your productivity.</p>

        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 ml-2 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />

            <nav className="hidden md:flex gap-6 text-black/70 items-center">
              {Links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
              <button className="btn btn-primary">Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
