<template>
  <div class="start">
    <h1 class="start-title" aria-label="2022 Year in review - Alloy">2022 Year in review</h1>
    <img
      class="start-logo"
      src="../assets/alloy.svg"
      alt="2022 Year in review - Alloy"
      title="2022 Year in review - Alloy"
      width="300"
    />
    <div class="start-bottom">
      <Botty class="start-bottom-botty" foreground="left-big-smile" />
      <router-link v-if="!checking" class="start-link" to="Login">Let's get started!</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Botty from '@/components/Botty.vue';
import { State } from '@/store/State';
import confetti from 'canvas-confetti';
import { defineComponent, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Start',
  components: {
    Botty,
  },
  setup: () => {
    const router = useRouter();
    const route = useRoute();
    const store = useStore<State>();
    const checking = ref(false);

    async function checkDeepLinkToken(token: string): Promise<void> {
      checking.value = true;

      try {
        await store.dispatch('verifySession', token);
        router.push({
          path: `/calculating`,
        });
      } catch (e) {
        console.log('failed to shortcut session token', e);
      } finally {
        checking.value = false;
      }
    }

    // check the deep linking
    if (route.query.token && typeof route.query.token === 'string') {
      checkDeepLinkToken(route.query.token);
    }

    return {
      checking,
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

.start-bottom {
  position: absolute;
  width: 100%;
  height: 100px;
  left: 0;
  bottom: -120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.start-link {
  color: #25aae1;
  padding: 20px;
  background: white;
  margin-left: -5px;
  text-decoration: none;
}

.start-bottom-botty {
  width: 100px;
  height: 100px;
}
</style>
