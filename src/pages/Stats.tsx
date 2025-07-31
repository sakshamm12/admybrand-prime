import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Stats = () => {
  const stats = [
    { number: '10,000+', label: 'Active Users', growth: '+150% YoY' },
    { number: '500M+', label: 'AI Predictions', growth: '+200% YoY' },
    { number: '99.9%', label: 'Uptime', growth: 'Consistent' },
    { number: '50+', label: 'Countries', growth: '+25 New' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Platform <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Statistics</span>
            </h1>
            <p className="text-xl text-muted-foreground">Real-time insights into our global impact.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-card rounded-2xl p-8 border border-border">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.growth}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Stats;