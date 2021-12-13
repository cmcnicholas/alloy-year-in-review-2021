<template>
  <div class="customers">
    <h2 class="customers__header">Looks like you have multiple customers, pick one</h2>
    <select v-model="customersModel" class="customers__list">
      <option v-for="customer in customers" :key="customer.code" :value="customer.code">
        {{ customer.name }}
      </option>
    </select>
    <button type="button" class="customers__button" @click="onLoginClick">Do it!</button>
  </div>
</template>

<script lang="ts">
import { AlloyError } from '@/models/AlloyError';
import { LoginCustomerPayload } from '@/store/actions/loginCustomer';
import { State } from '@/store/State';
import { computed, defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Customers',
  setup: () => {
    const router = useRouter();
    const store = useStore<State>();

    if (!store.state.token) {
      router.push({
        path: '/login',
      });
      return;
    }

    const customersModel = ref('');
    const customers = computed(() => store.state.customers);

    const onLoginClick = async () => {
      if (!customersModel.value || !store.state.token) {
        return;
      }

      try {
        const payload: LoginCustomerPayload = {
          customerName:
            store.state.customers.find((customer) => customer.code === customersModel.value)
              ?.name ?? 'unknown',
          customerCode: customersModel.value,
          token: store.state.token,
        };
        await store.dispatch('loginCustomer', payload);
        router.push({
          path: '/calculating',
        });
      } catch (e) {
        store.commit(
          'setFailed',
          e instanceof AlloyError ? e : new AlloyError(1639363165, 'failed to login to customer'),
        );
        router.push({
          path: '/failed',
        });
        return;
      }
    };

    return {
      customersModel,
      customers,
      onLoginClick,
    };
  },
});
</script>

<style lang="less">
.customers {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 800px;
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

.customers__header {
  text-align: center;
  color: white;
  font-weight: 100;
  font-size: 35px;
  line-height: 50px;
  margin: 40px;
  text-transform: uppercase;
}

.customers__list {
  width: 620px;
  display: block;
  margin-left: 90px;
  border: 0 none;
  background: #ddf6ff;

  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 25px;
  line-height: 35px;
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

.customers__button {
  width: 620px;
  display: block;
  margin: 20px 0 40px 90px;
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
