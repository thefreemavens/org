<template>
  <svg
    :class="logoStyle"
    :width="width"
    :height="height"
    :aria-labelledby="logoStyle"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    role="presentation"
  >
    <title :id="logoStyle" lang="en">The Free Mavens Logo</title>
    <g transform="translate(34.000000, 1.000000)">
      <!-- <polygon
        class="background"
        fill="currentColor"
        points="18 373.001628 222.5 491 427 373.001628 427 136.998372 222.5 19 18 136.998372"
      /> -->
      <path
        class="outline"
        fill="currentColor"
        d="M223.850336,1.70989265 C225.069114,1.00631403 226.570733,1.00629438 227.78953,1.7098411 L444.960356,127.071072 C446.179134,127.774608 446.929934,129.074805 446.929934,130.481887 L446.929934,381.210913 C446.929934,382.61799 446.179139,383.918183 444.960368,384.621721 L227.802672,509.976388 C227.185538,510.33263 226.503504,510.505472 225.826543,510.504125 C225.149581,510.505472 224.467547,510.33263 223.850413,509.976388 L6.69271775,384.621721 C5.14820835,383.255695 4.71658617,382.280418 4.71658617,381.204349 L4.71658617,130.488451 C4.71658617,129.41238 5.14820925,128.437103 5.84779915,127.726249 C6.09503968,127.47378 223.850336,1.70989265 223.850336,1.70989265 Z M25.5545862,371.453934 L225.826543,487.058276 L426.098499,371.453934 L426.098499,140.238866 L225.826543,24.6345235 L25.5545862,140.238866 L25.5545862,371.453934 Z"
      />
      <path
        class="m"
        fill="currentColor"
        d="M134.141424,326.004841 C134.141424,327.411978 133.390567,328.712216 132.171714,329.415733 L119.21854,336.892245 C116.592453,338.408011 113.30999,336.513108 113.30999,333.481354 L113.30999,208.120123 C113.30999,205.088324 116.592541,203.193427 119.218628,204.709282 L227.807323,267.389897 C230.433859,268.906012 230.433394,272.696591 227.806487,274.212062 L214.846748,281.688575 C213.628153,282.391586 212.127062,282.391415 210.908628,281.688126 L134.141424,237.377573 L134.141424,326.004841 Z M332.449126,159.841672 C335.075213,158.325816 338.357764,160.220713 338.357764,163.252513 L338.357764,333.479385 C338.357764,336.511139 335.0753,338.406042 332.449213,336.890276 L319.496039,329.413763 C318.277186,328.710247 317.526329,327.410009 317.526329,326.002872 L317.526329,192.503795 L227.806123,244.29693 C227.207287,244.642622 226.527986,244.824615 225.836503,244.824615 C225.138463,244.824615 224.459172,244.642627 223.860341,244.296943 L115.27821,181.616328 C114.059457,180.912785 113.308677,179.612602 113.308677,178.205538 L113.308677,163.252513 C113.308677,160.220668 116.591317,158.325776 119.217404,159.841723 L225.829997,221.385395 L332.449126,159.841672 Z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    logoStyle: {
      type: String,
      default: null,
    },
    width: {
      type: [Number, String],
      default: 66,
    },
    height: {
      type: [Number, String],
      default: 66,
    },
  },
}
</script>

<style scoped lang="postcss">
svg {
  @apply inline-block align-baseline text-center;
  margin-bottom: -2px;
}

/* .line {
  .background {
    fill: none;
  }
  .outline {
    @apply text-primary;
  }
  .m {
    @apply text-primary;
  }
} */

/* .line-b { */
  /* .background {
    fill: none;
  } */
  /* .outline {
    @apply text-white;
    @apply transition-colors duration-1000 ease-in-out;
  } */
  /* .m {
    @apply text-white;
    @apply transition-colors duration-1000 ease-in-out;
  } */
  /* &--white {
    .background {
      fill: none;
    }
    .outline {
      @apply text-white;
    }
    .m {
      @apply text-white;
    }
  } */
/* } */

/* .line-w {
  .background {
    fill: none;
  }
  .outline {
    @apply text-white;
  }
  .m {
    @apply text-white;
  }
} */

/* .fill {
  .background {
    @apply text-brand-500;
  }
  .outline {
    @apply text-brand-500;
  }
  .m {
    @apply text-white;
  }
} */
/* .fill-b {
  .background {
    @apply text-black;
  }
  .outline {
    @apply text-black;
  }
  .m {
    @apply text-white;
  }
} */

/* .fill-w {
  .background {
    @apply text-white;
  }
  .outline {
    @apply text-white;
  }
  .m {
    @apply text-black;
  }
} */

/* .dark {
  & .line-b {
    .background {
      fill: none;
    }
    .outline {
      @apply text-white;
      @apply transition-colors duration-1000 ease-in-out;
    }
    .m {
      @apply text-white;
      @apply transition-colors duration-1000 ease-in-out;
    }
  }
} */
</style>
