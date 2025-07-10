import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Microsoft Certified: Azure AI Fundamentals(AI 900)",
      issuer: "Microsoft",
      date: "June 2024",
      credentialId: "83F39FA8642E3734",
      description: "validates a foundational understanding of artificial intelligence concepts and their implementation using Azure services..",
      skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "NLP"],
      verificationUrl: "https://learn.microsoft.com/api/credentials/share/en-gb/PhanindraSai-3752/83F39FA8642E3734?sharingId=68E92FD6DEF9015D",
      logo: "microsoft"
    },
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "March 2023",
      credentialId: "I650-3275",
      description: "Foundational knowledge of cloud services and how they are provided with Microsoft Azure.",
      skills: ["Cloud Concepts", "Azure core Services", "Security & Identity"],
      verificationUrl: "https://learn.microsoft.com/api/credentials/share/en-us/PhanindraSai-3752/B92518CD12597C46?sharingId=68E92FD6DEF9015D",
      logo: "microsoft"
    },
    {
      title: "Neural Networks and Deep Learning",
      issuer: "Coursera",
      date: "March 2025",
      credentialId: "BWBRIPEFFF4Z",
      description: "Covering foundational concepts of deep learning, backpropagation, and building neural networks.",
      skills: ["Computer Vision", "Artificial Neural Networks", "Performance Tuning", "Supervised Learning"],
      verificationUrl: "https://coursera.org/verify/BWBRIPEFFF4Z",
      logo: "coursera"
    },
    {
      title: "Python(Basic)",
      issuer: "HackerRank",
      date: "February 2024",
      credentialId: "f3dcf0272",
      description: "Certified in Python (Basic) by HackerRank, demonstrating foundational programming skills and problem-solving using Python.",
      skills: ["Operators", "strings", "Objects,types and classes"],
      verificationUrl: "https://www.hackerrank.com/certificates/f3dcf0272175",
      logo: "hackerrank"
    }
   
  ];


  const getLogoPlaceholder = (logo: string) => {
    const colors = {
      aws: "bg-orange-100 text-orange-600",
      google: "bg-blue-100 text-blue-600",
      meta: "bg-blue-100 text-blue-600",
      microsoft: "bg-blue-100 text-blue-600",
      freecodecamp: "bg-green-100 text-green-600"
    };
    return colors[logo as keyof typeof colors] || "bg-gray-100 text-gray-600";
  };

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that validate my technical expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 group animate-fade-up">
              <CardHeader className="pb-4">
                <div className="flex items-start mb-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getLogoPlaceholder(cert.logo)}`}>
                    <Award className="w-6 h-6" />
                  </div>
                </div>
                
                <CardTitle className="text-lg font-bold text-foreground leading-tight">
                  {cert.title}
                </CardTitle>
                
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p className="font-medium text-primary">{cert.issuer}</p>
                   <div className="flex items-center">
                     <Calendar className="w-3 h-3 mr-1" />
                     Issued: {cert.date}
                   </div>
                 </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div>
                  <h4 className="font-semibold text-xs text-foreground mb-2">Skills Validated</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Credential Details */}
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-3">
                    <span className="font-medium">Credential ID:</span> {cert.credentialId}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full text-xs"
                    asChild
                  >
                    <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-2" />
                      Verify Credential
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Learning */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-lg p-8 max-w-2xl mx-auto shadow-card">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Continuous Learning
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm committed to staying current with the latest technologies and best practices. 
              Currently pursuing additional certifications in cloud architecture and machine learning.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-sm">
                Currently Learning: Docker & Kubernetes
              </Badge>
              <Badge variant="outline" className="text-sm">
                Next Goal: AWS Solutions Architect
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
