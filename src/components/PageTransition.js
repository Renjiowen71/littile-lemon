import { motion } from 'framer-motion';

const PageTransition = ({ children, key }) => {
  return (
    <motion.main
      className="container"
      key={key}
      initial={{ x: '100%' }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.main>
  );
};

export default PageTransition;
