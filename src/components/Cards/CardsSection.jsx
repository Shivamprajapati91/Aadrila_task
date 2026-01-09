import { motion } from "framer-motion";

export default function CardsSection() {
  return (
    <div className="grid grid-cols-3 gap-6 w-[540px]">
      {/* Column 1 */}
      <motion.div
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.4 }}
        className="mt-28 bg-white rounded-xl shadow-lg p-4"
      >
        <div className="h-16 bg-blue-100 rounded mb-3" />
        <div className="h-3 bg-gray-200 rounded w-3/4 mb-2" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
      </motion.div>

      {/* Column 2 */}
      <div className="flex flex-col gap-6 scale-110">
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 1.4 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <div className="h-20 bg-green-100 rounded mb-3" />
          <div className="h-3 bg-gray-200 rounded w-3/4 mb-2" />
          <div className="h-3 bg-gray-200 rounded w-1/2" />
        </motion.div>

        <motion.div
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 1.4 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <div className="h-20 bg-purple-100 rounded mb-3" />
          <div className="h-3 bg-gray-200 rounded w-3/4 mb-2" />
          <div className="h-3 bg-gray-200 rounded w-1/2" />
        </motion.div>
      </div>

      {/* Column 3 */}
      <motion.div
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.8, duration: 1.4 }}
        className="mt-20 bg-white rounded-xl shadow-lg p-4"
      >
        <div className="h-16 bg-orange-100 rounded mb-3" />
        <div className="h-3 bg-gray-200 rounded w-3/4 mb-2" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
      </motion.div>
    </div>
  );
}
