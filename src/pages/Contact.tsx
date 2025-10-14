import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageSquare, UserPlus, Headphones, Briefcase, HelpCircle, Languages } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [language, setLanguage] = useState<'english' | 'hindi'>('english');
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      subtitle: "हमें कॉल करें",
      details: "+91 98765 43210",
      description: "Toll-free multilingual support in Hindi, English, Marathi, Gujarati. Avg 2-min wait time. Available for registration, payments, technical help",
      gradient: "bg-gradient-hero"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Support",
      subtitle: "व्हाट्सऐप",
      details: "+91 98765 43211",
      description: "24/7 messaging support. Send photos/videos. Track pickups, payment status, and get instant FAQ answers. Join farmer community group",
      gradient: "bg-gradient-earth"
    },
    {
      icon: Mail,
      title: "Email Support",
      subtitle: "ईमेल सहायता",
      details: "support@saubhagya.com",
      description: "Detailed technical queries, documentation, complaints. 24-hour guaranteed response. Supports attachments up to 10MB",
      gradient: "bg-gradient-warm"
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      subtitle: "कार्यालय आएं",
      details: "Sector 14, Gurgaon",
      description: "Schedule in-person meetings. Farmer orientation sessions every Wednesday. Bring Aadhaar, bank passbook for instant registration",
      gradient: "bg-primary"
    }
  ];

  const supportTypes = [
    {
      icon: UserPlus,
      title: "New Farmer Registration",
      description: "Get started with Saubhagya and begin earning",
      action: "Register Now",
      gradient: "bg-gradient-hero"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Help with app, weighing, or payment issues",
      action: "Get Help",
      gradient: "bg-gradient-earth"
    },
    {
      icon: Briefcase,
      title: "Business Inquiries",
      description: "Partnership and business development",
      action: "Connect",
      gradient: "bg-gradient-warm"
    },
    {
      icon: HelpCircle,
      title: "General Questions",
      description: "Any other questions about our services",
      action: "Ask Us",
      gradient: "bg-primary"
    }
  ];

  const faqs = [
    {
      question: "How quickly will I receive payment?",
      answer: "Payments are automatically processed within 24 hours of material verification at the biogas plant. Money is transferred directly to your registered bank account or UPI mobile wallet. You'll receive SMS and app notifications confirming the payment with transaction ID, amount breakdown, and digital receipt. No intermediaries or delays - guaranteed."
    },
    {
      question: "What is the minimum quantity for pickup?",
      answer: "We collect a minimum of 50kg of cattle dung per pickup to ensure transport efficiency. If you have smaller quantities, you can store them properly (covered, dry location) and accumulate until you reach the minimum. For farmers with 15-20 cattle, this typically takes 1-2 days. We can schedule pickups daily, every 2 days, or weekly based on your convenience and production volume."
    },
    {
      question: "How do you ensure fair and transparent weighing?",
      answer: "We use government-certified IoT-enabled digital weighing scales with tamper-proof load cells. Every measurement is automatically recorded with exact weight, timestamp, GPS coordinates, and photos. You receive instant SMS confirmation showing the weight. The scales are regularly calibrated and audited. No manual interference is possible - complete transparency through technology."
    },
    {
      question: "What are the quality requirements for material?",
      answer: "We accept fresh cattle dung with minimal contamination (stones, plastic, soil). Ideal moisture content is 60-80%. Store in covered area away from rain. Avoid mixing with other materials. Our field team provides free training on proper collection, storage methods, and quality improvement techniques. Higher quality materials earn bonus payments of ₹0.50-1.00 per kg extra."
    },
    {
      question: "Is there any registration fee or hidden charges?",
      answer: "Absolutely no registration fees, membership charges, or hidden costs. Joining Saubhagya is 100% free for farmers. No equipment purchase required - we provide IoT scales and RFID tags at no cost. We only earn when you earn. All pricing is transparent and communicated upfront with no deductions except taxes as per government regulations."
    },
    {
      question: "What documents do I need to register?",
      answer: "You need: 1) Aadhaar card (for identity verification), 2) Bank account passbook or cancelled cheque (for direct payments), 3) Mobile number (for SMS and app access), 4) Cattle ownership proof (optional but helpful). Our field executives can help you with the entire registration process, which typically takes 15-20 minutes and can be completed at your farm."
    },
    {
      question: "Can I track my pickups and payments?",
      answer: "Yes! You can track everything through our mobile app or via SMS. Real-time GPS tracking shows vehicle location during pickup. You receive notifications for: pickup scheduled, vehicle en route, material weighed, quality assessed, payment processed. Complete transaction history with dates, weights, amounts, and receipts available anytime in the app or via WhatsApp."
    },
    {
      question: "What if I have a dispute about weight or payment?",
      answer: "Every transaction has complete digital audit trail: timestamped photos, IoT weight readings, GPS location, quality parameters, and your acknowledgment. If you have any concerns, contact our support immediately. We typically resolve disputes within 24 hours by reviewing the digital evidence. Our blockchain-backed logging ensures transaction records cannot be altered, protecting your interests."
    }
  ];

  const officeHours = language === 'english' ? [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 2:00 PM" },
    { day: "Sunday", time: "Emergency Support Only" }
  ] : [
    { day: "सोमवार - शुक्रवार", time: "सुबह 9:00 - शाम 6:00" },
    { day: "शनिवार", time: "सुबह 9:00 - दोपहर 2:00" },
    { day: "रविवार", time: "केवल आपातकालीन सहायता" }
  ];

  const content = language === 'english' ? {
    title: "Contact Us",
    subtitle: "संपर्क करें",
    description: "Ready to start earning from your cattle dung and transform waste into wealth? Have questions about our process, pricing, or technology? Our dedicated multilingual support team is available to assist you every step of the way - from initial registration to your first payment and beyond.",
    quickContactTitle: "Quick Contact Guide",
    getInTouch: "Get In Touch",
    getInTouchSub: "संपर्क में रहें",
    sendMessage: "Send us a Message",
    firstName: "First Name *",
    lastName: "Last Name *",
    phone: "Phone Number *",
    email: "Email Address",
    location: "Village/Location *",
    cattle: "Number of Cattle",
    message: "Message *",
    sendBtn: "Send Message",
    officeHours: "Office Hours",
    visitOffice: "Visit Our Office",
    visitOfficeLocation: "Sector 14, Gurgaon, Haryana",
    clickDetails: "Click to view contact details →",
    clickMore: "Click for more details →",
    howHelp: "How Can We Help?",
    howHelpSub: "हम कैसे मदद कर सकते हैं?",
    faqTitle: "Frequently Asked Questions",
    faqSub: "अक्सर पूछे जाने वाले प्रश्न",
    needHelp: "Need Immediate Help?",
    needHelpDesc: "For urgent pickup requests or payment issues, contact our 24/7 support team",
    callEmergency: "Call Emergency Support",
    whatsappSupport: "WhatsApp Support"
  } : {
    title: "संपर्क करें",
    subtitle: "Contact Us",
    description: "अपने पशु गोबर से कमाई शुरू करने और कचरे को धन में बदलने के लिए तैयार हैं? हमारी प्रक्रिया, मूल्य निर्धारण, या तकनीक के बारे में प्रश्न हैं? हमारी समर्पित बहुभाषी सहायता टीम प्रारंभिक पंजीकरण से लेकर आपके पहले भुगतान तक और उसके बाद भी हर कदम पर आपकी सहायता के लिए उपलब्ध है।",
    quickContactTitle: "त्वरित संपर्क गाइड",
    getInTouch: "संपर्क में रहें",
    getInTouchSub: "Get In Touch",
    sendMessage: "हमें संदेश भेजें",
    firstName: "पहला नाम *",
    lastName: "अंतिम नाम *",
    phone: "फ़ोन नंबर *",
    email: "ईमेल पता",
    location: "गांव/स्थान *",
    cattle: "मवेशियों की संख्या",
    message: "संदेश *",
    sendBtn: "संदेश भेजें",
    officeHours: "कार्यालय समय",
    visitOffice: "हमारे कार्यालय आएं",
    visitOfficeLocation: "सेक्टर 14, गुड़गांव, हरियाणा",
    clickDetails: "संपर्क विवरण देखने के लिए क्लिक करें →",
    clickMore: "अधिक जानकारी के लिए क्लिक करें →",
    howHelp: "हम कैसे मदद कर सकते हैं?",
    howHelpSub: "How Can We Help?",
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
    faqSub: "Frequently Asked Questions",
    needHelp: "तुरंत सहायता चाहिए?",
    needHelpDesc: "तत्काल पिकअप अनुरोध या भुगतान समस्याओं के लिए, हमारी 24/7 सहायता टीम से संपर्क करें",
    callEmergency: "आपातकालीन सहायता कॉल करें",
    whatsappSupport: "व्हाट्सऐप सहायता"
  };

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <section className="pt-20 pb-20 bg-gradient-to-b from-primary/10 to-white">
          <div className="container mx-auto px-6">
            <div className="flex justify-end mb-8">
              <div className="flex gap-2 bg-white rounded-lg shadow-md p-1">
                <Button
                  variant={language === 'english' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('english')}
                  className="flex items-center gap-2"
                >
                  <Languages className="w-4 h-4" />
                  English
                </Button>
                <Button
                  variant={language === 'hindi' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('hindi')}
                  className="flex items-center gap-2"
                >
                  <Languages className="w-4 h-4" />
                  हिंदी
                </Button>
              </div>
            </div>

            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
                {content.title}
              </h1>
              <p className="text-2xl md:text-3xl mb-6 font-medium text-foreground">
                {content.subtitle}
              </p>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
                {content.description}
              </p>
            </div>
          </div>
        </section>

        <section id="quick-contact-guide" className="py-16 bg-white scroll-mt-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-l-4 border-primary">
                <h3 className="text-2xl font-bold text-foreground mb-6">{content.quickContactTitle}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div id="phone-support" className="flex gap-3 scroll-mt-20">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Phone Support:</strong> Call +91 98765 43210 for immediate assistance. Available in Hindi, English, Marathi, and Gujarati. Average wait time under 2 minutes. Dedicated helpline for farmer registration, payment queries, and technical support.</p>
                  </div>
                  <div id="whatsapp-support" className="flex gap-3 scroll-mt-20">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">WhatsApp:</strong> Quick support via +91 98765 43211. Send photos, videos, or voice messages. Track pickup status, check payment history, and get instant answers to common questions. Join our farmer community group for tips and updates.</p>
                  </div>
                  <div id="email-support" className="flex gap-3 scroll-mt-20">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Email:</strong> support@saubhagya.com for detailed queries, technical issues, or documentation requests. Guaranteed response within 24 hours. Include farmer ID or phone number for faster resolution. Attachment support for photos and documents.</p>
                  </div>
                  <div id="office-hours-support" className="flex gap-3 scroll-mt-20">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Office Hours:</strong> Mon-Fri 9AM-6PM, Sat 9AM-2PM for regular support. Emergency pickup requests and payment issues handled 24/7. Sunday emergency hotline available for urgent matters. Best calling times: 10AM-12PM and 2PM-4PM.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="get-in-touch" className="py-20 bg-white/95 backdrop-blur-sm scroll-mt-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {content.getInTouch}
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {content.getInTouchSub}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactMethods.map((method, index) => {
                const scrollToIds = ['phone-support', 'whatsapp-support', 'email-support', 'office-hours-support'];

                return (
                  <Card
                    key={index}
                    onClick={() => {
                      const element = document.getElementById(scrollToIds[index]);
                      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/95 backdrop-blur-sm cursor-pointer group"
                  >
                    <div className={`relative h-48 overflow-hidden ${method.gradient} flex items-center justify-center`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10"></div>
                      <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                        <div className="w-28 h-28 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-2xl border border-white/30">
                          <method.icon className="w-14 h-14 text-white drop-shadow-lg" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {method.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 font-medium">
                        {method.subtitle}
                      </p>
                      <p className="text-lg font-semibold text-primary mb-3">
                        {method.details}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                        {method.description}
                      </p>
                      <p className="text-xs text-primary font-semibold mt-2">{content.clickMore}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
              <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-2xl h-full">
                <h3 className="text-3xl font-bold text-foreground mb-8">
                  {content.sendMessage}
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-base font-semibold">{content.firstName}</Label>
                      <Input id="firstName" placeholder={content.firstName.replace(' *', '')} className="mt-2 h-12" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-base font-semibold">{content.lastName}</Label>
                      <Input id="lastName" placeholder={content.lastName.replace(' *', '')} className="mt-2 h-12" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-base font-semibold">{content.phone}</Label>
                    <Input id="phone" placeholder="+91 XXXXX XXXXX" className="mt-2 h-12" />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-base font-semibold">{content.email}</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="mt-2 h-12" />
                  </div>

                  <div>
                    <Label htmlFor="location" className="text-base font-semibold">{content.location}</Label>
                    <Input id="location" placeholder={content.location.replace(' *', '')} className="mt-2 h-12" />
                  </div>

                  <div>
                    <Label htmlFor="cattle" className="text-base font-semibold">{content.cattle}</Label>
                    <Input id="cattle" placeholder={content.cattle} className="mt-2 h-12" />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-base font-semibold">{content.message}</Label>
                    <Textarea
                      id="message"
                      placeholder={content.message.replace(' *', '')}
                      className="h-36 mt-2"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg h-14">
                    {content.sendBtn}
                  </Button>
                </form>
              </Card>

              <div className="flex flex-col gap-6 h-full">
                <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-2xl flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-hero rounded-lg flex items-center justify-center shadow-md">
                      <Clock className="w-7 h-7 text-background" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">
                      {content.officeHours}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-muted/30 last:border-0">
                        <span className="text-foreground font-semibold text-base">{schedule.day}</span>
                        <span className="text-muted-foreground font-medium">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <div
                  onClick={() => {
                    const element = document.getElementById('get-in-touch');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 cursor-pointer hover:shadow-3xl hover:scale-105 transition-all duration-300 flex-1"
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="w-24 h-24 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 transition-transform">
                      <MapPin className="w-12 h-12 text-background" />
                    </div>
                    <h4 className="text-2xl font-bold mb-3 text-foreground text-center">{content.visitOffice}</h4>
                    <p className="text-lg text-muted-foreground text-center">{content.visitOfficeLocation}</p>
                    <p className="text-sm text-primary mt-3 font-semibold">{content.clickDetails}</p>
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
                {content.howHelp}
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {content.howHelpSub}
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto h-[500px] flex items-center justify-center">
              {supportTypes.map((support, index) => {
                const isActive = index === activeCardIndex;
                const position = (index - activeCardIndex + supportTypes.length) % supportTypes.length;

                return (
                  <div
                    key={index}
                    onClick={() => setActiveCardIndex(index)}
                    className={`absolute transition-all duration-500 ease-in-out cursor-pointer ${
                      isActive
                        ? 'z-30 scale-100 opacity-100'
                        : 'opacity-40 hover:opacity-60'
                    }`}
                    style={{
                      transform: isActive
                        ? 'translateX(0) scale(1)'
                        : position === 1
                        ? 'translateX(280px) scale(0.85)'
                        : position === 2
                        ? 'translateX(0px) translateY(-100px) scale(0.75)'
                        : 'translateX(-280px) scale(0.85)',
                      zIndex: isActive ? 30 : position === 1 || position === 3 ? 20 : 10,
                    }}
                  >
                    <Card className={`w-96 overflow-hidden shadow-2xl bg-white/95 backdrop-blur-sm transition-all duration-500 ${
                      isActive ? 'ring-4 ring-primary/50' : ''
                    }`}>
                      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                        <div className={`w-24 h-24 ${support.gradient} rounded-2xl flex items-center justify-center shadow-xl transition-transform ${
                          isActive ? 'scale-110' : 'scale-100'
                        }`}>
                          <support.icon className="w-12 h-12 text-background" />
                        </div>
                      </div>
                      <div className="p-8">
                        <h4 className="text-2xl font-bold text-foreground mb-4">
                          {support.title}
                        </h4>
                        <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                          {support.description}
                        </p>
                        {isActive && (
                          <Button className="w-full h-12 text-base font-semibold">
                            {support.action}
                          </Button>
                        )}
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center gap-3 mt-12">
              {supportTypes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCardIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeCardIndex
                      ? 'bg-primary w-8'
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {content.faqTitle}
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {content.faqSub}
              </p>
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
              {content.needHelp}
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto drop-shadow-md">
              {content.needHelpDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all">
                <Phone className="w-6 h-6 mr-3" />
                {content.callEmergency}
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-7 bg-white text-primary hover:bg-white/90 border-2 border-white shadow-2xl">
                <MessageSquare className="w-6 h-6 mr-3" />
                {content.whatsappSupport}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
