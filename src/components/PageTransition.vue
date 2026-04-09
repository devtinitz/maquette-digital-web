<script setup>
import { usePageTransition } from '../composables/usePageTransition'

const { isTransitioning, eventName, eventCode } = usePageTransition()
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-none"
      leave-active-class="transition-all duration-500 ease-in-out"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isTransitioning"
        class="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        style="background: #0a0f1e;"
      >

        <!-- ── Ambient blobs ───────────────────────────────────────── -->
        <div class="absolute inset-0 pointer-events-none">
          <div class="blob blob-1" />
          <div class="blob blob-2" />
          <div class="blob blob-3" />
        </div>

        <!-- ── Grid noise overlay ─────────────────────────────────── -->
        <div class="absolute inset-0 opacity-[0.03]"
          style="background-image: repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 60px),
                                   repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 60px);"
        />

        <!-- ── Centre content ─────────────────────────────────────── -->
        <div class="relative z-10 flex flex-col items-center gap-10 select-none text-center px-6">

          <!-- Logo mark -->
          <div class="logo-mark">
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="52" height="52" rx="14" fill="#E63946"/>
              <path d="M14 26C14 19.373 19.373 14 26 14V14C32.627 14 38 19.373 38 26V26C38 32.627 32.627 38 26 38V38" stroke="white" stroke-width="3.5" stroke-linecap="round"/>
              <circle cx="26" cy="38" r="2" fill="white"/>
            </svg>
          </div>

          <!-- Event info (si dispo) -->
          <div v-if="eventName" class="space-y-2 animate-fade-up">
            <div class="text-[10px] font-black uppercase tracking-[0.4em] text-red-400">
              Ouverture espace événement
            </div>
            <div class="text-2xl font-black text-white tracking-tight leading-tight max-w-sm">
              {{ eventName }}
            </div>
            <div v-if="eventCode" class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mt-2">
              <span class="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
              <span class="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase"># {{ eventCode }}</span>
            </div>
          </div>

          <!-- Progress bar -->
          <div class="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
            <div class="progress-bar h-full bg-gradient-to-r from-red-500 to-red-300 rounded-full" />
          </div>

          <!-- Label -->
          <div class="text-[9px] font-black uppercase tracking-[0.5em] text-white/20">
            Chargement
          </div>
        </div>

        <!-- ── Corner decorations ─────────────────────────────────── -->
        <div class="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-white/5 rounded-tl-3xl" />
        <div class="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-white/5 rounded-br-3xl" />

      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* ── Ambient blobs ─────────────────────────────────────────────── */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: pulse-blob 4s ease-in-out infinite;
}
.blob-1 {
  width: 400px; height: 400px;
  top: -100px; left: -100px;
  background: radial-gradient(circle, rgba(230, 57, 70, 0.25), transparent 70%);
  animation-delay: 0s;
}
.blob-2 {
  width: 350px; height: 350px;
  bottom: -80px; right: -80px;
  background: radial-gradient(circle, rgba(30, 60, 120, 0.35), transparent 70%);
  animation-delay: 1.5s;
}
.blob-3 {
  width: 250px; height: 250px;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(230, 57, 70, 0.12), transparent 70%);
  animation-delay: 0.8s;
}
@keyframes pulse-blob {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.15); opacity: 0.7; }
}
.blob-3 { animation: pulse-blob 3s ease-in-out infinite; }

/* ── Logo mark ────────────────────────────────────────────────── */
.logo-mark {
  animation: logo-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}
@keyframes logo-pop {
  from { transform: scale(0.6); opacity: 0; }
  to   { transform: scale(1);   opacity: 1; }
}

/* ── Fade up ──────────────────────────────────────────────────── */
.animate-fade-up {
  animation: fade-up 0.5s 0.2s ease-out both;
}
@keyframes fade-up {
  from { transform: translateY(16px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}

/* ── Progress bar ─────────────────────────────────────────────── */
.progress-bar {
  animation: progress 0.9s cubic-bezier(0.4, 0, 0.2, 1) both;
}
@keyframes progress {
  from { width: 0;    opacity: 0.6; }
  to   { width: 100%; opacity: 1;   }
}
</style>
