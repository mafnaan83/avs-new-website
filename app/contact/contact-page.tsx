"use client";

import { ReactNode, useRef, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../FirebaseConfig";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { toast } from "sonner";

type FadeProps = {
  children: ReactNode;
  delay?: number;
};

const FadeInWhenVisible = ({ children, delay = 0 }: FadeProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [selectedService, setSelectedService] = useState<string[]>([]);

  // Services

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const newErrors: { [key: string]: string } = {};

    // Field validations
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email format.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!form.company.trim()) newErrors.company = "Company name is required.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    if (selectedService.length === 0) {
      toast("Please choose atleast one services", {
        action: {
          label: "Cancel",
          onClick: () => console.log("Undo"),
        },
      });
      newErrors.service = "Please select at least one service.";
    }

    if (Object.keys(newErrors).length > 0) {
      toast("Please fill out the required fields", {
        action: {
          label: "Cancel",
          onClick: () => console.log("Undo"),
        },
      });
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    }
    try {
      setLoading(true);
      await addDoc(collection(db, "contacts"), {
        ...form,
        service: selectedService.join(", "), // override text input
        createdAt: new Date(),
      });
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
      setSelectedService([]);
    } catch (err) {
      console.error("Error adding document:", err);
    } finally {
      setLoading(false);
      toast("Thanks our team will get back soon", {
        style: { background: "#579e00", color: "#ffffff" },
        action: {
          label: "Done",
          onClick: () => console.log("Undo"),
        },
        classNames: {
          actionButton: "!text-black !bg-lime-600",
        },
      });
    }
  };

  // const whatsapp = [
  //   {
  //     number: "971582800809",
  //     designation: "IT Products",
  //   },
  //   {
  //     number: "971522276006",
  //     designation: "Web & App Development",
  //   },
  //   {
  //     number: "971545307075",
  //     designation: "Digital Solutions",
  //   },
  // ];

  const socials = [
    {
      icon: <FaInstagram />,
      href: "https://instagram.com",
      color: "hover:text-pink-500",
    },
    {
      icon: <FaFacebookF />,
      href: "https://facebook.com",
      color: "hover:text-blue-600",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://linkedin.com",
      color: "hover:text-blue-500",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com",
      color: "hover:text-black",
    },
  ];

  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-5 lg:gap-8">
          {/* Left side - Details */}
          <div className="mb-8 lg:mb-0 lg:col-span-2 max-w-sm">
            <FadeInWhenVisible>
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Request a quote
              </h1>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.4}>
              <p className="text-lg text-gray-600 mb-8">
                Tell us what you need. Our team will quickly prepare a
                personalized quote and guide you through the next steps.
              </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.4}>
              <div className="mb-8">
                <h2 className="text-lg font-medium text-gray-500 mb-4">
                  Clients trust us
                </h2>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">Google</span>
                </div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.5}>
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-500 mb-4">
                  Follow us:
                </h2>
                <div className="flex space-x-4">
                  {socials.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 flex items-center justify-center rounded-full shadow-md bg-white text-gray-600 transition-transform hover:scale-105 ${social.color}`}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.6}>
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-500">
                  Contact us
                </h2>
                <p className="text-gray-600">info@avsgulf.ae</p>
              </div>
            </FadeInWhenVisible>

            {/* Whatsapp Contact */}
            {/* <FadeInWhenVisible delay={0.7}>
              <div>
                <h2 className="text-lg font-semibold text-gray-500 mb-2">
                  Talk to Our Team Directly
                </h2>
                <div className="flex space-x-4">
                  {whatsapp.map((number, index) => (
                    <div key={index} className="relative group">
                      <a
                        href={`https://wa.me/${number.number}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full shadow-md bg-white text-green-600 transition-transform hover:scale-105"
                      >
                        <FaWhatsapp className="h-6 w-6" />
                      </a>
                      <span className="absolute bottom-full mb-2 px-3 py-1 text-xs text-white bg-green-500 rounded whitespace-nowrap max-w-max opacity-0 group-hover:opacity-100 transition">
                        {number.designation}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInWhenVisible> */}
          </div>

          {/* Right side - Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
                {errors.company && (
                  <p className="text-red-500 text-sm">{errors.company}</p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
            </div>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className={`text-white flex items-center scale-100 hover:scale-102 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-gray-100 gap-2 px-6 py-2 bg-gradient-to-r from-[#CBA65E] via-[#AF8B47] to-[#937230] ${
                loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
              {<span className="ml-1">→</span>}
            </button>
            {success && (
              <p className="text-green-600 pt-2 text-sm">
                Thank you! Your message has been sent.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
