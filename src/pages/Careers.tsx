import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, ExternalLink } from 'lucide-react';

const Careers = () => {
  const openings = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      description: 'Build and optimize AI models that power our brand intelligence platform. Work with cutting-edge machine learning technologies.',
      requirements: ['5+ years in AI/ML', 'Python expertise', 'Experience with TensorFlow/PyTorch', 'PhD preferred'],
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      description: 'Design intuitive user experiences for our AI-powered platform. Shape how users interact with complex brand data.',
      requirements: ['4+ years product design', 'Figma expertise', 'B2B SaaS experience', 'Design systems knowledge'],
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Austin, TX / Remote',
      type: 'Full-time',
      description: 'Help our customers achieve success with ADmyBRAND. Drive adoption, retention, and expansion.',
      requirements: ['3+ years customer success', 'SaaS experience', 'Excellent communication', 'Customer-first mindset'],
    },
    {
      title: 'Backend Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build scalable backend systems that process millions of brand data points. Work with modern cloud infrastructure.',
      requirements: ['4+ years backend dev', 'Node.js/Python', 'AWS/GCP experience', 'Database optimization'],
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Los Angeles, CA / Remote',
      type: 'Full-time',
      description: 'Drive growth through strategic marketing campaigns. Use our own platform to showcase its capabilities.',
      requirements: ['3+ years B2B marketing', 'Growth marketing experience', 'Analytics proficiency', 'Creative thinking'],
    },
    {
      title: 'Sales Development Representative',
      department: 'Sales',
      location: 'Chicago, IL / Remote',
      type: 'Full-time',
      description: 'Generate qualified leads and support our sales team. Be the first point of contact for potential customers.',
      requirements: ['1+ years SDR experience', 'CRM proficiency', 'Strong communication', 'Goal-oriented mindset'],
    },
  ];

  const benefits = [
    'Competitive salary and equity package',
    'Comprehensive health, dental, and vision insurance',
    'Unlimited PTO and flexible working hours',
    'Remote-first culture with optional office access',
    '$5,000 annual learning and development budget',
    'Top-tier equipment and home office setup',
    'Team retreats and company events',
    'Parental leave and family support',
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
              Join the Future of{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Brand Intelligence
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We're building the next generation of AI-powered brand management tools. 
              Join our team of passionate innovators and help shape the future of marketing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg">
                View Open Positions
              </Button>
              <Button variant="outline" size="lg">
                Learn About Our Culture
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
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
              Why Choose ADmyBRAND?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a team that values innovation, growth, and making a real impact on businesses worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Benefits & Perks</h3>
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border shadow-card"
            >
              <h3 className="text-2xl font-bold text-card-foreground mb-6">Our Culture</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Innovation First</h4>
                  <p className="text-muted-foreground text-sm">We encourage experimentation and bold ideas that push the boundaries of what's possible.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Remote-First</h4>
                  <p className="text-muted-foreground text-sm">Work from anywhere while staying connected with our global team through regular meetups.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Growth Mindset</h4>
                  <p className="text-muted-foreground text-sm">Continuous learning and development opportunities to advance your career.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
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
              Open Positions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find your next career opportunity and help us build the future of brand management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="group-hover:border-primary group-hover:text-primary">
                    Apply
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {job.description}
                </p>
                
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">Key Requirements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, reqIndex) => (
                      <span
                        key={reqIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-muted/50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Don't see the right fit?
              </h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
              </p>
              <Button variant="hero" size="lg">
                Send Us Your Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;