"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";

import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: ["Up to 5 project members", "Unlimited tasks and projects", "2GB storage", "Integrations", "Basic support"],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: ["Up to 50 project members", "Unlimited tasks and projects", "50GB storage", "Integrations", "Priority support", "Advanced support", "Export support"],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: ["Up to 5 project members", "Unlimited tasks and projects", "200GB storage", "Integrations", "Dedicated account manager", "Custom fields", "Advanced analytics", "Export capabilities", "API access", "Advanced security features"],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-description-container">
          <h2 className="section-title">Pricing</h2>
          <p className="mt-5 section-description">Free forever. Upgrade for unlimited tasks, better security, and exlusive features.</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-center items-center gap-6 mt-10">
          {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features }, index) => (
            <div key={index} className={`card ${inverse === true ? "bg-black border-black text-white" : "bg-white border-[#F1F1F1]"}`}>
              <div className="flex justify-between">
                <h3 className={`font-bold text-lg ${inverse == true ? "text-white/60" : "text-gray-700/80"} `}>{title}</h3>
                <div className="inline-flex items-center text-sm px-4 py-1.5 border border-white/20 rounded-xl">
                  {popular && (
                    <motion.span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text" animate={{ backgroundPositionX: "-100%" }} transition={{repeat: Infinity, ease: "linear", repeatType: "loop", duration: 2}}>
                      Most Popular
                    </motion.span>
                  )}
                </div>
              </div>
              <div className="mt-[30px] flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tighter leading-none">${monthlyPrice}</span>
                <span className="tracking-tight font-semibold text-black/50">/month</span>
              </div>
              <div className="flex justify-center mt-[30px]">
                <button className={twMerge("btn btn-primary w-full", inverse === true && "bg-white text-black")}>{buttonText}</button>
              </div>
              <ul className="flex flex-col mt-8 gap-5">
                {features.map((feature) => (
                  <li className="flex items-center text-small gap-4">
                    <CheckIcon className="h-6 w-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
