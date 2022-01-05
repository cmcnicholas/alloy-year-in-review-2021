<template>
  <img :class="classes" src="../assets/dotted-path.svg" alt="Dotted path" aria-hidden="true" />
  <div v-if="quote" class="dotted-path-botty">
    <Botty class="dotted-path-botty-bot" :background="background" :foreground="foreground" />
    <div class="dotted-path-botty-quote">{{ quote }}</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Botty from './Botty.vue';

export default defineComponent({
  name: 'DottedPath',
  components: {
    Botty,
  },
  props: {
    flip: {
      type: Boolean,
      default: false,
    },
    quote: {
      type: String,
      required: false,
    },
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
    const classes = computed(() => ({
      'dotted-path': true,
      'dotted-path--flip': props.flip,
    }));

    return {
      classes,
    };
  },
});
</script>

<style lang="less">
.dotted-path {
  display: block;
  width: 800px;
  margin: 0 auto;

  &--flip {
    transform: scaleX(-1);
  }
}

.dotted-path-botty {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -305px);
  display: flex;
  flex-shrink: 0;
  align-items: center;

  &-bot {
    width: 100px;
    height: 100px;
  }

  &-quote {
    max-width: 400px;
    padding: 10px 10px 10px 70px;
    background: white;
    margin-left: -50px;
    font-size: 16px;
  }
}
</style>
