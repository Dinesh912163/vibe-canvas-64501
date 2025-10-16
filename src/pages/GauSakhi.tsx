import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Smartphone,
  Mic,
  MapPin,
  WifiOff,
  Bell,
  TrendingUp,
  CheckCircle,
  Download,
  Play
} from "lucide-react";
import farmerWithPhone from "@/assets/farmers-working.jpg";
import fieldWorker from "@/assets/farmers-working.jpg";
import happyFarmer from "@/assets/farmer-payment.jpg";

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

const GauSakhi = () => {
  const features = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Voice Data Entry",
      titleHindi: "आवाज़ से डेटा भरें",
      description: "Record cow dung collection in Hindi using your voice - no typing needed",
      descriptionHindi: "हिंदी में आवाज़ से गोबर संग्रह रिकॉर्ड करें - टाइपिंग की जरूरत नहीं"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Live Truck Tracking",
      titleHindi: "ट्रक ट्रैकिंग",
      description: "Track collection vehicles in real-time with GPS mapping",
      descriptionHindi: "GPS मैपिंग के साथ संग्रह वाहनों को ट्रैक करें"
    },
    {
      icon: <WifiOff className="w-8 h-8" />,
      title: "Offline Mode",
      titleHindi: "बिना इंटरनेट काम करे",
      description: "Continue working even without internet - data syncs automatically",
      descriptionHindi: "बिना इंटरनेट के भी काम करें - डेटा अपने आप सिंक हो जाता है"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Smart Reminders",
      titleHindi: "स्मार्ट रिमाइंडर",
      description: "Get Hindi voice alerts for daily collection schedules",
      descriptionHindi: "दैनिक संग्रह समय पर हिंदी आवाज़ अलर्ट पाएं"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Payment Tracking",
      titleHindi: "भुगतान ट्रैकिंग",
      description: "Monitor your earnings and payment status instantly",
      descriptionHindi: "अपनी कमाई और भुगतान की स्थिति तुरंत देखें"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Check",
      titleHindi: "गुणवत्ता जांच",
      description: "Simple photo-based quality verification at collection point",
      descriptionHindi: "संग्रह स्थल पर फोटो आधारित गुणवत्ता सत्यापन"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Download & Register",
      titleHindi: "डाउनलोड और पंजीकरण",
      description: "Install GauSakhi app and register with your mobile number",
      descriptionHindi: "गौ सखी ऐप इंस्टॉल करें और अपने मोबाइल नंबर से पंजीकृत करें"
    },
    {
      number: "2",
      title: "Record Collection",
      titleHindi: "संग्रह रिकॉर्ड करें",
      description: "Use voice to record cow dung quantity, location, and quality",
      descriptionHindi: "गोबर की मात्रा, स्थान और गुणवत्ता रिकॉर्ड करने के लिए आवाज़ का उपयोग करें"
    },
    {
      number: "3",
      title: "Track & Deliver",
      titleHindi: "ट्रैक और वितरण",
      description: "Follow truck location and ensure timely delivery to biogas plant",
      descriptionHindi: "ट्रक के स्थान को फॉलो करें और बायोगैस प्लांट को समय पर डिलीवरी सुनिश्चित करें"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 opacity-90"></div>
        <div className="absolute inset-0">
          <img
            src={farmerWithPhone}
            alt="Farmer using mobile app"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center text-white"
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
              गौ सेवा का डिजिटल साथी
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              GauSakhi: Your Trusted Field Companion
            </motion.h1>
            <p className="text-xl md:text-2xl mb-4 text-green-50">
              गौ सखी - गौशाला कार्यकर्ताओं के लिए आसान मोबाइल ऐप
            </p>
            <p className="text-lg mb-8 text-green-100 max-w-3xl mx-auto leading-relaxed">
              Record cow dung collection with voice commands in Hindi. Track trucks, manage payments,
              and work offline. Built specifically for Gau-sewa workers and Gaushalas.
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
                  className="bg-white text-green-700 hover:bg-green-50 text-lg px-8 py-6 h-auto font-semibold shadow-xl hover:shadow-2xl transition-all"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download App Now
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto font-semibold"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
            <motion.p
              className="mt-6 text-sm text-green-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Available on Android | Works in Hindi & English | Free to use
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Field Workers Love GauSakhi
            </h2>
            <p className="text-xl text-gray-600">
              सुविधाएं जो आपका काम आसान बनाती हैं
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-2 border-green-100 hover:border-green-300 hover:-translate-y-2 group">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300"
                  >
                    {feature.icon}
                  </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm font-medium text-green-600 mb-3">
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
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              कैसे काम करता है - सिर्फ 3 आसान स्टेप्स
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-xl">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-green-600 font-semibold mb-3">
                      {step.titleHindi}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-2">
                      {step.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      {step.descriptionHindi}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-1 bg-gradient-to-r from-green-400 to-green-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Visual Example */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-white to-green-50 border-2 border-green-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src={fieldWorker}
                    alt="Field worker using GauSakhi app"
                    className="rounded-xl shadow-2xl"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Built for Rural India
                  </h3>
                  <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                    GauSakhi understands the challenges of field work - poor connectivity,
                    language barriers, and the need for speed.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Works perfectly on basic Android phones</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Hindi voice commands - no English needed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Offline mode saves data without internet</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-green-600 to-green-700 text-white shadow-2xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <img
                    src={happyFarmer}
                    alt="Ram Singh - GauSakhi User"
                    className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-6xl text-green-300 mb-4">"</div>
                  <p className="text-xl md:text-2xl leading-relaxed mb-6">
                    पहले मुझे रजिस्टर में सब कुछ लिखना पड़ता था। अब बस बोल देता हूं और गौ सखी ऐप सब रिकॉर्ड कर लेता है।
                    बहुत आसान हो गया काम!
                  </p>
                  <p className="text-lg italic mb-4 text-green-100">
                    "Earlier I had to write everything in a register. Now I just speak and GauSakhi app
                    records everything. Work has become so easy!"
                  </p>
                  <div>
                    <p className="font-bold text-lg">राम सिंह (Ram Singh)</p>
                    <p className="text-green-200">Gau-sewa Worker, Vrindavan Gaushala, Mathura</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Simplify Your Field Work?
          </h2>
          <p className="text-xl md:text-2xl mb-4 text-green-100">
            अपना काम आसान बनाएं - आज ही गौ सखी डाउनलोड करें
          </p>
          <p className="text-lg mb-10 text-green-200 max-w-3xl mx-auto">
            Join 5,000+ Gau-sewa workers already using GauSakhi across India.
            Free to download. Available in Hindi. Works offline.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-green-700 hover:bg-green-50 text-xl px-10 py-7 h-auto font-bold shadow-2xl hover:shadow-3xl transition-all"
            >
              <Download className="mr-3 w-6 h-6" />
              Download for Android
            </Button>
            <div className="text-left">
              <p className="text-sm text-green-200">Scan QR code to download:</p>
              <div className="w-24 h-24 bg-white rounded-lg mt-2 flex items-center justify-center">
                <Smartphone className="w-12 h-12 text-green-600" />
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <p className="text-4xl font-bold mb-2">5,000+</p>
              <p className="text-green-200">Active Users</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">15 States</p>
              <p className="text-green-200">Pan-India Coverage</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">4.8★</p>
              <p className="text-green-200">User Rating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GauSakhi;
