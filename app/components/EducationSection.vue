<script setup lang="ts">
import { education } from '~/data/portfolio'
</script>

<template>
  <section id="education" class="py-24">
    <div class="max-w-6xl mx-auto px-6">
      <SectionHeader title="education & community" />

      <RevealOnScroll>
        <div class="grid lg:grid-cols-2 gap-6">
          <div class="border border-white/10 rounded-xl p-8 bg-white/[0.02]">
            <div class="font-mono text-xs text-neutral-500 mb-4 tabular-nums">{{ education.period }}</div>
            <h3 class="font-display text-2xl font-medium text-neutral-50">{{ education.degree }}</h3>
            <p class="text-neutral-400 mt-1">{{ education.school }}</p>
          </div>

          <div class="space-y-6">
            <div
              v-for="item in education.community"
              :key="item.title"
              class="border border-white/10 rounded-xl p-6 bg-white/[0.02]"
            >
              <div class="flex flex-wrap items-baseline gap-x-3">
                <h3 class="font-display text-lg font-medium text-neutral-50">{{ item.title }}</h3>
                <span class="font-mono text-xs text-neutral-500">{{ item.role }}</span>
              </div>
              <p class="text-neutral-400 mt-2 leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  </section>
</template>
