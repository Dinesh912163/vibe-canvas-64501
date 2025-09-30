import { Card } from "@/components/ui/card";
import { Clock, Shield, Briefcase } from "lucide-react";

export const FarmerBenefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Instant Payouts",
      subtitle: "तत्काल भुगतान",
      description: "Get paid the same day your contribution is processed. No waiting, no delays.",
      color: "text-secondary"
    },
    {
      icon: Shield,
      title: "Zero Disputes", 
      subtitle: "शून्य विवाद",
      description: "IoT-verified weighing ensures transparent and accurate measurements every time.",
      color: "text-primary"
    },
    {
      icon: Briefcase,
      title: "Local Jobs",
      subtitle: "स्थानीय नौकरियां",
      description: "Creating employment opportunities in your village through local CBG production.",
      color: "text-secondary"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Farmer Benefits
          </h2>
          <p className="text-xl text-muted-foreground">
            किसान लाभ
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-8 hover:shadow-warm transition-smooth group bg-gradient-to-br from-background to-muted/30 hover:scale-105 transform">
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-xl ${index === 0 ? 'bg-gradient-warm' : index === 1 ? 'bg-gradient-hero' : 'bg-gradient-earth'} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-lg font-medium text-muted-foreground mb-4">
                  {benefit.subtitle}
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
              
              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};