import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, TruckIcon, Factory, Banknote } from "lucide-react";
import farmersWorking from "@/assets/farmers-working.jpg";
import smartTransport from "@/assets/smart-transport.jpg";
import biogasFacility from "@/assets/biogas-facility.jpg";
import farmerPayment from "@/assets/farmer-payment.jpg";
import processBg from "/attached_assets/stock_images/biogas_renewable_ene_4189bfbb.jpg";
import qualityImg from "/attached_assets/stock_images/quality_assurance_ce_39560141.jpg";
import trackingImg from "/attached_assets/stock_images/gps_tracking_map_loc_01ea6b3a.jpg";
import paymentImg from "/attached_assets/stock_images/indian_rupee_currenc_b782bf69.jpg";

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
      icon: TruckIcon,
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
      icon: Banknote,
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
      image: qualityImg,
      title: "Guaranteed Quality",
      description: "IoT sensors ensure quality standards are met"
    },
    {
      image: trackingImg,
      title: "Real-time Tracking",
      description: "Track your materials from pickup to processing"
    },
    {
      image: paymentImg,
      title: "Secure Payments",
      description: "Bank-grade security for all transactions"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10 pointer-events-none"
        style={{ backgroundImage: `url(${processBg})` }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 -z-10 pointer-events-none" />
      
      <div className="relative z-10 pt-20">
        <section className="min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-2xl">
              How Saubhagya Works
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-medium text-white drop-shadow-lg">
              यह कैसे काम करता है
            </p>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/95 leading-relaxed drop-shadow-md">
              Our transparent 4-step process ensures fair compensation for farmers while 
              contributing to clean energy production and environmental sustainability.
            </p>
          </div>
        </section>

        <section className="py-24 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            {steps.map((step, index) => (
              <div key={index} className={`mb-24 last:mb-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex items-center gap-16`}>
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <img 
                      src={step.image} 
                      alt={`${step.title} process illustration`}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8">
                      <div className={`w-16 h-16 ${step.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                        <step.icon className="w-8 h-8 text-background" />
                      </div>
                      <div className="text-white text-3xl font-bold drop-shadow-lg">
                        Step {index + 1}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <Card className="p-10 shadow-2xl hover:shadow-3xl transition-all duration-300">
                    <h3 className="text-3xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-xl text-muted-foreground mb-4 font-medium">
                      {step.subtitle}
                    </p>
                    <p className="text-lg text-primary font-semibold mb-6">
                      {step.description}
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {step.details}
                    </p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-primary/90 to-secondary/90 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                Additional Benefits
              </h2>
              <p className="text-xl md:text-2xl text-white/95 drop-shadow-md">
                अतिरिक्त लाभ
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-16">
              {benefits.map((benefit, index) => (
                <Card key={index} className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 bg-white/95 backdrop-blur-sm">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={benefit.image} 
                      alt={benefit.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-8 text-center">
                    <h4 className="text-xl font-bold text-foreground mb-4">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="hero" size="lg" className="text-xl px-12 py-8 shadow-2xl hover:shadow-3xl">
                Join Saubhagya Today / आज ही जुड़ें
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;
