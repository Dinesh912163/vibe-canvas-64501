import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, Leaf, Users, Calculator, Award, ShieldCheck, Truck, UserCircle2, Sprout } from "lucide-react";
import farmerPayment from "@/assets/farmer-payment.jpg";
import farmersWorking from "@/assets/farmers-working.jpg";
import villageLife from "@/assets/village-life.jpg";
import biogasFacility from "@/assets/biogas-facility.jpg";
import heroFarming from "@/assets/hero-farming.jpg";

export const Benefits = () => {
  const mainBenefits = [
    {
      icon: DollarSign,
      title: "Daily Income",
      subtitle: "दैनिक आय",
      description: "Convert waste into steady income stream",
      details: "Earn ₹3-5 per kg of cattle dung with daily collection opportunities. No seasonal dependency - consistent income throughout the year.",
      gradient: "bg-gradient-hero",
      image: farmerPayment
    },
    {
      icon: TrendingUp,
      title: "Increased Profits",
      subtitle: "बढ़ा हुआ मुनाफा",
      description: "30% boost in overall farm income",
      details: "Our transparent pricing ensures you get the best rates in the market. Additional income without additional investment or labor.",
      gradient: "bg-gradient-earth",
      image: farmersWorking
    },
    {
      icon: Leaf,
      title: "Environmental Impact",
      subtitle: "पर्यावरणीय प्रभाव",
      description: "Reduce methane emissions by 40%",
      details: "Contribute to cleaner environment while earning. Your participation helps reduce greenhouse gas emissions and supports renewable energy.",
      gradient: "bg-gradient-warm",
      image: villageLife
    }
  ];

  const additionalBenefits = [
    {
      icon: Calculator,
      title: "Transparent Pricing",
      description: "Real-time market rates with no hidden charges"
    },
    {
      icon: Award,
      title: "Quality Rewards",
      description: "Bonus payments for high-quality materials"
    },
    {
      icon: ShieldCheck,
      title: "Guaranteed Payments",
      description: "Secure and timely payments every time"
    },
    {
      icon: Truck,
      title: "Flexible Pickup",
      description: "Convenient scheduling that fits your routine"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a network of successful farmers"
    },
    {
      icon: Sprout,
      title: "Carbon Credits",
      description: "Earn additional income from carbon offset programs"
    }
  ];

  const testimonials = [
    {
      name: "Raman Singh",
      location: "Haryana",
      quote: "I earn ₹500-800 daily from my 20 cattle. This has completely changed my family's financial situation.",
      income: "₹15,000/month extra"
    },
    {
      name: "Kamala Devi",
      location: "Punjab",
      quote: "The process is so simple and payments are always on time. My daughters can continue their education now.",
      income: "₹12,000/month extra"
    },
    {
      name: "Suresh Kumar",
      location: "Uttar Pradesh",
      quote: "Best decision I made was joining Saubhagya. Clean process, fair rates, and reliable income.",
      income: "₹18,000/month extra"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section - First Slide with Full Screen Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroFarming} 
            alt="Farming background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-secondary/80"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10 py-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-background drop-shadow-lg">
            Farmer Benefits
          </h1>
          <p className="text-2xl md:text-3xl mb-6 font-medium text-background/95 drop-shadow">
            किसान लाभ
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-background/90 leading-relaxed drop-shadow">
            Discover how Saubhagya transforms agricultural waste into sustainable income 
            for farming communities across India.
          </p>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Transform Your Farm Economics
            </h2>
            <p className="text-xl text-muted-foreground">
              अपनी खेती की अर्थव्यवस्था को बदलें
            </p>
          </div>

          {mainBenefits.map((benefit, index) => (
            <div key={index} className={`mb-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex items-center gap-16`}>
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="relative rounded-2xl overflow-hidden shadow-warm">
                  <img 
                    src={benefit.image} 
                    alt={`${benefit.title} illustration`}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className={`w-12 h-12 ${benefit.gradient} rounded-lg flex items-center justify-center mb-2`}>
                      <benefit.icon className="w-6 h-6 text-background" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <Card className="p-8 hover:shadow-warm transition-smooth">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 ${benefit.gradient} rounded-full flex items-center justify-center`}>
                      <benefit.icon className="w-8 h-8 text-background" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground font-medium">
                        {benefit.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-foreground mb-4 font-medium">
                    {benefit.description}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {benefit.details}
                  </p>

                  <Button variant="outline" size="lg">
                    Calculate Your Income
                  </Button>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Benefits Grid - Second Slide with Full Width Background */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={biogasFacility} 
            alt="Biogas facility background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-muted/95"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 drop-shadow-sm">
              Additional Advantages
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground drop-shadow-sm">
              अतिरिक्त फायदे
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {additionalBenefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-2xl transition-all duration-300 group bg-card/95 backdrop-blur-sm border-2 hover:border-primary/50 hover:-translate-y-2 hover:scale-105"
                data-testid={`card-benefit-${index}`}
              >
                <div className={`w-16 h-16 mb-6 rounded-xl ${
                  index % 3 === 0 ? 'bg-gradient-hero' : 
                  index % 3 === 1 ? 'bg-gradient-earth' : 'bg-gradient-warm'
                } flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-background" strokeWidth={2.5} />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
                
                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              सफलता की कहानियां
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-warm transition-smooth">
                <div className="mb-6">
                  <div className="text-2xl font-bold text-primary mb-2">
                    {testimonial.income}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t pt-4">
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Increase Your Income?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of farmers already benefiting from Saubhagya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Start Earning Today
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-background/10 backdrop-blur-sm border-background/30 text-background hover:bg-background hover:text-foreground">
              Calculate Income
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;