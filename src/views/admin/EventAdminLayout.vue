<script setup>
import { useRoute } from 'vue-router'
import EventSidebar from '../../components/admin/admin-panel/EventSidebar.vue'
import TopBar from '../../components/admin/TopBar.vue'

const route = useRoute()
</script>

<template>
  <div class="flex min-h-screen bg-white">
    <!-- Event Contextual Navigation -->
    <EventSidebar />

    <!-- Main Workspace -->
    <div class="flex-1 flex flex-col bg-slate-50/30">
      <TopBar />

      <!-- Breadcrumb / Context header -->
      <div class="px-10 py-6 bg-white border-b border-slate-100 flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
         <router-link to="/admin" class="hover:text-tinitz-navy">Console</router-link>
         <span>/</span>
         <router-link to="/admin/events" class="hover:text-tinitz-navy">Événements</router-link>
         <span>/</span>
         <span class="text-tinitz-navy">Gestion Digitale</span>
      </div>

      <!-- Scrollable content area -->
      <main class="flex-1 p-10 overflow-y-auto">
        <router-view v-slot="{ Component }">
          <transition 
            name="fade-slide"
            mode="out-in"
          >
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
      </main>
    </div>
  </div>
</template>

<style scoped>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.3s ease-out;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(10px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>
