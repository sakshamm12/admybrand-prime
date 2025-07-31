import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Shield, Lock, Eye, Award } from 'lucide-react';

const Security = () => {
  const features = [
    { icon: Shield, title: 'Enterprise-Grade Protection', desc: 'SOC 2 Type II certified with end-to-end encryption.' },
    { icon: Lock, title: 'Data Encryption', desc: 'AES-256 encryption for data at rest and in transit.' },
    { icon: Eye, title: 'Regular Audits', desc: 'Continuous security monitoring and penetration testing.' },
    { icon: Award, title: 'Compliance', desc: 'GDPR, CCPA, and industry compliance standards.' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Enterprise <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Security</span>
            </h1>
            <p className="text-xl text-muted-foreground">Your data security is our top priority.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Security;