import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  LayoutDashboard,
  FlaskConical,
  ShoppingCart,
  MonitorDot,
  Truck,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Card } from "@/components/ui/card";

export const WorkingFlow = () => {
  const [isHindi, setIsHindi] = useState(false);

  const steps = [
    {
      id: 1,
      icon: Smartphone,
      title: "Field Executive Mobile App",
      titleHindi: "फील्ड एक्जीक्यूटिव मोबाइल ऐप",
      subtitle: "Farmer & Collection Management",
      subtitleHindi: "किसान और संग्रह प्रबंधन",
      image: "/attached_assets/stock_images/field_worker_farmer__bacc0519.jpg",
      features: [
        "Register farmers and cattle with RFID-based identification",
        "Collect and record daily cattle dung data with GPS-based tracking",
        "Perform on-site quality checks and instant digital payments",
        "Operate fully offline with auto-sync for remote areas"
      ],
      featuresHindi: [
        "RFID-आधारित पहचान के साथ किसानों और पशुओं को पंजीकृत करें",
        "GPS-आधारित ट्रैकिंग के साथ दैनिक गोबर डेटा एकत्र और रिकॉर्ड करें",
        "साइट पर गुणवत्ता जांच और तत्काल डिजिटल भुगतान करें",
        "दूरदराज के क्षेत्रों के लिए ऑटो-सिंक के साथ पूरी तरह से ऑफलाइन काम करें"
      ],
      nextStep: "All verified collection data flows to the cluster manager portal for processing",
      nextStepHindi: "सभी सत्यापित संग्रह डेटा प्रसंस्करण के लिए क्लस्टर मैनेजर पोर्टल पर जाता है"
    },
    {
      id: 2,
      icon: LayoutDashboard,
      title: "Cluster Manager Portal",
      titleHindi: "क्लस्टर मैनेजर पोर्टल",
      subtitle: "Supply Chain & Digestion Monitoring",
      subtitleHindi: "आपूर्ति श्रृंखला और पाचन निगरानी",
      image: "/attached_assets/stock_images/admin_dashboard_mana_71236347.jpg",
      features: [
        "Monitor daily waste inflow from field executives",
        "Oversee digester performance, gas output, and maintenance activities",
        "Manage workforce, equipment, and resource distribution efficiently",
        "Analyze production and supply-chain trends with live dashboards"
      ],
      featuresHindi: [
        "फील्ड एक्जीक्यूटिव से दैनिक अपशिष्ट प्रवाह की निगरानी करें",
        "डाइजेस्टर प्रदर्शन, गैस उत्पादन और रखरखाव गतिविधियों की देखरेख करें",
        "कार्यबल, उपकरण और संसाधन वितरण को कुशलता से प्रबंधित करें",
        "लाइव डैशबोर्ड के साथ उत्पादन और आपूर्ति-श्रृंखला रुझानों का विश्लेषण करें"
      ],
      nextStep: "Processed data and digester output move to purification units for gas refinement",
      nextStepHindi: "प्रसंस्कृत डेटा और डाइजेस्टर आउटपुट गैस शुद्धिकरण के लिए शुद्धिकरण इकाइयों में जाता है"
    },
    {
      id: 3,
      icon: FlaskConical,
      title: "Purification Unit App",
      titleHindi: "शुद्धिकरण इकाई ऐप",
      subtitle: "Gas Quality & Plant Operations",
      subtitleHindi: "गैस गुणवत्ता और संयंत्र संचालन",
      image: "/attached_assets/stock_images/purification_unit_wa_8c29fed8.jpg",
      features: [
        "Monitor methane levels and gas purity in real time",
        "Manage purification processes and equipment maintenance",
        "Certify gas batches with quality compliance and safety checks",
        "Track performance and predict maintenance requirements"
      ],
      featuresHindi: [
        "वास्तविक समय में मीथेन स्तर और गैस शुद्धता की निगरानी करें",
        "शुद्धिकरण प्रक्रियाओं और उपकरण रखरखाव का प्रबंधन करें",
        "गुणवत्ता अनुपालन और सुरक्षा जांच के साथ गैस बैच को प्रमाणित करें",
        "प्रदर्शन को ट्रैक करें और रखरखाव आवश्यकताओं की भविष्यवाणी करें"
      ],
      nextStep: "Purified and certified gas data are sent to the sales platform for distribution",
      nextStepHindi: "शुद्ध और प्रमाणित गैस डेटा वितरण के लिए बिक्री मंच पर भेजा जाता है"
    },
    {
      id: 4,
      icon: ShoppingCart,
      title: "Sales & Distribution Platform",
      titleHindi: "बिक्री और वितरण मंच",
      subtitle: "CBG Market & Revenue Management",
      subtitleHindi: "CBG बाजार और राजस्व प्रबंधन",
      image: "/attached_assets/stock_images/corporate_sales_busi_62a60cae.jpg",
      features: [
        "Maintain real-time inventory and automate stock alerts",
        "Handle customer orders, quotations, and delivery workflows",
        "Generate invoices, manage payments, and monitor pricing trends",
        "Track revenue, demand, and market analytics across regions"
      ],
      featuresHindi: [
        "वास्तविक समय की इन्वेंट्री बनाए रखें और स्टॉक अलर्ट को स्वचालित करें",
        "ग्राहक ऑर्डर, उद्धरण और डिलीवरी वर्कफ़्लो को संभालें",
        "चालान उत्पन्न करें, भुगतान प्रबंधित करें और मूल्य निर्धारण रुझानों की निगरानी करें",
        "क्षेत्रों में राजस्व, मांग और बाजार विश्लेषण को ट्रैक करें"
      ],
      nextStep: "All sales and performance metrics are integrated with the central dashboard",
      nextStepHindi: "सभी बिक्री और प्रदर्शन मेट्रिक्स केंद्रीय डैशबोर्ड के साथ एकीकृत हैं"
    },
    {
      id: 5,
      icon: MonitorDot,
      title: "Central Oversight Dashboard",
      titleHindi: "केंद्रीय निरीक्षण डैशबोर्ड",
      subtitle: "Governance & Analytics Hub",
      subtitleHindi: "शासन और विश्लेषण केंद्र",
      image: "/attached_assets/stock_images/technology_platform__a4f4b0ee.jpg",
      features: [
        "Manage users, devices, and audit logs across all modules",
        "Generate reports for revenue, carbon credits, and compliance",
        "Monitor daily operations, CBG output, and farmer earnings",
        "Use predictive analytics for expansion and policy decisions"
      ],
      featuresHindi: [
        "सभी मॉड्यूल में उपयोगकर्ताओं, उपकरणों और ऑडिट लॉग का प्रबंधन करें",
        "राजस्व, कार्बन क्रेडिट और अनुपालन के लिए रिपोर्ट उत्पन्न करें",
        "दैनिक संचालन, CBG उत्पादन और किसान की कमाई की निगरानी करें",
        "विस्तार और नीति निर्णयों के लिए भविष्य कहनेवाला विश्लेषण का उपयोग करें"
      ],
      nextStep: "Insights from analytics guide logistics planning and operational optimization",
      nextStepHindi: "विश्लेषण से अंतर्दृष्टि लॉजिस्टिक्स योजना और परिचालन अनुकूलन का मार्गदर्शन करती है"
    },
    {
      id: 6,
      icon: Truck,
      title: "Logistics Management System",
      titleHindi: "लॉजिस्टिक्स प्रबंधन प्रणाली",
      subtitle: "Pickup & Delivery Operations",
      subtitleHindi: "पिकअप और डिलीवरी संचालन",
      image: "/attached_assets/stock_images/transport_truck_deli_467fdb44.jpg",
      features: [
        "Schedule CBG pickups and deliveries with GPS-based tracking",
        "Enable real-time route monitoring and delivery notifications",
        "Capture proof of delivery with images and digital confirmation",
        "Provide full offline route support for rural and low-network areas"
      ],
      featuresHindi: [
        "GPS-आधारित ट्रैकिंग के साथ CBG पिकअप और डिलीवरी को शेड्यूल करें",
        "वास्तविक समय मार्ग निगरानी और डिलीवरी सूचनाएं सक्षम करें",
        "छवियों और डिजिटल पुष्टि के साथ डिलीवरी का प्रमाण कैप्चर करें",
        "ग्रामीण और कम-नेटवर्क वाले क्षेत्रों के लिए पूर्ण ऑफलाइन मार्ग समर्थन प्रदान करें"
      ],
      nextStep: "Completes the operational loop — real-time logistics and field data feed back to Step 1 for continuous process improvement",
      nextStepHindi: "परिचालन लूप को पूरा करता है — वास्तविक समय लॉजिस्टिक्स और फील्ड डेटा निरंतर प्रक्रिया सुधार के लिए चरण 1 पर वापस फीड करता है"
    }
  ];

  const toggleLanguage = (language: 'english' | 'hindi') => {
    setIsHindi(language === 'hindi');
  };

  return (
    <section className={`py-24 transition-all duration-500 ${
      isHindi ? 'bg-gradient-to-br from-green-50 to-teal-50' : 'bg-gradient-to-br from-blue-50 to-cyan-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Language Toggle Headers */}
          <div className="text-center mb-16">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-8">
              <button
                onClick={() => toggleLanguage('english')}
                className={`text-2xl sm:text-3xl md:text-5xl font-bold transition-all duration-300 ease-in-out hover:scale-105 ${
                  !isHindi
                    ? 'text-primary border-b-4 border-primary pb-2'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                About Saubhagya Project
              </button>

              <div className="hidden sm:block text-2xl text-muted-foreground">|</div>

              <button
                onClick={() => toggleLanguage('hindi')}
                className={`text-2xl sm:text-3xl md:text-5xl font-bold transition-all duration-300 ease-in-out hover:scale-105 ${
                  isHindi
                    ? 'text-primary border-b-4 border-primary pb-2'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                सौभाग्य परियोजना के बारे में
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={isHindi ? 'hindi-objective' : 'english-objective'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-5xl mx-auto"
              >
                <div className={`bg-gradient-to-r ${
                  isHindi
                    ? 'from-green-500 to-teal-600'
                    : 'from-blue-600 to-cyan-600'
                } text-white rounded-2xl p-8 shadow-2xl mb-8`}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {isHindi ? '🎯 मुख्य उद्देश्य' : '🎯 Main Objective'}
                  </h3>
                  <p className="text-lg md:text-xl leading-relaxed">
                    {isHindi
                      ? 'ग्रामीण किसानों को सशक्त बनाना पशु गोबर और कृषि अपशिष्ट को संपीड़ित बायोगैस (CBG) में परिवर्तित करके — एक स्थायी, पारदर्शी परिपत्र अर्थव्यवस्था का निर्माण करना जो किसानों, ऑपरेटरों और ऊर्जा बाजारों को जोड़ती है।'
                      : 'To empower rural farmers by transforming cattle dung and agricultural waste into Compressed Biogas (CBG) — building a sustainable, transparent circular economy that connects farmers, operators, and energy markets.'
                    }
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Steps Flow */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.id}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isHindi ? `hindi-${step.id}` : `english-${step.id}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className={`overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 ${
                      isHindi ? 'bg-gradient-to-br from-green-50 to-white' : 'bg-gradient-to-br from-blue-50 to-white'
                    }`}>
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Image Section */}
                        <div className={`relative h-80 md:h-auto overflow-hidden ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10"></div>
                          <img
                            src={step.image}
                            alt={isHindi ? step.titleHindi : step.title}
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute top-6 left-6 z-20">
                            <div className={`w-20 h-20 rounded-2xl ${
                              isHindi
                                ? 'bg-gradient-to-br from-green-500 to-teal-600'
                                : 'bg-gradient-to-br from-blue-600 to-cyan-600'
                            } flex items-center justify-center shadow-2xl`}>
                              <step.icon className="w-10 h-10 text-white" />
                            </div>
                          </div>
                          <div className="absolute top-6 right-6 z-20">
                            <div className={`w-16 h-16 rounded-full ${
                              isHindi
                                ? 'bg-gradient-to-br from-green-600 to-teal-700'
                                : 'bg-gradient-to-br from-blue-700 to-cyan-700'
                            } flex items-center justify-center shadow-2xl border-4 border-white`}>
                              <span className="text-white text-2xl font-bold">{step.id}</span>
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className={`p-8 md:p-10 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                          <motion.div
                            key={isHindi ? `content-hindi-${step.id}` : `content-english-${step.id}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                              {isHindi ? step.titleHindi : step.title}
                            </h3>
                            <p className={`text-lg font-medium mb-6 ${
                              isHindi ? 'text-green-600' : 'text-blue-600'
                            }`}>
                              {isHindi ? step.subtitleHindi : step.subtitle}
                            </p>

                            <div className="space-y-4 mb-6">
                              {(isHindi ? step.featuresHindi : step.features).map((feature, featureIndex) => (
                                <motion.div
                                  key={featureIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: featureIndex * 0.1 }}
                                  className="flex gap-3 items-start"
                                >
                                  <CheckCircle2 className={`w-6 h-6 flex-shrink-0 mt-0.5 ${
                                    isHindi ? 'text-green-600' : 'text-blue-600'
                                  }`} />
                                  <p className="text-gray-700 leading-relaxed">{feature}</p>
                                </motion.div>
                              ))}
                            </div>

                            {/* Next Step Arrow */}
                            <div className={`mt-8 p-5 rounded-xl ${
                              isHindi
                                ? 'bg-gradient-to-r from-green-100 to-teal-100 border-l-4 border-green-600'
                                : 'bg-gradient-to-r from-blue-100 to-cyan-100 border-l-4 border-blue-600'
                            }`}>
                              <div className="flex items-start gap-3">
                                <ArrowRight className={`w-6 h-6 flex-shrink-0 mt-1 ${
                                  isHindi ? 'text-green-700' : 'text-blue-700'
                                }`} />
                                <p className={`font-medium ${
                                  isHindi ? 'text-green-900' : 'text-blue-900'
                                }`}>
                                  {isHindi ? step.nextStepHindi : step.nextStep}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </AnimatePresence>

                {/* Arrow Connector Between Steps */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                      className={`w-12 h-12 rounded-full ${
                        isHindi
                          ? 'bg-gradient-to-br from-green-500 to-teal-600'
                          : 'bg-gradient-to-br from-blue-600 to-cyan-600'
                      } flex items-center justify-center shadow-xl`}
                    >
                      <ArrowRight className="w-6 h-6 text-white transform rotate-90" />
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isHindi ? 'hindi-summary' : 'english-summary'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`bg-gradient-to-r ${
                  isHindi
                    ? 'from-green-600 to-teal-700'
                    : 'from-blue-700 to-cyan-700'
                } text-white rounded-2xl p-10 shadow-2xl`}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                  {isHindi ? '🔁 एंड-टू-एंड फ्लो सारांश' : '🔁 End-to-End Flow Summary'}
                </h3>
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-semibold mb-6">
                    {isHindi
                      ? 'किसान → संग्रह → पाचन → शुद्धिकरण → बिक्री → निरीक्षण → लॉजिस्टिक्स → फील्ड संचालन में वापस'
                      : 'Farmer → Collection → Digestion → Purification → Sales → Oversight → Logistics → Back to Field Operations'
                    }
                  </p>
                  <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                    {isHindi
                      ? 'प्रत्येक चरण अगले को मजबूत करता है — एक पूर्ण रूप से जुड़ा हुआ पारिस्थितिकी तंत्र बनाता है जहां कृषि अपशिष्ट नवीकरणीय धन बन जाता है, किसानों, स्वच्छ ऊर्जा लक्ष्यों और पर्यावरणीय स्थिरता का समर्थन करता है।'
                      : 'Each step strengthens the next — creating a fully connected ecosystem where agricultural waste becomes renewable wealth, supporting farmers, clean energy goals, and environmental sustainability.'
                    }
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <p className="text-sm text-muted-foreground">
              {isHindi
                ? 'भाषा बदलने के लिए ऊपर दिए गए शीर्षक पर क्लिक करें'
                : 'Click on the headings above to switch language'
              }
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkingFlow;
