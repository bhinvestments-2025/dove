import { useState } from "react";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";

export const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
      />
      <Input
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
      />
      <Input
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
      />
      <Textarea
        placeholder="Your Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
        rows={4}
        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
      />
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
        Send Message
      </Button>
    </form>
  );
};
