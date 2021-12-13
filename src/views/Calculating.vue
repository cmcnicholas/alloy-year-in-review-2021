<template>
  <div class="calculating">
    <h2 class="calculating-title">{{ text }}</h2>
  </div>
</template>

<script lang="ts">
import { AlloyError } from '@/models/AlloyError';
import { State } from '@/store/State';
import { defineComponent, ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Calculating',
  setup: () => {
    const router = useRouter();
    const store = useStore<State>();

    const textValues = [
      'Fetching the best bits...',
      'Decrunching the data...',
      'Solving the Riemann Hypothesis...',
      'Interrogating items...',
      'Delivering DoDI`s...',
      'Computer goes Brrrrr...',
      'Not much longer now...',
      'Collecting calculus module...',
      'Pruning unwanted possibilities...',
    ];
    const textIndex = ref(0);
    const text = computed<string>(() => textValues[textIndex.value]);

    // update messages periodically
    setInterval(() => {
      textIndex.value = textIndex.value < textValues.length - 1 ? textIndex.value + 1 : 0;
    }, 3000);

    // watch the store for change on loaded
    watch(
      () => store.state.loaded,
      () => {
        router.push({
          path: '/year-in-review',
        });
      },
    );

    // start loading
    try {
      store.dispatch('load');
    } catch (e) {
      store.commit(
        'setFailed',
        e instanceof AlloyError ? e : new AlloyError(1639354365, 'failed to calculate data'),
      );
      router.push({
        path: '/failed',
      });
    }

    return { text };
  },
});
</script>

<style lang="less">
.calculating {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 800px;
  height: 150px;
  background: #25aae1;
  transform: translate(-50%, -50%);
  text-align: center;
  opacity: 0;

  @keyframes calculating-fade {
    0% {
      opacity: 0;
      top: 40%;
    }
    100% {
      opacity: 1;
      top: 50%;
    }
  }

  animation: calculating-fade 500ms ease-out 1ms 1;
  animation-fill-mode: forwards;
}

.calculating-title {
  text-align: center;
  color: white;
  height: 150px;
  font-weight: 100;
  font-size: 35px;
  line-height: 150px;
  text-transform: uppercase;
}
</style>
