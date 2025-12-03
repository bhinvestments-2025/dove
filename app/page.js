'use client'

import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Home, Clock, DollarSign, Shield, CheckCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from 'sonner';

const DoveEquitiesLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Form states
  const [heroForm, setHeroForm] = useState({ name: '', phone: '', address: '', email: '' }); 
  
  const [modalForm, setModalForm] = useState({ 
    name: '', 
    phone: '', 
    address: '', 
    email: '',
    bedrooms: '',
    bathrooms: '',
    floors: '',
    yearBuilt: '',
    propertyArea: '',
    totalFloors: '',
    notes: '',
    privacyConsent: false,
    smsConsent: false
  });
  
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you! We will contact you within 24 hours.');
    setHeroForm({ name: '', phone: '', address: '', email: '' });
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    toast.success('Cash offer request submitted! We\'ll reach out within 24 hours.');
    setModalForm({ 
      name: '', 
      phone: '', 
      address: '', 
      email: '',
      bedrooms: '',
      bathrooms: '',
      floors: '',
      yearBuilt: '',
      propertyArea: '',
      totalFloors: '',
      notes: '',
      privacyConsent: false,
      smsConsent: false
    });
    setModalOpen(false);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you soon.');
    setContactForm({ name: '', email: '', phone: '', message: '' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_7ee4cd2f-500b-4046-9ef5-6c05f3003821/artifacts/m0ldjtz1_Site%20Logo.png" 
                alt="Dove Equities Logo" 
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-blue-600 transition-colors">How It Works</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
              
              {/* Get Cash Offer Dialog */}
              <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Get Cash Offer
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-900">Get Your Cash Offer</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleModalSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {/* Full Name */}
                    <Input
                      placeholder="Full Name"
                      value={modalForm.name}
                      onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                      required
                    />

                    {/* Phone */}
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={modalForm.phone}
                      onChange={(e) => setModalForm({ ...modalForm, phone: e.target.value })}
                      required
                    />

                    {/* Address */}
                    <Input
                      placeholder="Property Address"
                      value={modalForm.address}
                      onChange={(e) => setModalForm({ ...modalForm, address: e.target.value })}
                      required
                    />

                    {/* Email */}
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={modalForm.email}
                      onChange={(e) => setModalForm({ ...modalForm, email: e.target.value })}
                      required
                    />

                    {/* Bedrooms */}
                    <Input
                      type="number"
                      placeholder="# of Bedrooms*"
                      value={modalForm.bedrooms}
                      onChange={(e) => setModalForm({ ...modalForm, bedrooms: e.target.value })}
                      required
                    />

                    {/* Bathrooms */}
                    <Input
                      type="number"
                      placeholder="# of Bathrooms*"
                      value={modalForm.bathrooms}
                      onChange={(e) => setModalForm({ ...modalForm, bathrooms: e.target.value })}
                      required
                    />

                    {/* Floors */}
                    <Input
                      type="number"
                      placeholder="# of Floors*"
                      value={modalForm.floors}
                      onChange={(e) => setModalForm({ ...modalForm, floors: e.target.value })}
                      required
                    />

                    {/* Year Built */}
                    <Input
                      type="number"
                      placeholder="Year of Construction*"
                      value={modalForm.yearBuilt}
                      onChange={(e) => setModalForm({ ...modalForm, yearBuilt: e.target.value })}
                      required
                    />

                    {/* Property Area */}
                    <Input
                      type="number"
                      placeholder="Property Area (sq ft)*"
                      value={modalForm.propertyArea}
                      onChange={(e) => setModalForm({ ...modalForm, propertyArea: e.target.value })}
                      required
                    />

                    {/* Total Floors (building) */}
                    <Input
                      type="number"
                      placeholder="Total Floors*"
                      value={modalForm.totalFloors}
                      onChange={(e) => setModalForm({ ...modalForm, totalFloors: e.target.value })}
                      required
                    />

                    {/* Notes section - full width */}
                    <Textarea
                      placeholder="Write your special notes here..."
                      value={modalForm.notes}
                      onChange={(e) => setModalForm({ ...modalForm, notes: e.target.value })}
                      className="md:col-span-2"
                      rows={3}
                    />

                    {/* CHECKBOXES */}
                    <div className="md:col-span-2 space-y-2 text-[10px] text-gray-400 leading-relaxed">

                      {/* Required Checkbox */}
                      <label className="flex items-start space-x-2">
                        <input
                          type="checkbox"
                          required
                          checked={modalForm.privacyConsent}
                          onChange={(e) =>
                            setModalForm({ ...modalForm, privacyConsent: e.target.checked })
                          }
                        />
                        <span>
                          I have read and agree to the{" "}
                          <a href="https://www.doveequities.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline">
                            Privacy Policy
                          </a>{" "}
                          and{" "}
                          <a href="https://www.doveequities.com/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="underline">
                            Terms and Conditions
                          </a>.
                        </span>
                      </label>

                      {/* Optional Checkbox */}
                      <label className="flex items-start space-x-2">
                        <input
                          type="checkbox"
                          checked={modalForm.smsConsent}
                          onChange={(e) =>
                            setModalForm({ ...modalForm, smsConsent: e.target.checked })
                          }
                        />
                        <span>
                          By submitting the contact form and signing up for texts, you consent to
                          receive marketing text messages from Dove Equities at the number
                          provided. Message frequency varies. Reply STOP to unsubscribe.
                        </span>
                      </label>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <div className="md:col-span-2">
                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Submit Request
                      </Button>
                    </div>
                  </form>

                </DialogContent>
              </Dialog>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-blue-600">Home</button>
              <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left text-gray-700 hover:text-blue-600">How It Works</button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-gray-700 hover:text-blue-600">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-blue-600">Contact</button>
              <Button onClick={() => { setModalOpen(true); setMobileMenuOpen(false); }} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Get Cash Offer
              </Button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 relative">
        <div className="relative h-[600px] sm:h-[700px]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url('https://customer-assets.emergentagent.com/job_7ee4cd2f-500b-4046-9ef5-6c05f3003821/artifacts/urqzq9w5_jason-dent-w3eFhqXjkZE-unsplash-scaled.jpg')`,
            }}
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="grid md:grid-cols-2 gap-8 w-full items-center">
              <div className="text-white space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  New York's #1 Homebuyers
                </h1>
                <p className="text-xl sm:text-2xl text-gray-100">
                  We buy houses in ANY condition
                </p>
                <div className="space-y-4 text-lg">
                  <p className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 flex-shrink-0 text-blue-400" size={24} />
                    <span>We buy properties in New York directly from property owners within three weeks or less</span>
                  </p>
                  <p className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 flex-shrink-0 text-blue-400" size={24} />
                    <span>No commission, closing costs, or hidden fees - all cash offers</span>
                  </p>
                  <p className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 flex-shrink-0 text-blue-400" size={24} />
                    <span>20+ Years of Proven Expertise</span>
                  </p>
                  <p className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 flex-shrink-0 text-blue-400" size={24} />
                    <span>Direct, person-to-person service - no MLS listings, no agents, no stress</span>
                  </p>
                </div>
              </div>

              {/* Hero Form (Replicated from Modal Form) */}
              <div className="bg-white rounded-lg shadow-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Your Cash Offer Today</h2>
                <p className="text-gray-600 mb-6">Please keep your line open, we'll call you today!</p>
                <form onSubmit={handleModalSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <Input
                    placeholder="Full Name"
                    value={modalForm.name}
                    onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={modalForm.phone}
                    onChange={(e) => setModalForm({ ...modalForm, phone: e.target.value })}
                    required
                  />

                  <Input
                    placeholder="Property Address"
                    value={modalForm.address}
                    onChange={(e) => setModalForm({ ...modalForm, address: e.target.value })}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={modalForm.email}
                    onChange={(e) => setModalForm({ ...modalForm, email: e.target.value })}
                    required
                  />

                  {/* Checkboxes for Hero Form */}
                  <div className="md:col-span-2 space-y-2 text-[10px] text-gray-400 leading-relaxed">

                    {/* Required Checkbox */}
                    <label className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        required
                        checked={modalForm.privacyConsent}
                        onChange={(e) =>
                          setModalForm({ ...modalForm, privacyConsent: e.target.checked })
                        }
                      />
                      <span>
                        I have read and agree to the{" "}
                        <a href="https://www.doveequities.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline">
                          Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a href="https://www.doveequities.com/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="underline">
                          Terms and Conditions
                        </a>.
                      </span>
                    </label>

                    {/* Optional Checkbox */}
                    <label className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        checked={modalForm.smsConsent}
                        onChange={(e) =>
                          setModalForm({ ...modalForm, smsConsent: e.target.checked })
                        }
                      />
                      <span>
                        By submitting the contact form and signing up for texts, you consent to
                        receive marketing text messages from Dove Equities at the number provided.
                        Consent is not a condition of purchase. Message frequency varies. Message and
                        data rates may apply. You can unsubscribe anytime by replying STOP. Text HELP
                        for help. Read our{" "}
                        <a href="https://www.doveequities.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline">
                          Privacy Policy
                        </a>{" "}
                        for more details.
                      </span>
                    </label>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <div className="md:col-span-2">
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Submit Request
                    </Button>
                  </div>
                </form>
                <p className="text-sm text-gray-500 mt-4 text-center">Free consultation with no obligation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Dove Equities?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Say goodbye to dealing with multiple agents and enjoy straightforward, effortless communication aimed at ensuring your property sale is the best it can be.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Clock className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Closing</h3>
              <p className="text-gray-600">Close in as little as 7 days or choose your own timeline. We work on your schedule.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">All Cash Offers</h3>
              <p className="text-gray-600">No financing contingencies. Get instant cash upon purchase completion with no hidden fees.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Home className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Any Condition</h3>
              <p className="text-gray-600">No repairs needed. We buy houses as-is, saving you time and money on renovations.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">20+ Years Experience</h3>
              <p className="text-gray-600">Proven expertise and professional service. We consistently prioritize fairness for our customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple, transparent, and hassle-free process</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold">
                  1
                </div>
              </div>
              <div 
                className="h-64 mb-6 rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1638262052640-82e94d64664a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2V8ZW58MHx8fHwxNzY0NTAxOTM4fDA&ixlib=rb-4.1.0&q=85')` }}
                aria-hidden="true"
              ></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Get Cash Offers</h3>
              <p className="text-gray-600 text-center">
                We purchase directly from you with no commission or extra fees. Get in touch and receive a quote within 48 hours.
              </p>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold">
                  2
                </div>
              </div>
              <div 
                className="h-64 mb-6 rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1764344807985-571bc389b5cc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxOZXclMjBZb3JrJTIwcmVhbCUyMGVzdGF0ZXxlbnwwfHx8fDE3NjQ1MDE5Mjl8MA&ixlib=rb-4.1.0&q=85')` }}
                aria-hidden="true"
              ></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Visit Us</h3>
              <p className="text-gray-600 text-center">
                Schedule a walkthrough with our team. We'll inspect your property and present an irresistible cash offer with no obligation.
              </p>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold">
                  3
                </div>
              </div>
              <div 
                className="h-64 mb-6 rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1578957492858-da6516a57530?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxOZXclMjBZb3JrJTIwcmVhbCUyMGVzdGF0ZXxlbnwwfHx8fDE3NjQ1MDE5Mjl8MA&ixlib=rb-4.1.0&q=85')` }}
                aria-hidden="true"
              ></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Get Paid</h3>
              <p className="text-gray-600 text-center">
                We'll purchase your home within three weeks or less, hassle-free. You choose the closing date that works best for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All Homes, In All Conditions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No matter your circumstances, we have a solution tailored for you. There are no strings attached. No open houses. No last-minute disappointments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: 'Single Family', icon: Home },
              { name: 'Town Houses', icon: Home },
              { name: 'Condominium', icon: Home },
              { name: 'Mobile Home', icon: Home },
              { name: 'Multi Family', icon: Home },
            ].map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                <type.icon className="mx-auto mb-4 text-blue-600" size={48} />
                <h3 className="font-semibold text-gray-900">{type.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about selling your home to us</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                How is selling a house with Dove Equities different from going the traditional route?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                When you choose to work with Dove Equities, you can breathe easy knowing that you won't have to invest your valuable time or money in making repairs. You won't need to concern yourself with property appraisals or whether buyers can secure financing. There won't be any time wasted on property showings or home inspections. And perhaps the best part of all, you won't be responsible for paying any commissions or closing costs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                How long does the home selling process take?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                A traditional home sale can take 45 to 90 days. With us, you may sell your house and close in as low as seven days. We work as fast as you need to move!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Do I need to do any repairs?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our call says it all. We purchase houses as-is. You do zero repairs, and you never have to worry about a buyer requesting a significant purchase price decrease due to their home inspection report. No matter the situation, whether it be structural, environmental, or aesthetically pleasing, we will address it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                How do I request a cash offer from Dove Equities?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Simply fill out the form or give us a call. A team member will contact you within 24 hours to schedule a house walkthrough. In many cases, we can provide you with an immediate cash offer on the same day.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Can I choose my closing date?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Absolutely! One of the primary benefits of selling to us is that we work for your time frame. You may close in as little as seven days or set your closing date a few months out in case you need more time. You could even close quickly to get access to your funds and keep your home until you are ready to move out.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Does selling my house to Dove Equities cost anything?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                No. Selling your home to us does not require any charges from you. There's no commission and in many cases we even offer to help you with covering the final costs of selling your house.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Do I need to perform a clean-out of my house before I sell it?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Don't worry about performing a clean-out yourself; Dove Equities has got you covered. We will finance any required clean-outs and handle the process from there. The costs associated with this can be factored into our final cash payout, reducing the workload and stress on your end.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Can I take my appliances with me when I move?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Absolutely. You can take all your appliances and any other belongings you want to keep; just let us know before we make our offer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                What types of homes does Dove Equities buy?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Dove Equities buys residential single-family homes, condos, duplexes, multi-families, townhomes and even mobile houses in any condition!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Is it better for me to sell as the owner?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                When selling your property, you may encounter various challenges. Prospective buyers often request repairs, and you must be available for showings at almost any time. It can be uncertain whether your potential buyer is financially qualified. For-sale-by-owner (FSBO) properties typically spend an average of 88 days on the market. However, with Dove Equities, you can bypass all of these concerns and avoid paying traditional real estate commissions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer with Contact Form */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
                <Textarea
                  placeholder="Your Message"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  required
                  rows={4}
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                </Button>
              </form>
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
                    className="block hover:text-blue-400 transition-colors"
                  >
                    Connect Via Text
                  </button>

                  <button
                    onClick={() => window.open('https://doveequities.h.trustco.ai/#termsArea', '_blank')}
                    className="block hover:text-blue-400 transition-colors"
                  >
                    Messaging T&Cs
                  </button>

                  <button
                    onClick={() => window.open('https://doveequities.h.trustco.ai/#privacyArea', '_blank')}
                    className="block hover:text-blue-400 transition-colors"
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
                href="https://www.doveequities.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Privacy Policy
              </a>
              {" "} | {" "}
              <a
                href="https://www.doveequities.com/terms-and-conditions"
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
    </div>
  );
};

export default DoveEquitiesLanding;