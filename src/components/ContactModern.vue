<script setup>
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-vue-next'
</script>

<template>
  <section id="contact" class="py-40 bg-slate-50 relative overflow-hidden font-outfit">
    <!-- Background Decor (Subtle version) -->
    <div class="absolute -top-1/2 -right-1/4 w-[80%] h-[150%] bg-tinitz-red/[0.03] rounded-full blur-[150px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
       <!-- Premium Contact Card -->
       <div class="bg-white rounded-[3.5rem] shadow-[0_50px_100px_rgba(15,23,42,0.05)] overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          
          <!-- Left: Information Column (Light Professional) -->
          <div class="lg:w-2/5 bg-slate-50 p-12 md:p-20 flex flex-col justify-between relative overflow-hidden border-r border-slate-100">
             <!-- Top Decoration -->
             <div class="absolute -top-20 -left-20 w-40 h-40 bg-tinitz-red/[0.05] rounded-full blur-3xl"></div>
             
             <div class="relative z-10">
                <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-tinitz-red mb-10">Network Hub</h2>
                <h3 class="text-3xl md:text-5xl font-black text-tinitz-navy leading-tight uppercase tracking-tighter mb-10">
                   Parlons de <br/> 
                   <span class="text-slate-200 italic lowercase font-light">votre succès</span>.
                </h3>
                <p class="text-slate-400 text-sm leading-relaxed mb-16 font-medium max-w-xs">
                   Nos consultants analysent vos besoins technologiques sous 24h pour vous proposer la meilleure architecture événementielle.
                </p>

                <div class="space-y-10">
                   <div class="flex items-center gap-6 group">
                      <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-tinitz-red border border-slate-200 group-hover:bg-tinitz-red group-hover:text-white transition-all duration-300 shadow-sm">
                         <Mail :size="20" />
                      </div>
                      <span class="text-sm font-bold text-tinitz-navy tracking-wide">contact@tinitz.ci</span>
                   </div>
                   <div class="flex items-center gap-6 group">
                      <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-tinitz-red border border-slate-200 group-hover:bg-tinitz-red group-hover:text-white transition-all duration-300 shadow-sm">
                         <Phone :size="20" />
                      </div>
                      <span class="text-sm font-bold text-tinitz-navy tracking-wide">+225 00 00 00 000</span>
                   </div>
                   <div class="flex items-center gap-6 group">
                      <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-tinitz-red border border-slate-200 group-hover:bg-tinitz-red group-hover:text-white transition-all duration-300 shadow-sm">
                         <MapPin :size="20" />
                      </div>
                      <span class="text-sm font-bold text-tinitz-navy tracking-wide text-left">Plateau, Abidjan<br/><span class="text-slate-300 text-xs">Côte d'Ivoire</span></span>
                   </div>
                </div>
             </div>

             <!-- Trust Indicator -->
             <div class="mt-20 pt-10 border-t border-slate-100 relative z-10">
                <div class="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] text-slate-300">
                   <CheckCircle2 :size="14" class="text-tinitz-red" />
                   100% Confidentialité garantie
                </div>
             </div>
          </div>

          <!-- Right: Form Column (Modern High Contrast Light) -->
          <div class="lg:w-3/5 bg-white p-12 md:p-20 text-tinitz-navy">
             <form class="space-y-12" @submit.prevent>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div class="space-y-3">
                      <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Identité Complète</label>
                      <input 
                         type="text" 
                         class="w-full bg-slate-50 border-b-2 border-slate-100 py-4 px-2 focus:outline-none focus:border-tinitz-red transition-all font-bold text-lg placeholder:text-slate-200" 
                         placeholder="Votre nom" 
                      />
                   </div>
                   <div class="space-y-3">
                      <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Adresse Email</label>
                      <input 
                         type="email" 
                         class="w-full bg-slate-50 border-b-2 border-slate-100 py-4 px-2 focus:outline-none focus:border-tinitz-red transition-all font-bold text-lg placeholder:text-slate-200" 
                         placeholder="nom@entreprise.com" 
                      />
                   </div>
                </div>

                <div class="space-y-3">
                  <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Domaine d'Intervention</label>
                  <select class="w-full bg-slate-50 border-b-2 border-slate-100 py-4 px-2 focus:outline-none focus:border-tinitz-red transition-all font-bold text-lg text-tinitz-navy/70 appearance-none">
                     <option>Transformation Digitale</option>
                     <option>Billetterie Intelligente</option>
                     <option>Bornes Tactiles & Hardware</option>
                     <option>Autre Solution Innovante</option>
                  </select>
                </div>

                <div class="space-y-3">
                   <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Détails de votre vision</label>
                   <textarea rows="4" class="w-full bg-slate-50 border-b-2 border-slate-100 py-4 px-2 focus:outline-none focus:border-tinitz-red transition-all font-bold text-lg placeholder:text-slate-200" placeholder="Décrivez votre projet..."></textarea>
                </div>

                <div class="pt-8 flex flex-col md:flex-row items-center gap-10">
                   <button class="px-12 py-6 bg-tinitz-red text-white font-black rounded-3xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 uppercase text-[11px] tracking-[0.2em] group">
                      Propulser mon projet
                      <Send :size="18" class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </button>
                   <p class="text-[9px] font-bold text-slate-300 uppercase tracking-widest max-w-[150px]">En envoyant ce formulaire, vous acceptez notre politique de données.</p>
                </div>
             </form>
          </div>

       </div>
    </div>
  </section>
</template>

<style scoped>
/* Specific styling for professional inputs */
input::placeholder, textarea::placeholder {
  opacity: 0.5;
}
</style>
