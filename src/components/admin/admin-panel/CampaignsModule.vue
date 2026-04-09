<script setup>
import { ref, onMounted } from 'vue'
import { 
  Plus, 
  Search, 
  Calendar, 
  Trash2, 
  Edit3, 
  Play, 
  Pause,
  CheckCircle2,
  X,
  Target
} from 'lucide-vue-next'

const campaigns = ref([])
const showModal = ref(false)
const isEditing = ref(false)
const currentId = ref(null)

const newCampaign = ref({
  name: '',
  startDate: '',
  endDate: '',
  status: 'Planifié',
  target: 'Tous les écrans'
})

const loadData = () => {
  const saved = localStorage.getItem('tinitz_campaigns')
  campaigns.value = saved ? JSON.parse(saved) : [
    { id: 1, name: 'Lancement Summit 2024', startDate: '2024-10-10', endDate: '2024-10-15', status: 'Actif', target: 'Hall A' },
    { id: 2, name: 'Promo Sponsor Gold', startDate: '2024-10-11', endDate: '2024-10-12', status: 'Planifié', target: 'Zone VIP' }
  ]
}

const saveData = () => {
  localStorage.setItem('tinitz_campaigns', JSON.stringify(campaigns.value))
}

const openCreate = () => {
  isEditing.value = false
  newCampaign.value = { name: '', startDate: '', endDate: '', status: 'Planifié', target: 'Tous les écrans' }
  showModal.value = true
}

const openEdit = (campaign) => {
  isEditing.value = true
  currentId.value = campaign.id
  newCampaign.value = { ...campaign }
  showModal.value = true
}

const handleSave = () => {
  if (isEditing.value) {
    const index = campaigns.value.findIndex(c => c.id === currentId.value)
    campaigns.value[index] = { ...newCampaign.value, id: currentId.value }
  } else {
    campaigns.value.push({ ...newCampaign.value, id: Date.now() })
  }
  saveData()
  showModal.value = false
}

const deleteCampaign = (id) => {
  campaigns.value = campaigns.value.filter(c => c.id !== id)
  saveData()
}

const toggleStatus = (campaign) => {
  campaign.status = campaign.status === 'Actif' ? 'Suspendu' : 'Actif'
  saveData()
}

onMounted(loadData)
</script>

<template>
  <div class="space-y-8 font-outfit">
    <div class="flex justify-between items-center">
      <div>
        <h3 class="text-2xl font-black text-tinitz-navy uppercase tracking-tighter">Campagnes de Diffusion</h3>
        <p class="text-slate-400 text-sm font-medium mt-1">Planifiez l'affichage de vos contenus sur vos équipements.</p>
      </div>
      <button @click="openCreate" class="bg-tinitz-red text-white px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-tinitz-navy transition-all flex items-center gap-2 shadow-xl shadow-tinitz-red/20">
        <Plus :size="16" /> Nouvelle Campagne
      </button>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
      <table class="w-full text-left">
        <thead class="bg-slate-50/50 border-b border-slate-100">
          <tr>
            <th class="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Nom de la Campagne</th>
            <th class="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Période</th>
            <th class="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Cible</th>
            <th class="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Statut</th>
            <th class="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-50">
          <tr v-for="c in campaigns" :key="c.id" class="hover:bg-slate-50/50 transition-colors group">
            <td class="px-8 py-6">
              <div class="text-sm font-black text-tinitz-navy underline decoration-transparent group-hover:decoration-tinitz-red underline-offset-4 transition-all">{{ c.name }}</div>
            </td>
            <td class="px-8 py-6">
              <div class="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                <Calendar :size="12" /> {{ c.startDate }} → {{ c.endDate }}
              </div>
            </td>
            <td class="px-8 py-6">
              <div class="flex items-center gap-2 text-[10px] font-black text-tinitz-navy uppercase tracking-widest">
                <Target :size="12" class="text-tinitz-red" /> {{ c.target }}
              </div>
            </td>
            <td class="px-8 py-6">
              <span :class="[
                'px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest',
                c.status === 'Actif' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
              ]">
                {{ c.status }}
              </span>
            </td>
            <td class="px-8 py-6 text-right">
              <div class="flex justify-end gap-2">
                <button @click="toggleStatus(c)" class="w-9 h-9 rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-tinitz-navy hover:text-white transition-all">
                  <component :is="c.status === 'Actif' ? Pause : Play" :size="16" />
                </button>
                <button @click="openEdit(c)" class="w-9 h-9 rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-tinitz-navy hover:text-white transition-all">
                  <Edit3 :size="16" />
                </button>
                <button @click="deleteCampaign(c.id)" class="w-9 h-9 rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-rose-500 hover:text-white transition-all">
                  <Trash2 :size="16" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal Form -->
    <Transition name="fade">
      <div v-if="showModal" class="fixed inset-0 z-[100] flex items-center justify-center p-6">
        <div class="absolute inset-0 bg-tinitz-navy/40 backdrop-blur-sm" @click="showModal = false" />
        <div class="bg-white w-full max-w-xl rounded-[3rem] p-12 relative z-10 shadow-2xl">
          <div class="flex justify-between items-center mb-10">
            <h4 class="text-2xl font-black text-tinitz-navy uppercase tracking-tighter">{{ isEditing ? 'Modifier' : 'Nouvelle' }} Campagne</h4>
            <button @click="showModal = false" class="text-slate-300 hover:text-tinitz-red"><X :size="24" /></button>
          </div>

          <form @submit.prevent="handleSave" class="space-y-6">
            <div class="space-y-2">
              <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Nom de la Campagne</label>
              <input v-model="newCampaign.name" required type="text" class="w-full bg-slate-50 border border-slate-50 rounded-2xl py-4 px-6 focus:outline-none focus:border-tinitz-red font-bold text-sm" />
            </div>

            <div class="grid grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Date début</label>
                <input v-model="newCampaign.startDate" required type="date" class="w-full bg-slate-50 border border-slate-50 rounded-2xl py-4 px-6 focus:outline-none focus:border-tinitz-red font-bold text-sm" />
              </div>
              <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Date fin</label>
                <input v-model="newCampaign.endDate" required type="date" class="w-full bg-slate-50 border border-slate-50 rounded-2xl py-4 px-6 focus:outline-none focus:border-tinitz-red font-bold text-sm" />
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Équipements cibles</label>
              <select v-model="newCampaign.target" class="w-full bg-slate-50 border border-slate-50 rounded-2xl py-4 px-6 focus:outline-none focus:border-tinitz-navy font-bold text-sm appearance-none">
                <option>Tous les écrans</option>
                <option>Hall A</option>
                <option>Zone VIP</option>
                <option>Sortie</option>
              </select>
            </div>

            <button type="submit" class="w-full mt-10 py-5 bg-tinitz-navy text-white rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-2xl hover:bg-tinitz-red transition-all flex items-center justify-center gap-4">
              Enregistrer la Campagne <CheckCircle2 :size="18" />
            </button>
          </form>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
