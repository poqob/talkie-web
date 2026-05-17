import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal(options = {}) {
  const el = ref(null)
  let observer = null

  onMounted(() => {
    if (!el.value) return
    const { threshold = 0.1, rootMargin = '0px 0px -60px 0px' } = options
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.value.classList.add('revealed')
          observer.unobserve(el.value)
        }
      },
      { threshold, rootMargin }
    )
    observer.observe(el.value)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { el }
}
