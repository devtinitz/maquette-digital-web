<script setup>
import { 
  Users, 
  Ticket, 
  Smartphone, 
  Zap,
  TrendingUp,
  Activity,
  ArrowUpRight,
  Clock
} from 'lucide-vue-next'

const stats = [
  { label: 'Participants Enregistrés', value: '1,240', sub: '+12% ce jour', icon: Users, color: 'text-tinitz-navy' },
  { label: 'Badges Imprimés', value: '856', sub: '69% du total', icon: Ticket, color: 'text-tinitz-red' },
  { label: 'Bornes Actives', value: '24/26', sub: '2 en maintenance', icon: Smartphone, color: 'text-emerald-500' },
  { label: 'Votes Enregistrés', value: '3,412', sub: 'Moy. 2.7/pers', icon: Zap, color: 'text-blue-500' },
]

const recentActivity = [
  { user: 'Jean Kouassi', action: 'Inscrit via Formulaire', time: 'Il y a 2 min', status: 'Success' },
  { user: 'Bne #04', action: 'Perte de connexion', time: 'Il y a 5 min', status: 'Warning' },
  { user: 'Marie Sarah', action: 'Badge imprimé (VIP)', time: 'Il y a 12 min', status: 'Success' },
]
</script>

<template>
  <div class="space-y-10 font-outfit">
    <!-- Top Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="stat in stats" :key="stat.label" class="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
        <div class="flex justify-between items-start mb-6">
          <div :class="['w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-50 group-hover:scale-110 transition-transform duration-500', stat.color]">
            <component :is="stat.icon" :size="24" />
          </div>
          <Activity :size="16" class="text-slate-200" />
        </div>
        <div class="text-3xl font-black text-tinitz-navy mb-1 tracking-tighter">{{ stat.value }}</div>
        <div class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">{{ stat.label }}</div>
        <div class="flex items-center gap-1.5 text-[10px] font-black text-emerald-500 uppercase tracking-widest">
          <TrendingUp :size="12" />
          {{ stat.sub }}
        </div>
      </div>
    </div>

    <div class="grid lg:grid-cols-3 gap-8">
      <!-- Live Traffic Graph Placeholder -->
      <div class="lg:col-span-2 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-10 relative overflow-hidden">
        <div class="flex justify-between items-center mb-10">
          <div>
            <h4 class="text-xl font-black text-tinitz-navy uppercase tracking-tight">Trafic Live</h4>
            <p class="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Nombre d'entrées / heure</p>
          </div>
          <div class="flex gap-2">
            <span class="px-3 py-1 bg-slate-100 rounded-lg text-[11px] font-black text-tinitz-navy">Aujourd'hui</span>
            <span class="px-3 py-1 text-[11px] font-black text-slate-300">Hier</span>
          </div>
        </div>
        
        <!-- Graph visual mockup -->
        <div class="h-64 w-full flex items-end gap-2 px-4 border-b border-l border-slate-50 relative">
          <div v-for="i in 24" :key="i" 
               class="flex-1 bg-tinitz-navy/5 rounded-t-lg group relative hover:bg-tinitz-red/20 transition-all cursor-crosshair"
               :style="{ height: Math.floor(Math.random() * 80) + 10 + '%' }">
            <div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-tinitz-navy text-white text-[9px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {{ i }}h: {{ Math.floor(Math.random() * 500) }}
            </div>
          </div>
        </div>
        <div class="flex justify-between mt-4 text-[9px] font-black text-slate-300 uppercase tracking-widest px-4">
          <span>08:00</span>
          <span>12:00</span>
          <span>16:00</span>
          <span>20:00</span>
        </div>
      </div>

      <!-- Live Feed -->
      <div class="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-10">
        <h4 class="text-lg font-black text-tinitz-navy uppercase tracking-tight mb-8">Dernières Actions</h4>
        <div class="space-y-6">
          <div v-for="item in recentActivity" :key="item.time" class="flex items-start gap-4">
            <div class="w-2 h-2 rounded-full mt-2" :class="item.status === 'Success' ? 'bg-emerald-500 shadow-lg shadow-emerald-500/50' : 'bg-amber-500 shadow-lg shadow-amber-500/50'"></div>
            <div>
              <div class="text-xs font-black text-tinitz-navy uppercase tracking-tight">{{ item.user }}</div>
              <div class="text-[11px] font-bold text-slate-400 mt-1">{{ item.action }}</div>
              <div class="text-[9px] font-black text-slate-300 uppercase tracking-widest mt-2 flex items-center gap-1">
                <Clock :size="10" />
                {{ item.time }}
              </div>
            </div>
          </div>
        </div>
        <button class="w-full mt-10 py-4 bg-slate-50 text-tinitz-navy rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-tinitz-navy hover:text-white transition-all">
          Voir tout le log
        </button>
      </div>
    </div>
  </div>
</template>
