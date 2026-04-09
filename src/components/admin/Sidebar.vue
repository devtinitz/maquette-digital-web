<script setup>
import { 
  LayoutDashboard, 
  CalendarDays, 
  CreditCard, 
  FileText, 
  Users, 
  Settings, 
  LogOut,
  Zap
} from 'lucide-vue-next'
import { useRouter, useRoute } from 'vue-router'
import Logo from '../Logo.vue'

const router = useRouter()
const route = useRoute()

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
  { name: 'Mes Événements', icon: CalendarDays, path: '/admin/events' },
  { name: 'Abonnement', icon: Zap, path: '/admin/subscription' },
  { name: 'Factures', icon: FileText, path: '/admin/invoices' },
  { name: 'Équipe', icon: Users, path: '/admin/team' },
]

const logout = () => {
  localStorage.removeItem('tinitz_user_authenticated')
  router.push('/login')
}
</script>

<template>
  <aside class="w-72 bg-white border-r border-slate-100 flex flex-col h-screen sticky top-0">
    <!-- Header Sidebar -->
    <div class="p-8 border-b border-slate-50">
      <Logo class="scale-110 origin-left" />
    </div>

    <!-- Navigation -->
    <nav class="flex-1 p-6 space-y-2">
      <div v-for="item in menuItems" :key="item.name">
        <router-link 
          :to="item.path"
          :class="[
            'flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 group',
            route.path === item.path 
              ? 'bg-tinitz-navy text-white shadow-xl shadow-tinitz-navy/10' 
              : 'text-slate-400 hover:bg-slate-50 hover:text-tinitz-navy'
          ]"
        >
          <component 
            :is="item.icon" 
            :size="20" 
            :class="[route.path === item.path ? 'text-white' : 'text-slate-300 group-hover:text-tinitz-navy']"
          />
          {{ item.name }}
        </router-link>
      </div>
    </nav>

    <!-- Version & User Action -->
    <div class="p-6 space-y-4">
      <div class="bg-slate-50 rounded-2xl p-4 border border-slate-100">
        <div class="flex items-center gap-3 mb-2">
          <div class="w-2 h-2 rounded-full bg-tinitz-red animate-pulse"></div>
          <span class="text-[10px] font-black uppercase tracking-widest text-slate-400">Version 2.0.4</span>
        </div>
        <p class="text-[10px] font-bold text-slate-400 leading-tight">Accès Professionnel sécurisé.</p>
      </div>

      <button 
        @click="logout"
        class="flex items-center gap-4 w-full px-4 py-3.5 rounded-2xl text-slate-400 hover:bg-red-50 hover:text-red-500 font-bold text-sm transition-all group"
      >
        <LogOut :size="20" class="group-hover:translate-x-1 transition-transform" />
        Déconnexion
      </button>
    </div>
  </aside>
</template>

<style scoped>
.router-link-active {
  /* classes déjà gérées par la logique :class */
}
</style>
