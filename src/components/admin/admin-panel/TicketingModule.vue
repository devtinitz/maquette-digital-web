<script setup>
import { ref, onMounted } from 'vue'
import { 
  Plus, 
  Search, 
  Filter, 
  Printer, 
  Download, 
  MoreHorizontal,
  Mail,
  UserCheck
} from 'lucide-vue-next'

const badges = ref([])
const showModal = ref(false)
const isEditing = ref(false)
const currentId = ref(null)

const newBadge = ref({ name: '', company: '', type: 'Visiteur', status: 'En attente' })

const loadData = () => {
  const saved = localStorage.getItem('tinitz_badges')
  badges.value = saved ? JSON.parse(saved) : [
    { id: 'BD-001', name: 'Ahmed Cissé', company: 'Tinitz SA', type: 'Exposant', status: 'Imprimé' },
    { id: 'BD-002', name: 'Awa Koné', company: 'K-Tech', type: 'VIP', status: 'En attente' },
  ]
}

const saveData = () => {
  localStorage.setItem('tinitz_badges', JSON.stringify(badges.value))
}

const handleSave = () => {
  if (isEditing.value) {
    const idx = badges.value.findIndex(b => b.id === currentId.value)
    badges.value[idx] = { ...newBadge.value, id: currentId.value }
  } else {
    badges.value.push({ ...newBadge.value, id: 'BD-' + Date.now().toString().slice(-3) })
  }
  saveData()
  showModal.value = false
}

const deleteBadge = (id) => {
  badges.value = badges.value.filter(b => b.id !== id)
  saveData()
}

onMounted(loadData)

const badgeTypes = ['Tout', 'VIP', 'Exposant', 'Presse', 'Staff', 'Visiteur']
</script>

<template>
  <div class="space-y-8 font-outfit">
    <!-- Header -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div>
        <h3 class="text-2xl font-black text-tinitz-navy uppercase tracking-tighter">Badges & Tickets</h3>
        <p class="text-slate-400 text-sm font-medium mt-1">Gestion de l'accès et impression thermique live.</p>
      </div>
      <div class="flex gap-4 w-full md:w-auto">
        <button class="flex-1 md:flex-none px-6 py-3 bg-white border border-slate-100 rounded-2xl font-black text-[10px] uppercase tracking-widest text-tinitz-navy hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
          <Download :size="16" /> Export CSV
        </button>
        <button class="flex-1 md:flex-none px-6 py-3 bg-tinitz-red text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-tinitz-navy shadow-xl shadow-tinitz-red/20 transition-all flex items-center justify-center gap-2">
          <Plus :size="16" /> Nouveau Badge
        </button>
      </div>
    </div>

    <!-- Filters & Search -->
    <div class="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 items-center">
      <div class="relative flex-grow w-full">
        <Search class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" :size="18" />
        <input 
          type="text" 
          placeholder="Rechercher un participant ou une entreprise..." 
          class="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-50 rounded-xl focus:outline-none focus:border-tinitz-red font-bold text-sm"
        />
      </div>
      <div class="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
        <button v-for="type in badgeTypes" :key="type" 
                :class="[
                  'px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap',
                  type === 'Tout' ? 'bg-tinitz-navy text-white' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                ]">
          {{ type }}
        </button>
      </div>
    </div>

    <!-- Main List / Table -->
    <div class="grid lg:grid-cols-3 gap-10">
      <div class="lg:col-span-2 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
        <table class="w-full text-left">
          <thead class="bg-slate-50/50 border-b border-slate-50">
            <tr>
              <th class="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Participant</th>
              <th class="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Type</th>
              <th class="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Statut</th>
              <th class="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-50">
            <tr v-for="badge in badges" :key="badge.id" class="hover:bg-slate-50/50 transition-colors group">
              <td class="px-8 py-6">
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-tinitz-navy text-[10px]">
                    {{ badge.name.split(' ').map(n => n[0]).join('') }}
                  </div>
                  <div>
                    <div class="text-sm font-black text-tinitz-navy group-hover:text-tinitz-red transition-colors">{{ badge.name }}</div>
                    <div class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{{ badge.company }}</div>
                  </div>
                </div>
              </td>
              <td class="px-8 py-6">
                <span :class="[
                  'px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest',
                  badge.type === 'VIP' ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-500'
                ]">
                  {{ badge.type }}
                </span>
              </td>
              <td class="px-8 py-6">
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full" :class="badge.status === 'Imprimé' ? 'bg-emerald-500' : 'bg-amber-500'"></div>
                  <span class="text-[10px] font-black uppercase tracking-widest" :class="badge.status === 'Imprimé' ? 'text-emerald-500' : 'text-amber-500'">{{ badge.status }}</span>
                </div>
              </td>
              <td class="px-8 py-6 text-right">
                <div class="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button class="w-9 h-9 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-tinitz-navy hover:shadow-lg transition-all" title="Imprimer">
                    <Printer :size="16" />
                  </button>
                  <button class="w-9 h-9 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-tinitz-navy hover:shadow-lg transition-all" title="Email">
                    <Mail :size="16" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Preview Panel (Sticky) -->
      <div class="space-y-6 lg:sticky lg:top-24">
        <div class="bg-tinitz-navy rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-tinitz-red/20 rounded-full blur-3xl"></div>
          <h4 class="text-xs font-black uppercase tracking-[0.2em] mb-10 text-white/50">Prévisualisation Badge</h4>
          
          <!-- Badge Visual Mockup -->
          <div class="bg-white rounded-2xl p-6 text-tinitz-navy aspect-[3/4] flex flex-col items-center justify-between shadow-2xl relative">
            <div class="w-full h-2 bg-tinitz-red absolute top-0 left-0 rounded-t-2xl"></div>
            <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mt-6">
              <Users :size="32" class="text-slate-300" />
            </div>
            <div class="text-center">
              <div class="text-lg font-black uppercase tracking-tighter">Ahmed Cissé</div>
              <div class="text-[9px] font-black text-slate-300 uppercase tracking-widest">Tinitz SA</div>
            </div>
            <div class="w-24 h-24 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center">
              <div class="grid grid-cols-4 gap-1 p-2">
                <div v-for="i in 16" :key="i" class="w-2 h-2 bg-tinitz-navy/20"></div>
              </div>
            </div>
            <div class="w-full flex justify-between items-center px-4">
               <div class="text-[10px] font-black text-tinitz-red uppercase tracking-widest">EXPOSANT</div>
               <div class="text-[8px] font-bold text-slate-300">#BD-001</div>
            </div>
          </div>

          <button class="w-full mt-10 py-4 bg-tinitz-red text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-tinitz-navy transition-all flex items-center justify-center gap-3">
            <Printer :size="18" /> Lancer l'impression
          </button>
        </div>

        <div class="bg-white border border-slate-100 rounded-[2.5rem] p-8 flex items-center gap-6 shadow-sm">
           <div class="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500">
              <UserCheck :size="24" />
           </div>
           <div>
              <div class="text-lg font-black text-tinitz-navy">85%</div>
              <div class="text-[10px] font-black text-slate-300 uppercase tracking-widest">Check-in terminés</div>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>
