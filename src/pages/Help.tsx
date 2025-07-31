import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Video, 
  Mail, 
  Phone,
  ExternalLink,
  ChevronRight,
  Star,
  Clock
} from 'lucide-react';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      icon: BookOpen,
      title: 'Getting Started',
      description: 'Learn the basics of ADmyBRAND',
      articles: 12,
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: MessageCircle,
      title: 'AI Features',
      description: 'Understanding our AI capabilities',
      articles: 8,
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      articles: 15,
      color: 'from-green-500 to-green-600',
    },
  ];

  const popularArticles = [
    {
      title: 'How to Set Up Your First AI Campaign',
      category: 'Getting Started',
      readTime: '5 min read',
      rating: 4.9,
      views: '12.3k',
    },
    {
      title: 'Understanding Brand Consistency Scoring',
      category: 'AI Features',
      readTime: '3 min read',
      rating: 4.8,
      views: '8.7k',
    },
    {
      title: 'Integrating with Your Existing Tools',
      category: 'Integrations',
      readTime: '7 min read',
      rating: 4.7,
      views: '6.2k',
    },
    {
      title: 'Advanced Analytics and Reporting',
      category: 'Analytics',
      readTime: '10 min read',
      rating: 4.9,
      views: '9.1k',
    },
    {
      title: 'Team Collaboration Best Practices',
      category: 'Collaboration',
      readTime: '6 min read',
      rating: 4.6,
      views: '5.4k',
    },
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: 'Available 24/7',
      action: 'Start Chat',
      primary: true,
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 2 hours',
      action: 'Send Email',
      primary: false,
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Talk to our experts directly',
      availability: 'Mon-Fri, 9 AM - 6 PM PST',
      action: 'Call Now',
      primary: false,
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
              How Can We{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Help You?
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Find answers, get support, and learn how to make the most of ADmyBRAND's AI-powered platform.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search for help articles, tutorials, or guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg rounded-xl border-border focus:border-primary"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Categories */}
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
              Browse by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find the information you need organized by topic.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/20 transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{category.articles} articles</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
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
              Popular Articles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              The most helpful articles based on community feedback and usage.
            </p>
          </motion.div>

          <div className="space-y-4">
            {popularArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {article.rating}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {article.views} views
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
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
              Need Personal Support?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our expert support team is here to help you succeed with ADmyBRAND.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-center p-8 rounded-2xl border-2 ${
                  option.primary 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border bg-card'
                } hover:border-primary/50 transition-all duration-300`}
              >
                <div className={`w-16 h-16 rounded-xl mx-auto mb-6 flex items-center justify-center ${
                  option.primary 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  <option.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {option.title}
                </h3>
                <p className="text-muted-foreground mb-4">{option.description}</p>
                <p className="text-sm text-muted-foreground mb-6">{option.availability}</p>
                <Button 
                  variant={option.primary ? 'hero' : 'outline'} 
                  size="lg" 
                  className="w-full"
                >
                  {option.action}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Help;