"use client";

import React from "react";
import Image from "next/image";
import { motion, MotionStyle } from "framer-motion";

interface MotionImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: MotionStyle;
}
export const MotionImage = ({ src, alt, width, className, style, height }: MotionImageProps) => {
  return <motion.img src={src} alt={alt} width={width} height={height} className={className} style={{ ...style }} />;
};
