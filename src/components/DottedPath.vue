<template>
  <img :class="classes" src="../assets/dotted-path.svg" alt="Dotted path" aria-hidden="true" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'DottedPath',
  props: {
    flip: {
      type: Boolean,
      default: false,
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
</style>
