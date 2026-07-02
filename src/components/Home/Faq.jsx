import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How does CostWatch work?",
      answer: "It's simple! You just add the link of the product you want to track (from Trendyol, Temu, etc.) to your dashboard. Our backend system periodically monitors the price of that product and sends you an instant notification when the price drops."
    },
    {
      question: "How often are price changes monitored?",
      answer: "Depending on your selected pack, prices are fully automated and tracked daily, every 6 hours, or in real-time (hourly) to ensure you get the most up-to-date information."
    },
    {
      question: "How will I receive notifications?",
      answer: "Once the price drops to your target level or hits its lowest point, our system automatically triggers and sends an instant alert directly to your registered email address."
    },
    {
      question: "Are the payment methods secure?",
      answer: "Yes, absolutely. All payment processes are handled through fully secure, encrypted banking infrastructures that comply with international security standards. Your card details are never stored on our database."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="w-full bg-slate-50/30 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2">
            FAQ
          </h2>
          <p className="text-slate-500 text-sm">
            Have questions? We are here to help you understand how CostWatch works.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs transition-all duration-300 hover:border-slate-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-800 hover:text-indigo-600 transition-colors cursor-pointer select-none"
                >
                  <span className="text-base md:text-md pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 transition-transform duration-350 shrink-0 ${
                      isOpen ? 'rotate-180 text-indigo-600' : ''
                    }`} 
                  />
                </button>

                <div 
                  className={`transition-all duration-350 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 text-sm text-slate-600 bg-slate-50/50 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default faq;