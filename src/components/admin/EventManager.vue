<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import {
  Plus, Calendar, Users, ArrowRight, Layers,
  MapPin, Image, AlignLeft, Hash, X,
  CheckCircle2, Upload, Pencil, Trash2
} from 'lucide-vue-next'
import { usePageTransition } from '../../composables/usePageTransition'

const router = useRouter()
const { navigate } = usePageTransition()

// ─── State ────────────────────────────────────────────────────────────────────
const events     = ref([])
const showModal  = ref(false)
const isSubmitting = ref(false)

const defaultEvent = () => ({
  code:          generateCode(),
  name:          '',
  dateStart:     '',
  dateEnd:       '',
  logo:          null,
  logoPreview:   null,
  useLogoAsEvent: false,
  background:    null,
  bgPreview:     null,
  location:      '',
  description:   '',
})

const newEvent = ref(defaultEvent())
const errors   = ref({})

// ─── Code génération ──────────────────────────────────────────────────────────
function generateCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let code = ''
  for (let i = 0; i < 7; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

// ─── File handling ────────────────────────────────────────────────────────────
function handleLogoUpload(e) {
  const file = e.target.files[0]
  if (!file) return
  newEvent.value.logo = file
  newEvent.value.logoPreview = URL.createObjectURL(file)
}

function handleBgUpload(e) {
  const file = e.target.files[0]
  if (!file) return
  newEvent.value.background = file
  newEvent.value.bgPreview = URL.createObjectURL(file)
}

function removeLogo() {
  newEvent.value.logo = null
  newEvent.value.logoPreview = null
}

function removeBg() {
  newEvent.value.background = null
  newEvent.value.bgPreview = null
}

// ─── Validation ───────────────────────────────────────────────────────────────
function validate() {
  errors.value = {}
  if (!newEvent.value.name.trim())    errors.value.name = 'Le nom est obligatoire.'
  if (!newEvent.value.dateStart)      errors.value.dateStart = 'La date de début est obligatoire.'
  if (!newEvent.value.dateEnd)        errors.value.dateEnd = 'La date de fin est obligatoire.'
  if (!newEvent.value.logo)           errors.value.logo = 'Le logo est obligatoire.'
  if (!newEvent.value.location.trim()) errors.value.location = 'Le lieu est obligatoire.'
  if (newEvent.value.dateStart && newEvent.value.dateEnd && newEvent.value.dateEnd < newEvent.value.dateStart) {
    errors.value.dateEnd = 'La date de fin doit être après la date de début.'
  }
  return Object.keys(errors.value).length === 0
}

// ─── CRUD ─────────────────────────────────────────────────────────────────────
const loadEvents = () => {
  const saved = localStorage.getItem('tinitz_events')
  events.value = saved ? JSON.parse(saved) : []
}

const addEvent = async () => {
  if (!validate()) return
  isSubmitting.value = true

  await new Promise(r => setTimeout(r, 600)) // simulate async

  const event = {
    id:            Date.now(),
    code:          newEvent.value.code,
    name:          newEvent.value.name,
    dateStart:     newEvent.value.dateStart,
    dateEnd:       newEvent.value.dateEnd,
    location:      newEvent.value.location,
    description:   newEvent.value.description,
    logoPreview:   newEvent.value.logoPreview,
    bgPreview:     newEvent.value.bgPreview,
    useLogoAsEvent: newEvent.value.useLogoAsEvent,
    participants:  0,
    status:        'Brouillon',
    createdAt:     new Date().toISOString()
  }

  events.value.push(event)
  localStorage.setItem('tinitz_events', JSON.stringify(events.value))
  isSubmitting.value = false
  closeModal()
}

const closeModal = () => {
  showModal.value = false
  newEvent.value  = defaultEvent()
  errors.value    = {}
}

const openModal = () => {
  newEvent.value = defaultEvent()
  showModal.value = true
}

// ─── Computed helpers ─────────────────────────────────────────────────────────
const statusColor = (s) => ({
  'Brouillon': 'bg-slate-100 text-slate-500',
  'Planifié':  'bg-blue-100 text-blue-600',
  'En cours':  'bg-emerald-100 text-emerald-600',
  'Terminé':   'bg-rose-100 text-rose-500',
}[s] || 'bg-slate-100 text-slate-500')

const formatDate = (d) => d
  ? new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })
  : '—'

// ─── Toggle Actif / Inactif ───────────────────────────────────────────────────
function toggleActive(event, e) {
  e.stopPropagation()
  event.active = !event.active
  persist()
}

