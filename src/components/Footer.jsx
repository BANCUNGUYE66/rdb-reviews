import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="bg-blue-900 text-white text-center p-6 border-t border-blue-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-sm">
        © {new Date().getFullYear()} Rwanda Development Board Reviews. All rights reserved.
      </p>
    </motion.footer>
  );
}