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
          On behalf of The Free Mavens and We want to thank you for taking part
          in the I Do Not Consent initiative.
        </p>
        <p class="px-6">
          To learn more why it's important why it is important for us learn how
          to say no, now more than ever, please consider learning Natural Law
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
