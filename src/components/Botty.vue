<template>
  <div class="botty">
    <div class="botty__container">
      <img
        v-if="bg === 'buildings'"
        class="botty__background"
        src="../assets/bot/secondary-blue-bg-buildings.svg"
        alt="Botty background"
      />
      <img
        v-else
        class="botty__background"
        src="../assets/bot/grey-bg-pattern.svg"
        alt="Botty background"
      />

      <img
        v-if="fg === 'front-big-smile'"
        class="botty__foreground"
        src="../assets/bot/alloybot-front-big-smile.svg"
        alt="Botty"
      />
      <img
        v-else-if="fg === 'front-smile'"
        class="botty__foreground"
        src="../assets/bot/alloybot-front-smile.svg"
        alt="Botty"
      />
      <img
        v-else-if="fg === 'front-smirk'"
        class="botty__foreground"
        src="../assets/bot/alloybot-front-smirk.svg"
        alt="Botty"
      />
      <img
        v-else-if="fg === 'left-big-smile'"
        class="botty__foreground"
        src="../assets/bot/alloybot-offset-left-big-smile.svg"
        alt="Botty"
      />
      <img
        v-else-if="fg === 'left-smile'"
        class="botty__foreground"
        src="../assets/bot/alloybot-offset-left-smile.svg"
        alt="Botty"
      />
      <img
        v-else-if="fg === 'left-smirk'"
        class="botty__foreground"
        src="../assets/bot/alloybot-offset-left-smirk.svg"
        alt="Botty"
      />
      <img
        v-else-if="fg === 'right-big-smile'"
        class="botty__foreground"
        src="../assets/bot/alloybot-offset-right-big-smile.svg"
        alt="Botty"
      />
      <img
        v-else-if="fg === 'right-smile'"
        class="botty__foreground"
        src="../assets/bot/alloybot-offset-right-smile.svg"
        alt="Botty"
      />
      <img
        v-else-if="fg === 'right-smirk'"
        class="botty__foreground"
        src="../assets/bot/alloybot-offset-right-smirk.svg"
        alt="Botty"
      />
      <img
        v-else
        class="botty__foreground"
        src="../assets/bot/alloybot-offset-left-smirk.svg"
        alt="Botty"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Botty',
  props: {
    background: {
      type: String,
      required: false,
    },
    foreground: {
      type: String,
      required: false,
    },
  },
  setup: (props) => {
    const bg = ref(props.background);
    const fg = ref(props.foreground);

    return {
      bg,
      fg,
    };
  },
});
</script>

<style lang="less">
.botty {
  width: 200px;
  height: 200px;

  &__container {
    @keyframes animation-albot {
      0% {
        transform: scale(0);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }

    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    animation-name: animation-albot;
    animation-duration: 250ms;
    animation-delay: 250ms;
    animation-timing-function: ease;
    animation-fill-mode: both;
    animation-iteration-count: 1;
  }

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__foreground {
    @keyframes animation-albot-foreground {
      0% {
        transform: translateY(100%);
      }
      100% {
        transform: translateY(0);
      }
    }

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation-name: animation-albot-foreground;
    animation-duration: 500ms;
    animation-delay: 1s;
    animation-timing-function: ease;
    animation-fill-mode: both;
    animation-iteration-count: 1;
  }
}
</style>
