import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, TruckIcon, Factory, Banknote, ShieldCheck, Navigation, Lock } from "lucide-react";
import smartCollection from "/attached_assets/stock_images/indian_farmer_checki_06c5e61f.jpg";
import smartTransport from "/attached_assets/stock_images/pickup_truck_farm_ag_7e87fea4.jpg";
import biogasFacility from "@/assets/biogas-facility.jpg";
import farmerPayment from "@/assets/farmer-payment.jpg";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Scale,
      title: "Smart Collection",
      subtitle: "स्मार्ट संग्रह",
      description: "IoT-verified weighing with tamper-proof digital recording",
      details: "Our certified weighing stations use advanced load cells and IoT sensors to ensure precise, tamper-proof measurement of your cattle dung. Each weighing scale is calibrated regularly and certified by government authorities. Every transaction is automatically recorded digitally with exact weight, timestamp, GPS coordinates, and digital signatures. You receive instant SMS and mobile app notifications confirming the measurement, eliminating any possibility of manipulation or disputes. The system also captures quality parameters like moisture content to determine fair pricing.",
      image: smartCollection,
      gradient: "bg-gradient-hero"
    },
    {
      icon: TruckIcon,
      title: "Safe Transport",
      subtitle: "सुरक्षित परिवहन",
      description: "GPS-tracked secure pickup with real-time monitoring",
      details: "Our professional transport teams use specialized vehicles equipped with GPS tracking systems and temperature monitoring sensors. Collection is scheduled at your convenience through our mobile app or phone call. Throughout the journey from your gaushala to the biogas plant, you can track the vehicle's location in real-time. Photo documentation at pickup and delivery points ensures accountability. The covered transport vehicles maintain optimal conditions to preserve material quality. Insurance coverage protects against any unforeseen incidents during transportation.",
      image: smartTransport,
      gradient: "bg-gradient-earth"
    },
    {
      icon: Factory,
      title: "CBG Production",
      subtitle: "CBG उत्पादन",
      description: "Advanced anaerobic digestion and purification process",
      details: "Your agricultural waste enters state-of-the-art biogas plants where it undergoes controlled anaerobic digestion in sealed reactors maintained at optimal temperature (35-40°C). Over 30-40 days, naturally occurring anaerobic bacteria break down organic matter, producing biogas containing 55-65% methane. This raw biogas then passes through multi-stage water scrubbing purification units that remove CO₂, hydrogen sulfide (H₂S), and moisture, yielding high-purity Compressed Biogas (CBG) with 90%+ methane content - equivalent to CNG and natural gas. The entire process is monitored by IoT sensors tracking gas composition, pressure, and temperature. The nutrient-rich digestate byproduct can be returned as organic fertilizer.",
      image: biogasFacility,
      gradient: "bg-gradient-warm"
    },
    {
      icon: Banknote,
      title: "Fair Payment",
      subtitle: "न्यायपूर्ण भुगतान",
      description: "Transparent pricing with guaranteed same-day payment",
      details: "Our transparent pricing model ensures you receive ₹3-5 per kilogram based on material quality (moisture content, contamination levels) and current market rates. All pricing parameters are clearly communicated upfront with no hidden deductions. Once your material is verified at the biogas plant, payment is automatically processed within 24 hours directly to your registered bank account or UPI mobile wallet. You receive a detailed digital receipt showing weight, quality grade, price per kg, total amount, and transaction ID. Payment history and monthly earning reports are available through the mobile app for your records.",
      image: farmerPayment,
      gradient: "bg-primary"
    }
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: "Guaranteed Quality Standards",
      description: "Continuous IoT sensor monitoring ensures material quality meets biogas production standards. Automated quality checks for moisture content, contamination levels, and organic matter composition with instant feedback",
      gradient: "bg-gradient-hero"
    },
    {
      icon: Navigation,
      title: "End-to-End Real-time Tracking",
      description: "Track your materials throughout the entire journey from pickup to biogas plant delivery. GPS location updates, estimated arrival times, and processing status notifications keep you informed at every stage",
      gradient: "bg-gradient-earth"
    },
    {
      icon: Lock,
      title: "Secure Payment Infrastructure",
      description: "Bank-grade encryption and security protocols protect all financial transactions. Multi-factor authentication, secure payment gateways, and complete transaction history with digital receipts for your records",
      gradient: "bg-gradient-warm"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <section className="pt-20 pb-20 bg-gradient-to-b from-primary/10 to-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground">
              How Saubhagya Works
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-medium text-foreground">
              यह कैसे काम करता है
            </p>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-muted-foreground leading-relaxed">
              Our comprehensive, technology-enabled 4-step process ensures complete transparency,
              fair compensation for farmers, and efficient conversion of agricultural waste into
              valuable clean energy while maintaining environmental sustainability at every stage.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-l-4 border-primary">
                <h3 className="text-2xl font-bold text-foreground mb-6">Process Overview</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Step 1 - Smart Collection:</strong> IoT-enabled certified weighing scales with tamper-proof sensors ensure accurate measurement. Digital recording with timestamp, GPS location, and instant SMS/app confirmation sent to farmers.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Step 2 - Safe Transport:</strong> Professional teams with GPS-tracked vehicles collect materials from your gaushala. Real-time route tracking, temperature monitoring, and photo documentation throughout the journey.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Step 3 - CBG Production:</strong> Anaerobic digestion in controlled digesters (35-40°C, 30-40 days) converts organic matter to biogas. Water scrubbing purification yields 90%+ methane CBG equivalent to CNG/natural gas.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Step 4 - Fair Payment:</strong> Transparent pricing at ₹3-5/kg based on quality. Automated payment processing within 24 hours directly to your registered bank account or UPI with detailed transaction receipt.</p>
                  </div>
                </div>
              </div>
            </div>
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
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className={`w-20 h-20 ${benefit.gradient} rounded-2xl flex items-center justify-center shadow-xl`}>
                      <benefit.icon className="w-10 h-10 text-background" />
                    </div>
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
