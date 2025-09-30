import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Truck, TrendingUp, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-farming.jpg";

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-background mb-6 leading-tight">
                From Dung to Dhan
              </h1>
              <p className="text-xl md:text-2xl text-background/90 mb-4 font-medium">
                गौशाला से रोज़ी — किसानों के लिए न्यायपूर्ण भुगतान
              </p>
              <p className="text-lg text-background/80 mb-8 max-w-lg mx-auto lg:mx-0">
                IoT-verified weighments, same-day payouts, local CBG production
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  <Users className="w-5 h-5" />
                  Join as Farmer / फार्मर बनें
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-background/10 backdrop-blur-sm border-background/30 text-background hover:bg-background hover:text-foreground">
                  <Truck className="w-5 h-5" />
                  Request Pickup / रिक्वेस्ट पिकअप
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <Card className="p-6 bg-background/95 backdrop-blur-sm shadow-warm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-earth rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">+30%</div>
                    <div className="text-sm text-muted-foreground">Farmer Income Increase</div>
                    <div className="text-sm text-muted-foreground">किसान आय वृद्धि</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-background/95 backdrop-blur-sm shadow-warm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center">
                    <div className="text-lg font-bold text-foreground">⚡</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary">&gt;90%</div>
                    <div className="text-sm text-muted-foreground">CBG Yield Efficiency</div>
                    <div className="text-sm text-muted-foreground">CBG उत्पादन दक्षता</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-background/95 backdrop-blur-sm shadow-warm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <div className="text-lg font-bold text-background">🌱</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">40%</div>
                    <div className="text-sm text-muted-foreground">Methane Reduction</div>
                    <div className="text-sm text-muted-foreground">मीथेन कमी</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Empowering Rural India
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Saubhagya connects farmers with biogas production facilities, creating sustainable income 
              from agricultural waste while contributing to clean energy solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-warm transition-smooth group">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">For Farmers</h3>
              <p className="text-muted-foreground mb-6">
                Turn your cattle dung into daily income with transparent, fair pricing
              </p>
              <Link to="/benefits">
                <Button variant="outline" className="group-hover:bg-primary group-hover:text-background">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Card>

            <Card className="p-8 text-center hover:shadow-warm transition-smooth group">
              <div className="w-16 h-16 bg-gradient-earth rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl">🔄</div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">How It Works</h3>
              <p className="text-muted-foreground mb-6">
                Simple 4-step process from collection to payment
              </p>
              <Link to="/how-it-works">
                <Button variant="outline" className="group-hover:bg-primary group-hover:text-background">
                  See Process <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Card>

            <Card className="p-8 text-center hover:shadow-warm transition-smooth group">
              <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Get Started</h3>
              <p className="text-muted-foreground mb-6">
                Ready to join? Contact us for immediate onboarding
              </p>
              <Link to="/contact">
                <Button variant="outline" className="group-hover:bg-primary group-hover:text-background">
                  Contact Us <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;