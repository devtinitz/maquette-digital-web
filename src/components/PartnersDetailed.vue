<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const partners = [
  { name: 'Sodiba', logo: 'SODIBA', case: 'Lancement Produit', color: 'border-tinitz-navy' },
  { name: 'Orange', logo: 'ORANGE', case: 'Digital Summit', color: 'border-tinitz-red' },
  { name: 'NSIA', logo: 'NSIA', case: 'Cérémonie Annuelle', color: 'border-tinitz-emerald' },
  { name: 'UNESCO', logo: 'UNESCO', case: 'Conférence Int.', color: 'border-tinitz-navy' },
  { name: 'CFAO', logo: 'CFAO', case: 'Roadshow Expo', color: 'border-tinitz-red' },
  { name: 'Total', logo: 'TOTAL', case: 'Séminaire Énergie', color: 'border-tinitz-emerald' }
]

const scrollRef = ref(null)

onMounted(() => {
  const content = scrollRef.value
  const totalWidth = content.scrollWidth / 2
  
  gsap.to(content, {
    x: -totalWidth,
    duration: 30,
    ease: 'none',
    repeat: -1
  })
})
</script>

<template>
  <section id="partners" class="py-24 bg-white border-y border-slate-100 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 mb-16 text-center">
       <h3 class="text-xs font-black uppercase tracking-[0.5em] text-slate-400 mb-4">Ils propulsent l'innovation avec Tinitz</h3>
       <h4 class="text-3xl font-black text-tinitz-navy">Une confiance <span class="text-tinitz-red italic">partagée</span>.</h4>
    </div>

    <!-- Infinite Horizontal Scroll -->
    <div class="relative flex overflow-hidden group">
      <div ref="scrollRef" class="flex items-center gap-8 whitespace-nowrap py-12">
        <div 
          v-for="(p, i) in [...partners, ...partners]" 
          :key="i"
          class="flex items-center gap-8"
        >
          <!-- Card style inspired by admin stat cards -->
          <div :class="[
            'flex items-center gap-6 px-10 py-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500 border-l-8',
            p.color
          ]">
            <div class="text-2xl font-black text-slate-300 group-hover:text-tinitz-navy transition-colors italic tracking-tighter">
              {{ p.logo }}
            </div>
            <div class="w-px h-8 bg-slate-100"></div>
            <div class="text-left">
              <div :class="['text-[10px] font-black uppercase tracking-widest mb-1', p.color.replace('border-', 'text-')]">Étude de cas</div>
              <div class="text-sm font-bold text-tinitz-navy">{{ p.case }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Overlays for smooth edges -->
      <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
    </div>
  </section>
</template>

<style scoped>
/* Clean light theme minimal styles */
</style>
