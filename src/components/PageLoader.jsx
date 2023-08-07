// Npm install framer-motion
import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 space-x-3">
        <motion.div
          className="w-8 h-8 bg-blue-500 rounded-full"
          animate={{ y: [-10, 0, -10] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.div
          className="w-8 h-8 bg-red-500 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.div
          className="w-8 h-8 bg-green-500 rounded-full"
          animate={{ y: [-10, 0, -10] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
    </div>
  );
};

export default PageLoader;
