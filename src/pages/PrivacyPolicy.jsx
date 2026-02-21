import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, FileText, UserCheck, Mail, ChevronRight } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Information We Collect',
      content: [
        'Personal identification information (Name, email address, phone number, etc.)',
        'Financial information (Income, employment details, bank statements)',
        'Identity verification documents (PAN card, Aadhaar, etc.)',
        'Device and usage information when you visit our website',
        'Communication records between you and our team',
      ],
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'To process your loan applications and provide our services',
        'To verify your identity and prevent fraud',
        'To communicate with you about your account and our services',
        'To improve our website and customer experience',
        'To comply with legal and regulatory requirements',
        'To send you promotional offers (with your consent)',
      ],
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'We use 256-bit SSL encryption to protect your data',
        'Regular security audits and vulnerability assessments',
        'Strict access controls and authentication protocols',
        'Secure data centers with 24/7 monitoring',
        'Employee training on data protection best practices',
      ],
    },
    {
      icon: UserCheck,
      title: 'Your Rights',
      content: [
        'Right to access your personal data',
        'Right to correct inaccurate information',
        'Right to request deletion of your data',
        'Right to withdraw consent for marketing communications',
        'Right to data portability',
        'Right to lodge a complaint with regulatory authorities',
      ],
    },
    {
      icon: Shield,
      title: 'Data Sharing',
      content: [
        'We do not sell your personal information to third parties',
        'Data is shared only with regulatory authorities when required by law',
        'Partner banks and financial institutions (only for loan processing)',
        'Service providers who assist in our operations (under strict confidentiality)',
        'Credit bureaus for credit score checks (with your consent)',
      ],
    },
    {
      icon: Mail,
      title: 'Contact Us',
      content: [
        'Email: privacy@softsolution.com',
        'Phone: 16205 (Toll Free)',
        'Address: 123 Finance Street, Business District, Nagpur, 440001, India',
        'For any privacy-related concerns or to exercise your rights',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-easilon-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&q=80"
            className="w-full h-full object-cover opacity-20"
            alt="Privacy Policy background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-easilon-navy/95 to-easilon-navy/80"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="flex items-center gap-2 text-white mb-4">
            <Link to="/" className="opacity-60 hover:opacity-100 transition-opacity">Home</Link>
            <span className="text-easilon-cyan">›</span>
            <Link to="/about" className="opacity-60 hover:opacity-100 transition-opacity">About Us</Link>
            <span className="text-easilon-cyan">›</span>
            <span className="text-easilon-cyan">Privacy Policy</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-300 max-w-2xl">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto max-w-7xl px-6">
          <p className="text-sm text-gray-500">
            <strong>Last Updated:</strong> February 21, 2026
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Soft Solution (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with the terms, please do not access our services.
            </p>
            <div className="bg-easilon-cyan/10 border-l-4 border-easilon-cyan p-6 rounded-r-lg">
              <p className="text-easilon-navy font-medium">
                <strong>Important:</strong> This Privacy Policy applies to all information collected through our website, mobile applications, and any related services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-easilon-cyan"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-easilon-cyan/10 rounded-full flex items-center justify-center">
                    <section.icon size={28} className="text-easilon-cyan" />
                  </div>
                  <h2 className="text-xl font-bold text-easilon-navy">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <ChevronRight size={18} className="text-easilon-cyan flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Policy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-easilon-navy mb-6">Cookie Policy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-easilon-navy mb-2">Essential Cookies</h3>
              <p className="text-sm text-gray-600">Required for the website to function properly</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-easilon-navy mb-2">Analytics Cookies</h3>
              <p className="text-sm text-gray-600">Help us understand how visitors interact with our website</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-easilon-navy mb-2">Marketing Cookies</h3>
              <p className="text-sm text-gray-600">Used to deliver relevant advertisements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Changes to Policy */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-easilon-navy mb-6">Changes to This Policy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-easilon-navy">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Have Questions About Your Privacy?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our dedicated privacy team is here to help you understand how we protect your data and address any concerns you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-easilon-cyan text-white font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-white hover:text-easilon-navy transition-all"
            >
              Contact Privacy Team
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-white hover:text-easilon-navy transition-all"
            >
              Back to About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
