'use client'

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function HomePage() {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        id="home" 
        className="pt-20 relative"
        data-sb-object-id="homepage-hero"
      >
        <div className="relative h-[600px] sm:h-[700px]">

          {/* Editable Hero Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://customer-assets.emergentagent.com/job_7ee4cd2f-500b-4046-9ef5-6c05f3003821/artifacts/urqzq9w5_jason-dent-w3eFhqXjkZE-unsplash-scaled.jpg')`,
            }}
            aria-hidden="true"
            data-sb-field-path="hero.backgroundImage"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="grid md:grid-cols-2 gap-8 w-full items-center">

              {/* HERO TEXT */}
              <div className="text-white space-y-6">

                {/* Editable Title */}
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                  data-sb-field-path="hero.title"
                >
                  New York's #1 Homebuyers
                </h1>

                {/* Editable Subtitle */}
                <p
                  className="text-xl sm:text-2xl text-gray-100"
                  data-sb-field-path="hero.subtitle"
                >
                  We buy houses in ANY condition
                </p>

                {/* HERO BULLETS */}
                <div className="space-y-4 text-lg">

                  <p className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 flex-shrink-0 text-blue-400" size={24} />
                    <span data-sb-field-path="hero.bullet1">
                      We buy properties in New York directly from property owners within three weeks or less
                    </span>
                  </p>

                  <p className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 flex-shrink-0 text-blue-400" size={24} />
                    <span data-sb-field-path="hero.bullet2">
                      No commission, closing costs, or hidden fees - all cash offers
                    </span>
                  </p>

                  <p className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 flex-shrink-0 text-blue-400" size={24} />
                    <span data-sb-field-path="hero.bullet3">
                      20+ Years of Proven Expertise
                    </span>
                  </p>

                  <p className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 flex-shrink-0 text-blue-400" size={24} />
                    <span data-sb-field-path="hero.bullet4">
                      Direct, person-to-person service - no MLS listings, no agents, no stress
                    </span>
                  </p>

                </div>
              </div>

              {/* HERO FORM — not editable in CMS */}
              <div className="bg-white rounded-lg shadow-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Get Your Cash Offer Today
                </h2>
                <p className="text-gray-600 mb-6">
                  Please keep your line open, we'll call you today!
                </p>

                {/* Form remains unchanged */}
                <form name="hero" data-netlify="true" onSubmit={handleModalSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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

                  {/* Checkboxes */}
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
                        By submitting the contact form and signing up for texts, you consent to receive marketing text messages from Dove Equities at the number provided. Consent is not a condition of purchase. Message frequency varies. Message and data rates may apply. You can unsubscribe at any time by replying STOP. Text HELP to get help. Please read our <a href="https://doveequities.h.trustco.ai/#privacyArea" target="_blank" rel="noopener noreferrer" className="underline"> Privacy Policy </a>{" "} for more details.
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <div className="md:col-span-2">
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Submit Request
                    </Button>
                  </div>
                </form>

                <p className="text-sm text-gray-500 mt-4 text-center">
                  Free consultation with no obligation
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section 
        className="py-20 bg-gray-50"
        data-sb-object-id="value-prop"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              data-sb-field-path="valueProp.title"
            >
              Why Choose Dove Equities?
            </h2>

            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-sb-field-path="valueProp.subtitle"
            >
              Say goodbye to dealing with multiple agents and enjoy straightforward…
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* CARD 1 */}
            <div 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              data-sb-object-id="valueProp.card1"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Clock className="text-blue-600" size={32} />
              </div>

              <h3 
                className="text-xl font-bold text-gray-900 mb-3"
                data-sb-field-path="valueProp.card1.title"
              >
                Fast Closing
              </h3>

              <p 
                className="text-gray-600"
                data-sb-field-path="valueProp.card1.description"
              >
                Close in as little as 7 days…
              </p>
            </div>

            {/* CARD 2 */}
            <div 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              data-sb-object-id="valueProp.card2"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="text-blue-600" size={32} />
              </div>

              <h3 
                className="text-xl font-bold text-gray-900 mb-3"
                data-sb-field-path="valueProp.card2.title"
              >
                All Cash Offers
              </h3>

              <p 
                className="text-gray-600"
                data-sb-field-path="valueProp.card2.description"
              >
                No financing contingencies…
              </p>
            </div>

            {/* CARD 3 */}
            <div 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              data-sb-object-id="valueProp.card3"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Home className="text-blue-600" size={32} />
              </div>

              <h3 
                className="text-xl font-bold text-gray-900 mb-3"
                data-sb-field-path="valueProp.card3.title"
              >
                Any Condition
              </h3>

              <p 
                className="text-gray-600"
                data-sb-field-path="valueProp.card3.description"
              >
                No repairs needed…
              </p>
            </div>

            {/* CARD 4 */}
            <div 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              data-sb-object-id="valueProp.card4"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-blue-600" size={32} />
              </div>

              <h3 
                className="text-xl font-bold text-gray-900 mb-3"
                data-sb-field-path="valueProp.card4.title"
              >
                20+ Years Experience
              </h3>

              <p 
                className="text-gray-600"
                data-sb-field-path="valueProp.card4.description"
              >
                Proven expertise and professional service…
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-20 bg-white"
        data-sb-object-id="how-it-works"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              data-sb-field-path="how.title"
            >
              How It Works
            </h2>

            <p
              className="text-xl text-gray-600"
              data-sb-field-path="how.subtitle"
            >
              Simple, transparent, and hassle-free process</p>
            <div className="mt-8"></div><p>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">

            <div
              className="relative"
              data-sb-object-id="how.step1"
            >
              <div className="flex items-center justify-center mb-6">
                <img src="/icons/step-1-form-submit.svg" alt="Step 1 Icon" className="w-20 h-20 mb-6" />
              </div>



              <h3
                className="text-2xl font-bold text-gray-900 mb-3 text-center"
                data-sb-field-path="how.step1.title"
              >
                Receive Your Offer
              </h3>

              <p
                className="text-gray-600 text-center"
                data-sb-field-path="how.step1.description"
              >
                Connect with us directly - no commissions, no extra charges. Receive your competitive cash quote within 24 hours.
              </p>
            </div>

            <div
              className="relative"
              data-sb-object-id="how.step2"
            >
              <div className="flex items-center justify-center mb-6">
                <img src="/icons/step-2-house-walkthrough.svg" alt="Step 2 Icon" className="w-20 h-20 mb-6" />
              </div>



              <h3
                className="text-2xl font-bold text-gray-900 mb-3 text-center"
                data-sb-field-path="how.step2.title"
              >
                Property Walkthrough
              </h3>

              <p
                className="text-gray-600 text-center"
                data-sb-field-path="how.step2.description"
              >
                Schedule a convenient property inspection with our professional team. We'll present a compelling cash offer with zero obligation.
              </p>
            </div>

            <div
              className="relative"
              data-sb-object-id="how.step3"
            >
              <div className="flex items-center justify-center mb-6">
                <img src="/icons/step-3-money-handshake.svg" alt="Step 3 Icon" className="w-20 h-20 mb-6" />
              </div>



              <h3
                className="text-2xl font-bold text-gray-900 mb-3 text-center"
                data-sb-field-path="how.step3.title"
              >
                Close & Get Paid
              </h3>

              <p
                className="text-gray-600 text-center"
                data-sb-field-path="how.step3.description"
              >
                We'll finalize your home purchase within three weeks or less, completely hassle-free. Select the closing date that works best for your schedule.
              </p>
            </div>

          </div>
        </div>
      </section>



      {/* Property Types */}
      <section 
        className="py-20 bg-gray-50"
        data-sb-object-id="propertyTypes"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              data-sb-field-path="title"
            >
              All Homes, In All Conditions
            </h2>

            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-sb-field-path="subtitle"
            >
              No matter your circumstances, we have a solution tailored for you.
              There are no strings attached. No open houses. No last-minute 
              disappointments.
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
              
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                data-sb-object-id={`propertyTypes.items.${index}`}
              >
                <type.icon 
                  className="mx-auto mb-4 text-blue-600" 
                  size={48} 
                  data-sb-field-path="icon"
                />

                <h3 
                  className="font-semibold text-gray-900"
                  data-sb-field-path="label"
                >
                  {type.name}
                </h3>
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
    </div>
  );
};