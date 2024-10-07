import { useRef } from "react";
import { motion } from "framer-motion";

export default function TextAppear({ title, subtitle }) {
  const scrollRef = useRef(null);

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div ref={scrollRef} className="max-w-[28rem] flex flex-col gap-1.5">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ root: scrollRef }}
        className="text-7xl"
      >
        {title}
      </motion.h1>
      <motion.p
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ root: scrollRef }}
        className="text-m text-justify"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
