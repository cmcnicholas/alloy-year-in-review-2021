/* eslint-disable */

import type { ImportHeaderType } from './ImportHeaderType';
import type { JObject } from './JObject';

export type ImportHeader = {
  name: string;
  type: ImportHeaderType;
  data?: JObject | null;
};

export namespace ImportHeader {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ImportHeader';
}
