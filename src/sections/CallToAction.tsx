"use client";

import React, { useRef } from "react";

// Assets
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";

// Next Image
import Image from "next/image";

// Motion
import { motion, useScroll, useTransform } from "framer-motion";

export const CallToAction = () => {
  const CtaRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: CtaRef, offset: ["start end", "end start"] });

  const translateY = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section ref={CtaRef} className="bg-graident-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-description-container relative">
          <h2 className="section-title ">Sign up for free today</h2>
          <p className="section-description mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates doloremque eveniet consequuntur. Enim impedit nihil illum consequatur itaque accusantium?</p>
          <motion.img src={starImage.src} alt="star image" width={360} className="absolute hidden md:block -left-[350px] -top-[137px]" style={{ translateY }} />
          <motion.img src={springImage.src} alt="spring image" width={360} className="absolute hidden md:block -right-[331px] -top-[19px]" style={{ translateY }} />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text inline-flex items-center text-nowrap gap-1">
            <span>Learn more</span> <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
