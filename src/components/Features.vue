<script setup>
import { 
  Calendar, 
  Ticket, 
  Monitor, 
  Presentation, 
  Megaphone, 
  Database, 
  Vote,
  ArrowUpRight
} from 'lucide-vue-next'

const features = [
  {
    title: 'Événements Hybrides',
    desc: 'Gérez vos événements physiques et digitaux sur une interface unique.',
    icon: Calendar,
    color: 'bg-blue-500',
    size: 'md:col-span-2'
  },
  {
    title: 'Billetterie Intelligence',
    desc: 'Flux de vente ultra-rapides et sécurisés.',
    icon: Ticket,
    color: 'bg-orange-500',
    size: 'md:col-span-1'
  },
  {
    title: 'Bornes Interactives',
    desc: 'Check-in autonome et impression de badges instantanée.',
    icon: Monitor,
    color: 'bg-tinitz-navy',
    size: 'md:col-span-1'
  },
  {
    title: 'Slides Dynamiques',
    desc: 'Diffusions de contenus interactifs en temps réel.',
    icon: Presentation,
    color: 'bg-slate-800',
    size: 'md:col-span-1'
  },
  {
    title: 'Campagnes Marketing',
    desc: 'Automatisez vos communications multicanales.',
    icon: Megaphone,
    color: 'bg-purple-500',
    size: 'md:col-span-1'
  },
  {
    title: 'Collecte de Données',
    desc: 'Insights stratégiques sur le comportement de vos participants.',
    icon: Database,
    color: 'bg-indigo-500',
    size: 'md:col-span-2'
  },
  {
    title: 'Votes & Interactions',
    desc: 'Engagez votre audience avec des sondages en direct.',
    icon: Vote,
    color: 'bg-rose-500',
    size: 'md:col-span-1'
  }
]
</script>

<template>
  <section id="features" class="py-32 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="mb-20 text-center max-w-3xl mx-auto">
        <h2 class="text-xs font-black uppercase tracking-[0.3em] text-tinitz-red mb-4">Notre Expertise</h2>
        <h3 class="text-4xl md:text-6xl font-black text-tinitz-navy leading-tight">
          Un écosystème conçu pour <span class="italic font-light">l'excellence</span>.
        </h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          :class="[
            'bento-card group relative overflow-hidden',
            feature.size
          ]"
        >
          <div class="relative z-10 h-full flex flex-col">
            <div :class="[
              'w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3 duration-500',
              feature.color
            ]">
              <component :is="feature.icon" :size="28" />
            </div>
            
            <h4 class="text-2xl font-black text-tinitz-navy mb-3 group-hover:text-tinitz-red transition-colors">
              {{ feature.title }}
            </h4>
            
            <p class="text-tinitz-navy/50 font-medium leading-relaxed mb-8">
              {{ feature.desc }}
            </p>

            <div class="mt-auto">
              <button class="flex items-center gap-2 text-sm font-bold text-tinitz-navy/40 group-hover:text-tinitz-navy transition-all">
                En savoir plus
                <ArrowUpRight :size="16" class="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>

          <!-- Subtle Background Accent -->
          <div class="absolute -bottom-8 -right-8 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
             <component :is="feature.icon" :size="128" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