// ─── Suppression avec confirm ─────────────────────────────────────────────────
const confirmDeleteId = ref(null)

function askDelete(id, e) {
  e.stopPropagation()
  confirmDeleteId.value = id
}

function confirmDelete() {
  events.value = events.value.filter(ev => ev.id !== confirmDeleteId.value)
  persist()
  confirmDeleteId.value = null
}

function cancelDelete() {
  confirmDeleteId.value = null
}

// ─── Édition ─────────────────────────────────────────────────────────────────
const showEditModal  = ref(false)
const editTarget     = ref(null)
const editErrors     = ref({})

function openEdit(event, e) {
  e.stopPropagation()
  editTarget.value = { ...event }   // shallow copy pour ne pas muter l'original
  editErrors.value = {}
  showEditModal.value = true
}

function closeEdit() {
  showEditModal.value = false
  editTarget.value = null
  editErrors.value = {}
}

function validateEdit() {
  editErrors.value = {}
  if (!editTarget.value.name?.trim())     editErrors.value.name     = 'Obligatoire'
  if (!editTarget.value.dateStart)        editErrors.value.dateStart = 'Obligatoire'
  if (!editTarget.value.dateEnd)          editErrors.value.dateEnd   = 'Obligatoire'
  if (!editTarget.value.location?.trim()) editErrors.value.location  = 'Obligatoire'
  return Object.keys(editErrors.value).length === 0
}

const isSaving = ref(false)
async function saveEdit() {
  if (!validateEdit()) return
  isSaving.value = true
  await new Promise(r => setTimeout(r, 400))
  const idx = events.value.findIndex(ev => ev.id === editTarget.value.id)
  if (idx !== -1) events.value[idx] = { ...editTarget.value }
  persist()
  isSaving.value = false
  closeEdit()
}

// ─── Persistence ──────────────────────────────────────────────────────────────
function persist() {
  localStorage.setItem('tinitz_events', JSON.stringify(events.value))
}

onMounted(loadEvents)
</script>

