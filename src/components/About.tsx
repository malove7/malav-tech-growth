import { Card, CardContent } from "@/components/ui/card";
import { Users, Lightbulb, TrendingUp, Code } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Scaling businesses and driving transformations with strategic technology leadership"
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "17+ years architecting solutions with cutting-edge technologies and best practices"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Building and mentoring high-performing teams across UK & India"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Passionate about creativity and using technology to drive positive change"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Malav Shah</h3>
              <p className="text-xl text-accent font-semibold">
                CTO & Delivery Head | Scrum Master | Business Growth Strategist
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Innovative senior leader with <strong className="text-foreground">17+ years of experience</strong> across 
                startups and established organizations, specializing in technology leadership and business transformation.
              </p>
              
              <p>
                Proven ability to scale businesses, lead business transformations, and architect technology solutions 
                that drive measurable growth. Currently serving as CTO at Space Stem, where I've pioneered company-wide 
                ERP implementations and rolled out agile methodologies across international teams.
              </p>
              
              <p>
                Passionate about people, creativity, and using technology to drive growth and positive change. 
                My expertise spans software development, cloud architecture, agile project management, and team leadership.
              </p>
              
              <p className="text-foreground font-semibold">
                A self-starter with a strong belief in continuous learning and collaboration.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-accent rounded-lg p-3 flex-shrink-0">
                      <highlight.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
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

export default About;