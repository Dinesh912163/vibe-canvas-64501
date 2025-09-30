import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Users, Headphones, MessageSquare, FileText } from "lucide-react";
import villageLife from "@/assets/village-life.jpg";

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
      icon: Users,
      title: "New Farmer Registration",
      description: "Get started with Saubhagya and begin earning",
      action: "Register Now"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Help with app, weighing, or payment issues",
      action: "Get Help"
    },
    {
      icon: FileText,
      title: "Business Inquiries",
      description: "Partnership and business development",
      action: "Connect"
    },
    {
      icon: MessageSquare,
      title: "General Questions",
      description: "Any other questions about our services",
      action: "Ask Us"
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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-medium">
            संपर्क करें
          </p>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Ready to start earning from your cattle dung? Have questions about our process? 
            Our dedicated support team is here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              संपर्क में रहें
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-warm transition-smooth group">
                <div className={`w-16 h-16 ${method.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth`}>
                  <method.icon className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 font-medium">
                  {method.subtitle}
                </p>
                <p className="text-lg font-semibold text-primary mb-3">
                  {method.details}
                </p>
                <p className="text-sm text-muted-foreground">
                  {method.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" placeholder="+91 XXXXX XXXXX" />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <Label htmlFor="location">Village/Location *</Label>
                  <Input id="location" placeholder="Enter your village or city" />
                </div>
                
                <div>
                  <Label htmlFor="cattle">Number of Cattle</Label>
                  <Input id="cattle" placeholder="How many cattle do you have?" />
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your requirements or questions..."
                    className="h-32"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Office Hours */}
              <Card className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-muted/30 last:border-0">
                      <span className="text-foreground font-medium">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Office Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-warm">
                <img 
                  src={villageLife} 
                  alt="Saubhagya office and rural operations"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-background">
                  <h4 className="text-xl font-bold mb-2">Visit Our Office</h4>
                  <p className="opacity-90">Sector 14, Gurgaon, Haryana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              How Can We Help?
            </h2>
            <p className="text-xl text-muted-foreground">
              हम कैसे मदद कर सकते हैं?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportTypes.map((support, index) => (
              <Card key={index} className="p-6 hover:shadow-warm transition-smooth group">
                <div className={`w-12 h-12 mb-4 rounded-lg ${
                  index % 4 === 0 ? 'bg-gradient-hero' : 
                  index % 4 === 1 ? 'bg-gradient-earth' : 
                  index % 4 === 2 ? 'bg-gradient-warm' : 'bg-primary'
                } flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                  <support.icon className="w-6 h-6 text-background" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3">
                  {support.title}
                </h4>
                <p className="text-muted-foreground mb-4">
                  {support.description}
                </p>
                <Button variant="outline" className="w-full">
                  {support.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              अक्सर पूछे जाने वाले प्रश्न
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-warm transition-smooth">
                <h4 className="text-lg font-bold text-foreground mb-3">
                  {faq.question}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-hero text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Immediate Help?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            For urgent pickup requests or payment issues, contact our 24/7 support team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Phone className="w-5 h-5 mr-2" />
              Call Emergency Support
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-background/10 backdrop-blur-sm border-background/30 text-background hover:bg-background hover:text-foreground">
              <MessageSquare className="w-5 h-5 mr-2" />
              WhatsApp Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;