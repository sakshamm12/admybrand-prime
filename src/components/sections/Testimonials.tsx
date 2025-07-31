import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'TechFlow Inc.',
      image: '/api/placeholder/80/80',
      rating: 5,
      content: 'ADmyBRAND transformed our marketing strategy completely. The AI insights helped us increase our conversion rate by 340% in just 3 months.',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CEO',
      company: 'GrowthLab',
      image: '/api/placeholder/80/80',
      rating: 5,
      content: 'The level of automation and brand consistency we achieved with ADmyBRAND is incredible. Our team productivity increased by 200%.',
    },
    {
      name: 'Emily Watson',
      role: 'Brand Manager',
      company: 'InnovateCorp',
      image: '/api/placeholder/80/80',
      rating: 5,
      content: 'Finally, a platform that understands modern branding needs. The AI-powered analytics provide insights we never had before.',
    },
    {
      name: 'David Kim',
      role: 'CMO',
      company: 'ScaleUp',
      image: '/api/placeholder/80/80',
      rating: 5,
      content: 'ADmyBRAND is a game-changer. The ROI tracking and automated campaign optimization saved us thousands of hours.',
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            See how businesses around the world are transforming their brand management with ADmyBRAND.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-primary',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/20 transition-all duration-500 shadow-card h-full">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-primary mb-6" />
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-card-foreground leading-relaxed mb-8 text-lg">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border"
        >
          {[
            { number: '98%', label: 'Customer Satisfaction' },
            { number: '500+', label: 'Companies Trust Us' },
            { number: '3x', label: 'Average ROI Increase' },
            { number: '24/7', label: 'Expert Support' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;