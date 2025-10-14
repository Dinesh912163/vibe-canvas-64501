import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Eye, ShieldCheck, Sprout } from "lucide-react";
import villageLife from "@/assets/village-life.jpg";
import farmersWorking from "@/assets/farmers-working.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { aboutTranslations } from "@/translations/about";
import { LanguageToggle } from "@/components/LanguageToggle";

export const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Users,
      title: t(aboutTranslations.values.communityFirst.title),
      description: t(aboutTranslations.values.communityFirst.description)
    },
    {
      icon: Eye,
      title: t(aboutTranslations.values.transparency.title),
      description: t(aboutTranslations.values.transparency.description)
    },
    {
      icon: ShieldCheck,
      title: t(aboutTranslations.values.quality.title),
      description: t(aboutTranslations.values.quality.description)
    },
    {
      icon: Sprout,
      title: t(aboutTranslations.values.sustainability.title),
      description: t(aboutTranslations.values.sustainability.description)
    }
  ];

  const stats = [
    { number: "1000+", label: t(aboutTranslations.impact.activeFarmers) },
    { number: "50+", label: t(aboutTranslations.impact.villagesServed) },
    { number: "₹2Cr+", label: t(aboutTranslations.impact.farmerPayouts) },
    { number: "40%", label: t(aboutTranslations.impact.emissionReduction) }
  ];

  return (
    <div className="min-h-screen relative">
      <LanguageToggle />
      <div className="relative z-10">
        <section className="pt-20 pb-20 bg-gradient-to-b from-primary/10 to-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground">
              {t(aboutTranslations.title)}
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-muted-foreground leading-relaxed">
              {t(aboutTranslations.subtitle)}
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-l-4 border-primary">
                <h3 className="text-2xl font-bold text-foreground mb-6">{t(aboutTranslations.quickGuide.title)}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">{t(aboutTranslations.quickGuide.mission)}</strong> {t(aboutTranslations.quickGuide.missionText)}</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">{t(aboutTranslations.quickGuide.impact)}</strong> {t(aboutTranslations.quickGuide.impactText)}</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">{t(aboutTranslations.quickGuide.technology)}</strong> {t(aboutTranslations.quickGuide.technologyText)}</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">{t(aboutTranslations.quickGuide.promise)}</strong> {t(aboutTranslations.quickGuide.promiseText)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-24">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={villageLife}
                    alt="Rural community life"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  {t(aboutTranslations.mission.title)}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t(aboutTranslations.mission.text1)}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t(aboutTranslations.mission.text2)}
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto lg:flex-row-reverse">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  {t(aboutTranslations.vision.title)}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t(aboutTranslations.vision.text1)}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t(aboutTranslations.vision.text2)}
                </p>
              </div>
              <div className="relative order-first lg:order-last">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={farmersWorking}
                    alt="Farmers at work"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t(aboutTranslations.values.title)}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-primary/20 bg-gradient-to-br from-white to-primary/5">
                  <div className={`w-20 h-20 ${
                    index === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                    index === 1 ? 'bg-gradient-to-br from-green-500 to-green-600' :
                    index === 2 ? 'bg-gradient-to-br from-purple-500 to-purple-600' : 'bg-gradient-to-br from-orange-500 to-orange-600'
                  } rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-primary/90 to-secondary/90 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                {t(aboutTranslations.impact.title)}
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-10 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <Card key={index} className="p-8 text-center shadow-2xl bg-white/95 backdrop-blur-sm">
                  <div className="text-5xl font-bold text-primary mb-3">
                    {stat.number}
                  </div>
                  <div className="text-base font-semibold text-foreground mb-2">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-primary/90 to-secondary/90 backdrop-blur-sm">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white drop-shadow-lg">
              {t(aboutTranslations.cta.title)}
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto drop-shadow-md">
              {t(aboutTranslations.cta.subtitle)}
            </p>
            <Button variant="hero" size="lg" className="text-xl px-12 py-8 shadow-2xl hover:shadow-3xl">
              {t(aboutTranslations.cta.button)}
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
