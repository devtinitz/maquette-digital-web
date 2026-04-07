<script setup>
import { Monitor, Cpu, Sparkles, ShieldCheck } from 'lucide-vue-next'
</script>

<template>
  <section id="showcase" class="py-32 bg-white text-tinitz-navy overflow-hidden relative border-y border-slate-100">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="grid lg:grid-cols-2 gap-24 items-center">
        <!-- Text Content -->
        <div>
          <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-tinitz-red mb-8">Hardware & Software</h2>
          <h3 class="text-3xl md:text-5xl font-black mb-10 leading-[1.2] tracking-tighter text-tinitz-navy">
            La technologie au <br/> 
            <span class="italic text-tinitz-red">service de l'humain</span>.
          </h3>
          
          <div class="space-y-10">
            <div class="flex items-start gap-6 group">
              <div class="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-tinitz-red flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                <Monitor :size="28" />
              </div>
              <div>
                <h4 class="text-lg font-black mb-2 uppercase tracking-tight">Bornes Connectées</h4>
                <p class="text-sm text-slate-400 leading-relaxed font-medium max-w-sm">
                  Une interface tactile intuitive pour le self-checkin, l'orientation et l'interaction directe avec les participants.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-6 group">
              <div class="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-tinitz-navy flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                <Cpu :size="28" />
              </div>
              <div>
                <h4 class="text-lg font-black mb-2 uppercase tracking-tight">Traitement Temps Réel</h4>
                <p class="text-sm text-slate-400 leading-relaxed font-medium max-w-sm">
                  Chaque interaction est synchronisée instantanément avec votre tableau de bord administrateur.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-6 group">
              <div class="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-tinitz-emerald flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck :size="28" />
              </div>
              <div>
                <h4 class="text-lg font-black mb-2 uppercase tracking-tight">Fiabilité Absolue</h4>
                <p class="text-sm text-slate-400 leading-relaxed font-medium max-w-sm">
                  Systèmes conçus pour les environnements de haute densité, garantissant zéro latence.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Image Showcase -->
        <div class="relative">
          <div class="absolute inset-0 bg-tinitz-red/5 rounded-full blur-[100px] scale-125"></div>
          <div class="relative rounded-[3rem] overflow-hidden border border-slate-100 shadow-[0_40px_100px_rgba(0,0,0,0.08)] p-6 bg-white rotate-1 hover:rotate-0 transition-transform duration-1000">
            <img src="/src/assets/terminal.png" alt="Tinitz Terminal" class="w-full h-auto rounded-[2rem]" />
            
            <!-- Overlay Info -->
            <div class="absolute bottom-12 left-12 right-12 bg-white shadow-2xl p-6 rounded-2xl border border-slate-100">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 rounded-full bg-tinitz-emerald animate-pulse"></div>
                  <span class="text-[10px] font-black uppercase tracking-widest text-slate-400">Cloud Sync Active</span>
                </div>
                <Sparkles :size="16" class="text-tinitz-red" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
