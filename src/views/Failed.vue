<template>
  <div class="failed">
    <h2 class="failed-title">We're sorry but something went wrong.</h2>
    <p class="failed-text">{{ failure }}</p>
    <router-link class="failed-link" to="Login">Try again?</router-link>
  </div>
</template>

<script lang="ts">
import { State } from '@/store/State';
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Calculating',
  setup: () => {
    const store = useStore<State>();
    const failure = computed(() => store.state.failed?.message ?? 'unhandled error');

    return { failure };
  },
});
</script>

<style lang="less">
.failed {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 800px;
  background: #25aae1;
  transform: translate(-50%, -50%);
  text-align: center;
  opacity: 0;

  @keyframes failed-fade {
    0% {
      opacity: 0;
      top: 40%;
    }
    100% {
      opacity: 1;
      top: 50%;
    }
  }

  animation: failed-fade 500ms ease-out 1ms 1;
  animation-fill-mode: forwards;
}

.failed-title {
  text-align: center;
  color: white;
  height: 150px;
  font-weight: 100;
  font-size: 35px;
  line-height: 150px;
  text-transform: uppercase;
}

.failed-text {
  text-align: center;
  color: white;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-transform: uppercase;
  padding-bottom: 40px;
  margin: 0 40px;
}

.failed-link {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translate(-50%, 0);
  color: #25aae1;
}
</style>
