import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.",
      image: "photo-1556742049-0cfed4f6a45d",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
      github: "https://github.com",
      demo: "https://demo.com",
      date: "2024",
      highlights: [
        "Payment integration with Stripe",
        "Real-time inventory management",
        "Responsive design with Tailwind CSS",
        "RESTful API with comprehensive error handling"
      ]
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern web technologies.",
      image: "photo-1611224923853-80b023f02d71",
      technologies: ["Vue.js", "Firebase", "TypeScript", "Vuetify", "Cloud Functions"],
      github: "https://github.com",
      demo: "https://demo.com",
      date: "2024",
      highlights: [
        "Real-time collaboration with Firebase",
        "Drag-and-drop task organization",
        "Email notifications and reminders",
        "Progressive Web App (PWA) capabilities"
      ]
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current conditions, forecasts, and interactive maps. Features location-based weather data and historical weather trends.",
      image: "photo-1504608524841-42fe6f032b4b",
      technologies: ["JavaScript", "Chart.js", "OpenWeather API", "CSS3", "Local Storage"],
      github: "https://github.com",
      demo: "https://demo.com",
      date: "2023",
      highlights: [
        "Integration with OpenWeather API",
        "Interactive charts and visualizations",
        "Geolocation support",
        "Offline functionality with local storage"
      ]
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects, skills, and experience. Built with modern design principles and optimized for performance and accessibility.",
      image: "photo-1467232004584-a241de8bcf5d",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      github: "https://github.com",
      demo: "https://demo.com",
      date: "2024",
      highlights: [
        "Smooth animations and transitions",
        "Fully responsive design",
        "SEO optimized",
        "Accessibility compliant (WCAG 2.1)"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my technical skills and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 group overflow-hidden animate-fade-up">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-card overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${project.image}?w=500&h=300&fit=crop`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-sm text-muted-foreground flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;