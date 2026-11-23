<script setup lang="ts">
import { familiar, skillGroups } from '~/data/portfolio'
</script>

<template>
  <section id="skills" class="py-24">
    <div class="max-w-6xl mx-auto px-6">
      <SectionHeader title="skills" />

      <div class="grid md:grid-cols-2 gap-6">
        <RevealOnScroll v-for="group in skillGroups" :key="group.title">
          <div class="border border-white/10 rounded-xl p-6 bg-white/[0.02] h-full">
            <h3 class="font-mono text-sm text-neutral-500 mb-4">
              {{ group.title }}
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in group.skills"
                :key="skill"
                class="font-mono text-sm border border-white/10 rounded-md px-3 py-1 text-neutral-300"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <RevealOnScroll>
        <div class="mt-10 flex flex-wrap items-center gap-2">
          <span class="font-mono text-sm text-neutral-600 mr-2">also familiar with</span>
          <span
            v-for="skill in familiar"
            :key="skill"
            class="font-mono text-xs text-neutral-500 border border-dashed border-white/10 rounded-md px-3 py-1"
          >
            {{ skill }}
          </span>
        </div>
      </RevealOnScroll>
    </div>
  </section>
</template>
