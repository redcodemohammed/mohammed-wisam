<script setup lang="ts">
import { experience } from '~/data/portfolio'
</script>

<template>
  <section id="experience" class="py-24">
    <div class="max-w-6xl mx-auto px-6">
      <SectionHeader title="experience" />

      <div class="border-t border-white/10">
        <RevealOnScroll v-for="job in experience" :key="job.company">
          <article class="group border-b border-white/10 py-8 grid md:grid-cols-[200px_1fr] gap-4 md:gap-10">
            <div class="font-mono text-sm text-neutral-500 pt-1 tabular-nums">
              {{ job.period }}
            </div>

            <div>
              <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 class="font-display text-2xl font-medium text-neutral-50">
                  {{ job.role }}
                </h3>
                <span class="text-lg text-neutral-400">
                  @ {{ job.company }}
                </span>
                <span class="font-mono text-xs text-neutral-600">
                  {{ [job.type, job.location].filter(Boolean).join(' · ') }}
                </span>
              </div>

              <ul class="mt-4 space-y-2">
                <li v-for="point in job.points" :key="point" class="flex gap-3 text-neutral-400 leading-relaxed">
                  <span class="text-neutral-600 shrink-0 select-none">–</span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>
          </article>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
