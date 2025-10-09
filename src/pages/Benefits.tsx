import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, Leaf } from "lucide-react";
import farmerPayment from "@/assets/farmer-payment.jpg";
import farmersWorking from "@/assets/farmers-working.jpg";
import villageLife from "@/assets/village-life.jpg";
import benefitsBg from "/attached_assets/stock_images/happy_indian_farmers_9b1d2c93.jpg";

import transparentPricingImg from "/attached_assets/stock_images/indian_farmer_checki_06c5e61f.jpg";
import qualityRewardsImg from "/attached_assets/stock_images/indian_farmer_receiv_7dc61a20.jpg";
import securePaymentImg from "/attached_assets/stock_images/indian_rupee_currenc_e8af3f33.jpg";
import flexiblePickupImg from "/attached_assets/stock_images/pickup_truck_farm_ag_7e87fea4.jpg";
import communitySupportImg from "/attached_assets/stock_images/indian_farmers_commu_11a24f85.jpg";
import carbonCreditsImg from "/attached_assets/stock_images/green_plant_growing__1f82a449.jpg";

import farmer1Img from "/attached_assets/stock_images/happy_indian_male_fa_c753e903.jpg";
import farmer2Img from "/attached_assets/stock_images/happy_indian_male_fa_cfa42a5f.jpg";
import farmer3Img from "/attached_assets/stock_images/happy_indian_male_fa_a9d69989.jpg";
import rupeeNotesImg from "/attached_assets/stock_images/indian_rupee_currenc_fb38aa0a.jpg";

export const Benefits = () => {
  const mainBenefits = [
    {
      icon: DollarSign,
      title: "Daily Income",
      subtitle: "दैनिक आय",
      description: "Convert waste into steady income stream",
      details: "Earn ₹3-5 per kg of cattle dung with daily collection opportunities. No seasonal dependency - consistent income throughout the year.",
      gradient: "bg-gradient-hero",
      image: farmerPayment
    },
    {
      icon: TrendingUp,
      title: "Increased Profits",
      subtitle: "बढ़ा हुआ मुनाफा",
      description: "30% boost in overall farm income",
      details: "Our transparent pricing ensures you get the best rates in the market. Additional income without additional investment or labor.",
      gradient: "bg-gradient-earth",
      image: farmersWorking
    },
    {
      icon: Leaf,
      title: "Environmental Impact",
      subtitle: "पर्यावरणीय प्रभाव",
      description: "Reduce methane emissions by 40%",
      details: "Contribute to cleaner environment while earning. Your participation helps reduce greenhouse gas emissions and supports renewable energy.",
      gradient: "bg-gradient-warm",
      image: villageLife
    }
  ];

  const additionalBenefits = [
    {
      image: transparentPricingImg,
      title: "Transparent Pricing",
      description: "Real-time market rates with no hidden charges"
    },
    {
      image: qualityRewardsImg,
      title: "Quality Rewards",
      description: "Bonus payments for high-quality materials"
    },
    {
      image: securePaymentImg,
      title: "Guaranteed Payments",
      description: "Secure and timely payments every time"
    },
    {
      image: flexiblePickupImg,
      title: "Flexible Pickup",
      description: "Convenient scheduling that fits your routine"
    },
    {
      image: communitySupportImg,
      title: "Community Support",
      description: "Join a network of successful farmers"
    },
    {
      image: carbonCreditsImg,
      title: "Carbon Credits",
      description: "Earn additional income from carbon offset programs"
    }
  ];

  const testimonials = [
    {
      name: "Raman Singh",
      location: "Haryana",
      quote: "I earn ₹500-800 daily from my 20 cattle. This has completely changed my family's financial situation.",
      income: "₹15,000/month extra",
      image: farmer1Img
    },
    {
      name: "Kamala Devi",
      location: "Punjab",
      quote: "The process is so simple and payments are always on time. My daughters can continue their education now.",
      income: "₹12,000/month extra",
      image: farmer2Img
    },
    {
      name: "Suresh Kumar",
      location: "Uttar Pradesh",
      quote: "Best decision I made was joining Saubhagya. Clean process, fair rates, and reliable income.",
      income: "₹18,000/month extra",
      image: farmer3Img
    }
  ];

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10 pointer-events-none"
        style={{ backgroundImage: `url(${benefitsBg})` }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/55 -z-10 pointer-events-none" />
      
      <div className="relative z-10 pt-20">
        <section className="min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-2xl">
              Farmer Benefits
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-medium text-white drop-shadow-lg">
              किसान लाभ
            </p>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/95 leading-relaxed drop-shadow-md">
              Discover how Saubhagya transforms agricultural waste into sustainable income 
              for farming communities across India.
            </p>
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
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={benefit.image} 
                      alt={benefit.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
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

        <section className="py-24 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-muted-foreground">सफलता की कहानियां</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-xl font-bold text-foreground text-center mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground text-center mb-6">
                      {testimonial.location}
                    </p>
                    <p className="text-muted-foreground italic mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="pt-4 border-t border-muted/30">
                      <div className="relative h-24 rounded-lg overflow-hidden mb-3">
                        <img 
                          src={rupeeNotesImg} 
                          alt="Indian Rupee Notes"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
                      </div>
                      <p className="text-primary font-bold text-lg text-center">
                        {testimonial.income}
                      </p>
                    </div>
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
