import React, { useState } from "react";

const faqs = [
  {
    question: "What is GarageSaarthi and how can it help my business?",
    answer:
      "GarageSaarthi is a smart, all-in-one garage management platform designed specifically for auto workshops. It streamlines your daily operations by helping you manage job cards, track customer history, generate professional invoices, and monitor your business growth effortlessly in one place.",
  },
  {
    question: "Do I need technical expertise to use the software?",
    answer:
      "Not at all! GarageSaarthi is built with simplicity in mind. Our user-friendly interface ensures that you and your mechanics can start using the software with zero technical background and minimal training.",
  },
  {
    question: "Is my business data secure with GarageSaarthi?",
    answer:
      "Yes, absolutely. We use industry-standard encryption and secure cloud servers to ensure that all your customer data, financial records, and business insights are completely safe, backed up, and protected from unauthorized access.",
  },
  {
    question: "Can I use GarageSaarthi on my mobile phone or tablet?",
    answer:
      "Yes! GarageSaarthi is fully responsive and cloud-based. You can access your dashboard and manage your workshop from anywhere, using any device, whether it's a smartphone, tablet, laptop, or desktop computer.",
  },
  {
    question: "Will it help me retain more customers?",
    answer:
      "Definitely. With our comprehensive service history tracking and automated reminders for upcoming services, you can provide a highly personalized experience to your customers, increasing their satisfaction and loyalty.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className="px-4 lg:px-15 2xl:px-50 pb-10 lg:pb-20 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4">
            Frequently Asked <span className="relative inline-block">
            Questions
            <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]"></span>
          </span>
          </h2>
          <p className="text-sm md:text-base max-w-2xl mx-auto">
            Everything you need to know about GarageSaarthi and how it can transform your workshop.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-gray-200"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none cursor-pointer"
                >
                  <span
                    className={`text-sm md:text-lg font-medium pr-4 ${
                      isOpen ? "text-black" : "text-[#0F172A]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${
                      isOpen ? " text-primary" : " text-gray-500"
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={isOpen ? "M20 12H4" : "M12 4v16m8-8H4"}
                      />
                    </svg>
                  </div>
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out border-t border-gray-200 ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 py-4 text-gray-600 text-base md:text-md leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
