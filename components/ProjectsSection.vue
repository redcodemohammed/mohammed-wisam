<template>
  <section id="projects-section" class="pt-20 mb-20">
    <div class="text-3xl text-start w-full font-bold text-primary">Projects I built or helped building:</div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <UCard
        class="relative before:inset-0 overflow-visible before:absolute before:rounded-full before:translate-x-10 before:bg-blue-500 before:-z-10 before:transition-[opacity] before:duration-500 hover:before:opacity-25 before:opacity-5 before:blur-3xl">
        <template #header>
          <div class="flex items-center gap-2">
            <UIcon name="i-tabler-code" class="text-6xl mx-auto"></UIcon>
            <div class="text-3xl text-start w-full font-bold text-blue-500">Speetu landing page</div>
          </div>
        </template>
        <img class="h-[180px]" src="/images/speetu.jpg" />
        <p class="text-lg mt-4">A landing page for tech company specialized in making custom-tailored IT solutions.</p>
        <template #footer>
          <UButton color="blue" block icon="i-tabler-external-link" to="https://speetu.com" target="_blank">
            Preview
          </UButton>
        </template>
      </UCard>

      <UCard
        class="relative before:inset-0 overflow-visible before:absolute before:rounded-full before:translate-x-10 before:bg-albonyan-500 before:-z-10 before:transition-[opacity] before:duration-500 hover:before:opacity-25 before:opacity-5 before:blur-3xl">
        <template #header>
          <div class="flex items-center gap-2">
            <UIcon name="i-tabler-code" class="text-6xl mx-auto"></UIcon>
            <div class="text-xl text-start w-full font-bold text-albonyan-500">Albunyan Almarsous Registration form</div>
          </div>
        </template>
        <img class="h-[180px]" src="/images/albunyanalmarsous.jpg" />
        <p class="text-lg mt-4">
          A registration form for Albunyan Almarsous organization to register new members. 
        </p>
        <template #footer>
          <UButton color="albonyan" block icon="i-tabler-external-link" to="https://regt.albunyanalmarsous.org/" target="_blank">
            Preview
          </UButton>
        </template>
      </UCard>
    </div>
  </section>
</template>
