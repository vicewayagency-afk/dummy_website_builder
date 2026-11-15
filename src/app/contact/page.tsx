"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { CONTACT_INFO } from "@/lib/constants";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: FormData): Record<string, string> {
    const errs: Record<string, string> = {};
    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const company = form.get("company") as string;
    const subject = form.get("subject") as string;
    const message = form.get("message") as string;

    if (!name || name.trim().length < 2)
      errs.name = "Please enter your full name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid business email address.";
    if (!company || company.trim().length < 2)
      errs.company = "Please enter your company name.";
    if (!subject || subject.trim().length < 2)
      errs.subject = "Please enter a subject.";
    if (!message || message.trim().length < 10)
      errs.message = "Please enter a message (at least 10 characters).";

    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const errs = validate(form);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setFormState("submitting");

    // ──────────────────────────────────────────────────────────────────────
    // INTEGRATION POINT
    // Replace this timeout with your email service integration.
    // Example: POST to /api/contact with the form data,
    // which forwards to SendGrid, Resend, AWS SES, etc.
    // The form data is available in the `form` FormData object above.
    // ──────────────────────────────────────────────────────────────────────
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setFormState("success");
  }

  return (
    <>
      {/* ─── HERO BANNER ─── */}
      <section className="relative h-[45vh] min-h-[320px] flex items-end bg-navy-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
            alt="Modern commercial architecture"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/40" />
        </div>
        <Container className="relative z-10 pb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze-400 mb-3 font-[family-name:var(--font-heading)]">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-heading)]">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-steel-300 max-w-2xl">
            We welcome enquiries from businesses operating across the
            infrastructure and construction sectors. Please use the form below
            to get in touch.
          </p>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze-500 to-transparent" />
      </section>

      {/* ─── CONTACT CONTENT ─── */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              {formState === "success" ? (
                <div className="border border-ivory-200 bg-ivory-50 p-10 lg:p-14 text-center">
                  <CheckCircle2 className="w-12 h-12 text-bronze-500 mx-auto mb-5" />
                  <h2 className="text-2xl font-semibold text-charcoal-900 mb-3 font-[family-name:var(--font-heading)]">
                    Message Received
                  </h2>
                  <p className="text-charcoal-600 leading-relaxed max-w-md mx-auto mb-2">
                    Thank you for getting in touch. We will review your message
                    and respond as soon as possible.
                  </p>
                  <p className="text-xs text-charcoal-400 italic">
                    Note: No email service is currently configured. This is a
                    confirmation of form submission only. Please integrate an
                    email service to enable message delivery.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormState("idle")}
                    className="mt-6 text-sm font-medium text-bronze-500 hover:text-bronze-600 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <h2 className="text-2xl font-semibold text-charcoal-900 mb-2 font-[family-name:var(--font-heading)]">
                    Send Us a Message
                  </h2>
                  <p className="text-charcoal-500 mb-8">
                    Complete the form below and we will be in touch.
                  </p>

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-charcoal-900 mb-1.5"
                    >
                      Full Name <span className="text-bronze-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      className={`w-full px-4 py-3 border ${
                        errors.name ? "border-red-400" : "border-ivory-200"
                      } bg-white text-charcoal-900 text-sm focus:outline-none focus:border-bronze-500 focus:ring-1 focus:ring-bronze-500 transition-colors`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-charcoal-900 mb-1.5"
                    >
                      Business Email <span className="text-bronze-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={`w-full px-4 py-3 border ${
                        errors.email ? "border-red-400" : "border-ivory-200"
                      } bg-white text-charcoal-900 text-sm focus:outline-none focus:border-bronze-500 focus:ring-1 focus:ring-bronze-500 transition-colors`}
                      placeholder="name@company.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-charcoal-900 mb-1.5"
                    >
                      Company <span className="text-bronze-500">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className={`w-full px-4 py-3 border ${
                        errors.company ? "border-red-400" : "border-ivory-200"
                      } bg-white text-charcoal-900 text-sm focus:outline-none focus:border-bronze-500 focus:ring-1 focus:ring-bronze-500 transition-colors`}
                      placeholder="Your company name"
                    />
                    {errors.company && (
                      <p className="text-red-500 text-xs mt-1">{errors.company}</p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-charcoal-900 mb-1.5"
                    >
                      Subject <span className="text-bronze-500">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className={`w-full px-4 py-3 border ${
                        errors.subject ? "border-red-400" : "border-ivory-200"
                      } bg-white text-charcoal-900 text-sm focus:outline-none focus:border-bronze-500 focus:ring-1 focus:ring-bronze-500 transition-colors`}
                      placeholder="How can we help?"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-charcoal-900 mb-1.5"
                    >
                      Message <span className="text-bronze-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className={`w-full px-4 py-3 border ${
                        errors.message ? "border-red-400" : "border-ivory-200"
                      } bg-white text-charcoal-900 text-sm focus:outline-none focus:border-bronze-500 focus:ring-1 focus:ring-bronze-500 transition-colors resize-y`}
                      placeholder="Tell us about your requirements..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={formState === "submitting"}
                    className="w-full sm:w-auto"
                  >
                    {formState === "submitting" ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-900 mb-5 font-[family-name:var(--font-heading)]">
                    Contact Information
                  </h3>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-bronze-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-charcoal-900">
                          Email
                        </p>
                        <a
                          href={`mailto:${CONTACT_INFO.email}`}
                          className="text-sm text-charcoal-600 hover:text-bronze-500 transition-colors"
                        >
                          {CONTACT_INFO.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-bronze-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-charcoal-900">
                          Telephone
                        </p>
                        <a
                          href={`tel:${CONTACT_INFO.phoneRaw}`}
                          className="text-sm text-charcoal-600 hover:text-bronze-500 transition-colors"
                        >
                          {CONTACT_INFO.phone}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-bronze-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-charcoal-900">
                          Location
                        </p>
                        <p className="text-sm text-charcoal-600">
                          {CONTACT_INFO.address}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-ivory-200 pt-8">
                  <p className="text-xs text-charcoal-400 italic leading-relaxed">
                    {CONTACT_INFO.note}
                  </p>
                </div>

                <div className="bg-ivory-50 border border-ivory-200 p-6">
                  <h3 className="text-base font-semibold text-charcoal-900 mb-2 font-[family-name:var(--font-heading)]">
                    Working with Diggraph
                  </h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed">
                    We work with EPC contractors, engineering firms,
                    infrastructure investors and project developers across the
                    built environment. If you are exploring how research-driven
                    consulting support could benefit your business, we welcome
                    the opportunity to discuss your requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
