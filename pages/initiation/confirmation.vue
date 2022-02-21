<template>
  <div class="block max-w-xl mx-auto text-center">
    <!-- Header: Title -->
    <div
      class="w-full mt-4 border-gray-700 transition-colors duration-300 ease-in-out"
    >
      <Logomark logo-style="line-b" class="mt-10" />
      <app-title text="Thank you" class="pt-10 mb-4" />
    </div>
    <div class="form-inner px-4">
      <div class="w-full pt-6 mb-8 text-left mx-auto">
        <p class="emp-div">
          Congratulations!<br />
          The next step in your initiation will be emailed to you within 6 days.
        </p>
        <p class="px-6">
          We examine and review each applicant to assure a healthy growth of our
          community with individuals who strive for high moral standards and
          share a can-do attitude.
        </p>
        <p class="px-6">
          In the meantime, we invite you to join our public group where we share
          our public announcements.
        </p>
        <div class="block mx-auto text-center my-10">
          <AppButton
            v-scroll-reveal
            url="https://www.facebook.com/freemavenry/"
            class="text-xs"
            title="Visit Group"
          />
        </div>
      </div>
    </div>
    <!-- <app-footer v-scroll-reveal /> -->
  </div>
</template>
