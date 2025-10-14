import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageSquare, UserPlus, Headphones, Briefcase, HelpCircle } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { contactTranslations } from "@/translations/contact";
import { LanguageToggle } from "@/components/LanguageToggle";

export const Contact = () => {
  const { t } = useLanguage();
  const [activeSupport, setActiveSupport] = useState(0);
  const contactMethods = [
    {
      icon: Phone,
      title: t(contactTranslations.contactMethods.call.title),
      details: t(contactTranslations.contactMethods.call.details),
      description: t(contactTranslations.contactMethods.call.description),
      gradient: "bg-gradient-to-br from-green-700 to-green-900"
    },
    {
      icon: MessageSquare,
      title: t(contactTranslations.contactMethods.whatsapp.title),
      details: t(contactTranslations.contactMethods.whatsapp.details),
      description: t(contactTranslations.contactMethods.whatsapp.description),
      gradient: "bg-gradient-to-br from-green-400 to-green-600"
    },
    {
      icon: Mail,
      title: t(contactTranslations.contactMethods.email.title),
      details: t(contactTranslations.contactMethods.email.details),
      description: t(contactTranslations.contactMethods.email.description),
      gradient: "bg-gradient-to-br from-yellow-300 to-orange-400"
    },
    {
      icon: MapPin,
      title: t(contactTranslations.contactMethods.visit.title),
      details: t(contactTranslations.contactMethods.visit.details),
      description: t(contactTranslations.contactMethods.visit.description),
      gradient: "bg-gradient-to-br from-blue-600 to-green-700"
    }
  ];

  const supportTypes = [
    {
      icon: UserPlus,
      title: t(contactTranslations.supportTypes.registration.title),
      description: t(contactTranslations.supportTypes.registration.description),
      action: t(contactTranslations.supportTypes.registration.action),
      gradient: "bg-gradient-hero"
    },
    {
      icon: Headphones,
      title: t(contactTranslations.supportTypes.technical.title),
      description: t(contactTranslations.supportTypes.technical.description),
      action: t(contactTranslations.supportTypes.technical.action),
      gradient: "bg-gradient-earth"
    },
    {
      icon: Briefcase,
      title: t(contactTranslations.supportTypes.business.title),
      description: t(contactTranslations.supportTypes.business.description),
      action: t(contactTranslations.supportTypes.business.action),
      gradient: "bg-gradient-warm"
    },
    {
      icon: HelpCircle,
      title: t(contactTranslations.supportTypes.general.title),
      description: t(contactTranslations.supportTypes.general.description),
      action: t(contactTranslations.supportTypes.general.action),
      gradient: "bg-primary"
    }
  ];

  const faqs = [
    {
      question: t(contactTranslations.faqs.q1.question),
      answer: t(contactTranslations.faqs.q1.answer)
    },
    {
      question: t(contactTranslations.faqs.q2.question),
      answer: t(contactTranslations.faqs.q2.answer)
    },
    {
      question: t(contactTranslations.faqs.q3.question),
      answer: t(contactTranslations.faqs.q3.answer)
    },
    {
      question: t(contactTranslations.faqs.q4.question),
      answer: t(contactTranslations.faqs.q4.answer)
    },
    {
      question: t(contactTranslations.faqs.q5.question),
      answer: t(contactTranslations.faqs.q5.answer)
    }
  ];

  const officeHours = [
    { day: t(contactTranslations.officeHours.monday), time: t(contactTranslations.officeHours.mondayTime) },
    { day: t(contactTranslations.officeHours.saturday), time: t(contactTranslations.officeHours.saturdayTime) },
    { day: t(contactTranslations.officeHours.sunday), time: t(contactTranslations.officeHours.sundayTime) }
  ];

  return (
    <div className="min-h-screen relative">
      <LanguageToggle />
      <div className="relative z-10">
        <section className="pt-20 pb-20 bg-gradient-to-b from-gray-100 to-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              {t(contactTranslations.title)}
            </h1>
            <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              {t(contactTranslations.subtitle)}
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-l-4 border-primary">
                <h3 className="text-2xl font-bold text-foreground mb-6">{t(contactTranslations.quickGuide.title)}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">{t(contactTranslations.quickGuide.phoneSupport)}</strong> {t(contactTranslations.quickGuide.phoneSupportText)}</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">{t(contactTranslations.quickGuide.whatsapp)}</strong> {t(contactTranslations.quickGuide.whatsappText)}</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">{t(contactTranslations.quickGuide.email)}</strong> {t(contactTranslations.quickGuide.emailText)}</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">{t(contactTranslations.quickGuide.officeHours)}</strong> {t(contactTranslations.quickGuide.officeHoursText)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t(contactTranslations.getInTouch.title)}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactMethods.map((method, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/95 backdrop-blur-sm">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className={`w-20 h-20 ${method.gradient} rounded-2xl flex items-center justify-center shadow-xl`}>
                      <method.icon className="w-10 h-10 text-background" />
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {method.title}
                    </h3>
                    <p className="text-lg font-semibold text-primary mb-3">
                      {method.details}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
              {/* Send us a Message Form */}
              <Card className="p-6 bg-white shadow-md rounded-xl border border-gray-200 h-full">
                <h3 className="text-xl font-bold text-gray-800 mb-5">
                  {t(contactTranslations.form.title)}
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-gray-600 mb-1 block">{t(contactTranslations.form.firstName)} *</Label>
                      <Input
                        id="firstName"
                        placeholder={t(contactTranslations.form.firstName)}
                        className="h-10 bg-gray-50 border-gray-300 rounded-md text-sm focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-gray-600 mb-1 block">{t(contactTranslations.form.lastName)} *</Label>
                      <Input
                        id="lastName"
                        placeholder={t(contactTranslations.form.lastName)}
                        className="h-10 bg-gray-50 border-gray-300 rounded-md text-sm focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-600 mb-1 block">{t(contactTranslations.form.phone)} *</Label>
                    <Input
                      id="phone"
                      placeholder="+91 XXXXX XXXXX"
                      className="h-10 bg-gray-50 border-gray-300 rounded-md text-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-600 mb-1 block">{t(contactTranslations.form.email)}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="h-10 bg-gray-50 border-gray-300 rounded-md text-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="location" className="text-sm font-medium text-gray-600 mb-1 block">{t(contactTranslations.form.location)} *</Label>
                    <Input
                      id="location"
                      placeholder={t(contactTranslations.form.location)}
                      className="h-10 bg-gray-50 border-gray-300 rounded-md text-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="cattle" className="text-sm font-medium text-gray-600 mb-1 block">{t(contactTranslations.form.cattle)}</Label>
                    <Input
                      id="cattle"
                      placeholder={t(contactTranslations.form.cattle)}
                      className="h-10 bg-gray-50 border-gray-300 rounded-md text-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-600 mb-1 block">{t(contactTranslations.form.message)} *</Label>
                    <Textarea
                      id="message"
                      placeholder={t(contactTranslations.form.message)}
                      className="h-24 bg-gray-50 border-gray-300 rounded-md text-sm focus:border-green-500 focus:ring-green-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-11 bg-green-700 hover:bg-green-800 text-white font-medium rounded-md transition-colors text-sm shadow-sm"
                  >
                    {t(contactTranslations.form.submit)}
                  </Button>
                </form>
              </Card>

              {/* Right Column */}
              <div className="h-full flex flex-col">
                {/* Office Hours */}
                <Card className="p-6 bg-white shadow-md rounded-xl border border-gray-200 flex-1 mb-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-orange-400 rounded-lg flex items-center justify-center shadow-sm">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {t(contactTranslations.officeHours.title)}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-1">
                        <span className="text-gray-700 font-medium text-sm">{schedule.day}</span>
                        <span className="text-gray-600 text-sm">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Visit Our Office */}
                <Card className="p-6 bg-white shadow-md rounded-xl border border-gray-200 flex-1">
                  <div className="flex flex-col items-center text-center h-full justify-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-orange-400 rounded-xl flex items-center justify-center shadow-sm mb-4">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{t(contactTranslations.visitOffice.title)}</h4>
                    <p className="text-gray-600 text-sm mb-3">{t(contactTranslations.visitOffice.address)}</p>
                    <p className="text-green-600 text-xs font-medium cursor-pointer hover:text-green-700">
                      {t(contactTranslations.visitOffice.link)}
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t(contactTranslations.howCanWeHelp.title)}
              </h2>
            </div>

            <div className="relative max-w-7xl mx-auto h-[550px] flex items-center justify-center">
              {supportTypes.map((support, index) => {
                const isActive = activeSupport === index;

                // Calculate positions for inactive cards (spread them in the back)
                let translateX = 0;
                let translateY = 0;
                let scale = 0.75;
                let zIndex = 10;
                let opacity = 0.25;

                if (isActive) {
                  // Active card in front center
                  translateX = 0;
                  translateY = 0;
                  scale = 1;
                  zIndex = 50;
                  opacity = 1;
                } else {
                  // Spread inactive cards in the back
                  const inactiveIndex = index < activeSupport ? index : index - 1;
                  const positions = [
                    { x: -350, y: -30 },  // Left
                    { x: 0, y: -50 },     // Center back
                    { x: 350, y: -30 }    // Right
                  ];

                  const pos = positions[inactiveIndex] || { x: 0, y: -50 };
                  translateX = pos.x;
                  translateY = pos.y;
                }

                return (
                  <Card
                    key={index}
                    onClick={() => setActiveSupport(index)}
                    className={`
                      absolute overflow-hidden backdrop-blur-sm cursor-pointer
                      transition-all duration-700 ease-in-out
                      w-full max-w-md
                      ${isActive
                        ? 'shadow-2xl hover:shadow-3xl bg-white'
                        : 'shadow-md hover:shadow-xl bg-white/80'
                      }
                    `}
                    style={{
                      transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                      zIndex: zIndex,
                      opacity: opacity,
                    }}
                  >
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <div className={`w-20 h-20 ${support.gradient} rounded-2xl flex items-center justify-center shadow-xl transition-all duration-700`}>
                        <support.icon className={`${isActive ? 'w-10 h-10' : 'w-8 h-8'} text-background transition-all duration-700`} />
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className={`${isActive ? 'text-2xl' : 'text-xl'} font-bold text-foreground mb-4 transition-all duration-700`}>
                        {support.title}
                      </h4>
                      <p className={`text-muted-foreground mb-6 leading-relaxed transition-all duration-700 ${isActive ? 'text-base' : 'text-sm'}`}>
                        {support.description}
                      </p>
                      <Button
                        variant="outline"
                        className={`w-full h-12 text-base font-semibold transition-all duration-700 ${
                          isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                        }`}
                      >
                        {support.action}
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Navigation indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {supportTypes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSupport(index)}
                  className={`transition-all duration-300 rounded-full ${
                    activeSupport === index
                      ? 'w-12 h-3 bg-primary'
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Show card ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t(contactTranslations.faqs.title)}
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur-sm">
                  <h4 className="text-xl font-bold text-foreground mb-4">
                    {faq.question}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-primary/90 to-secondary/90 backdrop-blur-sm">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white drop-shadow-lg">
              {t(contactTranslations.cta.title)}
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto drop-shadow-md">
              {t(contactTranslations.cta.subtitle)}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all">
                <Phone className="w-6 h-6 mr-3" />
                {t(contactTranslations.cta.callButton)}
              </Button>
              <Button variant="hero" size="lg" className="text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all">
                <MessageSquare className="w-6 h-6 mr-3" />
                {t(contactTranslations.cta.whatsappButton)}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
