import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, Leaf, Receipt, Award, BadgeCheck, CalendarCheck, Users as UsersIcon, Sprout } from "lucide-react";
import farmerPayment from "@/assets/farmer-payment.jpg";
import happyFarmers from "/attached_assets/stock_images/indian_farmers_commu_1998f716.jpg";
import villageLife from "@/assets/village-life.jpg";

export const Benefits = () => {
  const mainBenefits = [
    {
      icon: DollarSign,
      title: "Consistent Daily Income",
      subtitle: "दैनिक आय",
      description: "Transform waste into reliable, year-round income stream",
      details: "Earn ₹3-5 per kilogram of cattle dung with flexible daily collection schedules that fit your routine. Unlike seasonal crops, this income source remains consistent throughout the year regardless of weather or harvest cycles. A farmer with 25 cattle producing 250kg of dung daily can earn ₹750-1,250 per day, translating to ₹22,500-37,500 monthly. No upfront investment required - start earning from day one. The material you previously had to dispose of now becomes a valuable commodity with guaranteed buyers.",
      gradient: "bg-gradient-hero",
      image: farmerPayment
    },
    {
      icon: TrendingUp,
      title: "Significant Income Boost",
      subtitle: "बढ़ा हुआ मुनाफा",
      description: "30-50% increase in overall household income",
      details: "Our transparent, market-linked pricing ensures you receive competitive rates with quality bonuses for superior materials. This additional income stream requires minimal extra labor - you're already managing cattle, now you're monetizing their waste. For typical farming families earning ₹25,000-40,000 monthly from agriculture, Saubhagya adds ₹12,000-18,000 in supplementary income - a 30-50% boost. This extra income helps families afford better education for children, improved healthcare, agricultural investments, and emergency savings without taking loans.",
      gradient: "bg-gradient-earth",
      image: happyFarmers
    },
    {
      icon: Leaf,
      title: "Environmental & Community Benefits",
      subtitle: "पर्यावरणीय प्रभाव",
      description: "Reduce emissions by 40% while improving community health",
      details: "By properly processing cattle dung through anaerobic digestion, you prevent uncontrolled methane release - a greenhouse gas 25 times more potent than CO₂. Each ton of dung you supply prevents approximately 25kg of methane emissions, equivalent to taking 1.5 cars off roads for a year. This also eliminates groundwater contamination, reduces fly and mosquito breeding, and improves village sanitation. The CBG produced replaces fossil fuels, supporting India's renewable energy targets. The digestate byproduct returned to you is nutrient-rich organic fertilizer, reducing chemical fertilizer costs by 20-30% while improving soil health for better crop yields.",
      gradient: "bg-gradient-warm",
      image: villageLife
    }
  ];

  const additionalBenefits = [
    {
      icon: Receipt,
      title: "Completely Transparent Pricing",
      description: "Real-time market-linked rates displayed upfront with detailed breakdowns. Quality parameters (moisture content, contamination level) clearly explained. No hidden deductions, processing fees, or intermediary commissions - what you see is what you earn",
      gradient: "bg-gradient-hero"
    },
    {
      icon: Award,
      title: "Quality Bonus Incentives",
      description: "Earn additional ₹0.50-1.00 per kg for superior quality materials with low moisture content and minimal contamination. Our team provides free training on proper collection, storage, and preparation methods to help you maximize earnings through quality improvements",
      gradient: "bg-gradient-earth"
    },
    {
      icon: BadgeCheck,
      title: "100% Guaranteed Payments",
      description: "Payment protection backed by escrow accounts and bank guarantees. Every payment within 24 hours with SMS/app confirmation. Payment history tracking and annual earning reports for tax filing. Zero payment default record since inception",
      gradient: "bg-gradient-warm"
    },
    {
      icon: CalendarCheck,
      title: "Flexible Collection Scheduling",
      description: "Schedule pickups through mobile app or phone call at your convenience - daily, alternate days, or weekly. Morning or evening collection slots available. Advanced booking ensures vehicles arrive on time. Emergency pickup requests accommodated within 4 hours",
      gradient: "bg-primary"
    },
    {
      icon: UsersIcon,
      title: "Farmer Community Network",
      description: "Join 1000+ farmers already benefiting from Saubhagya. Access peer support groups, best practice sharing sessions, and success story testimonials. Community WhatsApp groups for quick tips and assistance. Local farmer representatives for personalized support",
      gradient: "bg-gradient-hero"
    },
    {
      icon: Sprout,
      title: "Carbon Credit Income",
      description: "Earn additional income through carbon offset programs registered with international standards. Your emission reductions are certified and sold as carbon credits. Farmers receive their share of carbon credit revenue - typically ₹500-1,000 extra per month beyond regular payments",
      gradient: "bg-gradient-earth"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <section className="pt-20 pb-20 bg-gradient-to-b from-primary/10 to-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground">
              Farmer Benefits
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-medium text-foreground">
              किसान लाभ
            </p>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-muted-foreground leading-relaxed">
              Discover how Saubhagya empowers farmers with multiple income streams, transparent operations,
              and environmental benefits while transforming agricultural waste management across rural India.
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
                    <p className="text-muted-foreground"><strong className="text-foreground">Fair Pricing:</strong> Earn ₹3-5 per kg based on quality parameters with transparent IoT-verified weighing at every collection. No hidden deductions, with quality bonus payments for superior materials.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Quick Payments:</strong> Guaranteed payment within 24 hours directly to your bank account or UPI wallet. No delays, no intermediaries, with detailed digital receipts for every transaction.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Steady Income:</strong> Farmers with 20-30 cattle earning ₹12,000-18,000 extra monthly income year-round. This represents 30-50% additional income compared to traditional farming alone.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Environmental Impact:</strong> Reduce greenhouse gas emissions by 40% while earning. Each ton of dung processed prevents 25kg of methane release - equivalent to removing 1.5 cars from roads annually.</p>
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
