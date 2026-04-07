<script setup>
import { 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram,
  ArrowRight
} from 'lucide-vue-next'
import Logo from './Logo.vue'
</script>

<template>
  <footer class="bg-white border-t border-slate-100">
    <div class="max-w-7xl mx-auto px-6 py-24">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <!-- Brand -->
        <div class="md:col-span-1">
          <div class="flex items-center gap-2 mb-8 transform -translate-x-4">
            <Logo />
          </div>
          <p class="text-tinitz-navy/50 font-medium leading-relaxed mb-8 text-sm">
            L'excellence technologique au service de vos événements les plus prestigieux. Une signature de DIGITAL.
          </p>
          <div class="flex items-center gap-4">
            <a href="#" class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-tinitz-navy hover:bg-tinitz-red hover:text-white transition-all shadow-sm">
              <Linkedin :size="18" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-tinitz-navy hover:bg-tinitz-red hover:text-white transition-all shadow-sm">
              <Twitter :size="18" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-tinitz-navy hover:bg-tinitz-red hover:text-white transition-all shadow-sm">
              <Instagram :size="18" />
            </a>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-xs font-black uppercase tracking-[0.3em] text-tinitz-navy mb-10">Solutions</h4>
          <ul class="space-y-4">
            <li><a href="#" class="text-sm text-tinitz-navy/50 hover:text-tinitz-red font-bold transition-colors uppercase tracking-widest">Billetterie</a></li>
            <li><a href="#" class="text-sm text-tinitz-navy/50 hover:text-tinitz-red font-bold transition-colors uppercase tracking-widest">Bornes Tactiles</a></li>
            <li><a href="#" class="text-sm text-tinitz-navy/50 hover:text-tinitz-red font-bold transition-colors uppercase tracking-widest">Data Collection</a></li>
            <li><a href="#" class="text-sm text-tinitz-navy/50 hover:text-tinitz-red font-bold transition-colors uppercase tracking-widest">Marketing Direct</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs font-black uppercase tracking-[0.3em] text-tinitz-navy mb-10">Plateforme</h4>
          <ul class="space-y-4">
            <li><a href="#" class="text-sm text-tinitz-navy/50 hover:text-tinitz-red font-bold transition-colors uppercase tracking-widest">Documentation</a></li>
            <li><a href="#" class="text-sm text-tinitz-navy/50 hover:text-tinitz-red font-bold transition-colors uppercase tracking-widest">API & Webhooks</a></li>
            <li><a href="#" class="text-sm text-tinitz-navy/50 hover:text-tinitz-red font-bold transition-colors uppercase tracking-widest">Sécurité</a></li>
            <li><a href="https://www.tinitz.ci" target="_blank" class="text-tinitz-red text-sm font-black flex items-center gap-2 group uppercase tracking-widest">
              tinitz.ci
              <ArrowRight :size="14" class="transition-transform group-hover:translate-x-1" />
            </a></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="text-xs font-black uppercase tracking-[0.3em] text-tinitz-navy mb-10">Newsletter</h4>
          <p class="text-sm text-tinitz-navy/50 font-medium mb-8">Restez connecté à l'innovation événementielle.</p>
          <div class="relative">
            <input 
              type="text" 
              placeholder="votre@email.com" 
              class="w-full bg-slate-50 border border-slate-100 rounded-full py-4 px-8 text-xs font-bold focus:outline-none focus:ring-4 focus:ring-tinitz-red/5 transition-all"
            />
            <button class="absolute right-2 top-2 bottom-2 bg-tinitz-navy text-white px-6 rounded-full hover:bg-tinitz-red transition-all shadow-lg">
              <ArrowRight :size="18" stroke-width="3" />
            </button>
          </div>
        </div>
      </div>

      <div class="pt-12 border-t border-slate-100 flex flex-wrap justify-between items-center gap-6">
        <p class="text-[10px] font-black uppercase tracking-[0.3em] text-tinitz-navy/30">
          © 2024 Tinitz by DIGITAL. Tous droits réservés.
        </p>
        <div class="flex items-center gap-8">
          <a href="#" class="text-[10px] font-black uppercase tracking-widest text-tinitz-navy/30 hover:text-tinitz-navy transition-colors">Légal</a>
          <a href="#" class="text-[10px] font-black uppercase tracking-widest text-tinitz-navy/30 hover:text-tinitz-navy transition-colors">Confidentialité</a>
          <a href="#" class="text-[10px] font-black uppercase tracking-widest text-tinitz-navy/30 hover:text-tinitz-navy transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>
