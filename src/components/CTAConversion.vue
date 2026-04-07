<script setup>
import { Sparkles, ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section class="py-32 bg-slate-50 text-tinitz-navy overflow-hidden relative">
    <!-- Decor bg (Identical to Pricing) -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-tinitz-navy/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-6 text-center relative z-10">
      <div class="w-16 h-16 bg-white text-tinitz-red rounded-2xl flex items-center justify-center mx-auto mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
        <Sparkles :size="28" />
      </div>

      <h2 class="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-[0.95]">
        Prêt à transformer vos <br/> 
        <span class="italic text-slate-300 lowercase font-light">événements ?</span>
      </h2>
      
      <p class="text-base md:text-lg text-tinitz-navy/50 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
        Rejoignez les leaders du secteur et passez à la vitesse supérieure <br/> 
        avec la puissance technologique de Tinitz.
      </p>

      <div class="flex flex-wrap justify-center gap-6">
        <button class="px-10 py-5 bg-tinitz-navy text-white rounded-full font-black text-xs uppercase tracking-widest shadow-[0_20px_50px_rgba(1,68,110,0.3)] hover:bg-tinitz-red hover:shadow-tinitz-red/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-4">
          Demander une démo
          <ArrowRight :size="18" stroke-width="3" />
        </button>
        <button class="px-10 py-5 bg-white border border-slate-200 text-tinitz-navy rounded-full font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all shadow-sm">
          Parler à un expert
        </button>
      </div>
    </div>
  </section>
</template>
