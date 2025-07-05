import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Sharewear",
    description:
      "A shareware platform that connects donors with NGOs to simplify donating surplus food and clothing, with free basic features and paid upgrades for advanced tools.",
    image:
      "https://i.postimg.cc/3x3wSTC6/Whats-App-Image-2025-07-01-at-21-27-02-20d6f18c.jpg",
    tags: ["HTML", "CSS", "Node.js"],
    demoUrl: "https://sharewearr.netlify.app/",
    githubUrl: "https://github.com/sanathkumargampa/sharewear",
  },
  {
    id: 2,
    title: "FAKE PROFILE IDENTIFICATION",
    description:
      "Developed an ANN-based model to detect fake profiles using behavioral and identity patterns, automating fraud prevention on digital platforms.",
    image:
      "https://i.postimg.cc/8zn99dgv/Whats-App-Image-2025-07-02-at-17-04-10-a4793853.jpg",
    tags: ["React", "Scikit-Learn", "Keras"],
    githubUrl: "https://github.com/sanathkumargampa/FAKE-PROFILE-IDENTIFICATION",
  },
  {
    id: 3,
    title: "AUDIO SUMMARIZATION SYSTEM",
    description:
      "An AI tool that transcribes and summarizes audio into concise, downloadable text for easy meeting documentation.",
    image:
      "https://i.postimg.cc/5tbFCrt5/Whats-App-Image-2025-07-02-at-17-15-19-b092b26a.jpg",
    tags: ["React", "TailwindCSS", "Whisper"],
    demoUrl: "#",
    githubUrl: "https://github.com/sanathkumargampa/AUDIO-SUMMARIZATION-SYSTEM",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted
          with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.id !== 2 && project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sanathkumargampa"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
