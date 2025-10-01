import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  MonitorCheck, 
  Droplet, 
  TrendingUp, 
  Shield, 
  Truck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import fieldWorkerImage from "/attached_assets/stock_images/field_worker_farmer__bacc0519.jpg";
import biogasOperatorImage from "/attached_assets/stock_images/biogas_plant_operato_b6b8d6d8.jpg";
import purificationImage from "/attached_assets/stock_images/purification_unit_wa_8c29fed8.jpg";
import salesImage from "/attached_assets/stock_images/corporate_sales_busi_62a60cae.jpg";
import adminImage from "/attached_assets/stock_images/admin_dashboard_mana_71236347.jpg";
import transportImage from "/attached_assets/stock_images/transport_truck_deli_467fdb44.jpg";

export const UserTypes = () => {
  const userTypes = [
    {
      title: "GauSakhi — Field Executive",
      subtitle: "गौ-सेवा कार्यकारी (मोबाइल ऐप)",
      icon: Smartphone,
      image: fieldWorkerImage,
      bgGradient: "from-green-600 to-green-800",
      description: "Field operations app for farmer onboarding and daily collection management",
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
      title: "BiogasSangh — Cluster Manager",
      subtitle: "क्लस्टर प्रबंधक (संचालक पोर्टल)",
      icon: MonitorCheck,
      image: biogasOperatorImage,
      bgGradient: "from-blue-600 to-blue-800",
      description: "Supervise clusters, monitor digesters, and manage operations in real-time",
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
      title: "ShuddhiDoot — Purification Unit",
      subtitle: "शुद्धीकरण इकाई (संयंत्र संचालक)",
      icon: Droplet,
      image: purificationImage,
      bgGradient: "from-cyan-600 to-cyan-800",
      description: "Monitor water scrubbing purification unit and ensure CH₄% targets",
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
      title: "UrjaVyapar — Sales & Inventory",
      subtitle: "कॉर्पोरेट बिक्री (इन्वेंटरी ऐप)",
      icon: TrendingUp,
      image: salesImage,
      bgGradient: "from-orange-600 to-orange-800",
      description: "Manage CBG inventory, buyer contacts, pricing, and PESO compliance",
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
      title: "SAUBHAGYA Admin Portal",
      subtitle: "प्रशासन पोर्टल (केंद्रीय निगरानी)",
      icon: Shield,
      image: adminImage,
      bgGradient: "from-purple-600 to-purple-800",
      description: "Central oversight for user management, devices, audit logs, and analytics",
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
      title: "Transporter — Logistics App",
      subtitle: "परिवहन (मोबाइल ऐप)",
      icon: Truck,
      image: transportImage,
      bgGradient: "from-amber-600 to-amber-800",
      description: "Pickup/delivery scheduling with GPS tracking and offline support",
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
            Our Platform Users
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            हमारे मंच उपयोगकर्ता
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering every stakeholder in the biogas ecosystem with specialized tools 
            and real-time monitoring capabilities
          </p>
        </div>

        <div className="grid gap-12">
          {userTypes.map((userType, index) => {
            const Icon = userType.icon;
            return (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div 
                    className={`relative h-80 md:h-auto bg-gradient-to-br ${userType.bgGradient} overflow-hidden`}
                  >
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-40"
                      style={{ backgroundImage: `url(${userType.image})` }}
                    />
                    <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-white">
                      <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-2xl">
                        <Icon className="w-12 h-12" />
                      </div>
                      <h2 className="text-3xl font-bold mb-2 text-center drop-shadow-lg">
                        {userType.title}
                      </h2>
                      <p className="text-lg font-medium text-center drop-shadow-md">
                        {userType.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="p-8 bg-background">
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {userType.description}
                    </p>
                    
                    <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                      Key Features
                    </h3>
                    
                    <ul className="space-y-4 mb-8">
                      {userType.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      size="lg" 
                      className="w-full md:w-auto"
                    >
                      Learn More <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-10 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 border-2 border-primary/20">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Join Our Platform?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a farmer, operator, or administrator, we have the right tools for you
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
