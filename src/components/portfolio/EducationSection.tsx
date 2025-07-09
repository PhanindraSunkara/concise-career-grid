import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science(Artificial Intelligence & Machine Learning)",
      institution: "Kalasalingam Academy of Research and Education",
      location: "Sriviliputhur,Tamilnadu",
      period: "2021 - 2025",
      gpa: "8.27/10",
      description: "Focusing on software engineering, data structures, algorithms, and web development. Active member of the Computer Science Society and coding club.",
      coursework: [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Database Systems",
        "Data Structures & Algorithms",
        "Computer Networks"
      ],
     
    },
    {
      degree: "Intermediate Education",
      institution: "Deeksha junior College",
      location: "Kanchikacherla, Andhra Pradesh",
      period: "2019 - 2021",
      score: "969/1000",
      coursework: [
        "Mathematics",
        "Physiscs",
        "Chemistry",
      ],
     
    }
    {
      degree: "Secondary Education",
      institution: "Vijaya Rani High School",
      location: "Kanchikacherla, Andhra Pradesh",
      period: "2018 - 2019",
      gpa: "9.7/10",
      coursework: [
        "Telugu,Hindi,English",
        "Mathematics",
        "Science",
        "Social Studies",
      ],
     
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and the foundation that shapes my technical expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-up">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg mr-4">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          {edu.degree}
                        </h3>
                        <p className="text-lg font-semibold text-primary">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </div>
                      <div className="font-semibold text-primary">
                        GPA: {edu.gpa}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {edu.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Relevant Coursework */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <Badge key={courseIndex} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>

                 
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
