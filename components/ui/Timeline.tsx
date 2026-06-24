"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line - Mobile */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-danau-500/20 sm:left-6 lg:hidden" />

      {/* Timeline Items */}
      <div className="space-y-8 sm:space-y-10 lg:grid lg:grid-cols-4 lg:gap-6 lg:space-y-0">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex gap-4 sm:gap-6 lg:flex-col lg:gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            {/* Dot - Mobile */}
            <div className="relative z-10 flex-shrink-0 lg:hidden">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-danau-500 bg-kabut-50">
                <span className="text-xs font-semibold text-danau-500">
                  {index + 1}
                </span>
              </div>
            </div>

            {/* Dot - Desktop */}
            <div className="relative z-10 hidden lg:flex lg:justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-danau-500 bg-kabut-50">
                <span className="text-sm font-semibold text-danau-500">
                  {index + 1}
                </span>
              </div>
            </div>

            {/* Horizontal Line - Desktop */}
            {index < items.length - 1 && (
              <div className="absolute left-[calc(100%+0.75rem)] top-1/2 hidden h-px w-[calc(100%-1.5rem)] bg-danau-500/20 lg:block" />
            )}

            {/* Content */}
            <div className="flex-1 lg:text-center">
              <h3 className="font-serif text-lg font-semibold text-arang-900 sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-2 text-body text-kabut-abu">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
