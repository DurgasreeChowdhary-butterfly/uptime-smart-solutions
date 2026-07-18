import { CheckCircle2 } from "lucide-react";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

import { Button, FormField, Input, Reveal, Section, SectionHeading, Select, Textarea } from "@/components/ui";

const SERVICE_OPTIONS = [
  "AI Engineering",
  "AI Automation",
  "Enterprise Software",
  "SaaS Development",
  "Web Applications",
  "Other",
] as const;

interface FormValues {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const INITIAL_VALUES: FormValues = { name: "", email: "", company: "", service: "", budget: "", message: "" };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 20;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  } else if (values.name.trim().length < 2) {
    errors.name = "That name looks too short.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.service) {
    errors.service = "Please select a service.";
  }

  if (!values.message.trim()) {
    errors.message = "Please add a short message.";
  } else if (values.message.trim().length < MIN_MESSAGE_LENGTH) {
    errors.message = `Please add a bit more detail (at least ${MIN_MESSAGE_LENGTH} characters).`;
  }

  return errors;
}

/** Contact form: name, email, company, service, budget, and message — validated client-side. */
export function ContactForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  }

  function handleChange(field: keyof FormValues) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      updateField(field, e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // No backend endpoint exists yet — this is the integration point. Once one does,
    // send `values` there (e.g. `await submitContactForm(values)`) before confirming.
    setSubmitted(true);
    setValues(INITIAL_VALUES);
  }

  if (submitted) {
    return (
      <Section id="contact-form" className="scroll-mt-24">
        <div
          role="status"
          className="mx-auto flex max-w-xl flex-col items-center gap-3 rounded-2xl border border-border bg-surface/60 p-10 text-center"
        >
          <CheckCircle2 className="h-8 w-8 text-accent" aria-hidden />
          <p className="font-display text-xl font-semibold">Thanks for reaching out</p>
          <p className="text-sm text-muted-foreground">
            We&apos;ve received your message and will get back to you soon.
          </p>
          <Button variant="secondary" onClick={() => setSubmitted(false)}>
            Send another message
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <Section id="contact-form" className="scroll-mt-24">
      <SectionHeading
        eyebrow="GET IN TOUCH"
        heading="Tell Us About Your Project"
        description="Share a few details and we'll follow up to talk through how we'd approach it."
      />

      <Reveal className="mt-12">
        <form noValidate onSubmit={handleSubmit} className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <FormField label="Name" htmlFor="contact-name" required error={errors.name}>
            <Input
              id="contact-name"
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={handleChange("name")}
              aria-required="true"
              invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
            />
          </FormField>

          <FormField label="Email" htmlFor="contact-email" required error={errors.email}>
            <Input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange("email")}
              aria-required="true"
              invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
            />
          </FormField>

          <FormField label="Company" htmlFor="contact-company" hint="Optional">
            <Input
              id="contact-company"
              name="company"
              autoComplete="organization"
              value={values.company}
              onChange={handleChange("company")}
            />
          </FormField>

          <FormField label="Service Required" htmlFor="contact-service" required error={errors.service}>
            <Select
              id="contact-service"
              name="service"
              value={values.service}
              onChange={handleChange("service")}
              aria-required="true"
              invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? "contact-service-error" : undefined}
            >
              <option value="" disabled>
                Select a service
              </option>
              {SERVICE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>

          <FormField label="Project Budget" htmlFor="contact-budget" hint="Optional" className="sm:col-span-2">
            <Input
              id="contact-budget"
              name="budget"
              placeholder="e.g. $5,000 – $15,000"
              value={values.budget}
              onChange={handleChange("budget")}
            />
          </FormField>

          <FormField label="Message" htmlFor="contact-message" required error={errors.message} className="sm:col-span-2">
            <Textarea
              id="contact-message"
              name="message"
              rows={6}
              value={values.message}
              onChange={handleChange("message")}
              aria-required="true"
              invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
            />
          </FormField>

          <div className="sm:col-span-2">
            <Button type="submit" size="lg">
              Send Message
            </Button>
          </div>
        </form>
      </Reveal>
    </Section>
  );
}
