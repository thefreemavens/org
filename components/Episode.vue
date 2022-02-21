<template>
  <!-- Episode: Live -->
  <li v-if="duration" class="episode text-gray-700 dark:text-gray-300">
    <!-- wrapper -->
    <div
      v-scroll-reveal
      :class="[active ? 'active my-4' : 'my-1']"
      class="wrapper group"
    >
      <div class="header" @click.prevent="active = !active">
        <!-- Episode # -->
        <span
          class="duration bg-brand-400 dark:bg-brand-600 text-white text-xs flex items-center justify-center px-2 py-1 mr-6 uppercase rounded-md group-hover:bg-brand-500 dark:group-hover:bg-brand-500"
        >
          Ep. {{ eid }}
        </span>
        <!-- Episode title -->
        <span
          class="ep-title flex-1 font-serif text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white"
        >
          {{ title }}
        </span>
        <!-- Episode Duration -->
        <span
          class="duration bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-300 flex items-center justify-center px-2 pt-1 uppercase rounded-md tracking-widest group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300 ease-in-out"
          ><span class="pb-0.5">{{ duration }}</span>
        </span>
      </div>

      <!-- Hidden Knowledge -->
      <div v-show="active">
        <div class="knowledge">
          <div class="video">
            <div class="video-inner">
              <app-video :video-id="vid" />
            </div>
          </div>
          <!-- <div class="video p-2">
            <h4>Video</h4>
            <div class="">
              <img :src="slides[0]" class="" />
            </div>
          </div> -->
          <div class="types">
            <h4 class="sectitle">Notes</h4>
            <div v-for="(note, index) in notes" :key="index" class="">
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div class="py-2" v-html="note" />
            </div>
          </div>
          <div class="visuals">
            <h4 class="sectitle">Visuals</h4>
            <div class="gallery">
              <div v-for="(slide, index) in slides" :key="'a' + index" class="">
                <a :href="slide" target="_blank"
                  ><img :src="slide" class=""
                /></a>
              </div>
              <div v-for="(image, index) in images" :key="'b' + index" class="">
                <a :href="image" target="_blank" class="">
                  <img :src="image" class="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer v-show="active" @click.prevent="active = !active" />
      </div>

      <!-- Footer -->
    </div>
  </li>

  <!-- Episode: Coming Soon -->
  <li
    v-else
    v-scroll-reveal
    class="cs flex items-center px-4 py-4 my-1 rounded-md bg-gray-200 dark:bg-gray-700 opacity-50"
  >
    <span
      class="eid bg-gray-100 dark:bg-gray-600 text:gray-600 dark:text-gray-400 text-xs flex items-center justify-center px-2 py-1 mr-6 uppercase rounded-md"
    >
      Ep. {{ eid }}
    </span>
    <!-- Episode title -->
    <span class="flex-1 font-serif text-gray-400 dark:text-gray-500">
      <slot />
    </span>
    <!-- Coming Soon -->
    <span
      class="duration bg-gray-100 dark:bg-gray-600 border border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 flex items-center justify-center px-2 pt-1 uppercase rounded-md text-xs"
    >
      soon
    </span>
  </li>
</template>

<script>
export default {
  // name: 'btn'
  props: {
    eid: {
      type: Number,
      default: null,
    },
    slug: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    vid: {
      type: String,
      default: null,
    },
    duration: {
      type: String,
      default: '',
    },
    notes: {
      type: Array,
      default: null,
    },
    slides: {
      type: Array,
      default: null,
    },
    images: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      active: false,
    }
  },
}
</script>

<style lang="postcss" scoped>
.sectitle {
  @apply font-serif text-lg md:text-xl lg:text-2xl uppercase tracking-widest;
  @apply text-gray-900 dark:text-gray-100;
  @apply mt-2 mb-4 pt-6;
  @apply border-t border-gray-100 dark:border-gray-550;
}
.wrapper {
  @apply block rounded-md;
  @apply bg-gray-100 hover:bg-gray-200;
  @apply dark:bg-gray-700 dark:hover:bg-gray-600;
  @apply transition-colors duration-300 ease-in-out;
}

.header {
  @apply flex items-center px-4 py-4 cursor-pointer;
}

/* Hidden */
.knowledge {
  @apply flex content-around flex-col;
  @apply w-full px-4 pt-4 mb-4 block;
  @apply border-t border-gray-100 dark:border-gray-550;
  /* @apply border-t border-gray-100 dark:border-gray-600 dark:group-hover:border-gray-550; */
  /* @apply border-t border-gray-100 dark:hover:border-gray-550; */
  @apply transition-colors duration-300 ease-in-out;
}

.types {
  @apply flex-1;
  @apply p-2;
}
.visuals {
  @apply w-full;
  @apply p-2;
}

.gallery {
  @apply w-full;
  @apply mt-2;
  @apply grid grid-cols-3 gap-1 md:gap-2 lg:gap-4;
  & a {
    @apply block w-full rounded-md;
    @apply border-4 border-transparent hover:border-brand-500;
    @apply transition-colors duration-300 ease-in-out;
  }
}

.video {
  @apply flex items-center justify-center h-96;
  .video-inner {
    /* @apply block w-full h-full;
    max-height: 450px;
    max-width: 800px; */
  }
}

footer {
  @apply w-full px-4 py-4 block;
  @apply border-t border-gray-100 dark:border-gray-550;
}

@media (min-width: 768px) {
  .visuals {
    @apply grid-cols-4 gap-2;
  }
}

.active {
  &.wrapper {
    @apply bg-gray-200 dark:bg-gray-600;
  }
  & .ep-title {
    @apply text-gray-900 dark:text-gray-100;
  }
  .duration {
    @apply text-white bg-primary;
  }
}
</style>
