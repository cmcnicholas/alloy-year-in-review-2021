<template>
  <div ref="root" class="year-in-review">
    <div class="year-in-review__customer">
      <h1 class="year-in-review__customer-header">{{ customerName }}, 2021 Alloy Year In Review</h1>
      <p class="year-in-review__customer-text">
        Here it is, your personalised review of 2021 using Alloy, scroll down and enjoy!<br />Don't
        forget you can share this page with the url:
        <a class="year-in-review__customer-share" :href="shareUrl" title="Share">{{ shareUrl }}</a>
        <br />or
        <a class="year-in-review__customer-download" href="#" @click="onDownloadClick"
          >download as an image</a
        >
      </p>
    </div>
    <section v-for="(card, index) in cards" :key="index">
      <DottedPath :flip="index % 2 === 0" />
      <SingleCard
        :icon="card.icon"
        :color="card.color"
        :header="card.header"
        :value="card.value"
        :flip="index % 2 === 0"
      />
    </section>
    <div class="year-in-review__footer">
      <h3 class="year-in-review__footer-header">
        That's all for the Alloy 2021 Year in Review {{ customerName }}, Thanks for taking part and
        have a happy new year! 👋👋👋
      </h3>
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
import { formatNumber } from '@/utils/formatNumber';
import { computed, defineComponent, ref } from 'vue';
import DottedPath from '@/components/DottedPath.vue';
import SingleCard from '@/components/SingleCard.vue';
import html2canvas from 'html2canvas';
import { Store, useStore } from 'vuex';
import { State } from '@/store/State';

export default defineComponent({
  name: 'YearInReview',
  components: {
    DottedPath,
    SingleCard,
  },
  setup: () => {
    const store = useStore<State>();

    const customerName = ref(store.state.customerName);
    const shareUrl = ref('https://yearinreview2021.alloyapp.io/#/year-in-review/sjasdFjha86asdf');
    const root = ref<HTMLElement | null>(null);
    const onDownloadClick = async (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (root.value) {
        const canvas = await html2canvas(root.value, {
          backgroundColor: '#ddf6ff',
        });
        downloadCanvasAsImage(canvas);
      }
    };

    const cards = computed(() =>
      [
        layerCardInfo(store),
        assetCardInfo(store),
        jobCardInfo(store),
        inspectionCardInfo(store),
        workflowCardInfo(store),
        projectCardInfo(store),
        importCardInfo(store),
      ].filter((card) => card !== null),
    );

    return {
      root,
      shareUrl,
      customerName,
      onDownloadClick,
      cards,
    };
  },
});

interface CardInfo {
  icon: string;
  color: string;
  header: string;
  value?: number;
}

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

function layerCardInfo(store: Store<State>): CardInfo | null {
  if (store.state.layersManaged === 0) {
    return null;
  }

  return {
    icon: 'icon-system-layers',
    color: '#ff7300',
    header: `You're using this many layers to manage your data, good job!`,
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

function downloadCanvasAsImage(canvas: HTMLCanvasElement) {
  let canvasImage = canvas.toDataURL('image/png');

  // this can be used to download any image from webpage to local disk
  let xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function () {
    let a = document.createElement('a');
    a.href = window.URL.createObjectURL(xhr.response);
    a.download = 'alloy-2021-year-in-review.png';
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

  &__footer {
    width: 800px;
    margin: 200px auto 100px;
    text-align: center;
  }

  &__footer-header {
    text-align: center;
    color: #0e4677;
    font-weight: 100;
    font-size: 35px;
    line-height: 50px;
    text-transform: uppercase;
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
