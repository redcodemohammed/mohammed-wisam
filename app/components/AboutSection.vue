<script setup lang="ts">
import { profile } from '~/data/portfolio'
</script>

<template>
  <section id="about" class="py-24">
    <div class="max-w-6xl mx-auto px-6">
      <SectionHeader title="about" />

      <RevealOnScroll>
        <div class="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
          <p class="text-xl md:text-2xl leading-relaxed text-neutral-300">
            I'm a full-stack engineer who cares about the whole lifecycle — from database schema
            to deploy pipeline. Lately that means <span class="text-neutral-50">Rust and TypeScript</span>
            backends, <span class="text-neutral-50">Nuxt</span> frontends, and infrastructure that
            ships with a git tag instead of a prayer. I dig into the unglamorous problems —
            hung transactions, 15 MB image payloads, dev servers running in production — and fix
            them for good.
          </p>

          <div class="border border-white/10 rounded-xl p-8 bg-white/[0.02]">
            <div class="font-display font-medium text-6xl text-neutral-50 tabular-nums">{{ profile.yearsOfExperience }}</div>
            <div class="text-sm text-neutral-500 mt-2">years of hands-on experience</div>
            <div class="h-px bg-white/10 my-6" />
            <dl class="font-mono text-sm space-y-2">
              <div class="flex gap-4">
                <dt class="text-neutral-600 w-20 shrink-0">currently</dt>
                <dd class="text-neutral-300">Software Engineer @ Al Qaseh</dd>
              </div>
              <div class="flex gap-4">
                <dt class="text-neutral-600 w-20 shrink-0">based in</dt>
                <dd class="text-neutral-300">Karbala, Iraq</dd>
              </div>
              <div class="flex gap-4">
                <dt class="text-neutral-600 w-20 shrink-0">building</dt>
                <dd class="text-neutral-300">ShopZoon (AstraIQ)</dd>
              </div>
            </dl>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  </section>
</template>
