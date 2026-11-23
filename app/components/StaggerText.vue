<script setup lang="ts">
const props = withDefaults(defineProps<{
  text: string
  as?: string
  prefix?: string
  step?: number
}>(), { as: 'span', step: 30 })

const GLYPHS = '!<>-_\\/[]{}=+*^?#$%&@'
const SETTLE_MS = 160

const el = ref<HTMLElement | null>(null)
const shown = ref(false)
const reduced = ref(false)

useIntersectionObserver(
  el,
  ([entry]) => {
    if (!entry) return
    if (entry.isIntersecting) {
      shown.value = true
    } else if (entry.boundingClientRect.top >= window.innerHeight) {
      shown.value = false
    }
  },
  { threshold: 0.2 }
)

onMounted(() => {
  reduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
})

const words = computed(() => {
  let i = 0
  return props.text.split(' ').map(word => ({
    letters: [...word].map(ch => ({ ch, index: i, delay: i++ * props.step }))
  }))
})

const display = ref<Record<number, string>>({})
let timer: ReturnType<typeof setInterval> | undefined

const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)]!

watch(shown, (isShown) => {
  if (timer) {
    clearInterval(timer)
    timer = undefined
  }
  if (!isShown || reduced.value) {
    display.value = {}
    return
  }
  const start = performance.now()
  timer = setInterval(() => {
    const elapsed = performance.now() - start
    const next: Record<number, string> = {}
    let settled = true
    for (const word of words.value) {
      for (const letter of word.letters) {
        if (elapsed < letter.delay + SETTLE_MS) {
          next[letter.index] = randomGlyph()
          settled = false
        }
      }
    }
    display.value = next
    if (settled) {
      clearInterval(timer)
      timer = undefined
      display.value = {}
    }
  }, 40)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <component :is="as" ref="el" :aria-label="text">
    <span v-if="prefix" aria-hidden="true" class="text-accent-400">{{ prefix }}{{ ' ' }}</span>
    <span aria-hidden="true">
      <template v-for="(word, wi) in words" :key="wi">
        <span class="inline-block whitespace-nowrap">
          <span
            v-for="letter in word.letters"
            :key="letter.index"
            class="inline-block transition-[opacity,transform,filter] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
            :class="shown || reduced ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-3 blur-xl'"
            :style="{ transitionDelay: shown && !reduced ? `${letter.delay}ms` : '0ms' }"
          >{{ display[letter.index] ?? letter.ch }}</span>
        </span>
        <template v-if="wi < words.length - 1">{{ ' ' }}</template>
      </template>
    </span>
  </component>
</template>
