'use client';

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { contactService } from "@/lib/services/contactService";

const imgGrid = "/images/contact-us/grid.png";
const imgRectangleBg = "/images/contact-us/rectangle-bg.png";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      await contactService.create(formData);
      alert('Thank you for contacting us! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to submit contact form:', error);
      alert('Failed to submit contact form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white w-full">
      <Header transparent whiteLogo />

      <section className="relative w-full overflow-hidden font-montserrat">
        <div className="flex flex-col lg:flex-row">
          <div className="relative w-full lg:w-1/2 bg-[#267275] min-h-[500px] lg:min-h-[713px] flex flex-col justify-center py-12 sm:py-16 lg:py-20">
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <Image
                alt=""
                src={imgGrid}
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute right-[-100px] top-[199px] w-[402px] h-[376px] opacity-[0.42] -scale-y-100 hidden lg:block">
              <Image
                alt=""
                src={imgRectangleBg}
                fill
                className="object-cover"
              />
            </div>

            <div className="relative z-10 max-w-7xl ml-auto ps-10 pe-25 pt-20">
              <div className="mb-12 sm:mb-16 lg:mb-[138px]">
                <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[75px] leading-[1.1] sm:leading-[1.05] text-white uppercase font-light mb-0">
                  Got an Idea?
                </h1>
                <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[75px] leading-[1.1] sm:leading-[1.05] text-white uppercase font-light">
                  Let&apos;s Talk
                </h1>
              </div>

              <div className="text-[#ededee] text-[15px] sm:text-[16px] lg:text-[17px] tracking-[-0.32px]">
                <a
                  href="mailto:support@nexiumtrio.com"
                  className="underline block mb-3 sm:mb-4 lg:mb-[17px] leading-[28px] sm:leading-[32px] lg:leading-[34px] hover:opacity-80 transition-opacity"
                >
                  support@nexiumtrio.com
                </a>
                <a
                  href="#"
                  className="underline block mb-3 sm:mb-4 lg:mb-[17px] leading-[28px] sm:leading-[32px] lg:leading-[34px] hover:opacity-80 transition-opacity"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="underline block mb-3 sm:mb-4 lg:mb-[17px] leading-[28px] sm:leading-[32px] lg:leading-[34px] hover:opacity-80 transition-opacity"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="underline block leading-[28px] sm:leading-[32px] lg:leading-[34px] hover:opacity-80 transition-opacity"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="relative w-full lg:w-1/2 bg-[#ededee] min-h-[500px] lg:min-h-[713px] flex items-center justify-center py-12 sm:py-16 lg:py-20">
            <div className="relative z-10 max-w-7xl mx-auto w-full px-4 lg:px-40 pt-20">
              <form onSubmit={handleSubmit} className="w-full max-w-[465px]">
              <div className="mb-8 sm:mb-10 lg:mb-[40px]">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-[18px] sm:text-[20px] lg:text-[22px] text-[#353638] bg-transparent border-b-2 border-[#ddd5d5] pb-3 lg:pb-[13px] outline-none placeholder:text-[#777]"
                  required
                />
              </div>

              <div className="mb-8 sm:mb-10 lg:mb-[40px]">
                <input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-[18px] sm:text-[20px] lg:text-[22px] text-[#353638] bg-transparent border-b-2 border-[#ddd5d5] pb-3 lg:pb-[13px] outline-none placeholder:text-[#777]"
                  required
                />
              </div>

              <div className="mb-10 sm:mb-12 lg:mb-[44px]">
                <textarea
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-[18px] sm:text-[20px] lg:text-[22px] text-[#353638] bg-transparent border-b-2 border-[#ddd5d5] pb-3 lg:pb-[13px] outline-none resize-none placeholder:text-[#777]"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#267275] text-white h-[48px] sm:h-[52px] lg:h-[56px] flex items-center justify-center text-[12px] sm:text-[13px] lg:text-[14px] tracking-[3px] sm:tracking-[3.6px] lg:tracking-[4.2px] uppercase font-bold hover:bg-[#1f5e61] transition-colors font-josefin disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'SENDING...' : 'SEND'}
              </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
