<template>
  <section id="service-section" class="pt-20">
    <div class="text-3xl text-start w-full font-bold text-primary">Services:</div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <UCard
        class="relative before:inset-0 overflow-visible before:absolute before:rounded-full before:translate-x-10 before:bg-primary before:-z-10 before:transition-[opacity] before:duration-500 hover:before:opacity-25 before:opacity-5 before:blur-3xl">
        <div class="flex items-center gap-2">
          <UIcon name="i-tabler-code" class="text-6xl mx-auto"></UIcon>
          <div class="text-3xl text-start w-full font-bold text-primary">Web Development</div>
        </div>
        <p class="text-lg">
          I specialize in crafting web applications that are not only visually appealing but also highly functional and
          user-friendly. I'm well-versed in the latest web development technologies, including
          <a href="https://tailwindcss.com/" target="_blank" class="font-bold" style="color: rgb(0, 182, 252)">
            Tailwind
          </a>
          ,
          <a href="https://www.typescriptlang.org" target="_blank" class="font-bold" style="color: rgb(48, 102, 201)">
            Typescript
          </a>
          <a href="https://vuejs.org/" target="_blank" class="font-bold" style="color: rgb(0, 197, 135)">Vue.js</a>
          ,
          <a href="https://nuxt.com/" target="_blank" class="font-bold" style="color: rgb(0, 197, 135)">Nuxt.js</a>
          and
          <a href="https://react.dev/" target="_blank" class="font-bold" style="color: rgb(0, 182, 252)">React</a>
          on the frontend side.
        </p>
      </UCard>

      <UCard
        class="relative before:inset-0 overflow-visible before:absolute before:rounded-full before:translate-x-10 before:bg-primary before:-z-10 before:transition-[opacity] before:duration-500 hover:before:opacity-25 before:opacity-5 before:blur-3xl">
        <div class="flex items-center gap-2">
          <UIcon name="i-tabler-brush" class="text-6xl mx-auto"></UIcon>
          <div class="text-3xl text-start w-full font-bold text-primary">UI/UX Design</div>
        </div>
        <p class="text-lg">
          I'm passionate about creating seamless user experiences that are not only visually appealing but also highly
          functional. I'm well-versed in the latest UI/UX design trends and tools, including
          <a href="https://figma.com/" target="_blank" class="font-bold" style="color: rgb(122, 115, 134)">Figma</a>
          ,
          <a href="https://inkscape.org/" target="_blank" class="font-bold" style="color: rgb(61, 72, 91)">Inkscape</a>
          and more.
        </p>
      </UCard>

      <UCard
        class="relative before:inset-0 overflow-visible before:absolute before:rounded-full before:translate-x-10 before:bg-primary before:-z-10 before:transition-[opacity] before:duration-500 hover:before:opacity-25 before:opacity-5 before:blur-3xl">
        <div class="flex items-center gap-2">
          <UIcon name="i-tabler-device-mobile" class="text-6xl mx-auto"></UIcon>
          <div class="text-3xl text-start w-full font-bold text-primary">Mobile Development</div>
        </div>
        <p class="text-lg">
          When it comes to mobile app development, I prioritize user experience. I specialize in crafting visually
          appealing and highly functional mobile applications, utilizing technologies like
          <a href="https://reactnative.dev/" target="_blank" class="font-bold" style="color: rgb(0, 218, 255)">
            React Native
          </a>
          and
          <a href="https://flutter.dev/" target="_blank" class="font-bold" style="color: rgb(0, 218, 255)">Flutter</a>
          to ensure both simplicity and top-notch performance.
        </p>
      </UCard>

      <UCard
        class="relative before:inset-0 overflow-visible before:absolute before:rounded-full before:translate-x-10 before:bg-primary before:-z-10 before:transition-[opacity] before:duration-500 hover:before:opacity-25 before:opacity-5 before:blur-3xl">
        <div class="flex items-center gap-2">
          <UIcon name="i-tabler-device-gamepad-2" class="text-6xl mx-auto"></UIcon>
          <div class="text-3xl text-start w-full font-bold text-primary">Game Development</div>
        </div>
        <p class="text-lg">
          You have a simple 2D game idea? let me help you bring it to life with
          <a href="https://phaser.io/" target="_blank" class="font-bold" style="color: rgb(96, 185, 188)">Phaser</a>
          or
          <a href="https://godotengine.org/" target="_blank" class="font-bold" style="color: rgb(71, 165, 191)">
            Godot
          </a>
          making sure it will run smoothly on computers and mobile phones.
        </p>
      </UCard>
    </div>
  </section>
</template>
