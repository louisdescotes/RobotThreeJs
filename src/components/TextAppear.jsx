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
    <div ref={scrollRef}>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ root: scrollRef }}
        className="text-7xl text-center"
      >
        {title}
      </motion.h1>
      <motion.p
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ root: scrollRef }}
        className="text-m text-center"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
