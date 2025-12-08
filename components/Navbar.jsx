'use client'

import React, { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "sonner"

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    // Only keep modal form state (hero/contact forms belong on homepage)
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
    })

    const encode = (data) =>
        Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&")

    const handleModalSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)

        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({
                    "form-name": form.getAttribute("name"),
                    ...Object.fromEntries(formData),
                }),
            })

            toast.success("Cash offer request submitted!")

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
            })
        } catch (error) {
            toast.error("Submission failed. Please try again.")
        }
    }

    return (
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">

                    {/* Logo */}
                    <Link href="/">
                        <img
                            src="https://customer-assets.emergentagent.com/job_7ee4cd2f-500b-4046-9ef5-6c05f3003821/artifacts/m0ldjtz1_Site%20Logo.png"
                            alt="Dove Equities Logo"
                            className="h-12 w-auto cursor-pointer"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                        <Link href="/#how-it-works" className="text-gray-700 hover:text-blue-600">How It Works</Link>
                        <Link href="/#faq" className="text-gray-700 hover:text-blue-600">FAQ</Link>
                        <Link href="/#contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
                        <Link href="/portfolio" className="text-gray-700 hover:text-blue-600">Portfolio</Link>

                        {/* Get Cash Offer Modal */}
                        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                            <DialogTrigger asChild>
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                    Get Cash Offer
                                </Button>
                            </DialogTrigger>

                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle className="text-2xl font-bold">
                                        Get Your Cash Offer
                                    </DialogTitle>
                                </DialogHeader>

                                <form
                                    name="pop-up"
                                    method="POST"
                                    action="/success"
                                    data-netlify="true"
                                    data-netlify-honeypot="bot-field"
                                    onSubmit={handleModalSubmit}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
                                >
                                    <input type="hidden" name="form-name" value="pop-up" />
                                    <input type="hidden" name="bot-field" />

                                    <Input name="name" placeholder="Full Name" value={modalForm.name}
                                        onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })} required />

                                    <Input name="phone" type="tel" placeholder="Phone Number" value={modalForm.phone}
                                        onChange={(e) => setModalForm({ ...modalForm, phone: e.target.value })} required />

                                    <Input name="address" placeholder="Property Address" value={modalForm.address}
                                        onChange={(e) => setModalForm({ ...modalForm, address: e.target.value })} required />

                                    <Input name="email" type="email" placeholder="Email Address" value={modalForm.email}
                                        onChange={(e) => setModalForm({ ...modalForm, email: e.target.value })} required />

                                    <Input name="bedrooms" type="number" placeholder="# of Bedrooms*" value={modalForm.bedrooms}
                                        onChange={(e) => setModalForm({ ...modalForm, bedrooms: e.target.value })} required />

                                    <Input name="bathrooms" type="number" placeholder="# of Bathrooms*" value={modalForm.bathrooms}
                                        onChange={(e) => setModalForm({ ...modalForm, bathrooms: e.target.value })} required />

                                    <Input name="floors" type="number" placeholder="# of Floors*" value={modalForm.floors}
                                        onChange={(e) => setModalForm({ ...modalForm, floors: e.target.value })} required />

                                    <Input name="yearBuilt" type="number" placeholder="Year of Construction*" value={modalForm.yearBuilt}
                                        onChange={(e) => setModalForm({ ...modalForm, yearBuilt: e.target.value })} required />

                                    <Input name="propertyArea" type="number" placeholder="Property Area (sq ft)*" value={modalForm.propertyArea}
                                        onChange={(e) => setModalForm({ ...modalForm, propertyArea: e.target.value })} required />

                                    <Input name="totalFloors" type="number" placeholder="Total Floors*" value={modalForm.totalFloors}
                                        onChange={(e) => setModalForm({ ...modalForm, totalFloors: e.target.value })} required />

                                    <Textarea
                                        name="notes"
                                        placeholder="Write your special notes here..."
                                        value={modalForm.notes}
                                        onChange={(e) => setModalForm({ ...modalForm, notes: e.target.value })}
                                        className="md:col-span-2"
                                        rows={3}
                                    />

                                    <label className="md:col-span-2 text-xs text-gray-500 flex items-start space-x-2">
                                        <input
                                            name="privacyConsent"
                                            type="checkbox"
                                            required
                                            checked={modalForm.privacyConsent}
                                            onChange={(e) => setModalForm({ ...modalForm, privacyConsent: e.target.checked })}
                                        />
                                        <span>I agree to the Privacy Policy and Terms & Conditions *</span>
                                    </label>

                                    <label className="md:col-span-2 text-xs text-gray-500 flex items-start space-x-2">
                                        <input
                                            name="smsConsent"
                                            type="checkbox"
                                            checked={modalForm.smsConsent}
                                            onChange={(e) => setModalForm({ ...modalForm, smsConsent: e.target.checked })}
                                        />
                                        <span>I consent to receive SMS messages.</span>
                                    </label>

                                    <div className="md:col-span-2">
                                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                            Submit Request
                                        </Button>
                                    </div>
                                </form>


                            </DialogContent>
                        </Dialog>
                    </nav>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-gray-700"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* MOBILE NAV */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 space-y-4">
                        <Link href="/" className="block text-gray-700">Home</Link>
                        <Link href="/#how-it-works" className="block text-gray-700">How It Works</Link>
                        <Link href="/#faq" className="block text-gray-700">FAQ</Link>
                        <Link href="/#contact" className="block text-gray-700">Contact</Link>

                        <Link href="/features" className="block text-gray-700">Features</Link>
                        <Link href="/portfolio" className="block text-gray-700">Portfolio</Link>

                        <Button
                            onClick={() => { setModalOpen(true); setMobileMenuOpen(false); }}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            Get Cash Offer
                        </Button>
                    </div>
                )}
            </div>
        </header>
    )
}
