import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Database, Globe } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "Java",
    "HTML/CSS", "Tailwind CSS", "Git", "Docker", "AWS", "MongoDB",
    "PostgreSQL", "Express.js", "Next.js", "Vue.js", "Figma", "Adobe XD"
  ];

  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with modern frameworks and libraries."
    },
    {
      icon: Database,
      title: "Backend Development", 
      description: "Building robust APIs and server-side applications with focus on performance and scalability."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing user-centered experiences with attention to usability and visual appeal."
    },
    {
      icon: Globe,
      title: "Full Stack Solutions",
      description: "End-to-end development from concept to deployment, ensuring seamless integration."
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="animate-fade-up">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              Hello! I'm a passionate developer building digital solutions.
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a dedicated Computer Science student with a strong foundation in both 
                frontend and backend development. My journey in tech started with curiosity 
                about how websites work, and has evolved into a passion for creating 
                meaningful digital experiences.
              </p>
              
              <p>
                I believe in writing clean, maintainable code and creating user interfaces 
                that are not only beautiful but also intuitive and accessible. I'm always 
                eager to learn new technologies and take on challenging projects that push 
                my boundaries.
              </p>
              
              <p>
                Currently seeking internship opportunities where I can contribute to 
                innovative projects while continuing to grow as a developer. I'm excited 
                about the possibility of working with experienced teams and making a 
                meaningful impact.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-6 animate-slide-in-right">
            {highlights.map((highlight, index) => (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-foreground">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;