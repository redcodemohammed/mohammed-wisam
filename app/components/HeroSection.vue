<script setup lang="ts">
import { profile, socials } from '~/data/portfolio'

const stampShown = ref(false)
const reduced = ref(false)

onMounted(() => {
  reduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  requestAnimationFrame(() => {
    stampShown.value = true
  })
})
</script>

<template>
  <section id="top" class="relative min-h-screen flex items-center pt-24 pb-16">
    <div aria-hidden="true" class="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div
        class="absolute -bottom-10 -right-6 text-right font-display font-medium uppercase leading-[0.82] tracking-[-0.03em] text-transparent text-[24vw] lg:text-[19rem] transition-[opacity,transform] duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
        :class="stampShown || reduced ? 'opacity-100 scale-100 -rotate-6' : 'opacity-0 scale-[1.06] -rotate-3'"
        style="-webkit-text-stroke: 1px rgba(255, 255, 255, 0.08)"
      >
        Mohammed<br>Wisam
      </div>
    </div>
    <div class="relative max-w-6xl mx-auto px-6 w-full">
      <div>
        <StaggerText
          as="p"
          text="open to opportunities"
          prefix="$"
          :step="20"
          class="font-mono text-sm text-neutral-500 mb-8" />

        <StaggerText
          as="h1"
          text="Mohammed Wisam"
          :step="50"
          class="font-display font-medium leading-[1.02] tracking-[-0.02em] text-neutral-50 text-6xl md:text-8xl" />

        <StaggerText as="p" :text="profile.role" :step="14" class="text-xl md:text-2xl text-neutral-300 mt-6" />

        <RevealOnScroll :delay="700">
          <p class="text-neutral-400 mt-4 max-w-xl leading-relaxed">
            I build scalable APIs, real-time systems, and automated DevOps workflows — modernizing legacy architectures
            and shipping complete products end-to-end across TypeScript, Rust, and Nuxt / React.
          </p>
        </RevealOnScroll>

        <RevealOnScroll :delay="850">
          <div class="flex flex-wrap items-center gap-4 mt-8">
            <UButton size="lg" icon="i-tabler-file-text" :to="profile.resumeUrl" target="_blank">View Resume</UButton>
            <UButton
              size="lg"
              color="neutral"
              variant="outline"
              icon="i-tabler-brand-github"
              to="https://github.com/redcodemohammed/"
              target="_blank">
              GitHub
            </UButton>
            <div class="flex items-center gap-1 ml-2">
              <UTooltip v-for="social in socials" :key="social.label" :text="social.label">
                <a
                  :href="social.url"
                  :target="social.url.startsWith('http') ? '_blank' : undefined"
                  class="p-2 text-neutral-500 hover:text-neutral-200 transition-colors"
                  :aria-label="social.label">
                  <UIcon :name="social.icon" class="text-xl" />
                </a>
              </UTooltip>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
