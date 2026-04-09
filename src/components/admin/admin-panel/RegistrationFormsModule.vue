<script setup>
import { ref, onMounted } from 'vue'
import { 
  Plus, 
  Trash2, 
  Edit3, 
  FileText, 
  X, 
  CheckCircle2, 
  Layout,
  Settings
} from 'lucide-vue-next'

const forms = ref([])
const showModal = ref(false)
const isEditing = ref(false)
const currentId = ref(null)

const newForm = ref({
  title: '',
  description: '',
  status: 'Actif',
  fields: ['Nom', 'Prénom', 'Email']
})

const loadData = () => {
  const saved = localStorage.getItem('tinitz_forms')
  forms.value = saved ? JSON.parse(saved) : [
    { id: 1, title: 'Enregistrement Summit 2024', description: 'Formulaire principal pour les participants.', status: 'Actif', fields: ['Nom', 'Prénom', 'Email', 'Société'] },
    { id: 2, title: 'Accès VIP Dinner', description: 'Réservé aux invités spéciaux.', status: 'Brouillon', fields: ['Nom', 'Email', 'Table'] }
  ]
}

const saveData = () => {
  localStorage.setItem('tinitz_forms', JSON.stringify(forms.value))
}

const openCreate = () => {
  isEditing.value = false
  newForm.value = { title: '', description: '', status: 'Actif', fields: ['Nom', 'Prénom', 'Email'] }
  showModal.value = true
}

const handleSave = () => {
  if (isEditing.value) {
    const index = forms.value.findIndex(f => f.id === currentId.value)
    forms.value[index] = { ...newForm.value, id: currentId.value }
  } else {
    forms.value.push({ ...newForm.value, id: Date.now() })
  }
  saveData()
  showModal.value = false
}

const deleteForm = (id) => {
  forms.value = forms.value.filter(f => f.id !== id)
  saveData()
}

onMounted(loadData)
</script>

<template>
  <div class="space-y-8 font-outfit">
    <div class="flex justify-between items-center">
      <div>
        <h3 class="text-2xl font-black text-tinitz-navy uppercase tracking-tighter">Formulaires de Collecte</h3>
        <p class="text-slate-400 text-sm font-medium mt-1">Concevez vos formulaires d'enregistrement et de satisfaction.</p>
      </div>
      <button @click="openCreate" class="bg-tinitz-red text-white px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-tinitz-navy transition-all flex items-center gap-2 shadow-xl shadow-tinitz-red/20">
        <Plus :size="16" /> Nouveau Formulaire
      </button>
    </div>

    <!-- Forms Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="f in forms" :key="f.id" class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden">
        <!-- Accent bar -->
        <div class="absolute top-0 left-0 w-full h-2 bg-tinitz-navy group-hover:bg-tinitz-red transition-colors"></div>
        
        <div class="flex justify-between items-start mb-6">
          <div class="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-tinitz-navy group-hover:scale-110 transition-all duration-500">
            <Layout :size="24" />
          </div>
          <div :class="['px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest', f.status === 'Actif' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500']">
            {{ f.status }}
          </div>
        </div>

        <h4 class="text-lg font-black text-tinitz-navy mb-2">{{ f.title }}</h4>
        <p class="text-slate-400 text-xs font-medium mb-6 line-clamp-2 h-8">{{ f.description }}</p>

        <!-- Stats Mock -->
        <div class="flex items-center gap-8 mb-8 pt-6 border-t border-slate-50">
           <div>
              <div class="text-[10px] font-black text-slate-300 uppercase tracking-widest">Champs</div>
              <div class="text-lg font-black text-tinitz-navy">{{ f.fields.length }}</div>
           </div>
           <div>
              <div class="text-[10px] font-black text-slate-300 uppercase tracking-widest">Réponses</div>
              <div class="text-lg font-black text-tinitz-red">142</div>
           </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-3">
          <button class="flex-grow py-3 bg-tinitz-navy text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-tinitz-red transition-all">Gérer les données</button>
          <button @click="deleteForm(f.id)" class="w-11 h-11 bg-slate-50 text-slate-300 rounded-xl flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all">
            <Trash2 :size="18" />
          </button>
        </div>
      </div>
    </div>

    <!-- Modal Form -->
    <Transition name="fade">
      <div v-if="showModal" class="fixed inset-0 z-[100] flex items-center justify-center p-6">
        <div class="absolute inset-0 bg-tinitz-navy/40 backdrop-blur-sm" @click="showModal = false" />
        <div class="bg-white w-full max-w-xl rounded-[3rem] p-12 relative z-10 shadow-2xl overflow-y-auto max-h-[90vh]">
          <div class="flex justify-between items-center mb-10">
            <h4 class="text-2xl font-black text-tinitz-navy uppercase tracking-tighter">Éditeur de Formulaire</h4>
            <button @click="showModal = false" class="text-slate-300 hover:text-tinitz-red"><X :size="24" /></button>
          </div>

          <form @submit.prevent="handleSave" class="space-y-8">
            <div class="space-y-2">
              <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Titre du Formulaire</label>
              <input v-model="newForm.title" required type="text" class="w-full bg-slate-50 border border-slate-50 rounded-2xl py-4 px-6 focus:outline-none focus:border-tinitz-red font-bold text-sm" />
            </div>

            <div class="space-y-2">
              <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Description / Consignes</label>
              <textarea v-model="newForm.description" rows="3" class="w-full bg-slate-50 border border-slate-50 rounded-2xl py-4 px-6 focus:outline-none focus:border-tinitz-red font-bold text-sm resize-none" />
            </div>

            <div class="space-y-4">
              <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Champs de collecte</label>
              <div v-for="(field, index) in newForm.fields" :key="index" class="flex items-center gap-3">
                 <div class="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-[10px] font-black text-tinitz-navy">#{{ index + 1 }}</div>
                 <input v-model="newForm.fields[index]" class="flex-grow bg-slate-50 border border-slate-50 rounded-xl py-3 px-5 font-bold text-sm" />
                 <button @click="newForm.fields.splice(index, 1)" class="text-slate-200 hover:text-rose-500"><X :size="18" /></button>
              </div>
              <button @click.prevent="newForm.fields.push('')" class="flex items-center gap-2 text-[10px] font-black text-tinitz-navy uppercase tracking-widest hover:text-tinitz-red">
                <Plus :size="14" /> Ajouter un champ
              </button>
            </div>

            <button type="submit" class="w-full mt-10 py-5 bg-tinitz-navy text-white rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-2xl hover:bg-tinitz-red transition-all flex items-center justify-center gap-4">
              Enregistrer le Formulaire <FileText :size="18" />
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
