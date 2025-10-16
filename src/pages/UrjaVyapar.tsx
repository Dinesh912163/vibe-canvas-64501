import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  TrendingUp,
  Shield,
  BarChart3,
  Phone,
  FileCheck,
  Building2,
  CheckCircle,
  ArrowRight,
  Users
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
import biogasPlant from "@/assets/biogas-facility.jpg";
import corporateMeeting from "@/assets/village-life.jpg";
import biogasCluster from "@/assets/biogas-cluster.jpg";

const UrjaVyapar = () => {
  const features = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "AI-Powered Inventory",
      titleHindi: "स्मार्ट इन्वेंटरी",
      description: "Real-time CBG availability across India with predictive supply analytics",
      descriptionHindi: "पूरे भारत में CBG की उपलब्धता और आपूर्ति की भविष्यवाणी"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Dynamic Pricing",
      titleHindi: "गतिशील मूल्य निर्धारण",
      description: "Market-linked pricing with volume discounts and contract management",
      descriptionHindi: "बाजार से जुड़ी कीमतें, छूट और अनुबंध प्रबंधन"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Voice Ordering",
      titleHindi: "आवाज से ऑर्डर करें",
      description: "Place bulk orders via voice command in English or Hindi",
      descriptionHindi: "अंग्रेजी या हिंदी में आवाज के माध्यम से बल्क ऑर्डर दें"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Enterprise CRM",
      titleHindi: "एंटरप्राइज CRM",
      description: "Manage multiple buyers, delivery schedules, and invoicing seamlessly",
      descriptionHindi: "कई खरीदारों, डिलीवरी शेड्यूल और चालान को सहजता से प्रबंधित करें"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "PESO Compliance",
      titleHindi: "PESO अनुपालन",
      description: "Automated compliance tracking for PESO, BIS, and safety certifications",
      descriptionHindi: "PESO, BIS और सुरक्षा प्रमाणपत्रों के लिए स्वचालित अनुपालन ट्रैकिंग"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Intelligence",
      titleHindi: "व्यावसायिक खुफिया",
      description: "Advanced analytics dashboards for procurement insights and forecasting",
      descriptionHindi: "खरीद अंतर्दृष्टि और पूर्वानुमान के लिए उन्नत विश्लेषण डैशबोर्ड"
    }
  ];

  const whyChoose = [
    {
      title: "Trusted by Industry Leaders",
      description: "IOCL, GAIL, and leading CGDs rely on UrjaVyapar for consistent CBG supply"
    },
    {
      title: "Pan-India Coverage",
      description: "Connect with 200+ CBG plants across 15 states in real-time"
    },
    {
      title: "Quality Assured",
      description: "Every supply batch comes with PESO certification and quality reports"
    },
    {
      title: "Flexible Contracts",
      description: "Monthly, quarterly, or annual supply agreements with flexible terms"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Register Your Organization",
      description: "Quick B2B registration with GST and business verification"
    },
    {
      number: "2",
      title: "Browse & Compare",
      description: "View live inventory, pricing, and quality certificates from multiple plants"
    },
    {
      number: "3",
      title: "Place Orders",
      description: "Order via dashboard or voice command with instant confirmation"
    },
    {
      number: "4",
      title: "Track & Receive",
      description: "Real-time logistics tracking with delivery confirmation and invoicing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700 opacity-95"></div>
        <div className="absolute inset-0">
          <img
            src={biogasPlant}
            alt="CBG Infrastructure"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4 px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              India's First AI-Powered CBG Marketplace
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              UrjaVyapar: The B2B Marketplace for Compressed Biogas
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              ऊर्जा व्यापार - कॉर्पोरेट खरीदारों के लिए विश्वसनीय CBG आपूर्ति
            </p>
            <p className="text-lg mb-8 text-blue-50 max-w-3xl mx-auto leading-relaxed">
              Connect with certified CBG plants across India. Smart inventory management,
              PESO-compliant sourcing, and voice-enabled procurement for Oil & Gas majors, CGDs, and fleet operators.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-semibold shadow-xl hover:shadow-2xl transition-all"
                >
                  <Building2 className="mr-2 w-5 h-5" />
                  Register Your Organization
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto font-semibold"
                >
                  Request Demo
                </Button>
              </motion.div>
            </motion.div>
            <p className="mt-6 text-sm text-blue-200">
              Trusted by IOCL, GAIL & leading CGDs | PESO Certified Supply | 24/7 Support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Leading Enterprises Choose UrjaVyapar
            </h2>
            <p className="text-xl text-gray-600">
              भारत की सबसे बड़ी कंपनियों का विश्वास
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {whyChoose.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow border-2 border-blue-100 h-full group">
                    <motion.div
                      className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:bg-blue-700 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <CheckCircle className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div variants={fadeInUp}>
              <p className="text-4xl font-bold text-blue-600 mb-2">200+</p>
              <p className="text-gray-600">CBG Plants</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <p className="text-4xl font-bold text-blue-600 mb-2">15</p>
              <p className="text-gray-600">States Covered</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <p className="text-4xl font-bold text-blue-600 mb-2">50K+</p>
              <p className="text-gray-600">MT/Month Supply</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <p className="text-4xl font-bold text-blue-600 mb-2">100%</p>
              <p className="text-gray-600">PESO Certified</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-gray-600">
              कॉर्पोरेट खरीदारी को सरल बनाने वाली सुविधाएं
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-shadow bg-white border-2 border-blue-100 hover:border-blue-300 h-full group">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm font-medium text-blue-600 mb-3">
                      {feature.titleHindi}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-2">
                      {feature.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      {feature.descriptionHindi}
                    </p>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How UrjaVyapar Works
            </h2>
            <p className="text-xl text-gray-600">
              4 सरल स्टेप्स में CBG की खरीदी करें
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              {steps.map((step, index) => (
                <motion.div key={index} className="relative" variants={fadeInUp}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="p-6 text-center h-full bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 group">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {step.number}
                      </motion.div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </Card>
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[100%] w-full">
                      <ArrowRight className="w-6 h-6 text-blue-400 mx-auto" />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Visual Showcase */}
          <motion.div
            className="mt-16 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border-2 border-blue-200">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-6">
                    Real-Time Market Intelligence
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Live inventory dashboard across all plants</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Predictive analytics for supply planning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Automated PESO compliance verification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Integration with existing ERP systems</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <img
                    src={biogasCluster}
                    alt="UrjaVyapar Platform Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8 md:p-12 bg-white shadow-2xl border-2 border-blue-200">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <motion.img
                      src={corporateMeeting}
                      alt="Corporate Buyer"
                      className="w-32 h-32 rounded-full border-4 border-blue-600 shadow-xl object-cover"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-6xl text-blue-600 mb-4">"</div>
                    <p className="text-xl md:text-2xl leading-relaxed mb-6 text-gray-800">
                      UrjaVyapar has revolutionized our CBG procurement. The platform's AI-powered inventory
                      management and PESO compliance tracking has reduced our sourcing time by 60%.
                    </p>
                    <p className="text-lg italic mb-4 text-gray-600">
                      "UrjaVyapar ने हमारी CBG खरीद में क्रांति ला दी है। प्लेटफॉर्म की स्मार्ट इन्वेंटरी और PESO
                      अनुपालन ट्रैकिंग ने हमारे सोर्सिंग समय को 60% कम कर दिया।"
                    </p>
                    <div>
                      <p className="font-bold text-lg text-gray-900">Rajesh Sharma</p>
                      <p className="text-blue-700">Head of Procurement, Leading CGD Company</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Start Sourcing CBG the Smart Way
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl mb-4 text-blue-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            स्मार्ट तरीके से CBG खरीदना शुरू करें
          </motion.p>
          <motion.p
            className="text-lg mb-10 text-blue-200 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Join India's leading Oil & Gas companies already sourcing certified CBG through UrjaVyapar.
            Enterprise-grade security. 24/7 support. PESO-compliant supply chain.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 text-xl px-10 py-7 h-auto font-bold shadow-2xl hover:shadow-3xl transition-all"
              >
                <Building2 className="mr-3 w-6 h-6" />
                Register Your Company
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-xl px-10 py-7 h-auto font-bold"
              >
                Schedule a Demo
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm">PESO Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-5 h-5" />
              <span className="text-sm">BIS Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              <span className="text-sm">Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span className="text-sm">24/7 Support</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UrjaVyapar;
