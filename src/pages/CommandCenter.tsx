import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  BarChart3,
  Bell,
  Shield,
  Map,
  Radio,
  Eye,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  FileText
} from "lucide-react";
import governmentOfficial from "@/assets/village-life.jpg";
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

const CommandCenter = () => {
  const features = [
    {
      icon: <Map className="w-8 h-8" />,
      title: "National CBG Dashboard",
      description: "Real-time visibility of all 5,000 GOBAR-Dhan plants across India with production metrics",
      category: "Strategic Command"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Intelligent Alerts",
      description: "Automated notifications for plant downtime, quality deviations, and compliance issues",
      category: "Operational Command"
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Voice Analytics",
      description: "AI-powered analysis of field voice data for grassroots insights and anomaly detection",
      category: "Strategic Command"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Compliance Monitoring",
      description: "Track PESO certifications, safety audits, and regulatory adherence pan-India",
      category: "Operational Command"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Forecast national CBG production, identify bottlenecks, and optimize policy interventions",
      category: "Strategic Command"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Mission Reports",
      description: "Automated generation of MIS reports for MNRE, PMO, and state departments",
      category: "Operational Command"
    }
  ];

  const beforeAfter = [
    {
      aspect: "Data Collection",
      before: "Monthly manual reports from plants",
      after: "Live data streaming from 5,000+ plants"
    },
    {
      aspect: "Issue Detection",
      before: "Reactive - after failures occur",
      after: "Proactive - AI predicts issues 48hrs ahead"
    },
    {
      aspect: "Compliance Tracking",
      before: "Annual physical audits only",
      after: "Continuous automated monitoring"
    },
    {
      aspect: "Report Generation",
      before: "2-3 weeks for mission reports",
      after: "Real-time dashboards + 1-click reports"
    }
  ];

  const capabilities = [
    {
      title: "Operational Command",
      description: "Day-to-day oversight of plant operations",
      features: [
        "Live plant status monitoring",
        "Quality alert management",
        "Logistics tracking",
        "Incident reporting"
      ],
      color: "blue"
    },
    {
      title: "Strategic Command",
      description: "Policy planning and mission-level insights",
      features: [
        "State-wise production trends",
        "Subsidy utilization analytics",
        "National supply-demand mapping",
        "Voice-of-field insights"
      ],
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4 px-6 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-orange-400">●</span>
              <span className="text-white mx-2">●</span>
              <span className="text-green-400">●</span>
              <span className="ml-3">Ministry of New & Renewable Energy</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              SAUBHAGYA Command Center
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-200">
              National Governance Platform for India's CBG Mission
            </p>
            <p className="text-lg mb-8 text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Real-time oversight of 5,000+ biogas plants. AI-powered analytics for policy makers.
              Unified dashboard for MNRE, state departments, and mission monitoring cells.
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
                  className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-semibold shadow-xl hover:shadow-2xl transition-all"
                >
                  <Shield className="mr-2 w-5 h-5" />
                  Request Access
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto font-semibold"
                >
                  <Eye className="mr-2 w-5 h-5" />
                  View Demo Dashboard
                </Button>
              </motion.div>
            </motion.div>
            <p className="mt-6 text-sm text-slate-400">
              Secure Access | Role-Based Permissions | MNRE Certified
            </p>
          </motion.div>
        </div>
      </section>

      {/* Before vs After Comparison */}
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
              Transforming Mission Governance
            </h2>
            <p className="text-xl text-gray-600">
              From Manual Oversight to Intelligent Command
            </p>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border-2 border-slate-200">
              <div className="grid md:grid-cols-2 divide-x divide-slate-200">
                <div className="p-8 bg-red-50">
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Before SAUBHAGYA</h3>
                  </div>
                  <div className="space-y-4">
                    {beforeAfter.map((item, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 border border-red-200">
                        <p className="font-semibold text-gray-900 mb-1">{item.aspect}</p>
                        <p className="text-sm text-gray-600">{item.before}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-8 bg-green-50">
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <h3 className="text-2xl font-bold text-gray-900">With Command Center</h3>
                  </div>
                  <div className="space-y-4">
                    {beforeAfter.map((item, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 border border-green-200">
                        <p className="font-semibold text-gray-900 mb-1">{item.aspect}</p>
                        <p className="text-sm text-gray-600">{item.after}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Operational vs Strategic Command */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dual-Mode Command Structure
            </h2>
            <p className="text-xl text-gray-600">
              Operational + Strategic Oversight in One Platform
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {capabilities.map((cap, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className={`p-8 border-2 h-full ${cap.color === 'blue' ? 'border-blue-300 bg-gradient-to-br from-blue-50 to-white' : 'border-purple-300 bg-gradient-to-br from-purple-50 to-white'}`}>
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg ${cap.color === 'blue' ? 'bg-gradient-to-br from-blue-600 to-blue-700' : 'bg-gradient-to-br from-purple-600 to-purple-700'}`}>
                  {cap.color === 'blue' ? <Shield className="w-8 h-8" /> : <BarChart3 className="w-8 h-8" />}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{cap.title}</h3>
                <p className="text-gray-600 mb-6">{cap.description}</p>
                <ul className="space-y-3">
                  {cap.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${cap.color === 'blue' ? 'text-blue-600' : 'text-purple-600'}`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
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
              Enterprise-Grade Features for Mission Control
            </h2>
            <p className="text-xl text-gray-600">
              Built for Government-Scale Operations
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
                  <Card className="p-6 hover:shadow-xl transition-shadow border-2 border-slate-200 hover:border-blue-300 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg ${feature.category === 'Strategic Command' ? 'bg-gradient-to-br from-purple-600 to-purple-700' : 'bg-gradient-to-br from-blue-600 to-blue-700'}`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <div className={`inline-block px-2 py-1 rounded text-xs font-medium mb-2 ${feature.category === 'Strategic Command' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                      {feature.category}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border-2 border-slate-300 shadow-2xl">
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">Live National Dashboard</h3>
                <p className="text-lg text-slate-300 mb-6">
                  Real-time visibility across India's entire CBG ecosystem
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                    <p className="text-3xl font-bold mb-1">5,247</p>
                    <p className="text-sm text-slate-300">Active Plants</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                    <p className="text-3xl font-bold mb-1">28.5K</p>
                    <p className="text-sm text-slate-300">MT CBG/Day</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                    <p className="text-3xl font-bold mb-1 text-green-400">98.3%</p>
                    <p className="text-sm text-slate-300">Uptime</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                    <p className="text-3xl font-bold mb-1 text-orange-400">12</p>
                    <p className="text-sm text-slate-300">Active Alerts</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <img
                  src={biogasCluster}
                  alt="Command Center Dashboard"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </Card>
          </motion.div>
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
              <Card className="p-8 md:p-12 bg-gradient-to-br from-slate-100 to-white shadow-2xl border-2 border-slate-300">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <motion.img
                      src={governmentOfficial}
                      alt="Government Official"
                      className="w-32 h-32 rounded-full border-4 border-blue-600 shadow-xl object-cover"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-6xl text-blue-600 mb-4">"</div>
                    <p className="text-xl md:text-2xl leading-relaxed mb-6 text-gray-800">
                      The SAUBHAGYA Command Center has revolutionized how we monitor the national CBG mission.
                      Real-time alerts, voice analytics, and predictive insights enable proactive governance
                      at a scale never before possible.
                    </p>
                    <div>
                      <p className="font-bold text-lg text-gray-900">Dr. Anil Kumar</p>
                      <p className="text-blue-700">Director, Biogas Division, MNRE</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Elevate Mission Governance with AI-Powered Oversight
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl mb-4 text-blue-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Join MNRE and State Officials Driving India's Clean Energy Future
          </motion.p>
          <motion.p
            className="text-lg mb-10 text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Secure access for government officials. Role-based dashboards for national, state,
            and district levels. Real-time mission monitoring with predictive intelligence.
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
                className="bg-white text-blue-900 hover:bg-blue-50 text-xl px-10 py-7 h-auto font-bold shadow-2xl hover:shadow-3xl transition-all"
              >
                <Shield className="mr-3 w-6 h-6" />
                Request Official Access
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-xl px-10 py-7 h-auto font-bold"
              >
                <Eye className="mr-3 w-6 h-6" />
                View Demo Dashboard
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8 items-center text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Government-Grade Security</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>MNRE Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>Role-Based Access</span>
            </div>
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4" />
              <span>24/7 Real-Time Monitoring</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CommandCenter;
