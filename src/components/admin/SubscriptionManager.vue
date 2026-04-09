<script setup>
import { ref, onMounted } from 'vue'
import { Zap, Check, ShieldCheck, FileText } from 'lucide-vue-next'

const hasSubscription = ref(false)
const selectedPlan = ref(null)

const plans = [
  { name: 'Essentiel', price: '50 000', features: ['Jusqu’à 200 participants', 'Billetterie en ligne', 'Collecte basique'] },
  { name: 'Professionnel', price: '150 000', features: ['Participants Illimités', 'CRM Événementiel', 'Analytics Avancés'], highlight: true },
  { name: 'Entreprise', price: 'Sur Devis', features: ['Hardware Illimité', 'Accompagnement Dédié', 'Marque blanche'] },
]

const subscribe = (plan) => {
  selectedPlan.value = plan
  hasSubscription.value = true
  localStorage.setItem('tinitz_has_sub', 'true')
  localStorage.setItem('tinitz_current_plan', plan.name)
  
  // Générer une facture simulée
  const invoices = JSON.parse(localStorage.getItem('tinitz_invoices') || '[]')
  invoices.push({
    id: 'INV-' + Date.now().toString().slice(-6),
    date: new Date().toLocaleDateString(),
    amount: plan.price,
    status: 'Payé',
    plan: plan.name
  })
  localStorage.setItem('tinitz_invoices', JSON.stringify(invoices))
  
  // Recharger la page pour mettre à jour l'interface
  window.location.reload()
}

onMounted(() => {
  hasSubscription.value = localStorage.getItem('tinitz_has_sub') === 'true'
})
</script>

<template>
  <div class="space-y-12">
    <div v-if="!hasSubscription" class="text-center max-w-3xl mx-auto mb-16">
      <div class="w-16 h-16 bg-tinitz-red/10 text-tinitz-red rounded-2xl flex items-center justify-center mx-auto mb-8">
        <Zap :size="32" />
      </div>
      <h3 class="text-3xl md:text-5xl font-black text-tinitz-navy uppercase tracking-tighter mb-6">Activez votre <span class="italic text-slate-300 lowercase font-light">Puissance Digitale</span>.</h3>
      <p class="text-slate-400 font-medium">Choisissez le forfait qui correspond à vos ambitions événementielles pour débloquer tous les modules de gestion.</p>
    </div>

    <!-- Active Subscription Info -->
    <div v-if="hasSubscription" class="bg-tinitz-navy rounded-[3rem] p-12 text-white relative overflow-hidden">
       <div class="absolute -top-10 -right-10 w-64 h-64 bg-tinitz-red/10 rounded-full blur-3xl"></div>
       <div class="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
             <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-tinitz-red text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                <ShieldCheck :size="14" />
                Forfait Actif
             </div>
             <h4 class="text-4xl font-black uppercase tracking-tighter mb-2">Plan Professionnel</h4>
             <p class="text-white/50 font-medium">Votre accès est valide jusqu'au {{ new Date(Date.now() + 30*24*60*60*1000).toLocaleDateString() }}</p>
          </div>
          <div class="flex gap-4">
             <button class="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl font-black text-xs uppercase tracking-widest transition-all">Gérer l'abonnement</button>
             <button class="px-8 py-4 bg-white text-tinitz-navy rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-tinitz-red hover:text-white transition-all">Consulter les factures</button>
          </div>
       </div>
    </div>

    <!-- Pricing Grid if no subscription -->
    <div v-if="!hasSubscription" class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div v-for="plan in plans" :key="plan.name" class="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col transition-all hover:shadow-2xl hover:-translate-y-2">
        <h4 class="text-xl font-black text-tinitz-navy mb-4">{{ plan.name }}</h4>
        <div class="flex items-baseline gap-2 mb-8">
          <span class="text-4xl font-black text-tinitz-navy">{{ plan.price }}</span>
          <span v-if="plan.price !== 'Sur Devis'" class="text-xs font-bold text-slate-300">FCFA</span>
        </div>
        
        <ul class="space-y-4 mb-10 flex-grow">
          <li v-for="feat in plan.features" :key="feat" class="flex items-center gap-3 text-sm font-bold text-slate-500">
            <Check :size="16" class="text-emerald-500" />
            {{ feat }}
          </li>
        </ul>

        <button 
          @click="subscribe(plan)"
          :class="[
            'w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all',
            plan.highlight ? 'bg-tinitz-red text-white shadow-xl shadow-tinitz-red/20 hover:bg-tinitz-navy' : 'bg-slate-50 text-tinitz-navy hover:bg-tinitz-navy hover:text-white'
          ]"
        >
          {{ plan.price === 'Sur Devis' ? 'Contacter l\'équipe' : 'Souscrire maintenant' }}
        </button>
      </div>
    </div>
  </div>
</template>
