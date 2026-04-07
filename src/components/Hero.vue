<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ArrowRight } from 'lucide-vue-next'

const heroTitle = ref(null)
const heroSub = ref(null)
const heroCta = ref(null)
const heroImage = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.from(heroTitle.value, { x: -60, opacity: 0, duration: 1.2, delay: 0.5 })
    .from(heroSub.value, { x: -40, opacity: 0, duration: 1 }, '-=0.8')
    .from(heroCta.value, { y: 20, opacity: 0, duration: 0.8 }, '-=0.6')
    .from(heroImage.value, { scale: 1.1, opacity: 0, duration: 2, ease: 'expo.out' }, '-=1')
})
</script>

<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-white pt-24">
    <!-- Background Content -->
    <div class="absolute inset-0 z-0">
      <img 
        src="/src/assets/hero-clean-bg.png" 
        alt="Background" 
        class="w-full h-full object-cover object-center opacity-60 transition-transform duration-[30s] scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
    </div>

    <!-- Main Content Grid -->
    <div class="max-w-7xl mx-auto px-6 relative z-10 w-full">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        
        <!-- Text Column -->
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tinitz-navy/5 border border-tinitz-navy/10 text-tinitz-navy text-[10px] font-black uppercase tracking-[0.2em] mb-10">
            Plateforme Événementielle 3.0
          </div>
          
          <h1 ref="heroTitle" class="text-4xl md:text-5xl lg:text-6xl font-black text-tinitz-navy leading-[1.15] tracking-tighter mb-10">
            L'architecture <br/>
            <span class="italic text-tinitz-red">fluide</span> de vos <br/>
            événements.
          </h1>
          
          <p ref="heroSub" class="text-base md:text-lg text-tinitz-navy/60 leading-relaxed mb-12 font-medium max-w-lg">
            Transformez chaque événement en une expérience mémorable. <br/>
            Une suite d'outils puissants pour les créateurs d'exception.
          </p>
          
          <div ref="heroCta" class="flex flex-wrap gap-8 items-center">
            <button class="bg-tinitz-navy text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl hover:bg-tinitz-red hover:shadow-tinitz-red/30 hover:scale-105 transition-all transform active:scale-95 flex items-center gap-4">
              Demander une démo
              <ArrowRight :size="18" stroke-width="3" />
            </button>
            <button class="text-xs font-black uppercase tracking-widest text-tinitz-navy hover:text-tinitz-red transition-all flex items-center gap-2 group">
              Nos Solutions
              <ArrowRight :size="16" class="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <!-- Bottom Micro-Stats -->
          <div class="mt-20 flex items-center gap-10">
             <div class="flex flex-col">
               <span class="text-2xl font-black text-tinitz-navy">50k+</span>
               <span class="text-[8px] font-bold uppercase tracking-[0.3em] text-tinitz-navy/40">Utilisateurs</span>
             </div>
             <div class="w-px h-10 bg-slate-200"></div>
             <div class="flex flex-col">
               <span class="text-2xl font-black text-tinitz-navy">100%</span>
               <span class="text-[8px] font-bold uppercase tracking-[0.3em] text-tinitz-navy/40">SLA</span>
             </div>
          </div>
        </div>

        <!-- Person Image Column (with blend trick) -->
        <div ref="heroImage" class="relative hidden lg:block">
           <div class="relative max-w-xl mx-auto transform hover:scale-105 transition-transform duration-1000">
             <!-- The Image with Multiply Blend Mode to "remove" white background -->
             <img 
               src="/src/assets/hero-person-new.png" 
               alt="Expert Tinitz" 
               class="w-full h-full mix-blend-multiply drop-shadow-2xl grayscale-[0.1] contrast-[1.1]"
             />
             
             <!-- Floating Badge -->
             <div class="absolute top-1/4 -right-3 bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 animate-bounce duration-[3s]">
                <div class="text-[10px] font-black text-tinitz-red uppercase tracking-widest mb-1">Live Support</div>
                <div class="text-sm font-bold text-tinitz-navy">Expert Dédié</div>
             </div>
           </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Ensure smooth blending on white/light sections */
</style>
