<template>
  <div class="w-full">
    <!-- Cover: Poster -->
    <poster poster="tfm-natural-law.jpg" class="absolute z-0" />
    <!-- Cover: Content -->
    <div
      v-scroll-reveal
      class="container mx-auto min-h-screen text-center flex flex-col items-center justify-center"
    >
      <icon
        class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 stroke-current stroke-12 text-white"
        icon-name="natural-law"
        icon-color="none"
        icon-stroke-width="10px"
      >
        <icon-natural-law />
      </icon>
      <h1 class="title">
        <app-title text="Natural Law" class="pt-10 text-white" />
      </h1>
      <p
        class="text-gray-400 uppercase md:text-lg lg:text-xl tracking-wider font-bold mt-6 mb-12 block px-16"
      >
        The real Law of Attraction and how to apply it in your life
      </p>
      <AppButton
        v-scroll-to="'#episodes'"
        title="Seminar Episodes"
        class="text-sm mb-2 mt-10"
      />
      <span
        v-scroll-to="'#about'"
        class="block text-sm text-gray-500 tracking-wider cursor-pointer hover:text-primary transition-colors duration-300 ease-in-out"
        >Learn More</span
      >
    </div>

    <!-- About -->
    <div id="about" class="wrap">
      <h2 class="title">
        <app-title text-before="About The" text="Seminar" />
      </h2>

      <div v-scroll-reveal class="icon-wrap">
        <icon
          class="title-icon"
          icon-name="sg8"
          icon-color="none"
          stroke-linejoin="round"
        >
          <icon-sg8 />
        </icon>
      </div>
      <div class="content cols">
        <div v-scroll-reveal>
          <p class="emp-text leading-relaxed mb-6">
            As a whole, the body of knowledge presented in the seminar has the
            potential to save humanity from our current state of slavery.
          </p>
          <p>
            Watch, listen and learn the Real Law of Attraction and how to apply
            it in your life so you too can benefit from this great body of
            inspiring and empowering knowledge.
          </p>
        </div>

        <div v-scroll-reveal>
          <p class="emp-div">
            This seminar is free, open and required by all to self-educate,
            share and teach others.
          </p>
          <p>
            There are only two mistakes one can make on the path to truth: not
            starting and not going all the way. This seminar will take you all
            the way.
          </p>
          <p>
            Knowing and acting on the body of knowledge presented in this
            seminar is required for anyone who wishes to
            <nuxt-link to="/initiation">Join</nuxt-link> The Freemavens.
          </p>
        </div>
      </div>
    </div>

    <!-- Signatures List -->
    <div id="episodes" class="wrap">
      <h2 class="title">
        <app-title text-before="List Of" text="Episodes" />
      </h2>
      <div v-scroll-reveal class="icon-wrap">
        <icon
          class="title-icon"
          icon-name="sg20"
          icon-color="none"
          stroke-linejoin="round"
          icon-stroke-width="8"
        >
          <icon-sg20 />
        </icon>
      </div>
      <div class="content cols">
        <div v-scroll-reveal>
          <p class="emp-text leading-relaxed">
            Please learn and understand this information, and put it to
            practical use in your daily life.
          </p>
          <!-- <p class="emp-text">
            This seminar is a Tapestry. It is meant to be taken as a whole, in
            its entirety.
          </p> -->
          <p>
            It is highly recommended that you watch the full duration of the
            seminar, otherwise you will most likely not recognize the patterns
            inherent to the tapestry.
          </p>
        </div>
        <div v-scroll-reveal>
          <p class="emp-div">
            This seminar is a Tapestry. It is meant to be taken as a whole, in
            its entirety.
          </p>
          <!-- <p class="emp-div mb-8">
            Please learn and understand this information, and put it to
            practical use in your daily life.
          </p> -->
          <p>
            The multi-part presentation format is for educational and reference
            purposes.
          </p>
          <p>
            New episodes will be published as they become available. The
            original recording and the the full duration of the seminar is
            available to watch online in three parts.
          </p>
          <p>
            <a
              class="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded-md mr-2 inline-block text-gray-600 dark:text-gray-400 hover:text-white hover:bg-primary dark:hover:text-white dark:hover:bg-primary"
              href="https://www.youtube.com/watch?v=ASUHN3gNxWo"
              target="_blank"
              >Part 1</a
            >
            <a
              class="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded-md mr-2 inline-block text-gray-600 dark:text-gray-400 hover:text-white hover:bg-primary dark:hover:text-white dark:hover:bg-primary"
              href="https://www.youtube.com/watch?v=57UBuxnicOA"
              target="_blank"
              >Part 2</a
            >
            <a
              class="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded-md mr-2 inline-block text-gray-600 dark:text-gray-400 hover:text-white hover:bg-primary dark:hover:text-white dark:hover:bg-primary"
              href="https://www.youtube.com/watch?v=204aGDVa3Vw"
              target="_blank"
              >Part 3</a
            >
          </p>
        </div>
      </div>
      <Episodes class="" />
    </div>

    <!-- MP -->
    <div id="passio" class="wrap">
      <Avatar
        v-scroll-reveal
        source="mark-passio"
        class="mx-auto w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mt-28 -mb-8"
      />
      <h2 class="title">
        <app-title text-before="About The Speaker" text="Mark Passio" />
      </h2>

      <div v-scroll-reveal class="icon-wrap">
        <icon
          class="title-icon"
          icon-name="sg3"
          icon-color="none"
          stroke-linejoin="round"
          icon-stroke-width="8"
        >
          <icon-sg3 />
        </icon>
      </div>

      <div class="content cols">
        <div v-scroll-reveal>
          <p>
            Mark Passio is an independent researcher, public speaker, radio talk
            show host, conference organizer and freedom activist from
            Philadelphia, PA.
          </p>
          <p>
            Mark has undertaken the task of assembling vast amounts of research
            in the areas of metaphysics, occultism, spirituality, symbology and
            consciousness studies.
          </p>
        </div>
        <div v-scroll-reveal>
          <p class="mt-6 md:mt-0">
            In 2007, Mark began presenting this information in the form of a
            presentation series entitled
            <a href="http://www.whatonearthishappening.com" target="_blank"
              >What On Earth Is Happening</a
            >, with the intention of bringing the implications of this body of
            knowledge to greater public awareness.
          </p>
          <p>
            The full biography is available on Mark's website -<br />
            <a href="http://www.whatonearthishappening.com/bio" target="_blank"
              >What On Earth Is Happening
            </a>
          </p>
        </div>
      </div>
      <div v-scroll-reveal class="block text-center mt-6 mb-20">
        <AppButton to="/initiation" title="Get Initiated" class="text-sm" />
      </div>
    </div>

    <app-footer v-scroll-reveal />
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        firstName: null,
        lastName: null,
        country: null,
        email: null,
      },
      totalSignatures: null,
      totalCountries: null,
    }
  },
  head() {
    return {
      title: 'Natural Law',
      // bodyAttrs: {
      //   class: 'dark-theme',
      // },
    }
  },
  methods: {
    getTotalSignatures(value) {
      this.totalSignatures = value
    },
    getTotalCountries(value) {
      this.totalCountries = value
    },
  },
}
</script>
