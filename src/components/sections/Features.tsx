import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Target, 
  BarChart3, 
  Palette, 
  Users, 
  Shield 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Get deep insights into your brand performance with advanced machine learning algorithms that predict trends and optimize campaigns.',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      icon: Target,
      title: 'Smart Targeting',
      description: 'Reach the right audience at the right time with AI-driven customer segmentation and personalized messaging strategies.',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: BarChart3,
      title: 'Real-time Dashboard',
      description: 'Monitor your brand metrics, campaign performance, and ROI in real-time with our intuitive and comprehensive dashboard.',
      gradient: 'from-pink-500 to-red-600',
    },
    {
      icon: Palette,
      title: 'Brand Consistency',
      description: 'Maintain perfect brand consistency across all channels with automated brand guideline enforcement and asset management.',
      gradient: 'from-green-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Streamline team workflows with collaborative tools, role-based permissions, and seamless project management features.',
      gradient: 'from-yellow-500 to-orange-600',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Protect your brand assets and customer data with enterprise-grade security, compliance, and privacy controls.',
      gradient: 'from-indigo-500 to-blue-600',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="features" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4"
          >
            Powerful Features for Modern Brands
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Everything you need to build, manage, and scale your brand with the power of artificial intelligence.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="relative p-8 bg-card rounded-2xl border border-border hover:border-primary/20 transition-all duration-500 hover:shadow-card h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Ready to experience the power of AI-driven brand management?
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-elegant">
            Explore All Features
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;