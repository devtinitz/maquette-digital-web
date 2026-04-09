<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Mail, Lock, ArrowRight, ShieldCheck, Github, Chrome } from 'lucide-vue-next'
import Logo from '../components/Logo.vue'

const router = useRouter()
const email = ref('')
const password = ref('')
const isLoading = ref(false)
const error = ref('')

const handleLogin = async () => {
  if (!email.value || !password.value) {
    error.value = "Veuillez remplir tous les champs."
    return
  }

  isLoading.value = true
  error.value = ""

  // Simulation d'authentification (Délai de 1.5s)
  setTimeout(() => {
    isLoading.value = false
    // Stockage de l'état "connecté"
    localStorage.setItem('tinitz_user_authenticated', 'true')
    localStorage.setItem('tinitz_user_email', email.value)
    
    // Redirection vers l'espace admin
    router.push('/admin')
  }, 1500)
}
</script>

<template>
  <div class="min-h-screen bg-slate-50 flex flex-col lg:flex-row overflow-hidden font-outfit">
    <!-- Section Gauche : Visuel & Branding -->
    <div class="hidden lg:flex lg:w-1/2 bg-tinitz-navy relative items-center justify-center p-20">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] opacity-10 grayscale"></div>
      
      <div class="relative z-10 max-w-lg">
        <div class="mb-12">
          <Logo class="brightness-0 invert scale-150 origin-left" />
        </div>
        <h1 class="text-5xl md:text-6xl font-black text-white leading-tight mb-8 tracking-tighter uppercase">
          L'architecture <br/>
          <span class="text-tinitz-red italic">maîtrisée</span> de <br/>
          vos accès.
        </h1>
        <p class="text-white/50 text-xl font-medium leading-relaxed mb-12">
          Connectez-vous pour piloter vos événements, gérer vos abonnements et accéder à vos analytics en temps réel.
        </p>

        <!-- Stats rapides -->
        <div class="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
          <div>
            <div class="text-3xl font-black text-white">99.9%</div>
            <div class="text-[10px] font-black uppercase tracking-widest text-white/40">Disponibilité</div>
          </div>
          <div>
            <div class="text-3xl font-black text-white">AES-256</div>
            <div class="text-[10px] font-black uppercase tracking-widest text-white/40">Sécurité Bancaire</div>
          </div>
        </div>
      </div>

      <!-- Accent red glow -->
      <div class="absolute -bottom-20 -right-20 w-80 h-80 bg-tinitz-red/20 blur-[120px] rounded-full"></div>
    </div>

    <!-- Section Droite : Formulaire -->
    <div class="flex-1 flex items-center justify-center p-6 md:p-12 relative">
      <!-- Floating shapes for modern look -->
      <div class="absolute top-20 right-20 w-32 h-32 bg-tinitz-navy/5 blur-3xl rounded-full"></div>
      
      <div class="w-full max-w-md relative z-10">
        <div class="text-center lg:text-left mb-12">
          <div class="lg:hidden mb-10 flex justify-center">
            <Logo />
          </div>
          <h2 class="text-3xl font-black text-tinitz-navy mb-4 uppercase tracking-tighter">Bienvenue sur le Deck</h2>
          <p class="text-slate-400 font-medium">Saisissez vos identifiants pour accéder à votre console.</p>
        </div>

        <!-- Social Login -->
        <div class="grid grid-cols-2 gap-4 mb-10">
          <button class="flex items-center justify-center gap-3 py-3 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all font-bold text-sm text-tinitz-navy">
            <Chrome :size="18" />
            Google
          </button>
          <button class="flex items-center justify-center gap-3 py-3 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all font-bold text-sm text-tinitz-navy">
            <Github :size="18" />
            GitHub
          </button>
        </div>

        <div class="relative flex items-center mb-10">
          <div class="flex-grow border-t border-slate-100"></div>
          <span class="flex-shrink mx-4 text-slate-300 text-[10px] font-black uppercase tracking-[0.3em]">Ou via email</span>
          <div class="flex-grow border-t border-slate-100"></div>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <div class="space-y-2">
            <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Professionnel</label>
            <div class="relative">
              <input 
                v-model="email"
                type="email" 
                class="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-tinitz-red focus:ring-4 focus:ring-tinitz-red/5 transition-all font-bold text-tinitz-navy" 
                placeholder="john@tinitz.ci"
                required
              />
              <Mail class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" :size="20" />
            </div>
          </div>

          <div class="space-y-2">
            <div class="flex justify-between items-center ml-2">
              <label class="text-[10px] font-black uppercase tracking-widest text-slate-400">Mot de passe</label>
              <a href="#" class="text-[9px] font-black uppercase text-tinitz-red tracking-widest">Oublié ?</a>
            </div>
            <div class="relative">
              <input 
                v-model="password"
                type="password" 
                class="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-tinitz-red focus:ring-4 focus:ring-tinitz-red/5 transition-all font-bold text-tinitz-navy" 
                placeholder="••••••••"
                required
              />
              <Lock class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" :size="20" />
            </div>
          </div>

          <!-- Error Message -->
          <div v-if="error" class="bg-red-50 text-red-600 p-4 rounded-xl text-xs font-bold border border-red-100 animate-shake">
            {{ error }}
          </div>

          <button 
            type="submit" 
            :disabled="isLoading"
            class="w-full py-5 bg-tinitz-navy text-white font-black rounded-2xl shadow-2xl hover:bg-tinitz-red hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 uppercase text-[11px] tracking-[0.2em] relative overflow-hidden"
          >
            <span v-if="!isLoading" class="flex items-center gap-4">
              Se connecter au dashboard
              <ArrowRight :size="18" />
            </span>
            <span v-else class="flex items-center gap-4">
              <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Authentification...
            </span>
          </button>
        </form>

        <p class="mt-10 text-center text-slate-400 text-xs font-medium">
          Pas encore de compte ? 
          <a href="#" class="text-tinitz-navy font-black hover:text-tinitz-red underline underline-offset-4">Demander un accès</a>
        </p>
      </div>

      <!-- Trust Badge -->
      <div class="absolute bottom-8 flex items-center gap-3 text-slate-300">
        <ShieldCheck :size="16" />
        <span class="text-[9px] font-black uppercase tracking-widest">Connexion sécurisée SSL 256 bits</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}
.animate-shake {
  animation: shake 0.2s ease-in-out 0s 2;
}
</style>
