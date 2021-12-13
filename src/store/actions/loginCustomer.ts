import { ApiOptions } from '@/api/core/ApiOptions';
import { SessionServiceDefault } from '@/api/services/SessionServiceDefault';
import { AlloyError } from '@/models/AlloyError';
import { getApiUrl } from '@/utils/getApiUrl';
import { ActionContext } from 'vuex';
import { State } from '../State';

export interface LoginCustomerPayload {
  token: string;
  customerName: string;
  customerCode: string;
}

export async function loginCustomer(
  context: ActionContext<State, State>,
  payload: LoginCustomerPayload,
): Promise<void> {
  const options: ApiOptions = {
    baseUrl: getApiUrl(),
    defaultHeaders: {
      token: payload.token,
    },
  };
  const sessionService = new SessionServiceDefault(options);

  let token: string;

  try {
    const response = await sessionService.sessionCreate2(payload.customerCode);
    token = response.token;
  } catch (e) {
    console.error(e);
    throw new AlloyError(1639362020, 'failed to get customer session');
  }

  // update state
  context.state.customerName = payload.customerName;
  context.state.customerCode = payload.customerCode;
  context.state.token = token;
}
