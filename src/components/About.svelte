<script>
  import { onMount } from 'svelte';
  import teamImage from '../assets/team-collaboration.png';
  import teamImageWebp from '../assets/team-collaboration.webp';
  import LoadingSkeleton from './ui/LoadingSkeleton.svelte';
  let imageLoaded = false;
  let imgEl;

  onMount(() => {
    if (imgEl && imgEl.complete) {
      imageLoaded = true;
    }
  });
</script>

<!-- About Section -->
<section id="about" class="section-padding bg-lxk-cream relative overflow-hidden">
    <!-- Anime-style background elements -->
    <div class="absolute inset-0 z-0">
        <!-- Subtle paint splashes -->
        <div class="paint-splash-2" style="top: 20%; right: 5%; transform: scale(0.7); opacity: 0.4;"></div>
        <div class="paint-splash-3" style="bottom: 15%; left: 10%; transform: scale(0.6); opacity: 0.3;"></div>
        
        <!-- Floating elements -->
        <div class="floating-leaf" style="top: 40%; right: 15%; animation-delay: -8s;"></div>
        <div class="floating-butterfly" style="bottom: 50%; right: 25%; animation-delay: -3s;"></div>
        
        <!-- Geometric frame -->
        <div class="circle-frame" style="width: 200px; height: 200px; top: 60%; left: 5%; opacity: 0.2; animation-delay: -10s;"></div>
    </div>

    <div class="container-custom relative z-10">
        <div class="text-center animate-on-scroll mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-lxk-warm-gray mb-8 hero-fade-in">
                About <span class="bg-gradient-to-r from-lxk-sage to-lxk-peach bg-clip-text text-transparent font-extrabold tracking-wide">Light & Kaki Studio</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed hero-fade-in-delay-1">
                In Singapore, "kaki" means friend - the kind of friend who's always got your back, who understands your vision, 
                and who walks the journey alongside you. That's who we are. 🌟
            </p>
        </div>

        <!-- Main content: Description and Team image side by side -->
        <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
            <!-- Inspirational Quote text -->
            <div class="animate-on-scroll hero-fade-in-delay-2">
                <h3 class="text-3xl font-bold text-lxk-sage mb-6">"The best way to predict the future is to create it together"</h3>
                <p class="text-lg text-lxk-coral font-medium italic mb-6">- Joe Echevarria</p>
                <div class="space-y-6 text-gray-600 leading-relaxed">
                    <p>
                        We believe the best digital experiences are born from genuine collaboration. Not from boardrooms 
                        or corporate hierarchies, but from shared dreams, late-night brainstorming sessions, and the kind 
                        of trust that only comes from true partnership.
                    </p>
                    <p>
                        Light & Kaki Studio isn't just about pixels and code. We're about understanding your story, 
                        feeling your passion, and translating that into digital experiences that genuinely connect 
                        with your people. 
                    </p>
                    <p class="text-lxk-coral font-medium">
                        Because when creativity meets friendship, magic happens. ✨
                    </p>
                </div>
            </div>

            <!-- Team collaboration image -->
            <div class="animate-on-scroll hero-fade-in-delay-3 flex justify-center">
                <div class="relative max-w-md">
                    <!-- Decorative circle frame behind image -->
                    <div class="absolute -inset-4 bg-gradient-to-r from-lxk-sage/20 to-lxk-peach/20 rounded-3xl blur-xl"></div>
                    <div class="relative bg-white rounded-3xl p-4 shadow-2xl soft-shadow transform hover:scale-105 transition-transform duration-500">
                        {#if !imageLoaded}
                          <div class="absolute inset-4">
                            <LoadingSkeleton width="100%" height="260px" borderRadius="1rem" ariaLabel="Team image loading" />
                          </div>
                        {/if}
                        <picture class="block">
                          <source srcset={teamImageWebp} type="image/webp" />
                          <img
                            bind:this={imgEl}
                            src={teamImage}
                            alt="Three friends collaborating at Light & Kaki Studio - the essence of creative friendship"
                            class="w-full rounded-2xl shadow-lg transition-opacity duration-300"
                            loading="lazy"
                            on:load={() => (imageLoaded = true)}
                            style="filter: contrast(1.1) saturate(1.1) brightness(1.05); opacity: {imageLoaded ? 1 : 0};"
                          />
                        </picture>
                        <!-- Subtle paint splash overlay -->
                        <div class="absolute -top-2 -right-2 paint-splash-1 opacity-20 pointer-events-none" style="transform: scale(0.3);"></div>
                    </div>
                    <p class="mt-6 text-lxk-coral font-medium text-center italic">
                        This is us - creative kakis working together ✨
                    </p>
                </div>
            </div>
        </div>

        <!-- Horizontal Journey Timeline -->
        <div class="animate-on-scroll hero-fade-in-delay-4 mb-16">
            <h4 class="text-3xl font-bold text-lxk-warm-gray mb-12 text-center">Our Creative Journey</h4>
            <div class="relative max-w-6xl mx-auto">
                <!-- Horizontal timeline line -->
                <div class="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-lxk-sage via-lxk-peach to-lxk-coral rounded-full"></div>
                
                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Step 1: Discovery -->
                    <div class="relative animate-on-scroll">
                        <!-- Timeline dot -->
                        <div class="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-lxk-sage rounded-full border-4 border-white shadow-lg z-10"></div>
                        
                        <div class="text-center">
                            <!-- Image placeholder -->
                            <div class="relative mb-6">
                                <div class="absolute -inset-2 bg-gradient-to-r from-lxk-sage/30 to-lxk-mint/30 rounded-2xl blur-lg"></div>
                                <div class="relative bg-lxk-sage/10 rounded-2xl p-6 border border-lxk-sage/20 max-w-sm mx-auto">
                                    <div class="w-full h-48 bg-gradient-to-br from-lxk-sage/20 to-lxk-mint/20 rounded-xl flex items-center justify-center">
                                        <div class="text-center">
                                            <div class="text-5xl text-lxk-sage mb-2">☕</div>
                                            <p class="text-lxk-sage font-medium">Discovery Session</p>
                                            <p class="text-gray-600 text-sm mt-1">Understanding your vision</p>
                                        </div>
                                    </div>
                                </div>
                                <p class="mt-3 text-center text-sm text-lxk-coral font-medium italic">
                                    Future: Real photo of discovery session
                                </p>
                            </div>
                            
                            <!-- Content card -->
                            <div class="bg-white rounded-2xl p-6 shadow-lg soft-shadow transform hover:scale-105 transition-transform duration-300">
                                <div class="flex items-center justify-center mb-4">
                                    <div class="w-12 h-12 bg-lxk-sage rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                                </div>
                                <h5 class="text-xl font-bold text-lxk-warm-gray mb-3">We Listen & Learn</h5>
                                <p class="text-gray-600 text-sm">Every partnership begins with kopi and genuine conversation. We dive deep into your vision, understand your challenges, and discover what makes your story unique.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Step 2: Create -->
                    <div class="relative animate-on-scroll">
                        <!-- Timeline dot -->
                        <div class="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-lxk-peach rounded-full border-4 border-white shadow-lg z-10"></div>
                        
                        <div class="text-center">
                            <!-- Image placeholder -->
                            <div class="relative mb-6">
                                <div class="absolute -inset-2 bg-gradient-to-r from-lxk-peach/30 to-lxk-coral/30 rounded-2xl blur-lg"></div>
                                <div class="relative bg-lxk-peach/10 rounded-2xl p-6 border border-lxk-peach/20 max-w-sm mx-auto">
                                    <div class="w-full h-48 bg-gradient-to-br from-lxk-peach/20 to-lxk-coral/20 rounded-xl flex items-center justify-center">
                                        <div class="text-center">
                                            <div class="text-5xl text-lxk-peach mb-2">🎨</div>
                                            <p class="text-lxk-peach font-medium">Creative Process</p>
                                            <p class="text-gray-600 text-sm mt-1">Design & development in action</p>
                                        </div>
                                    </div>
                                </div>
                                <p class="mt-3 text-center text-sm text-lxk-coral font-medium italic">
                                    Future: Studio workspace photo
                                </p>
                            </div>
                            
                            <!-- Content card -->
                            <div class="bg-white rounded-2xl p-6 shadow-lg soft-shadow transform hover:scale-105 transition-transform duration-300">
                                <div class="flex items-center justify-center mb-4">
                                    <div class="w-12 h-12 bg-lxk-peach rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                                </div>
                                <h5 class="text-xl font-bold text-lxk-warm-gray mb-3">We Design & Build</h5>
                                <p class="text-gray-600 text-sm">With painterly touches and thoughtful interactions, we craft digital experiences that feel authentically you. Every element is considered, every detail purposeful.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Step 3: Celebrate -->
                    <div class="relative animate-on-scroll">
                        <!-- Timeline dot -->
                        <div class="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-lxk-coral rounded-full border-4 border-white shadow-lg z-10"></div>
                        
                        <div class="text-center">
                            <!-- Image placeholder -->
                            <div class="relative mb-6">
                                <div class="absolute -inset-2 bg-gradient-to-r from-lxk-coral/30 to-lxk-sage/30 rounded-2xl blur-lg"></div>
                                <div class="relative bg-lxk-coral/10 rounded-2xl p-6 border border-lxk-coral/20 max-w-sm mx-auto">
                                    <div class="w-full h-48 bg-gradient-to-br from-lxk-coral/20 to-lxk-sage/20 rounded-xl flex items-center justify-center">
                                        <div class="text-center">
                                            <div class="text-5xl text-lxk-coral mb-2">🎉</div>
                                            <p class="text-lxk-coral font-medium">Success Together</p>
                                            <p class="text-gray-600 text-sm mt-1">Celebrating client achievements</p>
                                        </div>
                                    </div>
                                </div>
                                <p class="mt-3 text-center text-sm text-lxk-coral font-medium italic">
                                    Future: Client celebration photo
                                </p>
                            </div>
                            
                            <!-- Content card -->
                            <div class="bg-white rounded-2xl p-6 shadow-lg soft-shadow transform hover:scale-105 transition-transform duration-300">
                                <div class="flex items-center justify-center mb-4">
                                    <div class="w-12 h-12 bg-lxk-coral rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                                </div>
                                <h5 class="text-xl font-bold text-lxk-warm-gray mb-3">We Launch & Celebrate</h5>
                                <p class="text-gray-600 text-sm">Your success is our success! We celebrate every milestone together and continue supporting your growth long after launch.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Interactive Values Cards -->
        <div class="animate-on-scroll hero-fade-in-delay-5 relative max-w-6xl mx-auto mb-16">
            <div class="paint-splash-1 absolute -top-4 -right-4 z-0 opacity-20" style="transform: scale(0.8);"></div>
            
            <h4 class="text-3xl font-bold text-lxk-warm-gray mb-8 text-center">What We Stand For</h4>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="group bg-white rounded-2xl p-6 shadow-lg soft-shadow relative z-10 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div class="text-center space-y-3">
                        <div class="w-16 h-16 bg-lxk-sage/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-lxk-sage group-hover:scale-110 transition-all duration-300">
                            <span class="text-lxk-sage text-2xl group-hover:text-white transition-colors duration-300">🤝</span>
                        </div>
                        <h5 class="font-bold text-lxk-warm-gray group-hover:text-lxk-sage transition-colors duration-300">Genuine Partnership</h5>
                        <p class="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Your success is our success. We're in this together, through every challenge and celebration.</p>
                    </div>
                    <div class="absolute inset-0 bg-lxk-sage/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div class="group bg-white rounded-2xl p-6 shadow-lg soft-shadow relative z-10 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div class="text-center space-y-3">
                        <div class="w-16 h-16 bg-lxk-peach/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-lxk-peach group-hover:scale-110 transition-all duration-300">
                            <span class="text-lxk-peach text-2xl group-hover:text-white transition-colors duration-300">🎨</span>
                        </div>
                        <h5 class="font-bold text-lxk-warm-gray group-hover:text-lxk-peach transition-colors duration-300">Thoughtful Design</h5>
                        <p class="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Every pixel serves a purpose, every interaction tells your story with warmth and intention.</p>
                    </div>
                    <div class="absolute inset-0 bg-lxk-peach/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div class="group bg-white rounded-2xl p-6 shadow-lg soft-shadow relative z-10 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div class="text-center space-y-3">
                        <div class="w-16 h-16 bg-lxk-coral/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-lxk-coral group-hover:scale-110 transition-all duration-300">
                            <span class="text-lxk-coral text-2xl group-hover:text-white transition-colors duration-300">🌱</span>
                        </div>
                        <h5 class="font-bold text-lxk-warm-gray group-hover:text-lxk-coral transition-colors duration-300">Growth Mindset</h5>
                        <p class="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">We grow together, learn together, and celebrate every milestone on the journey.</p>
                    </div>
                    <div class="absolute inset-0 bg-lxk-coral/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div class="group bg-white rounded-2xl p-6 shadow-lg soft-shadow relative z-10 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div class="text-center space-y-3">
                        <div class="w-16 h-16 bg-lxk-mint/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-lxk-mint group-hover:scale-110 transition-all duration-300">
                            <span class="text-lxk-mint text-2xl group-hover:text-white transition-colors duration-300">🇸🇬</span>
                        </div>
                        <h5 class="font-bold text-lxk-warm-gray group-hover:text-lxk-mint transition-colors duration-300">Singapore Spirit</h5>
                        <p class="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Authentically local, globally minded, with deep roots in Singapore's creative culture.</p>
                    </div>
                    <div class="absolute inset-0 bg-lxk-mint/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            </div>
        </div>

        <!-- Call to Action -->
        <div class="animate-on-scroll hero-fade-in-delay-6 text-center">
            <div class="bg-white rounded-3xl p-8 shadow-xl soft-shadow transform hover:scale-105 transition-transform duration-300">
                <h4 class="text-2xl font-bold text-lxk-warm-gray mb-4">Ready to Create Something Amazing Together?</h4>
                <p class="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                    Whether you're just starting out or ready to take your digital presence to the next level, 
                    we'd love to be your creative kakis on this journey.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="#/contact" class="btn-primary transform hover:scale-105 transition-transform duration-200">
                        Let's Start the Conversation
                    </a>
                    <span class="text-lxk-coral font-medium">or</span>
                    <a href="#services" class="text-lxk-sage hover:text-lxk-peach transition-colors duration-200 font-medium underline decoration-2 underline-offset-4">
                        See What We Do Best
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
