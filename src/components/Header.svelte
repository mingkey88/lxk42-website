<script>
  let mobileMenuOpen = false;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
    // Close mobile menu if open
    mobileMenuOpen = false;
  }
</script>

<!-- Skip to main content link for accessibility -->
<a 
    href="#main-content" 
    class="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-lxk-sage text-white px-4 py-2 z-50"
>
    Skip to main content
</a>

<!-- Header/Navigation -->
<header class="fixed top-0 w-full bg-white shadow-sm z-50">
    <nav class="container-custom">
        <div class="flex items-center justify-between h-16 md:h-20">
            <!-- Logo -->
            <div class="flex-shrink-0">
                <a href="#home" class="text-2xl font-bold text-lxk-sage">
                    LXK<span class="text-lxk-peach">42</span>
                </a>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-8">
                    <a href="#about" class="text-lxk-warm-gray hover:text-lxk-sage transition-colors">About</a>
                    <div class="relative group">
                        <button 
                            class="text-lxk-warm-gray hover:text-lxk-sage transition-colors flex items-center"
                            aria-expanded="false"
                            aria-haspopup="true"
                            aria-label="Services menu"
                        >
                            Services <i class="fas fa-chevron-down ml-1 text-xs" aria-hidden="true"></i>
                        </button>
                        <div 
                            class="absolute left-0 mt-2 w-64 bg-lxk-cream rounded-2xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 soft-shadow"
                            role="menu"
                            aria-label="Services submenu"
                        >
                            <div class="py-3">
                                <a href="#web-design" class="block px-4 py-3 text-lxk-warm-gray hover:bg-lxk-mint hover:bg-opacity-20 hover:text-lxk-sage rounded-lg mx-2 transition-colors" role="menuitem">Web Design & Development</a>
                                <a href="#web-apps" class="block px-4 py-3 text-lxk-warm-gray hover:bg-lxk-mint hover:bg-opacity-20 hover:text-lxk-sage rounded-lg mx-2 transition-colors" role="menuitem">Web App Development</a>
                                <a href="#digital-marketing" class="block px-4 py-3 text-lxk-warm-gray hover:bg-lxk-mint hover:bg-opacity-20 hover:text-lxk-sage rounded-lg mx-2 transition-colors" role="menuitem">Digital Marketing</a>
                                <a href="#branding" class="block px-4 py-3 text-lxk-warm-gray hover:bg-lxk-mint hover:bg-opacity-20 hover:text-lxk-sage rounded-lg mx-2 transition-colors" role="menuitem">Branding Solutions</a>
                            </div>
                        </div>
                    </div>
                    <a href="#portfolio" class="text-lxk-warm-gray hover:text-lxk-sage transition-colors">Portfolio</a>
                    <a href="#contact" class="text-lxk-warm-gray hover:text-lxk-sage transition-colors">Contact</a>
                </div>
            </div>

            <!-- Contact Info & CTA -->
            <div class="hidden md:flex items-center space-x-4">
                <div class="text-right">
                    <p class="text-sm text-gray-600">Get In Touch</p>
                    <a href="tel:+6598278695" class="text-lxk-sage font-medium">+65 9827 8695</a>
                </div>
                <a href="#contact" class="bg-lxk-sage text-white px-6 py-3 rounded-full hover:bg-lxk-soft-teal transition-colors font-medium">
                    Start Journey 🌱
                </a>
            </div>

            <!-- Mobile menu button -->
            <div class="md:hidden">
                <button
                    on:click={toggleMobileMenu}
                    class="text-lxk-warm-gray hover:text-lxk-sage transition-colors"
                    aria-label="Toggle mobile menu"
                >
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Navigation -->
        <div class="md:hidden {mobileMenuOpen ? '' : 'hidden'}" role="navigation" aria-label="Mobile menu">
            <div class="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <a href="#about" on:click={smoothScroll} class="block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-colors">About</a>
                <a href="#web-design" on:click={smoothScroll} class="block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-colors">Web Design</a>
                <a href="#mobile-apps" on:click={smoothScroll} class="block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-colors">Mobile Apps</a>
                <a href="#digital-marketing" on:click={smoothScroll} class="block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-colors">Digital Marketing</a>
                <a href="#branding" on:click={smoothScroll} class="block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-colors">Branding</a>
                <a href="#portfolio" on:click={smoothScroll} class="block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-colors">Portfolio</a>
                <a href="#contact" on:click={smoothScroll} class="block px-3 py-2 text-lxk-warm-gray hover:text-lxk-sage transition-colors">Contact</a>
                <div class="px-3 py-2">
                    <a href="#contact" class="bg-lxk-sage text-white px-6 py-3 rounded-full hover:bg-lxk-soft-teal transition-colors font-medium inline-block">
                        Start Journey 🌱
                    </a>
                </div>
            </div>
        </div>
    </nav>
</header>