<script setup>
import { ref, onMounted } from 'vue'
import { 
  Smartphone, 
  MapPin, 
  Wifi, 
  Battery, 
  MoreVertical, 
  Plus,
  ArrowRight,
  Monitor
} from 'lucide-vue-next'

const devices = ref([])
const showModal = ref(false)
const newDevice = ref({ id: '', name: '', site: 'Hall A', door: '', status: 'Online', signal: 100, battery: 100 })

const loadData = () => {
  const saved = localStorage.getItem('tinitz_devices')
  devices.value = saved ? JSON.parse(saved) : [
    { id: 'BORNE-A1', name: 'Entrée Principale', site: 'Hall A', door: 'Porte 01', signal: 95, battery: 100, status: 'Online', lastUpdate: '2 min ago' },
    { id: 'BORNE-A2', name: 'Accès VIP', site: 'Hall A', door: 'Salon VIP', signal: 82, battery: 85, status: 'Online', lastUpdate: '5 min ago' },
  ]
}

const saveData = () => {
  localStorage.setItem('tinitz_devices', JSON.stringify(devices.value))
}

const addDevice = () => {
  devices.value.push({ ...newDevice.value, lastUpdate: 'Just now' })
  saveData()
  showModal.value = false
}

const deleteDevice = (id) => {
  devices.value = devices.value.filter(d => d.id !== id)
  saveData()
}

onMounted(loadData)
</script>

<template>
  <div class="space-y-8 font-outfit">
    <!-- Header -->
    <div class="flex justify-between items-center">
      <div>
        <h3 class="text-2xl font-black text-tinitz-navy uppercase tracking-tighter">Mes Équipements</h3>
        <p class="text-slate-400 text-sm font-medium mt-1">Surveillance et configuration des bornes de signalétique.</p>
      </div>
      <button class="px-6 py-3 bg-tinitz-navy text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-tinitz-red shadow-xl transition-all flex items-center gap-2">
        <Plus :size="16" /> Ajouter une borne
      </button>
    </div>

    <!-- Layout Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Device Cards -->
      <div v-for="device in devices" :key="device.id" 
           class="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all">
        <!-- Card Header -->
        <div class="p-8 pb-0 flex justify-between items-start">
          <div :class="['w-14 h-14 rounded-2xl flex items-center justify-center transition-colors', 
                device.status === 'Online' ? 'bg-emerald-50 text-emerald-500' : 
                device.status === 'Warning' ? 'bg-amber-50 text-amber-500' : 'bg-slate-100 text-slate-300']">
            <Smartphone :size="28" />
          </div>
          <button class="text-slate-200 hover:text-tinitz-navy">
            <MoreVertical :size="20" />
          </button>
        </div>

        <!-- Card Body -->
        <div class="p-8">
          <div class="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">{{ device.id }}</div>
          <h4 class="text-lg font-black text-tinitz-navy mb-4 group-hover:text-tinitz-red transition-colors">{{ device.name }}</h4>
          
          <div class="space-y-3 mb-8">
            <div class="flex items-center gap-2 text-xs font-bold text-slate-400">
              <MapPin :size="14" /> {{ device.site }} • {{ device.door }}
            </div>
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <Wifi :size="12" :class="device.signal > 50 ? 'text-emerald-500' : 'text-amber-500'" /> {{ device.signal }}%
              </div>
              <div class="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <Battery :size="12" :class="device.battery > 20 ? 'text-emerald-500' : 'text-rose-500'" /> {{ device.battery }}%
              </div>
            </div>
          </div>

          <!-- Quick Action -->
          <button class="w-full py-3 bg-slate-50 text-tinitz-navy rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-tinitz-navy hover:text-white transition-all flex items-center justify-center gap-2 group-active:scale-95">
             Gérer le contenu <ArrowRight :size="14" />
          </button>
        </div>

        <!-- Status Bar -->
        <div :class="['h-1.5 w-full', 
              device.status === 'Online' ? 'bg-emerald-500' : 
              device.status === 'Warning' ? 'bg-amber-500' : 'bg-slate-300']"></div>
      </div>
    </div>

    <!-- Quick Info / Sites Area -->
    <div class="bg-white rounded-[2.5rem] border border-slate-100 p-10 flex flex-col md:flex-row items-center justify-between gap-10">
      <div class="flex gap-10">
        <div>
          <div class="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-2">Sites Détectés</div>
          <div class="text-3xl font-black text-tinitz-navy underline decoration-tinitz-red underline-offset-8">04</div>
        </div>
        <div>
           <div class="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-2">Contenus Diffusés</div>
           <div class="text-3xl font-black text-tinitz-navy underline decoration-tinitz-navy underline-offset-8">128</div>
        </div>
      </div>
      <div class="flex items-center gap-8">
         <div class="text-right hidden md:block">
            <div class="text-sm font-black text-tinitz-navy">Mise à jour automatique</div>
            <div class="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Toutes les 30 secondes</div>
         </div>
         <div class="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-tinitz-navy animate-pulse">
            <Monitor :size="24" />
         </div>
      </div>
    </div>
  </div>
</template>
