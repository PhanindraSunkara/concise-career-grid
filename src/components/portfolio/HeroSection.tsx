import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
        backgroundSize: '50px 50px'
      }} />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-up">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 shadow-hero flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-white/30 flex items-center justify-center text-4xl font-bold text-white">PP</div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-hero-secondary text-5xl">Phanindra Portfolio</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-white/90 font-light mx-[30px]">AI & Machine Learning Developer 
 Deep Learning | Computer vision Enthusiast</p>
          
          <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed">Passionate about building intelligent, real-world applications using Aiml . Currently seeking internship opportunities to grow and contribute to innovative projects.</p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm" asChild>
              <a href="https://github.com/PhanindraSunkara" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm" asChild>
              <a href="https://www.linkedin.com/in/phanindra-sai-sunkara-11a412294" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm" onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({
                behavior: "smooth"
              });
            }
          }}>
              <Mail className="w-5 h-5 mr-2" />
              Contact
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg text-lg px-8" onClick={() => {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
              projectsSection.scrollIntoView({
                behavior: "smooth"
              });
            }
          }}>
              View My Work
            </Button>
            
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm text-lg px-8" onClick={() => {
            const resumeSection = document.getElementById("resume");
            if (resumeSection) {
              resumeSection.scrollIntoView({
                behavior: "smooth"
              });
            }
          }}>
              Download Resume
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button onClick={scrollToAbout} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </button>
      </div>
    </section>;
};
export default HeroSection;
