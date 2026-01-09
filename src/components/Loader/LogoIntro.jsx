import { motion } from "framer-motion";
import logo from "../../assets/logo.svg";

export default function LogoIntro({ stage }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={
        stage === "move"
          ? { x: -420, y: -260, scale: 0.55, opacity: 0 }
          : {}
      }
      transition={{ duration: 3, ease: "easeInOut" }}
    >
      <div className="flex items-center gap-4">
        <motion.img
          src={logo}
          alt="Aadrila Logo"
          className="w-40 h-40"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6 }}
        />

        <motion.h1
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.6 }}
          className="text-3xl font-bold text-gray-800"
        >
          AADRILA TECHNOLOGIES
        </motion.h1>
      </div>
    </motion.div>
  );
}
