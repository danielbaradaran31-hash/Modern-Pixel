import Skills from "../components/Skills";

function About() {
  return (
    <div>
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800 dark:text-white text-center">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          I'm a passionate React and JavaScript developer who loves building
          interactive and modern web applications.
        </p>
      </section>

      <Skills />
    </div>
  );
}

export default About;