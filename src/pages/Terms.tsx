import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <p className="text-muted-foreground mb-6">Last updated: January 1, 2024</p>
              <div className="space-y-6 text-muted-foreground">
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                  <p>By accessing and using ADmyBRAND's services, you accept and agree to be bound by the terms and provision of this agreement.</p>
                </section>
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Service Description</h2>
                  <p>ADmyBRAND provides AI-powered brand management and marketing automation tools to help businesses optimize their brand presence and marketing operations.</p>
                </section>
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. User Responsibilities</h2>
                  <p>Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Terms;