import { motion } from "framer-motion";

const Card = ({ image, onClick }: { image: string; onClick: () => void }) => {
  return (
    <motion.div
      key={image}
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      <div
        className="flex items-center justify-center min-w-24 min-h-24 md:min-w-32 md:min-h-32 bg-white rounded-2xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        onClick={onClick}
      >
        <img src={image} alt="pokemon" className="w-3/4 h-3/4 object-contain" />
      </div>
    </motion.div>
  );
};

export default Card;
