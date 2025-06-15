
import { motion } from 'motion/react';

const HeroIntro = () => {
  return (
    <motion.div
      className="mb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="text-gray-800 leading-relaxed">
        <div className="relative">
          <div className="absolute -left-1 top-0 w-1 h-full bg-gradient-to-b from-[#177863] to-[#16325A] rounded-full opacity-60" aria-hidden="true"></div>
          <p className="text-lg md:text-xl pl-6 mb-4 leading-relaxed">
            Imagine your users <span className="font-semibold text-[#177863] bg-[#177863]/5 px-1 rounded">empowered</span>, workflows <span className="font-semibold text-[#177863] bg-[#177863]/5 px-1 rounded">streamlined</span>. As a Product Designer, I help businesses achieve this by crafting <span className="font-semibold text-[#16325A] bg-[#16325A]/5 px-1 rounded">intuitive interfaces</span> that transform complex enterprise systems into <span className="font-semibold text-[#177863] bg-[#177863]/5 px-1 rounded">effortless interactions</span>, driving <span className="font-semibold text-[#16325A] bg-[#16325A]/5 px-1 rounded">efficiency</span> and <span className="font-semibold text-[#16325A] bg-[#16325A]/5 px-1 rounded">growth</span>.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroIntro;
