
import { motion } from 'motion/react';

const HeroFeatures = () => {
  const features = [
    {
      icon: "add_circle",
      text: "Create user-centric designs",
      detail: "that handle complex workflows.",
      color: "#177863"
    },
    {
      icon: "percent",
      text: "Automate repetitive user tasks",
      detail: "— no extensive training needed.",
      color: "#177863"
    },
    {
      icon: "more_horiz",
      text: "Plug into diverse industries",
      detail: ": EdTech, eCommerce, and IoT.",
      color: "#177863"
    },
    {
      icon: "post_add",
      text: "Translate complex business requirements",
      detail: "into elegant solutions.",
      color: "#177863"
    }
  ];

  return (
    <motion.div
      className="mt-10 mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100/50 hover:bg-white/70 hover:border-[#177863]/20 transition-all duration-300 group"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#177863]/10 to-[#177863]/5 flex items-center justify-center group-hover:from-[#177863]/15 group-hover:to-[#177863]/10 transition-all duration-300">
              <span className="material-symbols-outlined text-[#177863] text-xl" aria-hidden="true">
                {item.icon}
              </span>
            </div>
            <div className="text-base md:text-lg text-gray-800 leading-relaxed">
              <span className="font-semibold text-[#16325A]">{item.text}</span>
              <span className="text-gray-700"> {item.detail}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroFeatures;
