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
import fieldWorkerImage from "/attached_assets/stock_images/happy_indian_male_fa_c753e903.jpg";
import biogasOperatorImage from "/attached_assets/stock_images/indian_biogas_plant__50076640.jpg";
import purificationImage from "/attached_assets/stock_images/indian_industrial_wo_b86bded3.jpg";
import salesImage from "/attached_assets/stock_images/indian_business_prof_67ccf01d.jpg";
import adminImage from "/attached_assets/stock_images/indian_admin_working_266b0a43.jpg";
import transportImage from "/attached_assets/stock_images/indian_truck_driver__9dc29f99.jpg";

export const UserTypes = () => {
  const userTypes = [
    {
      title: "GauSakhi — Gau-sewa Executive (Field App)",
      subtitle: "मोबाइल फील्ड ऐप",
      icon: Smartphone,
      image: fieldWorkerImage,
      gradient: "bg-gradient-hero",
      description: "Comprehensive mobile solution for field executives managing farmer relationships, material collection, and on-ground operations",
      features: [
        "Complete farmer onboarding with KYC verification: Capture photos, Aadhaar details, bank account information, and cattle documentation with built-in validation",
        "RFID & Gau-Aadhaar scanning: Use smartphone camera or Bluetooth-enabled RFID readers to uniquely identify cattle and track their contribution",
        "Multi-language voice logging: Record observations and notes in Hindi, Marathi, Gujarati, and other Indic languages with automatic transcription",
        "IoT scale integration: Direct connectivity with LoRa-enabled weighing scales for real-time weight capture and automatic digital recording",
        "Smart task management: Daily pickup schedules, route optimization, farmer visit tracking, and automated reminders",
        "Offline-first architecture: Full functionality in areas with poor connectivity, with automatic data synchronization when online",
        "Payment initiation: Process on-the-spot payments and maintain detailed cash-out logs with biometric verification",
        "Real-time farmer support: Access farmer history, previous transactions, quality tips, and FAQ support during field visits"
      ]
    },
    {
      title: "BiogasSangh — Cluster Manager App",
      subtitle: "संचालक पोर्टल",
      icon: MonitorCheck,
      image: biogasOperatorImage,
      gradient: "bg-gradient-earth",
      description: "Comprehensive cluster management portal for overseeing multiple biogas digesters, monitoring production metrics, and ensuring operational excellence",
      features: [
        "Real-time IoT dashboard: Monitor CH₄ percentage, biogas volume, digester temperature, and pressure across all digesters with live graphs and trend analysis",
        "Intelligent alert system: Automated notifications for low gas production, CH₄ percentage drops below 55%, sensor failures, temperature anomalies, and emergency shutdown conditions",
        "Transaction management: Digital forms for material receipt verification, weight confirmation, quality assessment, and farmer acknowledgment with timestamp and GPS location",
        "Secure payment processing: Record both cash and online payments with blockchain-backed immutable logging, biometric authentication, and automatic receipt generation",
        "Complete audit trails: Every transaction documented with farmer verification photos, IoT sensor readings, quality parameters, and digital signatures for full traceability",
        "Dispute resolution tools: Access historical data, photo evidence, and sensor logs to quickly resolve any payment or quantity disputes with farmers",
        "Offline capability: Continue operations during connectivity issues with automatic cloud synchronization when connection is restored"
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
      <div className="relative z-10">
        <section className="pt-20 pb-20 bg-gradient-to-b from-primary/10 to-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Users
            </h1>
            <p className="text-xl md:text-2xl text-foreground mb-4">
              उपयोगकर्ता
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our comprehensive digital ecosystem provides specialized tools for every stakeholder in the
              biogas value chain - from field workers to administrators - with real-time monitoring,
              offline capabilities, and role-specific features designed to maximize efficiency and transparency
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-0">

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-l-4 border-primary">
              <h3 className="text-2xl font-bold text-foreground mb-6">Platform Highlights</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground"><strong className="text-foreground">Field Operations - GauSakhi:</strong> Comprehensive mobile app for field executives enabling farmer registration with KYC/Aadhaar capture, RFID/Gau-Aadhaar scanning via camera/Bluetooth, IoT scale integration with LoRa connectivity, voice logging in Indic languages, task management, offline data caching with automatic synchronization, and payment initiation.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground"><strong className="text-foreground">Plant Management - BiogasSangh:</strong> Cluster manager portal with real-time IoT monitoring of CH₄ percentage, volume, temperature, and pressure. Includes automated alerts for low gas levels, sensor failures, and emergency shutdowns. Features transaction management, payment recording with immutable logging, complete audit trails with photos and IoT readings, and offline support.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground"><strong className="text-foreground">Sales & Inventory - UrjaVyapar:</strong> Corporate sales platform managing CBG inventory auto-synced from purification units, buyer e-commerce integration (Megha Gas, ONDC, BGCL), price benchmarking, automated invoice generation with PDF/voice options, PESO compliance tracking, payment monitoring (UPI/cash/credit), buyer management, sales orders, and contract storage with Zoho Sign integration.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground"><strong className="text-foreground">Admin Control - SAUBHAGYA Portal:</strong> Centralized administrative dashboard with RBAC user management for multiple roles, comprehensive device registry (RFID readers, IoT scales, CH₄ sensors, GPS trackers), detailed audit logs for all transactions and operations, revenue and carbon credit accounting, KPI dashboards (CBG production, revenue, cluster statistics), predictive analytics for expansion planning, and compliance report generation.</p>
                </div>
              </div>
            </div>
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
