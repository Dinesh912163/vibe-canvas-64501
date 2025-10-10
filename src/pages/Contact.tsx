import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageSquare, UserPlus, Headphones, Briefcase, HelpCircle } from "lucide-react";

export const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      subtitle: "हमें कॉल करें",
      details: "+91 98765 43210",
      description: "Speak directly with our farmer support team",
      gradient: "bg-gradient-hero"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      subtitle: "व्हाट्सऐप",
      details: "+91 98765 43211",
      description: "Quick support and updates via WhatsApp",
      gradient: "bg-gradient-earth"
    },
    {
      icon: Mail,
      title: "Email Support",
      subtitle: "ईमेल सहायता",
      details: "support@saubhagya.com",
      description: "Detailed queries and documentation",
      gradient: "bg-gradient-warm"
    },
    {
      icon: MapPin,
      title: "Visit Office",
      subtitle: "कार्यालय आएं",
      details: "Sector 14, Gurgaon",
      description: "Meet our team in person",
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
      answer: "Payments are processed within 24 hours of material verification and directly transferred to your registered bank account."
    },
    {
      question: "What is the minimum quantity for pickup?",
      answer: "We collect minimum 50kg of cattle dung. For smaller quantities, you can accumulate and request pickup when ready."
    },
    {
      question: "How do you ensure fair weighing?",
      answer: "We use IoT-enabled digital weighing scales with real-time data recording. You receive SMS confirmation of weights immediately."
    },
    {
      question: "What are the quality requirements?",
      answer: "Fresh cattle dung with minimal contamination. Our team will guide you on proper storage and preparation methods."
    },
    {
      question: "Is there any registration fee?",
      answer: "No registration fees. Joining Saubhagya is completely free for farmers. We only earn when you earn."
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 2:00 PM" },
    { day: "Sunday", time: "Emergency Support Only" }
  ];

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <section className="pt-20 pb-20 bg-gradient-to-b from-primary/10 to-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Contact Us
            </h1>
            <p className="text-2xl md:text-3xl mb-6 font-medium text-foreground">
              संपर्क करें
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              Ready to start earning from your cattle dung? Have questions about our process? 
              Our dedicated support team is here to help you every step of the way.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-l-4 border-primary">
                <h3 className="text-2xl font-bold text-foreground mb-6">Quick Contact Guide</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Phone Support:</strong> Call +91 98765 43210 for immediate assistance and farmer support</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">WhatsApp:</strong> Quick updates and support via +91 98765 43211</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Email:</strong> Detailed queries at support@saubhagya.com with 24-hour response time</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Office Hours:</strong> Mon-Fri 9AM-6PM, Sat 9AM-2PM, Sunday emergency support only</p>
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
                Get In Touch
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                संपर्क में रहें
              </p>
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
                    <p className="text-sm text-muted-foreground mb-3 font-medium">
                      {method.subtitle}
                    </p>
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

        <section className="py-20 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-2xl">
                <h3 className="text-3xl font-bold text-foreground mb-8">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-base font-semibold">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" className="mt-2 h-12" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-base font-semibold">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" className="mt-2 h-12" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-base font-semibold">Phone Number *</Label>
                    <Input id="phone" placeholder="+91 XXXXX XXXXX" className="mt-2 h-12" />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-base font-semibold">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="mt-2 h-12" />
                  </div>
                  
                  <div>
                    <Label htmlFor="location" className="text-base font-semibold">Village/Location *</Label>
                    <Input id="location" placeholder="Enter your village or city" className="mt-2 h-12" />
                  </div>
                  
                  <div>
                    <Label htmlFor="cattle" className="text-base font-semibold">Number of Cattle</Label>
                    <Input id="cattle" placeholder="How many cattle do you have?" className="mt-2 h-12" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-base font-semibold">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your requirements or questions..."
                      className="h-36 mt-2"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full text-lg h-14">
                    Send Message
                  </Button>
                </form>
              </Card>

              <div className="space-y-8">
                <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-hero rounded-lg flex items-center justify-center shadow-md">
                      <Clock className="w-7 h-7 text-background" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">
                      Office Hours
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

                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
                  <div className="flex flex-col items-center justify-center h-72">
                    <div className="w-24 h-24 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-xl mb-6">
                      <MapPin className="w-12 h-12 text-background" />
                    </div>
                    <h4 className="text-2xl font-bold mb-3 text-foreground text-center">Visit Our Office</h4>
                    <p className="text-lg text-muted-foreground text-center">Sector 14, Gurgaon, Haryana</p>
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
                How Can We Help?
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                हम कैसे मदद कर सकते हैं?
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportTypes.map((support, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/95 backdrop-blur-sm">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className={`w-20 h-20 ${support.gradient} rounded-2xl flex items-center justify-center shadow-xl`}>
                      <support.icon className="w-10 h-10 text-background" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-foreground mb-4">
                      {support.title}
                    </h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {support.description}
                    </p>
                    <Button variant="outline" className="w-full h-12 text-base font-semibold">
                      {support.action}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                अक्सर पूछे जाने वाले प्रश्न
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
              Need Immediate Help?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto drop-shadow-md">
              For urgent pickup requests or payment issues, contact our 24/7 support team
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all">
                <Phone className="w-6 h-6 mr-3" />
                Call Emergency Support
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-7 bg-white text-primary hover:bg-white/90 border-2 border-white shadow-2xl">
                <MessageSquare className="w-6 h-6 mr-3" />
                WhatsApp Support
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
