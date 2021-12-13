import { AlloyError } from '@/models/AlloyError';
import { State } from '../State';

export function setFailed(state: State, message: AlloyError | null): void {
  state.failed = message;
}
