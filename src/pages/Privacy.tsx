import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';

const Privacy = () => {
  const principles = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'Your data is encrypted, secure, and protected by enterprise-grade security measures.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We clearly explain what data we collect, how we use it, and who has access to it.',
    },
    {
      icon: Lock,
      title: 'User Control',
      description: 'You have full control over your data, including the ability to export or delete it anytime.',
    },
    {
      icon: UserCheck,
      title: 'Compliance',
      description: 'We comply with GDPR, CCPA, and other privacy regulations to protect your rights.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Privacy{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your privacy is fundamental to our relationship. This policy explains how we collect, 
              use, and protect your personal information when you use ADmyBRAND.
            </p>
            <div className="mt-6 text-sm text-muted-foreground">
              Last updated: January 1, 2024
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our Privacy Principles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide how we handle your personal information.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <principle.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="prose prose-lg max-w-none">
              <div className="bg-card rounded-2xl p-8 border border-border space-y-8">
                
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p><strong>Account Information:</strong> When you create an account, we collect your name, email address, company information, and contact details.</p>
                    <p><strong>Usage Data:</strong> We collect information about how you use our platform, including features accessed, time spent, and interaction patterns to improve our AI algorithms.</p>
                    <p><strong>Brand Assets:</strong> Content you upload such as logos, images, brand guidelines, and marketing materials necessary to provide our AI-powered services.</p>
                    <p><strong>Technical Information:</strong> Device information, IP address, browser type, and other technical identifiers for security and optimization purposes.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p><strong>Service Delivery:</strong> To provide, maintain, and improve our AI-powered brand management platform and deliver the features you've subscribed to.</p>
                    <p><strong>AI Training:</strong> To train and improve our machine learning models, ensuring better brand recommendations and automation features.</p>
                    <p><strong>Communication:</strong> To send you service updates, security alerts, and support messages. Marketing communications only with your explicit consent.</p>
                    <p><strong>Security:</strong> To protect our platform and users from fraud, abuse, and security threats.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Information Sharing</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p><strong>Service Providers:</strong> We work with trusted third-party service providers who help us operate our platform, such as cloud hosting and analytics services.</p>
                    <p><strong>Legal Requirements:</strong> We may disclose information when required by law, to protect our rights, or to ensure the safety of our users.</p>
                    <p><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale, your information may be transferred as part of the business assets.</p>
                    <p><strong>With Your Consent:</strong> We may share information for other purposes with your explicit consent.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We implement industry-standard security measures to protect your information:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>End-to-end encryption for data in transit and at rest</li>
                      <li>Regular security audits and penetration testing</li>
                      <li>Access controls and employee background checks</li>
                      <li>SOC 2 Type II compliance and GDPR adherence</li>
                      <li>Automated threat detection and response systems</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights and Choices</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p><strong>Access and Portability:</strong> You can access, download, and export your data at any time through your account settings.</p>
                    <p><strong>Correction:</strong> You can update and correct your personal information directly in your account or by contacting our support team.</p>
                    <p><strong>Deletion:</strong> You can request deletion of your account and associated data. Some information may be retained for legal or operational purposes.</p>
                    <p><strong>Marketing Opt-out:</strong> You can unsubscribe from marketing communications at any time using the links in our emails.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. International Data Transfers</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>ADmyBRAND operates globally, and your information may be transferred to and processed in countries other than your own. We ensure adequate protection through:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Standard Contractual Clauses for EU data transfers</li>
                      <li>Adequacy decisions for approved countries</li>
                      <li>Certification under Privacy Shield successor frameworks</li>
                      <li>Binding corporate rules for internal transfers</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Children's Privacy</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>ADmyBRAND is not intended for use by children under 16 years of age. We do not knowingly collect personal information from children under 16. If we become aware that we have collected such information, we will take steps to delete it promptly.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to This Policy</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of material changes by email or through our platform, and the updated policy will be effective 30 days after notification.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Us</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                    <ul className="list-none space-y-2">
                      <li><strong>Email:</strong> privacy@admybrand.com</li>
                      <li><strong>Address:</strong> ADmyBRAND Inc., 123 AI Street, San Francisco, CA 94105</li>
                      <li><strong>Data Protection Officer:</strong> dpo@admybrand.com</li>
                    </ul>
                  </div>
                </section>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;