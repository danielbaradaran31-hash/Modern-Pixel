import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 85 },
  { name: "Next.Js", level: 80 },
  { name: "JavaScript", level: 90 },
  { name: "HTML & CSS", level: 95 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Git & GitHub", level: 80 },
];

function Skills() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>

      <div className="max-w-3xl mx-auto space-y-8 px-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="h-3 bg-black dark:bg-white rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;