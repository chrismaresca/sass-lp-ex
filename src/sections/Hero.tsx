"use client";
// Assets
import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";

// Image
import Image from "next/image";

// Framer Motion
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";
import { MotionImage } from "@/components/motion-image/MotionImage";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#183EC2,_#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          {/* This div wraps our content  */}
          <div className="md:w-[478px]">
            {/* Tag */}
            <div className="tag">Version 2.0 is here</div>
            <h1 className="font-bold mt-6 text-5xl md:text-7xl tracking-tighter bg-gradient-to-b from-black to-[#364d9a] bg-clip-text text-transparent">Pathway to productivity</h1>
            <p className="text-xl flex mt-6 text-[#010D3E] tracking-tight">Hey this is another test, sit amet consectetur adipisicing elit. Eius eaque sunt rerum accusantium voluptas debitis explicabo, fugiat labore voluptatem optio minus nulla? Reprehenderit provident sunt rem, minima corporis soluta consequatur.</p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text inline-flex items-center text-nowrap gap-1 font-semibold">
                <span>Learn more</span> <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          {/* This is the end of the div that wraps our content  */}
          {/* Start of image */}
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative ">
            {/* Animating this */}
            <motion.img
              animate={{
                translateY: [-30, 30],
              }}
              transition={{ repeat: Infinity, repeatType: "mirror", duration: 3.5, ease: "easeInOut" }}
              src={cogImage.src}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:-left-0 "
            />
            {/* <Image src={cogImage}className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:-left-0" /> */}

            <motion.img
              src={cylinderImage.src}
              width={220}
              height={220}
              alt="cylinder image"
              className="hidden md:block md:absolute md:-top-8 md:-left-32 "
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              width={220}
              height={220}
              alt="noodle image"
              className="hidden lg:block lg:absolute lg:-bottom-24  lg:-right-24"
              style={{
                translateY: translateY,
                rotate: 30,
              }}
            />
          </div>
          {/* end of image */}
        </div>
      </div>
    </section>
  );
};