<template>
  <div class="space-y-8">

    <!-- ── Page Header ──────────────────────────────────────────────── -->
    <div class="flex justify-between items-center">
      <div>
        <h3 class="text-2xl font-black text-tinitz-navy uppercase tracking-tighter">Mes Événements</h3>
        <p class="text-slate-400 text-sm font-medium mt-1">{{ events.length }} événement{{ events.length > 1 ? 's' : '' }} enregistré{{ events.length > 1 ? 's' : '' }}</p>
      </div>
      <button
        @click="openModal"
        class="bg-tinitz-red text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-[0.15em] hover:scale-105 hover:shadow-xl hover:shadow-tinitz-red/20 transition-all flex items-center gap-2"
      >
        <Plus :size="16" />
        Nouvel Événement
      </button>
    </div>

    <!-- ── Empty State ───────────────────────────────────────────────── -->
    <div v-if="events.length === 0"
      class="bg-white border-2 border-dashed border-slate-100 rounded-[2.5rem] p-20 text-center"
    >
      <div class="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
        <Layers :size="40" />
      </div>
      <h4 class="text-lg font-black text-tinitz-navy mb-2">Aucun événement créé</h4>
      <p class="text-slate-400 text-sm max-w-xs mx-auto mb-10">
        Commencez par créer votre premier événement pour accéder aux outils de gestion digitale.
      </p>
      <button @click="openModal" class="text-tinitz-red font-black text-xs uppercase tracking-widest hover:underline">
        Créer maintenant
      </button>
    </div>

    <!-- ── Event Cards ───────────────────────────────────────────────── -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="event in events"
        :key="event.id"
        class="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all group overflow-hidden"
        :class="event.active === false ? 'opacity-60 grayscale-[30%]' : ''"
      >
        <!-- Card cover (cliquable → navigate) -->
        <div
          class="h-36 bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden cursor-pointer"
          :style="event.bgPreview ? `background-image: url(${event.bgPreview}); background-size: cover; background-position: center;` : ''"
          @click="navigate(router, `/admin/event/${event.id}/dashboard`, { name: event.name, code: event.code })"
        >
          <div class="absolute inset-0 bg-tinitz-navy/30 group-hover:bg-tinitz-navy/40 transition-all" />

          <!-- Status badge -->
          <div class="absolute top-4 right-4">
            <span :class="['px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest', statusColor(event.status)]">
              {{ event.status }}
            </span>
          </div>

          <!-- Code badge -->
          <div class="absolute bottom-4 left-4">
            <span class="bg-white/20 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-lg tracking-widest">
              # {{ event.code }}
            </span>
          </div>

          <!-- Logo preview -->
          <div v-if="event.logoPreview" class="absolute top-4 left-4">
            <img :src="event.logoPreview" class="w-10 h-10 rounded-xl object-cover border-2 border-white/40 shadow" />
          </div>
        </div>

        <!-- Card body -->
        <div class="p-6">
          <h4
            class="text-base font-black text-tinitz-navy mb-1 line-clamp-1 cursor-pointer hover:text-tinitz-red transition-colors"
            @click="navigate(router, `/admin/event/${event.id}/dashboard`, { name: event.name, code: event.code })"
          >
            {{ event.name }}
          </h4>

          <div class="flex items-center gap-2 text-slate-400 text-xs font-bold mb-1">
            <Calendar :size="12" />
            {{ formatDate(event.dateStart) }} → {{ formatDate(event.dateEnd) }}
          </div>

          <div v-if="event.location" class="flex items-center gap-2 text-slate-400 text-xs font-bold">
            <MapPin :size="12" />
            {{ event.location }}
          </div>
        </div>

        <!-- ── Card Footer : actions ────────────────────────────── -->
        <div class="px-6 pb-6 flex items-center justify-between gap-3">

          <!-- Participants -->
          <div class="flex items-center gap-2">
            <Users :size="14" class="text-slate-300" />
            <span class="text-xs font-black text-tinitz-navy">{{ event.participants }}</span>
          </div>

          <!-- Actions groupe -->
          <div class="flex items-center gap-2">

            <!-- Toggle Actif / Inactif -->
            <button
              @click="toggleActive(event, $event)"
              :title="event.active === false ? 'Activer' : 'Désactiver'"
              :class="[
                'relative w-10 h-5 rounded-full transition-all duration-300 flex-shrink-0',
                event.active !== false ? 'bg-emerald-500' : 'bg-slate-200'
              ]"
            >
              <span
                :class="[
                  'absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300',
                  event.active !== false ? 'left-5' : 'left-0.5'
                ]"
              />
            </button>

            <!-- Bouton Modifier -->
            <button
              @click="openEdit(event, $event)"
              title="Modifier l'événement"
              class="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-tinitz-navy hover:text-white transition-all"
            >
              <Pencil :size="14" />
            </button>

            <!-- Bouton Supprimer -->
            <button
              @click="askDelete(event.id, $event)"
              title="Supprimer l'événement"
              class="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-rose-500 hover:text-white transition-all"
            >
              <Trash2 :size="14" />
            </button>

            <!-- Gérer → navigate -->
            <button
              @click="navigate(router, `/admin/event/${event.id}/dashboard`, { name: event.name, code: event.code })"
              class="flex items-center gap-1.5 bg-tinitz-navy text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl hover:bg-tinitz-red transition-all group/btn"
            >
              Gérer
              <ArrowRight :size="12" class="group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- CONFIRM DELETE                                                   -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <Transition enter-active-class="transition-all duration-200" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="transition-all duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-if="confirmDeleteId" class="fixed inset-0 z-[300] flex items-center justify-center p-6">
        <div class="absolute inset-0 bg-tinitz-navy/40 backdrop-blur-sm" @click="cancelDelete" />
        <div class="bg-white w-full max-w-sm rounded-[2rem] p-10 relative z-10 shadow-2xl text-center">
          <div class="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Trash2 :size="24" class="text-rose-500" />
          </div>
          <h4 class="text-lg font-black text-tinitz-navy mb-2">Supprimer l'événement ?</h4>
          <p class="text-slate-400 text-sm mb-8">Cette action est irréversible. L'événement et toutes ses données seront supprimés.</p>
          <div class="flex gap-3">
            <button @click="cancelDelete" class="flex-1 py-3 bg-slate-100 text-slate-500 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all">
              Annuler
            </button>
            <button @click="confirmDelete" class="flex-1 py-3 bg-rose-500 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-rose-600 transition-all">
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- MODAL ÉDITION                                                   -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <Transition enter-active-class="transition-all duration-300" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition-all duration-200" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-if="showEditModal && editTarget" class="fixed inset-0 z-[250] flex items-start justify-center p-6 overflow-y-auto">
        <div class="absolute inset-0 bg-tinitz-navy/50 backdrop-blur-sm" @click="closeEdit" />
        <div class="bg-white w-full max-w-2xl rounded-[2.5rem] relative z-10 shadow-2xl my-8">

          <!-- Header -->
          <div class="flex items-center justify-between p-10 pb-0">
            <div>
              <h4 class="text-2xl font-black text-tinitz-navy uppercase tracking-tighter">Modifier l'événement</h4>
              <p class="text-slate-400 text-xs font-bold mt-1 flex items-center gap-2">
                <span class="bg-slate-100 px-2 py-0.5 rounded-lg font-black text-tinitz-navy tracking-widest"># {{ editTarget.code }}</span>
              </p>
            </div>
            <button @click="closeEdit" class="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:bg-tinitz-red hover:text-white transition-all">
              <X :size="18" />
            </button>
          </div>

          <!-- Form -->
          <div class="p-10 space-y-6">

            <!-- Nom -->
            <div class="space-y-2">
              <label class="text-[10px] font-black uppercase tracking-widest text-slate-400">Nom <span class="text-tinitz-red">*</span></label>
              <input v-model="editTarget.name" type="text" :class="['w-full bg-slate-50 border rounded-2xl py-4 px-5 font-bold text-sm focus:outline-none transition-colors', editErrors.name ? 'border-rose-400' : 'border-slate-100 focus:border-tinitz-red']" />
              <p v-if="editErrors.name" class="text-rose-500 text-[10px] font-bold">{{ editErrors.name }}</p>
            </div>

            <!-- Dates -->
            <div class="grid grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-widest text-slate-400">Date début <span class="text-tinitz-red">*</span></label>
                <input v-model="editTarget.dateStart" type="datetime-local" :class="['w-full bg-slate-50 border rounded-2xl py-4 px-5 font-bold text-sm focus:outline-none transition-colors', editErrors.dateStart ? 'border-rose-400' : 'border-slate-100 focus:border-tinitz-red']" />
                <p v-if="editErrors.dateStart" class="text-rose-500 text-[10px] font-bold">{{ editErrors.dateStart }}</p>
              </div>
              <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-widest text-slate-400">Date fin <span class="text-tinitz-red">*</span></label>
                <input v-model="editTarget.dateEnd" type="datetime-local" :class="['w-full bg-slate-50 border rounded-2xl py-4 px-5 font-bold text-sm focus:outline-none transition-colors', editErrors.dateEnd ? 'border-rose-400' : 'border-slate-100 focus:border-tinitz-red']" />
                <p v-if="editErrors.dateEnd" class="text-rose-500 text-[10px] font-bold">{{ editErrors.dateEnd }}</p>
              </div>
            </div>

            <!-- Lieu -->
            <div class="space-y-2">
              <label class="text-[10px] font-black uppercase tracking-widest text-slate-400">Lieu <span class="text-tinitz-red">*</span></label>
              <input v-model="editTarget.location" type="text" :class="['w-full bg-slate-50 border rounded-2xl py-4 px-5 font-bold text-sm focus:outline-none transition-colors', editErrors.location ? 'border-rose-400' : 'border-slate-100 focus:border-tinitz-red']" />
              <p v-if="editErrors.location" class="text-rose-500 text-[10px] font-bold">{{ editErrors.location }}</p>
            </div>

            <!-- Description -->
            <div class="space-y-2">
              <label class="text-[10px] font-black uppercase tracking-widest text-slate-400">Description</label>
              <textarea v-model="editTarget.description" rows="3" class="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-5 font-bold text-sm focus:outline-none focus:border-tinitz-red transition-colors resize-none" />
            </div>

            <!-- Statut -->
            <div class="space-y-2">
              <label class="text-[10px] font-black uppercase tracking-widest text-slate-400">Statut</label>
              <select v-model="editTarget.status" class="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-5 font-bold text-sm focus:outline-none focus:border-tinitz-red transition-colors">
                <option>Brouillon</option>
                <option>Planifié</option>
                <option>En cours</option>
                <option>Terminé</option>
              </select>
            </div>

            <!-- Save -->
            <button @click="saveEdit" :disabled="isSaving" class="w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl transition-all flex items-center justify-center gap-3 bg-tinitz-navy text-white hover:bg-tinitz-red disabled:opacity-60">
              <template v-if="isSaving">
                <svg class="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                Enregistrement…
              </template>
              <template v-else>
                <CheckCircle2 :size="16" /> Enregistrer les modifications
              </template>
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- MODAL création événement                                        -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <Transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="showModal" class="fixed inset-0 z-[200] flex items-start justify-center p-6 overflow-y-auto">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-tinitz-navy/50 backdrop-blur-sm" @click="closeModal" />

        <!-- Modal card -->
        <div class="bg-white w-full max-w-2xl rounded-[2.5rem] relative z-10 shadow-2xl my-8">

          <!-- ── Modal Header ──────────────────────────────────────── -->
          <div class="flex items-center justify-between p-10 pb-0">
            <div>
              <h4 class="text-2xl font-black text-tinitz-navy uppercase tracking-tighter">Nouvel Événement</h4>
              <p class="text-slate-400 text-xs font-bold mt-1">Les champs marqués d'une étoile (*) sont obligatoires.</p>
            </div>
            <button
              @click="closeModal"
              class="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:bg-tinitz-red hover:text-white transition-all"
            >
              <X :size="18" />
            </button>
          </div>

          <!-- ── Form ─────────────────────────────────────────────── -->
          <div class="p-10 space-y-7">

            <!-- Row 1 : Code + Nom -->
            <div class="grid grid-cols-2 gap-6">
              <!-- Code (auto-généré) -->
              <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1">
                  <Hash :size="10" /> Code <span class="text-tinitz-red">*</span>
                </label>
                <div class="flex items-center gap-3">
                  <input
                    v-model="newEvent.code"
                    type="text"
                    readonly
                    class="flex-1 bg-slate-50 border border-slate-100 rounded-2xl py-4 px-5 font-black text-tinitz-navy tracking-widest text-sm cursor-default"
                  />
                  <button
                    @click="newEvent.code = generateCode()"
                    title="Régénérer"
                    class="w-12 h-12 flex-shrink-0 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-tinitz-navy hover:text-white transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
                  </button>
                </div>
              </div>

              <!-- Nom de l'événement -->
              <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Nom de l'événement <span class="text-tinitz-red">*</span>
                </label>
                <input
                  v-model="newEvent.name"
                  type="text"
                  placeholder="Entrez le nom de l'événement"
                  :class="['w-full bg-slate-50 border rounded-2xl py-4 px-5 font-bold text-sm focus:outline-none transition-colors', errors.name ? 'border-rose-400 focus:border-rose-400' : 'border-slate-100 focus:border-tinitz-red']"
                />
                <p v-if="errors.name" class="text-rose-500 text-[10px] font-bold">{{ errors.name }}</p>
              </div>
            </div>

            <!-- Row 2 : Date début + Date fin -->
            <div class="grid grid-cols-2 gap-6">
              <!-- Date début -->
              <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1">
                  <Calendar :size="10" /> Date début <span class="text-tinitz-red">*</span>
                </label>
                <input
                  v-model="newEvent.dateStart"
                  type="datetime-local"
                  :class="['w-full bg-slate-50 border rounded-2xl py-4 px-5 font-bold text-sm focus:outline-none transition-colors', errors.dateStart ? 'border-rose-400' : 'border-slate-100 focus:border-tinitz-red']"
                />
                <p v-if="errors.dateStart" class="text-rose-500 text-[10px] font-bold">{{ errors.dateStart }}</p>
              </div>

              <!-- Date fin -->
              <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1">
                  <Calendar :size="10" /> Date fin <span class="text-tinitz-red">*</span>
                </label>
                <input
                  v-model="newEvent.dateEnd"
                  type="datetime-local"
                  :class="['w-full bg-slate-50 border rounded-2xl py-4 px-5 font-bold text-sm focus:outline-none transition-colors', errors.dateEnd ? 'border-rose-400' : 'border-slate-100 focus:border-tinitz-red']"
                />
                <p v-if="errors.dateEnd" class="text-rose-500 text-[10px] font-bold">{{ errors.dateEnd }}</p>
              </div>
            </div>

            <!-- Row 3 : Logo + Checkbox logo -->
            <div class="grid grid-cols-2 gap-6 items-start">
              <!-- Logo upload -->
              <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1">
                  <Image :size="10" /> Logo <span class="text-tinitz-red">*</span>
                </label>

                <!-- Preview si logo uploadé -->
                <div v-if="newEvent.logoPreview" class="relative">
                  <div class="w-full h-28 rounded-2xl overflow-hidden border border-slate-100 bg-slate-50">
                    <img :src="newEvent.logoPreview" class="w-full h-full object-contain" />
                  </div>
                  <button
                    @click="removeLogo"
                    class="absolute -top-2 -right-2 w-7 h-7 bg-tinitz-red text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"
                  >
                    <X :size="12" />
                  </button>
                </div>

                <!-- File input sinon -->
                <label v-else :class="['flex flex-col items-center justify-center w-full h-28 border-2 border-dashed rounded-2xl cursor-pointer transition-all', errors.logo ? 'border-rose-300 bg-rose-50' : 'border-slate-200 bg-slate-50 hover:border-tinitz-red hover:bg-slate-100']">
                  <Upload :size="22" class="text-slate-300 mb-2" />
                  <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Choisir un fichier</span>
                  <input type="file" accept="image/*" class="hidden" @change="handleLogoUpload" />
                </label>
                <p v-if="errors.logo" class="text-rose-500 text-[10px] font-bold">{{ errors.logo }}</p>
              </div>

              <!-- Checkbox logo comme logo événement -->
              <div class="space-y-4 pt-8">
                <label class="flex items-start gap-3 cursor-pointer group">
                  <div
                    @click="newEvent.useLogoAsEvent = !newEvent.useLogoAsEvent"
                    :class="['w-5 h-5 mt-0.5 rounded-md border-2 flex-shrink-0 flex items-center justify-center transition-all', newEvent.useLogoAsEvent ? 'bg-tinitz-navy border-tinitz-navy' : 'border-slate-300 group-hover:border-tinitz-navy']"
                  >
                    <CheckCircle2 v-if="newEvent.useLogoAsEvent" :size="13" class="text-white" />
                  </div>
                  <span class="text-xs font-bold text-slate-600 leading-relaxed italic">
                    Cochez si vous souhaitez appliquer le logo comme logo de l'événement.
                  </span>
                </label>
              </div>
            </div>

            <!-- Row 4 : Arrière-plan + Lieu -->
            <div class="grid grid-cols-2 gap-6 items-start">
              <!-- Arrière-plan -->
              <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1">
                  <Image :size="10" /> Arrière-plan
                </label>

                <div v-if="newEvent.bgPreview" class="relative">
                  <div class="w-full h-28 rounded-2xl overflow-hidden border border-slate-100 bg-slate-50">
                    <img :src="newEvent.bgPreview" class="w-full h-full object-cover" />
                  </div>
                  <button
                    @click="removeBg"
                    class="absolute -top-2 -right-2 w-7 h-7 bg-tinitz-red text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"
                  >
                    <X :size="12" />
                  </button>
                </div>

                <label v-else class="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50 hover:border-tinitz-red hover:bg-slate-100 cursor-pointer transition-all">
                  <Upload :size="22" class="text-slate-300 mb-2" />
                  <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Choisir un fichier</span>
                  <input type="file" accept="image/*" class="hidden" @change="handleBgUpload" />
                </label>
              </div>

              <!-- Lieu -->
              <div class="space-y-2 pt-0">
                <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1">
                  <MapPin :size="10" /> Lieu <span class="text-tinitz-red">*</span>
                </label>
                <input
                  v-model="newEvent.location"
                  type="text"
                  placeholder="Entrez le lieu de l'événement"
                  :class="['w-full bg-slate-50 border rounded-2xl py-4 px-5 font-bold text-sm focus:outline-none transition-colors', errors.location ? 'border-rose-400 focus:border-rose-400' : 'border-slate-100 focus:border-tinitz-red']"
                />
                <p v-if="errors.location" class="text-rose-500 text-[10px] font-bold">{{ errors.location }}</p>
              </div>
            </div>

            <!-- Row 5 : Description -->
            <div class="space-y-2">
              <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1">
                <AlignLeft :size="10" /> Description
              </label>
              <textarea
                v-model="newEvent.description"
                rows="4"
                placeholder="Décrivez votre événement…"
                class="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-5 font-bold text-sm focus:outline-none focus:border-tinitz-red transition-colors resize-none"
              />
            </div>

            <!-- ── Submit button ─────────────────────────────────────── -->
            <button
              @click="addEvent"
              :disabled="isSubmitting"
              class="w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl transition-all flex items-center justify-center gap-3 bg-tinitz-navy text-white hover:bg-tinitz-red disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <template v-if="isSubmitting">
                <svg class="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                Enregistrement…
              </template>
              <template v-else>
                <CheckCircle2 :size="16" />
                Enregistrer
              </template>
            </button>

          </div>
        </div>
      </div>
    </Transition>

  </div>
</template>
