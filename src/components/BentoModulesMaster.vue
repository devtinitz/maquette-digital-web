<script setup>
import { ref } from 'vue'
import { 
  Ticket, 
  Users, 
  Monitor, 
  Presentation, 
  BarChart3, 
  MessageSquare, 
  Share2,
  Plus,
  Minus,
  ArrowRight
} from 'lucide-vue-next'

const activeModule = ref(0)

const modules = [
  {
    title: 'Billetterie Intelligence',
    shortDesc: 'Gestion omnicanale et API REST prioritaire.',
    details: 'Optimisez vos ventes avec un système d\'import CSV massif et une synchronisation cloud instantanée. Nos outils permettent un contrôle total des quotas et des tarifs dynamiques en temps réel.',
    icon: Ticket,
    accent: 'bg-tinitz-navy'
  },
  {
    title: 'CRM & Engagement',
    shortDesc: 'Segmentation dynamique des participants.',
    details: 'Transformez vos données en actions. Segmentez votre audience selon leur comportement en direct et automatisez vos campagnes de push marketing pour un ROI mesurable.',
    icon: Users,
    accent: 'bg-tinitz-red'
  },
  {
    title: 'Bornes de Check-in',
    shortDesc: 'Hardware-as-a-Service premium.',
    details: 'Éliminez les files d\'attente avec nos bornes tactiles 4K. Une expérience de self-check-in fluide, intégrée à vos systèmes de badges et de contrôle d\'accès physique.',
    icon: Monitor,
    accent: 'bg-slate-800'
  },
  {
    title: 'Digital Signage HD',
    shortDesc: 'Diffusion intelligente de contenus.',
    details: 'Prenez le contrôle de tous les écrans de votre événement. Diffusez vos slides, vidéos et alertes en direct depuis une interface centralisée et intuitive.',
    icon: Presentation,
    accent: 'bg-tinitz-navy'
  },
  {
    title: 'Régie & Sponsoring',
    shortDesc: 'Monétisation et Analytics Sponsor.',
    details: 'Valorisez vos partenaires avec des espaces publicitaires dynamiques. Offrez-leur des rapports de visibilité précis basés sur les interactions réelles des participants.',
    icon: BarChart3,
    accent: 'bg-tinitz-red'
  },
  {
    title: 'Interactivité Live',
    shortDesc: 'Votes, Q&A et sondages sécurisés.',
    details: 'Engagez votre audience avec des modules de gamification et d\'interactivité. Des résultats en temps réel projetés directement sur vos écrans de conférence.',
    icon: MessageSquare,
    accent: 'bg-slate-800'
  },
  {
    title: 'Networking Pro',
    shortDesc: 'Échange de leads via NFC & QR.',
    details: 'Facilitez les rencontres d\'affaires. Les participants peuvent échanger leurs coordonnées en un clic et retrouver leurs leads directement dans leur espace personnel.',
    icon: Share2,
    accent: 'bg-tinitz-navy'
  }
]

const toggleModule = (index) => {
  activeModule.value = activeModule.value === index ? null : index
}
</script>

<template>
  <section id="modules" class="py-40 bg-white text-tinitz-navy relative overflow-hidden">
    <!-- Glow Effects (Subtle version for Light theme) -->
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-tinitz-red/[0.03] rounded-full blur-[150px] pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-tinitz-navy/[0.03] rounded-full blur-[120px] pointer-events-none"></div>

    <div class="max-w-5xl mx-auto px-6 relative z-10">
      <!-- Header -->
      <div class="mb-24 text-center md:text-left">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-tinitz-red mb-8">L'Écosystème</h2>
        <h3 class="text-4xl md:text-6xl font-black leading-tight tracking-tighter uppercase text-tinitz-navy">
          Une Plateforme, <br/> 
          <span class="italic text-slate-200 lowercase font-light">Sept Dimensions</span>.
        </h3>
      </div>

      <!-- Module Explorer (Accordion Style - Light Version) -->
      <div class="space-y-4">
        <div 
          v-for="(mod, index) in modules" 
          :key="mod.title"
          class="group border-b border-slate-100 last:border-0"
        >
          <div 
            @click="toggleModule(index)"
            :class="[
              'flex items-center justify-between py-10 cursor-pointer transition-all duration-500 px-8 rounded-[2rem]',
              activeModule === index ? 'bg-slate-50 shadow-sm border border-slate-100' : 'hover:bg-slate-50/50'
            ]"
          >
            <!-- Module Title & Icon -->
            <div class="flex items-center gap-8">
              <div :class="['w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-xl transition-transform duration-500 border border-white/10', mod.accent, activeModule === index ? 'scale-110 shadow-tinitz-red/20' : '']">
                <component :is="mod.icon" :size="24" />
              </div>
              <div>
                <h4 class="text-xl md:text-2xl font-black uppercase tracking-tight text-tinitz-navy">{{ mod.title }}</h4>
                <p v-if="activeModule !== index" class="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{{ mod.shortDesc }}</p>
              </div>
            </div>

            <!-- Toggle Icon -->
            <div class="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 transition-all duration-500" :class="activeModule === index ? 'bg-tinitz-navy text-white rotate-180 border-tinitz-navy' : ''">
              <Plus v-if="activeModule !== index" :size="20" />
              <Minus v-else :size="20" />
            </div>
          </div>

          <!-- Dropdown Details -->
          <Transition
            enter-active-class="transition duration-500 ease-out"
            enter-from-class="opacity-0 -translate-y-4 max-h-0"
            enter-to-class="opacity-100 translate-y-0 max-h-[400px]"
            leave-active-class="transition duration-300 ease-in"
            leave-from-class="opacity-100 translate-y-0 max-h-[400px]"
            leave-to-class="opacity-0 -translate-y-4 max-h-0"
          >
            <div v-if="activeModule === index" class="px-8 md:px-28 pb-12 overflow-hidden bg-slate-50/50 rounded-b-[2rem]">
               <div class="grid md:grid-cols-3 gap-12 pt-8">
                 <div class="md:col-span-2">
                   <p class="text-lg text-slate-500 leading-relaxed font-medium">
                     {{ mod.details }}
                   </p>
                   <button class="mt-10 flex items-center gap-4 text-tinitz-red text-[11px] font-black uppercase tracking-[0.2em] group/btn">
                     Découvrir le module technique
                     <div class="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover/btn:bg-tinitz-red group-hover/btn:text-white group-hover/btn:border-tinitz-red transition-all shadow-xl text-tinitz-navy">
                       <ArrowRight :size="16" />
                     </div>
                   </button>
                 </div>
                 
                 <!-- Micro Feature List -->
                 <div class="space-y-4 border-l border-slate-100 pl-8 hidden md:block">
                    <div class="text-[9px] font-black uppercase tracking-widest text-slate-300 mb-6">Expertise Focus</div>
                    <div class="flex items-center gap-3 text-[10px] font-bold text-slate-600 uppercase tracking-widest bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                      <div class="w-1.5 h-1.5 rounded-full bg-tinitz-red animate-pulse"></div>
                      Sécurité Totale
                    </div>
                    <div class="flex items-center gap-3 text-[10px] font-bold text-slate-600 uppercase tracking-widest bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                      <div class="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                      Zéro Latence
                    </div>
                    <div class="flex items-center gap-3 text-[10px] font-bold text-slate-600 uppercase tracking-widest bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                      <div class="w-1.5 h-1.5 rounded-full bg-tinitz-red animate-pulse"></div>
                      SLA 99.9%
                    </div>
                 </div>
               </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>
