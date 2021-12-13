import { State } from '../State';

export function setCustomers(
  state: State,
  customers: Array<{
    code: string;
    name: string;
  }>,
): void {
  state.customers = customers;
}
