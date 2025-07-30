import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Calendar, 
  Database, 
  Zap, 
  Cloud, 
  Code, 
  Heart,
  Award,
  BookOpen
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Leadership & Management",
      icon: Users,
      skills: [
        "Customer Satisfaction",
        "Resource Allocation", 
        "Project Planning",
        "Team Leadership",
        "Mentoring & Coaching",
        "Cross-functional Team Management"
      ]
    },
    {
      title: "Technology & Architecture",
      icon: Code,
      skills: [
        "ERP & E-Commerce Architecture",
        "Microsoft Technologies",
        "Azure Cloud Platform",
        "ABP Framework",
        "Angular & .NET Core",
        "Azure DevOps"
      ]
    },
    {
      title: "Methodologies & Processes",
      icon: Zap,
      skills: [
        "Agile Scrum Methodologies",
        "Software Architecture Best Practices",
        "Delivery Management",
        "Process Optimization",
        "Quality Assurance",
        "Continuous Integration"
      ]
    }
  ];

  const certifications = [
    {
      title: "Scrum Master Certified (SMC)",
      icon: Award,
      category: "Agile & Project Management"
    },
    {
      title: "Academy Accreditation – Generative AI Fundamentals", 
      icon: BookOpen,
      category: "Artificial Intelligence"
    },
    {
      title: "AI Applied for Business",
      icon: Target,
      category: "Business Strategy"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across technology leadership, architecture, and team management
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth group">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-accent rounded-lg p-3 mr-4">
                    <category.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-smooth">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs hover:bg-accent hover:text-accent-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-background border-0 shadow-soft hover:shadow-medium transition-smooth group">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-accent rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <cert.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-smooth">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {cert.category}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Education
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-gradient-accent rounded-lg p-3 mr-4 flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      B.E. in Information Technology
                    </h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Sankalchand Patel University
                    </p>
                    <Badge variant="outline" className="text-xs">
                      2004–2008
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-gradient-accent rounded-lg p-3 mr-4 flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Higher Secondary Certificate (HSC)
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      C.N. Vidyalaya
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;