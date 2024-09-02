"use client";

import React, { useRef } from "react";

import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";

// Motion
import { motion, useScroll, useTransform } from "framer-motion";

export const ProductShowcase = () => {
  const showcaseRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ["start end", "end end"],
  });

  const translateYPyramid = useTransform(scrollYProgress, [0,1], [-75, 75])
  const translateYTube = useTransform(scrollYProgress, [0,1], [75, -75])


  return (
    <section ref={showcaseRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-description-container">
          {/* This will be our tag */}
          <div className="flex justify-center">
            <p className="tag">Boost your productivity</p>
          </div>
          <h2 className="mt-5 section-title">A more effective way to track progress</h2>
          <p className="mt-5 section-description">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="product" className="mt-10" />
          <motion.img src={pyramidImage.src} height={262} width={262} alt="pyramid" className="hidden md:block md:absolute -right-36 -top-32" style={{translateY: translateYPyramid}}/>
          <motion.img src={tubeImage.src} height={248} width={248} alt="tube" className="hidden md:block md:absolute bottom-24 -left-36"style={{translateY: translateYTube}}/>
        </div>
      </div>
    </section>
  );
};
