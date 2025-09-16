<script>
  let mobileMenuOpen = false;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }

  // Removed unused smoothScroll function

  // SvelteKit handles prefetching automatically
  import ChevronDown from './icons/ChevronDown.svelte';
  import MenuIcon from './icons/Menu.svelte';
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
                <a href="/" class="text-2xl font-bold text-lxk-sage">
                    LXK<span class="text-lxk-peach">42</span>
                </a>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-8">
                    <a href="/about" class="text-lxk-warm-gray hover:text-lxk-sage transition-colors">About Us</a>
                    <div class="relative group">
                        <button 
                            class="text-lxk-warm-gray hover:text-lxk-sage transition-colors flex items-center"
                            aria-expanded="false"
                            aria-haspopup="true"
                            aria-label="Services menu"
                        >
                            Services <ChevronDown className="ml-1 w-3 h-3" />
                        </button>
                        <div 
                            class="absolute left-0 mt-2 w-64 bg-lxk-cream rounded-2xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 soft-shadow"
                            role="menu"
                            aria-label="Services submenu"
                        >
                            <div class="py-3">
                                <a href="/web-design" class="block px-4 py-3 text-lxk-warm-gray hover:bg-lxk-mint hover:bg-opacity-20 hover:text-lxk-sage rounded-lg mx-2 transition-colors" role="menuitem">Web Design & Development</a>
                                <a href="/web-app" class="block px-4 py-3 text-lxk-warm-gray hover:bg-lxk-mint hover:bg-opacity-20 hover:text-lxk-sage rounded-lg mx-2 transition-colors" role="menuitem">Web App Development</a>
                                <a href="/digital-marketing" class="block px-4 py-3 text-lxk-warm-gray hover:bg-lxk-mint hover:bg-opacity-20 hover:text-lxk-sage rounded-lg mx-2 transition-colors" role="menuitem">Digital Marketing</a>
                                <a href="/branding" class="block px-4 py-3 text-lxk-warm-gray hover:bg-lxk-mint hover:bg-opacity-20 hover:text-lxk-sage rounded-lg mx-2 transition-colors" role="menuitem">Branding Solutions</a>
                                <a href="/graphic-design" class="block px-4 py-3 text-lxk-warm-gray hover:bg-lxk-mint hover:bg-opacity-20 hover:text-lxk-sage rounded-lg mx-2 transition-colors" role="menuitem">Graphic Design</a>
                                <a href="/motion-graphics" class="block px-4 py-3 text-lxk-warm-gray hover:bg-lxk-mint hover:bg-opacity-20 hover:text-lxk-sage rounded-lg mx-2 transition-colors" role="menuitem">Motion Graphics & Animation</a>
                            </div>
                        </div>
                    </div>
                    <a href="/portfolio" class="text-lxk-warm-gray hover:text-lxk-sage transition-colors">Portfolio</a>
                    <a href="/testimonials" class="text-lxk-warm-gray hover:text-lxk-sage transition-colors">Testimonials</a>
                    <a href="/#contact" class="text-lxk-warm-gray hover:text-lxk-sage transition-colors">Contact</a>
                </div>
            </div>

            <!-- Contact Info -->
            <div class="hidden md:flex items-center">
                <div class="text-right">
                    <p class="text-sm text-gray-600">Get In Touch</p>
                    <a href="tel:+6598278695" class="text-lxk-sage font-medium hover:text-lxk-soft-teal transition-colors">+65 9827 8695</a>
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
        <div class="md:hidden {mobileMenuOpen ? '' : 'hidden'}" role="navigation" aria-label="Mobile menu">
            <div class="px-2 pt-2 pb-3 space-y-1 bg-lxk-cream/95 backdrop-blur-md border-t border-lxk-sage/10">
                <a href="/about" on:click={closeMobileMenu} class="block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-colors">About Us</a>
                <a href="/web-design" on:click={closeMobileMenu} class="block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-colors">Web Design</a>
                <a href="/web-app" on:click={closeMobileMenu} class="block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-colors">Web App Dev</a>
                <a href="/digital-marketing" on:click={closeMobileMenu} class="block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-colors">Digital Marketing</a>
                <a href="/branding" on:click={closeMobileMenu} class="block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-colors">Branding</a>
                <a href="/graphic-design" on:click={closeMobileMenu} class="block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-colors">Graphic Design</a>
                <a href="/motion-graphics" on:click={closeMobileMenu} class="block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-colors">Motion Graphics & Animation</a>
                <a href="/portfolio" on:click={closeMobileMenu} class="block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-colors">Portfolio</a>
                <a href="/testimonials" on:click={closeMobileMenu} class="block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-colors">Testimonials</a>
                <a href="/#contact" on:click={closeMobileMenu} class="block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-colors">Contact</a>
            </div>
        </div>
    </nav>
</header>
