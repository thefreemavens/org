<template>
  <section class="main flex flex-col lg:flex-row">
    <div
      class="side1 w-full h-screen lg:w-6/12 lg:h-screen flex flex-col items-center justify-between text-center"
    >
      <div></div>
      <div class="">
        <nuxt-link to="/freemavenry" class="focus:bg-transparent">
          <Logomark logo-style="line-b" class="w-24 h-24" />
        </nuxt-link>
        <nuxt-link to="/freemavenry">
          <h1 class="title">
            <AppTitle text-before="The Free" text="Mavens" />
          </h1>
        </nuxt-link>
      </div>
      <h3
        class="mb-6 font-serif tracking-wide-xl uppercase text-sm text-gray-500"
      >
        Worldwide
      </h3>
    </div>

    <div
      class="side2 h-screen lg:w-6/12 flex flex-col items-center justify-between"
    >
      <div
        class="natural-law relative w-full h-3/6 flex items-center justify-center text-center"
      >
        <nuxt-link to="/natural-law" class="relative z-10 focus:bg-transparent">
          <div class="inner">
            <icon
              icon-name="natural-law"
              icon-color="none"
              icon-stroke-color="#fff"
              icon-stroke-width="12px"
              class="w-16 h-16"
            >
              <icon-natural-law />
            </icon>
            <h2
              class="font-serif tracking-widest uppercase mt-6 text-white text-lg md:text-2xl"
            >
              Natural Law
            </h2>
          </div>
        </nuxt-link>
        <nuxt-link to="/natural-law" class="image" />
      </div>

      <div
        class="relative noconsent w-full h-3/6 flex items-center justify-center text-center"
      >
        <nuxt-link
          to="/i-do-not-consent"
          class="relative z-10 focus:bg-transparent"
        >
          <div class="inner">
            <icon
              icon-name="No Consent"
              icon-color="none"
              icon-stroke-color="#fff"
              icon-stroke-width="10"
              class="w-20 h-20"
            >
              <icon-sg8 />
            </icon>
            <h2
              class="font-serif tracking-widest uppercase mt-6 text-white text-lg md:text-2xl"
            >
              #NoConsent
            </h2>
          </div>
        </nuxt-link>
        <nuxt-link to="/i-do-not-consent" class="image" />
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.image {
  @apply absolute top-0 left-0 z-0 block w-full h-full bg-center bg-cover;
}

.natural-law .image {
  background-image: url('~assets/img/home/bg-naturalLaw.jpg');
}

.noconsent .image {
  background-image: url('~assets/img/home/bg-noconsent.jpg');
}
</style>
