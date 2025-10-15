import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, TruckIcon, Factory, Banknote, ShieldCheck, Navigation, Lock, CheckCircle } from "lucide-react";
import farmersWorking from "@/assets/farmers-working.jpg";
import smartTransport from "@/assets/smart-transport.jpg";
import biogasFacility from "@/assets/biogas-facility.jpg";
import farmerPayment from "@/assets/farmer-payment.jpg";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { howItWorksTranslations } from "@/translations/howItWorks";
import { LanguageToggle } from "@/components/LanguageToggle";

export const HowItWorks = () => {
  const { t } = useLanguage();

  const scrollToStep = (stepNumber: number) => {
    const element = document.getElementById(`step-${stepNumber}-detail`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const taglines = [
    {
      title: "Farmer Power",
      english: "Farmer Power",
      hindi: "किसान की ताकत से भारत की प्रगति।"
    },
    {
      title: "Clean Tomorrow",
      english: "Clean Tomorrow",
      hindi: "हर किसान के प्रयास से स्वच्छ कल।"
    },
    {
      title: "Rural Energy",
      english: "Rural Energy",
      hindi: "गांव की क्षमता, देश की ऊर्जा।"
    },
    {
      title: "Tradition Meets Tech",
      english: "Tradition Meets Tech",
      hindi: "परंपरा और तकनीक से हरित भारत।"
    },
    {
      title: "Waste to Wealth",
      english: "Waste to Wealth",
      hindi: "गांव के अपशिष्ट से उन्नति की ऊर्जा।"
    },
    {
      title: "Rural Innovation",
      english: "Rural Innovation",
      hindi: "गांव की सोच, टिकाऊ कल।"
    },
    {
      title: "Farmer Partners",
      english: "Farmer Partners",
      hindi: "हर किसान, स्वच्छ ऊर्जा का भागीदार।"
    },
    {
      title: "Hard Work, Clean Power",
      english: "Hard Work, Clean Power",
      hindi: "मेहनत से स्वच्छ ऊर्जा तक — सौभाग्य का मार्ग।"
    },
    {
      title: "Empowering Hands",
      english: "Empowering Hands",
      hindi: "जो देश को खिलाते हैं, उन्हें सशक्त बनाते हैं।"
    },
    {
      title: "Sustainable Roots",
      english: "Sustainable Roots",
      hindi: "हर गांव में टिकाऊ विकास की जड़ें।"
    },
    {
      title: "Dung to Dream",
      english: "Dung to Dream",
      hindi: "गोबर से ऊर्जा, सपनों से हकीकत।"
    },
    {
      title: "Smart Livelihoods",
      english: "Smart Livelihoods",
      hindi: "कमाई, स्थिरता और सशक्तिकरण का समझदार तरीका।"
    },
    {
      title: "Green Villages",
      english: "Green Villages",
      hindi: "हरित भारत की शुरुआत गांवों से।"
    },
    {
      title: "Clean Origins",
      english: "Clean Origins",
      hindi: "स्वच्छ ऊर्जा, ग्रामीण भारत के दिल से।"
    },
    {
      title: "Grown Progress",
      english: "Grown Progress",
      hindi: "प्रगति जो पनपी है, निकाली नहीं गई।"
    },
    {
      title: "Rural Story",
      english: "Rural Story",
      hindi: "हम मिलकर लिख रहे हैं गांवों की नई ऊर्जा कहानी।"
    },
    {
      title: "Driving Hope",
      english: "Driving Hope",
      hindi: "नवाचार, ईमानदारी और उम्मीद से परिवर्तन।"
    },
    {
      title: "Farmer Leaders",
      english: "Farmer Leaders",
      hindi: "किसान ही हैं नवीकरणीय क्रांति के अग्रदूत।"
    },
    {
      title: "Fields to Fuel",
      english: "Fields to Fuel",
      hindi: "खेतों से ईंधन तक — टिकाऊ भविष्य की दिशा।"
    },
    {
      title: "Dignified Earning",
      english: "Dignified Earning",
      hindi: "सम्मान और उद्देश्य से कचरे से कमाई।"
    },
    {
      title: "Future Energy",
      english: "Future Energy",
      hindi: "स्वच्छ ऊर्जा का भविष्य — किसान के हाथों में।"
    },
    {
      title: "Balanced Growth",
      english: "Balanced Growth",
      hindi: "रोज़गार भी, पर्यावरण भी सुरक्षित।"
    },
    {
      title: "Pure Prosperity",
      english: "Pure Prosperity",
      hindi: "किसान की समृद्धि, प्रकृति की पवित्रता।"
    },
    {
      title: "Rural Strength",
      english: "Rural Strength",
      hindi: "गांव की दृढ़ता से देश की नई शुरुआत।"
    },
    {
      title: "Village Power",
      english: "Village Power",
      hindi: "हर गांव से ऊर्जा, हर किसान से प्रेरणा।"
    }
  ];

  const [currentTagline, setCurrentTagline] = useState(taglines[0]);

  useEffect(() => {
    // Select a random tagline on component mount
    const randomIndex = Math.floor(Math.random() * taglines.length);
    setCurrentTagline(taglines[randomIndex]);
  }, []);

  const steps = [
    {
      icon: Scale,
      title: t(howItWorksTranslations.steps.smartCollection.title),
      subtitle: t(howItWorksTranslations.steps.smartCollection.subtitle),
      description: t(howItWorksTranslations.steps.smartCollection.description),
      detailsText: t(howItWorksTranslations.steps.smartCollection.detailsText),
      highlight1: t(howItWorksTranslations.steps.smartCollection.highlight1),
      highlight2: t(howItWorksTranslations.steps.smartCollection.highlight2),
      highlight3: t(howItWorksTranslations.steps.smartCollection.highlight3),
      whyItMatters: t(howItWorksTranslations.steps.smartCollection.whyItMatters),
      image: farmersWorking,
      gradient: "bg-gradient-hero"
    },
    {
      icon: TruckIcon,
      title: t(howItWorksTranslations.steps.safeTransport.title),
      subtitle: t(howItWorksTranslations.steps.safeTransport.subtitle),
      description: t(howItWorksTranslations.steps.safeTransport.description),
      detailsText: t(howItWorksTranslations.steps.safeTransport.detailsText),
      highlight1: t(howItWorksTranslations.steps.safeTransport.highlight1),
      highlight2: t(howItWorksTranslations.steps.safeTransport.highlight2),
      highlight3: t(howItWorksTranslations.steps.safeTransport.highlight3),
      whyItMatters: t(howItWorksTranslations.steps.safeTransport.whyItMatters),
      image: smartTransport,
      gradient: "bg-gradient-earth"
    },
    {
      icon: Factory,
      title: t(howItWorksTranslations.steps.cbgProduction.title),
      subtitle: t(howItWorksTranslations.steps.cbgProduction.subtitle),
      description: t(howItWorksTranslations.steps.cbgProduction.description),
      detailsText: t(howItWorksTranslations.steps.cbgProduction.detailsText),
      highlight1: t(howItWorksTranslations.steps.cbgProduction.highlight1),
      highlight2: t(howItWorksTranslations.steps.cbgProduction.highlight2),
      highlight3: t(howItWorksTranslations.steps.cbgProduction.highlight3),
      whyItMatters: t(howItWorksTranslations.steps.cbgProduction.whyItMatters),
      image: biogasFacility,
      gradient: "bg-gradient-warm"
    },
    {
      icon: Banknote,
      title: t(howItWorksTranslations.steps.fairPayment.title),
      subtitle: t(howItWorksTranslations.steps.fairPayment.subtitle),
      description: t(howItWorksTranslations.steps.fairPayment.description),
      detailsText: t(howItWorksTranslations.steps.fairPayment.detailsText),
      highlight1: t(howItWorksTranslations.steps.fairPayment.highlight1),
      highlight2: t(howItWorksTranslations.steps.fairPayment.highlight2),
      highlight3: t(howItWorksTranslations.steps.fairPayment.highlight3),
      whyItMatters: t(howItWorksTranslations.steps.fairPayment.whyItMatters),
      image: farmerPayment,
      gradient: "bg-primary"
    }
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: t(howItWorksTranslations.benefits.guaranteedQuality.title),
      description: t(howItWorksTranslations.benefits.guaranteedQuality.description),
      gradient: "bg-gradient-hero"
    },
    {
      icon: Navigation,
      title: t(howItWorksTranslations.benefits.realTimeTracking.title),
      description: t(howItWorksTranslations.benefits.realTimeTracking.description),
      gradient: "bg-gradient-earth"
    },
    {
      icon: Lock,
      title: t(howItWorksTranslations.benefits.securePayments.title),
      description: t(howItWorksTranslations.benefits.securePayments.description),
      gradient: "bg-gradient-warm"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <LanguageToggle />
      <div className="relative z-10">
        <section className="pt-20 pb-20 bg-gradient-to-b from-primary/10 to-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
              {currentTagline.english}
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-medium text-primary">
              {currentTagline.hindi}
            </p>
            <div className="text-xl md:text-2xl max-w-4xl mx-auto text-muted-foreground leading-relaxed space-y-4">
              <p>
                {t(howItWorksTranslations.hero.subtitle1)}
              </p>
              <p>
                {t(howItWorksTranslations.hero.subtitle2)}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">{t(howItWorksTranslations.processOverview.title)}</h3>
                <p className="text-lg text-gray-600">{t(howItWorksTranslations.processOverview.subtitle)}</p>
              </div>

              {/* Process Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Step 1 */}
                <Card
                  className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 text-center cursor-pointer hover:border-primary/30"
                  onClick={() => scrollToStep(1)}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Scale className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-black mb-3">{t(howItWorksTranslations.processOverview.step1)}</h4>
                  <div className="border-t border-gray-100 pt-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(howItWorksTranslations.processOverview.step1Description)}</p>
                  </div>
                </Card>

                {/* Step 2 */}
                <Card
                  className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 text-center cursor-pointer hover:border-primary/30"
                  onClick={() => scrollToStep(2)}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <TruckIcon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-black mb-3">{t(howItWorksTranslations.processOverview.step2)}</h4>
                  <div className="border-t border-gray-100 pt-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(howItWorksTranslations.processOverview.step2Description)}</p>
                  </div>
                </Card>

                {/* Step 3 */}
                <Card
                  className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 text-center cursor-pointer hover:border-primary/30"
                  onClick={() => scrollToStep(3)}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Factory className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-black mb-3">{t(howItWorksTranslations.processOverview.step3)}</h4>
                  <div className="border-t border-gray-100 pt-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(howItWorksTranslations.processOverview.step3Description)}</p>
                  </div>
                </Card>

                {/* Step 4 */}
                <Card
                  className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 text-center cursor-pointer hover:border-primary/30"
                  onClick={() => scrollToStep(4)}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Banknote className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-black mb-3">{t(howItWorksTranslations.processOverview.step4)}</h4>
                  <div className="border-t border-gray-100 pt-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(howItWorksTranslations.processOverview.step4Description)}</p>
                  </div>
                </Card>
              </div>

              {/* Finishing Line */}
              <div className="text-center">
                <p className="text-lg text-gray-600 italic">{t(howItWorksTranslations.processOverview.finishingLine)}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            {steps.map((step, index) => (
              <div key={index} id={`step-${index + 1}-detail`} className={`mb-24 last:mb-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex items-stretch gap-16`}>
                <div className="lg:w-1/2 mb-10 lg:mb-0 flex">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 w-full flex flex-col">
                    <img
                      src={step.image}
                      alt={`${step.title} process illustration`}
                      className="w-full flex-1 object-cover min-h-[400px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8">
                      <div className={`w-16 h-16 ${step.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                        <step.icon className="w-8 h-8 text-background" />
                      </div>
                      <div className="text-white text-3xl font-bold drop-shadow-lg">
                        {t(index === 0 ? howItWorksTranslations.processOverview.step1 :
                           index === 1 ? howItWorksTranslations.processOverview.step2 :
                           index === 2 ? howItWorksTranslations.processOverview.step3 :
                           howItWorksTranslations.processOverview.step4)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 flex">
                  <Card className="p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 w-full flex flex-col justify-between min-h-[400px]">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-foreground mb-3">
                          {step.title}
                        </h3>
                        <p className="text-xl text-muted-foreground mb-4 font-medium">
                          {step.subtitle}
                        </p>
                        <p className="text-lg text-primary font-semibold mb-6">
                          {step.description}
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed mb-6">
                          {step.detailsText}
                        </p>
                      </div>

                      {/* Highlights Section */}
                      <div className={`rounded-xl p-4 shadow-sm ${index === 0 ? 'bg-green-50' :
                        index === 1 ? 'bg-blue-50' :
                          index === 2 ? 'bg-orange-50' :
                            'bg-yellow-50'
                        }`}>
                        <h4 className="text-sm font-semibold text-primary uppercase mb-3">{t(howItWorksTranslations.highlights.title)}</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {step.highlight1}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {step.highlight2}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {step.highlight3}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Why It Matters Section */}
                      <div className={`rounded-xl p-4 shadow-sm ${index === 0 ? 'bg-green-50' :
                        index === 1 ? 'bg-blue-50' :
                          index === 2 ? 'bg-orange-50' :
                            'bg-yellow-50'
                        }`}>
                        <h4 className="text-sm font-semibold text-primary uppercase mb-2">{t(howItWorksTranslations.whyItMatters.title)}</h4>
                        <p className="text-sm text-muted-foreground italic font-medium">
                          {step.whyItMatters}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
                {t(howItWorksTranslations.benefits.title)}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience transparency, security, and efficiency at every step
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Card */}
                  <Card className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-transparent hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                    {/* Icon Section with Gradient Background */}
                    <div className="relative p-8 pb-6">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-bl-[100px] transition-all duration-500 group-hover:scale-110"></div>

                      <div className="relative flex justify-center mb-6">
                        <div className={`w-20 h-20 ${benefit.gradient} rounded-2xl flex items-center justify-center shadow-xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                          <benefit.icon className="w-10 h-10 text-white" />
                        </div>
                      </div>

                      {/* Index Number */}
                      <div className="absolute top-4 left-4">
                        <span className="text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-all duration-500">
                          0{index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="px-8 pb-8 text-center">
                      <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {benefit.description}
                      </p>

                      {/* Decorative Line */}
                      <div className="mt-6 flex justify-center">
                        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </Card>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="hero" size="lg" className="text-xl px-12 py-8 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                {t(howItWorksTranslations.cta.button)}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;
