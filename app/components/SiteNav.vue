<script setup lang="ts">
import { profile } from '~/data/portfolio'

const links = [
  { label: 'About', to: '#about' },
  { label: 'Experience', to: '#experience' },
  { label: 'Skills', to: '#skills' },
  { label: 'Projects', to: '#projects' },
  { label: 'Contact', to: '#contact' }
]

const open = ref(false)
const shown = ref(false)
const reduced = ref(false)

onMounted(() => {
  reduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  requestAnimationFrame(() => {
    shown.value = true
  })
})
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 border-b border-white/10 transition-[opacity,transform] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
    :class="shown || reduced ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'"
  >
    <svg aria-hidden="true" class="absolute size-0">
      <defs>
        <filter id="liquid-nav">
          <feTurbulence type="fractalNoise" baseFrequency="0.008 0.03" numOctaves="2" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" xChannelSelector="R" yChannelSelector="G" result="disp" />
          <feComponentTransfer in="disp">
            <feFuncR type="linear" slope="0.3" />
            <feFuncG type="linear" slope="0.3" />
            <feFuncB type="linear" slope="0.3" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
    <div aria-hidden="true" class="absolute inset-0 bg-ink/50 backdrop-blur-[3px]" />
    <div aria-hidden="true" class="absolute inset-0 liquid-glass" />
    <div aria-hidden="true" class="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-black/20 pointer-events-none" />

    <div class="relative max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#top" class="font-display font-medium text-lg text-neutral-50">
        mw<span class="text-accent-400">.</span>
      </a>

      <nav class="hidden md:flex items-center gap-8">
        <a
          v-for="link in links"
          :key="link.to"
          :href="link.to"
          class="text-sm text-neutral-400 hover:text-neutral-50 transition-colors"
        >
          {{ link.label }}
        </a>
        <UButton
          size="sm"
          icon="i-tabler-file-text"
          :to="profile.resumeUrl"
          target="_blank"
        >
          Resume
        </UButton>
      </nav>

      <div class="md:hidden flex items-center gap-2">
        <UButton
          size="sm"
          icon="i-tabler-file-text"
          :to="profile.resumeUrl"
          target="_blank"
        >
          Resume
        </UButton>
        <UButton
          color="neutral"
          variant="ghost"
          icon="i-tabler-menu-2"
          aria-label="Menu"
          @click="open = !open"
        />
      </div>
    </div>

    <nav v-if="open" class="relative md:hidden border-t border-white/10 bg-ink/95 px-6 py-4 flex flex-col gap-4">
      <a
        v-for="link in links"
        :key="link.to"
        :href="link.to"
        class="text-sm text-neutral-300 hover:text-neutral-50 transition-colors"
        @click="open = false"
      >
        {{ link.label }}
      </a>
    </nav>
  </header>
</template>
