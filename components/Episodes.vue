<template>
  <ol class="lg:max-w-5xl mx-auto mt-10">
    <Episode
      v-for="episode in episodes"
      :key="episode.eid"
      :eid="episode.eid"
      :slug="episode.slug"
      :title="episode.title"
      :vid="episode.vid"
      :duration="episode.duration"
      :notes="episode.notes"
      :slides="episode.slides"
      :images="episode.images"
    />

    <!-- Coming Soon -->
    <Episode :eid="6"> Belief Systems </Episode>
    <Episode :eid="7"> Requirements </Episode>
    <Episode :eid="8"> The role of Knowledge </Episode>
    <Episode :eid="9"> Occult Knowledge </Episode>
    <Episode :eid="10"> Nescience vs. Ignorance </Episode>
    <Episode :eid="11"> Why Are We Losing Freedom? </Episode>
    <Episode :eid="12"> The Master Key </Episode>
    <Episode :eid="13"> Problem Solving </Episode>
    <Episode :eid="14"> What Truth is </Episode>
    <Episode :eid="15"> Truth vs. Perception </Episode>
  </ol>
</template>

<script>
export default {
  data() {
    return {
      episodes: [
        {
          eid: 1,
          slug: 'before-we-begin',
          title: 'Before We Begin',
          vid: 'q8sQf-QtXbY',
          duration: '3:33',
          notes: [
            `You will not be seeing or hearing anything new here today. As the old saying goes –`,
            `<span class="font-serif">There is nothing new under the sun.</span>`,
            `<span class="bg-brand-500 text-white px-4 py-4 rounded-lg my-4 block">This means that <b>Truth is singular and eternal</b>. Truth has always been here and it will always be here. It is our perception that must be aligned with the Truth.</span>`,
          ],
          slides: [
            '/images/natural-law/01/freemavens-natural-law-01-before-we-begin-01.jpg',
          ],
          images: [],
        },
        {
          eid: 2,
          slug: 'presentation-style',
          title: 'Presentation Style',
          vid: 'qBvzoNi0d6c',
          duration: '3:35',
          notes: [
            `My presentation style has been described by some as extremely intense, and at times, even combative.`,
            `Some of you are very likely to be angered by things you will hear me say during this seminar. So be it.`,
            `The fact of the matter is that Truth itself, by its very nature, is Belligerent, because it wages war against all forms of deception and mind control.`,
            `I do NOT present this information to be liked, to be popular, to make money, or to make friends.`,
            `To be honest, I don’t even want to do this with my time, as I already know, understand, and live this information.`,
            `I do this only because I recognize that in a time of such overwhelming ignorance of this critical information, the fact that I do understand it, places me in a position of moral obligation to speak this information to others, in an attempt to help others understand and live it as well.`,
          ],
          slides: [
            '/images/natural-law/02/freemavens-natural-law-02-presentation-style-01.jpg',
            '/images/natural-law/02/freemavens-natural-law-02-presentation-style-02.jpg',
            '/images/natural-law/02/freemavens-natural-law-02-presentation-style-03.jpg',
            '/images/natural-law/02/freemavens-natural-law-02-presentation-style-04.jpg',
          ],
          images: [],
        },
        {
          eid: 3,
          slug: 'prerequisites',
          title: 'Prerequisites',
          vid: 'RxBXdMfBE1A',
          duration: '4:52',
          notes: [
            `Every person who wishes to take away real value from this presentation should make a deliberate and conscious effort to do two things:`,
            `<ol class="list-outside list-decimal pl-6"><li class="p-2">Set aside your perceptions of me as the presenter. Including:  How you think I look, dress, or sound. Paying attention to such trivialities will distract your mental focus away from the information being presented. This information is what is important.</li><li class="p-2">Be consciously aware of any impulses you may have to reject information presented solely based upon your initial emotional response to the information being presented.</li></ol>`,
            `<span class="bg-brand-500 text-white px-4 py-4 rounded-lg my-4 block">It is a Logical Fallacy to gauge the veracity of any information based upon how you <b>FEEL</b> when first seeing or hearing the information.</span>`,
            `This seminar is a Tapestry. It is meant to be taken as a whole, in its entirety. I highly recommend that you stay for the duration of the seminar, otherwise you will most likely not recognize the patterns inherent to the tapestry, and will have wasted your time.`,
          ],
          slides: [
            '/images/natural-law/03/freemavens-natural-law-prerequisites-01.jpg',
            '/images/natural-law/03/freemavens-natural-law-prerequisites-02.jpg',
            '/images/natural-law/03/freemavens-natural-law-prerequisites-03.jpg',
            '/images/natural-law/03/freemavens-natural-law-prerequisites-04.jpg',
          ],
          images: [],
        },
        {
          eid: 4,
          slug: 'the-real-natural-law',
          title: 'The Real Natural Law',
          vid: 'c-2rPiG-V8o',
          duration: '1:33',
          notes: [],
          slides: [
            '/images/natural-law/04/freemavens-real-natural-law-01.jpg',
            // '',
          ],
          images: [],
        },
        {
          eid: 5,
          slug: 'teachability',
          title: 'Teachability',
          vid: '14di-kiGBEg',
          duration: '5:08',
          notes: [
            `An Individuall's Teachability, or their ability to learn by way of being taught by someone else, is extremely dependent upon the open-mindedness or closed-mindedness of the individual being taught.`,
            `Low Teachability derives from arrogance and rigid skepticism, but also from naiveté and gullibility.`,
            `High Teachability derives from a balance between healthy skepticism and an open-minded willingness to learn and change.`,
            `Human beings should consider with great care their sources for information.`,
            `By refusing to present certain information, and by influencing people to dismiss certain information as unimportant or unnecessary to consider, many modern institutions seek to control human perceptions and therefore to limit what human beings may come to understand.`,
          ],
          slides: [
            '/images/natural-law/05/freemavens-natural-law-teachability-01.jpg',
            '/images/natural-law/05/freemavens-natural-law-teachability-02.jpg',
            '/images/natural-law/05/freemavens-natural-law-teachability-03.jpg',
          ],
          images: [
            '/images/natural-law/05/freemavens-natural-law-teachability-bell-curve-01.jpg',
            '/images/natural-law/05/freemavens-natural-law-teachability-bell-curve-02.jpg',
            '/images/natural-law/05/freemavens-natural-law-teachability-bell-curve-03.jpg',
            '/images/natural-law/05/freemavens-natural-law-teachability-bell-curve-04.jpg',
            '/images/natural-law/05/freemavens-natural-law-teachability-bell-curve-05.jpg',
            '/images/natural-law/05/freemavens-natural-law-teachability-bell-curve-06.jpg',
            '/images/natural-law/05/freemavens-natural-law-teachability-bell-curve-07.jpg',
            '/images/natural-law/05/freemavens-natural-law-teachability-bell-curve-08.jpg',
          ],
        },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
/* h */
</style>
