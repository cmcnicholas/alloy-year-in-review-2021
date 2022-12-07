<template>
  <div ref="root" class="year-in-review">
    <div class="year-in-review__customer">
      <img
        class="year-in-review__logo"
        src="../assets/alloy.png"
        alt="2022 Year in review - Alloy"
        title="2022 Year in review - Alloy"
        width="300"
      />
      <h1 class="year-in-review__customer-header">{{ customerName }}, 2022 Alloy Year In Review</h1>
      <p class="year-in-review__customer-text">
        Here it is, your personalised review of 2022 using Alloy, scroll down and enjoy!<br />Don't
        forget you can share this page with the url:
        <a class="year-in-review__customer-share" :href="shareUrl" title="Share">{{ shareUrl }}</a>
        <br />or
        <a class="year-in-review__customer-download" href="#" @click="onDownloadClick"
          >download as an image</a
        >
      </p>
    </div>
    <section v-for="(card, index) in cards" :key="index">
      <DottedPath
        :flip="index % 2 === 0"
        :quote="card.quote"
        :foreground="card.foreground"
        :background="card.background"
      />
      <SingleCard
        :icon="card.icon"
        :color="card.color"
        :header="card.header"
        :value="card.value"
        :flip="index % 2 === 0"
      />
    </section>
    <div v-if="cards.length === 0" class="year-in-review__not-found">
      Sorry, it doesn't look like you've used Alloy much during 2022, but you can do better for
      2022!
    </div>
    <div class="year-in-review__footer">
      <div class="year-in-review__footer-container">
        <Botty />
        <h3 class="year-in-review__footer-header">
          That's all for the Alloy 2022 Year in Review {{ customerName }}, Thanks for taking part
          and have a happy new year! 👋👋👋
        </h3>
      </div>
      <p class="year-in-review__footer-text">
        All data used in this infographic is processed using your Alloy session, no sensitive
        information is requested and only data visible to the account processor is used. If
        permissions are configured then data between users may vary depending on the visibility of
        information they have.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import DottedPath from '@/components/DottedPath.vue';
import SingleCard from '@/components/SingleCard.vue';
import Botty from '@/components/Botty.vue';
import { AlloyError } from '@/models/AlloyError';
import { State } from '@/store/State';
import { formatNumber } from '@/utils/formatNumber';
import html2canvas from 'html2canvas';
import { computed, defineComponent, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Store, useStore } from 'vuex';
import confetti from 'canvas-confetti';
import { roundNumber } from '@/utils/roundNumber';

export default defineComponent({
  name: 'YearInReview',
  components: {
    DottedPath,
    SingleCard,
    Botty,
  },
  setup: () => {
    const router = useRouter();
    const route = useRoute();
    const store = useStore<State>();

    // if we haven't loaded (we came from deep link) then load the data
    if (!store.state.loaded) {
      try {
        // it will either pass or throw, everything should be reactive
        store.commit('setFromShare', route.params.share);
      } catch (e) {
        store.commit(
          'setFailed',
          e instanceof AlloyError
            ? e
            : new AlloyError(1639389386, 'failed to deserialise from share'),
        );
        router.push({
          path: '/failed',
        });
        return;
      }
    }

    const customerName = ref(store.state.customerName);
    const shareUrl = ref(window.location.href);
    const root = ref<HTMLElement | null>(null);
    const onDownloadClick = async (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (root.value) {
        try {
          root.value.classList.add('animation-off');
          const canvas = await html2canvas(root.value, {
            backgroundColor: '#ddf6ff',
          });
          downloadCanvasAsImage(canvas);
        } finally {
          root.value.classList.remove('animation-off');
        }
      }
    };

    const cards = computed(() => {
      const data = [
        workflowSecondsCardInfo(store),
        designsCardInfo(store),
        assetCardInfo(store),
        jobCardInfo(store),
        inspectionCardInfo(store),
        defectCardInfo(store),
        layerCardInfo(store),
        workflowCardInfo(store),
        projectCardInfo(store),
        importCardInfo(store),
      ].filter((card) => card !== null);

      // add quotes
      data.forEach((card, index) => {
        if (card && index % 2 === 1) {
          const i = Math.floor(index / 2);
          card.quote = quotes[i]?.quote;
          card.foreground = quotes[i]?.foreground;
          card.background = quotes[i]?.background;
        }
      });

      return data;
    });

    return {
      root,
      shareUrl,
      customerName,
      onDownloadClick,
      cards,
    };
  },
  mounted: () => {
    setTimeout(() => {
      confetti({
        angle: 0,
        spread: 90,
        origin: {
          x: 0,
          y: 0,
        },
      });
      confetti({
        angle: 180,
        spread: 90,
        origin: {
          x: 1,
          y: 0,
        },
      });
    }, 200);
  },
});

interface CardInfo {
  icon: string;
  color: string;
  header: string;
  value?: number;
  quote?: string;
  foreground?: string;
  background?: string;
}

