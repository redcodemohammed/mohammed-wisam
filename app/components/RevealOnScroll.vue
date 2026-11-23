<script setup lang="ts">
withDefaults(defineProps<{ delay?: number }>(), { delay: 0 })

const el = ref<HTMLElement | null>(null)
const shown = ref(false)
const reduced = ref(false)

const { stop } = useIntersectionObserver(
  el,
  ([entry]) => {
    if (!entry?.isIntersecting) return
    shown.value = true
    stop()
  },
  { threshold: 0.1 }
)

onMounted(() => {
  reduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
})
</script>

<template>
  <div
    ref="el"
    :class="shown || reduced ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-2 blur-3xl'"
    class="transition-[opacity,transform,filter] duration-500 ease-out"
    :style="{ transitionDelay: shown && !reduced ? `${delay}ms` : '0ms' }">
    <slot />
  </div>
</template>
