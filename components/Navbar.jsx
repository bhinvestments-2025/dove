// components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const [modalForm, setModalForm] = useState({
        name: "",
        phone: "",
        address: "",
        email: "",
        bedrooms: "",
        bathrooms: "",
        floors: "",
        yearBuilt: "",
        propertyArea: "",
        totalFloors: "",
        notes: "",
        privacyConsent: false,
        smsConsent: false,
    });

    const handleModalSubmit = (e) => {
        e.preventDefault();
        toast.success(
            "Cash offer request submitted! We’ll reach out within 24 hours."
        );
        setModalForm({
            name: "",
            phone: "",
            address: "",
            email: "",
            bedrooms: "",
            bathrooms: "",
            floors: "",
            yearBuilt: "",
            propertyArea: "",
            totalFloors: "",
            notes: "",
            privacyConsent: false,
            smsConsent: false,
        });
        setModalOpen(false);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
    };

    return (
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
                        <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-blue-600 transition-colors">
                            Home
                        </button>
                        <button onClick={() => scrollToSection("how-it-works")} className="text-gray-700 hover:text-blue-600 transition-colors">
                            How It Works
                        </button>
                        <button onClick={() => scrollToSection("faq")} className="text-gray-700 hover:text-blue-600 transition-colors">
                            FAQ
                        </button>
                        <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-blue-600 transition-colors">
                            Contact
                        </button>

                        {/* Next.js link pages */}
                        <Link href="/features" className="text-gray-700 hover:text-blue-600 transition-colors">
                            Features
                        </Link>
                        <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">
                            Portfolio
                        </Link>

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
                                    <Input
                                        type="number"
                                        placeholder="# of Bedrooms*"
                                        value={modalForm.bedrooms}
                                        onChange={(e) => setModalForm({ ...modalForm, bedrooms: e.target.value })}
                                        required
                                    />
                                    <Input
                                        type="number"
                                        placeholder="# of Bathrooms*"
                                        value={modalForm.bathrooms}
                                        onChange={(e) => setModalForm({ ...modalForm, bathrooms: e.target.value })}
                                        required
                                    />
                                    <Input
                                        type="number"
                                        placeholder="# of Floors*"
                                        value={modalForm.floors}
                                        onChange={(e) => setModalForm({ ...modalForm, floors: e.target.value })}
                                        required
                                    />
                                    <Input
                                        type="number"
                                        placeholder="Year of Construction*"
                                        value={modalForm.yearBuilt}
                                        onChange={(e) => setModalForm({ ...modalForm, yearBuilt: e.target.value })}
                                        required
                                    />
                                    <Input
                                        type="number"
                                        placeholder="Property Area (sq ft)*"
                                        value={modalForm.propertyArea}
                                        onChange={(e) => setModalForm({ ...modalForm, propertyArea: e.target.value })}
                                        required
                                    />
                                    <Input
                                        type="number"
                                        placeholder="Total Floors*"
                                        value={modalForm.totalFloors}
                                        onChange={(e) => setModalForm({ ...modalForm, totalFloors: e.target.value })}
                                        required
                                    />
                                    <Textarea
                                        placeholder="Write your special notes here..."
                                        value={modalForm.notes}
                                        onChange={(e) => setModalForm({ ...modalForm, notes: e.target.value })}
                                        className="md:col-span-2"
                                        rows={3}
                                    />

                                    {/* Checkboxes */}
                                    <div className="md:col-span-2 space-y-2 text-[10px] text-gray-400 leading-relaxed">
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
                                                <a
                                                    href="https://doveequities.h.trustco.ai/#privacyArea"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="underline"
                                                >
                                                    Privacy Policy
                                                </a>{" "}
                                                and{" "}
                                                <a
                                                    href="https://doveequities.h.trustco.ai/#termsArea"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="underline"
                                                >
                                                    Terms and Conditions
                                                </a>
                                                .
                                            </span>
                                        </label>

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
                                                receive marketing text messages from Dove Equities at the number provided. Message frequency varies. Reply STOP to unsubscribe.
                                            </span>
                                        </label>
                                    </div>

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
                        <button onClick={() => scrollToSection("home")} className="block w-full text-left text-gray-700 hover:text-blue-600">
                            Home
                        </button>
                        <button onClick={() => scrollToSection("how-it-works")} className="block w-full text-left text-gray-700 hover:text-blue-600">
                            How It Works
                        </button>
                        <button onClick={() => scrollToSection("faq")} className="block w-full text-left text-gray-700 hover:text-blue-600">
                            FAQ
                        </button>
                        <button onClick={() => scrollToSection("contact")} className="block w-full text-left text-gray-700 hover:text-blue-600">
                            Contact
                        </button>
                        <Link href="/features" className="block w-full text-left text-gray-700 hover:text-blue-600">
                            Features
                        </Link>
                        <Link href="/portfolio" className="block w-full text-left text-gray-700 hover:text-blue-600">
                            Portfolio
                        </Link>
                        <Button onClick={() => { setModalOpen(true); setMobileMenuOpen(false); }} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                            Get Cash Offer
                        </Button>
                    </div>
                )}
            </div>
        </header>
    );
}
