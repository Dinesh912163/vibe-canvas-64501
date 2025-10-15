import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Leaf, Cog, Users, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import WorkingFlow from "@/components/WorkingFlow";

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
                <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                  IoT-verified weighments, same-day payouts, local CBG production
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button variant="hero" size="lg" className="text-xl px-10 py-8 shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out">
                    Join as Farmer / फार्मर बनें
                  </Button>
                  <Button variant="hero" size="lg" className="text-xl px-10 py-8 shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out">
                    Request Pickup / रिक्वेस्ट पिकअप
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WorkingFlow />

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
              {/* For Farmers Card */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 group rounded-2xl border-0 shadow-lg flex flex-col h-full">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-yellow-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 shadow-lg">
                    <Leaf className="w-10 h-10 text-white group-hover:drop-shadow-lg transition-all duration-300" />
                  </div>
                </div>
                <div className="p-6 text-center flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-3">For Farmers</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                    Convert cattle waste into daily earnings with transparent pricing and instant digital receipts.
                  </p>
                  <Link to="/benefits">
                    <Button className="bg-green-600 hover:bg-green-700 text-white h-10 px-4 text-sm font-medium w-full rounded-lg transition-all duration-300 group/btn">
                      Join as Farmer <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* How It Works Card */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 group rounded-2xl border-0 shadow-lg flex flex-col h-full">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-yellow-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 shadow-lg">
                    <Cog className="w-10 h-10 text-white group-hover:drop-shadow-lg transition-all duration-300" />
                  </div>
                </div>
                <div className="p-6 text-center flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-3">How It Works</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                    From collection to clean energy — a simple 4-step process powered by smart logistics and IoT.
                  </p>
                  <Link to="/how-it-works">
                    <Button className="bg-green-600 hover:bg-green-700 text-white h-10 px-4 text-sm font-medium w-full rounded-lg transition-all duration-300 group/btn">
                      Explore Process <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Platform Users Card */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 group rounded-2xl border-0 shadow-lg flex flex-col h-full">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-yellow-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 shadow-lg">
                    <Users className="w-10 h-10 text-white group-hover:drop-shadow-lg transition-all duration-300" />
                  </div>
                </div>
                <div className="p-6 text-center flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-3">Platform Users</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                    From field collectors to biogas managers — discover the apps that power Saubhagya.
                  </p>
                  <Link to="/user-types">
                    <Button className="bg-green-600 hover:bg-green-700 text-white h-10 px-4 text-sm font-medium w-full rounded-lg transition-all duration-300 group/btn">
                      View Apps <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Get Started Card */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 group rounded-2xl border-0 shadow-lg flex flex-col h-full">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-emerald-50 to-green-50 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-yellow-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 shadow-lg">
                    <Rocket className="w-10 h-10 text-white group-hover:drop-shadow-lg transition-all duration-300" />
                  </div>
                </div>
                <div className="p-6 text-center flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-3">Get Started</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                    Join our growing network of farmers, gaushalas, and biogas operators today.
                  </p>
                  <Link to="/contact">
                    <Button className="bg-green-600 hover:bg-green-700 text-white h-10 px-4 text-sm font-medium w-full rounded-lg transition-all duration-300 group/btn">
                      Get Onboard <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
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
