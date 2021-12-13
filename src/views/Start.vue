<template>
  <div class="start">
    <h1 class="start-title" aria-label="2021 Year in review - Alloy">2021 Year in review</h1>
    <img
      class="start-logo"
      src="../assets/alloy.svg"
      alt="2021 Year in review - Alloy"
      title="2021 Year in review - Alloy"
      width="300"
    />
    <router-link class="start-link" to="Login">Let's get started!</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Start',
  setup: () => {
    return {};
  },
});
</script>

<style lang="less">
.start {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 800px;
  height: 290px;
  background: #25aae1;
  transform: translate(-50%, -50%);
  text-align: center;
  opacity: 0;

  @keyframes start-fade {
    0% {
      opacity: 0;
      top: 40%;
    }
    100% {
      opacity: 1;
      top: 50%;
    }
  }

  animation: start-fade 500ms ease-out 500ms 1;
  animation-fill-mode: forwards;
}

.start-title {
  text-align: center;
  color: white;
  height: 150px;
  font-weight: 100;
  font-size: 70px;
  line-height: 150px;
  text-transform: uppercase;
}

.start-link {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translate(-50%, 0);
  color: #25aae1;
}
</style>
