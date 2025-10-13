import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Wheat, Cog, Users, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <section className="min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-b from-primary/10 to-white">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-5xl mx-auto">
              <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
                  From Dung to Dhan
                </h1>
                <p className="text-2xl md:text-3xl text-foreground mb-6 font-medium">
                  गौशाला से रोज़ी — किसानों के लिए न्यायपूर्ण भुगतान
                </p>
                <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                  Transform agricultural waste into wealth through India's first technology-driven biogas platform.
                  Connect with local CBG plants, receive IoT-verified weighments, and get same-day payments directly to your bank account.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button variant="hero" size="lg" className="text-xl px-10 py-8 shadow-2xl hover:shadow-3xl transition-all">
                    Join as Farmer / फार्मर बनें
                  </Button>
                  <Button variant="outline" size="lg" className="text-xl px-10 py-8 bg-white text-primary hover:bg-white/90 border-2 border-white shadow-2xl">
                    Request Pickup / रिक्वेस्ट पिकअप
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-l-4 border-primary">
                <h3 className="text-2xl font-bold text-foreground mb-6">Platform Highlights</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">For Farmers:</strong> Generate additional income of ₹3-5 per kilogram from cattle dung. With 20-30 cattle, farmers can earn ₹12,000-18,000 extra every month. Payments are processed within 24 hours with complete transparency through IoT-enabled weighing scales.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Simple Process:</strong> Our streamlined 4-step journey covers everything: Smart collection with certified weighing, GPS-tracked safe transport from your gaushala, advanced CBG production at local biogas plants, and automatic fair payment to your account - all monitored through real-time digital systems.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Platform Users:</strong> Our comprehensive ecosystem serves field executives with mobile apps for farmer onboarding, cluster managers for biogas production oversight, purification unit operators for quality control, sales teams for CBG distribution, and administrators for complete platform management.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Clean Energy:</strong> Your cattle dung is converted into Compressed Biogas (CBG) - a renewable fuel equivalent to natural gas. This process reduces methane emissions by 40%, eliminates agricultural waste pollution, and contributes to India's clean energy targets while creating circular economy benefits for rural communities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-muted/50 to-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  About Saubhagya Project
                </h2>
                <p className="text-xl text-foreground/90 mb-4 font-medium">
                  सौभाग्य परियोजना के बारे में
                </p>
              </div>

              <div className="space-y-8 text-lg text-foreground/90 leading-relaxed">
                <p className="text-xl text-foreground font-medium">
                  Saubhagya is India's pioneering agricultural waste-to-energy platform that bridges the gap between rural farming communities and clean energy production. Our mission is to transform the way farmers monetize their agricultural waste while contributing to India's ambitious renewable energy goals and supporting rural economic development.
                </p>

                <div className="bg-white/50 rounded-xl p-6 border-l-4 border-secondary">
                  <h4 className="text-xl font-bold text-foreground mb-3">The Challenge We Address</h4>
                  <p className="text-foreground/95">
                    In rural India, farmers managing gaushalas (cattle shelters) face significant challenges disposing of large quantities of cattle dung daily. Traditional methods like manual composting are labor-intensive, time-consuming, and often result in methane emissions and groundwater contamination. Approximately 3 billion tons of cattle dung are generated annually in India, with most going to waste. Meanwhile, India's growing energy demand - projected to double by 2040 - requires sustainable solutions. Saubhagya addresses both these critical challenges simultaneously.
                  </p>
                </div>

                <div className="bg-white/50 rounded-xl p-6 border-l-4 border-primary">
                  <h4 className="text-xl font-bold text-foreground mb-3">Our Technology-Driven Solution</h4>
                  <p className="text-foreground/95">
                    Through our digital platform, farmers can effortlessly sell cattle dung to authorized biogas production facilities, earning <strong className="text-foreground">₹3-5 per kilogram</strong> with guaranteed same-day payment processing. Our IoT-enabled weighing stations use certified load cells and digital sensors to ensure completely transparent, tamper-proof measurements. Every transaction is recorded with timestamp, GPS location, and digital signatures. Farmers receive instant SMS and app notifications confirming the exact weight and payment amount.
                  </p>
                </div>

                <div className="bg-white/50 rounded-xl p-6 border-l-4 border-secondary">
                  <h4 className="text-xl font-bold text-foreground mb-3">The Biogas Production Process</h4>
                  <p className="text-foreground/95">
                    The collected agricultural waste undergoes anaerobic digestion in state-of-the-art biogas plants. In oxygen-free digesters maintained at 35-40°C, naturally occurring bacteria break down organic matter over 30-40 days, producing biogas (primarily methane and carbon dioxide). This raw biogas then passes through water scrubbing purification units that remove CO₂, H₂S, and moisture, yielding <strong className="text-foreground">Compressed Biogas (CBG)</strong> - a clean, renewable fuel with over 90% methane content, equivalent to natural gas or CNG. CBG can directly replace fossil fuels in vehicles, industries, and households.
                  </p>
                </div>

                <div className="bg-white/50 rounded-xl p-6 border-l-4 border-primary">
                  <h4 className="text-xl font-bold text-foreground mb-3">Environmental & Economic Impact</h4>
                  <p className="text-foreground/95">
                    This process creates a true circular economy: Waste that would decompose uncontrolled (releasing methane - a greenhouse gas 25 times more potent than CO₂) is instead captured and converted to useful energy. The result is a <strong className="text-foreground">40% reduction in greenhouse gas emissions</strong> compared to traditional disposal. Additionally, the digestate byproduct is a nutrient-rich organic fertilizer that farmers can use to improve soil health, reducing dependency on chemical fertilizers. One ton of cattle dung produces approximately 40-60 cubic meters of biogas, equivalent to 25-35 liters of diesel.
                  </p>
                </div>

                <p className="text-foreground/95">
                  Our comprehensive digital ecosystem connects all stakeholders seamlessly: Field executives use mobile apps with offline capabilities for farmer registration, RFID scanning, and IoT scale integration. Cluster managers monitor real-time biogas production metrics (CH₄ percentage, pressure, temperature). Purification unit operators track gas quality and maintenance schedules. Sales teams manage CBG inventory and buyer relationships. Administrators oversee the entire operation with audit logs, KPI dashboards, and predictive analytics.
                </p>

                <p className="text-xl text-foreground font-medium border-l-4 border-primary pl-6 bg-primary/5 py-4 rounded-r-lg">
                  With Saubhagya, a farmer with 25 cattle generating 250kg of dung daily can earn ₹12,000-18,000 additional monthly income - often 30-50% of their regular agricultural income. Communities gain access to locally-produced clean energy, reducing dependence on fossil fuels. India advances toward its target of 5,000 CBG plants and 15 MMT CBG production capacity by 2030. Together, we're building a sustainable future where rural prosperity and environmental responsibility empower each other.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Empowering Rural India
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Discover how Saubhagya is revolutionizing rural India through innovative technology, transparent operations,
                and sustainable practices that benefit farmers, communities, and the environment.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-hero rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Wheat className="w-12 h-12 text-background" />
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">For Farmers</h3>
                  <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                    Transform cattle dung from your gaushala into consistent daily income with guaranteed fair pricing, same-day payments, and complete transparency
                  </p>
                  <Link to="/benefits">
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-background h-12 px-6 text-base font-semibold w-full">
                      Learn More <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-earth rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Cog className="w-12 h-12 text-background" />
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">How It Works</h3>
                  <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                    Our streamlined 4-step process: IoT-verified weighing, GPS-tracked transport, clean biogas production, and instant payment - all digitally monitored
                  </p>
                  <Link to="/how-it-works">
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-background h-12 px-6 text-base font-semibold w-full">
                      See Process <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-warm rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Users className="w-12 h-12 text-background" />
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Platform Users</h3>
                  <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                    Comprehensive digital tools for field workers, cluster managers, plant operators, sales teams, and administrators with real-time monitoring
                  </p>
                  <Link to="/user-types">
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-background h-12 px-6 text-base font-semibold w-full">
                      Explore Roles <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center">
                  <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Rocket className="w-12 h-12 text-background" />
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Get Started</h3>
                  <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                    Join hundreds of farmers already earning through Saubhagya. Free registration with no hidden fees and immediate onboarding support
                  </p>
                  <Link to="/contact">
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-background h-12 px-6 text-base font-semibold w-full">
                      Contact Us <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
