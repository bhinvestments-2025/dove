import { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";

export const LeadForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    privacyConsent: false,
    smsConsent: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure required fields are checked
    if (!formData.privacyConsent) {
      alert("You must agree to the Privacy Policy and Terms.");
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <Input
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <Input
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
      />
      <Input
        placeholder="Property Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        required
      />
      <Input
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />

      {/* Checkboxes */}
      <div className="md:col-span-2 space-y-2 text-[10px] text-gray-400 leading-relaxed">
        <label className="flex items-start space-x-2">
          <input
            type="checkbox"
            required
            checked={formData.privacyConsent}
            onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
          />
          <span>
            I have read and agree to the{" "}
            <a href="/privacy-policy" target="_blank" className="underline">Privacy Policy</a> and{" "}
            <a href="/terms-and-conditions" target="_blank" className="underline">Terms and Conditions</a>.
          </span>
        </label>
        <label className="flex items-start space-x-2">
          <input
            type="checkbox"
            checked={formData.smsConsent}
            onChange={(e) => setFormData({ ...formData, smsConsent: e.target.checked })}
          />
          <span>By submitting the contact form…</span>
        </label>
      </div>

      <div className="md:col-span-2">
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          Submit Request
        </Button>
      </div>
    </form>
  );
};
