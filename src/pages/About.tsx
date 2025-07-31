import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We believe every business deserves access to cutting-edge AI technology to transform their brand presence and drive meaningful growth.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Constantly pushing the boundaries of what\'s possible with AI and machine learning to deliver breakthrough solutions.',
    },
    {
      icon: Users,
      title: 'Customer-Centric',
      description: 'Every feature we build is designed with our customers\' success in mind, ensuring maximum value and ease of use.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in security, performance, and reliability to ensure your business can depend on us.',
    },
  ];

  const team = [
    {
      name: 'Alex Rivera',
      role: 'Chief Executive Officer',
      bio: 'Former VP of Product at TechCorp with 15+ years in AI and brand management.',
      initials: 'AR',
    },
    {
      name: 'Sarah Kim',
      role: 'Chief Technology Officer',
      bio: 'AI researcher and former Google engineer, expert in machine learning and scalable systems.',
      initials: 'SK',
    },
    {
      name: 'Marcus Chen',
      role: 'Chief Marketing Officer',
      bio: 'Brand strategist with deep experience helping Fortune 500 companies transform their marketing.',
      initials: 'MC',
    },
    {
      name: 'Emily Watson',
      role: 'Head of Customer Success',
      bio: 'Customer experience expert focused on ensuring every user achieves their business goals.',
      initials: 'EW',
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
              Building the Future of{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Brand Intelligence
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              ADmyBRAND was founded with a simple vision: to democratize access to sophisticated 
              AI-powered brand management tools that were previously only available to enterprise corporations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2022 by a team of AI researchers and brand strategists, ADmyBRAND emerged 
                  from the frustration of watching brilliant businesses struggle with inconsistent 
                  brand messaging and inefficient marketing operations.
                </p>
                <p>
                  We recognized that while large corporations had access to sophisticated brand 
                  management systems and AI tools, small and medium businesses were left behind. 
                  This gap inspired us to create a platform that levels the playing field.
                </p>
                <p>
                  Today, we're proud to serve over 10,000 businesses worldwide, from startups to 
                  enterprise companies, helping them unlock the power of AI-driven brand management.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border shadow-card"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and drive our commitment to your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind ADmyBRAND, dedicated to revolutionizing brand management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{member.initials}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;