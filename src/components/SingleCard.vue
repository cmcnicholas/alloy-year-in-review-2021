<template>
  <div :class="classes">
    <span :class="iconClasses" :style="iconStyles"></span>
    <div :class="infoClasses">
      <span v-if="valueText" class="single-card__value" :style="valueStyles">{{ valueText }}</span>
      <h2 class="single-card__header" :style="headerStyles" v-html="headerText"></h2>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'SingleCard',
  props: {
    flip: {
      type: Boolean,
      required: false,
      default: false,
    },
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: false,
    },
  },
  setup: (props) => {
    const classes = computed(() => ({
      'single-card': true,
      'single-card--flip': props.flip,
    }));
    const infoClasses = computed(() => ({
      'single-card__info': true,
      'single-card__info--flip': props.flip,
    }));
    const iconClasses = computed(() => ({
      icon: true,
      'single-card__icon': true,
      [props.icon]: true,
    }));
    const iconStyles = computed(() => ({
      background: props.color,
    }));
    const headerStyles = computed(() => ({
      color: props.color,
    }));
    const valueStyles = computed(() => ({
      color: props.color,
    }));
    const headerText = computed(() => props.header);
    const valueText = computed(() => props.value);

    return {
      classes,
      infoClasses,
      iconClasses,
      iconStyles,
      headerStyles,
      valueStyles,
      headerText,
      valueText,
    };
  },
});
</script>

<style lang="less">
.single-card {
  display: flex;
  width: 1000px;
  margin: -10px auto 10px;
  align-items: center;

  &--flip {
    flex-direction: row-reverse;
  }

  &__icon {
    width: 200px;
    min-width: 200px;
    height: 200px;
    font-size: 130px;
    line-height: 200px;
    text-align: center;
    color: white;
    border-radius: 50%;
  }

  &__info {
    padding: 40px;
    display: flex;
    align-items: center;

    &--flip {
      flex-direction: row-reverse;
    }
  }

  &__header {
    text-align: center;
    color: white;
    font-weight: 100;
    font-size: 35px;
    line-height: 40px;
    text-transform: uppercase;
    margin: 0 20px;
  }

  &__value {
    text-align: center;
    color: white;
    font-weight: 700;
    font-size: 100px;
    line-height: 75px;
    text-transform: uppercase;
  }
}
</style>
