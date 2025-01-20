import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "Spotify Art",
      description: "An application to generate a grid with your Spotify playlist's songs' album art. [Email me if you want to test it out]",
      technologies: ["React", "Python"],
      link: "https://spotifyart.srinaik.com"
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
