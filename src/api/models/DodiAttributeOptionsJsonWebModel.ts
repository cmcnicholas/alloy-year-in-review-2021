/* eslint-disable */

import type { DodiAttributeOptionsWebModelBase } from './DodiAttributeOptionsWebModelBase';
import type { JObject } from './JObject';

export type DodiAttributeOptionsJsonWebModel = DodiAttributeOptionsWebModelBase & {
  /**
   * The optional default value of this attribute
   */
  defaultValue?: JObject | null;
};

export namespace DodiAttributeOptionsJsonWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiAttributeOptionsJsonWebModel';
}
