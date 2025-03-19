'use client';
import { useState } from 'react';
import { z } from 'zod';
import SuccessPopup from '@/components/common/SuccessPopup';

// Validation schema
const formSchema = z.object({
  firstName: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z.string()
    .email('Please enter a valid email address'),
  subject: z.string()
    .min(3, 'Subject must be at least 3 characters')
    .max(100, 'Subject must be less than 100 characters'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);

  // Add new function to check if form is valid
  const isFormValid = () => {
    try {
      // Validate all fields
      formSchema.parse(formData);
      // Check if all required fields have values
      return Object.values(formData).every(value => value.trim() !== '');
    } catch (error) {
      return false;
    }
  };

  // Validate field on change
  const validateField = (name: keyof FormData, value: string) => {
    try {
      formSchema.shape[name].parse(value);
      setErrors(prev => ({ ...prev, [name]: undefined }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({ ...prev, [name]: error.errors[0].message }));
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name as keyof FormData]) {
      validateField(name as keyof FormData, value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name as keyof FormData, formData[name as keyof FormData]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => ({
      ...acc,
      [key]: true
    }), {});
    setTouched(allTouched);

    // Validate all fields
    try {
      formSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = error.errors.reduce((acc, err) => ({
          ...acc,
          [err.path[0]]: err.message
        }), {});
        setErrors(newErrors);
        return;
      }
    }

    if (!isFormValid()) return;

    setStatus('loading');

    try {
      // Replace with your API endpoint
      const response = await fetch('https://portfolio-backend-2994.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers your API requires
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();

      setStatus('success');
      setFormData({ firstName: '', email: '', subject: '', message: '' });
      setTouched({});
      setErrors({});
      setIsSuccessPopupOpen(true);
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleClosePopup = () => {
    setIsSuccessPopupOpen(false);
    setStatus('idle');
  };

  const getInputClassName = (fieldName: keyof FormData) => {
    const baseClasses = "w-full px-4 py-2 border rounded-md transition-all duration-200 focus:outline-none input-font-color";
    const validationClasses = touched[fieldName]
      ? errors[fieldName]
        ? "border-red-500 focus:ring-2 focus:ring-red-200"
        : "border-green-500 focus:ring-2 focus:ring-green-200"
      : "border-gray-300 focus:ring-2 focus:ring-blue-200";
    
    return `${baseClasses} ${validationClasses}`;
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={getInputClassName('firstName')}
              placeholder="Your name"
            />
            {touched.firstName && !errors.firstName && (
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          {touched.firstName && errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={getInputClassName('email')}
              placeholder="your@email.com"
            />
            {touched.email && !errors.email && (
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          {touched.email && errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <div className="relative">
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={getInputClassName('subject')}
              placeholder="What is this about?"
            />
            {touched.subject && !errors.subject && (
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          {touched.subject && errors.subject && (
            <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              rows={4}
              className={getInputClassName('message')}
              placeholder="Your message..."
            />
            {touched.message && !errors.message && (
              <svg className="absolute right-3 top-3 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          {touched.message && errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === 'loading' || !isFormValid()}
          className={`w-full px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
            status === 'loading' || !isFormValid()
              ? 'bg-gray-400 cursor-not-allowed opacity-50'
              : 'bg-blue-600 hover:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          }`}
        >
          {status === 'loading' ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>

        {status === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-md flex items-center animate-fade-in">
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            There was an error sending your message. Please try again.
          </div>
        )}
      </form>

      <SuccessPopup
        isOpen={isSuccessPopupOpen}
        onClose={handleClosePopup}
      />
    </>
  );
}