<script setup>
import { ExternalLink, Star } from 'lucide-vue-next'
</script>

<template>
  <section class="py-32 bg-tinitz-navy text-white relative overflow-hidden">
    <!-- Subtle glow behind content with official red -->
    <div class="absolute -top-1/2 -right-1/4 w-[80% ] h-[150%] bg-tinitz-red/5 rounded-full blur-[150px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-20">
        <div class="max-w-2xl order-2 md:order-1">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-tinitz-red text-[10px] font-black uppercase tracking-[0.3em] mb-10">
            <Star :size="14" />
            L'excellence Digitale
          </div>
          
          <h2 class="text-4xl md:text-5xl lg:text-7xl font-black mb-10 leading-tight uppercase tracking-tighter">
            L'Expertise <br/> 
            <span class="text-white/20 italic lowercase font-light">à l'état pur</span>.
          </h2>
          
          <p class="text-base md:text-lg font-medium text-white/50 leading-relaxed mb-12">
            Plus qu'une plateforme, Tinitz est le fruit de 15 ans d'expérience dans l'ingénierie événementielle. Nous comprenons les enjeux, la pression du direct et l'importance de chaque seconde.
          </p>
          
          <div class="flex flex-wrap gap-8">
            <a 
              href="https://www.tinitz.ci" 
              target="_blank" 
              class="px-10 py-5 bg-white text-tinitz-navy rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-tinitz-red hover:text-white transition-all flex items-center gap-4 shadow-2xl"
            >
              Découvrir www.tinitz.ci
              <ExternalLink :size="18" />
            </a>
          </div>
        </div>

        <!-- Visual Elements -->
        <div class="relative group order-1 md:order-2">
          <div class="w-64 h-64 md:w-96 md:h-96 rounded-full border border-white/10 flex items-center justify-center p-8 bg-white/5 backdrop-blur-md relative">
             <div class="w-full h-full rounded-full bg-white flex items-center justify-center shadow-[0_50px_100px_rgba(0,0,0,0.5)] transition-transform group-hover:rotate-12 duration-1000 p-10 overflow-hidden">
               <!-- Integrating the Logo component inside the circle if for impact -->
               <img src="/src/assets/tinitz-logo-150x74.png" alt="Tinitz Hub" class="w-full h-auto" />
             </div>
             
             <!-- Badge Experience Center -->
             <div class="absolute -top-4 -right-12 px-6 py-3 bg-tinitz-red text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl">
               +7 ans d'innovation
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* High contrast transitions */
</style>
