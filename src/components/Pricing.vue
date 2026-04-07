<script setup>
import { ref, computed } from 'vue'
import { Check, Info } from 'lucide-vue-next'

const isAnnual = ref(false)

const plans = computed(() => [
  {
    name: 'Essentiel',
    price: isAnnual.value ? '480 000' : '50 000',
    desc: 'Idéal pour les petits événements et séminaires.',
    features: ['Jusqu’à 200 participants', 'Billetterie en ligne', 'Collecte de données basique', 'Support Email'],
    button: 'Essayer gratuitement',
    highlight: false
  },
  {
    name: 'Professionnel',
    price: isAnnual.value ? '1 440 000' : '150 000',
    desc: 'Conçu pour les organisateurs d’événements réguliers.',
    features: ['Participants Illimités', 'Bornes Interactives (1 unité)', 'CRM Événementiel', 'Support 24/7 Premium', 'Analytics Avancés'],
    button: 'Choisir le plan Pro',
    highlight: true
  },
  {
    name: 'Entreprise',
    price: 'Sur Devis',
    desc: 'Solutions sur-mesure pour les grandes institutions.',
    features: ['Accompagnement Dédié', 'Hardware Illimité', 'Intégration API personnalisée', 'Sécurité Renforcée', 'Marque blanche totale'],
    button: 'Contacter la direction',
    highlight: false
  }
])
</script>

<template>
  <section id="pricing" class="py-32 bg-slate-50 relative overflow-hidden">
    <!-- Decor bg -->
    <div class=""></div>

    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-20">
        <h2 class="text-xs font-black uppercase tracking-[0.4em] text-tinitz-navy mb-6">Investissement & Valeur</h2>
        <h3 class="text-4xl md:text-6xl font-black text-tinitz-navy mb-12">Des forfaits adaptés à <span class="italic font-light">chaque ambition</span>.</h3>
        
        <!-- Toggle -->
        <div class="flex items-center justify-center gap-6">
          <span :class="['text-sm font-bold transition-colors', !isAnnual ? 'text-tinitz-navy' : 'text-tinitz-navy/40']">Mensuel</span>
          <button 
            @click="isAnnual = !isAnnual"
            class="w-16 h-8 bg-slate-200 rounded-full relative transition-colors"
          >
            <div 
              :class="[
                'absolute top-1 w-6 h-6 rounded-full transition-all duration-300',
                isAnnual ? 'right-1 bg-tinitz-navy' : 'left-1 bg-white shadow-sm'
              ]"
            ></div>
          </button>
          <span :class="['text-sm font-bold transition-colors flex items-center gap-2', isAnnual ? 'text-tinitz-navy' : 'text-tinitz-navy/40']">
            Annuel 
            <span class="text-[10px] bg-tinitz-emerald/20 text-tinitz-emerald px-2 py-1 rounded-full">-20%</span>
          </span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        <div 
          v-for="plan in plans" 
          :key="plan.name"
          :class="[
            'relative p-10 rounded-[2.5rem] transition-all duration-500 flex flex-col',
            plan.highlight 
              ? 'bg-orange-700 text-white shadow-2xl scale-105 z-10' 
              : 'bg-white text-tinitz-navy border border-slate-200 hover:shadow-xl hover:-translate-y-2'
          ]"
        >
          <div v-if="plan.highlight" class="absolute -top-5 left-1/2 -translate-x-1/2 bg-tinitz-navy text-tinitz-navy text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg">
            Recommandé
          </div>

          <div class="mb-10 text-center md:text-left">
            <h4 class="text-xl font-black mb-4">{{ plan.name }}</h4>
            <div class="flex items-baseline gap-2 mb-4 justify-center md:justify-start">
              <span class="text-4xl md:text-5xl font-black">
                {{ plan.price }}
              </span>
              <span v-if="plan.name !== 'Entreprise'" class="text-sm font-bold opacity-60">FCFA / {{ isAnnual ? 'an' : 'mois' }}</span>
            </div>
            <p class="text-sm font-medium opacity-60">{{ plan.desc }}</p>
          </div>

          <ul class="space-y-4 mb-12 flex-grow">
            <li v-for="feature in plan.features" :key="feature" class="flex items-center gap-3 text-sm font-bold">
              <div :class="['w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0', plan.highlight ? 'bg-white/20' : 'bg-tinitz-navy/10 text-tinitz-navy']">
                <Check :size="12" />
              </div>
              {{ feature }}
            </li>
          </ul>

          <button 
            :class="[
              'w-full py-4 rounded-full font-black text-sm transition-all active:scale-95',
              plan.highlight 
                ? 'bg-tinitz-navy text-tinitz-navy hover:bg-white shadow-xl' 
                : 'bg-tinitz-navy text-white hover:bg-tinitz-navy'
            ]"
          >
            {{ plan.button }}
          </button>
        </div>
      </div>

      <!-- FAQ Summary/Info -->
      <div class="mt-20 flex justify-center">
        <div class="glass px-8 py-4 rounded-2xl flex items-center gap-4 text-tinitz-navy/60 font-bold text-sm">
          <Info :size="20" />
          Tous nos prix sont Hors Taxes (HT). Des facilités de paiement sont disponibles pour les ONG et associations.
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 0, 0, 0.05);
}
</style>
