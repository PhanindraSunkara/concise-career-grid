import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Database, Globe, Brain, Cpu, Zap, Wrench, Terminal, Cloud } from "lucide-react";
const AboutSection = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code,
      items: ["Python", "C", "Java", "JavaScript"]
    },
    {
      category: "AI & Machine Learning",
      icon: Brain,
      items: ["Machine Learning", "Deep Learning", "CNN", "NLP", "ResNet", "MTCNN"]
    },
    {
      category: "Frameworks & Libraries",
      icon: Wrench,
      items: ["Scikit-learn", "Flask", "Streamlit", "OpenCV", "TensorFlow", "Keras"]
    },
    {
      category: "Databases",
      icon: Database,
      items: ["MySQL", "NoSQL", "DBMS"]
    },
    {
      category: "Tools & Technologies",
      icon: Terminal,
      items: ["Git", "VS Code", "PyCharm", "MS Office", "Excel", "PowerPoint"]
    }
  ];
  const highlights = [{
    icon: Code,
    title: "Frontend Development",
    description: "Creating responsive, interactive user interfaces with modern frameworks and libraries."
  }, {
    icon: Database,
    title: "Backend Development",
    description: "Building robust APIs and server-side applications with focus on performance and scalability."
  }, {
    icon: Brain,
    title: "AI/ML Applications",
    description: "Developing end-to-end machine learning solutions for real world applications."
  }, {
    icon: Globe,
    title: "Full Stack Solutions",
    description: "End-to-end development from concept to deployment, ensuring seamless integration."
  }];
  return <section id="about" className="py-20 bg-section-bg">
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
             Hello! I'm an AI & ML Enthusiast building intelligent digital solutions.
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I’m a passionate Computer Science graduate with hands-on experience in 
                machine learning, computer vision, and full-stack development. My journey 
                began with curiosity about how intelligent systems work and has evolved 
                into building data-driven applications that solve real-world problems.

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

            {/* Skills Categories */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-6 text-foreground">Technical Skills</h4>
              <div className="grid gap-4">
                {skillCategories.map((skillGroup, index) => {
                  const IconComponent = skillGroup.icon;
                  return (
                    <Card key={index} className="shadow-sm hover:shadow-md transition-all duration-300">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-base font-semibold text-foreground">
                          <IconComponent className="w-5 h-5 mr-2 text-primary" />
                          {skillGroup.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-6 animate-slide-in-right">
            {highlights.map((highlight, index) => <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105">
                
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;