import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, ArrowRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Chief Technology Officer",
      company: "Space Stem",
      period: "2021–Present",
      type: "Current",
      achievements: [
        "Pioneered company-wide ERP implementation",
        "Rolled out agile scrum methodologies",
        "Supported cross-functional teams in UK & India",
        "Maintained company e-commerce & ERP platform"
      ]
    },
    {
      title: "Technical Project Manager",
      company: "Space Stem",
      period: "2017–2020",
      type: "Previous",
      achievements: [
        "Delivered scalable solutions using ABP Framework, .NET Core, Angular, Azure",
        "Implemented best practices in software architecture and agile delivery",
        "Led technical teams and project delivery"
      ]
    },
    {
      title: "Technical Lead",
      company: "Space Stem",
      period: "2015–2017",
      type: "Previous",
      achievements: [
        "Led technical development initiatives",
        "Architected robust software solutions",
        "Mentored development teams"
      ]
    },
    {
      title: "Team Leader",
      company: "Value Chain Solutions",
      period: "2013–2015",
      type: "Previous",
      achievements: [
        "Managed development teams",
        "Delivered enterprise solutions",
        "Implemented process improvements"
      ]
    },
    {
      title: "Team Leader",
      company: "Ativio LLC",
      period: "2010–2013",
      type: "Previous",
      achievements: [
        "Led software development projects",
        "Built high-performance teams",
        "Delivered customer-focused solutions"
      ]
    },
    {
      title: "Sr. Software Engineer",
      company: "Neesa Technologies",
      period: "2009–2010",
      type: "Previous",
      achievements: [
        "Developed enterprise applications",
        "Contributed to technical architecture",
        "Delivered quality software solutions"
      ]
    },
    {
      title: "ASP.NET Developer",
      company: "Anant Softtech",
      period: "2008–2009",
      type: "Previous",
      achievements: [
        "Started professional career in software development",
        "Built web applications using .NET technologies",
        "Learned foundational development skills"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of 17+ years in technology leadership, from developer to CTO
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-accent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-accent z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-smooth group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant={exp.type === 'Current' ? 'default' : 'secondary'} className="text-xs">
                              {exp.type === 'Current' ? 'Current Role' : exp.period}
                            </Badge>
                            {exp.type === 'Current' && (
                              <Badge variant="outline" className="text-xs border-accent text-accent">
                                {exp.period}
                              </Badge>
                            )}
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-smooth">
                            {exp.title}
                          </h3>
                          <div className="flex items-center text-muted-foreground mb-4">
                            <Building2 className="w-4 h-4 mr-2" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-sm text-muted-foreground">
                            <ArrowRight className="w-3 h-3 mr-2 mt-1 text-accent flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;