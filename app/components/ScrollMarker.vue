<script setup lang="ts">
const sections = [
  { id: 'top', label: 'intro' },
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'projects' },
  { id: 'education', label: 'education' },
  { id: 'contact', label: 'contact' }
]

const active = ref('top')
const progress = ref(0)
const shown = ref(false)
const reduced = ref(false)

onMounted(() => {
  reduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  requestAnimationFrame(() => {
    shown.value = true
  })

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) active.value = entry.target.id
      }
    },
    { rootMargin: '-45% 0px -50% 0px' }
  )

  for (const s of sections) {
    const el = document.getElementById(s.id)
    if (el) observer.observe(el)
  }

  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    progress.value = max > 0 ? Math.min(1, window.scrollY / max) : 1
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) {
      active.value = 'contact'
    }
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  onUnmounted(() => {
    observer.disconnect()
    window.removeEventListener('scroll', onScroll)
  })
})
</script>

<template>
  <nav
    aria-label="Section progress"
    class="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:block transition-opacity duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
    :class="shown || reduced ? 'opacity-100' : 'opacity-0'"
  >
    <div class="relative flex flex-col gap-4 py-1">
      <div aria-hidden="true" class="absolute left-0 inset-y-0 w-px bg-white/10" />
      <div
        aria-hidden="true"
        class="absolute left-0 inset-y-0 w-px bg-accent-400 origin-top will-change-transform"
        :style="{ transform: `scaleY(${progress})` }"
      />

      <UTooltip
        v-for="s in sections"
        :key="s.id"
        :text="s.label"
        :content="{ side: 'right', sideOffset: 12 }"
      >
        <a :href="`#${s.id}`" :aria-label="s.label" class="group flex h-3 items-center">
          <span
            class="block h-px transition-[width,background-color] duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
            :class="active === s.id ? 'w-7 bg-accent-400' : 'w-4 bg-white/25 group-hover:bg-white/50'"
          />
        </a>
      </UTooltip>
    </div>
  </nav>
</template>
