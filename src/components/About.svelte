<script>
  import teamImage from '../assets/team-collaboration.png';
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
                        <img 
                            src={teamImage} 
                            alt="Three friends collaborating at Light & Kaki Studio - the essence of creative friendship"
                            class="w-full rounded-2xl shadow-lg"
                            style="filter: contrast(1.1) saturate(1.1) brightness(1.05);"
                        />
                        <!-- Subtle paint splash overlay -->
                        <div class="absolute -top-2 -right-2 paint-splash-1 opacity-20 pointer-events-none" style="transform: scale(0.3);"></div>
                    </div>
                    <p class="mt-6 text-lxk-coral font-medium text-center italic">
                        This is us - creative kakis working together ✨
                    </p>
                </div>
            </div>
        </div>

        <!-- Our Values section -->
        <div class="animate-on-scroll hero-fade-in-delay-4 relative max-w-4xl mx-auto">
            <!-- Subtle paint splash behind card -->
            <div class="paint-splash-1 absolute -top-4 -right-4 z-0 opacity-0.2" style="transform: scale(0.8);"></div>
            
            <div class="bg-white rounded-3xl p-8 shadow-xl soft-shadow relative z-10 transform hover:scale-105 transition-transform duration-300">
                <h4 class="text-2xl font-bold text-lxk-warm-gray mb-6 text-center">Our Values</h4>
                <div class="grid md:grid-cols-4 gap-6">
                    <div class="flex flex-col items-center text-center space-y-2 transform hover:translateY-1 transition-transform duration-200">
                        <span class="text-lxk-sage text-3xl">🤝</span>
                        <h5 class="font-semibold text-lxk-warm-gray">Genuine Partnership</h5>
                        <p class="text-gray-600 text-sm">Your success is our success. We're in this together.</p>
                    </div>
                    <div class="flex flex-col items-center text-center space-y-2 transform hover:translateY-1 transition-transform duration-200">
                        <span class="text-lxk-peach text-3xl">🎨</span>
                        <h5 class="font-semibold text-lxk-warm-gray">Thoughtful Design</h5>
                        <p class="text-gray-600 text-sm">Every pixel serves a purpose, every interaction tells a story.</p>
                    </div>
                    <div class="flex flex-col items-center text-center space-y-2 transform hover:translateY-1 transition-transform duration-200">
                        <span class="text-lxk-coral text-3xl">🌱</span>
                        <h5 class="font-semibold text-lxk-warm-gray">Growth Mindset</h5>
                        <p class="text-gray-600 text-sm">We grow together, learn together, and celebrate together.</p>
                    </div>
                    <div class="flex flex-col items-center text-center space-y-2 transform hover:translateY-1 transition-transform duration-200">
                        <span class="text-lxk-sage text-3xl">🇸🇬</span>
                        <h5 class="font-semibold text-lxk-warm-gray">Singapore Spirit</h5>
                        <p class="text-gray-600 text-sm">Authentically local, globally minded, culturally rich.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>