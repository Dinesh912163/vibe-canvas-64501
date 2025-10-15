import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Leaf, Cog, Users, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import WorkingFlow from "@/components/WorkingFlow";
import { useLanguage } from "@/contexts/LanguageContext";
import { homeTranslations } from "@/translations/home";
import { LanguageToggle } from "@/components/LanguageToggle";

export const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative">
      <LanguageToggle />
      <div className="relative z-10">
        <section className="min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-b from-primary/10 to-white">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-5xl mx-auto">
              <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
                  {t(homeTranslations.hero.title)}
                </h1>
                <p className="text-2xl md:text-3xl text-foreground mb-6 font-medium">
                  {t(homeTranslations.hero.subtitle)}
                </p>
                <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                  {t(homeTranslations.hero.description)}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button variant="hero" size="lg" className="text-xl px-10 py-8 shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out">
                    {t(homeTranslations.hero.joinFarmer)}
                  </Button>
                  <Button variant="hero" size="lg" className="text-xl px-10 py-8 shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out">
                    {t(homeTranslations.hero.requestPickup)}
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
                {t(homeTranslations.empoweringRural.title)}
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {t(homeTranslations.empoweringRural.description)}
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
                  <h3 className="text-xl font-bold text-foreground mb-3">{t(homeTranslations.cards.forFarmers.title)}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                    {t(homeTranslations.cards.forFarmers.description)}
                  </p>
                  <Link to="/benefits">
                    <Button className="bg-green-600 hover:bg-green-700 text-white h-10 px-4 text-sm font-medium w-full rounded-lg transition-all duration-300 group/btn">
                      {t(homeTranslations.cards.forFarmers.button)} <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
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
                  <h3 className="text-xl font-bold text-foreground mb-3">{t(homeTranslations.cards.howItWorks.title)}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                    {t(homeTranslations.cards.howItWorks.description)}
                  </p>
                  <Link to="/how-it-works">
                    <Button className="bg-green-600 hover:bg-green-700 text-white h-10 px-4 text-sm font-medium w-full rounded-lg transition-all duration-300 group/btn">
                      {t(homeTranslations.cards.howItWorks.button)} <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
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
                  <h3 className="text-xl font-bold text-foreground mb-3">{t(homeTranslations.cards.platformUsers.title)}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                    {t(homeTranslations.cards.platformUsers.description)}
                  </p>
                  <Link to="/user-types">
                    <Button className="bg-green-600 hover:bg-green-700 text-white h-10 px-4 text-sm font-medium w-full rounded-lg transition-all duration-300 group/btn">
                      {t(homeTranslations.cards.platformUsers.button)} <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
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
                  <h3 className="text-xl font-bold text-foreground mb-3">{t(homeTranslations.cards.getStarted.title)}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                    {t(homeTranslations.cards.getStarted.description)}
                  </p>
                  <Link to="/contact">
                    <Button className="bg-green-600 hover:bg-green-700 text-white h-10 px-4 text-sm font-medium w-full rounded-lg transition-all duration-300 group/btn">
                      {t(homeTranslations.cards.getStarted.button)} <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
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
