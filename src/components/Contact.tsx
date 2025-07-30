import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Linkedin, MapPin, Download, ExternalLink } from "lucide-react";
const Contact = () => {
  const contactInfo = [{
    icon: Phone,
    label: "Phone",
    value: "+91 80000 97772",
    href: "tel:+918000097772"
  }, {
    icon: Mail,
    label: "Email",
    value: "malove7@live.com",
    href: "mailto:malove7@live.com"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mns7",
    href: "https://linkedin.com/in/mns7"
  }, {
    icon: MapPin,
    label: "Location",
    value: "Ahmedabad, Gujarat, India",
    href: "#"
  }];
  return <section id="contact" className="py-20 bg-gradient-hero">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to drive business growth through technology? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>
              
              {contactInfo.map((info, index) => <a key={index} href={info.href} className={`flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-smooth group ${info.href === '#' ? 'cursor-default' : 'hover:transform hover:translate-x-2'}`} {...info.href.startsWith('http') && {
              target: '_blank',
              rel: 'noopener noreferrer'
            }}>
                  <div className="bg-gradient-accent rounded-lg p-3 mr-4 flex-shrink-0">
                    <info.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">{info.label}</p>
                    <p className="text-white font-medium group-hover:text-accent transition-smooth">
                      {info.value}
                    </p>
                  </div>
                  {info.href !== '#' && info.href.startsWith('http') && <ExternalLink className="h-4 w-4 text-white/50 ml-auto group-hover:text-accent transition-smooth" />}
                </a>)}
            </div>

            {/* Call to Action */}
            <div className="space-y-4">
              <Button variant="hero" size="lg" className="w-full text-lg py-4" onClick={() => window.open('mailto:malove7@live.com', '_blank')}>
                Send Email
                <Mail className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="lg" onClick={() => {
              // In a real implementation, this would download the actual resume
              console.log('Download resume functionality would be implemented here');
            }} className="w-full text-lg py-4 border-white/30 text-white bg-slate-600 hover:bg-slate-500">
                Download Resume
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Professional Summary Card */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-strong">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-accent rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-foreground">MS</span>
                </div>
                
                <div>
                  <h4 className="text-2xl font-bold text-foreground mb-2">Malav Shah</h4>
                  <p className="text-accent font-semibold mb-4">
                    CTO & Delivery Head (CSM®)
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Ready to help your business scale through strategic technology leadership, 
                    innovative solutions, and proven delivery methodologies.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">17+</div>
                    <div className="text-muted-foreground text-sm">Years Exp.</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">CSM®</div>
                    <div className="text-muted-foreground text-sm">Certified</div>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-muted-foreground italic">
                    "Passionate about using technology to drive growth and positive change"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Contact;