import { motion } from 'framer-motion';
import { _Transition_Page } from '../../components/_Animations';

const Blog = ({}) => {
  return (
    <>
      <motion.section
        variants={_Transition_Page}
        initial="initial"
        animate="animate"
        exit="exit"
        className="py-36"
      >
        {/* landing */}
        <div className="flex flex-col gap-2 justify-center mt-16">
          <p className="text-4xl font-semibold">Blog</p>
          <p className="text-lg font-semibold">
            See what CS students are up to in the CS department
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default Blog;