import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Award, Globe, Users, Zap, Shield, Truck } from "lucide-react";
import villageLife from "@/assets/village-life.jpg";
import biogasFacility from "@/assets/biogas-facility.jpg";
import farmersWorking from "@/assets/farmers-working.jpg";

export const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      subtitle: "समुदाय प्रथम",
      description: "Putting farmers and rural communities at the center of everything we do, ensuring their prosperity and wellbeing."
    },
    {
      icon: Target,
      title: "Transparency",
      subtitle: "पारदर्शिता",
      description: "Complete transparency in weighing, pricing, and payment processes with real-time tracking and verification."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      subtitle: "गुणवत्ता आश्वासन",
      description: "Maintaining highest standards in collection and processing with certified quality control measures."
    },
    {
      icon: Globe,
      title: "Sustainability",
      subtitle: "स्थिरता",
      description: "Creating a sustainable future through clean energy solutions that benefit both farmers and environment."
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Foundation",
      description: "Saubhagya was founded with a vision to transform rural economies through agricultural waste management."
    },
    {
      year: "2021",
      title: "First Pilot",
      description: "Launched pilot program in 5 villages across Haryana, establishing our core collection and payment processes."
    },
    {
      year: "2022",
      title: "Technology Integration",
      description: "Introduced IoT-enabled weighing systems and GPS tracking for complete transparency."
    },
    {
      year: "2023",
      title: "Expansion",
      description: "Extended operations to 50+ villages across 3 states, partnering with major biogas facilities."
    },
    {
      year: "2024",
      title: "Scale & Impact",
      description: "Serving 1000+ farmers with ₹2+ crores in total farmer payouts and growing sustainably."
    }
  ];

  const team = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Founder & CEO",
      bio: "Agricultural scientist with 15+ years experience in rural development and sustainable farming practices."
    },
    {
      name: "Priya Sharma",
      role: "Head of Operations",
      bio: "Supply chain expert focused on optimizing collection and transportation processes for maximum efficiency."
    },
    {
      name: "Amit Singh",
      role: "Technology Lead",
      bio: "IoT and blockchain specialist ensuring transparent and secure operations across all touchpoints."
    }
  ];

  const stats = [
    { number: "1000+", label: "Active Farmers", subtitle: "सक्रिय किसान" },
    { number: "50+", label: "Villages Served", subtitle: "सेवित गांव" },
    { number: "₹2Cr+", label: "Farmer Payouts", subtitle: "किसान भुगतान" },
    { number: "40%", label: "Emission Reduction", subtitle: "उत्सर्जन कमी" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section - Full Screen Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={biogasFacility} 
            alt="About Saubhagya background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/85"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10 py-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-background drop-shadow-lg">
            About Saubhagya
          </h1>
          <p className="text-2xl md:text-3xl mb-6 font-medium text-background/95 drop-shadow">
            सौभाग्य के बारे में
          </p>
          <p className="text-lg md:text-xl max-w-4xl mx-auto text-background/90 leading-relaxed drop-shadow">
            Transforming rural India through innovative agricultural waste management, 
            creating sustainable income opportunities while contributing to clean energy solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-warm">
                <img 
                  src={villageLife} 
                  alt="Rural village life with sustainable farming practices"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Transforming Rural Economy
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Saubhagya is revolutionizing the way rural communities generate income from agricultural waste. 
                Our innovative platform connects farmers directly with biogas production facilities, ensuring 
                fair compensation and transparent processes.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Through IoT-enabled collection, GPS-tracked transportation, and same-day payments, we're 
                creating a sustainable ecosystem that benefits farmers, the environment, and local communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" size="lg">
                  Join Our Mission
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-muted-foreground">
              संख्या में हमारा प्रभाव
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-warm transition-smooth">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.subtitle}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid with Background */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={farmersWorking} 
            alt="Values background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-muted/90 to-background/95"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              हमारे मूल मूल्य
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-8 text-center hover:shadow-2xl transition-all duration-300 group bg-card/95 backdrop-blur-sm border-2 hover:border-primary/50 hover:-translate-y-2"
                data-testid={`card-value-${index}`}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl ${
                  index === 0 ? 'bg-gradient-hero' : 
                  index === 1 ? 'bg-gradient-earth' : 
                  index === 2 ? 'bg-gradient-warm' : 'bg-primary'
                } flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <value.icon className="w-8 h-8 text-background" strokeWidth={2.5} />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 font-medium">
                  {value.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              हमारी यात्रा
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8 mb-12">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-background font-bold text-lg">
                    {item.year}
                  </div>
                </div>
                <div className="flex-grow">
                  <Card className="p-6 hover:shadow-warm transition-smooth">
                    <h4 className="text-xl font-bold text-foreground mb-3">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground">
              नेतृत्व टीम
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-warm transition-smooth">
                <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-10 h-10 text-background" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h4>
                <p className="text-primary font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Be part of the agricultural revolution that's transforming rural India. 
            Together, we can create sustainable prosperity for farming communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Partner With Us
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-background/10 backdrop-blur-sm border-background/30 text-background hover:bg-background hover:text-foreground">
              Contact Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;