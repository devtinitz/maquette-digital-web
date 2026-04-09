<script setup>
import { Search, Bell, User as UserIcon, ChevronDown, HelpCircle } from 'lucide-vue-next'
import { ref } from 'vue'

const userEmail = ref(localStorage.getItem('tinitz_user_email') || 'admin@tinitz.ci')
</script>

<template>
  <header class="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 px-10 flex items-center justify-between sticky top-0 z-50">
    <!-- Recherche -->
    <div class="w-96 relative">
      <Search class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" :size="18" />
      <input 
        type="text" 
        placeholder="Rechercher un événement, une facture..."
        class="w-full bg-slate-50 border border-slate-100 rounded-xl py-2.5 pl-12 pr-4 text-sm font-medium focus:outline-none focus:border-tinitz-navy transition-all"
      />
    </div>

    <!-- Actions Droite -->
    <div class="flex items-center gap-6">
      <button class="w-10 h-10 rounded-xl hover:bg-slate-50 flex items-center justify-center text-slate-400 hover:text-tinitz-navy transition-all relative">
        <Bell :size="20" />
        <span class="absolute top-2.5 right-2.5 w-2 h-2 bg-tinitz-red rounded-full border-2 border-white"></span>
      </button>

      <button class="w-10 h-10 rounded-xl hover:bg-slate-50 flex items-center justify-center text-slate-400 hover:text-tinitz-navy transition-all">
        <HelpCircle :size="20" />
      </button>

      <!-- Profil -->
      <div class="h-10 w-px bg-slate-100"></div>

      <div class="flex items-center gap-4 cursor-pointer group">
        <div class="text-right">
          <div class="text-[11px] font-black text-tinitz-navy uppercase tracking-widest">{{ userEmail.split('@')[0] }}</div>
          <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Plan Professionnel</div>
        </div>
        <div class="w-10 h-10 rounded-full bg-tinitz-navy flex items-center justify-center text-white text-sm font-black border-2 border-white shadow-lg overflow-hidden relative group-hover:scale-110 transition-transform">
          <UserIcon :size="20" />
        </div>
        <ChevronDown :size="14" class="text-slate-300 group-hover:text-tinitz-navy transition-colors" />
      </div>
    </div>
  </header>
</template>
