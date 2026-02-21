import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { ToastContainer, useToast } from '../components/Toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const { toasts, addToast, removeToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    addToast('Thank you for your message! We will get back to you soon.', 'success');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Address',
      details: ['123 Finance Street', 'Business District', 'Nagpur, 440001, India'],
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['16205 (Toll Free)', '+91 (555) 123-4567'],
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['needhelp@company.com', 'support@easilon.com'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 - 6:00', 'Sat: 10:00 - 2:00'],
    },
  ];

  return (
    <>
      <ToastContainer toasts={toasts} removeToast={removeToast} />
      <div>
        {/* Hero Section */}
      <section className="relative py-32 bg-easilon-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            className="w-full h-full object-cover opacity-20"
            alt="Contact background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-easilon-navy/95 to-easilon-navy/80"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-6 relative z-10 text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6">Contact Us</h1>
          <div className="flex items-center justify-center gap-2 text-white">
            <span className="opacity-60">Home</span>
            <span className="text-easilon-cyan">›</span>
            <span className="text-easilon-cyan">Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-easilon-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon size={28} className="text-easilon-cyan" />
                </div>
                <h3 className="text-xl font-bold text-easilon-navy mb-4">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-easilon-gray">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1">
                  <div className="w-6 h-[2px] bg-easilon-cyan"></div>
                  <div className="w-3 h-[2px] bg-easilon-cyan"></div>
                </div>
                <span className="text-easilon-cyan font-bold uppercase tracking-[0.2em] text-xs">Get In Touch</span>
              </div>
              <h2 className="text-4xl font-extrabold text-easilon-navy mb-6">
                Send Us A Message
              </h2>
              <p className="text-easilon-gray mb-8">
                Have questions about our loan services? Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-easilon-cyan"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-easilon-cyan"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-easilon-cyan"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-easilon-cyan"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-easilon-cyan resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="bg-easilon-cyan text-white px-8 py-4 font-bold text-sm tracking-wider flex items-center gap-2 hover:bg-easilon-navy transition-all uppercase"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="h-full min-h-[400px] bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709471133!2d79.00246721538363!3d21.1593402916538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d251c0df2fd!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location - Nagpur, India"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Contact;
