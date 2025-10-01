import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Truck, ArrowRight, Phone, UserCog } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "/attached_assets/stock_images/green_farm_field_agr_67b4ace7.jpg";

export const Home = () => {
  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10 pointer-events-none"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50 -z-10 pointer-events-none" />
      
      <div className="relative z-10">
        <section className="min-h-screen flex items-center overflow-hidden pt-20">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-5xl mx-auto">
              <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
                  From Dung to Dhan
                </h1>
                <p className="text-2xl md:text-3xl text-white mb-6 font-medium drop-shadow-lg">
                  गौशाला से रोज़ी — किसानों के लिए न्यायपूर्ण भुगतान
                </p>
                <p className="text-xl text-white/95 mb-10 max-w-3xl mx-auto drop-shadow-md">
                  IoT-verified weighments, same-day payouts, local CBG production
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button variant="hero" size="lg" className="text-xl px-10 py-8 shadow-2xl hover:shadow-3xl transition-all">
                    <Users className="w-6 h-6 mr-3" />
                    Join as Farmer / फार्मर बनें
                  </Button>
                  <Button variant="outline" size="lg" className="text-xl px-10 py-8 bg-white text-primary hover:bg-white/90 border-2 border-white shadow-2xl">
                    <Truck className="w-6 h-6 mr-3" />
                    Request Pickup / रिक्वेस्ट पिकअप
                  </Button>
                </div>
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
                Saubhagya connects farmers with biogas production facilities, creating sustainable income 
                from agricultural waste while contributing to clean energy solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <Card className="p-10 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  <Users className="w-10 h-10 text-background" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">For Farmers</h3>
                <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                  Turn your cattle dung into daily income with transparent, fair pricing
                </p>
                <Link to="/benefits">
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-background h-12 px-6 text-base font-semibold">
                    Learn More <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </Card>

              <Card className="p-10 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                <div className="w-20 h-20 bg-gradient-earth rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  <div className="text-4xl">🔄</div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">How It Works</h3>
                <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                  Simple 4-step process from collection to payment
                </p>
                <Link to="/how-it-works">
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-background h-12 px-6 text-base font-semibold">
                    See Process <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </Card>

              <Card className="p-10 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                <div className="w-20 h-20 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  <UserCog className="w-10 h-10 text-background" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Platform Users</h3>
                <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                  Specialized tools for field executives, operators, and administrators
                </p>
                <Link to="/user-types">
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-background h-12 px-6 text-base font-semibold">
                    Explore Roles <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </Card>

              <Card className="p-10 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-10 h-10 text-background" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Get Started</h3>
                <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                  Ready to join? Contact us for immediate onboarding
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-background h-12 px-6 text-base font-semibold">
                    Contact Us <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
