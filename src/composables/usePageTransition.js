import { ref } from 'vue'

// ─── Singleton global ─────────────────────────────────────────────────────────
const isTransitioning = ref(false)
const eventName       = ref('')
const eventCode       = ref('')

export function usePageTransition() {

  /**
   * Joue la transition, puis navigue vers `to`.
   * @param {import('vue-router').Router} router
   * @param {string} to        - route cible
   * @param {{ name?: string, code?: string }} meta - infos event à afficher
   * @param {number} duration  - durée en ms (défaut 900)
   */
  async function navigate(router, to, meta = {}, duration = 900) {
    eventName.value = meta.name || ''
    eventCode.value = meta.code || ''
    isTransitioning.value = true

    await new Promise(r => setTimeout(r, duration))

    await router.push(to)

    // Petit délai pour laisser la vue s'afficher avant de masquer l'overlay
    await new Promise(r => setTimeout(r, 350))
    isTransitioning.value = false
  }

  return { isTransitioning, eventName, eventCode, navigate }
}
