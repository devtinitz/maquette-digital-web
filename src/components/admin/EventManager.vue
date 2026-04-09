<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Plus, Calendar, Users, ArrowRight, Layers } from 'lucide-vue-next'

const router = useRouter()

const events = ref([])
const showModal = ref(false)
const newEvent = ref({ name: '', date: '', location: '' })

const loadEvents = () => {
  const saved = localStorage.getItem('tinitz_events')
  events.value = saved ? JSON.parse(saved) : []
}

const addEvent = () => {
  if (!newEvent.value.name) return
  
  const event = {
    id: Date.now(),
    ...newEvent.value,
    participants: 0,
    status: 'Brouillon'
  }
  
  events.value.push(event)
  localStorage.setItem('tinitz_events', JSON.stringify(events.value))
  showModal.value = false
  newEvent.value = { name: '', date: '', location: '' }
}

onMounted(loadEvents)
</script>

<template>
  <div class="space-y-8">
    <div class="flex justify-between items-center">
      <h3 class="text-xl font-black text-tinitz-navy uppercase tracking-tight">Gestion des Événements</h3>
      <button 
        @click="showModal = true"
        class="bg-tinitz-red text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-tinitz-red/20"
      >
        <Plus :size="18" />
        Nouvel Événement
      </button>
    </div>

    <!-- Empty State -->
    <div v-if="events.length === 0" class="bg-white border-2 border-dashed border-slate-100 rounded-[2.5rem] p-20 text-center">
      <div class="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
        <Layers :size="40" />
      </div>
      <h4 class="text-lg font-black text-tinitz-navy mb-2">Aucun événement créé</h4>
      <p class="text-slate-400 text-sm max-w-xs mx-auto mb-10">Commencez par créer votre premier événement pour accéder aux outils de gestion digitale.</p>
      <button @click="showModal = true" class="text-tinitz-red font-black text-xs uppercase tracking-widest hover:underline">Créer maintenant</button>
    </div>

    <!-- Event List -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="event in events" 
        :key="event.id" 
        @click="router.push(`/admin/event/${event.id}/dashboard`)"
        class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer"
      >
        <div class="flex justify-between items-start mb-8">
          <div class="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-tinitz-navy group-hover:bg-tinitz-navy group-hover:text-white transition-colors">
            <Calendar :size="24" />
          </div>
          <div class="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[9px] font-black uppercase tracking-widest">{{ event.status }}</div>
        </div>
        
        <h4 class="text-lg font-black text-tinitz-navy mb-2 group-hover:text-tinitz-red transition-colors">{{ event.name }}</h4>
        <div class="flex items-center gap-2 text-slate-400 text-xs font-bold mb-6">
          <Calendar :size="14" /> {{ event.date }}
        </div>

        <div class="flex justify-between items-center pt-6 border-t border-slate-50">
          <div class="flex items-center gap-2">
            <Users :size="16" class="text-slate-300" />
            <span class="text-xs font-black text-tinitz-navy">{{ event.participants }}</span>
          </div>
          <div class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-tinitz-navy group-hover:gap-4 transition-all">
            Gérer
            <ArrowRight :size="14" />
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Simplifiée -->
    <div v-if="showModal" class="fixed inset-0 z-[200] flex items-center justify-center p-6">
      <div class="absolute inset-0 bg-tinitz-navy/40 backdrop-blur-sm" @click="showModal = false"></div>
      <div class="bg-white w-full max-w-md rounded-[2.5rem] p-10 relative z-10 shadow-2xl">
        <h4 class="text-xl font-black text-tinitz-navy uppercase tracking-tight mb-8">Détails de l'événement</h4>
        <div class="space-y-6">
          <div class="space-y-2">
            <label class="text-[10px] font-black uppercase tracking-widest text-slate-400">Nom de l'événement</label>
            <input v-model="newEvent.name" type="text" class="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-6 focus:outline-none focus:border-tinitz-red font-bold" placeholder="ex: Summer Festival" />
          </div>
          <div class="space-y-2">
            <label class="text-[10px] font-black uppercase tracking-widest text-slate-400">Date prévue</label>
            <input v-model="newEvent.date" type="date" class="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-6 focus:outline-none focus:border-tinitz-red font-bold" />
          </div>
          <button @click="addEvent" class="w-full py-5 bg-tinitz-navy text-white rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-xl hover:bg-tinitz-red transition-all">
            Créer l'Événement
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
