import { Card } from "@/components/ui/card";
import { Scale, Truck, Factory, DollarSign } from "lucide-react";
import farmersWorking from "@/assets/farmers-working.jpg";
import smartTransport from "@/assets/smart-transport.jpg";
import biogasFacility from "@/assets/biogas-facility.jpg";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Scale,
      title: "Smart Collection",
      subtitle: "स्मार्ट संग्रह",
      description: "IoT-verified weighing and instant recording",
      gradient: "bg-gradient-hero"
    },
    {
      icon: Truck,
      title: "Safe Transport",
      subtitle: "सुरक्षित परिवहन",
      description: "GPS-tracked pickup from your gaushala",
      gradient: "bg-gradient-earth"
    },
    {
      icon: Factory,
      title: "CBG Production",
      subtitle: "CBG उत्पादन",
      description: "Clean biogas processing locally",
      gradient: "bg-gradient-warm"
    },
    {
      icon: DollarSign,
      title: "Fair Payment",
      subtitle: "न्यायपूर्ण भुगतान",
      description: "Same-day payout to your account",
      gradient: "bg-primary"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            यह कैसे काम करता है
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative p-8 text-center hover:shadow-warm transition-smooth group overflow-hidden">
              {/* Background Images */}
              {index === 0 && (
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-smooth"
                  style={{ backgroundImage: `url(${farmersWorking})` }}
                />
              )}
              {index === 1 && (
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-smooth"
                  style={{ backgroundImage: `url(${smartTransport})` }}
                />
              )}
              {index === 2 && (
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-smooth"
                  style={{ backgroundImage: `url(${biogasFacility})` }}
                />
              )}
              
              <div className="relative z-10">
                <div className={`w-16 h-16 ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth shadow-lg`}>
                  <step.icon className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 font-medium">
                  {step.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-bold text-secondary-foreground shadow-lg">
                  {index + 1}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};