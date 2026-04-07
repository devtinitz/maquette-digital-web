<script setup>
import { ref } from 'vue'
import { Play, Share2, Clock } from 'lucide-vue-next'

const isPlaying = ref(false)
const videoUrl = 'https://www.youtube.com/embed/AH12FJxzpXU?autoplay=1&rel=0'
</script>

<template>
  <section id="video-showcase" class="py-32 bg-white relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-6 relative z-10">
      
      <!-- Titre de la section (Style Evenium) -->
      <div class="text-center mb-16">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-tinitz-red mb-6">Expertise Vidéo</h2>
        <h3 class="text-3xl md:text-5xl font-black text-tinitz-navy leading-tight uppercase tracking-tighter">
          Propulsez votre <span class="italic text-slate-300 font-light lowercase">succès</span>.
        </h3>
      </div>

      <!-- Bloc Vidéo (Disposition Capture d'écran 16:9) -->
      <div class="relative group cursor-pointer shadow-[0_40px_100px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden bg-black aspect-video">
        
        <template v-if="!isPlaying">
          <!-- Image de couverture (Thumbnail YouTube) -->
          <img 
            src="https://img.youtube.com/vi/AH12FJxzpXU/maxresdefault.jpg" 
            class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            alt="Tinitz Video"
          />

          <!-- Overlay Darkening -->
          <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>

          <!-- Bouton Play Central (Style Capture) -->
          <button 
            @click="isPlaying = true"
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-tinitz-red text-white rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300"
          >
            <Play :size="32" fill="currentColor" />
          </button>

          <!-- Énumération des badges/boutons au bas de la vidéo (Style Capture) -->
          <div class="absolute bottom-6 left-6 flex items-center gap-4 text-white/80">
            <button class="p-2 hover:text-white transition-colors"><Share2 :size="20" /></button>
            <button class="p-2 hover:text-white transition-colors"><Clock :size="20" /></button>
          </div>

          <div class="absolute bottom-6 right-6">
            <div class="px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-white text-[10px] font-bold flex items-center gap-2">
              Watch on <span class="font-black">YouTube</span>
            </div>
          </div>

          <!-- Texte Central "SUCCESSFUL" en arrière plan -->
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div class="text-white text-7xl md:text-9xl font-black opacity-10 group-hover:opacity-20 transition-opacity tracking-tighter">
               SUCCESS
             </div>
          </div>
        </template>

        <template v-else>
          <!-- Iframe YouTube for internal playback -->
          <iframe 
             class="w-full h-full"
             :src="videoUrl" 
             frameborder="0" 
             allow="autoplay; encrypted-media; gyroscope; picture-in-picture" 
             allowfullscreen
          ></iframe>
        </template>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Transparencies and transitions */
</style>
