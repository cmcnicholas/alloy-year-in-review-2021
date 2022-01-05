import { ApiOptions } from '@/api/core/ApiOptions';
import { CustomerServiceDefault } from '@/api/services/CustomerServiceDefault';
import { SessionServiceDefault } from '@/api/services/SessionServiceDefault';
import { AlloyError } from '@/models/AlloyError';
import { getApiUrl } from '@/utils/getApiUrl';
import { ActionContext } from 'vuex';
import { State } from '../State';

export async function verifySession(
  context: ActionContext<State, State>,
  token: string,
): Promise<void> {
  const options: ApiOptions = {
    baseUrl: getApiUrl(),
    defaultHeaders: {
      token,
    },
  };
  const sessionService = new SessionServiceDefault(options);
  const customerService = new CustomerServiceDefault(options);

  let customerCode: string | undefined;
  try {
    const response = await sessionService.sessionGet();

    if (!response.userSession.customerCode) {
      throw new AlloyError(1641377576, 'session is a master session, cannot shortcut');
    }

    customerCode = response.userSession.customerCode;
  } catch (e) {
    console.error(e);
    throw new AlloyError(1641377596, 'failed to get shortcut session: ' + e);
  }

  try {
    const response = await customerService.customerGet(customerCode);

    context.state.customerCode = customerCode;
    context.state.token = token;
    context.state.customerName = response.customer.name;
  } catch (e) {
    console.error(e);
    throw new AlloyError(1641377834, 'failed to get shortcut customer');
  }
}
