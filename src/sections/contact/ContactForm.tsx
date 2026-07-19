import { MessageCircle } from "lucide-react";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

import { Button, FormField, Input, Reveal, Section, SectionHeading, Textarea } from "@/components/ui";
import { CONTACT_INFO } from "@/constants";

interface FormValues {
  fullName: string;
  whatsappNumber: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const INITIAL_VALUES: FormValues = { fullName: "", whatsappNumber: "", message: "" };

const PHONE_CHARS_PATTERN = /^[+\d\s()-]+$/;
const MIN_MESSAGE_LENGTH = 10;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Please enter your name.";
  } else if (values.fullName.trim().length < 2) {
    errors.fullName = "That name looks too short.";
  }

  const phone = values.whatsappNumber.trim();
  const phoneDigits = phone.replace(/\D/g, "");
  if (!phone) {
    errors.whatsappNumber = "Please enter your WhatsApp number.";
  } else if (!PHONE_CHARS_PATTERN.test(phone) || phoneDigits.length < 7 || phoneDigits.length > 15) {
    errors.whatsappNumber = "Enter a valid WhatsApp number, with country code.";
  }

  if (!values.message.trim()) {
    errors.message = "Please add a short message.";
  } else if (values.message.trim().length < MIN_MESSAGE_LENGTH) {
    errors.message = `Please add a bit more detail (at least ${MIN_MESSAGE_LENGTH} characters).`;
  }

  return errors;
}

/** Builds the `wa.me` deep link, prefilled with the visitor's details for them to review and send. */
function buildWhatsAppUrl(values: FormValues): string {
  const message = `Hello Uptime Smart Solutions,

My Name:
${values.fullName.trim()}

My WhatsApp Number:
${values.whatsappNumber.trim()}

Project Details:
${values.message.trim()}

Please contact me regarding my project.`;

  return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Contact form: name, WhatsApp number, and message — validated client-side, no backend. Submitting opens a prefilled WhatsApp chat for the visitor to send themselves. */
export function ContactForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});

  function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  }

  function handleChange(field: keyof FormValues) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => updateField(field, e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // wa.me opens the WhatsApp app on mobile and web.whatsapp.com on desktop, with the
    // message prefilled — the visitor still has to review it and press Send themselves.
    window.open(buildWhatsAppUrl(values), "_blank", "noopener,noreferrer");
  }

  return (
    <Section id="contact-form" className="scroll-mt-24">
      <SectionHeading
        eyebrow="GET IN TOUCH"
        heading="Tell Us About Your Project"
        description="Share a few details and we'll open WhatsApp with your message ready — just review it and hit send."
      />

      <Reveal className="mt-12">
        <form noValidate onSubmit={handleSubmit} className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <FormField label="Full Name" htmlFor="contact-full-name" required error={errors.fullName}>
            <Input
              id="contact-full-name"
              name="fullName"
              autoComplete="name"
              value={values.fullName}
              onChange={handleChange("fullName")}
              aria-required="true"
              invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "contact-full-name-error" : undefined}
            />
          </FormField>

          <FormField
            label="WhatsApp Number"
            htmlFor="contact-whatsapp-number"
            required
            error={errors.whatsappNumber}
          >
            <Input
              id="contact-whatsapp-number"
              name="whatsappNumber"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+91 98765 43210"
              value={values.whatsappNumber}
              onChange={handleChange("whatsappNumber")}
              aria-required="true"
              invalid={Boolean(errors.whatsappNumber)}
              aria-describedby={errors.whatsappNumber ? "contact-whatsapp-number-error" : undefined}
            />
          </FormField>

          <FormField
            label="Message"
            htmlFor="contact-message"
            required
            error={errors.message}
            className="sm:col-span-2"
          >
            <Textarea
              id="contact-message"
              name="message"
              rows={6}
              placeholder="Tell us a bit about your project..."
              value={values.message}
              onChange={handleChange("message")}
              aria-required="true"
              invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
            />
          </FormField>

          <div className="sm:col-span-2">
            <Button type="submit" size="lg">
              <MessageCircle className="h-4 w-4" aria-hidden />
              Send via WhatsApp
            </Button>
          </div>
        </form>
      </Reveal>
    </Section>
  );
}
