import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 bg-gray-100 dark:bg-gray-900 dark:text-white"
    >
      {/* Profile Image */}
      <motion.img
        src="/images/profile.jpg"
        alt="Profile"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="w-32 h-32 rounded-full object-cover mb-6 shadow-lg"
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-5xl md:text-6xl font-bold mb-6"
      >
        Hi, I'm a Frontend Developer 👋
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="max-w-xl text-lg text-gray-600 dark:text-gray-300"
      >
        I build modern, fast, and interactive web applications using React and JavaScript and Next.js.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="flex gap-4 mt-8 flex-wrap justify-center"
      >
        <a
          href="/projects"
          className="px-6 py-3 bg-black text-white rounded-lg 
          hover:scale-105 transition dark:bg-white
           dark:text-black"
        >
          View My Projects
        </a>

        <a
          href="/images/resume.pdf"
          download
          className="px-6 py-3 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          Download CV
        </a>
      </motion.div>
    </motion.section>
  );
}

export default Hero;