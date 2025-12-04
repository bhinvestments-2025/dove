"use client";
import ContactForm from "@/components/forms/ContactForm";
import { useState } from "react";
import { toast } from "sonner";
import { MapPin } from "lucide-react";

export default function Footer() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
    privacyConsent: false,
    smsConsent: false,
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setContactForm({
      name: "",
      email: "",
      message: "",
      privacyConsent: false,
      smsConsent: false,
    });
  };

  return (
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
                <ContactForm onSubmit={(data) => handleContactSubmit(data)} />
            </div>

            {/* Contact Information */}
            <div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-3 mt-1 flex-shrink-0 text-blue-400" size={20} />
                  <p>199 Lee Avenue, Suite 157<br />Brooklyn, NY 11211</p>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-3 flex-shrink-0 text-blue-400" size={20} />
                  <a href="mailto:info@doveequities.com" className="hover:text-blue-400 transition-colors">info@doveequities.com</a>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-800">
                <h4 className="font-semibold mb-3">Useful Links</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => window.open('https://doveequities.h.trustco.ai/', '_blank')}
                    className="block hover:text-blue-400 transition-colors underline"
                  >
                    Connect Via Text
                  </button>

                  <button
                    onClick={() => window.open('https://doveequities.h.trustco.ai/#termsArea', '_blank')}
                    className="block hover:text-blue-400 transition-colors underline"
                  >
                    Messaging T&Cs
                  </button>

                  <button
                    onClick={() => window.open('https://doveequities.h.trustco.ai/#privacyArea', '_blank')}
                    className="block hover:text-blue-400 transition-colors underline"
                  >
                    Messaging Privacy Policy
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm space-y-1">
            <p>© Copyright 2024 Dove Equities</p>

            <p>
              <a
                href="https://doveequities.h.trustco.ai/#privacyArea"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Privacy Policy
              </a>
              {" "} | {" "}
              <a
                href="https://doveequities.h.trustco.ai/#termsArea"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Terms and Conditions
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
}