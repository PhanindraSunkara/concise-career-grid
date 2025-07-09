import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/PhanindraSunkara",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/phanindra-sai-sunkara-11a412294",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "phanindrasai1102@email.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo/Name */}
          <button 
            onClick={scrollToTop}
            className="text-2xl font-bold mb-4 hover:text-primary transition-colors"
          >
            Phanindra Portfolio
          </button>
          
          {/* Tagline */}
          <p className="text-lg mb-6 text-background/80">
            Building digital experiences with passion and precision
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background/10 rounded-full hover:bg-background/20 transition-colors group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="border-t border-background/20 pt-6">
            <p className="text-sm text-background/60 flex items-center justify-center">
              © {currentYear} Phanindra Portfolio. Made with Lovable
              <Heart className="w-4 h-4 mx-1 text-red-400" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
