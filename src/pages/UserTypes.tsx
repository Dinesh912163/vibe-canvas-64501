import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  MonitorCheck, 
  Droplet, 
  TrendingUp, 
  Shield, 
  Truck,
  CheckCircle2
} from "lucide-react";
import fieldWorkerImage from "/attached_assets/stock_images/indian_farmer_workin_d575e314.jpg";
import biogasOperatorImage from "/attached_assets/stock_images/indian_biogas_plant__50076640.jpg";
import purificationImage from "/attached_assets/stock_images/indian_industrial_wo_eeabce67.jpg";
import salesImage from "/attached_assets/stock_images/indian_business_prof_67ccf01d.jpg";
import adminImage from "/attached_assets/stock_images/indian_admin_working_266b0a43.jpg";
import transportImage from "/attached_assets/stock_images/indian_truck_driver__9dc29f99.jpg";

export const UserTypes = () => {
  const userTypes = [
    {
      title: "Field Executive",
      subtitle: "मोबाइल फील्ड ऐप",
      icon: Smartphone,
      image: fieldWorkerImage,
      gradient: "bg-gradient-hero",
      description: "Mobile app for field operations, farmer onboarding, and daily collection management in rural areas",
      features: [
        "Farmer registration & KYC capture",
        "RFID / Gau-Aadhaar scanning",
        "Voice logging in Indic languages",
        "IoT scale sync with LoRa connectivity",
        "Offline caching & sync",
        "Payment initiation & tracking"
      ]
    },
    {
      title: "Cluster Manager",
      subtitle: "संचालक पोर्टल",
      icon: MonitorCheck,
      image: biogasOperatorImage,
      gradient: "bg-gradient-earth",
      description: "Supervise clusters, monitor biogas digesters, and manage operations in real-time",
      features: [
        "Real-time IoT monitoring (CH₄%, volume, temp)",
        "Alerts for sensor failures & emergencies",
        "Transaction form entry & confirmation",
        "Payment recording with audit trail",
        "Dispute resolution tools",
        "Offline support with sync capability"
      ]
    },
    {
      title: "Purification Unit Operator",
      subtitle: "शुद्धीकरण संयंत्र संचालक",
      icon: Droplet,
      image: purificationImage,
      gradient: "bg-gradient-warm",
      description: "Monitor water scrubbing purification unit and ensure CH₄ percentage targets are met",
      features: [
        "Real-time CH₄%, pressure & flow readings",
        "1-hour purification cycle logs",
        "Maintenance scheduler & alerts",
        "Slurry output volume tracking",
        "Multi-digester gas flow monitoring",
        "Purified gas inventory management"
      ]
    },
    {
      title: "Sales & Inventory Manager",
      subtitle: "कॉर्पोरेट बिक्री प्रबंधक",
      icon: TrendingUp,
      image: salesImage,
      gradient: "bg-primary",
      description: "Manage CBG inventory, buyer contacts, pricing, and PESO compliance for commercial operations",
      features: [
        "Daily inventory auto-sync from plant",
        "Buyer e-commerce integration",
        "Price benchmarking & invoice generation",
        "Voice invoicing capability",
        "Automated PESO compliance tagging",
        "Contract management with digital signing"
      ]
    },
    {
      title: "Admin Portal",
      subtitle: "प्रशासन पोर्टल",
      icon: Shield,
      image: adminImage,
      gradient: "bg-gradient-hero",
      description: "Central oversight for user management, device registry, audit logs, and comprehensive analytics",
      features: [
        "User management with RBAC",
        "Device registry (RFID, IoT, GPS)",
        "Comprehensive audit logs",
        "Revenue & carbon credit reports",
        "KPI dashboards & analytics",
        "Predictive analytics for expansion"
      ]
    },
    {
      title: "Logistics Coordinator",
      subtitle: "परिवहन समन्वयक",
      icon: Truck,
      image: transportImage,
      gradient: "bg-gradient-earth",
      description: "Manage pickup/delivery scheduling with GPS tracking and offline support for rural routes",
      features: [
        "Auto-assigned pickup schedules",
        "GPS-based route tracking",
        "Delivery confirmation with photos",
        "Offline mode for rural routes",
        "Real-time status updates",
        "Optimized route planning"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Platform Users
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            प्लेटफॉर्म उपयोगकर्ता
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering every stakeholder in the biogas ecosystem with specialized tools 
            and real-time monitoring capabilities
          </p>
        </div>

        <div className="space-y-24">
          {userTypes.map((userType, index) => {
            const Icon = userType.icon;
            return (
              <div key={index} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex items-stretch gap-8`}>
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 h-full min-h-[600px]">
                    <img 
                      src={userType.image} 
                      alt={`${userType.title} illustration`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8">
                      <div className={`w-16 h-16 ${userType.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                        <Icon className="w-8 h-8 text-background" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 flex">
                  <Card className="p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 flex flex-col justify-between w-full">
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-3">
                        {userType.title}
                      </h3>
                      <p className="text-xl text-muted-foreground mb-4 font-medium">
                        {userType.subtitle}
                      </p>
                      <p className="text-lg text-primary font-semibold mb-6">
                        {userType.description}
                      </p>
                      
                      <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                        Key Features
                      </h4>
                      
                      <ul className="space-y-3 mb-8">
                        {userType.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button size="lg" className="w-full md:w-auto mt-auto">
                      Learn More
                    </Button>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <Card className="p-10 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 border-2 border-primary/20">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Join Our Platform?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a field worker, operator, or administrator, we have the right tools for you
            </p>
            <Button size="lg" className="text-lg px-10 py-6">
              Get Started Today
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserTypes;
