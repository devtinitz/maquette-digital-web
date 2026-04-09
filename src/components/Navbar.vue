<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'
import Logo from './Logo.vue'

const router = useRouter()
const isScrolled = ref(false)
const isMenuOpen = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 10
  })
})

const navigateToLogin = () => {
  isMenuOpen.value = false
  router.push('/login')
}
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-[100] px-6 py-4">
    <div 
      :class="[
        'max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-full px-8 py-3 border',
        isScrolled 
          ? 'bg-white shadow-xl border-slate-100 scale-95' 
          : 'bg-white/95 border-white/40 shadow-sm backdrop-blur-md'
      ]"
    >
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2 group transform hover:scale-105 transition-transform duration-300">
        <Logo />
      </router-link>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center gap-10">
        <a href="/#modules" class="text-[10px] font-black uppercase tracking-[0.2em] text-tinitz-navy/70 hover:text-tinitz-red transition-colors">Solutions</a>
        <a href="/#partners" class="text-[10px] font-black uppercase tracking-[0.2em] text-tinitz-navy/70 hover:text-tinitz-red transition-colors">Réalisations</a>
        <a href="/#pricing" class="text-[10px] font-black uppercase tracking-[0.2em] text-tinitz-navy/70 hover:text-tinitz-red transition-colors">Tarifs</a>
        <a href="/#contact" class="text-[10px] font-black uppercase tracking-[0.2em] text-tinitz-navy/70 hover:text-tinitz-red transition-colors">Contact</a>
      </div>

      <!-- Actions -->
      <div class="hidden md:flex items-center gap-6">
        <button 
          @click="navigateToLogin"
          class="text-[10px] font-black uppercase tracking-widest text-tinitz-navy hover:text-tinitz-red transition-colors"
        >
          Connexion
        </button>
        <button class="px-6 py-2.5 bg-tinitz-navy text-white rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-tinitz-red shadow-lg active:scale-95 transition-all">
          Démo
        </button>
      </div>

      <!-- Mobile Toggle -->
      <button class="md:hidden text-tinitz-navy" @click="isMenuOpen = !isMenuOpen">
        <Menu v-if="!isMenuOpen" :size="20" />
        <X v-else :size="20" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div v-if="isMenuOpen" class="absolute top-24 left-6 right-6 bg-white rounded-3xl p-8 shadow-2xl md:hidden border border-slate-100">
        <div class="flex flex-col gap-6 text-center">
          <a href="/#modules" class="text-xs font-black uppercase tracking-widest text-tinitz-navy" @click="isMenuOpen = false">Solutions</a>
          <a href="/#partners" class="text-xs font-black uppercase tracking-widest text-tinitz-navy" @click="isMenuOpen = false">Réalisations</a>
          <a href="/#pricing" class="text-xs font-black uppercase tracking-widest text-tinitz-navy" @click="isMenuOpen = false">Tarifs</a>
          <button @click="navigateToLogin" class="bg-tinitz-navy text-white w-full py-4 rounded-full font-black text-xs uppercase tracking-[0.2em]">Se Connecter</button>
        </div>
      </div>
    </Transition>
  </nav>
</template>
