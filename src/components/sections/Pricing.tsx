import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Zap, Star, Crown } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'AI-powered brand analysis',
        'Basic analytics dashboard',
        'Up to 5 team members',
        '10GB storage',
        'Email support',
        'Basic templates',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      icon: Star,
      description: 'Ideal for growing businesses',
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        'Everything in Starter',
        'Advanced AI insights',
        'Real-time collaboration',
        'Up to 25 team members',
        '100GB storage',
        'Priority support',
        'Custom brand guidelines',
        'API access',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      icon: Crown,
      description: 'For large organizations',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        'Everything in Professional',
        'Custom AI models',
        'Unlimited team members',
        'Unlimited storage',
        'Dedicated account manager',
        'White-label solutions',
        'Advanced security',
        'Custom integrations',
      ],
      highlighted: false,
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
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 p-1 bg-muted rounded-xl"
          >
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                !isYearly 
                  ? 'bg-background text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-lg font-medium transition-all relative ${
                isYearly 
                  ? 'bg-background text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative ${plan.highlighted ? 'scale-105' : ''}`}
            >
              <div className={`relative p-8 bg-card rounded-2xl border-2 h-full ${
                plan.highlighted 
                  ? 'border-primary shadow-glow' 
                  : 'border-border hover:border-primary/20'
              } transition-all duration-500`}>
                
                {/* Most Popular Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                    plan.highlighted 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    <plan.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-card-foreground">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant={plan.highlighted ? 'hero' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  {plan.highlighted ? 'Start Free Trial' : 'Get Started'}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-muted rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need a custom solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact our sales team for custom pricing and enterprise features tailored to your specific needs.
            </p>
            <Button variant="outline" size="lg">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;