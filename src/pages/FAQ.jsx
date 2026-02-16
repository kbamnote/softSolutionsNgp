import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      category: 'General Questions',
      questions: [
        {
          question: 'What types of loans does Easilon offer?',
          answer: 'Easilon offers a comprehensive range of loan products including Home Loans, Auto Loans, Personal Loans, Business Loans, Education Loans, and Bike Loans. Each product is designed to meet specific financial needs with competitive rates and flexible terms.',
        },
        {
          question: 'How do I apply for a loan?',
          answer: 'You can apply for a loan through our website by clicking the "Apply for Loan" button, visiting one of our branches, or calling our customer service at 16205. The online application process is quick and can be completed in just a few minutes.',
        },
        {
          question: 'What is the minimum and maximum loan amount?',
          answer: 'Our loan amounts range from $1,000 to $500,000 depending on the type of loan and your eligibility. Personal loans typically range from $1,000 to $50,000, while home loans can go up to $500,000.',
        },
      ],
    },
    {
      category: 'Eligibility & Requirements',
      questions: [
        {
          question: 'What are the eligibility criteria for a loan?',
          answer: 'To be eligible for an Easilon loan, you must be at least 21 years old, have a stable source of income, maintain a good credit score (typically 650+), and be a resident of the United States. Specific requirements may vary based on the loan type.',
        },
        {
          question: 'What documents do I need to apply?',
          answer: 'Generally, you will need: Valid ID proof (Driver\'s License or Passport), Proof of income (recent pay stubs or tax returns), Bank statements for the last 3 months, and Proof of address. Additional documents may be required based on the loan type.',
        },
        {
          question: 'Can I apply if I have bad credit?',
          answer: 'Yes, we consider applications from individuals with various credit backgrounds. While a higher credit score improves your chances and may get you better rates, we evaluate each application holistically, considering factors like income stability and employment history.',
        },
      ],
    },
    {
      category: 'Interest Rates & Fees',
      questions: [
        {
          question: 'What interest rates do you offer?',
          answer: 'Our interest rates vary based on the loan type, your credit score, and other factors. Personal loans typically range from 8.99% to 15% APR. Home loans start from 6.5% APR. Use our loan calculator to get an estimate for your specific situation.',
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'No, we believe in complete transparency. All fees including processing fees, late payment charges, and prepayment penalties (if applicable) are clearly disclosed in your loan agreement. There are no hidden charges.',
        },
        {
          question: 'Can I prepay my loan?',
          answer: 'Yes, you can prepay your loan at any time. For personal loans, there are no prepayment penalties after the first 12 months. For home loans, prepayment penalties may apply depending on your specific agreement.',
        },
      ],
    },
    {
      category: 'Repayment',
      questions: [
        {
          question: 'What repayment options are available?',
          answer: 'We offer flexible repayment options including monthly EMIs, bi-weekly payments, and automatic bank deductions. You can choose a repayment tenure ranging from 6 months to 30 years depending on the loan type.',
        },
        {
          question: 'What happens if I miss a payment?',
          answer: 'If you miss a payment, a late fee may be charged, and it may impact your credit score. We recommend contacting our customer service immediately if you anticipate difficulty making a payment. We may be able to offer temporary relief options.',
        },
        {
          question: 'How can I check my loan balance?',
          answer: 'You can check your loan balance anytime by logging into your online account, using our mobile app, or calling our customer service at 16205. You can also visit any of our branches for assistance.',
        },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-easilon-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            className="w-full h-full object-cover opacity-20"
            alt="FAQ background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-easilon-navy/95 to-easilon-navy/80"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-6 relative z-10 text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6">FAQ's</h1>
          <div className="flex items-center justify-center gap-2 text-white">
            <span className="opacity-60">Home</span>
            <span className="text-easilon-cyan">›</span>
            <span className="text-easilon-cyan">FAQ</span>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="flex gap-1">
                <div className="w-6 h-[2px] bg-easilon-cyan"></div>
                <div className="w-3 h-[2px] bg-easilon-cyan"></div>
              </div>
              <span className="text-easilon-cyan font-bold uppercase tracking-[0.2em] text-xs">Have Questions?</span>
              <div className="flex gap-1">
                <div className="w-3 h-[2px] bg-easilon-cyan"></div>
                <div className="w-6 h-[2px] bg-easilon-cyan"></div>
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-easilon-navy">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            {faqs.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="text-xl font-bold text-easilon-navy mb-6 flex items-center gap-2">
                  <HelpCircle size={24} className="text-easilon-cyan" />
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.questions.map((faq, index) => {
                    const globalIndex = catIndex * 10 + index;
                    return (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenIndex(openIndex === globalIndex ? -1 : globalIndex)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-easilon-navy pr-4">{faq.question}</span>
                          {openIndex === globalIndex ? (
                            <ChevronUp size={20} className="text-easilon-cyan flex-shrink-0" />
                          ) : (
                            <ChevronDown size={20} className="text-easilon-cyan flex-shrink-0" />
                          )}
                        </button>
                        {openIndex === globalIndex && (
                          <div className="px-6 pb-6">
                            <p className="text-easilon-gray leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-easilon-navy mb-4">
              Still have questions?
            </h3>
            <p className="text-easilon-gray mb-6">
              Can't find the answer you're looking for? Please contact our friendly team.
            </p>
            <a
              href="/contact"
              className="inline-block bg-easilon-cyan text-white px-8 py-4 font-bold text-sm tracking-wider hover:bg-easilon-navy transition-all uppercase"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
