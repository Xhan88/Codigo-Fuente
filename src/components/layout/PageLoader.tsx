
import { motion } from 'framer-motion';
import { Logo } from '../ui/Logo';

export function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#9d9d9d]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
    >
      <motion.div
        layoutId="codigo-fuente-logo"
        transition={{
          layout: {
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1],
          },
        }}
      >
        <motion.div
          animate={{ opacity: [1, 0.55, 1] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Logo className="h-28 w-auto" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
