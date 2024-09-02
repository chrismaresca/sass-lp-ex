"use client";
import React from "react";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";

import { twMerge } from "tailwind-merge";

import Image from "next/image";

import { motion } from "framer-motion";

type Testimonial = {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
};

const testimonials: Testimonial[] = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// const secondColumn = testimonials.slice(3, 6);
// const thirdColumn = testimonials.slice(6, 9);

type TestimonialsColumnProps = {
  testimonials: Testimonial[];
  className?: string;
  duration?: number;
};
const TestimonialsColumn = ({ testimonials, className, duration = 15 }: TestimonialsColumnProps) => {
  return (
    <div className={className}>
      <motion.div className="flex flex-col gap-6 pb-6" animate={{ translateY: "-50%" }} transition={{ repeat: Infinity, ease: "linear", repeatType: "loop", duration: duration }}>
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, imageSrc, name, username }) => (
              <div className="card">
                <div>{text}</div>
                <div className="flex flex-row gap-2 items-center mt-5">
                  {/* Avatar */}
                  <Image src={imageSrc} width={40} height={40} alt={name} className="w-10 h-10 rounded-full" />
                  <div className="flex flex-col">
                    <span className="font-medium tracking-tight leading-5">{name}</span>
                    <span className="tracking-tight leading-5">{username}</span>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-description-container">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">What our users say</h2>
          <p className="section-description mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi rem commodi, nulla aperiam nesciunt illo numquam distinctio iure tempore.</p>
        </div>
        <div className="mt-10 flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={17} />
          <TestimonialsColumn testimonials={secondColumn} duration={19} className="hidden md:block" />
          <TestimonialsColumn testimonials={thirdColumn} duration={21} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};
