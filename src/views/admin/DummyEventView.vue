<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="space-y-8">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-black text-tinitz-navy uppercase tracking-tighter">
        {{ route.name?.replace('admin-event-', '').replace('-', ' ') || 'Module' }}
      </h1>
      <div class="px-4 py-2 bg-tinitz-red/10 text-tinitz-red rounded-lg text-[10px] font-black uppercase tracking-widest">
        Module Live
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
       <div class="md:col-span-2 bg-white border border-slate-100 rounded-[2.5rem] p-16 text-center">
          <div class="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 text-slate-200">
             <Layers :size="40" />
          </div>
          <h2 class="text-xl font-black text-tinitz-navy mb-4 uppercase tracking-tight">Configuration du module</h2>
          <p class="text-slate-400 font-medium max-w-sm mx-auto">
             L'interface pour le module <span class="text-tinitz-navy font-bold uppercase tracking-widest">{{ route.name }}</span> est prête pour l'intégration de vos données réelles.
          </p>
       </div>
       
       <div class="bg-white border border-slate-100 rounded-[2.5rem] p-10 space-y-6">
          <h3 class="text-xs font-black uppercase tracking-widest text-slate-300">Statut du module</h3>
          <div class="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center gap-4">
             <div class="w-2 h-2 rounded-full bg-emerald-500"></div>
             <span class="text-[10px] font-black uppercase tracking-widest text-emerald-600">Opérationnel</span>
          </div>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
             <div class="text-[9px] font-black uppercase tracking-widest text-slate-300">Accès rapide</div>
             <button class="w-full py-3 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-tinitz-navy hover:bg-tinitz-navy hover:text-white transition-all">Documentation</button>
             <button class="w-full py-3 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-tinitz-navy hover:bg-tinitz-navy hover:text-white transition-all">Support Live</button>
          </div>
       </div>
    </div>
  </div>
</template>

<script>
import { Layers } from 'lucide-vue-next'
export default { components: { Layers } }
</script>
