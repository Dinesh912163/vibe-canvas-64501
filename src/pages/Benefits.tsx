import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, Leaf, Receipt, Award, BadgeCheck, CalendarCheck, Users as UsersIcon, Sprout } from "lucide-react";
import farmerPayment from "@/assets/farmer-payment.jpg";
import farmersWorking from "@/assets/farmers-working.jpg";
import villageLife from "@/assets/village-life.jpg";

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
      icon: Receipt,
      title: "Transparent Pricing",
      description: "Real-time market rates with no hidden charges",
      gradient: "bg-gradient-hero"
    },
    {
      icon: Award,
      title: "Quality Rewards",
      description: "Bonus payments for high-quality materials",
      gradient: "bg-gradient-earth"
    },
    {
      icon: BadgeCheck,
      title: "Guaranteed Payments",
      description: "Secure and timely payments every time",
      gradient: "bg-gradient-warm"
    },
    {
      icon: CalendarCheck,
      title: "Flexible Pickup",
      description: "Convenient scheduling that fits your routine",
      gradient: "bg-primary"
    },
    {
      icon: UsersIcon,
      title: "Community Support",
      description: "Join a network of successful farmers",
      gradient: "bg-gradient-hero"
    },
    {
      icon: Sprout,
      title: "Carbon Credits",
      description: "Earn additional income from carbon offset programs",
      gradient: "bg-gradient-earth"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10 pt-20">
        <section className="py-20 bg-gradient-to-b from-primary/10 to-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground">
              Farmer Benefits
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-medium text-foreground">
              किसान लाभ
            </p>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-muted-foreground leading-relaxed">
              Discover how Saubhagya transforms agricultural waste into sustainable income 
              for farming communities across India.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-l-4 border-primary">
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Benefits at a Glance</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Fair Pricing:</strong> ₹3-5 per kg with transparent IoT-verified weighing at every collection</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Quick Payments:</strong> Same-day payouts directly to your bank account or mobile wallet</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Steady Income:</strong> Earn ₹12,000-18,000 extra per month with 20-30 cattle</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Environmental Impact:</strong> Reduce methane emissions by 40% while earning income</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Main Benefits
              </h2>
              <p className="text-xl text-muted-foreground">मुख्य लाभ</p>
            </div>

            {mainBenefits.map((benefit, index) => (
              <div key={index} className={`mb-24 last:mb-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex items-center gap-16`}>
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <img 
                      src={benefit.image} 
                      alt={`${benefit.title} illustration`}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8">
                      <div className={`w-16 h-16 ${benefit.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                        <benefit.icon className="w-8 h-8 text-background" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <Card className="p-10 shadow-2xl hover:shadow-3xl transition-all duration-300">
                    <h3 className="text-3xl font-bold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-xl text-muted-foreground mb-4 font-medium">
                      {benefit.subtitle}
                    </p>
                    <p className="text-lg text-primary font-semibold mb-6">
                      {benefit.description}
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {benefit.details}
                    </p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Additional Advantages
              </h2>
              <p className="text-xl text-primary font-semibold">अतिरिक्त लाभ</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {additionalBenefits.map((benefit, index) => (
                <Card key={index} className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-primary/20">
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className={`w-20 h-20 ${benefit.gradient} rounded-2xl flex items-center justify-center shadow-xl`}>
                      <benefit.icon className="w-10 h-10 text-background" />
                    </div>
                  </div>
                  <div className="p-8 bg-gradient-to-br from-white to-primary/5">
                    <h4 className="text-2xl font-bold text-foreground mb-4">
                      {benefit.title}
                    </h4>
                    <p className="text-base text-muted-foreground leading-relaxed font-medium">
                      {benefit.description}
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
              Ready to Transform Your Income?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto drop-shadow-md">
              Join thousands of farmers who have already benefited from Saubhagya
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="hero" size="lg" className="text-xl px-12 py-8 shadow-2xl hover:shadow-3xl">
                Join Now / अभी शामिल हों
              </Button>
              <Button variant="outline" size="lg" className="text-xl px-12 py-8 bg-white text-primary hover:bg-white/90 border-2 border-white shadow-2xl">
                Learn More / और जानें
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Benefits;
