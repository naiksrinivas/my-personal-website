import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of your first project. What problems did it solve? What technologies did you use?",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/project-one"
    },
    {
      title: "Project Two",
      description: "Description of your second project. Highlight the key features and your role in development.",
      technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
      link: "https://github.com/yourusername/project-two"
    },
    {
      title: "Project Three",
      description: "Overview of another significant project. What makes it unique? What did you learn?",
      technologies: ["Python", "Django", "PostgreSQL"],
      link: "https://github.com/yourusername/project-three"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
} 