<script setup lang="ts">
import { profile, socials } from '~/data/portfolio'
</script>

<template>
  <footer id="contact" class="border-t border-white/10 pt-24 pb-12">
    <div class="max-w-6xl mx-auto px-6">
      <RevealOnScroll>
        <StaggerText
          as="p"
          text="contact"
          prefix="$"
          :step="40"
          class="font-mono text-sm text-neutral-500 mb-8"
        />

        <StaggerText
          as="h2"
          text="Let's build something real"
          :step="30"
          class="font-display font-medium text-4xl md:text-6xl leading-[1.05] tracking-[-0.02em] text-neutral-50"
        />

        <div class="flex flex-wrap items-center gap-4 mt-10">
          <UButton size="lg" icon="i-tabler-mail" :to="`mailto:${profile.email}`">
            {{ profile.email }}
          </UButton>
          <UButton
            size="lg"
            color="neutral"
            variant="outline"
            icon="i-tabler-phone"
            :to="`tel:${profile.phone.replaceAll(' ', '')}`"
          >
            {{ profile.phone }}
          </UButton>
        </div>

        <div class="flex items-center gap-1 mt-8">
          <UTooltip v-for="social in socials" :key="social.label" :text="social.label">
            <a
              :href="social.url"
              :target="social.url.startsWith('http') ? '_blank' : undefined"
              class="p-2 text-neutral-500 hover:text-neutral-200 transition-colors"
              :aria-label="social.label"
            >
              <UIcon :name="social.icon" class="text-xl" />
            </a>
          </UTooltip>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div class="mt-20 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-neutral-600">
          <span>© {{ new Date().getFullYear() }} Mohammed Wisam — {{ profile.location }}</span>
          <span>designed & built with Nuxt and Tailwind</span>
        </div>
      </RevealOnScroll>
    </div>
  </footer>
</template>
