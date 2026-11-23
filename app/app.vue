<script setup lang="ts">
import { profile } from '~/data/portfolio'

useByMo()

useSeoMeta({
  title: `${profile.name} — ${profile.role}`,
  description: profile.summary,
  ogTitle: `${profile.name} — ${profile.role}`,
  ogDescription: profile.summary,
  ogType: 'website'
})
</script>

<template>
  <UApp>
    <SiteNav />
    <ScrollMarker />
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
    </main>
    <SiteFooter />
  </UApp>
</template>
