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

// Configuration validator with detailed logging
const validateEmailJSConfig = () => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  console.group('🔍 EmailJS Configuration Check');
  
  // Check if env vars exist
  if (!serviceId || !templateId || !publicKey) {
    console.warn('❌ Missing environment variables:');
    if (!serviceId) console.warn('   - NEXT_PUBLIC_EMAILJS_SERVICE_ID is undefined');
    if (!templateId) console.warn('   - NEXT_PUBLIC_EMAILJS_TEMPLATE_ID is undefined');
    if (!publicKey) console.warn('   - NEXT_PUBLIC_EMAILJS_PUBLIC_KEY is undefined');
    console.groupEnd();
    return { isValid: false, issues: ['missing'] };
  }

  // Check for placeholder values
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
    if (serviceId.toLowerCase().includes(pattern)) {
      console.warn(`⚠️ NEXT_PUBLIC_EMAILJS_SERVICE_ID contains placeholder: "${serviceId}"`);
      issues.push('service_id_placeholder');
    }
    if (templateId.toLowerCase().includes(pattern)) {
      console.warn(`⚠️ NEXT_PUBLIC_EMAILJS_TEMPLATE_ID contains placeholder: "${templateId}"`);
      issues.push('template_id_placeholder');
    }
    if (publicKey.toLowerCase().includes(pattern)) {
      console.warn(`⚠️ NEXT_PUBLIC_EMAILJS_PUBLIC_KEY contains placeholder: "${publicKey}"`);
      issues.push('public_key_placeholder');
    }
  });

  if (issues.length > 0) {
    console.warn('📖 Update .env.local with actual credentials from https://dashboard.emailjs.com/');
    console.groupEnd();
    return { isValid: false, issues };
  }

  console.log('✅ All environment variables are configured');
  console.log('📧 Service ID:', serviceId);
  console.log('📄 Template ID:', templateId);
  console.log('🔑 Public Key:', publicKey.substring(0, 8) + '...');
  console.groupEnd();
  
  return { isValid: true, issues: [] };
};

// Simple check for UI
const isEmailJSConfigured = () => {
  return validateEmailJSConfig().isValid;
};

