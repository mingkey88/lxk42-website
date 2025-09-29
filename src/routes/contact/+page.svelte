<script lang="ts">
  import { onMount } from 'svelte';
  import VideoPlayer from '$lib/components/ui/VideoPlayer.svelte';
  import { updatePageMeta, injectStructuredData, contactPageSchema } from '$lib/structuredData.js';
  import { sanitizeFormData, validateRequiredFields, validateFormFields } from '$lib/utils/inputSanitization.js';

  let formData = {
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    source: ''
  };

  let isSubmitting: boolean = false;
  let submitStatus: 'success' | 'error' | 'validation' | null = null;
  let validationErrors: string[] = [];

  const serviceOptions = [
    { value: '', label: 'Select a service...' },
    { value: 'web-design', label: 'Web Design' },
    { value: 'web-app', label: 'Web Applications' },
    { value: 'graphic-design', label: 'Graphic Design' },
    { value: 'motion-graphics', label: 'Motion Graphics' },
    { value: 'full-rebrand', label: 'Complete Rebrand' },
    { value: 'consultation', label: 'Strategy Consultation' },
    { value: 'other', label: 'Other / Multiple Services' }
  ];

  const budgetOptions = [
    { value: '', label: 'Select budget range...' },
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: 'over-50k', label: 'Over $50,000' },
    { value: 'discuss', label: 'Let\'s discuss' }
  ];

  const timelineOptions = [
    { value: '', label: 'Select timeline...' },
    { value: 'asap', label: 'ASAP' },
    { value: '1-month', label: 'Within 1 month' },
    { value: '2-3-months', label: '2-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: 'flexible', label: 'Flexible timeline' }
  ];

  const sourceOptions = [
    { value: '', label: 'How did you hear about us?' },
    { value: 'google-search', label: 'Google Search' },
    { value: 'social-media', label: 'Social Media' },
    { value: 'referral', label: 'Friend/Colleague Referral' },
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'previous-client', label: 'Previous Client' },
    { value: 'other', label: 'Other' }
  ];

  async function handleSubmit(event: Event): Promise<void> {
    event.preventDefault();
    isSubmitting = true;
    submitStatus = null;
    validationErrors = [];

    try {
      // Sanitize all form data
      const sanitizedData = sanitizeFormData(formData);

      // Validate required fields
      const requiredFields = ['name', 'email', 'service', 'message'];
      const requiredErrors = validateRequiredFields(sanitizedData, requiredFields);

      // Validate field formats
      const formatErrors = validateFormFields(sanitizedData);

      // Combine all validation errors
      validationErrors = [...requiredErrors, ...formatErrors];

      if (validationErrors.length > 0) {
        submitStatus = 'validation';
        return;
      }

      // Update form data with sanitized values
      formData = { ...sanitizedData };

      // Submit to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '57556b5d-acc8-4dd0-92a2-f0dd894fbb12',
          subject: `New Contact Form Submission from ${sanitizedData.name}`,
          from_name: 'LXK42 Website Contact Form',
          ...sanitizedData
        })
      });

      const result = await response.json();

      if (result.success) {
        submitStatus = 'success';

        // Reset form after successful submission
        formData = {
          name: '', email: '', company: '', phone: '', service: '',
          budget: '', timeline: '', message: '', source: ''
        };
      } else {
        throw new Error(result.message || 'Form submission failed');
      }

    } catch (error) {
      console.error('Form submission error:', error);
      submitStatus = 'error';
    } finally {
      isSubmitting = false;
    }
  }

  onMount(() => {
    // SEO optimization
    updatePageMeta(
      'Contact Us | Light & Kaki Studio - Start Your Project Today',
      'Ready to bring your vision to life? Contact Light & Kaki Studio for web design, development, and creative services in Singapore. Get your free consultation today.'
    );

    // Inject contact page structured data
    injectStructuredData(contactPageSchema, 'contact-page');

    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));
  });
</script>

<svelte:head>
  <title>Contact Us | Light & Kaki Studio - Start Your Project Today</title>
  <meta
    name="description"
    content="Ready to bring your vision to life? Contact Light & Kaki Studio for web design, development, and creative services in Singapore. Get your free consultation today."
  />
  <meta
    name="keywords"
    content="contact light kaki studio, web design singapore contact, get quote singapore, creative agency contact"
  />
  <meta property="og:title" content="Contact Us | Light & Kaki Studio" />
  <meta
    property="og:description"
    content="Ready to bring your vision to life? Contact us for web design, development, and creative services in Singapore."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.lxk42.sg/contact" />
  <link rel="canonical" href="https://www.lxk42.sg/contact" />
</svelte:head>

