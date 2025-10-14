import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Truck, Factory, Building2, Shield, Navigation } from "lucide-react";
import farmerField from "@/assets/farmers-working.jpg";
import smartTransport from "@/assets/smart-transport.jpg";
import biogasFacility from "@/assets/biogas-facility.jpg";
import biogasCluster from "@/assets/biogas-cluster.jpg";
import villageLife from "@/assets/village-life.jpg";
import farmerPayment from "@/assets/farmer-payment.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { usersTranslations } from "@/translations/users";
import { LanguageToggle } from "@/components/LanguageToggle";

export const Users = () => {
    const { t } = useLanguage();
    const userTypes = [
        {
            id: "01",
            title: t(usersTranslations.userTypes.gauSakhi.title),
            subtitle: "गौ सखी ऐप",
            description: t(usersTranslations.userTypes.gauSakhi.description),
            image: farmerField,
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
        <div className="min-h-screen bg-gray-50">
            <LanguageToggle />
            {/* Header Section */}
            <section className="pt-20 pb-16 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        {t(usersTranslations.title)}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-600">
                        उपयोगकर्ता
                    </p>
                    <p className="text-lg max-w-4xl mx-auto text-gray-600 leading-relaxed">
                        {t(usersTranslations.subtitle)}
                    </p>
                </div>
            </section>

            {/* User Cards Grid */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {userTypes.map((user, index) => (
                            <Card key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                                {/* Image Header */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={user.image}
                                        alt={user.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute top-4 right-4">
                                        <div className={`w-12 h-12 ${user.gradient} rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                                            {user.id}
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h3 className="text-xl font-bold mb-1">{user.title}</h3>
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
                                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors">
                                        {t(usersTranslations.learnMore.button)}
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            {t(usersTranslations.cta.title)}
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            {t(usersTranslations.cta.subtitle)}
                        </p>
                        <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                            {t(usersTranslations.cta.button)}
                        </Button>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Users;