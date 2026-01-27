import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        <div className="flex gap-4">
          <a
            href={project.live}
            target="_blank"
            className="px-4 py-2 bg-black text-white rounded hover:scale-105 transition dark:bg-white dark:text-black"
          >
            Live
          </a>
          <a
            href={project.github}
            target="_blank"
            className="px-4 py-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;