const quotes = [
  {
    quote: '"You can do anything you set your mind to." - Benjabot Franklin',
    foreground: 'front-smile',
    background: 'buildings',
  },
  {
    quote: `Did you know the Babylonians invented "New Years"? Yet they didn't build Alloy!`,
    foreground: 'right-smile',
    background: '',
  },
  {
    quote: '"Pleasure in the job puts perfection in the work." - Arisbotle',
    foreground: 'left-big-smile',
    background: 'buildings',
  },
  {
    quote: '"I\'m going to make him an offer he can\'t refuse." - The Botfather',
    foreground: 'left-smirk',
    background: '',
  },
  {
    quote: '"The only way to do great work is to love what you do." - Steve Bots',
    foreground: 'right-smile',
    background: '',
  },
  {
    quote: '"Wherever you go, go with all your heart." - Botfucius',
    foreground: 'right-big-smile',
    background: 'buildings',
  },
  {
    quote:
      '"Life is like riding a bicycle. To keep your balance, you must keep moving." - Albot Einstein',
    foreground: 'front-smile',
    background: '',
  },
  {
    quote: '"Time toooo, say goodbyeee" (to 2022) - Andrea Botcelli',
    foreground: 'right-smirk',
    background: 'buildings',
  },
  {
    quote: '"I know some things, I can, you know, do math and stuff." - Harry Botter',
    foreground: 'left-big-smile',
    background: '',
  },
  {
    quote: 'Did you know only two mammals like spicy food? Us and the humble Tree Shrew 🐁',
    foreground: 'right-big-smile',
    background: '',
  },
];

function assetCardInfo(store: Store<State>): CardInfo | null {
  if (store.state.assetsCreated === 0 && store.state.assetsManaged === 0) {
    return null;
  }

  let header = '';
  if (store.state.assetsCreated === 0) {
    header = `You didn't create any assets this year 😢, but you still manage a total of <strong>${formatNumber(
      store.state.assetsManaged,
    )}</strong> with Alloy, neat 👌`;
  } else {
    header = `You guys created <strong>${formatNumber(
      store.state.assetsCreated,
    )}</strong> assets this year, you now manage a total of <strong>${formatNumber(
      store.state.assetsManaged,
    )}</strong> with Alloy, neat 👌`;
  }

  return {
    icon: 'icon-budgets',
    color: '#da5aa7',
    header,
  };
}

function importCardInfo(store: Store<State>): CardInfo | null {
  if (store.state.importsProcessed === 0) {
    return null;
  }

  return {
    icon: 'icon-import-done',
    color: '#0266a7',
    header: `You ran a bunch of imports this year, good stuff, keep em coming!`,
    value: store.state.importsProcessed,
  };
}

function projectCardInfo(store: Store<State>): CardInfo | null {
  if (store.state.projectsCreated === 0) {
    return null;
  }

  return {
    icon: 'icon-folder-files',
    color: '#7f44df',
    header: `Projects were created this year, good job you have Alloy to help out!`,
    value: store.state.projectsCreated,
  };
}

function workflowCardInfo(store: Store<State>): CardInfo | null {
  if (store.state.workflowsActive === 0) {
    return null;
  }

  return {
    icon: 'icon-system-workflow',
    color: '#99cf22',
    header: `Workflows are automating your day to day tasks, what a timesaver!`,
    value: store.state.workflowsActive,
  };
}

function designsCardInfo(store: Store<State>): CardInfo | null {
  if (store.state.designsCustom === 0) {
    return null;
  }

  return {
    icon: 'icon-system-designer',
    color: '#70C5BC',
    header: `You've made <strong>${store.state.designsCustom}</strong> custom designs to model your data! Great stuff 🦾`,
  };
}

function workflowSecondsCardInfo(store: Store<State>): CardInfo | null {
  const OneHour = 60 * 60;
  const OneDay = 24 * OneHour;
  const OneWeek = 7 * OneDay;

  if (store.state.workflowSeconds < OneHour * 2.5) {
    return null;
  }

  let value = roundNumber(store.state.workflowSeconds / OneHour, 1);
  let comparison = roundNumber(store.state.workflowSeconds / (121 * 60), 1);
  let header = `Our robots spent <strong>${value} hours</strong> running your Workflows! That's like watching RoboCop ${comparison} times 🤖`;

  if (store.state.workflowSeconds >= OneWeek * 2.5) {
    value = roundNumber(store.state.workflowSeconds / OneWeek, 2);
    comparison = roundNumber(store.state.workflowSeconds / ((15 * 24 + 22) * 60 * 60), 1);
    header = `Our robots spent <strong>${value} weeks</strong> running your Workflows! That's like Titan orbiting Saturn ${comparison} times 🌖`;
  } else if (store.state.workflowSeconds >= OneDay * 2.5) {
    value = roundNumber(store.state.workflowSeconds / OneDay, 2);
    comparison = roundNumber(store.state.workflowSeconds / (2.5 * 24 * 60 * 60), 1);
    header = `Our robots spent <strong>${value} days</strong> running your Workflows! That's like travelling to the moon ${comparison} times 🚀`;
  }

  return {
    icon: 'icon-system-workflow',
    color: '#4955A5',
    header,
  };
}

