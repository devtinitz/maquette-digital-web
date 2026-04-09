<script setup>
import { 
  LayoutDashboard, 
  Monitor, 
  Map, 
  Files, 
  MessageSquare, 
  Ticket, 
  BarChart3,
  Undo2,
  ChevronDown
} from 'lucide-vue-next'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Logo from '../../Logo.vue'

const router = useRouter()
const route = useRoute()
const eventId = route.params.id || 'current'

const openSections = ref(['Equipements', 'Contenus', 'Outils'])

const toggleSection = (section) => {
  if (openSections.value.includes(section)) {
    openSections.value = openSections.value.filter(s => s !== section)
  } else {
    openSections.value.push(section)
  }
}

const menuSections = [
  {
    name: 'Dashboard',
    id: 'dashboard',
    icon: LayoutDashboard,
    path: `/admin/event/${eventId}/dashboard`
  },
  {
    name: 'Equipements & Contenus',
    id: 'Equipements',
    icon: Monitor,
    children: [
      { name: 'Mes équipements', path: `/admin/event/${eventId}/devices` }
    ]
  },
  {
    name: 'Directions & Sites',
    id: 'Directions',
    icon: Map,
    children: [
      { name: 'Mes Directions', path: `/admin/event/${eventId}/directions` },
      { name: 'Sites & Portes', path: `/admin/event/${eventId}/sites` }
    ]
  },
  {
    name: 'Gestion de Contenu',
    id: 'Contenus',
    icon: Files,
    children: [
      { name: 'Alerts', path: `/admin/event/${eventId}/alerts` },
      { name: 'Articles', path: `/admin/event/${eventId}/articles` },
      { name: 'Slides', path: `/admin/event/${eventId}/slides` }
    ]
  },
  {
    name: 'Outils Participatifs',
    id: 'Outils',
    icon: MessageSquare,
    children: [
      { name: 'Campagnes', path: `/admin/event/${eventId}/campaigns` },
      { name: 'Votes', path: `/admin/event/${eventId}/votes` },
      { name: 'Formulaire d’enregistrement', path: `/admin/event/${eventId}/forms` }
    ]
  },
  {
    name: 'Badges et Tickets',
    id: 'badges',
    icon: Ticket,
    path: `/admin/event/${eventId}/ticketing`
  },
  {
    name: 'Statistiques',
    id: 'stats',
    icon: BarChart3,
    path: `/admin/event/${eventId}/stats`
  }
]
</script>

<template>
  <aside class="w-80 bg-white border-r border-slate-100 flex flex-col h-screen sticky top-0 font-outfit">
    <!-- Header Sidebar -->
    <div class="p-8 border-b border-slate-50 flex items-center justify-between">
      <Logo class="scale-100 origin-left" />
      <button 
        @click="router.push('/admin/events')" 
        class="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-tinitz-navy hover:text-white transition-all"
        title="Retour à la liste"
      >
        <Undo2 :size="16" />
      </button>
    </div>

    <!-- Event Identifier -->
    <div class="px-8 py-6 bg-slate-50/50">
       <div class="text-[9px] font-black uppercase tracking-[0.3em] text-tinitz-red mb-1">Mode Gestionnaire</div>
       <div class="text-sm font-black text-tinitz-navy truncate uppercase tracking-tighter">Événement Actuel</div>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 p-4 space-y-1 overflow-y-auto custom-scrollbar">
      <div v-for="section in menuSections" :key="section.id">
        <!-- Section Header / Primary Link -->
        <component 
          :is="section.children ? 'div' : 'router-link'"
          :to="section.path"
          @click="section.children && toggleSection(section.id)"
          :class="[
            'flex items-center justify-between px-4 py-3 rounded-xl font-bold text-[13px] transition-all duration-300 cursor-pointer group',
            route.path === section.path ? 'bg-tinitz-navy text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'
          ]"
        >
          <div class="flex items-center gap-3">
            <component :is="section.icon" :size="18" :class="route.path === section.path ? 'text-white' : 'text-slate-300 group-hover:text-tinitz-navy'" />
            {{ section.name }}
          </div>
          <ChevronDown 
            v-if="section.children" 
            :size="14" 
            :class="['transition-transform duration-300', openSections.includes(section.id) ? 'rotate-180' : '']" 
          />
        </component>

        <!-- Children Links -->
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="max-h-0 opacity-0 overflow-hidden"
          enter-to-class="max-h-[500px] opacity-100"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="max-h-[500px] opacity-100"
          leave-to-class="max-h-0 opacity-0 overflow-hidden"
        >
          <div v-if="section.children && openSections.includes(section.id)" class="ml-9 mt-1 space-y-1 border-l-2 border-slate-50 lg:pl-2">
            <router-link 
              v-for="child in section.children" 
              :key="child.path"
              :to="child.path"
              :class="[
                'block py-2.5 px-4 rounded-lg text-[12px] font-bold transition-all',
                route.path === child.path ? 'text-tinitz-red bg-red-50/50' : 'text-slate-400 hover:text-tinitz-navy hover:bg-slate-50'
              ]"
            >
              {{ child.name }}
            </router-link>
          </div>
        </Transition>
      </div>
    </nav>
  </aside>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #f1f5f9;
  border-radius: 10px;
}
</style>
