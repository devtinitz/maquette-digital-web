<script setup>
import { useRouter } from 'vue-router'
import { 
  Calendar, 
  Users, 
  CreditCard, 
  TrendingUp, 
  ArrowUpRight,
  MoreHorizontal
} from 'lucide-vue-next'

const router = useRouter()

const stats = [
  { name: 'Événements Actifs', value: '12', trend: '+2 ce mois', icon: Calendar, color: 'text-tinitz-navy', bg: 'bg-navy-50' },
  { name: 'Total Participants', value: '1,420', trend: '+18%', icon: Users, color: 'text-tinitz-red', bg: 'bg-red-50' },
  { name: 'Revenu Billetterie', value: '4.2k €', trend: 'Stable', icon: CreditCard, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { name: 'Taux Engagement', value: '84%', trend: '+5%', icon: TrendingUp, color: 'text-blue-500', bg: 'bg-blue-50' },
]

const recentEvents = [
  { name: 'Gala annuel Digital 2024', date: '12 Oct 2024', status: 'En cours', participants: 450 },
  { name: 'Webinar Tech Tinitz', date: '05 Nov 2024', status: 'Planifié', participants: 120 },
  { name: 'Lancement Produit X', date: '28 Dec 2024', status: 'Brouillon', participants: 0 },
]
</script>

<template>
  <div class="space-y-10">
    <!-- Header Page -->
    <div class="flex justify-between items-end">
      <div>
        <h1 class="text-3xl font-black text-tinitz-navy uppercase tracking-tighter">Tableau de bord</h1>
        <p class="text-slate-400 font-medium">Bienvenue dans votre console de gestion événementielle.</p>
      </div>
      <button class="bg-tinitz-navy text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-tinitz-red transition-all flex items-center gap-2 shadow-lg">
        Nouvel Événement
        <ArrowUpRight :size="18" />
      </button>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="stat in stats" :key="stat.name" class="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
        <div class="flex justify-between items-start mb-6">
          <div :class="['w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500 bg-slate-50', stat.color]">
            <component :is="stat.icon" :size="24" />
          </div>
          <button class="text-slate-300 hover:text-tinitz-navy">
            <MoreHorizontal :size="20" />
          </button>
        </div>
        <div class="text-3xl font-black text-tinitz-navy mb-1">{{ stat.value }}</div>
        <div class="text-xs font-bold text-slate-400 uppercase tracking-widest">{{ stat.name }}</div>
        <div class="mt-4 pt-4 border-t border-slate-50 flex items-center gap-2">
          <span class="text-[10px] font-black text-emerald-500">{{ stat.trend }}</span>
          <span class="text-[10px] font-bold text-slate-300 uppercase tracking-widest">vs mois dernier</span>
        </div>
      </div>
    </div>

    <!-- Table & Activity Content -->
    <div class="grid lg:grid-cols-3 gap-8">
      <!-- Événements récents -->
      <div class="lg:col-span-2 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-10">
        <div class="flex justify-between items-center mb-10">
          <h4 class="text-xl font-black text-tinitz-navy uppercase tracking-tight">Activités Récentes</h4>
          <button class="text-xs font-bold text-tinitz-red hover:underline uppercase tracking-widest">Tout voir</button>
        </div>

        <div class="space-y-6">
          <div 
            v-for="event in recentEvents" 
            :key="event.name" 
            @click="router.push('/admin/event/123/dashboard')"
            class="flex items-center justify-between p-4 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-all group cursor-pointer"
          >
            <div class="flex items-center gap-6">
              <div class="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center font-black text-tinitz-navy text-sm">
                {{ event.name.charAt(0) }}
              </div>
              <div>
                <div class="text-sm font-black text-tinitz-navy underline decoration-transparent group-hover:decoration-tinitz-red underline-offset-4 transition-all">{{ event.name }}</div>
                <div class="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{{ event.date }}</div>
              </div>
            </div>
            <div class="flex items-center gap-8">
              <div class="text-right">
                <div class="text-xs font-black text-tinitz-navy">{{ event.participants }}</div>
                <div class="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Inscrits</div>
              </div>
              <div :class="[
                'px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest',
                event.status === 'En cours' ? 'bg-emerald-100 text-emerald-600' : 
                event.status === 'Planifié' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'
              ]">
                {{ event.status }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Action / Status -->
      <div class="bg-tinitz-navy rounded-[2.5rem] p-10 text-white relative overflow-hidden flex flex-col justify-between">
        <div class="absolute -top-10 -right-10 w-40 h-40 bg-tinitz-red/10 rounded-full blur-3xl"></div>
        
        <div class="relative z-10">
          <h4 class="text-xl font-black mb-4 uppercase tracking-tight">Résumé Forfait</h4>
          <div class="bg-white/10 rounded-2xl p-6 border border-white/10">
            <div class="text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Plan Actuel</div>
            <div class="text-2xl font-black mb-6">Professionnel</div>
            
            <div class="space-y-4">
              <div class="flex justify-between text-[10px] font-black uppercase tracking-wider">
                <span>Modules actifs</span>
                <span>5 / 7</span>
              </div>
              <div class="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div class="w-[70%] h-full bg-tinitz-red rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <button class="w-full py-4 bg-white text-tinitz-navy rounded-xl font-black text-xs uppercase tracking-widest hover:bg-tinitz-red hover:text-white transition-all shadow-xl mt-8">
          Upgrade Plan
        </button>
      </div>
    </div>
  </div>
</template>
