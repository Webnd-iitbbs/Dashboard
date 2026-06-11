import { FaGithub } from "react-icons/fa"

const ProjectsSection = () => {
    const projects = [
        {
            name: "HirePro",
            description: "Recruitment Platform"
        },
        {
            name: "Binance",
            description: "Trading Platform"
        },
        {
            name: "Streamflix",
            description: "Streaming Platform"
        }
    ]
    return (
        <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6">
            <h2 className="text-[#F5C518] text-xl font-semibold mb-6">Personal Projects</h2>
            <div className="space-y-4">
                {projects.map((project) => (
                    <div key={project.name} className="bg-[#1A1A1A] rounded-xl p-4">
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-white">{project.name}</h3>
                                <p className="text-[#888888] text-sm mt-1">{project.description}</p>
                            </div>
                            <FaGithub size={20} className="text-[#F5C518]" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectsSection;