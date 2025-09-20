<script>
  const currentYear = new Date().getFullYear();
</script>

<!-- Footer -->
<footer class="bg-lxk-warm-gray text-white">
  <div class="container-custom">
    <!-- Main Footer Content -->
    <div class="grid md:grid-cols-4 gap-8 py-16">
      <!-- Company Info -->
      <div class="md:col-span-2">
        <div class="flex items-center mb-6">
          <span class="text-3xl font-bold text-lxk-peach">LXK</span>
          <span class="text-3xl font-bold text-white">42</span>
        </div>
        <p class="text-gray-300 text-lg mb-6 leading-relaxed max-w-md">
          Your creative kakis in Singapore. Where friendship meets exceptional digital experiences.
        </p>
        <div class="flex items-center gap-4 text-sm text-gray-400">
          <span>🇸🇬 Made in Singapore</span>
          <span>•</span>
          <span>Founded {currentYear}</span>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="text-lg font-semibold mb-6 text-lxk-peach">Quick Links</h4>
        <nav class="space-y-3">
          <a href="/about" class="block text-gray-300 hover:text-white transition-colors">About Us</a>
          <a href="/portfolio" class="block text-gray-300 hover:text-white transition-colors">Portfolio</a>
          <a href="/testimonials" class="block text-gray-300 hover:text-white transition-colors">Testimonials</a>
          <a href="/contact" class="block text-gray-300 hover:text-white transition-colors">Contact</a>
        </nav>
      </div>

      <!-- Services -->
      <div>
        <h4 class="text-lg font-semibold mb-6 text-lxk-peach">Services</h4>
        <nav class="space-y-3">
          <a href="/web-design" class="block text-gray-300 hover:text-white transition-colors">Web Design</a>
          <a href="/web-app" class="block text-gray-300 hover:text-white transition-colors">Web Apps</a>
          <a href="/graphic-design" class="block text-gray-300 hover:text-white transition-colors">Graphic Design</a>
          <a href="/motion-graphics" class="block text-gray-300 hover:text-white transition-colors">Motion Graphics</a>
        </nav>
      </div>
    </div>

    <!-- Contact Info Bar -->
    <div class="border-t border-gray-600 py-8">
      <div class="grid md:grid-cols-3 gap-6 items-center">
        <!-- Email -->
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-lxk-sage rounded-full flex items-center justify-center">
            <span class="text-white text-sm">📧</span>
          </div>
          <div>
            <div class="text-sm text-gray-400">Email</div>
            <a href="mailto:mingjie@lxk42.sg" class="text-white hover:text-lxk-peach transition-colors">
              mingjie@lxk42.sg
            </a>
          </div>
        </div>

        <!-- Phone -->
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-lxk-peach rounded-full flex items-center justify-center">
            <span class="text-white text-sm">📞</span>
          </div>
          <div>
            <div class="text-sm text-gray-400">Phone</div>
            <a href="tel:+6598278695" class="text-white hover:text-lxk-peach transition-colors">
              +65 9827 8695
            </a>
          </div>
        </div>

        <!-- Location -->
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-lxk-coral rounded-full flex items-center justify-center">
            <span class="text-white text-sm">🇸🇬</span>
          </div>
          <div>
            <div class="text-sm text-gray-400">Location</div>
            <span class="text-white">Singapore</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-600 py-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-400 text-sm">
          © {currentYear} Light & Kaki Studio. All rights reserved.
        </p>
        <div class="flex items-center gap-6 text-sm">
          <a href="/privacy" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
          <a href="/terms" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </div>
</footer>