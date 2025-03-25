
import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Set up intersection observer for fade-in animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="page-transition pt-24">
      {/* Hero Section */}
      <section className="container py-24">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-6">
            Get in Touch
          </span>
          <h1 className="heading-xl mb-6">Let's Connect</h1>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto text-balance">
            Have a question about our products or philosophy? We'd love to hear from you.
          </p>
        </div>
      </section>
      
      {/* Contact Details */}
      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Mail className="h-6 w-6 mb-4" />,
              title: "Email Us",
              details: "hello@designstudio.com",
              link: "mailto:hello@designstudio.com"
            },
            {
              icon: <Phone className="h-6 w-6 mb-4" />,
              title: "Call Us",
              details: "+1 (555) 123-4567",
              link: "tel:+15551234567"
            },
            {
              icon: <MapPin className="h-6 w-6 mb-4" />,
              title: "Visit Us",
              details: "123 Design Street, New York, NY 10001",
              link: "https://maps.google.com"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="glass rounded-2xl p-8 text-center reveal opacity-0"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="flex flex-col items-center">
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <a 
                  href={item.link} 
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  {item.details}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="container py-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          <div className="reveal opacity-0">
            <h2 className="heading-md mb-6">Send Us a Message</h2>
            <p className="text-foreground/70 mb-8 text-balance">
              We aim to respond to all inquiries within 24 hours. Whether you have a question about a product, 
              want to discuss a custom order, or just want to say hello, we're here to help.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder="Product Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 resize-none"
                  placeholder="Tell us what you're looking for..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-foreground text-background font-medium rounded-lg transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="glass rounded-2xl p-8 reveal opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="bg-foreground/5 h-96 rounded-lg flex items-center justify-center mb-6">
              <span className="text-lg font-medium text-foreground/40">Map</span>
            </div>
            
            <h3 className="text-xl font-semibold mb-2">Design Studio Headquarters</h3>
            <p className="text-foreground/70 mb-4">
              123 Design Street<br />
              New York, NY 10001
            </p>
            
            <div className="border-t border-border pt-6 mt-6">
              <h4 className="font-medium mb-2">Opening Hours</h4>
              <ul className="space-y-1 text-foreground/70">
                <li>Monday - Friday: 9am - 6pm</li>
                <li>Saturday: 10am - 4pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-balance">
              Find answers to some of our most commonly asked questions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Do you ship internationally?",
                answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location."
              },
              {
                question: "What is your return policy?",
                answer: "We offer a 30-day return policy for all unused items in their original packaging."
              },
              {
                question: "Do you offer custom designs?",
                answer: "Yes, we can create custom pieces to suit your specific needs. Contact us for more information."
              },
              {
                question: "How long do orders take to ship?",
                answer: "Most orders ship within 1-3 business days. Custom orders may take longer."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="glass rounded-2xl p-8 reveal opacity-0"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-foreground/70 text-balance">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
