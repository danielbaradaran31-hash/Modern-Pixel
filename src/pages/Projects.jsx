import projects from "../data/projects";
import ProjectsCard from "../components/ProjectCard";

function Projects() {
    return ( 
        <div className="min-h-screen p-10 bg-gray-100">
            <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>

            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectsCard key={index} project={project} />
                ))}
            </div>
        </div>
        );
}

export default Projects;