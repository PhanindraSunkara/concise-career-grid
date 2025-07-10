import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Eye, Mail } from "lucide-react";

const ResumeSection = () => {
  const handleDownload = () => {
    // Direct download from Google Drive
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1Fg5rOSO_k1LXwnzL7yy1BtL9t0L4qIMb';
    link.download = 'Phanindra_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = () => {
    // Open Google Drive preview in new tab
    window.open('https://drive.google.com/file/d/1Fg5rOSO_k1LXwnzL7yy1BtL9t0L4qIMb/view?usp=drivesdk', '_blank');
  };

  const resumeHighlights = [
    {
      category: "Education",
      items: [
        "Bachelor of Technology in Computer Science",
        "GPA: 8.27/10",
      ]
    },
    {
      category: "Technical Skills",
      items: [
        "Languages: Python, c, Java",
        "Ai&ml: ML, DL, NLP, CNN, Resnet, MTCNN",
        "Frameworks: Scilit-learn, Flask, Streamlit, Opencv",
        "Database: Mysql, DBMS",
        "Tools: Git, VS code, Pycharm, MS Office, Excel, Power Point"
        
      ]
    },
    {
      category: "Key Projects",
      items: [
        "Deep Fake Detection - Bachelors Thesis",
        "Fashion Recommendation System - Internship work at Pheme software pvt.ltd",
        "Plant Disease Detection - Course level Project"
      ]
    },
    {
      category: "Certifications",
      items: [
        "Microsoft Certified: Azure Ai Fundamentals(AI 900)",
        "Microsoft Certified: Azure Fundamentals(AZ 900)",
        "Neural Networks and deep learning (Coursera)"
      ]
    }
  ];

  return (
    <section id="resume" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Resume
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download my complete resume or preview it online to learn more about my experience and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Resume Download Card */}
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 mb-12 animate-fade-up">
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <FileText className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">
                Download My Resume
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Get the complete overview of my skills, experience, and achievements
              </p>
            </CardHeader>
            
            <CardContent className="text-center space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button 
                  size="lg" 
                  onClick={handleDownload}
                  className="flex-1"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={handlePreview}
                  className="flex-1"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Preview Online
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Last updated: January 2024 • PDF Format • 2 pages
              </p>
            </CardContent>
          </Card>

          {/* Resume Highlights */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {resumeHighlights.map((section, index) => (
              <Card key={index} className="shadow-card animate-fade-up">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {section.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <Card className="shadow-card animate-fade-up">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Looking for More Information?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                My resume provides a comprehensive overview of my technical skills, educational background, 
                project experience, and professional achievements. It's regularly updated to reflect my 
                latest accomplishments and learning milestones.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button 
                  variant="outline"
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={() => {
                    const projectsSection = document.getElementById("projects");
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  View My Projects
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
