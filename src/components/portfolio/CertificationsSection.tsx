import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "December 2023",
      credentialId: "AWS-CCP-2023-001",
      status: "Active",
      validUntil: "December 2026",
      description: "Foundational understanding of AWS Cloud services, security, architecture, and pricing.",
      skills: ["Cloud Computing", "AWS Services", "Security", "Pricing Models"],
      verificationUrl: "https://aws.amazon.com/verification",
      logo: "aws"
    },
    {
      title: "Google Analytics Certified",
      issuer: "Google",
      date: "October 2023",
      credentialId: "GA-2023-456",
      status: "Active",
      validUntil: "October 2024",
      description: "Proficiency in Google Analytics including setup, configuration, and advanced analysis techniques.",
      skills: ["Web Analytics", "Data Analysis", "Reporting", "Conversion Tracking"],
      verificationUrl: "https://skillshop.exceedlms.com/student/path/2938",
      logo: "google"
    },
    {
      title: "Meta Front-End Developer Certificate",
      issuer: "Meta (Facebook)",
      date: "September 2023",
      credentialId: "META-FE-789",
      status: "Active",
      validUntil: "Permanent",
      description: "Comprehensive program covering React, JavaScript, HTML/CSS, version control, and UX/UI principles.",
      skills: ["React", "JavaScript", "HTML/CSS", "Git", "UX/UI Design"],
      verificationUrl: "https://www.coursera.org/account/accomplishments/specialization/",
      logo: "meta"
    },
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "August 2023",
      credentialId: "AZ-900-2023-321",
      status: "Active",
      validUntil: "August 2026",
      description: "Foundational knowledge of cloud services and how they are provided with Microsoft Azure.",
      skills: ["Azure Services", "Cloud Computing", "Virtual Machines", "Storage"],
      verificationUrl: "https://docs.microsoft.com/en-us/learn/certifications/",
      logo: "microsoft"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "June 2023",
      credentialId: "FCC-RWD-654",
      status: "Active",
      validUntil: "Permanent",
      description: "Comprehensive course covering HTML, CSS, responsive design principles, and modern web development.",
      skills: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "CSS Grid"],
      verificationUrl: "https://www.freecodecamp.org/certification/",
      logo: "freecodecamp"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "July 2023",
      credentialId: "FCC-JS-987",
      status: "Active",
      validUntil: "Permanent",
      description: "In-depth study of JavaScript programming, algorithms, data structures, and problem-solving techniques.",
      skills: ["JavaScript", "Algorithms", "Data Structures", "Problem Solving"],
      verificationUrl: "https://www.freecodecamp.org/certification/",
      logo: "freecodecamp"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800";
  };

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
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getLogoPlaceholder(cert.logo)}`}>
                    <Award className="w-6 h-6" />
                  </div>
                  <Badge className={`text-xs ${getStatusColor(cert.status)}`}>
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {cert.status}
                  </Badge>
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
                  {cert.validUntil !== "Permanent" && (
                    <p className="text-xs">Valid until: {cert.validUntil}</p>
                  )}
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