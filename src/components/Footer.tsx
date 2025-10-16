import { Button } from "@/components/ui/button";
import { Leaf, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative z-20 bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-secondary-foreground" />
              </div>
              <span className="text-2xl font-bold">Saubhagya</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Transforming rural economy through sustainable cattle dung to biogas conversion. 
              Fair payments, transparent processes, and environmental benefits for farming communities.
            </p>
            <div className="flex gap-4">
              <Button variant="secondary" size="lg" className="transition-all duration-300 ease-in-out">
                Join as Farmer
              </Button>
              <Button variant="secondary" size="lg" className="transition-all duration-300 ease-in-out">
                Request Pickup
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a href="#home" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Home
              </a>
              <a href="#how-it-works" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                How It Works
              </a>
              <a href="#benefits" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Farmer Benefits
              </a>
              <a href="#about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                About Us
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80">join@saubhagya.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80">Agar Malwa, Madhya Pradesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Saubhagya. All rights reserved. | गौशाला से रोज़ी
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};