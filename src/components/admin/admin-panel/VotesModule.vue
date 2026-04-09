<script setup>
import { ref, onMounted } from 'vue'
import { 
  Zap, 
  BarChart, 
  Settings, 
  Plus, 
  X, 
  CheckCircle2, 
  Eye,
  MoreVertical,
  Play,
  Pause
} from 'lucide-vue-next'

const votes = ref([])
const showCreateModal = ref(false)
const multiChoice = ref(true)

const loadData = () => {
  const saved = localStorage.getItem('tinitz_votes')
  votes.value = saved ? JSON.parse(saved) : [
    { id: 'VT-001', question: 'Quelle est votre innovation préférée en 2024 ?', options: 4, type: 'Unique', status: 'Actif', responses: 1450 },
    { id: 'VT-002', question: "Notez la qualité de l'accueil de l'événement", options: 5, type: 'Rating', status: 'Suspendu', responses: 890 },
  ]
}

const saveData = () => {
  localStorage.setItem('tinitz_votes', JSON.stringify(votes.value))
}

const handleSave = (item) => {
  votes.value.push(item)
  saveData()
}

const deleteVote = (id) => {
  votes.value = votes.value.filter(v => v.id !== id)
  saveData()
}

onMounted(loadData)
</script>

<template>
  <div class="space-y-8 font-outfit">
    <!-- Header -->
    <div class="flex justify-between items-center">
      <div>
        <h3 class="text-2xl font-black text-tinitz-navy uppercase tracking-tighter">Gestion des Votes</h3>
        <p class="text-slate-400 text-sm font-medium mt-1">Créez des sondages temps réel pour engager vos participants.</p>
      </div>
      <button @click="showCreateModal = true" class="px-6 py-3 bg-tinitz-red text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-tinitz-navy shadow-xl shadow-tinitz-red/20 transition-all flex items-center gap-2">
        <Plus :size="16" /> Nouveau Vote
      </button>
    </div>

    <!-- Active Votes Stats -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-indigo-600 rounded-[2rem] p-8 text-white relative overflow-hidden">
        <div class="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div class="relative z-10">
          <div class="text-[10px] font-black uppercase tracking-widest text-indigo-200 mb-2">Total Participants</div>
          <div class="text-4xl font-black mb-1">2,340</div>
          <div class="text-[10px] font-bold text-indigo-300 uppercase tracking-widest">Inscrits au vote live</div>
        </div>
      </div>
      <div class="bg-white border border-slate-100 rounded-[2rem] p-8 flex items-center gap-6 shadow-sm">
        <div class="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500">
          <Zap :size="28" />
        </div>
        <div>
          <div class="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-1">Votes Actifs</div>
          <div class="text-3xl font-black text-tinitz-navy">02</div>
        </div>
      </div>
      <div class="bg-white border border-slate-100 rounded-[2rem] p-8 flex items-center gap-6 shadow-sm">
        <div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500">
          <BarChart :size="28" />
        </div>
        <div>
          <div class="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-1">Taux de réponse</div>
          <div class="text-3xl font-black text-tinitz-navy">74%</div>
        </div>
      </div>
    </div>

    <!-- Votes Table -->
    <div class="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
      <table class="w-full text-left">
        <thead class="bg-slate-50/50 border-b border-slate-50">
          <tr>
            <th class="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Sondage / Question</th>
            <th class="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Type</th>
            <th class="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Réponses</th>
            <th class="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Statut</th>
            <th class="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-50">
          <tr v-for="vote in votes" :key="vote.id" class="hover:bg-slate-50/50 transition-colors group">
            <td class="px-8 py-6">
              <div class="text-sm font-black text-tinitz-navy group-hover:text-tinitz-red transition-all">{{ vote.id }} - {{ vote.question }}</div>
              <div class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{{ vote.options }} options de réponse</div>
            </td>
            <td class="px-8 py-6">
              <span class="text-[10px] font-black text-slate-400 border border-slate-200 px-3 py-1 rounded-lg uppercase tracking-widest">{{ vote.type }}</span>
            </td>
            <td class="px-8 py-6">
              <div class="text-sm font-black text-tinitz-navy">{{ vote.responses }}</div>
            </td>
            <td class="px-8 py-6">
              <span :class="[
                'px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest',
                vote.status === 'Actif' ? 'bg-emerald-100 text-emerald-600' : 
                vote.status === 'Suspendu' ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-500'
              ]">
                {{ vote.status }}
              </span>
            </td>
            <td class="px-8 py-6 text-right">
              <div class="flex justify-end gap-2">
                <button class="w-9 h-9 rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-tinitz-navy hover:text-white transition-all transform hover:rotate-12">
                   <component :is="vote.status === 'Actif' ? Pause : Play" :size="16" />
                </button>
                <button class="w-9 h-9 rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-tinitz-red hover:text-white transition-all">
                  <BarChart :size="16" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Create Vote Modal (Basic Mockup) -->
    <Transition name="fade">
      <div v-if="showCreateModal" class="fixed inset-0 z-[100] flex items-center justify-center p-6">
        <div class="absolute inset-0 bg-tinitz-navy/40 backdrop-blur-sm" @click="showCreateModal = false" />
        <div class="bg-white w-full max-w-2xl rounded-[3rem] p-12 relative z-10 shadow-2xl overflow-y-auto max-h-[90vh]">
          <div class="flex justify-between items-center mb-10">
            <h4 class="text-2xl font-black text-tinitz-navy uppercase tracking-tighter">Nouveau Sondage</h4>
            <button @click="showCreateModal = false" class="text-slate-300 hover:text-tinitz-red"><X :size="24" /></button>
          </div>

          <div class="space-y-8">
            <div class="space-y-2">
              <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Question du vote</label>
              <textarea placeholder="Quelle est la question ?" class="w-full bg-slate-50 border border-slate-50 rounded-2xl py-4 px-6 focus:outline-none focus:border-tinitz-red font-bold text-sm resize-none" rows="2" />
            </div>

            <div class="space-y-4">
              <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Options de réponse</label>
              <div class="space-y-3">
                <div v-for="i in 3" :key="i" class="flex items-center gap-3">
                  <input type="text" :placeholder="'Option ' + i" class="flex-grow bg-slate-50 border border-slate-50 rounded-xl py-3 px-5 font-bold text-sm focus:outline-none focus:border-tinitz-navy" />
                  <button class="w-10 h-10 flex items-center justify-center text-slate-200 hover:text-rose-500"><X :size="18" /></button>
                </div>
                <button class="flex items-center gap-2 text-[10px] font-black text-tinitz-navy uppercase tracking-widest mt-2 hover:text-tinitz-red">
                  <Plus :size="14" /> Ajouter une option
                </button>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-8 pt-4">
              <div class="space-y-3">
                <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Type de choix</label>
                <div class="flex bg-slate-50 rounded-xl p-1 p-x-2">
                  <button @click="multiChoice = false" :class="['flex-1 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all', !multiChoice ? 'bg-white text-tinitz-navy shadow-sm' : 'text-slate-400']">Unique</button>
                  <button @click="multiChoice = true" :class="['flex-1 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all', multiChoice ? 'bg-white text-tinitz-navy shadow-sm' : 'text-slate-400']">Multiple</button>
                </div>
              </div>
              <div class="space-y-3">
                <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Affichage Résultats</label>
                <div class="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-2">
                   <div class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                   <span class="text-[10px] font-black uppercase tracking-widest text-slate-500">Temps réel activé</span>
                </div>
              </div>
            </div>

            <button class="w-full mt-10 py-5 bg-tinitz-navy text-white rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-2xl hover:bg-tinitz-red transition-all flex items-center justify-center gap-4">
               Lancer le Sondage <CheckCircle2 :size="18" />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
