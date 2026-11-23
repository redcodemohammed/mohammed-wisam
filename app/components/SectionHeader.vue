<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="flex items-center gap-4 mb-12">
    <StaggerText
      as="h2"
      :text="title"
      prefix="$"
      :step="40"
      class="font-mono text-sm text-neutral-500"
    />
    <div class="h-px flex-1 bg-white/10" />
  </div>
</template>
