/* eslint-disable */

import type { JToken } from './JToken';

export type AqsJsonParameterValue = {
  name: string;
  value: JToken;
};

export namespace AqsJsonParameterValue {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AqsJsonParameterValue';
}
