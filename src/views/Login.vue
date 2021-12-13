<template>
  <div class="login">
    <h2 class="login-title">Login so we can see your year in review</h2>
    <input
      class="login-entry login-entry--email"
      type="email"
      :name="emailName"
      :autocomplete="emailName"
      placeholder="Email"
    />
    <input
      class="login-entry login-entry--password"
      type="password"
      :name="passwordName"
      :autocomplete="passwordName"
      placeholder="Password"
    />
    <button type="button" class="login-button" @click="onLoginClick">Let's Go!</button>
  </div>
</template>

<script lang="ts">
import { AlloyError } from '@/models/AlloyError';
import { LoginPayload } from '@/store/actions/login';
import { State } from '@/store/State';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Login',
  setup: () => {
    const router = useRouter();
    const store = useStore<State>();

    const onLoginClick = async () => {
      const payload: LoginPayload = {
        email: '',
        password: '',
      };

      try {
        await store.dispatch('login', payload);
        router.push({
          path: '/calculating',
        });
      } catch (e) {
        store.commit(
          'setFailed',
          e instanceof AlloyError ? e : new AlloyError(1639354250, 'failed to login'),
        );
        router.push({
          path: '/failed',
        });
      }
    };

    const emailName = ref(`login-email-${new Date().getTime()}-${Math.random()}`);
    const passwordName = ref(`login-password-${new Date().getTime()}-${Math.random()}`);

    return {
      emailName,
      passwordName,
      onLoginClick,
    };
  },
});
</script>

<style lang="less">
.login {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 800px;
  height: 400px;
  background: #25aae1;
  transform: translate(-50%, -50%);
  text-align: center;
  opacity: 0;

  @keyframes login-fade {
    0% {
      opacity: 0;
      top: 40%;
    }
    100% {
      opacity: 1;
      top: 50%;
    }
  }

  animation: login-fade 500ms ease-out 1ms 1;
  animation-fill-mode: forwards;
}

.login-title {
  text-align: center;
  color: white;
  height: 150px;
  font-weight: 100;
  font-size: 35px;
  line-height: 150px;
  text-transform: uppercase;
}

.login-entry {
  width: 600px;
  display: block;
  margin-left: 90px;
  border: 0 none;
  background: #ddf6ff;

  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 25px;
  line-height: 35px;
  height: 35px;
  padding: 10px 10px;

  color: #25aae1;

  &:focus {
    outline: none;
    border: 0 none;
  }

  &--email {
    margin-bottom: 20px;
  }

  &--password {
    margin-bottom: 20px;
  }
}

.login-button {
  width: 620px;
  display: block;
  margin-left: 90px;
  border: 0 none;
  background: #0e4677;

  font-family: 'Open Sans', sans-serif;
  font-weight: 100;
  font-size: 25px;
  line-height: 35px;
  height: 55px;
  padding: 10px 10px;

  cursor: pointer;
  color: white;

  &:hover {
    background: lighten(#0e4677, 4%);
  }

  &:focus {
    background: lighten(#0e4677, 8%);
    outline: 0 none;
  }

  &:active {
    background: lighten(#0e4677, 12%);
  }
}
</style>
