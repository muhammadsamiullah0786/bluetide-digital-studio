'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { siteData } from '@/data/site';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { useToast } from '@/components/ui/Toast';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeUp, SlideInLeft, SlideInRight } from '@/components/ui/AnimateOnScroll';

const validateEmailJSConfig = () => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return { isValid: false, issues: ['missing'] };
  }

  const placeholderPatterns = [
    'your_service_id',
    'your_template_id',
    'your_public_key',
    'service_id_here',
    'template_id_here',
    'public_key_here',
  ];

  const issues: string[] = [];
  placeholderPatterns.forEach((pattern) => {
    if (serviceId.toLowerCase().includes(pattern)) issues.push('service_id_placeholder');
    if (templateId.toLowerCase().includes(pattern)) issues.push('template_id_placeholder');
    if (publicKey.toLowerCase().includes(pattern)) issues.push('public_key_placeholder');
  });

  return { isValid: issues.length === 0, issues };
};

const isEmailJSConfigured = () => validateEmailJSConfig().isValid;

export default function Contact() {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfigured, setIsConfigured] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || siteData.profile.email;

  useEffect(() => {
    setIsConfigured(isEmailJSConfigured());
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async () => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    return emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        project_type: formData.projectType || 'Not specified',
        message: formData.message,
        to_email: contactEmail,
      },
      publicKey
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      addToast('Please fill out all required fields', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      addToast('Please enter a valid email address', 'error');
      return;
    }

    if (!isConfigured) {
      addToast(`Contact form is not configured yet. Please email me directly at ${contactEmail}`, 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      await sendEmail();
      addToast("Message sent! I'll get back to you within 24 hours.", 'success');
      setFormData({ name: '', email: '', subject: '', projectType: '', message: '' });
      setSubmitted(true);
    } catch (error: any) {
      const errorMessage = error?.text || error?.message || 'Unknown error occurred';
      addToast(`Failed to send message: ${errorMessage}. Please email me directly.`, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappLink = `https://wa.me/${siteData.profile.whatsapp}?text=${encodeURIComponent(
    "Hi Muhammad Sami Ullah, I'd like to discuss a project."
  )}`;

  return (
    <section id="contact" className="relative bg-white py-24 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />

      <Container>
        <FadeUp>
          <SectionHeader
            label="Contact"
            title={siteData.contact.title}
            description={siteData.contact.description}
          />
        </FadeUp>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Contact Info */}
          <SlideInLeft>
            <div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {siteData.contact.items.map((item, index) => (
                  <div
                    key={index}
                    className="group flex gap-4 rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/40 p-4 transition-all hover:-translate-y-0.5 hover:border-cyan/30 hover:shadow-soft"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/10 to-cyan/10 text-accent transition-all group-hover:from-accent group-hover:to-cyan group-hover:text-white">
                      <Icon name={item.icon} size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-0.5 break-words text-sm font-bold text-navy">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-[0_10px_24px_-8px_rgba(16,185,129,0.55)] transition-all hover:-translate-y-0.5"
                >
                  <Icon name="whatsapp" size={18} />
                  WhatsApp Me
                </a>
                <a
                  href={`mailto:${siteData.profile.email}?subject=${encodeURIComponent('Project inquiry')}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-5 py-3 text-sm font-bold text-navy transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <Icon name="mail" size={18} />
                  Email Me
                </a>
                {siteData.profile.cvAvailable && (
                  <a
                    href={siteData.profile.cv}
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-5 py-3 text-sm font-bold text-navy transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    <Icon name="download" size={18} />
                    Download CV
                  </a>
                )}
              </div>

              {/* What happens next */}
              <div className="mt-7 overflow-hidden rounded-2xl border border-cyan/20 bg-gradient-to-br from-accent/[0.04] via-white to-cyan/[0.06] p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-cyan text-white">
                    <Icon name="zap" size={14} />
                  </span>
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
                    What Happens Next
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  {siteData.contact.afterSubmit}
                </p>
              </div>
            </div>
          </SlideInLeft>

          {/* Contact Form / Success state */}
          <SlideInRight>
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-cyan/10 p-10 text-center shadow-soft">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-[0_10px_30px_-10px_rgba(16,185,129,0.6)]">
                  <Icon name="checkCircle" size={28} />
                </div>
                <h3 className="mb-3 text-2xl font-extrabold tracking-tight text-navy">
                  Message Received
                </h3>
                <p className="mb-7 max-w-sm text-sm leading-relaxed text-slate-600">
                  Thank you for reaching out. I'll review your project and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-accent transition-colors hover:text-accentHover"
                >
                  Send another message
                  <Icon name="arrowRight" size={14} />
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/40 p-6 shadow-soft sm:p-8"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-600">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-600">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="subject" className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-600">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project subject"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-600">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
                      }}
                    >
                      <option value="">Select project type</option>
                      {siteData.contact.projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-600">
                    Project Brief *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals and timeline..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full justify-center" disabled={isSubmitting}>
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Icon name="arrowRight" size={18} />
                    </>
                  )}
                </Button>

                <div className="text-center">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                    Or reach me directly
                  </p>
                  <a
                    href={`mailto:${contactEmail}?subject=${encodeURIComponent('Project inquiry')}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-accent transition-colors hover:text-accentHover"
                  >
                    <Icon name="mail" size={16} />
                    {contactEmail}
                  </a>
                </div>
              </form>
            )}
          </SlideInRight>
        </div>
      </Container>
    </section>
  );
}
