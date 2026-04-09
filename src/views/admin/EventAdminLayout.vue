<script setup>
import EventSidebar from '../../components/admin/admin-panel/EventSidebar.vue'
import TopBar from '../../components/admin/TopBar.vue'
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
            enter-active-class="transition duration-400 ease-out"
            enter-from-class="opacity-0 translate-x-4"
            enter-to-class="opacity-100 translate-x-0"
            leave-active-class="transition duration-300 ease-in"
            leave-from-class="opacity-100 translate-x-0"
            leave-to-class="opacity-0 -translate-x-4"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>
  </div>
</template>
