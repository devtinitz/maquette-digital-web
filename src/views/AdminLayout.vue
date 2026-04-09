<script setup>
import Sidebar from '../components/admin/Sidebar.vue'
import TopBar from '../components/admin/TopBar.vue'
</script>

<template>
  <div class="flex min-h-screen bg-slate-50 font-outfit">
    <!-- Navigation Latérale -->
    <Sidebar />

    <!-- Conteneur Principal -->
    <div class="flex-1 flex flex-col">
      <TopBar />

      <!-- Contenu Dynamique (Dashboard Views) -->
      <main class="flex-1 p-10">
        <router-view v-slot="{ Component }">
          <transition 
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 translate-y-4"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-4"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </main>

      <!-- Footer Admin discret -->
      <footer class="p-10 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold text-slate-300 uppercase tracking-widest">
        <div>© 2024 TINITZ ADMINISTRATIVE PANEL</div>
        <div class="flex gap-6">
          <a href="#" class="hover:text-tinitz-navy transition-colors">Support Technique</a>
          <a href="#" class="hover:text-tinitz-navy transition-colors">Conditions d'Utilisation</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
/* Transitions de pages admin */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
