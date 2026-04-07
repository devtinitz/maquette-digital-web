<script setup>
import { onMounted, ref, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Quote } from 'lucide-vue-next'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const testimonials = [
  {
    name: "Awa Diop",
    role: "Directrice Marketing, Sahel Group",
    content: "Tinitz a radicalement changé notre approche de l'engagement. +40% de conversion sur nos derniers sommets.",
    grid: "md:col-span-2",
    roi: "+40% ROI"
  },
  {
    name: "Koffi Mensah",
    role: "Architecte d'Événement",
    content: "La fluidité des bornes et la collecte de données en temps réel nous permettent de piloter l'événement comme jamais.",
    grid: "md:col-span-1",
    roi: "100% Data"
  },
  {
    name: "Moussa Traoré",
    role: "CEO, EventHorizon",
    content: "L'écosystème Tinitz est le seul capable de gérer la complexité de nos festivals internationaux.",
    grid: "md:col-span-1",
    roi: "Scale Ready"
  },
  {
    name: "Sarah Lawson",
    role: "Responsable Logistique",
    content: "Le gain de temps sur le check-in est phénoménal. Fini les files d'attente.",
    grid: "md:col-span-2",
    roi: "-80% Attente"
  }
]

const bentoRef = ref(null)

onMounted(async () => {
  await nextTick()
  const cards = bentoRef.value.querySelectorAll('.testimonial-card')
  
  if (cards.length > 0) {
    gsap.from(cards, {
      scrollTrigger: {
        trigger: bentoRef.value,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power4.out',
      clearProps: 'all'
    })
  }
})
</script>

<template>
  <section id="testimonials" class="py-32 bg-tinitz-slate-950 text-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <div class="mb-16">
        <h2 class="text-xs font-black uppercase tracking-[0.4em] text-tinitz-red mb-6">Social Proof</h2>
        <h3 class="text-4xl md:text-6xl font-black leading-tight">L'avis des Architectes <br/> <span class="text-white/40 italic font-light">d'Expérience</span>.</h3>
      </div>

      <div ref="bentoRef" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="item in testimonials" 
          :key="item.name"
          :class="[
            'testimonial-card relative glass-dark p-8 rounded-[2.5rem] border border-white/5 hover:border-tinitz-red/30 bg-white/5 transition-all duration-500 group',
            item.grid
          ]"
        >
          <div class="absolute top-8 right-8 text-tinitz-red/20 group-hover:text-tinitz-red/40 transition-colors">
            <Quote :size="48" />
          </div>
          
          <div class="flex gap-1 mb-6 text-tinitz-red">
            <Star v-for="i in 5" :key="i" :size="16" fill="currentColor" />
          </div>

          <p class="text-xl font-medium text-white/90 leading-relaxed mb-8 relative z-10">
            "{{ item.content }}"
          </p>

          <div class="flex items-center justify-between mt-auto">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-gradient-to-tr from-tinitz-emerald to-tinitz-blue/20 p-[1px]">
                  <div class="w-full h-full rounded-full bg-slate-900 flex items-center justify-center font-bold text-xs uppercase text-tinitz-emerald">
                    {{ item.name.charAt(0) }}
                  </div>
              </div>
              <div>
                <div class="font-black text-sm">{{ item.name }}</div>
                <div class="text-[10px] uppercase font-bold text-white/40 tracking-widest">{{ item.role }}</div>
              </div>
            </div>
            <div class="text-[10px] font-black text-tinitz-emerald bg-tinitz-emerald/10 px-3 py-1 rounded-full uppercase tracking-widest">
              {{ item.roi }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.glass-dark {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
}
</style>