<main class="min-h-screen">
  <!-- Hero Section -->
  <section class="min-h-[70vh] flex items-center bg-gradient-to-br from-lxk-cream/30 via-white to-lxk-mint/20 pt-20 md:pt-24">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Visual Element -->
        <div class="animate-on-scroll">
          <div class="bg-gradient-to-br from-lxk-sage/20 to-lxk-peach/20 rounded-3xl h-96 overflow-hidden relative">
            <VideoPlayer
              src="/office-meeting.mp4"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Creative collaboration and project planning"
              lazy={true}
            />
          </div>
        </div>

        <!-- Content -->
        <div class="animate-on-scroll">
          <h1 class="text-5xl lg:text-7xl font-bold text-lxk-warm-gray leading-[0.9] mb-8">
            Let's Create Something <span class="text-lxk-peach">Amazing</span> Together
          </h1>
          <p class="text-xl text-gray-700 mb-8 leading-relaxed">
            Ready to bring your vision to life? Whether you need a stunning website,
            eye-catching graphics, or a complete digital transformation, we're here to help.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section class="section-padding bg-white">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12 animate-on-scroll">
          <h2 class="text-3xl md:text-4xl font-bold text-lxk-warm-gray mb-4">
            Tell Us About Your Project
          </h2>
          <p class="text-xl text-gray-600">
            Fill out the form below and we'll get back to you within 24 hours with a personalized proposal.
          </p>
        </div>

        <form on:submit={handleSubmit} class="space-y-8 animate-on-scroll">
          <!-- Personal Information -->
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-lxk-warm-gray mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                bind:value={formData.name}
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lxk-sage focus:border-lxk-sage transition-colors"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-lxk-warm-gray mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                bind:value={formData.email}
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lxk-sage focus:border-lxk-sage transition-colors"
                placeholder="your.email@company.com"
              />
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label for="company" class="block text-sm font-medium text-lxk-warm-gray mb-2">
                Company/Organization
              </label>
              <input
                type="text"
                id="company"
                bind:value={formData.company}
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lxk-sage focus:border-lxk-sage transition-colors"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-lxk-warm-gray mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                bind:value={formData.phone}
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lxk-sage focus:border-lxk-sage transition-colors"
                placeholder="+65 xxxx xxxx"
              />
            </div>
          </div>

          <!-- Project Details -->
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label for="service" class="block text-sm font-medium text-lxk-warm-gray mb-2">
                Service Interested In *
              </label>
              <select
                id="service"
                bind:value={formData.service}
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lxk-sage focus:border-lxk-sage transition-colors"
              >
                {#each serviceOptions as option}
                  <option value={option.value}>{option.label}</option>
                {/each}
              </select>
            </div>

            <div>
              <label for="budget" class="block text-sm font-medium text-lxk-warm-gray mb-2">
                Project Budget
              </label>
              <select
                id="budget"
                bind:value={formData.budget}
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lxk-sage focus:border-lxk-sage transition-colors"
              >
                {#each budgetOptions as option}
                  <option value={option.value}>{option.label}</option>
                {/each}
              </select>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label for="timeline" class="block text-sm font-medium text-lxk-warm-gray mb-2">
                Project Timeline
              </label>
              <select
                id="timeline"
                bind:value={formData.timeline}
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lxk-sage focus:border-lxk-sage transition-colors"
              >
                {#each timelineOptions as option}
                  <option value={option.value}>{option.label}</option>
                {/each}
              </select>
            </div>

            <div>
              <label for="source" class="block text-sm font-medium text-lxk-warm-gray mb-2">
                How Did You Find Us?
              </label>
              <select
                id="source"
                bind:value={formData.source}
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lxk-sage focus:border-lxk-sage transition-colors"
              >
                {#each sourceOptions as option}
                  <option value={option.value}>{option.label}</option>
                {/each}
              </select>
            </div>
          </div>

          <!-- Project Description -->
          <div>
            <label for="message" class="block text-sm font-medium text-lxk-warm-gray mb-2">
              Tell Us About Your Project *
            </label>
            <textarea
              id="message"
              bind:value={formData.message}
              required
              rows="6"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lxk-sage focus:border-lxk-sage transition-colors resize-none"
              placeholder="Describe your project goals, vision, specific requirements, and any inspiration you have. The more details you provide, the better we can help you!"
            ></textarea>
          </div>

          <!-- Submit Button and Status -->
          <div class="text-center">
            {#if submitStatus === 'validation'}
              <div class="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div class="text-yellow-800">
                  <p class="font-medium mb-2">⚠️ Please fix the following issues:</p>
                  <ul class="list-disc list-inside text-sm space-y-1">
                    {#each validationErrors as error}
                      <li>{error}</li>
                    {/each}
                  </ul>
                </div>
              </div>
            {/if}

            {#if submitStatus === 'success'}
              <div class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div class="flex items-center justify-center gap-2 text-green-800">
                  <span class="text-xl">✅</span>
                  <p class="font-medium">Thank you! We'll be in touch within 24 hours.</p>
                </div>
              </div>
            {/if}

            {#if submitStatus === 'error'}
              <div class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div class="flex items-center justify-center gap-2 text-red-800">
                  <span class="text-xl">❌</span>
                  <p class="font-medium">Something went wrong. Please try again or email us directly.</p>
                </div>
              </div>
            {/if}

            <button
              type="submit"
              disabled={isSubmitting}
              class="inline-flex items-center px-8 py-4 bg-lxk-peach text-white font-medium text-lg rounded-full hover:bg-lxk-coral transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {#if isSubmitting}
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              {:else}
                Send My Project Details →
              {/if}
            </button>

            <p class="mt-4 text-sm text-gray-600">
              We'll review your project and get back to you within 24 hours with a personalized proposal.
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- Alternative Contact Methods -->
  <section class="section-padding bg-gradient-to-br from-lxk-mint/5 to-lxk-cream/10">
    <div class="container-custom">
      <div class="text-center mb-12 animate-on-scroll">
        <h2 class="text-3xl md:text-4xl font-bold text-lxk-warm-gray mb-4">
          Prefer Other Ways to Connect?
        </h2>
        <p class="text-xl text-gray-600">
          We're flexible kakis! Reach out however works best for you.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <!-- WhatsApp -->
        <div class="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll">
          <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-white text-2xl">💬</span>
          </div>
          <h3 class="text-xl font-bold text-lxk-warm-gray mb-2">WhatsApp</h3>
          <p class="text-gray-600 mb-4">Quick questions or project discussions</p>
          <a
            href="https://wa.me/6598278695"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>

        <!-- Email -->
        <div class="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll">
          <div class="w-16 h-16 bg-lxk-sage rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-white text-2xl">📧</span>
          </div>
          <h3 class="text-xl font-bold text-lxk-warm-gray mb-2">Email</h3>
          <p class="text-gray-600 mb-4">Detailed project briefs and proposals</p>
          <a
            href="mailto:info@lxk42.sg"
            class="inline-block bg-lxk-sage text-white px-6 py-3 rounded-full font-medium hover:bg-lxk-soft-teal transition-colors"
          >
            Send Email
          </a>
        </div>

        <!-- Phone -->
        <div class="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll">
          <div class="w-16 h-16 bg-lxk-peach rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-white text-2xl">📞</span>
          </div>
          <h3 class="text-xl font-bold text-lxk-warm-gray mb-2">Phone Call</h3>
          <p class="text-gray-600 mb-4">Direct consultation and planning</p>
          <a
            href="tel:+6598278695"
            class="inline-block bg-lxk-peach text-white px-6 py-3 rounded-full font-medium hover:bg-lxk-coral transition-colors"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="section-padding bg-white">
    <div class="container-custom">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12 animate-on-scroll">
          <h2 class="text-3xl md:text-4xl font-bold text-lxk-warm-gray mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-xl text-gray-600">
            Quick answers to common questions about working with us.
          </p>
        </div>

        <div class="space-y-6">
          <div class="border border-gray-200 rounded-lg p-6 animate-on-scroll">
            <h3 class="text-lg font-semibold text-lxk-warm-gray mb-2">
              How quickly can you start my project?
            </h3>
            <p class="text-gray-600">
              Most projects can begin within 1-2 weeks of finalizing the proposal. Rush projects
              may be accommodated based on our current workload and project complexity.
            </p>
          </div>

          <div class="border border-gray-200 rounded-lg p-6 animate-on-scroll">
            <h3 class="text-lg font-semibold text-lxk-warm-gray mb-2">
              Do you work with clients outside Singapore?
            </h3>
            <p class="text-gray-600">
              Absolutely! While we're based in Singapore, we work with clients globally.
              We're experienced in remote collaboration and different time zones.
            </p>
          </div>

          <div class="border border-gray-200 rounded-lg p-6 animate-on-scroll">
            <h3 class="text-lg font-semibold text-lxk-warm-gray mb-2">
              What's included in your project proposals?
            </h3>
            <p class="text-gray-600">
              Our proposals include detailed scope, timeline, pricing, deliverables,
              and next steps. We believe in transparency from the very beginning.
            </p>
          </div>

          <div class="border border-gray-200 rounded-lg p-6 animate-on-scroll">
            <h3 class="text-lg font-semibold text-lxk-warm-gray mb-2">
              Do you offer ongoing support after project completion?
            </h3>
            <p class="text-gray-600">
              Yes! We offer various maintenance and support packages to keep your project
              running smoothly. We're your long-term creative kakis.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-on-scroll {
    animation: fadeInUp 0.8s ease-out forwards;
  }

  /* Form styling enhancements */
  input:focus, select:focus, textarea:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(143, 166, 142, 0.1);
  }

  /* Custom select arrow */
  select {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    padding-right: 2.5rem;
    appearance: none;
  }
</style>