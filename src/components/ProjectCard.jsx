function ProjectsCard() {
    return ( 
        <div className=" bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="{project.image}" alt={project.title} />
            <div className="p-4">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>

            <div>
            <a href={project.live}  target="_blank" className="text-blue-600">Live</a>
            <a href={project.github} target="_blank" className="text-blue-800">Code</a>
        </div>
        </div>
         </div>
        );
}

export default ProjectsCard;