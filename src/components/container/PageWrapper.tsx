"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { HTMLMotionProps, motion } from "framer-motion";

const PageWrapper = (props: HTMLMotionProps<"div">) => {
  const ref = useScrollAnimations();
  return (
    <div ref={ref} className="bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        {...props}
      />
    </div>
  );
};

export default PageWrapper;
