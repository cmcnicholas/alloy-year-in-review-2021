import { ApiOptions } from '@/api/core/ApiOptions';
import { CustomerServiceDefault } from '@/api/services/CustomerServiceDefault';
import { SessionServiceDefault } from '@/api/services/SessionServiceDefault';
import { AlloyError } from '@/models/AlloyError';
import { getApiName } from '@/utils/getApiName';
import { getApiUrl } from '@/utils/getApiUrl';
import { ActionContext } from 'vuex';
import { State } from '../State';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResult {
  token: string;
  customers: Array<{
    name: string;
    code: string;
  }>;
}

export async function login(
  context: ActionContext<State, State>,
  payload: LoginPayload,
): Promise<LoginResult> {
  const options: ApiOptions = {
    baseUrl: getApiUrl(getApiName()),
  };
  const sessionService = new SessionServiceDefault(options);
  const customerService = new CustomerServiceDefault(options);

  try {
    const response = await sessionService.sessionCreate({
      email: payload.email,
      password: payload.password,
    });
    context.state.token = response.token;
  } catch (e) {
    console.error(e);
    throw new AlloyError(1639361092, 'failed to get master session');
  }

  // set header now we have it
  options.defaultHeaders = {
    token: context.state.token,
  };

  try {
    const response = await customerService.customerList(undefined, undefined, 1, 100);

    return {
      token: context.state.token,
      customers: response.results.map((customer) => ({
        code: customer.code,
        name: customer.name,
      })),
    };
  } catch (e) {
    console.error(e);
    throw new AlloyError(1639361850, 'failed to get customers');
  }
}
