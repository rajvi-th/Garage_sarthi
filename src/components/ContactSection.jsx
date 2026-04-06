import React, { useState } from "react";
import GformBg from "../assets/optimized/Gform_extracted_0.png";
import BookDemoIcon from "../assets/icons/Bookd.png";
import Button from "./common/Button";
import DatePicker from "./common/DatePicker";
import dayjs from "dayjs";

const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL;

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(null);
  const [mobile, setMobile] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [submittedMobile, setSubmittedMobile] = useState("");

  const handleBookDemo = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const formData = new FormData(e.target);
    if (date) {
      formData.set("demo_date", dayjs(date).format("YYYY-MM-DD"));
    }

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmittedEmail(email);
        setSubmittedMobile(mobile);
        setIsModalOpen(true);
        e.target.reset();
        setEmail("");
        setDate(null);
        setMobile("");
      } else {
        const data = await response.json();
        setSubmitError(
          data?.errors?.map((err) => err.message).join(", ") ||
            "Something went wrong. Please try again."
        );
      }
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-4 lg:px-15 2xl:px-50 pb-10 lg:pb-20 flex justify-center">
      <div
        className="relative w-full mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full min-h-[420px] rounded-[28px] overflow-hidden flex items-center"
        style={{
          backgroundImage: `url(${GformBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/60 to-black/90" />

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-5 px-6 md:px-12 lg:px-16 h-full">
          {/* Left Content */}
          <div className="flex-1 text-white flex flex-col justify-center h-full pt-6 lg:pt-0">
            <h2 className="text-xl md:text-2xl lg:text-[40px] font-semibold leading-tight mb-6">
              Ready to Simplify Your Garage
              <br className="hidden md:block" /> Management?
            </h2>

            <p className="text-white/80 text-base md:text-lg max-w-xl mb-3">
              Get a free, personalized demo from our experts.
            </p>

            <p className="text-white/70 text-base md:text-lg max-w-xl">
              We'll help you set up GarageSaarthi, understand all features, and
              get your garage running smarter from day one.
            </p>
          </div>

          {/* Right Form */}
          <form onSubmit={handleBookDemo} className="w-full lg:max-w-[380px] mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-white text-xs mb-1 block">
                  Full Name
                </label>
                <input
                  type="text"
                  name="full_name"
                  required
                  placeholder="Full name"
                  className="w-full rounded-xl px-4 py-3 text-sm bg-white outline-none"
                />
              </div>

              <div>
                <label className="text-white text-xs mb-1 block">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full rounded-xl px-4 py-3 text-sm bg-white outline-none"
                />
              </div>
            </div>


            {/* Date & Mobile Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-white text-xs mb-1 block">Date</label>
                <DatePicker
                  name="demo_date"
                  required
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                  minDate={new Date()}
                />
              </div>
              <div>
                <label className="text-white text-xs mb-1 block">Phone Number</label>
                <input
                  type="tel"
                  name="mobile"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  onKeyDown={(e) => {
                    if (!/[0-9]/.test(e.key) && !["Backspace","Delete","Tab","ArrowLeft","ArrowRight"].includes(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  placeholder="Phone Number"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  className="w-full rounded-xl px-4 py-3 text-sm bg-white outline-none"
                />
              </div>
            </div>

            {/* Garage/Workshop Name - Full Width */}
            <div className="mb-4">
              <label className="text-white text-xs mb-1 block">
                Garage/Workshop Name
              </label>
              <input
                type="text"
                name="garage_name"
                required
                placeholder="Garage Name"
                className="w-full rounded-xl px-4 py-3 text-sm bg-white outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="text-white text-xs mb-1 block">
                Your Message
              </label>
              <textarea
                name="message"
                rows="3"
                required
                placeholder="Write your message"
                className="w-full rounded-2xl px-4 py-3 text-sm bg-white outline-none resize-none"
              />
            </div>

            {submitError && (
              <p className="text-red-400 text-xs mb-3 text-center">{submitError}</p>
            )}

            <div className="relative flex justify-center sm:justify-end pb-6">
              <Button
                type="submit"
                variant="hero"
                className="w-full sm:w-auto justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Book Demo"}
                {!isSubmitting && (
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 ">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl w-full max-w-full md:max-w-3xl 2xl:max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#EFE9E7] hover:bg-[#f3e6e1] transition-colors z-20 cursor-pointer"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="py-12 md:py-10 2xl:py-15 px-8 flex flex-col items-center text-center">
              {/* Image */}
              <div className="w-full flex justify-center pb-5 2xl:pb-8">
                <img 
                  src={BookDemoIcon} 
                  alt="Booking Success" 
                  className="block w-full max-w-md" 
                />
              </div>

              {/* Text */}
              <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">
                Your demo is successfully booked
              </h3>
              <p className="text-gray-600 text-sm md:text-md 2xl:text-xl max-w-xl 2xl:max-w-2xl leading-relaxed">
                You will receive a response regarding your GarageSaarthi registration demo at your registered email address <span className="font-bold text-[#0F172A]">{submittedEmail}</span> or Mobile Number <span className="font-bold text-[#0F172A]">{submittedMobile}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;