function layerCardInfo(store: Store<State>): CardInfo | null {
  if (store.state.layersManaged === 0) {
    return null;
  }

  return {
    icon: 'icon-system-layers',
    color: '#ff7300',
    header: `You're using this many layers to visualise your data, good job!`,
    value: store.state.layersManaged,
  };
}

function inspectionCardInfo(store: Store<State>): CardInfo | null {
  if (store.state.inspectionsCreated === 0 && store.state.inspectionsCompleted === 0) {
    return null;
  }

  let header = '';
  if (store.state.inspectionsCreated === 0) {
    header = `You didn't start any new inspections this year but you processed <strong>${formatNumber(
      store.state.inspectionsCompleted,
    )}</strong>, what an effort!`;
  } else if (store.state.inspectionsCompleted === 0) {
    header = `A total of <strong>${formatNumber(
      store.state.inspectionsCreated,
    )}</strong> inspections were started this year, what an effort!`;
  } else {
    header = `A total of <strong>${formatNumber(
      store.state.inspectionsCreated,
    )}</strong> inspections were started this year and you processed <strong>${formatNumber(
      store.state.inspectionsCompleted,
    )}</strong>, what an effort!`;
  }

  return {
    icon: 'icon-inspection',
    color: '#3d8fbd',
    header,
  };
}

function jobCardInfo(store: Store<State>): CardInfo | null {
  if (store.state.jobsCreated === 0 && store.state.jobsCompleted === 0) {
    return null;
  }

  let header = '';
  if (store.state.jobsCreated === 0) {
    header = `Looks like you didn't start any new jobs this year, but you managed <strong>${formatNumber(
      store.state.jobsCompleted,
    )}</strong>, 👏`;
  } else if (store.state.jobsCompleted === 0) {
    header = `You created more than <strong>${formatNumber(
      store.state.jobsCreated,
    )}</strong> jobs this year, 👏`;
  } else {
    header = `You created more than <strong>${formatNumber(
      store.state.jobsCreated,
    )}</strong> jobs this year and managed a total of <strong>${formatNumber(
      store.state.jobsCompleted,
    )}</strong>, 👏`;
  }

  return {
    icon: 'icon-resource-job',
    color: '#df412c',
    header,
  };
}

function defectCardInfo(store: Store<State>): CardInfo | null {
  if (store.state.defectsRaised === 0) {
    return null;
  }

  const header = `<strong>${formatNumber(
    store.state.defectsRaised,
  )}</strong> defects were identified this year, 🎉`;

  return {
    icon: 'icon-defect',
    color: '#e74444',
    header,
  };
}

function downloadCanvasAsImage(canvas: HTMLCanvasElement) {
  let canvasImage = canvas.toDataURL('image/png');

  // this can be used to download any image from webpage to local disk
  let xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function () {
    let a = document.createElement('a');
    a.href = window.URL.createObjectURL(xhr.response);
    a.download = 'alloy-2022-year-in-review.png';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };
  xhr.open('GET', canvasImage); // This is to download the canvas Image
  xhr.send();
}
</script>

<style lang="less">
.year-in-review {
  &__logo {
    margin-bottom: 10px;
  }

  &__customer {
    width: 800px;
    padding: 40px;
    margin: 100px auto 0;
    background: #0e4677;
    color: white;
    text-align: center;
  }

  &__customer-header {
    font-weight: 100;
    font-size: 70px;
    line-height: 100px;
    text-transform: uppercase;
  }

  &__customer-text {
    margin: 40px 0 20px;
    line-height: 25px;
  }

  &__customer-share {
    color: #84cde8;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 20px;

    &:hover,
    &:active {
      color: #84cde8;
    }
  }

  &__customer-download {
    color: #84cde8;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 20px;

    &:hover,
    &:active {
      color: #84cde8;
    }
  }

  &__not-found {
    width: 800px;
    margin: 200px auto 100px;
    text-align: center;

    text-align: center;
    color: #0e4677;
    font-weight: 100;
    font-size: 35px;
    line-height: 50px;
    text-transform: uppercase;
  }

  &__footer {
    width: 800px;
    margin: 200px auto 100px;
    text-align: center;
  }

  &__footer-container {
    display: flex;
    flex-shrink: 0;
  }

  &__footer-header {
    text-align: center;
    color: #0e4677;
    font-weight: 100;
    font-size: 35px;
    line-height: 50px;
    text-transform: uppercase;
    width: 600px;
  }

  &__footer-text {
    text-align: center;
    color: gray;
    font-size: 16px;
    line-height: 20px;
    margin-top: 50px;
  }
}
</style>
