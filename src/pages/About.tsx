import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Eye, ShieldCheck, Sprout } from "lucide-react";
import villageLife from "@/assets/village-life.jpg";
import farmersWorking from "@/assets/farmers-working.jpg";

export const About = () => {
  const values = [
    {
      icon: Users,
      title: "Community First",
      subtitle: "समुदाय प्रथम",
      description: "Putting farmers and rural communities at the center of everything we do, ensuring their prosperity and wellbeing."
    },
    {
      icon: Eye,
      title: "Transparency",
      subtitle: "पारदर्शिता",
      description: "Complete transparency in weighing, pricing, and payment processes with real-time tracking and verification."
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      subtitle: "गुणवत्ता आश्वासन",
      description: "Maintaining highest standards in collection and processing with certified quality control measures."
    },
    {
      icon: Sprout,
      title: "Sustainability",
      subtitle: "स्थिरता",
      description: "Creating a sustainable future through clean energy solutions that benefit both farmers and environment."
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
      <div className="relative z-10">
        <section className="pt-20 pb-20 bg-gradient-to-b from-primary/10 to-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground">
              About Saubhagya
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-medium text-foreground">
              सौभाग्य के बारे में
            </p>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-muted-foreground leading-relaxed">
              Transforming rural India through innovative agricultural waste management, 
              creating sustainable income opportunities while contributing to clean energy solutions.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-l-4 border-primary">
                <h3 className="text-2xl font-bold text-foreground mb-6">About Saubhagya - At a Glance</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Mission:</strong> Empower farmers through sustainable waste-to-energy solutions with fair compensation and transparent operations</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Impact:</strong> 1000+ farmers earning ₹12,000-18,000/month while reducing emissions by 40%</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Technology:</strong> IoT-enabled weighing, GPS tracking, and real-time payment systems for complete transparency</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Promise:</strong> Same-day payments, fair pricing, and contributing to India's renewable energy goals</p>
                  </div>
                </div>
              </div>
            </div>
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

        <section className="py-24 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-primary font-semibold">हमारे मूल मूल्य</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-primary/20 bg-gradient-to-br from-white to-primary/5">
                  <div className={`w-20 h-20 ${
                    index === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 
                    index === 1 ? 'bg-gradient-to-br from-green-500 to-green-600' : 
                    index === 2 ? 'bg-gradient-to-br from-purple-500 to-purple-600' : 'bg-gradient-to-br from-orange-500 to-orange-600'
                  } rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-base text-primary mb-4 font-semibold">
                    {value.subtitle}
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
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
