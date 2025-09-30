import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, Truck, Factory, DollarSign, CheckCircle, Clock, Shield } from "lucide-react";
import farmersWorking from "@/assets/farmers-working.jpg";
import smartTransport from "@/assets/smart-transport.jpg";
import biogasFacility from "@/assets/biogas-facility.jpg";
import farmerPayment from "@/assets/farmer-payment.jpg";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Scale,
      title: "Smart Collection",
      subtitle: "स्मार्ट संग्रह",
      description: "IoT-verified weighing and instant recording",
      details: "Our certified weighing stations ensure accurate measurement of your cattle dung. Every transaction is recorded digitally with timestamp and location verification.",
      image: farmersWorking,
      gradient: "bg-gradient-hero"
    },
    {
      icon: Truck,
      title: "Safe Transport",
      subtitle: "सुरक्षित परिवहन",
      description: "GPS-tracked pickup from your gaushala",
      details: "Professional transport teams collect your materials with GPS tracking for complete transparency. Real-time updates keep you informed throughout the process.",
      image: smartTransport,
      gradient: "bg-gradient-earth"
    },
    {
      icon: Factory,
      title: "CBG Production",
      subtitle: "CBG उत्पादन",
      description: "Clean biogas processing locally",
      details: "State-of-the-art biogas plants convert your waste into valuable Compressed Biogas (CBG) using advanced anaerobic digestion technology.",
      image: biogasFacility,
      gradient: "bg-gradient-warm"
    },
    {
      icon: DollarSign,
      title: "Fair Payment",
      subtitle: "न्यायपूर्ण भुगतान",
      description: "Same-day payout to your account",
      details: "Transparent pricing based on quality and quantity. Payments are processed within 24 hours directly to your bank account or mobile wallet.",
      image: farmerPayment,
      gradient: "bg-primary"
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Guaranteed Quality",
      description: "IoT sensors ensure quality standards are met"
    },
    {
      icon: Clock,
      title: "Real-time Tracking",
      description: "Track your materials from pickup to processing"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Bank-grade security for all transactions"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            How Saubhagya Works
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-medium">
            यह कैसे काम करता है
          </p>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Our transparent 4-step process ensures fair compensation for farmers while 
            contributing to clean energy production and environmental sustainability.
          </p>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          {steps.map((step, index) => (
            <div key={index} className={`mb-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex items-center gap-16`}>
              {/* Image */}
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="relative rounded-2xl overflow-hidden shadow-warm">
                  <img 
                    src={step.image} 
                    alt={`${step.title} process illustration`}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className={`w-12 h-12 ${step.gradient} rounded-lg flex items-center justify-center mb-2`}>
                      <step.icon className="w-6 h-6 text-background" />
                    </div>
                    <div className="text-background text-2xl font-bold">
                      Step {index + 1}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <Card className="p-8 hover:shadow-warm transition-smooth">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 ${step.gradient} rounded-full flex items-center justify-center`}>
                      <step.icon className="w-8 h-8 text-background" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground font-medium">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-foreground mb-4 font-medium">
                    {step.description}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {step.details}
                  </p>

                  <Button variant="outline" size="lg">
                    Learn More Details
                  </Button>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Our Process?
            </h2>
            <p className="text-xl text-muted-foreground">
              हमारी प्रक्रिया क्यों चुनें?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-warm transition-smooth group">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-lg ${
                  index === 0 ? 'bg-gradient-hero' : 
                  index === 1 ? 'bg-gradient-earth' : 'bg-gradient-warm'
                } flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                  <benefit.icon className="w-6 h-6 text-background" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;