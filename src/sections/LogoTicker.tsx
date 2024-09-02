"use client";
// Logo Images
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image, { StaticImageData } from "next/image";

// Motion
import { motion } from "framer-motion";

const logos: { image: StaticImageData; alt: string }[] = [
  { image: acmeLogo, alt: "acme logo" },
  { image: quantumLogo, alt: "quantum logo" },
  { image: echoLogo, alt: "echo logo" },
  { image: celestialLogo, alt: "celestial logo" },
  { image: pulseLogo, alt: "pulse logo" },
  { image: apexLogo, alt: "apex logo" },
  { image: acmeLogo, alt: "acme logo" },
  { image: quantumLogo, alt: "quantum logo" },
  { image: echoLogo, alt: "echo logo" },
  { image: celestialLogo, alt: "celestial logo" },
  { image: pulseLogo, alt: "pulse logo" },
  { image: apexLogo, alt: "apex logo" },
];

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div className="flex gap-14 pr-14 flex-none" animate={{
            translateX:"-50%"
          }} transition={{duration: 15, repeat: Infinity, repeatType: "loop", ease: 'linear'}}>
            {logos.map((logo, index) => (
              <Image key={index} src={logo.image} alt={logo.alt} className="logo-ticker-image" />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
