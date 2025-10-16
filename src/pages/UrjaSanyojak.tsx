import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  MapPin,
  Calculator,
  IndianRupee,
  Users,
  FileCheck,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Target,
  Lightbulb
} from "lucide-react";
import biogasPlant from "@/assets/biogas-facility.jpg";
import farmerEntrepreneur from "@/assets/farmers-working.jpg";
import happyFarmers from "@/assets/farmer-payment.jpg";
import biogasCluster from "@/assets/biogas-cluster.jpg";

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

const UrjaSanyojak = () => {
  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Interactive Map Portal",
      titleHindi: "इंटरैक्टिव मैप पोर्टल",
      description: "Explore CBG potential across India with state-wise demand and supply mapping",
      descriptionHindi: "राज्य-वार मांग और आपूर्ति मैपिंग के साथ भारत में CBG क्षमता का पता लगाएं"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Feasibility Calculator",
      titleHindi: "व्यवहार्यता कैलकुलेटर",
      description: "Instant CBG potential assessment based on feedstock availability and location",
      descriptionHindi: "फीडस्टॉक उपलब्धता और स्थान के आधार पर तत्काल CBG क्षमता मूल्यांकन"
    },
    {
      icon: <IndianRupee className="w-8 h-8" />,
      title: "Subsidy Navigator",
      titleHindi: "सब्सिडी नेविगेटर",
      description: "Complete guidance on MNRE subsidies, state incentives, and financing options",
      descriptionHindi: "MNRE सब्सिडी, राज्य प्रोत्साहन और वित्तपोषण विकल्पों पर पूर्ण मार्गदर्शन"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Buyer Connection",
      titleHindi: "खरीदार कनेक्शन",
      description: "Direct connect with IOCL, GAIL, and CGDs for offtake agreements",
      descriptionHindi: "ऑफटेक समझौतों के लिए IOCL, GAIL और CGDs से सीधे जुड़ें"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "License Support",
      titleHindi: "लाइसेंस सहायता",
      description: "Step-by-step PESO licensing and regulatory compliance assistance",
      descriptionHindi: "चरण-दर-चरण PESO लाइसेंसिंग और नियामक अनुपालन सहायता"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business Planning",
      titleHindi: "व्यवसाय योजना",
      description: "AI-powered ROI projections, revenue forecasts, and market analysis",
      descriptionHindi: "AI-संचालित ROI अनुमान, राजस्व पूर्वानुमान और बाजार विश्लेषण"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Check Your Potential",
      titleHindi: "अपनी क्षमता जांचें",
      description: "Enter feedstock type, daily quantity, and location to get instant CBG feasibility report",
      descriptionHindi: "तत्काल CBG व्यवहार्यता रिपोर्ट पाने के लिए फीडस्टॉक प्रकार, दैनिक मात्रा और स्थान दर्ज करें"
    },
    {
      number: "2",
      title: "Get Subsidy Roadmap",
      titleHindi: "सब्सिडी रोडमैप प्राप्त करें",
      description: "Receive personalized subsidy eligibility and application guidance for your project",
      descriptionHindi: "अपनी परियोजना के लिए व्यक्तिगत सब्सिडी पात्रता और आवेदन मार्गदर्शन प्राप्त करें"
    },
    {
      number: "3",
      title: "Connect with Buyers",
      titleHindi: "खरीदारों से जुड़ें",
      description: "Match with potential corporate buyers and explore offtake agreements",
      descriptionHindi: "संभावित कॉर्पोरेट खरीदारों से मिलें और ऑफटेक समझौतों का पता लगाएं"
    },
    {
      number: "4",
      title: "Join the Network",
      titleHindi: "नेटवर्क में शामिल हों",
      description: "Register your plant and become part of India's SAUBHAGYA CBG ecosystem",
      descriptionHindi: "अपने संयंत्र को पंजीकृत करें और भारत के SAUBHAGYA CBG पारिस्थितिकी तंत्र का हिस्सा बनें"
    }
  ];

  const benefits = [
    "Free feasibility assessment within 24 hours",
    "Access to ₹10 Cr+ subsidy database",
    "Direct buyer introductions",
    "Technology partner network",
    "PESO licensing hand-holding",
    "Financial modeling templates"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-800 opacity-90"></div>
        <div className="absolute inset-0">
          <img
            src={biogasPlant}
            alt="Biogas plant potential"
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
              Turn Your Biomass into Business
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              UrjaSanyojak: Your CBG Journey Starts Here
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-orange-100">
              ऊर्जा संयोजक - बायोगैस संयंत्र मालिकों के लिए व्यवहार्यता और ऑनबोर्डिंग पोर्टल
            </p>
            <p className="text-lg mb-8 text-orange-50 max-w-3xl mx-auto leading-relaxed">
              Discover your CBG production potential, access MNRE subsidies, connect with corporate buyers,
              and join India's national biogas-to-CBG mission with expert guidance at every step.
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
                  className="bg-white text-orange-700 hover:bg-orange-50 text-lg px-8 py-6 h-auto font-semibold shadow-xl hover:shadow-2xl transition-all"
                >
                  <Calculator className="mr-2 w-5 h-5" />
                  Check Your CBG Potential
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto font-semibold"
                >
                  <MapPin className="mr-2 w-5 h-5" />
                  Explore Map Portal
                </Button>
              </motion.div>
            </motion.div>
            <p className="mt-6 text-sm text-orange-200">
              Free Assessment | MNRE Aligned | Pan-India Coverage
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              Everything You Need to Start Your CBG Plant
            </h2>
            <p className="text-xl text-gray-600">
              अपने CBG संयंत्र को शुरू करने के लिए आवश्यक सब कुछ
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
                  <Card className="p-6 hover:shadow-xl transition-shadow border-2 border-orange-100 hover:border-orange-300 h-full group">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm font-medium text-orange-600 mb-3">
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
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Path to CBG Production
            </h2>
            <p className="text-xl text-gray-600">
              CBG उत्पादन का आपका रास्ता - 4 आसान स्टेप्स
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
                    <Card className="p-8 bg-white border-2 border-orange-200 hover:shadow-xl transition-shadow h-full group">
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <motion.div
                            className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            {step.number}
                          </motion.div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-orange-600 font-semibold mb-3 text-sm">
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

      {/* Feasibility Calculator Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border-2 border-orange-200 shadow-2xl">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <Calculator className="w-10 h-10" />
                    <h3 className="text-3xl font-bold">
                      Free Feasibility Calculator
                    </h3>
                  </div>
                  <p className="text-lg mb-6 text-orange-100">
                    Get instant assessment of your CBG production potential
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <p className="font-semibold mb-1">Input Required:</p>
                      <ul className="text-sm space-y-1 text-orange-100">
                        <li>• Feedstock type (cattle dung, crop residue, etc.)</li>
                        <li>• Daily availability (in MT)</li>
                        <li>• Your location (state/district)</li>
                      </ul>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <p className="font-semibold mb-1">You'll Receive:</p>
                      <ul className="text-sm space-y-1 text-orange-100">
                        <li>• Estimated CBG production capacity</li>
                        <li>• Revenue projections</li>
                        <li>• Subsidy eligibility</li>
                        <li>• Nearby buyer contacts</li>
                      </ul>
                    </div>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      className="bg-white text-orange-700 hover:bg-orange-50 w-full"
                    >
                      <Calculator className="mr-2 w-5 h-5" />
                      Run Feasibility Check Now
                    </Button>
                  </motion.div>
                </div>
                <div className="relative">
                  <img
                    src={biogasCluster}
                    alt="CBG Plant Feasibility"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <p className="text-sm mb-2">Example Output:</p>
                      <p className="font-bold text-2xl">15 TPD CBG Capacity</p>
                      <p className="text-orange-200">Based on 100 MT/day cattle dung</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
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
                Why Plant Owners Trust UrjaSanyojak
              </h2>
              <p className="text-xl text-gray-600">
                संयंत्र मालिक ऊर्जा संयोजक पर भरोसा क्यों करते हैं
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
                    <Card className="p-4 flex items-center gap-3 border-2 border-orange-200 hover:border-orange-400 transition-colors">
                      <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
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
              <Card className="p-8 md:p-12 bg-gradient-to-br from-orange-600 to-orange-700 text-white shadow-2xl">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <motion.img
                      src={farmerEntrepreneur}
                      alt="Biogas Plant Owner"
                      className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-6xl text-orange-300 mb-4">"</div>
                    <p className="text-xl md:text-2xl leading-relaxed mb-6">
                      UrjaSanyojak ने मेरे सपने को साकार किया। फीजिबिलिटी कैलकुलेटर ने 10 TPD क्षमता दिखाई,
                      सब्सिडी गाइडेंस मिला, और IOCL से सीधे ऑफटेक एग्रीमेंट हुआ। अब हमारा संयंत्र चालू है!
                    </p>
                    <p className="text-lg italic mb-4 text-orange-100">
                      "UrjaSanyojak turned my dream into reality. The calculator showed 10 TPD capacity,
                      I got subsidy guidance, and direct offtake agreement with IOCL. Now our plant is operational!"
                    </p>
                    <div>
                      <p className="font-bold text-lg">विकास पटेल (Vikas Patel)</p>
                      <p className="text-orange-200">CBG Plant Owner, Gujarat</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Discover Your CBG Potential Today
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl mb-4 text-orange-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            आज ही अपनी CBG क्षमता का पता लगाएं
          </motion.p>
          <motion.p
            className="text-lg mb-10 text-orange-200 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Free feasibility assessment. MNRE subsidy guidance. Direct buyer connections.
            Join 500+ biogas plant owners in the SAUBHAGYA network.
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
                className="bg-white text-orange-700 hover:bg-orange-50 text-xl px-10 py-7 h-auto font-bold shadow-2xl hover:shadow-3xl transition-all"
              >
                <Calculator className="mr-3 w-6 h-6" />
                Check Feasibility Now
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-xl px-10 py-7 h-auto font-bold"
              >
                <MapPin className="mr-3 w-6 h-6" />
                Explore Map Portal
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
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-orange-200">Plants Registered</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <p className="text-4xl font-bold mb-2">₹1000Cr+</p>
              <p className="text-orange-200">Subsidies Facilitated</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <p className="text-4xl font-bold mb-2">24 Hours</p>
              <p className="text-orange-200">Feasibility Report</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UrjaSanyojak;
