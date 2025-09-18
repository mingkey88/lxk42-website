<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import ChevronDown from './icons/ChevronDown.svelte';
  import MenuIcon from './icons/Menu.svelte';

  let mobileMenuOpen = false;
  let navLinks = [];
  let mobileNavRef;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;

    if (mobileMenuOpen) {
      // Animate mobile menu sliding down
      gsap.fromTo(
        mobileNavRef,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
    }
  }

  function closeMobileMenu() {
    // Animate mobile menu sliding up before closing
    if (mobileMenuOpen) {
      gsap.to(mobileNavRef, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          mobileMenuOpen = false;
        },
      });
    }
  }

  function handleNavHover(event, isEntering) {
    const link = event.target;
    const underline = link.querySelector('.nav-underline');

    if (isEntering) {
      // Scale up slightly and animate underline
      gsap.to(link, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
      });

      // Animate underline from left to right
      if (underline) {
        gsap.to(underline, {
          scaleX: 1,
          duration: 0.4,
          ease: 'power2.out',
        });
      }
    } else {
      // Scale back to normal and hide underline
      gsap.to(link, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });

      // Hide underline
      if (underline) {
        gsap.to(underline, {
          scaleX: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    }
  }

  function handleNavClick(event) {
    const link = event.target;

    // Quick scale animation for click feedback
    gsap.to(link, {
      scale: 0.95,
      duration: 0.1,
      ease: 'power2.out',
      yoyo: true,
      repeat: 1,
    });
  }

  onMount(() => {
    // Ensure all underlines are hidden initially
    gsap.set('.nav-underline', { scaleX: 0 });

    // Animate nav links on page load
    gsap.fromTo(
      navLinks,
      { opacity: 0, y: -10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.2,
      }
    );

    // Animate logo on page load
    gsap.fromTo(
      '.logo-animation',
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
    );
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
            bind:this={navLinks[0]}
            on:mouseenter={e => handleNavHover(e, true)}
            on:mouseleave={e => handleNavHover(e, false)}
            on:click={handleNavClick}
            class="nav-link text-lxk-warm-gray hover:text-lxk-sage transition-colors transform origin-center relative"
          >
            About Us
            <div
              class="nav-underline absolute bottom-0 left-0 w-full h-0.5 bg-lxk-peach transform scale-x-0 origin-left"
            ></div>
          </a>
          <div class="relative group">
            <button
              bind:this={navLinks[1]}
              on:mouseenter={e => handleNavHover(e, true)}
              on:mouseleave={e => handleNavHover(e, false)}
              on:click={handleNavClick}
              class="nav-link text-lxk-warm-gray hover:text-lxk-sage transition-colors flex items-center transform origin-center relative"
              aria-expanded="false"
              aria-haspopup="true"
              aria-label="Services menu"
            >
              Services <ChevronDown className="ml-1 w-3 h-3" />
              <div
                class="nav-underline absolute bottom-0 left-0 w-full h-0.5 bg-lxk-peach transform scale-x-0 origin-left"
              ></div>
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
            bind:this={navLinks[2]}
            on:mouseenter={e => handleNavHover(e, true)}
            on:mouseleave={e => handleNavHover(e, false)}
            on:click={handleNavClick}
            class="nav-link text-lxk-warm-gray hover:text-lxk-sage transition-colors transform origin-center relative"
          >
            Portfolio
            <div
              class="nav-underline absolute bottom-0 left-0 w-full h-0.5 bg-lxk-peach transform scale-x-0 origin-left"
            ></div>
          </a>
          <a
            href="/testimonials"
            bind:this={navLinks[3]}
            on:mouseenter={e => handleNavHover(e, true)}
            on:mouseleave={e => handleNavHover(e, false)}
            on:click={handleNavClick}
            class="nav-link text-lxk-warm-gray hover:text-lxk-sage transition-colors transform origin-center relative"
          >
            Testimonials
            <div
              class="nav-underline absolute bottom-0 left-0 w-full h-0.5 bg-lxk-peach transform scale-x-0 origin-left"
            ></div>
          </a>
          <a
            href="/#contact"
            bind:this={navLinks[4]}
            on:mouseenter={e => handleNavHover(e, true)}
            on:mouseleave={e => handleNavHover(e, false)}
            on:click={handleNavClick}
            class="nav-link text-lxk-warm-gray hover:text-lxk-sage transition-colors transform origin-center relative"
          >
            Contact
            <div
              class="nav-underline absolute bottom-0 left-0 w-full h-0.5 bg-lxk-peach transform scale-x-0 origin-left"
            ></div>
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
      class="md:hidden {mobileMenuOpen ? '' : 'hidden'}"
      role="navigation"
      aria-label="Mobile menu"
      bind:this={mobileNavRef}
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
          href="/#contact"
          on:click={closeMobileMenu}
          class="mobile-nav-link block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-all duration-200 transform hover:scale-105 hover:bg-lxk-mint/10 rounded-lg"
          >Contact</a
        >
      </div>
    </div>
  </nav>
</header>
