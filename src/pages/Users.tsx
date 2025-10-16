import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Truck, Factory, Building2, Shield, Navigation, ArrowRight, Sparkles } from "lucide-react";
import farmerField from "@/assets/farmers-working.jpg";
import smartTransport from "@/assets/smart-transport.jpg";
import biogasFacility from "@/assets/biogas-facility.jpg";
import biogasCluster from "@/assets/biogas-cluster.jpg";
import villageLife from "@/assets/village-life.jpg";
import farmerPayment from "@/assets/farmer-payment.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { usersTranslations } from "@/translations/users";
import { LanguageToggle } from "@/components/LanguageToggle";

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
};

export const Users = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();

    const userTypes = [
        {
            id: "01",
            title: t(usersTranslations.userTypes.gauSakhi.title),
            subtitle: "गौ सखी ऐप",
            description: t(usersTranslations.userTypes.gauSakhi.description),
            image: farmerField,
            link: "/gau-sakhi",
            features: [
                t(usersTranslations.userTypes.gauSakhi.features.cattleManagement),
                t(usersTranslations.userTypes.gauSakhi.features.collectionScheduling),
                t(usersTranslations.userTypes.gauSakhi.features.realTimeTracking),
                t(usersTranslations.userTypes.gauSakhi.features.paymentIntegration),
                t(usersTranslations.userTypes.gauSakhi.features.qualityAssessment),
                t(usersTranslations.userTypes.gauSakhi.features.offlineMode)
            ],
            gradient: "bg-gradient-to-br from-green-400 to-green-600"
        },
        {
            id: "02",
            title: t(usersTranslations.userTypes.biogasSangh.title),
            subtitle: "बायोगैस संघ",
            description: t(usersTranslations.userTypes.biogasSangh.description),
            image: biogasCluster,
            link: "/urja-sanyojak",
            features: [
                t(usersTranslations.userTypes.biogasSangh.features.supplyChainOversight),
                t(usersTranslations.userTypes.biogasSangh.features.digesterMonitoring),
                t(usersTranslations.userTypes.biogasSangh.features.resourceManagement),
                t(usersTranslations.userTypes.biogasSangh.features.performanceAnalytics),
                t(usersTranslations.userTypes.biogasSangh.features.qualityControl),
                t(usersTranslations.userTypes.biogasSangh.features.stakeholderCommunication)
            ],
            gradient: "bg-gradient-to-br from-blue-400 to-blue-600"
        },
        {
            id: "03",
            title: t(usersTranslations.userTypes.shuddhiDoot.title),
            subtitle: "शुद्धि दूत",
            description: t(usersTranslations.userTypes.shuddhiDoot.description),
            image: biogasFacility,
            link: "/shuddhi-doot",
            features: [
                t(usersTranslations.userTypes.shuddhiDoot.features.gasQualityMonitoring),
                t(usersTranslations.userTypes.shuddhiDoot.features.plantOperations),
                t(usersTranslations.userTypes.shuddhiDoot.features.orderManagement),
                t(usersTranslations.userTypes.shuddhiDoot.features.qualityControl),
                t(usersTranslations.userTypes.shuddhiDoot.features.performanceAnalytics),
                t(usersTranslations.userTypes.shuddhiDoot.features.safetyManagement)
            ],
            gradient: "bg-gradient-to-br from-orange-400 to-orange-600"
        },
        {
            id: "04",
            title: t(usersTranslations.userTypes.urjaVyapar.title),
            subtitle: "ऊर्जा व्यापार",
            description: t(usersTranslations.userTypes.urjaVyapar.description),
            image: villageLife,
            link: "/urja-vyapar",
            features: [
                t(usersTranslations.userTypes.urjaVyapar.features.inventoryManagement),
                t(usersTranslations.userTypes.urjaVyapar.features.customerManagement),
                t(usersTranslations.userTypes.urjaVyapar.features.orderProcessing),
                t(usersTranslations.userTypes.urjaVyapar.features.invoicingManagement),
                t(usersTranslations.userTypes.urjaVyapar.features.marketAnalytics),
                t(usersTranslations.userTypes.urjaVyapar.features.salesReporting),
                t(usersTranslations.userTypes.urjaVyapar.features.logisticsCoordination),
                t(usersTranslations.userTypes.urjaVyapar.features.paymentProcessing),
                t(usersTranslations.userTypes.urjaVyapar.features.complianceManagement)
            ],
            gradient: "bg-gradient-to-br from-red-400 to-red-600"
        },
        {
            id: "05",
            title: t(usersTranslations.userTypes.adminPortal.title),
            subtitle: t(usersTranslations.userTypes.adminPortal.subtitle),
            description: t(usersTranslations.userTypes.adminPortal.description),
            image: farmerPayment,
            link: "/command-center",
            features: [
                t(usersTranslations.userTypes.adminPortal.features.userManagement),
                t(usersTranslations.userTypes.adminPortal.features.deviceRegistry),
                t(usersTranslations.userTypes.adminPortal.features.auditTrail),
                t(usersTranslations.userTypes.adminPortal.features.reports),
                t(usersTranslations.userTypes.adminPortal.features.offerManagement),
                t(usersTranslations.userTypes.adminPortal.features.predictiveAnalytics),
                t(usersTranslations.userTypes.adminPortal.features.complianceAudit)
            ],
            gradient: "bg-gradient-to-br from-purple-400 to-purple-600"
        },
        {
            id: "06",
            title: t(usersTranslations.userTypes.transporter.title),
            subtitle: "परिवहन हैंडलर",
            description: t(usersTranslations.userTypes.transporter.description),
            image: smartTransport,
            link: "/vahan-vyavastha",
            features: [
                t(usersTranslations.userTypes.transporter.features.scheduling),
                t(usersTranslations.userTypes.transporter.features.gpsTracking),
                t(usersTranslations.userTypes.transporter.features.deliveryNotifications),
                t(usersTranslations.userTypes.transporter.features.offlineRoutes)
            ],
            gradient: "bg-gradient-to-br from-teal-400 to-teal-600"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <LanguageToggle />
            {/* Header Section */}
            <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span>Choose Your Platform</span>
                    </motion.div>
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        {t(usersTranslations.title)}
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl mb-8 text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        उपयोगकर्ता
                    </motion.p>
                    <motion.p
                        className="text-lg max-w-4xl mx-auto text-gray-600 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        {t(usersTranslations.subtitle)}
                    </motion.p>
                </div>
            </section>

            {/* User Cards Grid */}
            <section className="py-16 bg-transparent">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {userTypes.map((user, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -8 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-200 group cursor-pointer"
                                        onClick={() => navigate(user.link)}
                                    >
                                        {/* Image Header */}
                                        <div className="relative h-48 overflow-hidden">
                                            <motion.img
                                                src={user.image}
                                                alt={user.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                                            <motion.div
                                                className="absolute top-4 right-4"
                                                whileHover={{ rotate: 360, scale: 1.1 }}
                                                transition={{ duration: 0.6 }}
                                            >
                                                <div className={`w-12 h-12 ${user.gradient} rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                                                    {user.id}
                                                </div>
                                            </motion.div>
                                            <div className="absolute bottom-4 left-4 text-white">
                                                <h3 className="text-xl font-bold mb-1 group-hover:text-green-200 transition-colors">{user.title}</h3>
                                                <p className="text-sm opacity-90">{user.subtitle}</p>
                                            </div>
                                        </div>

                                {/* Content */}
                                <div className="p-6">
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {user.description}
                                    </p>

                                    {/* Key Features */}
                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            <h4 className="font-semibold text-gray-900">{t(usersTranslations.keyFeatures.title)}</h4>
                                        </div>
                                        <ul className="space-y-3">
                                            {user.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start gap-3">
                                                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-sm text-gray-600 leading-relaxed">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Learn More Button */}
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button
                                            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg group-hover:shadow-xl flex items-center justify-center gap-2"
                                        >
                                            <span>{t(usersTranslations.learnMore.button)}</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </motion.div>
                                </div>
                                    </Card>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-xl border-2 border-green-100"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h2
                            className="text-3xl font-bold text-gray-900 mb-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            {t(usersTranslations.cta.title)}
                        </motion.h2>
                        <motion.p
                            className="text-gray-600 mb-8 leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            {t(usersTranslations.cta.subtitle)}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
                                {t(usersTranslations.cta.button)}
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>


        </div>
    );
};

export default Users;