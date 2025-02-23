"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Cpu, Globe2, MessageSquareCode, Mic, Rocket, Users2, Sparkles, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Image from 'next/image';
import backgroundImage from '@/lib/img.jpg';

interface CalNamespace {
  ns: {
    [key: string]: any;
  };
  q: any[];
  loaded: boolean;
  (command: string, arg1?: any, arg2?: any): void;
}

declare global {
  interface Window {
    Cal?: CalNamespace;
  }
}

export {};

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; left: string }>>([]);
  const { toast } = useToast();

  useEffect(() => {
    const particleCount = 50;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
    }));
    setParticles(newParticles);
  }, []);

  const stats = [
    { value: "85%", label: "Increase in Operational Efficiency", icon: <Rocket className="w-6 h-6 text-blue-400" /> },
    { value: "3.5x", label: "Return on AI Investment", icon: <Sparkles className="w-6 h-6 text-purple-400" /> },
    { value: "60%", label: "Cost Reduction", icon: <Users2 className="w-6 h-6 text-green-400" /> },
    { value: "92%", label: "Client Satisfaction Rate", icon: <Brain className="w-6 h-6 text-pink-400" /> },
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Workflow Automation",
      description: "Streamline your business processes with intelligent automation powered by cutting-edge AI",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Custom AI Agents",
      description: "Tailored AI solutions that understand and adapt to your specific business needs",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <MessageSquareCode className="w-8 h-8" />,
      title: "Advanced LLM Customization",
      description: "Harness the power of language models fine-tuned for your industry",
      gradient: "from-pink-500 to-red-500",
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Voice Agents",
      description: "Natural voice interactions that transform customer experience",
      gradient: "from-red-500 to-orange-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, Metnify",
      company: "Maleta",
      content: "Vertica AI helped us build a complex, AI-powered mobile app that works flawlessly on both iOS and Android. Their expertise in AI integration and cost-effective solutions exceeded our expectations. The end result was exactly what we envisioned, but at a fraction of the cost quoted by other agencies.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      name: "Rafael Santos",
      role: "Operations Director",
      company: "RestauraTech Brazil",
      content: "The end-to-end AI workflow automation system that Vertica AI implemented has transformed our restaurant chain operations. Their solution streamlined everything from inventory management to customer service, resulting in unprecedented efficiency gains across our 50+ locations.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "James Harrison",
      role: "CEO",
      company: "TechForge UK",
      content: "We knew we needed AI integration but didn't know where to start. Vertica AI's comprehensive assessment and implementation strategy increased our productivity by 40% while significantly reducing operational costs. Their expertise in AI transformation was invaluable.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
      gradient: "from-pink-500 to-red-500"
    }
  ];

  const handleCalendarClick = () => {
    if (typeof window !== 'undefined' && window.Cal) {
      window.Cal('init', '30min', {origin: 'https://cal.com'});
      window.Cal.ns['30min']('inline', {
        elementOrSelector: '#my-cal-inline',
        config: {
          layout: 'month_view',
          hideEventTypeDetails: false
        },
        calLink: 'vertica-ai/30min',
      });

      // Show the calendar container
      const calendarContainer = document.getElementById("my-cal-inline");
      if (calendarContainer) {
        calendarContainer.style.display = "block";
        calendarContainer.classList.add("backdrop-blur-sm", "bg-black/50");
      }

      toast({
        title: "Opening Calendar",
        description: "Please select a convenient time for our meeting.",
        duration: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="cyber-grid absolute inset-0 opacity-20" />
        <div className="absolute inset-0 opacity-30">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="relative mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"
              />
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-7xl font-bold mb-6 relative"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  Vertica AI
                </span>
              </motion.h1>
            </div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto"
            >
              Elevate your business with custom AI solutions. We don't just implement AI – we revolutionize how your business operates.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl font-light text-blue-400/80 italic"
            >
              <span className="mr-2"></span>
              Where Innovation Meets Intelligence
              <span className="ml-2"></span>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute -bottom-12 left-0 w-full h-24 bg-background transform -skew-y-3" />
      </section>

      {/* Stats Section */}
      <section className="py-20 stats-gradient relative">
        <div className="cyber-grid absolute inset-0 opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary/50 p-6 rounded-xl backdrop-blur-sm hover:bg-secondary/60 transition-all duration-300"
              >
                <div className="mb-4 transform hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <h3 className="text-4xl font-bold gradient-text mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Comparison Section */}
      <section className="py-20 relative">
        <div className="cyber-grid absolute inset-0 opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Traditional Business Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Card className="p-8 bg-red-500/10 backdrop-blur-sm border-0 hover:bg-red-500/20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-red-400">Bob's Business (Without AI)</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <X className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Spending hours manually sorting through customer emails, missing important ones</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <X className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Coffee-fueled late nights trying to forecast inventory needs</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <X className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Playing phone tag with customers for appointment scheduling</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <X className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Drowning in spreadsheets trying to analyze business trends</p>
                  </div>
                  <div className="mt-6 p-4 bg-red-500/5 rounded-lg">
                    <p className="text-sm text-red-400 italic">
                      "I haven't seen my family in what feels like weeks... Is this what running a business is supposed to feel like?"
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* AI-Enhanced Business Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Card className="p-8 bg-blue-500/10 backdrop-blur-sm border-0 hover:bg-blue-500/20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Your Business (With Vertica AI)</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Sparkles className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">AI handles email triage while you sip your morning coffee ☕</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Brain className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Predictive AI forecasts inventory needs before you even think about it 🤖</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MessageSquareCode className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Automated scheduling system that works while you sleep 😴</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Cpu className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Real-time analytics that make sense of your data in seconds 📈</p>
                  </div>
                  <div className="mt-6 p-4 bg-blue-500/5 rounded-lg">
                    <p className="text-sm text-blue-400 italic">
                      "Just got back from vacation, and my business ran better than ever! Is this what the future feels like?" 🌴
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="cyber-grid absolute inset-0 opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Our AI Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 h-full bg-secondary/50 backdrop-blur-sm border-0 hover:bg-secondary/60 transition-all duration-300">
                  <div className={`mb-4 bg-gradient-to-r ${feature.gradient} p-3 rounded-lg w-fit glow-effect`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="cyber-grid absolute inset-0 opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <Card className="p-6 h-full bg-secondary/50 backdrop-blur-sm border-0 hover:bg-secondary/60 transition-all duration-300">
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-full overflow-hidden mb-4 ring-2 ring-offset-2 ring-offset-background ring-${testimonial.gradient}`}>
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <blockquote className="text-muted-foreground italic mb-4">"{testimonial.content}"</blockquote>
                  </div>
                  <div className="mt-auto">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                      {testimonial.company}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 stats-gradient relative">
        <div className="cyber-grid absolute inset-0 opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-4xl font-bold mb-6 gradient-text"
              >
                Global Impact
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground mb-6"
              >
                Trusted by businesses across the globe, from startups to enterprises in the UK, Brazil, USA, Jordan, and beyond.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center space-x-4 bg-secondary/50 p-4 rounded-lg backdrop-blur-sm hover:bg-secondary/60 transition-all duration-300"
              >
                <Globe2 className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-semibold gradient-text">20+ Countries Served</span>
              </motion.div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="p-6 text-center bg-secondary/50 backdrop-blur-sm border-0 hover:bg-secondary/60 transition-all duration-300">
                    <Users2 className="w-10 h-10 mx-auto mb-4 text-purple-400" />
                    <p className="text-2xl font-bold gradient-text">100+</p>
                    <p className="text-muted-foreground">Clients</p>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="p-6 text-center bg-secondary/50 backdrop-blur-sm border-0 hover:bg-secondary/60 transition-all duration-300">
                    <Rocket className="w-10 h-10 mx-auto mb-4 text-blue-400" />
                    <p className="text-2xl font-bold gradient-text">250+</p>
                    <p className="text-muted-foreground">Projects</p>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="cyber-grid absolute inset-0 opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6 gradient-text">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today and discover how we can revolutionize your operations with AI.
            </p>
            <Button
              size="lg"
              onClick={handleCalendarClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full hover:scale-105 transition-all duration-300 glow-effect"
            >
              Schedule a Meeting
              <ChevronRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Calendar Modal Container */}
      <div 
        id="my-cal-inline" 
        className="fixed inset-0 z-50 hidden"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            const container = document.getElementById("my-cal-inline");
            if (container) container.style.display = "none";
          }
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg shadow-xl w-full max-w-4xl p-6">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0"
                onClick={() => {
                  const container = document.getElementById("my-cal-inline");
                  if (container) container.style.display = "none";
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}