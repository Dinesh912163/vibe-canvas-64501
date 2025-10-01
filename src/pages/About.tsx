import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Award, Globe } from "lucide-react";
import villageLife from "@/assets/village-life.jpg";
import biogasFacility from "@/assets/biogas-facility.jpg";
import farmersWorking from "@/assets/farmers-working.jpg";

import leader1Img from "/attached_assets/stock_images/indian_business_lead_8c53ccc2.jpg";
import leader2Img from "/attached_assets/stock_images/indian_business_lead_731cd001.jpg";
import leader3Img from "/attached_assets/stock_images/indian_business_lead_f1960f84.jpg";

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

  const team = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Founder & CEO",
      bio: "Agricultural scientist with 15+ years experience in rural development and sustainable farming practices.",
      image: leader1Img
    },
    {
      name: "Priya Sharma",
      role: "Head of Operations",
      bio: "Supply chain expert focused on optimizing collection and transportation processes for maximum efficiency.",
      image: leader2Img
    },
    {
      name: "Amit Singh",
      role: "Technology Lead",
      bio: "IoT and blockchain specialist ensuring transparent and secure operations across all touchpoints.",
      image: leader3Img
    }
  ];

  const stats = [
    { number: "1000+", label: "Active Farmers", subtitle: "सक्रिय किसान" },
    { number: "50+", label: "Villages Served", subtitle: "सेवित गांव" },
    { number: "₹2Cr+", label: "Farmer Payouts", subtitle: "किसान भुगतान" },
    { number: "40%", label: "Emission Reduction", subtitle: "उत्सर्जन कमी" }
  ];

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10 pointer-events-none"
        style={{ backgroundImage: `url(${biogasFacility})` }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 -z-10 pointer-events-none" />
      
      <div className="relative z-10 pt-20">
        <section className="min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-2xl">
              About Saubhagya
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-medium text-white drop-shadow-lg">
              सौभाग्य के बारे में
            </p>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/95 leading-relaxed drop-shadow-md">
              Transforming rural India through innovative agricultural waste management, 
              creating sustainable income opportunities while contributing to clean energy solutions.
            </p>
          </div>
        </section>

        <section className="py-24 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-24">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={villageLife} 
                    alt="Rural community life"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-muted-foreground mb-4 font-medium">
                  हमारा मिशन
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To empower rural farming communities by creating sustainable income opportunities 
                  through innovative agricultural waste management, while contributing to India's 
                  clean energy goals and environmental sustainability.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe every farmer deserves fair compensation for their contributions to both 
                  agriculture and renewable energy production.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto lg:flex-row-reverse">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Our Vision
                </h2>
                <p className="text-xl text-muted-foreground mb-4 font-medium">
                  हमारी दृष्टि
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To become India's leading agricultural waste-to-energy platform, serving over 
                  10,000 farmers across rural India and contributing significantly to the nation's 
                  renewable energy capacity.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through technology, transparency, and trust, we aim to revolutionize how rural 
                  communities participate in and benefit from the clean energy transition.
                </p>
              </div>
              <div className="relative order-first lg:order-last">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={farmersWorking} 
                    alt="Farmers at work"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground">हमारे मूल मूल्य</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className={`w-16 h-16 ${
                    index === 0 ? 'bg-gradient-hero' : 
                    index === 1 ? 'bg-gradient-earth' : 
                    index === 2 ? 'bg-gradient-warm' : 'bg-primary'
                  } rounded-full flex items-center justify-center mx-auto mb-6 shadow-md`}>
                    <value.icon className="w-8 h-8 text-background" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">
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

        <section className="py-24 bg-gradient-to-r from-primary/90 to-secondary/90 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                Our Impact
              </h2>
              <p className="text-xl text-white/95 drop-shadow-md">हमारा प्रभाव</p>
            </div>

            <div className="grid md:grid-cols-4 gap-10 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <Card key={index} className="p-8 text-center shadow-2xl bg-white/95 backdrop-blur-sm">
                  <div className="text-5xl font-bold text-primary mb-3">
                    {stat.number}
                  </div>
                  <div className="text-base font-semibold text-foreground mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.subtitle}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Leadership Team
              </h2>
              <p className="text-xl text-muted-foreground">नेतृत्व टीम</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>
                  <div className="p-8 text-center">
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      {member.name}
                    </h4>
                    <p className="text-primary font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-primary/90 to-secondary/90 backdrop-blur-sm">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white drop-shadow-lg">
              Join Our Mission
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto drop-shadow-md">
              Be part of India's clean energy revolution while improving farmer livelihoods
            </p>
            <Button variant="hero" size="lg" className="text-xl px-12 py-8 shadow-2xl hover:shadow-3xl">
              Get Started Today / आज ही शुरू करें
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
