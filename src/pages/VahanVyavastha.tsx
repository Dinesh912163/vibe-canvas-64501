import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Truck,
  MapPin,
  Route,
  Fuel,
  WifiOff,
  IndianRupee,
  Clock,
  CheckCircle,
  Bell,
  BarChart3,
  Navigation,
  Package
} from "lucide-react";
import transportTruck from "@/assets/smart-transport.jpg";
import truckDriver from "@/assets/farmers-working.jpg";
import logisticsHub from "@/assets/biogas-cluster.jpg";

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

const VahanVyavastha = () => {
  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Real-Time GPS Tracking",
      titleHindi: "रीयल-टाइम GPS ट्रैकिंग",
      description: "Track every vehicle in your fleet with live location updates and route history",
      descriptionHindi: "लाइव लोकेशन अपडेट और रूट हिस्ट्री के साथ अपने फ्लीट में हर वाहन को ट्रैक करें"
    },
    {
      icon: <Route className="w-8 h-8" />,
      title: "Smart Route Optimization",
      titleHindi: "स्मार्ट रूट ऑप्टिमाइज़ेशन",
      description: "AI-powered route planning to save fuel and reduce delivery time by 30%",
      descriptionHindi: "ईंधन बचाने और डिलीवरी समय को 30% कम करने के लिए AI-संचालित रूट प्लानिंग"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Delivery Scheduling",
      titleHindi: "डिलीवरी शेड्यूलिंग",
      description: "Automated pickup and delivery scheduling with real-time notifications",
      descriptionHindi: "रीयल-टाइम नोटिफिकेशन के साथ स्वचालित पिकअप और डिलीवरी शेड्यूलिंग"
    },
    {
      icon: <Fuel className="w-8 h-8" />,
      title: "Fuel Management",
      titleHindi: "ईंधन प्रबंधन",
      description: "Monitor fuel consumption, track expenses, and detect anomalies instantly",
      descriptionHindi: "ईंधन की खपत की निगरानी करें, खर्चों को ट्रैक करें और विसंगतियों का तुरंत पता लगाएं"
    },
    {
      icon: <WifiOff className="w-8 h-8" />,
      title: "Offline Mode",
      titleHindi: "ऑफलाइन मोड",
      description: "Continue operations without internet - data syncs automatically when online",
      descriptionHindi: "बिना इंटरनेट के संचालन जारी रखें - ऑनलाइन होने पर डेटा स्वचालित रूप से सिंक होता है"
    },
    {
      icon: <IndianRupee className="w-8 h-8" />,
      title: "Payment Tracking",
      titleHindi: "भुगतान ट्रैकिंग",
      description: "Track freight payments, incentives, and driver earnings in one dashboard",
      descriptionHindi: "एक डैशबोर्ड में माल भाड़ा भुगतान, प्रोत्साहन और ड्राइवर की कमाई को ट्रैक करें"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Load Management",
      titleHindi: "लोड प्रबंधन",
      description: "Digital documentation of load details, quality checks, and delivery proof",
      descriptionHindi: "लोड विवरण, गुणवत्ता जांच और डिलीवरी प्रूफ का डिजिटल दस्तावेज़ीकरण"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Register Your Fleet",
      titleHindi: "अपने फ्लीट को पंजीकृत करें",
      description: "Add vehicles, drivers, and routes to the VahanVyavastha platform",
      descriptionHindi: "वाहन व्यवस्था प्लेटफॉर्म में वाहन, ड्राइवर और रूट जोड़ें"
    },
    {
      number: "2",
      title: "Install GPS Devices",
      titleHindi: "GPS उपकरण इंस्टॉल करें",
      description: "Easy plug-and-play GPS devices for all vehicle types",
      descriptionHindi: "सभी वाहन प्रकारों के लिए आसान प्लग-एंड-प्ले GPS उपकरण"
    },
    {
      number: "3",
      title: "Assign Deliveries",
      titleHindi: "डिलीवरी असाइन करें",
      description: "Schedule pickups and deliveries with automated route optimization",
      descriptionHindi: "स्वचालित रूट अनुकूलन के साथ पिकअप और डिलीवरी शेड्यूल करें"
    },
    {
      number: "4",
      title: "Track & Monitor",
      titleHindi: "ट्रैक और मॉनिटर करें",
      description: "Real-time visibility of all operations from mobile or web dashboard",
      descriptionHindi: "मोबाइल या वेब डैशबोर्ड से सभी संचालनों की रीयल-टाइम दृश्यता"
    }
  ];

  const benefits = [
    "30% reduction in fuel costs",
    "40% improvement in on-time deliveries",
    "Real-time load tracking for clients",
    "Automated toll & expense management",
    "Driver performance analytics",
    "Paperless POD (Proof of Delivery)"
  ];

  const stats = [
    { value: "2,500+", label: "Active Vehicles", labelHindi: "सक्रिय वाहन" },
    { value: "50K+", label: "Deliveries/Month", labelHindi: "डिलीवरी/माह" },
    { value: "98.5%", label: "On-Time Rate", labelHindi: "समय पर दर" },
    { value: "₹2Cr+", label: "Fuel Saved", labelHindi: "ईंधन बचाया" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-800 opacity-90"></div>
        <div className="absolute inset-0">
          <img
            src={transportTruck}
            alt="Transport fleet management"
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
              <Truck className="w-4 h-4" />
              <span>Smart Fleet Management Platform</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              VahanVyavastha: Track Every Mile, Save Every Rupee
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-amber-100">
              वाहन व्यवस्था - CBG परिवहन और लॉजिस्टिक्स के लिए स्मार्ट प्लेटफॉर्म
            </p>
            <p className="text-lg mb-8 text-amber-50 max-w-3xl mx-auto leading-relaxed">
              Real-time GPS tracking, route optimization, and automated scheduling for CBG
              transport operators. Reduce costs, improve efficiency, and delight your clients.
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
                  className="bg-white text-amber-700 hover:bg-amber-50 text-lg px-8 py-6 h-auto font-semibold shadow-xl hover:shadow-2xl transition-all"
                >
                  <Truck className="mr-2 w-5 h-5" />
                  Register Your Fleet
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto font-semibold"
                >
                  <BarChart3 className="mr-2 w-5 h-5" />
                  View Demo Dashboard
                </Button>
              </motion.div>
            </motion.div>
            <p className="mt-6 text-sm text-amber-200">
              Works with All Vehicle Types | Hindi Interface | Offline Capable
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} className="text-center" variants={fadeInUp}>
                <p className="text-4xl font-bold text-amber-600 mb-2">{stat.value}</p>
                <p className="text-gray-700 font-medium">{stat.label}</p>
                <p className="text-sm text-gray-500">{stat.labelHindi}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything Your Fleet Needs
            </h2>
            <p className="text-xl text-gray-600">
              आपके फ्लीट के लिए सब कुछ जो आवश्यक है
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
                  <Card className="p-6 hover:shadow-xl transition-shadow border-2 border-amber-100 hover:border-amber-300 bg-white h-full group">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm font-medium text-amber-600 mb-3">
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
              How VahanVyavastha Works
            </h2>
            <p className="text-xl text-gray-600">
              4 आसान स्टेप्स में अपने फ्लीट को डिजिटल बनाएं
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              {steps.map((step, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="p-8 bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200 hover:shadow-xl transition-shadow h-full">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-amber-600 font-semibold mb-3 text-sm">
                        {step.titleHindi}
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-2">
                        {step.description}
                      </p>
                      <p className="text-sm text-gray-500">
                        {step.descriptionHindi}
                      </p>
                    </div>
                  </div>
                </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Transport Operators Choose VahanVyavastha
              </h2>
              <p className="text-xl text-gray-600">
                परिवहन ऑपरेटर वाहन व्यवस्था क्यों चुनते हैं
              </p>
            </motion.div>
            <motion.div
              className="grid md:grid-cols-2 gap-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <motion.div
                    whileHover={{ scale: 1.03, x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="p-4 flex items-center gap-3 border-2 border-amber-200 hover:border-amber-400 transition-colors bg-white">
                      <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Dashboard Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border-2 border-amber-200 shadow-2xl">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <Navigation className="w-10 h-10" />
                    <h3 className="text-3xl font-bold">
                      Live Fleet Dashboard
                    </h3>
                  </div>
                  <p className="text-lg mb-6 text-amber-100">
                    Monitor your entire fleet from one powerful dashboard
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Real-time location of all vehicles on interactive map</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Instant alerts for delays, route deviations, and emergencies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Automated trip reports and fuel consumption analytics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Driver behavior scoring and performance insights</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <img
                    src={logisticsHub}
                    alt="VahanVyavastha Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
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
              <Card className="p-8 md:p-12 bg-white shadow-2xl border-2 border-amber-200">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <motion.img
                      src={truckDriver}
                      alt="Transport Operator"
                      className="w-32 h-32 rounded-full border-4 border-amber-600 shadow-xl object-cover"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-6xl text-amber-600 mb-4">"</div>
                    <p className="text-xl md:text-2xl leading-relaxed mb-6 text-gray-800">
                      VahanVyavastha ने हमारे ट्रांसपोर्ट बिजनेस को पूरी तरह बदल दिया। अब हमें पता है कि हर ट्रक कहां है,
                      ईंधन की खपत कितनी है, और डिलीवरी समय पर होगी या नहीं। 30% तक डीजल की बचत हुई!
                    </p>
                    <p className="text-lg italic mb-4 text-gray-600">
                      "VahanVyavastha completely transformed our transport business. Now we know where every truck is,
                      fuel consumption levels, and whether deliveries will be on time. We've saved 30% on diesel costs!"
                    </p>
                    <div>
                      <p className="font-bold text-lg text-gray-900">रमेश कुमार (Ramesh Kumar)</p>
                      <p className="text-amber-700">Fleet Owner, 50+ Vehicles, Haryana</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-amber-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Start Optimizing Your Fleet Today
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl mb-4 text-amber-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            आज ही अपने फ्लीट को ऑप्टिमाइज़ करना शुरू करें
          </motion.p>
          <motion.p
            className="text-lg mb-10 text-amber-200 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Join 2,500+ transport operators saving fuel, reducing delays, and growing their business
            with VahanVyavastha. Free GPS device with first registration.
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
                className="bg-white text-amber-700 hover:bg-amber-50 text-xl px-10 py-7 h-auto font-bold shadow-2xl hover:shadow-3xl transition-all"
              >
                <Truck className="mr-3 w-6 h-6" />
                Register Your Fleet Now
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-xl px-10 py-7 h-auto font-bold"
              >
                <MapPin className="mr-3 w-6 h-6" />
                View Live Demo
              </Button>
            </motion.div>
          </motion.div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 items-center text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Free GPS Device</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Hindi Interface</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Offline Mode</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VahanVyavastha;
