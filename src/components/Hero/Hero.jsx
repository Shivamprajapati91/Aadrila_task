import { motion } from "framer-motion";
import CardsSection from "../Cards/CardsSection";

export default function Hero() {
  return (
    <div className="grid lg:grid-cols-2 gap-14 px-10 mt-20 items-center">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.8 }}
      >
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          <span className="text-red-500">AI-Powered</span>
          <br />
          Document Automation
          <br />& Fraud Detection
        </h1>

        <p className="mt-6 text-gray-600 max-w-md">
          Enhance security, accuracy, and efficiency with AI-driven document
          processing and fraud prevention.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full">
            Get a Demo
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full">
            Explore Solutions
          </button>
        </div>
      </motion.div>

      <CardsSection />
    </div>
  );
}
