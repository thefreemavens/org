<template>
  <div class="w-full">
    <!-- Cover: Poster -->
    <poster poster="tfm-flags.jpg" class="absolute z-0" />
    <!-- Cover: Content -->
    <section
      v-scroll-reveal
      class="w-full min-h-screen text-center bg-cover relative flex items-center justify-center flex-col content-around"
    >
      <Logomark
        class="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white"
      />
      <app-title
        text-before="The"
        text="Freemavens"
        class="mt-6 text-white"
      />
      <AppButton
        v-scroll-to="'#join'"
        title="Be a Maven"
        class="fill-c text-sm mt-16 mb-2"
      />
      <!-- v-scroll-to="{
          el: '#freemavenry',
          duration: 1000,
          offset: -40,
        }" -->

      <span
        v-scroll-to="'#freemavenry'"
        class="block text-sm text-gray-500 tracking-wider cursor-pointer hover:text-primary transition-colors duration-300 ease-in-out"
        >Learn More</span
      >
    </section>

    <!-- About -->
    <section id="freemavenry" class="wrap">
      <h2 class="title">
        <app-title text-before="About" text="Freemavenry" />
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
        <div v-scroll-reveal>
          <p class="emp-text leading-relaxed">
            There is no greater force for changing the world than the power of
            <nuxt-link to="/initiation">unity</nuxt-link>
            through
            <nuxt-link to="/natural-law">knowledge</nuxt-link>.
          </p>

          <p>
            The Free Mavens promotes the One Great Work and provide a great body
            of knowledge for researchers, free-thinkers and truth seekers, so
            that people all over the world can gain a better understanding of
            the biggest issues faced by the world, and feed a desire to unite
            and help create a better future for all of us.
          </p>
          <p>
            Freemavenry is a non-religious, non-political, fraternal and
            benevolent organization. Its roots lie in the search for eternal
            truth and the spread of knowledge in the areas of metaphysics,
            occultism, spirituality, symbology and consciousness.
          </p>
        </div>

        <div v-scroll-reveal class="">
          <div class="emp-div">
            <p>
              <span class="emp-text emp-text--uc mt-2 mb-4">Free</span>
              The word <i class="font-bold px-0.5">Free</i> means not under the
              control or in the power of another; able to act or be done as one
              wishes.
            </p>
          </div>
          <div class="emp-div mt-6">
            <p>
              <span class="emp-text emp-text--uc mt-2 mb-4"> Maven </span>The
              word <i class="font-bold px-1">Maven</i> derives from the Yiddish
              word <i class="font-bold px-1">Meyvn</i>, meaning "one who
              understands." To be a Maven you have to more than just understand
              a topic, you have to know its ins and outs. Often Mavens are the
              people that you turn to as experts in a field. You don't become a
              Maven overnight. That kind of expertise and understanding comes
              with an accumulation of knowledge over the years.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Signatures List -->
    <section id="principles" class="wrap">
      <h2 class="title">
        <app-title text-before="Our Three Great" text="Principles" />
      </h2>
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
          <h3 class="emp-text emp-text--uc mb-2">Truth</h3>
          <p>
            Freemavenry strives for the singular and objective truth and
            requires high moral standards of all our members and friends.
          </p>
          <h3 class="emp-text emp-text--uc mb-2 mt-6">Selfless Love</h3>
          <p>
            Every true Freemaven will show tolerance and respect for the
            opinions of others and behave with kindness and understanding to his
            fellow beings.
          </p>
        </div>
        <div v-scroll-reveal>
          <h3 class="emp-text emp-text--uc mb-2">Relief</h3>
          <p>
            Freemavens are taught to practice charity, and to care, not only for
            their own members, but for the community as a whole, by charitable
            giving, voluntary effort and taking actions.
          </p>
        </div>
      </div>
    </section>

    <!-- NL -->
    <section id="join" class="wrap">
      <h2 class="title">
        <app-title text-before="Becoming a" text="Freemaven" />
      </h2>

      <div v-scroll-reveal class="icon-wrap">
        <icon class="title-icon relative" icon-name="sg8" icon-color="none">
          <icon-sg8 />
        </icon>
      </div>
      <div class="content cols">
        <div v-scroll-reveal>
          <p class="emp-text leading-relaxed">
            The Journey of a Lifetime starts here.
          </p>
          <p>
            Becoming a Free Maven is like going on a journey: from joining as an
            Entered Maven, it typically takes one or two years to become a
            Master Maven, with each of the three stages marked by a special
            acknowledgment.
          </p>
        </div>
        <div v-scroll-reveal>
          <p>
            The essential qualifications for admission are abiding by our
            <a
              v-scroll-to="'#principles'"
              href="#principles"
              class="text-primary"
              >Three Great Principles</a
            >
            and understanding the
            <nuxt-link to="/natural-law">Real Law of Attraction</nuxt-link>,
            while applying it in the day-to-day life.
          </p>
          <p class="litebox">
            Membership is open to all men and women of integrity who can fulfill
            these essential qualifications.
          </p>
        </div>
      </div>
      <div
        v-scroll-reveal
        class="max-w-xl lg:max-w-3xl center px-10 md:px-0 mx-auto mt-6 mb-20 text-center"
      >
        <AppButton
          to="/initiation"
          title="Get Initiated"
          class="fill-c text-sm"
        />
      </div>
    </section>

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

<style scoped lang="postcss">
.sg-icon {
  @apply -mt-10 mb-16 w-16 h-16 stroke-current text-black block mx-auto dark:text-white;
}
</style>
