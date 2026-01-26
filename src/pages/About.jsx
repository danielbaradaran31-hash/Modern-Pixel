function About() {
    return (
        <div className="min-h-screen  p-10">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className=" text-gray-700 max-w-2xl">
                 I'm a React and Javascript developer passionate about building 
                 interactive  web applications.
                   I love  learnin new technologies and improving my skills every day .
            </p>

            <h2 className="text-2xl font-bold mt-6">Skills</h2>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
                <li>React</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML & CSS</li>
                <li>Tailwind CSS</li>
                <li>Git & GitHub</li>
            </ul>
        </div>
    );
}

export default About;