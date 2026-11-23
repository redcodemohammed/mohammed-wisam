<script setup lang="ts">
import { projects } from '~/data/portfolio'
</script>

<template>
  <section id="projects" class="py-24">
    <div class="max-w-6xl mx-auto px-6">
      <SectionHeader title="projects" />

      <div class="grid md:grid-cols-2 gap-6">
        <RevealOnScroll v-for="project in projects" :key="project.name">
          <article class="group border border-white/10 rounded-xl p-8 bg-white/[0.02] h-full flex flex-col hover:border-white/20 transition-colors">
            <div class="flex items-start justify-between gap-4">
              <h3 class="font-display text-2xl font-medium text-neutral-50">
                {{ project.name }}
              </h3>
              <a
                v-if="project.url"
                :href="project.url"
                target="_blank"
                class="text-neutral-500 hover:text-neutral-50 transition-colors mt-1"
                :aria-label="`Open ${project.name}`"
              >
                <UIcon name="i-tabler-arrow-up-right" class="text-xl" />
              </a>
            </div>

            <div class="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 font-mono text-xs text-neutral-500">
              <span>{{ project.context }}</span>
              <span class="text-neutral-700">·</span>
              <span>{{ project.period }}</span>
            </div>

            <p class="text-neutral-400 mt-3 text-sm">{{ project.status }}</p>

            <p class="text-neutral-400 mt-4 leading-relaxed flex-1">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 mt-6">
              <span
                v-for="tech in project.stack"
                :key="tech"
                class="font-mono text-xs border border-white/10 rounded-md px-2 py-0.5 text-neutral-500"
              >
                {{ tech }}
              </span>
            </div>
          </article>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
