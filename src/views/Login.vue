<template>
  <div class="login">
    <h2 class="login-title">Login so we can see your year in review</h2>
    <p class="login-subtitle">
      You are currently connected to <strong>{{ server }}</strong
      >, you can switch to
      <template v-if="uk"><a :href="uk">UK</a>, </template>
      <template v-if="au"><a :href="au">AU</a>, </template>
      <template v-if="staging"><a :href="staging">Staging</a></template>
    </p>
    <input
      v-model="emailModel"
      class="login-entry login-entry--email"
      type="email"
      :name="emailName"
      :autocomplete="emailName"
      placeholder="Email"
    />
    <input
      v-model="passwordModel"
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
import { LoginPayload, LoginResult } from '@/store/actions/login';
import { LoginCustomerPayload } from '@/store/actions/loginCustomer';
import { State } from '@/store/State';
import { getApiName } from '@/utils/getApiName';
import { getApiUrl } from '@/utils/getApiUrl';
import { switchApi } from '@/utils/switchApi';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Login',
  setup: () => {
    const router = useRouter();
    const store = useStore<State>();

    const emailModel = ref('');
    const passwordModel = ref('');

    const onLoginClick = async () => {
      let result: LoginResult;

      try {
        const payload: LoginPayload = {
          email: emailModel.value,
          password: passwordModel.value,
        };

        result = await store.dispatch('login', payload);
      } catch (e) {
        store.commit(
          'setFailed',
          e instanceof AlloyError ? e : new AlloyError(1639354250, 'failed to login'),
        );
        router.push({
          path: '/failed',
        });
        return;
      }

      // special case for no customers
      if (result.customers.length === 0) {
        store.commit(
          'setFailed',
          new AlloyError(1639362405, 'your account does not have access to any customers'),
        );
        router.push({
          path: '/failed',
        });
      }

      // if we have 1 customer then go ahead
      if (result.customers.length === 1) {
        try {
          const payload: LoginCustomerPayload = {
            customerName: result.customers[0].name,
            customerCode: result.customers[0].name,
            token: result.token,
          };
          await store.dispatch('loginCustomer', payload);
          router.push({
            path: '/calculating',
          });
        } catch (e) {
          store.commit(
            'setFailed',
            e instanceof AlloyError ? e : new AlloyError(1639362548, 'failed to login to customer'),
          );
          router.push({
            path: '/failed',
          });
          return;
        }
      }

      // otherwise we have more than 1 customer and we need to let the user choose
      store.commit('setCustomers', result.customers);
      router.push({
        path: '/customers',
      });
    };

    const emailName = ref(`login-email-${new Date().getTime()}-${Math.random()}`);
    const passwordName = ref(`login-password-${new Date().getTime()}-${Math.random()}`);

    const apiName = getApiName();
    const server = ref(apiName);
    const au = ref(apiName !== 'au' ? switchApi(getApiUrl('au')) : null);
    const uk = ref(apiName !== 'uk' ? switchApi(getApiUrl('uk')) : null);
    const staging = ref(apiName !== 'staging' ? switchApi(getApiUrl('staging')) : null);

    return {
      emailModel,
      passwordModel,
      emailName,
      passwordName,
      onLoginClick,
      server,
      au,
      uk,
      staging,
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
  height: 460px;
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

.login-subtitle {
  color: white;
  margin: 0 0 40px;

  a {
    color: white !important;
  }
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
