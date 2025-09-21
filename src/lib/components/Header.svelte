<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import ChevronDown from './icons/ChevronDown.svelte';
  import MenuIcon from './icons/Menu.svelte';

  let mobileMenuOpen = false;
  let mobileNavRef;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }

  function isActive(href) {
    return $page.url.pathname === href;
  }

  function isServiceActive() {
    const servicePaths = ['/web-design', '/web-app', '/graphic-design', '/motion-graphics'];
    return servicePaths.includes($page.url.pathname);
  }

  onMount(() => {
    // Simple fade-in for nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
      link.style.animationDelay = `${index * 100}ms`;
      link.classList.add('fade-in');
    });
  });
</script>

<!-- Skip to main content link for accessibility -->
<a
  href="#main-content"
  class="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-lxk-sage text-white px-4 py-2 z-50"
>
  Skip to main content
</a>

<!-- Header/Navigation -->
<header class="fixed top-0 w-full bg-lxk-cream/80 backdrop-blur-md shadow-sm z-50">
  <nav class="container-custom">
    <div class="flex items-center justify-between h-16 md:h-20">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <a
          href="/"
          class="logo-animation text-2xl font-bold text-lxk-sage transform transition-transform hover:scale-105"
        >
          LXK<span class="text-lxk-peach">42</span>
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-8">
          <a
            href="/about"
            class="nav-link text-lxk-warm-gray hover:text-lxk-sage transition-all duration-300 transform hover:scale-105 relative group"
          >
            About Us
            {#if isActive('/about')}
              <div
                class="absolute bottom-0 left-0 w-full h-0.5 bg-lxk-peach transform origin-left transition-transform duration-300 scale-x-100"
              ></div>
            {/if}
          </a>
          <div class="relative group">
            <button
              class="nav-link text-lxk-warm-gray hover:text-lxk-sage transition-all duration-300 flex items-center transform hover:scale-105 relative"
              aria-expanded="false"
              aria-haspopup="true"
              aria-label="Services menu"
            >
              Services <ChevronDown className="ml-1 w-3 h-3" />
              {#if isServiceActive()}
                <div
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-lxk-peach transform origin-left transition-transform duration-300 scale-x-100"
                ></div>
              {/if}
            </button>
            <div
              class="absolute left-0 mt-2 w-64 bg-lxk-cream rounded-2xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 soft-shadow"
              role="menu"
              aria-label="Services submenu"
            >
              <div class="py-3">
                <a
                  href="/web-design"
                  class="block px-4 py-3 text-lxk-warm-gray hover:bg-lxk-mint hover:bg-opacity-20 hover:text-lxk-sage rounded-lg mx-2 transition-all duration-200 transform hover:scale-105"
                  role="menuitem">Web Design & Development</a
                >
                <a
                  href="/web-app"
                  class="block px-4 py-3 text-lxk-warm-gray hover:bg-lxk-mint hover:bg-opacity-20 hover:text-lxk-sage rounded-lg mx-2 transition-all duration-200 transform hover:scale-105"
                  role="menuitem">Web App Development</a
                >
                <a
                  href="/graphic-design"
                  class="block px-4 py-3 text-lxk-warm-gray hover:bg-lxk-mint hover:bg-opacity-20 hover:text-lxk-sage rounded-lg mx-2 transition-all duration-200 transform hover:scale-105"
                  role="menuitem">Graphic Design</a
                >
                <a
                  href="/motion-graphics"
                  class="block px-4 py-3 text-lxk-warm-gray hover:bg-lxk-mint hover:bg-opacity-20 hover:text-lxk-sage rounded-lg mx-2 transition-all duration-200 transform hover:scale-105"
                  role="menuitem">Motion Graphics & Animation</a
                >
              </div>
            </div>
          </div>
          <a
            href="/portfolio"
            class="nav-link text-lxk-warm-gray hover:text-lxk-sage transition-all duration-300 transform hover:scale-105 relative group"
          >
            Portfolio
            {#if isActive('/portfolio')}
              <div
                class="absolute bottom-0 left-0 w-full h-0.5 bg-lxk-peach transform origin-left transition-transform duration-300 scale-x-100"
              ></div>
            {/if}
          </a>
          <a
            href="/testimonials"
            class="nav-link text-lxk-warm-gray hover:text-lxk-sage transition-all duration-300 transform hover:scale-105 relative group"
          >
            Testimonials
            {#if isActive('/testimonials')}
              <div
                class="absolute bottom-0 left-0 w-full h-0.5 bg-lxk-peach transform origin-left transition-transform duration-300 scale-x-100"
              ></div>
            {/if}
          </a>
          <a
            href="/contact"
            class="nav-link text-lxk-warm-gray hover:text-lxk-sage transition-all duration-300 transform hover:scale-105 relative group"
          >
            Contact
            {#if isActive('/contact')}
              <div
                class="absolute bottom-0 left-0 w-full h-0.5 bg-lxk-peach transform origin-left transition-transform duration-300 scale-x-100"
              ></div>
            {/if}
          </a>
        </div>
      </div>

      <!-- Contact Info -->
      <div class="hidden md:flex items-center">
        <div class="text-right">
          <p class="text-sm text-gray-600">Get In Touch</p>
          <a
            href="tel:+6598278695"
            class="text-lxk-sage font-medium hover:text-lxk-soft-teal transition-colors"
            >+65 9827 8695</a
          >
        </div>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button
          on:click={toggleMobileMenu}
          class="text-lxk-warm-gray hover:text-lxk-sage transition-colors"
          aria-label="Toggle mobile menu"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div
      class="md:hidden {mobileMenuOpen ? 'animate-slide-down' : 'hidden'}"
      role="navigation"
      aria-label="Mobile menu"
    >
      <div
        class="px-2 pt-2 pb-3 space-y-1 bg-lxk-cream/95 backdrop-blur-md border-t border-lxk-sage/10"
      >
        <a
          href="/about"
          on:click={closeMobileMenu}
          class="mobile-nav-link block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-all duration-200 transform hover:scale-105 hover:bg-lxk-mint/10 rounded-lg"
          >About Us</a
        >
        <a
          href="/web-design"
          on:click={closeMobileMenu}
          class="mobile-nav-link block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-all duration-200 transform hover:scale-105 hover:bg-lxk-mint/10 rounded-lg"
          >Web Design</a
        >
        <a
          href="/web-app"
          on:click={closeMobileMenu}
          class="mobile-nav-link block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-all duration-200 transform hover:scale-105 hover:bg-lxk-mint/10 rounded-lg"
          >Web App Dev</a
        >
        <a
          href="/graphic-design"
          on:click={closeMobileMenu}
          class="mobile-nav-link block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-all duration-200 transform hover:scale-105 hover:bg-lxk-mint/10 rounded-lg"
          >Graphic Design</a
        >
        <a
          href="/motion-graphics"
          on:click={closeMobileMenu}
          class="mobile-nav-link block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-all duration-200 transform hover:scale-105 hover:bg-lxk-mint/10 rounded-lg"
          >Motion Graphics & Animation</a
        >
        <a
          href="/portfolio"
          on:click={closeMobileMenu}
          class="mobile-nav-link block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-all duration-200 transform hover:scale-105 hover:bg-lxk-mint/10 rounded-lg"
          >Portfolio</a
        >
        <a
          href="/testimonials"
          on:click={closeMobileMenu}
          class="mobile-nav-link block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-all duration-200 transform hover:scale-105 hover:bg-lxk-mint/10 rounded-lg"
          >Testimonials</a
        >
        <a
          href="/contact"
          on:click={closeMobileMenu}
          class="mobile-nav-link block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-all duration-200 transform hover:scale-105 hover:bg-lxk-mint/10 rounded-lg"
          >Contact</a
        >
      </div>
    </div>
  </nav>
</header>
