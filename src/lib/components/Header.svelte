<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { page } from '$app/stores';
  import ChevronDown from './icons/ChevronDown.svelte';
  import MenuIcon from './icons/Menu.svelte';

  let mobileMenuOpen: boolean = false;
  let navLinks: NodeListOf<Element> | null = null;

  function toggleMobileMenu(): void {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMobileMenu(): void {
    mobileMenuOpen = false;
  }

  function isActive(href: string): boolean {
    return $page.url.pathname === href;
  }

  function isServiceActive(): boolean {
    const servicePaths: string[] = ['/web-design', '/web-app', '/graphic-design', '/motion-graphics'];
    return servicePaths.includes($page.url.pathname);
  }

  onMount(() => {
    // Simple fade-in for nav links with proper cleanup reference
    navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link: Element, index: number) => {
      const htmlLink = link as HTMLElement;
      htmlLink.style.animationDelay = `${index * 100}ms`;
      htmlLink.classList.add('fade-in');
    });
  });

  onDestroy(() => {
    // Cleanup: remove animation classes and reset styles
    if (navLinks) {
      navLinks.forEach((link: Element) => {
        const htmlLink = link as HTMLElement;
        htmlLink.classList.remove('fade-in');
        htmlLink.style.animationDelay = '';
      });
      navLinks = null;
    }
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
    <div class="flex items-center justify-between h-16 sm:h-18 md:h-20">
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
      <div class="hidden md:flex items-center justify-center flex-1">
        <div class="flex items-baseline space-x-8">
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
        </div>
      </div>

      <!-- Special Contact Button -->
      <div class="hidden md:flex items-center">
        <a
          href="/contact"
          class="bg-lxk-peach text-white px-6 py-2 rounded-full font-medium hover:bg-lxk-coral transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Contact Us
        </a>
      </div>


      <!-- Mobile Contact Button (visible on md screens) -->
      <div class="hidden md:flex lg:hidden">
        <a
          href="tel:+6598278695"
          class="bg-lxk-sage text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-lxk-soft-teal transition-colors min-h-[44px] min-w-[44px] flex items-center"
          aria-label="Call us"
        >
          📞
        </a>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden flex items-center gap-2">
        <!-- Emergency contact for mobile -->
        <a
          href="tel:+6598278695"
          class="bg-lxk-sage/10 text-lxk-sage p-2 rounded-full hover:bg-lxk-sage hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Call us"
        >
          📞
        </a>
        <button
          on:click={toggleMobileMenu}
          class="text-lxk-warm-gray hover:text-lxk-sage transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
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
