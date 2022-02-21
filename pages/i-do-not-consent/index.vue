<template>
  <div class="w-full">
    <!-- Cover: Poster -->
    <poster class="absolute z-0" poster="no-consent.jpg" />
    <!-- Cover: Content -->
    <div
      v-scroll-reveal
      class="container mx-auto min-h-screen text-center flex flex-col items-center justify-center"
    >
      <icon
        class="fill-current text-white transition-colors duration-300 ease-in-out h-96 w-96 md:h-128 md:w-128 lg:h-136 lg:w-136 -mt-8"
        icon-name="idnc"
        icon-color="currentColor"
      >
        <icon-idnc />
      </icon>
      <div class="inner mt-10 md:mt-6 lg:-mt-2">
        <AppButton :scroll-to="'#noconsent'" title="Sign" class="mb-2" />
        <span class="block text-xs text-gray-500 tracking-widest"
          >#IDoNotConsent</span
        >
      </div>
    </div>

    <!-- About -->
    <div id="about" class="wrap">
      <h1 class="title">
        <app-title text-before="About this" text="Initiative" />
      </h1>
      <div v-scroll-reveal class="icon-wrap">
        <icon
          class="title-icon"
          icon-name="sg3"
          icon-color="none"
          stroke-linejoin="round"
        >
          <icon-sg3 />
        </icon>
      </div>
      <div class="content cols">
        <div v-scroll-reveal>
          <p class="emp-text">Learn to say - No.</p>
          <p>
            We want to help more people realize their true power and understand
            the importance of learning how to use and express the "forbidden
            word" — NO.
          </p>
          <p class="emp-div border-l-8 border-primary">
            What could they realy do if we all just say No?
          </p>
          <p>
            It is a misconception that the ultimate power belongs to the
            government, because the greatest power has always belonged to the
            people.
          </p>
          <!-- <p class="emp">What could they realy do if we all just say No?</p> -->
          <!-- <p>
            If you're experiencing
            <span class="font-bold">FEAR - False Events (that) Appear Real</span
            >, please understand the following:
          </p> -->
        </div>

        <div v-scroll-reveal>
          <p>
            The 1% knows this, which is why they divide us. They want us to fear
            and hate one another thereby disempowering the greatest power there
            is, which is the power of the people.
          </p>
          <p>
            It is critical that we stop fighting against each other and begin
            fighting for each other because that is what it means to be human
            and that is what makes us whole and strong.
          </p>
          <p>
            Please understand that so long as we continue to allow these
            atrocities, they will continue to happen. This is a condition within
            <a
              v-scroll-to="'#naturallaw'"
              class="font-bold text-primary cursor-pointer"
              >Natural Law</a
            >
            and something we all must learn and acknowledge in order for things
            to change.
          </p>
        </div>
      </div>
    </div>

    <!-- Signatures List -->
    <div id="signees" class="wrap pb-10">
      <h2 class="title">
        <app-title text-before="Already" text="Signed by" />
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
      <div class="content">
        <NoConsentSignees
          @totalSignatures="getTotalSignatures"
          @totalCountries="getTotalCountries"
        />
      </div>
    </div>

    <!-- No Consent Form & Tool -->
    <div id="noconsent" class="wrap pb-10">
      <h2 class="title">
        <app-title text-before="Declare your" text="Non-Consent" />
      </h2>
      <div v-scroll-reveal class="icon-wrap">
        <icon
          class="title-icon"
          icon-name="sg20"
          icon-color="none"
          stroke-linejoin="round"
        >
          <icon-sg20 />
        </icon>
      </div>
      <div class="content cols">
        <div v-scroll-reveal class="mb-8 lg:mb-0">
          <div class="emp-div shadow-lg p-6">
            <div v-scroll-reveal class="mt-2 mb-8">
              <icon
                class="stroke-current text-black dark:text-white w-10 h-10"
                icon-name="natural-law"
                icon-color="none"
                icon-stroke-width="10px"
              >
                <icon-natural-law />
              </icon>
            </div>
            <span class="italic text-sm block text-left my-4 text-gray-500">
              To whom it may concern,
            </span>
            <p
              class="font-serif text-lg leading-relaxed text-gray-900 dark:text-gray-100"
            >
              I will not be masked, tested, tracked, chipped or poisoned to
              support this orchestrated lie. This will not be my new normal and
              I do not consent.
            </p>
            <!-- <p class="truth">
              I Do Not Consent.
            </p> -->
            <span class="text-sm text-gray-500 text-left block my-4"
              >Signed:</span
            >
            <span class="block text-left font-bold">
              {{ formData.firstName }} {{ formData.lastName }}
            </span>
            <span class="block text-left font-bold text-gray-500">
              {{ formData.country }}
            </span>
            <span class="block text-left mt-6 text-brand-500">
              #IDoNotConsent
            </span>
          </div>
        </div>
        <div v-scroll-reveal>
          <NoConsentForm v-model="formData" />
        </div>
      </div>
    </div>

    <!-- Artwork -->
    <div id="artwork" class="wrap pb-10">
      <h2 class="title">
        <app-title text-before="Download and share" text="Artwork" />
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
      <div
        v-scroll-reveal
        class="content flex max-w-4xl py-4 content-around mx-auto"
      >
        <a
          href="/images/no-consent/tfm-no-consent-bg-black.jpg"
          title="Artwork: White on Black"
          target="_blank"
          class="flex-1 m-2 lg:m-3"
        >
          <img
            src="/images/no-consent/thumbs/tfm-no-consent-bg-black.jpg"
            class="rounded-lg inline-flex shadow-md"
          />
        </a>
        <a
          href="/images/no-consent/tfm-no-consent-bg-color.jpg"
          title="Artwork: White on Color"
          target="_blank"
          class="flex-1 m-2 lg:m-3"
        >
          <img
            src="/images/no-consent/thumbs/tfm-no-consent-bg-color.jpg"
            class="rounded-lg inline-flex shadow-md"
          />
        </a>
        <a
          href="/images/no-consent/tfm-no-consent-bg-white.jpg"
          title="Artwork: Black on White"
          target="_blank"
          class="flex-1 m-2 lg:m-3"
        >
          <img
            src="/images/no-consent/thumbs/tfm-no-consent-bg-white.jpg"
            class="rounded-lg inline-flex shadow-md"
          />
        </a>
      </div>
    </div>

    <!-- Artwork -->
    <div id="naturallaw" class="wrap">
      <h2 class="title">
        <app-title text-before="Learn and Teach" text="Natural Law" />
      </h2>
      <div v-scroll-reveal class="icon-wrap pt-4">
        <icon
          class="title-icon"
          icon-name="natural-law"
          icon-color="none"
          icon-stroke-width="10px"
        >
          <icon-natural-law />
        </icon>
      </div>
      <div class="content cols">
        <div v-scroll-reveal>
          <p>
            To better understand why this is so important, now more than ever,
            we need to learn how to say No. You can refer to the Natural Law
            Seminar and learn the Real Law of Attraction and how you can apply
            it in your life.
          </p>
          <p>
            As a whole, the body of knowledge presented in this seminar has the
            potential to save humanity from our current state of slavery.
          </p>
        </div>

        <div v-scroll-reveal>
          <p class="emp-div">
            This seminar is free, open and required by all to self-educate,
            share and teach others.
          </p>
          <p>
            Please learn this information, and put it to practical use in your
            daily life.
          </p>
        </div>
      </div>
      <div v-scroll-reveal class="w-full block mx-auto mb-20 mt-4 text-center">
        <AppButton
          to="/natural-law"
          title="Learn Natural Law"
          class="text-sm"
        />
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
      bodyAttrs: {
        class: 'dark-theme',
      },
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
