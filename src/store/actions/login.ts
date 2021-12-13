import { ActionContext } from 'vuex';
import { State } from '../State';

export interface LoginPayload {
  email: string;
  password: string;
}

export async function login(
  context: ActionContext<State, State>,
  payload: LoginPayload,
): Promise<void> {
  await payload.email;
  await payload.password;

  context.state.token = 'xxx';
}
