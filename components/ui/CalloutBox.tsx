"use client";

import { motion } from "framer-motion";
import { Lightbulb, Leaf, Quote } from "lucide-react";

type CalloutVariant = "trivia" | "nilai" | "pesan";

interface CalloutBoxProps {
  variant: CalloutVariant;
  children: React.ReactNode;
}

const variantConfig = {
  trivia: {
    icon: Lightbulb,
    borderColor: "border-belerang-400",
    iconColor: "text-belerang-400",
    bgColor: "bg-belerang-400/5",
  },
  nilai: {
    icon: Leaf,
    borderColor: "border-danau-500",
    iconColor: "text-danau-500",
    bgColor: "bg-danau-500/5",
  },
  pesan: {
    icon: Quote,
    borderColor: "border-arang-900",
    iconColor: "text-arang-900",
    bgColor: "bg-arang-900/5",
  },
};

export default function CalloutBox({ variant, children }: CalloutBoxProps) {
  const config = variantConfig[variant];
  const Icon = config.icon;

  return (
    <motion.div
      className={`rounded-md border-l-4 ${config.borderColor} ${config.bgColor} p-5 sm:p-6`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-4">
        <Icon
          className={`h-6 w-6 flex-shrink-0 ${config.iconColor}`}
          aria-hidden="true"
        />
        <div className="flex-1">
          {variant === "pesan" ? (
            <blockquote className="text-body-lg font-serif italic leading-relaxed text-arang-900">
              {children}
            </blockquote>
          ) : (
            <p className="text-body leading-relaxed text-arang-900">
              {children}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
