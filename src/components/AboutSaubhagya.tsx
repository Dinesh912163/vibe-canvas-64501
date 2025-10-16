import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AboutSaubhagya = () => {
  const [isHindi, setIsHindi] = useState(false);

  const englishContent = `Saubhagya is India's innovative agricultural waste-to-energy platform that bridges the gap between rural farming communities and clean energy production. Our mission is to transform the way farmers monetize their agricultural waste while contributing to India's renewable energy goals.

In rural India, farmers face significant challenges in disposing of cattle dung from their gaushalas (cattle shelters). Traditional methods are labor-intensive and often result in environmental concerns. Meanwhile, India's growing energy needs demand innovative clean energy solutions. Saubhagya addresses both these challenges simultaneously.

Through our platform, farmers can sell cattle dung to biogas production facilities, earning ₹3-5 per kilogram with same-day payment processing. Our IoT-enabled weighing stations ensure complete transparency, while GPS-tracked transportation provides real-time updates throughout the collection process.

The collected agricultural waste is processed in state-of-the-art biogas plants using anaerobic digestion technology, producing Compressed Biogas (CBG) - a clean, renewable fuel equivalent to natural gas. This creates a circular economy where waste becomes wealth, benefiting farmers while reducing greenhouse gas emissions by up to 40%.

Our comprehensive digital platform connects all stakeholders - from field executives managing farmer onboarding to cluster managers monitoring biogas production, from purification unit operators ensuring quality standards to logistics coordinators managing efficient collection routes. Every participant benefits from transparent operations and fair compensation.

With Saubhagya, farmers gain an additional revenue stream of ₹12,000-18,000 per month, communities access cleaner energy, and India moves closer to its renewable energy targets. Together, we're building a sustainable future where prosperity and environmental responsibility go hand in hand.`;

  const hindiContent = `सौभाग्य भारत का एक अभिनव कृषि अपशिष्ट-से-ऊर्जा मंच है जो ग्रामीण कृषि समुदायों और स्वच्छ ऊर्जा उत्पादन के बीच की खाई को पाटता है। हमारा मिशन किसानों के कृषि अपशिष्ट को मुद्रीकृत करने के तरीके को बदलना है, साथ ही भारत के नवीकरणीय ऊर्जा लक्ष्यों में योगदान देना है।

ग्रामीण भारत में, किसानों को अपने गौशालाओं (गौशालाओं) से गोबर के निपटान में महत्वपूर्ण चुनौतियों का सामना करना पड़ता है। पारंपरिक विधियाँ श्रम-गहन होती हैं और अक्सर पर्यावरणीय चिंताओं का कारण बनती हैं। इस बीच, भारत की बढ़ती ऊर्जा आवश्यकताएँ अभिनव स्वच्छ ऊर्जा समाधानों की माँग करती हैं। सौभाग्य एक साथ इन दोनों चुनौतियों का समाधान करता है।

हमारे प्लेटफ़ॉर्म के माध्यम से, किसान गोबर को बायोगैस उत्पादन सुविधाओं को ₹3-5 प्रति किलोग्राम की दर से बेच सकते हैं, जिसमें उसी दिन भुगतान की प्रक्रिया होती है। हमारे IoT-सक्षम वजन स्टेशन पूर्ण पारदर्शिता सुनिश्चित करते हैं, जबकि GPS-ट्रैक्ड परिवहन संग्रह प्रक्रिया के दौरान वास्तविक समय के अपडेट प्रदान करता है।

एकत्रित कृषि अपशिष्ट को अत्याधुनिक बायोगैस संयंत्रों में एनारोबिक पाचन तकनीक का उपयोग करके संसाधित किया जाता है, जिससे संपीड़ित बायोगैस (CBG) का उत्पादन होता है - एक स्वच्छ, नवीकरणीय ईंधन जो प्राकृतिक गैस के समकक्ष होता है। यह एक परिपत्र अर्थव्यवस्था बनाता है जहाँ अपशिष्ट धन बन जाता है, किसानों को लाभ मिलता है और ग्रीनहाउस गैस उत्सर्जन में 40% तक की कमी होती है।

हमारा व्यापक डिजिटल प्लेटफ़ॉर्म सभी हितधारकों को जोड़ता है - किसान ऑनबोर्डिंग का प्रबंधन करने वाले क्षेत्रीय कार्यकारी अधिकारियों से लेकर बायोगैस उत्पादन की निगरानी करने वाले क्लस्टर प्रबंधकों तक, शुद्धिकरण इकाई ऑपरेटरों से जो गुणवत्ता मानकों को सुनिश्चित करते हैं, से लेकर लॉजिस्टिक्स समन्वयकों तक जो कुशल संग्रह मार्गों का प्रबंधन करते हैं। हर सहभागी पारदर्शी संचालन और उचित मुआवज़े से लाभान्वित होता है।

सौभाग्य के साथ, किसानों को ₹12,000-18,000 प्रति माह की अतिरिक्त आय प्राप्त होती है, समुदायों को स्वच्छ ऊर्जा की पहुँच मिलती है, और भारत अपने नवीकरणीय ऊर्जा लक्ष्यों के करीब पहुँचता है। साथ मिलकर, हम एक सतत भविष्य का निर्माण कर रहे हैं जहाँ समृद्धि और पर्यावरणीय जिम्मेदारी साथ-साथ चलती हैं।`;

  const toggleLanguage = (language: 'english' | 'hindi') => {
    setIsHindi(language === 'hindi');
  };

  return (
    <section className={`py-24 transition-all duration-500 ${
      isHindi ? 'bg-gradient-to-br from-orange-50 to-amber-50' : 'bg-gradient-to-br from-blue-50 to-indigo-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
        {/* Language Toggle Headers */}
        <div className="text-center mb-12">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-8">
            <button
              onClick={() => toggleLanguage('english')}
              className={`text-2xl sm:text-3xl md:text-4xl font-bold transition-all duration-300 ease-in-out hover:scale-105 ${
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
              className={`text-2xl sm:text-3xl md:text-4xl font-bold transition-all duration-300 ease-in-out hover:scale-105 ${
                isHindi 
                  ? 'text-primary border-b-4 border-primary pb-2' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              सौभाग्य परियोजना के बारे में
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={isHindi ? 'hindi' : 'english'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.3, 
                ease: "easeInOut" 
              }}
              className={`prose prose-lg max-w-none ${
                isHindi ? 'prose-orange' : 'prose-blue'
              }`}
            >
              <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-xl border-2 transition-all duration-500 ${
                isHindi 
                  ? 'border-orange-200 shadow-orange-100' 
                  : 'border-blue-200 shadow-blue-100'
              }`}>
                <div className={`text-base sm:text-lg leading-relaxed space-y-6 ${
                  isHindi ? 'font-medium' : ''
                }`}>
                  {(isHindi ? hindiContent : englishContent)
                    .split('\n\n')
                    .map((paragraph, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.1,
                          ease: "easeOut" 
                        }}
                        className="text-foreground/90 text-justify"
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

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

export default AboutSaubhagya;