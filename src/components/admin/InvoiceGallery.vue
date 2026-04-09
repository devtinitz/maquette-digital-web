<script setup>
import { ref, onMounted } from 'vue'
import { FileText, Download, Eye, ExternalLink } from 'lucide-vue-next'

const invoices = ref([])

onMounted(() => {
  const saved = localStorage.getItem('tinitz_invoices')
  invoices.value = saved ? JSON.parse(saved) : []
})
</script>

<template>
  <div class="space-y-8">
    <div class="flex justify-between items-center">
      <h3 class="text-xl font-black text-tinitz-navy uppercase tracking-tight">Historique des Factures</h3>
    </div>

    <!-- Empty State -->
    <div v-if="invoices.length === 0" class="bg-white border-2 border-dashed border-slate-100 rounded-[2.5rem] p-20 text-center">
      <div class="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
        <FileText :size="32" />
      </div>
      <h4 class="text-lg font-black text-tinitz-navy mb-2">Aucune facture disponible</h4>
      <p class="text-slate-400 text-sm max-w-xs mx-auto">Souscrivez à un forfait pour générer vos premières factures de service.</p>
    </div>

    <!-- Invoices List -->
    <div v-else class="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
      <table class="w-full text-left">
        <thead class="bg-slate-50 border-b border-slate-100">
          <tr>
            <th class="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Numéro</th>
            <th class="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Services</th>
            <th class="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Date</th>
            <th class="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Montant</th>
            <th class="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-50">
          <tr v-for="inv in invoices" :key="inv.id" class="hover:bg-slate-50 transition-colors group">
            <td class="px-10 py-6">
              <span class="text-sm font-black text-tinitz-navy">{{ inv.id }}</span>
            </td>
            <td class="px-10 py-6">
              <div class="text-sm font-bold text-tinitz-navy">{{ inv.plan }}</div>
              <div class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Abonnement Mensuel</div>
            </td>
            <td class="px-10 py-6">
              <span class="text-sm font-medium text-slate-500">{{ inv.date }}</span>
            </td>
            <td class="px-10 py-6">
              <span class="text-sm font-black text-tinitz-navy">{{ inv.amount }} <span class="text-[10px] opacity-40">FCFA</span></span>
            </td>
            <td class="px-10 py-6 text-right">
              <div class="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button class="w-10 h-10 rounded-xl bg-slate-100 text-tinitz-navy flex items-center justify-center hover:bg-tinitz-navy hover:text-white transition-all shadow-sm">
                  <Eye :size="18" />
                </button>
                <button class="w-10 h-10 rounded-xl bg-slate-100 text-tinitz-navy flex items-center justify-center hover:bg-tinitz-red hover:text-white transition-all shadow-sm">
                  <Download :size="18" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
