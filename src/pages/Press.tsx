import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, ExternalLink, Download } from 'lucide-react';

const Press = () => {
  const pressReleases = [
    {
      title: 'ADmyBRAND Raises $50M Series B to Accelerate AI-Powered Brand Management',
      date: '2024-01-15',
      excerpt: 'Funding round led by leading VCs to expand global reach and enhance AI capabilities for enterprise customers.',
      type: 'Funding',
    },
    {
      title: 'ADmyBRAND Launches Revolutionary AI Brand Consistency Engine',
      date: '2023-11-08',
      excerpt: 'New feature uses advanced machine learning to ensure perfect brand alignment across all marketing channels.',
      type: 'Product',
    },
    {
      title: 'ADmyBRAND Named "Best AI Marketing Platform" by TechCrunch',
      date: '2023-09-22',
      excerpt: 'Recognition highlights platform\'s innovative approach to solving modern brand management challenges.',
      type: 'Award',
    },
    {
      title: 'Enterprise Customers See 400% ROI Increase with ADmyBRAND Platform',
      date: '2023-07-12',
      excerpt: 'Case study reveals significant business impact across Fortune 500 companies using our AI suite.',
      type: 'Research',
    },
    {
      title: 'ADmyBRAND Expands to European Market with London Office Opening',
      date: '2023-05-18',
      excerpt: 'Strategic expansion brings AI-powered brand management solutions to European businesses.',
      type: 'Expansion',
    },
    {
      title: 'Partnership with Adobe Brings Advanced Creative AI to ADmyBRAND',
      date: '2023-03-10',
      excerpt: 'Integration enables seamless creative workflow automation within the ADmyBRAND ecosystem.',
      type: 'Partnership',
    },
  ];

  const mediaKit = [
    { name: 'Company Logo Pack', type: 'ZIP', size: '2.4 MB' },
    { name: 'Executive Headshots', type: 'ZIP', size: '12.8 MB' },
    { name: 'Product Screenshots', type: 'ZIP', size: '8.1 MB' },
    { name: 'Brand Guidelines', type: 'PDF', size: '3.2 MB' },
    { name: 'Company Fact Sheet', type: 'PDF', size: '1.1 MB' },
  ];

  const coverage = [
    {
      outlet: 'TechCrunch',
      title: 'The AI Revolution in Brand Management',
      date: '2024-01-20',
      url: '#',
    },
    {
      outlet: 'Forbes',
      title: 'How ADmyBRAND is Transforming Marketing Operations',
      date: '2023-12-15',
      url: '#',
    },
    {
      outlet: 'Wired',
      title: 'The Future of Brand Consistency is AI-Powered',
      date: '2023-11-30',
      url: '#',
    },
    {
      outlet: 'VentureBeat',
      title: 'Why Investors are Betting Big on Brand AI',
      date: '2023-10-25',
      url: '#',
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
              Press &{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Media Center
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Stay updated with the latest news, announcements, and media coverage 
              about ADmyBRAND's journey to revolutionize brand management.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg">
                Download Media Kit
                <Download className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Contact Press Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Press Releases
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Official announcements and updates from ADmyBRAND.
            </p>
          </motion.div>

          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {release.type}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {new Date(release.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                      {release.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {release.excerpt}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="group-hover:border-primary group-hover:text-primary">
                    Read Full Release
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Media Coverage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              See what leading publications are saying about ADmyBRAND.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coverage.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-primary">{article.outlet}</span>
                  <span className="text-sm text-muted-foreground">
                    {new Date(article.date).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <Button variant="ghost" size="sm" className="p-0 h-auto">
                  Read Article
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
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
                Media Kit
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Download our comprehensive media kit containing logos, images, 
                executive photos, and brand guidelines for your coverage.
              </p>
              <div className="space-y-4">
                {mediaKit.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div>
                      <span className="font-medium text-foreground">{item.name}</span>
                      <div className="text-sm text-muted-foreground">
                        {item.type} • {item.size}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
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
              <h3 className="text-2xl font-bold text-card-foreground mb-6">Press Contact</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-card-foreground">Media Inquiries</h4>
                  <p className="text-muted-foreground">press@admybrand.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Partnership Inquiries</h4>
                  <p className="text-muted-foreground">partnerships@admybrand.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Investor Relations</h4>
                  <p className="text-muted-foreground">investors@admybrand.com</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    For urgent media requests, please call our press hotline at +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Press;