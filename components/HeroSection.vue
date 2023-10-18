<template>
  <!-- hero section -->
  <section id="hero-section" class="pt-20 flex flex-col-reverse items-center md:flex-row md:justify-between gap-8">
    <!-- greeting text -->
    <div>
      <div class="text-3xl">Hello, I'm</div>
      <div class="text-4xl text-primary font-bold">Mohammed Wisam</div>
      <p class="max-w-md mt-4">
        Freelancer fullstack developer, & UI Designer I build the right user interface your users want.
      </p>
      <!-- call to action -->
      <div id="cta" class="flex gap-4 mt-4">
        <UButton icon="i-tabler-eye">Viw Resume</UButton>
        <UButton icon="i-tabler-mail" variant="outline">Contact Me</UButton>
      </div>

      <!-- social media links -->
      <div class="flex justify-start items-center gap-x-4 gap-y-2 flex-wrap mt-8">
        <div class="w-full">Find me on social media</div>
        <a href="mailto:redcodemohammed@gmail.com" target="_blank" class="text-3xl text-primary hover:opacity-80">
          <UIcon name="i-tabler-mail" />
        </a>
        <a href="tel:+9647721057944" target="_blank" class="text-3xl text-primary hover:opacity-80">
          <UIcon name="i-tabler-phone" />
        </a>
        <a href="https://github.com/redcodemohammed" target="_blank" class="text-3xl text-primary hover:opacity-80">
          <UIcon name="i-tabler-brand-github" />
        </a>
        <a href="https://www.instagram.com/s127x/" target="_blank" class="text-3xl text-primary hover:opacity-80">
          <UIcon name="i-tabler-brand-instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/redcodemohammed/"
          target="_blank"
          class="text-3xl text-primary hover:opacity-80">
          <UIcon name="i-tabler-brand-linkedin" />
        </a>
        <a href="https://codepen.io/redcodemohammed" target="_blank" class="text-3xl text-primary hover:opacity-80">
          <UIcon name="i-tabler-brand-codepen" />
        </a>
        <a
          href="https://www.youtube.com/@redcodemohammed"
          target="_blank"
          class="text-3xl text-primary hover:opacity-80">
          <UIcon name="i-tabler-brand-youtube" />
        </a>
        <a
          href="https://discordapp.com/users/463723648851902465"
          target="_blank"
          class="text-3xl text-primary hover:opacity-80">
          <UIcon name="i-tabler-brand-discord" />
        </a>
        <a
          href="https://www.reddit.com/user/CharityHuman3233"
          target="_blank"
          class="text-3xl text-primary hover:opacity-80">
          <UIcon name="i-tabler-brand-reddit" />
        </a>
        <a href="https://www.twitch.tv/redcodemohammed" target="_blank" class="text-3xl text-primary hover:opacity-80">
          <UIcon name="i-tabler-brand-twitch" />
        </a>
        <a href="https://redcode9000.t.me" target="_blank" class="text-3xl text-primary hover:opacity-80">
          <UIcon name="i-tabler-brand-telegram" />
        </a>
      </div>
    </div>

    <!-- my picture -->
    <div
      class="bg-[url(/images/no-bg-gray-scale.png)] bg-no-repeat bg-center bg-cover w-[400px] h-[400px] relative rounded-md mt-8 after:absolute after:inset-0 after:rounded-full after:opacity-5 after:bg-primary after:-z-10 before:animate-pulse2 before:absolute before:inset-0 before:rounded-full before:bg-primary before:-z-10 before:blur-3xl" />
  </section>
</template>
