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
  Languages
} from "lucide-react";
import { useState } from "react";
import fieldWorkerImage from "/attached_assets/stock_images/happy_indian_farmers_41d19399.jpg";
import biogasOperatorImage from "/attached_assets/stock_images/indian_biogas_plant__50076640.jpg";
import purificationImage from "/attached_assets/stock_images/indian_industrial_wo_b86bded3.jpg";
import salesImage from "/attached_assets/stock_images/indian_business_prof_67ccf01d.jpg";
import adminImage from "/attached_assets/stock_images/indian_admin_working_266b0a43.jpg";
import transportImage from "/attached_assets/stock_images/indian_truck_driver__9dc29f99.jpg";

export const UserTypes = () => {
  const [language, setLanguage] = useState<'english' | 'hindi'>('english');

  const userTypesEnglish = [
    {
      title: "GauSakhi — Gau-sewa Executive (Field App)",
      subtitle: "मोबाइल फील्ड ऐप",
      icon: Smartphone,
      image: fieldWorkerImage,
      gradient: "bg-gradient-hero",
      description: "A unified mobile solution for field executives to manage farmers, cattle, and daily collection tasks efficiently. It streamlines data management, route planning, quality checks, and payments — ensuring smooth, transparent, and real-time operations. The app supports full offline functionality, enabling uninterrupted work and automatic data sync in remote areas.",
      features: [
        "Farmer Onboarding: Register farmers with KYC, Aadhaar, bank details, and photo capture",
        "Cattle Management: Complete cattle database with RFID/Gau-Aadhaar scanning, breed info, and photo records",
        "Health History: Track cattle health records, vaccinations, medical treatments, and veterinary visits",
        "Food History: Monitor cattle feeding patterns, diet changes, and nutrition tracking",
        "Transport History: View pickup schedules, delivery routes, and material collection logs",
        "IoT Scale Integration: Auto-capture weights from connected scales during collection",
        "Payment Processing: Instant payment to farmers with digital receipts",
        "Offline Mode: Full app functionality works without internet, syncs automatically when online"
      ]
    },
    {
      title: "BiogasSangh — Cluster Manager App",
      subtitle: "संचालक पोर्टल",
      icon: MonitorCheck,
      image: biogasOperatorImage,
      gradient: "bg-gradient-earth",
      description: "A centralized portal designed for cluster managers to monitor digestion units, manage the supply chain, and oversee overall operations efficiently. It enables complete control through real-time analytics, performance tracking, and seamless coordination among all stakeholders. The system ensures optimized resource use, quality assurance, and transparent communication across every stage of the production and supply process.",
      features: [
        "Digester Monitoring: Real-time tracking of CH₄ percentage, biogas volume, temperature, and pressure with live graphs",
        "Batch Management: Track production batches, input materials, output volumes, and quality parameters",
        "Transaction Entry: Record material receipts, verify weights, confirm quality, and log farmer acknowledgments",
        "Payment Conciliation: Reconcile farmer payments (cash/online) with digital receipts and transaction logs",
        "Pickup Schedule: View and manage daily collection schedules, routes, and field executive assignments",
        "Dispute Resolution: Access historical records, photos, and IoT data to resolve farmer payment or quantity disputes",
        "Alerts Management: Receive and manage alerts for low gas production, sensor failures, and emergency conditions",
        "Offline Support: Continue operations without internet, data syncs automatically when connection restored"
      ]
    },
    {
      title: "ShuddhiDoot — Purification Unit App",
      subtitle: "शुद्धीकरण संयंत्र संचालक",
      icon: Droplet,
      image: purificationImage,
      gradient: "bg-gradient-warm",
      description: "A dedicated app for operators to monitor gas quality, manage orders, and oversee plant operations efficiently. It ensures real-time tracking of gas purity, plant performance, and operational efficiency while maintaining strict safety and quality standards. The system streamlines order processing, production monitoring, and compliance reporting, enabling smooth, transparent, and optimized plant operations.",
      features: [
        "Cycle Management: Track 1-hour purification cycles with start/end times, input/output volumes, and efficiency logs",
        "Real-Time Monitoring: Live display of CH₄ percentage, pressure, flow rate, and temperature with alerts",
        "Quality Control Maintenance: Schedule and track filter replacements, valve servicing, and equipment checks",
        "Slurry Management: Monitor slurry output volumes, byproduct quality, and disposal/usage records",
        "Inventory Transfer: Track purified gas inventory ready for sales, automatic sync with sales team",
        "Alert System: Instant notifications for CH₄ drops, pressure issues, or equipment failures",
        "Performance Reports: Daily and monthly reports on purification efficiency and output quality"
      ]
    },
    {
      title: "UrjaVyapar — Corporate Sales & Inventory App",
      subtitle: "कॉर्पोरेट बिक्री प्रबंधक",
      icon: TrendingUp,
      image: salesImage,
      gradient: "bg-primary",
      description: "A centralized platform for managing CBG inventory, customer orders, invoicing, and market operations efficiently. It enables real-time inventory tracking, streamlined order processing, and automated invoicing while maintaining compliance and financial transparency. The system provides market insights, sales analytics, and logistics coordination to optimize sales performance and customer satisfaction.",
      features: [
        "Customer Management: Maintain buyer database with company details, contact persons, and purchase history",
        "Contact Management: Track communication history, follow-ups, and relationship management with all customers",
        "Inventory Management: Real-time CBG stock levels with auto-sync from purification unit, batch tracking",
        "Order and Invoice: Create sales orders, generate PDF invoices, and manage delivery documentation",
        "Voice Invoicing: Generate invoices using voice commands in multiple languages for quick processing",
        "Payment Tracking: Monitor payments via UPI, cash, or credit with automated reminders and reconciliation",
        "Delivery Scheduling: Plan and track CBG deliveries to customers with GPS-enabled logistics",
        "Price Benchmarking: Compare market prices from Megha Gas, ONDC, BGCL for competitive pricing",
        "Compliance and Reports: PESO compliance tagging, tax reports, revenue analytics, and audit-ready documentation"
      ]
    },
    {
      title: "Admin Portal",
      subtitle: "SAUBHAGYA Admin",
      icon: Shield,
      image: adminImage,
      gradient: "bg-gradient-hero",
      description: "A central platform for managing users, devices, audits, and tracking revenue & carbon credits efficiently. It enables streamlined user and device management, maintains detailed audit trails, and generates reports for revenue, carbon credits, and compliance. The system also supports predictive analytics for revenue projections, expansion trends, and overall operational oversight.",
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
      description: "An app to manage pickup and delivery operations efficiently, especially in rural areas. It enables real-time scheduling, GPS-based route tracking, and delivery notifications with photos and messaging. Offline support ensures uninterrupted operations even in low-network regions, with automatic data sync when connectivity is restored.",
      features: [
        "Pickup/drop-off schedules auto-assigned",
        "GPS-based route tracking",
        "Delivery confirmation with photo + timestamp",
        "Offline mode for rural routes"
      ]
    }
  ];

  const userTypesHindi = [
    {
      title: "गौसखी — गौ-सेवा कार्यकारी (फील्ड ऐप)",
      subtitle: "मोबाइल फील्ड ऐप",
      icon: Smartphone,
      image: fieldWorkerImage,
      gradient: "bg-gradient-hero",
      description: "फील्ड कार्यकारियों के लिए एक एकीकृत मोबाइल समाधान जो किसानों, मवेशियों और दैनिक संग्रह कार्यों को कुशलता से प्रबंधित करता है। यह डेटा प्रबंधन, मार्ग योजना, गुणवत्ता जांच और भुगतान को सुव्यवस्थित करता है — सुचारू, पारदर्शी और वास्तविक समय के संचालन को सुनिश्चित करता है। ऐप पूर्ण ऑफलाइन कार्यक्षमता का समर्थन करता है, जो दूरदराज के क्षेत्रों में निर्बाध कार्य और स्वचालित डेटा सिंक को सक्षम करता है।",
      features: [
        "किसान ऑनबोर्डिंग: KYC, आधार, बैंक विवरण और फोटो कैप्चर के साथ किसानों को पंजीकृत करें",
        "मवेशी प्रबंधन: RFID/गौ-आधार स्कैनिंग, नस्ल जानकारी और फोटो रिकॉर्ड के साथ पूर्ण मवेशी डेटाबेस",
        "स्वास्थ्य इतिहास: मवेशियों के स्वास्थ्य रिकॉर्ड, टीकाकरण, चिकित्सा उपचार और पशु चिकित्सक दौरे ट्रैक करें",
        "भोजन इतिहास: मवेशियों के भोजन पैटर्न, आहार परिवर्तन और पोषण ट्रैकिंग की निगरानी करें",
        "परिवहन इतिहास: पिकअप शेड्यूल, डिलीवरी रूट और सामग्री संग्रह लॉग देखें",
        "IoT स्केल एकीकरण: संग्रह के दौरान जुड़े तराजू से स्वचालित रूप से वजन कैप्चर करें",
        "भुगतान प्रक्रिया: डिजिटल रसीदों के साथ किसानों को त्वरित भुगतान",
        "ऑफलाइन मोड: पूर्ण ऐप कार्यक्षमता इंटरनेट के बिना काम करती है, ऑनलाइन होने पर स्वचालित रूप से सिंक होती है"
      ]
    },
    {
      title: "बायोगैससंघ — क्लस्टर मैनेजर ऐप",
      subtitle: "संचालक पोर्टल",
      icon: MonitorCheck,
      image: biogasOperatorImage,
      gradient: "bg-gradient-earth",
      description: "क्लस्टर प्रबंधकों के लिए एक केंद्रीकृत पोर्टल जो पाचन इकाइयों की निगरानी करने, आपूर्ति श्रृंखला का प्रबंधन करने और समग्र संचालन को कुशलता से देखरेख करने के लिए डिज़ाइन किया गया है। यह वास्तविक समय विश्लेषण, प्रदर्शन ट्रैकिंग और सभी हितधारकों के बीच निर्बाध समन्वय के माध्यम से पूर्ण नियंत्रण को सक्षम करता है। सिस्टम उत्पादन और आपूर्ति प्रक्रिया के हर चरण में अनुकूलित संसाधन उपयोग, गुणवत्ता आश्वासन और पारदर्शी संचार सुनिश्चित करता है।",
      features: [
        "डाइजेस्टर मॉनिटरिंग: CH₄ प्रतिशत, बायोगैस वॉल्यूम, तापमान और दबाव की लाइव ग्राफ के साथ वास्तविक समय ट्रैकिंग",
        "बैच प्रबंधन: उत्पादन बैच, इनपुट सामग्री, आउटपुट वॉल्यूम और गुणवत्ता पैरामीटर ट्रैक करें",
        "लेनदेन प्रविष्टि: सामग्री रसीद रिकॉर्ड करें, वजन सत्यापित करें, गुणवत्ता की पुष्टि करें और किसान स्वीकृति लॉग करें",
        "भुगतान समाधान: डिजिटल रसीद और लेनदेन लॉग के साथ किसान भुगतान (नकद/ऑनलाइन) का समाधान करें",
        "पिकअप शेड्यूल: दैनिक संग्रह शेड्यूल, मार्ग और फील्ड कार्यकारी असाइनमेंट देखें और प्रबंधित करें",
        "विवाद समाधान: किसान भुगतान या मात्रा विवादों को हल करने के लिए ऐतिहासिक रिकॉर्ड, फोटो और IoT डेटा एक्सेस करें",
        "अलर्ट प्रबंधन: कम गैस उत्पादन, सेंसर विफलता और आपातकालीन स्थितियों के लिए अलर्ट प्राप्त करें और प्रबंधित करें",
        "ऑफलाइन समर्थन: इंटरनेट के बिना संचालन जारी रखें, कनेक्शन बहाल होने पर डेटा स्वचालित रूप से सिंक होता है"
      ]
    },
    {
      title: "शुद्धिदूत — शुद्धिकरण इकाई ऐप",
      subtitle: "शुद्धीकरण संयंत्र संचालक",
      icon: Droplet,
      image: purificationImage,
      gradient: "bg-gradient-warm",
      description: "संचालकों के लिए एक समर्पित ऐप जो गैस गुणवत्ता की निगरानी करता है, आदेशों का प्रबंधन करता है और संयंत्र संचालन को कुशलता से देखता है। यह सख्त सुरक्षा और गुणवत्ता मानकों को बनाए रखते हुए गैस शुद्धता, संयंत्र प्रदर्शन और परिचालन दक्षता की वास्तविक समय ट्रैकिंग सुनिश्चित करता है। सिस्टम आदेश प्रसंस्करण, उत्पादन निगरानी और अनुपालन रिपोर्टिंग को सुव्यवस्थित करता है, जो सुचारू, पारदर्शी और अनुकूलित संयंत्र संचालन को सक्षम करता है।",
      features: [
        "चक्र प्रबंधन: प्रारंभ/समाप्ति समय, इनपुट/आउटपुट वॉल्यूम और दक्षता लॉग के साथ 1-घंटे के शुद्धिकरण चक्रों को ट्रैक करें",
        "वास्तविक समय निगरानी: अलर्ट के साथ CH₄ प्रतिशत, दबाव, प्रवाह दर और तापमान का लाइव डिस्प्ले",
        "गुणवत्ता नियंत्रण रखरखाव: फिल्टर प्रतिस्थापन, वाल्व सर्विसिंग और उपकरण जांच को शेड्यूल और ट्रैक करें",
        "स्लरी प्रबंधन: स्लरी आउटपुट वॉल्यूम, उपोत्पाद गुणवत्ता और निपटान/उपयोग रिकॉर्ड की निगरानी करें",
        "इन्वेंटरी ट्रांसफर: बिक्री के लिए तैयार शुद्ध गैस इन्वेंटरी ट्रैक करें, बिक्री टीम के साथ स्वचालित सिंक",
        "अलर्ट सिस्टम: CH₄ गिरावट, दबाव मुद्दों या उपकरण विफलता के लिए तत्काल सूचनाएं",
        "प्रदर्शन रिपोर्ट: शुद्धिकरण दक्षता और आउटपुट गुणवत्ता पर दैनिक और मासिक रिपोर्ट"
      ]
    },
    {
      title: "ऊर्जाव्यापार — कॉर्पोरेट बिक्री और इन्वेंटरी ऐप",
      subtitle: "कॉर्पोरेट बिक्री प्रबंधक",
      icon: TrendingUp,
      image: salesImage,
      gradient: "bg-primary",
      description: "CBG इन्वेंटरी, ग्राहक आदेश, इनवॉइसिंग और बाजार संचालन को कुशलता से प्रबंधित करने के लिए एक केंद्रीकृत प्लेटफॉर्म। यह अनुपालन और वित्तीय पारदर्शिता बनाए रखते हुए वास्तविक समय इन्वेंटरी ट्रैकिंग, सुव्यवस्थित आदेश प्रसंस्करण और स्वचालित इनवॉइसिंग को सक्षम करता है। सिस्टम बिक्री प्रदर्शन और ग्राहक संतुष्टि को अनुकूलित करने के लिए बाजार अंतर्दृष्टि, बिक्री विश्लेषण और लॉजिस्टिक्स समन्वय प्रदान करता है।",
      features: [
        "ग्राहक प्रबंधन: कंपनी विवरण, संपर्क व्यक्तियों और खरीद इतिहास के साथ खरीदार डेटाबेस बनाए रखें",
        "संपर्क प्रबंधन: सभी ग्राहकों के साथ संचार इतिहास, फॉलो-अप और संबंध प्रबंधन ट्रैक करें",
        "इन्वेंटरी प्रबंधन: शुद्धिकरण इकाई से स्वचालित सिंक, बैच ट्रैकिंग के साथ वास्तविक समय CBG स्टॉक स्तर",
        "आदेश और इनवॉइस: बिक्री आदेश बनाएं, PDF इनवॉइस जेनरेट करें और डिलीवरी दस्तावेज़ीकरण प्रबंधित करें",
        "वॉयस इनवॉइसिंग: त्वरित प्रसंस्करण के लिए कई भाषाओं में वॉयस कमांड का उपयोग करके इनवॉइस जेनरेट करें",
        "भुगतान ट्रैकिंग: स्वचालित अनुस्मारक और समाधान के साथ UPI, नकद या क्रेडिट के माध्यम से भुगतान की निगरानी करें",
        "डिलीवरी शेड्यूलिंग: GPS-सक्षम लॉजिस्टिक्स के साथ ग्राहकों को CBG डिलीवरी की योजना बनाएं और ट्रैक करें",
        "मूल्य बेंचमार्किंग: प्रतिस्पर्धी मूल्य निर्धारण के लिए मेघा गैस, ONDC, BGCL से बाजार मूल्यों की तुलना करें",
        "अनुपालन और रिपोर्ट: PESO अनुपालन टैगिंग, कर रिपोर्ट, राजस्व विश्लेषण और ऑडिट-तैयार दस्तावेज़ीकरण"
      ]
    },
    {
      title: "एडमिन पोर्टल",
      subtitle: "SAUBHAGYA व्यवस्थापक",
      icon: Shield,
      image: adminImage,
      gradient: "bg-gradient-hero",
      description: "उपयोगकर्ताओं, उपकरणों, ऑडिट का प्रबंधन करने और राजस्व और कार्बन क्रेडिट को कुशलता से ट्रैक करने के लिए एक केंद्रीय प्लेटफॉर्म। यह सुव्यवस्थित उपयोगकर्ता और डिवाइस प्रबंधन को सक्षम करता है, विस्तृत ऑडिट ट्रेल्स बनाए रखता है, और राजस्व, कार्बन क्रेडिट और अनुपालन के लिए रिपोर्ट तैयार करता है। सिस्टम राजस्व अनुमानों, विस्तार रुझानों और समग्र परिचालन निरीक्षण के लिए भविष्यसूचक विश्लेषण का भी समर्थन करता है।",
      features: [
        "उपयोगकर्ता प्रबंधन (RBAC): व्यवस्थापक, क्लस्टर प्रबंधक, बिक्री, संचालक",
        "डिवाइस रजिस्ट्री (RFID, IoT तराजू, CH₄ सेंसर, GPS)",
        "ऑडिट लॉग (लेनदेन, डिवाइस और संचालक लॉग)",
        "रिपोर्ट: राजस्व, कार्बन क्रेडिट, अनुपालन निर्यात",
        "KPI देखें (दैनिक CBG, राजस्व, क्लस्टर-स्तर के आंकड़े)",
        "भविष्यसूचक विश्लेषण: विस्तार आवश्यकताएं, राजस्व अनुमान",
        "अनुपालन और ऑडिट रिपोर्ट"
      ]
    },
    {
      title: "ट्रांसपोर्टर (मोबाइल ऐप)",
      subtitle: "परिवहन समन्वयक",
      icon: Truck,
      image: transportImage,
      gradient: "bg-gradient-earth",
      description: "विशेष रूप से ग्रामीण क्षेत्रों में पिकअप और डिलीवरी संचालन को कुशलता से प्रबंधित करने के लिए एक ऐप। यह फोटो और मैसेजिंग के साथ वास्तविक समय शेड्यूलिंग, GPS-आधारित मार्ग ट्रैकिंग और डिलीवरी सूचनाएं सक्षम करता है। ऑफलाइन समर्थन कम-नेटवर्क क्षेत्रों में भी निर्बाध संचालन सुनिश्चित करता है, कनेक्टिविटी बहाल होने पर स्वचालित डेटा सिंक के साथ।",
      features: [
        "पिकअप/ड्रॉप-ऑफ शेड्यूल स्वचालित रूप से असाइन किए गए",
        "GPS-आधारित मार्ग ट्रैकिंग",
        "फोटो + टाइमस्टैम्प के साथ डिलीवरी पुष्टि",
        "ग्रामीण मार्गों के लिए ऑफलाइन मोड"
      ]
    }
  ];

  const userTypes = language === 'english' ? userTypesEnglish : userTypesHindi;
  const content = language === 'english' ? {
    title: "Users",
    subtitle: "उपयोगकर्ता",
    description: "Our comprehensive digital ecosystem provides specialized tools for every stakeholder in the biogas value chain - from field workers to administrators - with real-time monitoring, offline capabilities, and role-specific features designed to maximize efficiency and transparency",
    keyFeatures: "Key Features",
    learnMore: "Learn More",
    ctaTitle: "Ready to Join Our Platform?",
    ctaDescription: "Whether you're a field worker, operator, or administrator, we have the right tools for you",
    ctaButton: "Get Started Today"
  } : {
    title: "उपयोगकर्ता",
    subtitle: "Users",
    description: "हमारा व्यापक डिजिटल पारिस्थितिकी तंत्र बायोगैस मूल्य श्रृंखला में हर हितधारक के लिए विशेष उपकरण प्रदान करता है - फील्ड कार्यकर्ताओं से लेकर प्रशासकों तक - वास्तविक समय निगरानी, ऑफलाइन क्षमताओं और भूमिका-विशिष्ट सुविधाओं के साथ जो दक्षता और पारदर्शिता को अधिकतम करने के लिए डिज़ाइन किए गए हैं",
    keyFeatures: "मुख्य विशेषताएं",
    learnMore: "और जानें",
    ctaTitle: "हमारे प्लेटफॉर्म में शामिल होने के लिए तैयार हैं?",
    ctaDescription: "चाहे आप फील्ड वर्कर, ऑपरेटर या प्रशासक हों, हमारे पास आपके लिए सही उपकरण हैं",
    ctaButton: "आज ही शुरू करें"
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
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                {content.title}
              </h1>
              <p className="text-xl md:text-2xl text-foreground mb-4">
                {content.subtitle}
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {content.description}
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-0">

          <div className="grid md:grid-cols-2 gap-8 mb-16">
          {userTypes.map((userType, index) => {
            const Icon = userType.icon;
            return (
              <Card key={index} className="group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={userType.image}
                    alt={`${userType.title} illustration`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-6 right-6">
                    <div className={`w-14 h-14 ${userType.gradient} rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm`}>
                      <Icon className="w-7 h-7 text-background" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {userType.title}
                    </h3>
                    <p className="text-lg text-white/90 font-medium">
                      {userType.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-base text-primary font-semibold mb-6 leading-relaxed">
                    {userType.description}
                  </p>

                  <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {content.keyFeatures}
                  </h4>

                  <ul className="space-y-2.5 mb-6">
                    {userType.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button size="lg" className="w-full">
                    {content.learnMore}
                  </Button>
                </div>
              </Card>
            );
          })}
          </div>

          <div className="mt-20 text-center">
            <Card className="p-10 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 border-2 border-primary/20 bg-white/95 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                {content.ctaTitle}
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {content.ctaDescription}
              </p>
              <Button size="lg" className="text-lg px-10 py-6">
                {content.ctaButton}
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTypes;
