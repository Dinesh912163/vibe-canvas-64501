import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Activity,
  Bell,
  Cloud,
  Gauge,
  Settings,
  Shield,
  Wifi,
  CheckCircle,
  AlertCircle,
  Database,
  LineChart
} from "lucide-react";
import purificationUnit from "@/assets/biogas-facility.jpg";
import biogasOperator from "@/assets/farmers-working.jpg";
import biogasPlant from "@/assets/biogas-facility.jpg";

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

const ShuddhiDoot = () => {
  const features = [
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Live Purity Dashboard",
      titleHindi: "लाइव शुद्धता डैशबोर्ड",
      description: "Real-time CH₄ concentration, H₂S levels, and pressure monitoring with instant alerts",
      descriptionHindi: "तत्काल अलर्ट के साथ वास्तविक समय CH₄ सांद्रता, H₂S स्तर और दबाव की निगरानी"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Voice Alerts",
      titleHindi: "आवाज़ अलर्ट",
      description: "Hindi voice notifications for quality deviations, equipment failures, and safety issues",
      descriptionHindi: "गुणवत्ता विचलन, उपकरण विफलता और सुरक्षा मुद्दों के लिए हिंदी आवाज़ सूचनाएं"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Smart Maintenance",
      titleHindi: "स्मार्ट रखरखाव",
      description: "Predictive maintenance scheduler based on sensor data and operating hours",
      descriptionHindi: "सेंसर डेटा और संचालन घंटों के आधार पर भविष्य कहनेवाला रखरखाव शेड्यूलर"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Backup",
      titleHindi: "क्लाउड बैकअप",
      description: "Automatic data archiving with 5-year retention for compliance and audit trails",
      descriptionHindi: "अनुपालन और ऑडिट ट्रेल्स के लिए 5 साल की अवधारण के साथ स्वचालित डेटा संग्रहण"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "PESO Compliance",
      titleHindi: "PESO अनुपालन",
      description: "Automated quality certificates and compliance logs ready for regulatory inspections",
      descriptionHindi: "नियामक निरीक्षणों के लिए तैयार स्वचालित गुणवत्ता प्रमाणपत्र और अनुपालन लॉग"
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Performance Analytics",
      titleHindi: "प्रदर्शन विश्लेषण",
      description: "Track efficiency trends, energy consumption, and output quality over time",
      descriptionHindi: "समय के साथ दक्षता रुझान, ऊर्जा खपत और उत्पादन गुणवत्ता को ट्रैक करें"
    }
  ];

  const metrics = [
    {
      parameter: "CH₄ Purity",
      target: "≥ 95%",
      icon: <Gauge className="w-6 h-6" />,
      color: "green"
    },
    {
      parameter: "H₂S Level",
      target: "≤ 10 ppm",
      icon: <AlertCircle className="w-6 h-6" />,
      color: "orange"
    },
    {
      parameter: "Pressure",
      target: "200-250 bar",
      icon: <Activity className="w-6 h-6" />,
      color: "blue"
    },
    {
      parameter: "Uptime",
      target: "≥ 98%",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "purple"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Connect Your Sensors",
      description: "Integrate your purification unit's IoT sensors with ShuddhiDoot platform via WiFi/4G"
    },
    {
      number: "2",
      title: "Configure Alerts",
      description: "Set threshold limits for CH₄, H₂S, pressure, and receive voice alerts in Hindi/English"
    },
    {
      number: "3",
      title: "Monitor Live",
      description: "Access real-time dashboard from mobile or web - track purity, pressure, and performance"
    },
    {
      number: "4",
      title: "Automate Compliance",
      description: "Generate PESO-ready quality certificates and audit logs with one click"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-700 to-teal-900 opacity-95"></div>
        <div className="absolute inset-0">
          <img
            src={purificationUnit}
            alt="CBG Purification Unit"
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
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Wifi className="w-4 h-4" />
              <span>IoT-Enabled Purification Monitoring</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              ShuddhiDoot: Smart CBG Purification Monitor
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-teal-100">
              शुद्धि दूत - CBG शुद्धिकरण संयंत्रों के लिए IoT निगरानी प्लेटफॉर्म
            </p>
            <p className="text-lg mb-8 text-teal-50 max-w-3xl mx-auto leading-relaxed">
              Monitor CH₄ purity, pressure, and H₂S levels in real-time. Get voice alerts for quality
              deviations. Automate PESO compliance. Built for plant operators who demand precision.
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
                  className="bg-white text-teal-700 hover:bg-teal-50 text-lg px-8 py-6 h-auto font-semibold shadow-xl hover:shadow-2xl transition-all"
                >
                  <Wifi className="mr-2 w-5 h-5" />
                  Connect Your Plant
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto font-semibold"
                >
                  <Activity className="mr-2 w-5 h-5" />
                  View Live Demo
                </Button>
              </motion.div>
            </motion.div>
            <p className="mt-6 text-sm text-teal-200">
              Works with All Purification Units | WiFi/4G Enabled | PESO Certified
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Monitored */}
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
              Critical Parameters We Monitor 24/7
            </h2>
            <p className="text-xl text-gray-600">
              24/7 निगरानी वाले महत्वपूर्ण मापदंड
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {metrics.map((metric, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className={`p-6 text-center border-2 h-full ${
                metric.color === 'green' ? 'border-green-300 bg-gradient-to-br from-green-50 to-white' :
                metric.color === 'orange' ? 'border-orange-300 bg-gradient-to-br from-orange-50 to-white' :
                metric.color === 'blue' ? 'border-blue-300 bg-gradient-to-br from-blue-50 to-white' :
                'border-purple-300 bg-gradient-to-br from-purple-50 to-white'
              }`}>
                <div className={`w-14 h-14 mx-auto rounded-xl flex items-center justify-center text-white mb-4 shadow-lg ${
                  metric.color === 'green' ? 'bg-gradient-to-br from-green-600 to-green-700' :
                  metric.color === 'orange' ? 'bg-gradient-to-br from-orange-600 to-orange-700' :
                  metric.color === 'blue' ? 'bg-gradient-to-br from-blue-600 to-blue-700' :
                  'bg-gradient-to-br from-purple-600 to-purple-700'
                }`}>
                  {metric.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {metric.parameter}
                </h3>
                <p className="text-2xl font-bold text-gray-900 mb-1">
                  {metric.target}
                </p>
                <p className="text-xs text-gray-500">Target Range</p>
              </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Features Built for Plant Operators
            </h2>
            <p className="text-xl text-gray-600">
              संयंत्र संचालकों के लिए बनाई गई सुविधाएं
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
                  <Card className="p-6 hover:shadow-xl transition-shadow border-2 border-teal-100 hover:border-teal-300 bg-white h-full group">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm font-medium text-teal-600 mb-3">
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
              How ShuddhiDoot Works
            </h2>
            <p className="text-xl text-gray-600">
              4 स्टेप्स में अपने संयंत्र को कनेक्ट करें
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              {steps.map((step, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <motion.div
                    whileHover={{ scale: 1.02, x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="p-6 border-2 border-teal-200 hover:shadow-lg transition-shadow bg-gradient-to-r from-white to-teal-50">
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Visual Example */}
          <motion.div
            className="mt-16 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border-2 border-teal-200 shadow-2xl">
              <div className="grid md:grid-cols-2">
                <div>
                  <img
                    src={biogasPlant}
                    alt="Plant monitoring dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 bg-gradient-to-br from-teal-600 to-teal-700 text-white flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-6">
                    Real-Time Monitoring Dashboard
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Live CH₄ concentration graph with trend analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Instant voice alerts when parameters cross thresholds</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Maintenance scheduler with predictive recommendations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>One-click PESO compliance certificate generation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-b from-teal-50 to-white">
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
              <Card className="p-8 md:p-12 bg-white shadow-2xl border-2 border-teal-200">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <motion.img
                      src={biogasOperator}
                      alt="Plant Operator"
                      className="w-32 h-32 rounded-full border-4 border-teal-600 shadow-xl object-cover"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-6xl text-teal-600 mb-4">"</div>
                    <p className="text-xl md:text-2xl leading-relaxed mb-6 text-gray-800">
                      ShuddhiDoot ने हमारे प्लांट की क्वालिटी कंट्रोल को पूरी तरह बदल दिया। अब हमें पता चलता है
                      कि CH₄ पैरामीटर कब गलत हो रहा है, और हिंदी में आवाज़ अलर्ट मिलता है। PESO सर्टिफिकेट 1 क्लिक में बन जाता है!
                    </p>
                    <p className="text-lg italic mb-4 text-gray-600">
                      "ShuddhiDoot completely transformed our plant's quality control. Now we know when CH₄
                      parameters go wrong, and we get voice alerts in Hindi. PESO certificates are generated in 1 click!"
                    </p>
                    <div>
                      <p className="font-bold text-lg text-gray-900">संजय कुमार (Sanjay Kumar)</p>
                      <p className="text-teal-700">Plant Operator, 10 TPD CBG Plant, Uttar Pradesh</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Start Monitoring Your Purification Unit Today
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl mb-4 text-teal-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            आज ही अपने शुद्धिकरण यूनिट की निगरानी शुरू करें
          </motion.p>
          <motion.p
            className="text-lg mb-10 text-teal-200 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Connect your CBG purification plant to ShuddhiDoot. Real-time monitoring, voice alerts,
            predictive maintenance, and automated PESO compliance. Works with all equipment.
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
                className="bg-white text-teal-700 hover:bg-teal-50 text-xl px-10 py-7 h-auto font-bold shadow-2xl hover:shadow-3xl transition-all"
              >
                <Wifi className="mr-3 w-6 h-6" />
                Connect Your Plant Now
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-xl px-10 py-7 h-auto font-bold"
              >
                <Activity className="mr-3 w-6 h-6" />
                View Live Dashboard Demo
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <p className="text-4xl font-bold mb-2">150+</p>
              <p className="text-teal-200">Plants Connected</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <p className="text-4xl font-bold mb-2">99.8%</p>
              <p className="text-teal-200">Uptime Achieved</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <p className="text-4xl font-bold mb-2">24/7</p>
              <p className="text-teal-200">Real-Time Monitoring</p>
            </motion.div>
          </motion.div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 items-center text-sm">
            <div className="flex items-center gap-2">
              <Wifi className="w-4 h-4" />
              <span>WiFi/4G Compatible</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>PESO Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="w-4 h-4" />
              <span>Cloud Backup</span>
            </div>
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              <span>Voice Alerts</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShuddhiDoot;
