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
    <DottedPath />
    <SingleCard
      icon="icon-system-layers"
      color="#ff7300"
      header="You're using this many layers to manage your data, good job!"
      value="1231"
    />
    <DottedPath flip="true" />
    <SingleCard
      icon="icon-system-workflow"
      color="#99cf22"
      header="This many workflows are automating your day to day tasks, what a timesaver!"
      value="278"
      flip="true"
    />
    <DottedPath />
    <SingleCard
      icon="icon-resource-job"
      color="#df412c"
      header="You created more than <strong>800</strong> jobs this year and managed a total of <strong>1.2k</strong>, 👏"
    />
    <DottedPath flip="true" />
    <SingleCard
      icon="icon-inspection"
      color="#3d8fbd"
      header="A total of <strong>652</strong> inspections were started this year and you processed <strong>1.9k</strong>, what an effort!"
      flip="true"
    />
    <DottedPath />
    <SingleCard
      icon="icon-folder-files"
      color="#7f44df"
      header="Projects were managed this year, good job you have Alloy to help out!"
      value="190"
    />
    <DottedPath flip="true" />
    <SingleCard
      icon="icon-budgets"
      color="#da5aa7"
      header="You guys created <strong>390</strong> assets this year, you now manage a total of <strong>1.9k</strong> with Alloy, neat 👌"
      flip="true"
    />
    <DottedPath />
    <SingleCard
      icon="icon-import-done"
      color="#0266a7"
      header="You ran a bunch of imports this year, good stuff, keep em coming!"
      value="56"
    />
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
import { defineComponent, ref } from 'vue';
import DottedPath from '@/components/DottedPath.vue';
import SingleCard from '@/components/SingleCard.vue';
import html2canvas from 'html2canvas';

export default defineComponent({
  name: 'YearInReview',
  components: {
    DottedPath,
    SingleCard,
  },
  setup: () => {
    const customerName = ref('Warwickshire CC');
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
    return {
      root,
      shareUrl,
      customerName,
      onDownloadClick,
    };
  },
});

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