export default function Contact() {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'muhammadsamiu560@gmail.com';
  const isConfigured = isEmailJSConfigured();
  const isDev = process.env.NODE_ENV === 'development';

  // Validate config on mount (development only)
  useEffect(() => {
    if (isDev) {
      validateEmailJSConfig();
    }
  }, [isDev]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (testMode = false) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    console.group('📧 EmailJS Send Request');
    console.log('Mode:', testMode ? 'TEST' : 'PRODUCTION');
    console.log('Service ID:', serviceId);
    console.log('Template ID:', templateId);
    console.log('Public Key:', publicKey.substring(0, 8) + '...');
    console.log('Template Variables:', {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message.substring(0, 50) + '...',
      to_email: contactEmail,
    });
    console.groupEnd();

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: contactEmail,
        },
        publicKey
      );

      console.group('✅ EmailJS Success Response');
      console.log('Status:', result.status);
      console.log('Text:', result.text);
      console.log('Full Response:', result);
      console.groupEnd();

      return { success: true, result };
    } catch (error: any) {
      console.group('❌ EmailJS Error Response');
      console.error('Error Object:', error);
      console.error('Error Type:', error?.name);
      console.error('Error Message:', error?.message);
      console.error('Error Text:', error?.text);
      console.error('Status Code:', error?.status);
      console.error('Full Error Details:', JSON.stringify(error, null, 2));
      console.groupEnd();

      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      addToast('Please fill out all fields', 'error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      addToast('Please enter a valid email address', 'error');
      return;
    }

    // Check if EmailJS is configured
    if (!isConfigured) {
      console.warn('⚠️ EmailJS Configuration Invalid - See console for details');
      validateEmailJSConfig();
      addToast(`Contact form is not configured yet. Please email me directly at ${contactEmail}`, 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      await sendEmail();
      addToast('Message sent successfully! I\'ll get back to you soon.', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      const errorMessage = error?.text || error?.message || 'Unknown error occurred';
      addToast(`Failed to send message: ${errorMessage}. Please try emailing me directly.`, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Dev-only test email function
  const handleTestEmail = async () => {
    setFormData({
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Email from Contact Form',
      message: 'This is a test message sent from the development environment to verify EmailJS integration is working correctly. All template variables should be properly mapped.',
    });

    // Wait a moment for state to update
    setTimeout(async () => {
      setIsSubmitting(true);
      console.log('🧪 Sending test email...');

      try {
        await sendEmail(true);
        addToast('✅ Test email sent successfully! Check your inbox.', 'success');
      } catch (error: any) {
        const errorMessage = error?.text || error?.message || 'Unknown error occurred';
        addToast(`❌ Test email failed: ${errorMessage}`, 'error');
      } finally {
        setIsSubmitting(false);
      }
    }, 100);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <Container>
        <FadeUp>
          <SectionHeader label="CONTACT" title="Get In Touch" />
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <SlideInLeft>
            <div>
              <p className="text-gray-600 text-lg mb-8">
                {siteData.contact.description}
              </p>

              <div className="space-y-6">
                {siteData.contact.items.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={24} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-1">{item.label}</h4>
                      <p className="text-gray-600 break-words">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Islamabad Map */}
              <div className="mt-12 bg-white rounded-2xl overflow-hidden shadow-soft-lg p-1.5 hover:shadow-xl transition-shadow duration-300">
                <iframe
                  title="Islamabad Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5903968057305!2d74.35161507620034!3d33.73458207326627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6c7e0b0e0e0e0e0e!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2spk!4v1234567890&hl=en&gl=us"
                  width="100%"
                  height="260"
                  style={{ border: 0, borderRadius: '12px' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                />
              </div>
            </div>
          </SlideInLeft>

          {/* Contact Form */}
          <SlideInRight>
            <div>
              <form onSubmit={handleSubmit} className="space-y-6 bg-cream rounded-xl p-5 sm:p-8">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-dark mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project subject"
                    className="w-full"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    className="w-full"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" size="lg" className="w-full justify-center" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                {/* Alternative: Direct Email Link */}
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">Or</p>
                  <a
                    href={`mailto:${contactEmail}?subject=Contact from Portfolio&body=Hi Muhammad Sami Ullah,%0D%0A%0D%0A`}
                    className="inline-flex items-center gap-2 text-accent hover:text-accentHover font-semibold text-sm transition-colors break-all"
                  >
                    <Icon name="mail" size={18} />
                    Email me directly at {contactEmail}
                  </a>
                </div>
              </form>

              {/* Dev-Only Test Button */}
              {isDev && isConfigured && (
                <div className="mt-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                  <div className="flex items-start gap-3 mb-3">
                    <Icon name="settings" size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm flex-1">
                      <p className="font-semibold text-blue-800 mb-1">
                        🧪 Development Testing Tools
                      </p>
                      <p className="text-blue-700 text-xs mb-3">
                        This panel is only visible in development mode. Click below to send a test email with pre-filled data.
                      </p>
                      <button
                        type="button"
                        onClick={handleTestEmail}
                        disabled={isSubmitting}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold rounded-lg transition-colors text-sm"
                      >
                        {isSubmitting ? '📧 Sending Test Email...' : '🚀 Send Test Email'}
                      </button>
                    </div>
                  </div>
                  <div className="text-xs text-blue-600 bg-blue-100 rounded p-2 mt-2">
                    <strong>Test Data:</strong> Test User &lt;test@example.com&gt; → {contactEmail}
                  </div>
                </div>
              )}
            </div>
          </SlideInRight>
        </div>
      </Container>
    </section>
  );
}
