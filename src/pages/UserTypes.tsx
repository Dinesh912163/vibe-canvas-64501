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
import fieldWorkerImage from "/attached_assets/stock_images/indian_farmer_with_a_7d997457.jpg";
import biogasOperatorImage from "/attached_assets/stock_images/indian_biogas_plant__50076640.jpg";
import purificationImage from "/attached_assets/stock_images/indian_industrial_wo_b86bded3.jpg";
import salesImage from "/attached_assets/stock_images/indian_business_prof_67ccf01d.jpg";
import adminImage from "/attached_assets/stock_images/indian_admin_working_266b0a43.jpg";
import transportImage from "/attached_assets/stock_images/indian_truck_driver__9dc29f99.jpg";
import usersBg from "/attached_assets/stock_images/technology_platform__a4f4b0ee.jpg";

export const UserTypes = () => {
  const userTypes = [
    {
      title: "GauSakhi — Gau-sewa Executive (Field App)",
      subtitle: "मोबाइल फील्ड ऐप",
      icon: Smartphone,
      image: fieldWorkerImage,
      gradient: "bg-gradient-hero",
      description: "Field operations, farmer onboarding, RFID scanning, weight capture, offline logging",
      features: [
        "Farmer registration & KYC capture (photo, Aadhaar, bank details)",
        "RFID / Gau-Aadhaar scanning (camera/Bluetooth)",
        "Voice logging in Indic languages",
        "IoT scale sync (LoRa connectivity)",
        "Task list & pickup schedule",
        "Offline caching & conflict resolution",
        "Multi-language support",
        "Payment initiation / cash-out log"
      ]
    },
    {
      title: "BiogasSangh — Cluster Manager App",
      subtitle: "संचालक पोर्टल",
      icon: MonitorCheck,
      image: biogasOperatorImage,
      gradient: "bg-gradient-earth",
      description: "Supervise clusters, view digesters, reconcile inputs, and resolve disputes",
      features: [
        "Real-time IoT monitoring (CH₄%, volume, temp, pressure)",
        "Alerts (low gas%, sensor failures, emergency shutdowns)",
        "Transaction form entry & confirmation",
        "Record payment (cash/online) with immutable logging",
        "Audit trail: farmer proof photo + IoT readings",
        "Offline support for poor connectivity"
      ]
    },
    {
      title: "ShuddhiDoot — Purification Unit App",
      subtitle: "शुद्धीकरण संयंत्र संचालक",
      icon: Droplet,
      image: purificationImage,
      gradient: "bg-gradient-warm",
      description: "Monitor water scrubbing purification unit; ensure CH₄% targets and schedule maintenance",
      features: [
        "Real-time CH₄%, pressure, flow, temp readings",
        "1-hour purification cycle logs",
        "Maintenance scheduler & alerts for filters/valves",
        "Slurry output volume tracking and byproduct records",
        "Monitoring gas flow from multiple digesters",
        "Track inventory of purified gas (ready for sales)"
      ]
    },
    {
      title: "UrjaVyapar — Corporate Sales & Inventory App",
      subtitle: "कॉर्पोरेट बिक्री प्रबंधक",
      icon: TrendingUp,
      image: salesImage,
      gradient: "bg-primary",
      description: "Manage inventory of CBG, buyer contacts, pricing, invoicing, and PESO compliance",
      features: [
        "Daily inventory auto-sync from purification unit",
        "Buyer e-commerce (Megha Gas, ONDC, BGCL)",
        "Price benchmarking & invoice generation (PDF)",
        "Voice invoicing option",
        "Automated PESO compliance tagging per batch",
        "Track payment (UPI/cash/credit)",
        "Manage buyers & create sales orders",
        "Store contracts with versioning & Zoho Sign"
      ]
    },
    {
      title: "Admin Portal",
      subtitle: "SAUBHAGYA Admin",
      icon: Shield,
      image: adminImage,
      gradient: "bg-gradient-hero",
      description: "Central oversight: user management, devices, audit logs, revenue & carbon accounting",
      features: [
        "User management (RBAC): admin, cluster_manager, sales, operator",
        "Device registry (RFID, IoT scales, CH₄ sensors, GPS)",
        "Audit logs (transactional, device, and operator logs)",
        "Reports: revenue, carbon credits, compliance exports",
        "View KPIs (CBG daily, revenue, cluster-level stats)",
        "Predictive analytics: expansion needs, revenue projections",
        "Compliance & audit reports"
      ]
    },
    {
      title: "Transporter (Mobile App)",
      subtitle: "परिवहन समन्वयक",
      icon: Truck,
      image: transportImage,
      gradient: "bg-gradient-earth",
      description: "Manage pickup/delivery scheduling with GPS tracking and offline support for rural routes",
      features: [
        "Pickup/drop-off schedules auto-assigned",
        "GPS-based route tracking",
        "Delivery confirmation with photo + timestamp",
        "Offline mode for rural routes"
      ]
    }
  ];

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10 pointer-events-none"
        style={{ backgroundImage: `url(${usersBg})` }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 -z-10 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
              Users
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-4 drop-shadow-lg">
              उपयोगकर्ता
            </p>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
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
            <Card className="p-10 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 border-2 border-primary/20 bg-white/95 backdrop-blur-sm">
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
    </div>
  );
};

export default UserTypes;
