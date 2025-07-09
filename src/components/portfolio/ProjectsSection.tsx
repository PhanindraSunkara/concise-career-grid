import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar } from "lucide-react";
const ProjectsSection = () => {
  const projects = [{
  title: "Deepfake Detection System",
  description: "An AI-based video analysis system that detects deepfake videos using CNN and MTCNN. The app allows users to upload videos and classifies them as REAL or FAKE with confidence scores via a Flask-based interface.",
  image: "public/deep fake.jpg", // replace this with your actual uploaded image ID or asset path
  technologies: ["Python", "Flask", "TensorFlow", "OpenCV", "MTCNN"],
  github: "https://github.com/PhanindraSunkara/Deep_Fake_Detection",
  date: "Dec 2024- April 2025",
  highlights: [
    "Face detection using MTCNN",
    "CNN-based video frame classification",
    "Real-time deepfake prediction via web interface",
    "Responsive UI with upload and result display",
    "Trained on FaceForensics++, DFDC datasets"
  ]
  }, {
  title: "Fashion Recommendation System",
  description: "An AI-powered application that recommends visually similar fashion items based on uploaded images. It uses deep learning for feature extraction and KNN for similarity search, integrated with a user-friendly Streamlit interface.",
  image: "public/Fashion.jpg", // Replace with your actual image ID or file path
  technologies: ["Python", "Streamlit", "ResNet50", "OpenCV", "KNN"],
  github: "https://github.com/PhanindraSunkara/Fashion_Recommendation_system",
  date: "May 2024",
  highlights: [
    "Feature extraction using ResNet50",
    "Image similarity matching with KNN",
    "User upload interface with real-time recommendations",
    "Visual search based on clothing images",
    "Built using Streamlit for easy deployment"
  ]
}, {
  title: "Plant Disease Detection System",
  description: "A deep learning-based application that detects plant leaf diseases using image classification. The system uses CNN to classify diseases from leaf images and helps farmers and botanists take early action.",
  image: "public/Plant.jpg", // Replace with actual image ID or path
  technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit"],
  github: "https://github.com/PhanindraSunkara/Plant_Disease_Detection",
  date: "March 2025",
  highlights: [
    "Disease classification using Convolutional Neural Networks",
    "Image preprocessing with OpenCV",
    "Supports multiple crop types and disease classes",
    "Deployed using Streamlit for easy accessibility",
    "Promotes early diagnosis for better crop yield"
  ]
}, {
  title: "Text Emotion Detection System",
  description: "A machine learning web app that predicts the emotional tone of user input text using Logistic Regression and vectorization techniques. It displays the emotion, confidence score, and a matching emoji via a simple Flask interface.",
  image: "public/text.jpg", // Replace with your actual image ID or path
  technologies: ["Python", "Flask", "scikit-learn", "TfidfVectorizer", "NeatText"],
  github: "https://github.com/PhanindraSunkara/Text_Emotion_Detection",
  date: "November 2023",
  highlights: [
    "Emotion classification using Logistic Regression",
    "Text preprocessing with NeatText",
    "Real-time prediction with emoji feedback",
    "Confidence score visualization",
    "Built with Flask and deployed locally"
  ]
}, 
  {
  title: "Flight Fare Prediction System",
  description: "A machine learning-based web app that predicts flight ticket prices based on travel details like airline, date, source, and destination. Built using regression models and deployed with a simple Streamlit UI.",
  image: "public/flight.jpg", // Replace with your image path or ID
  technologies: ["Python", "Streamlit", "Pandas", "scikit-learn", "Matplotlib"],
  github: "https://github.com/PhanindraSunkara/Flight_Fare_prediction",
  date: "March 2023",
  highlights: [
    "Predicts flight fares using regression algorithms",
    "User-friendly input form via Streamlit",
    "Trained on real airline fare datasets",
    "Feature engineering for date, duration, and airline",
    "Useful for travel planning and price analysis"
  ]
},
];
  return <section id="projects" className="py-20 bg-section-bg">
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
          {projects.map((project, index) => <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 group overflow-hidden animate-fade-up">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-card overflow-hidden">
                <img src={`https://images.unsplash.com/${project.image}?w=500&h=300&fit=crop`} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
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
                    {project.technologies.map((tech, techIndex) => <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>)}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 3).map((highlight, highlightIndex) => <li key={highlightIndex} className="text-sm text-muted-foreground flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {highlight}
                      </li>)}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    
                  </Button>
                </div>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/PhanindraSunkara" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default ProjectsSection;
