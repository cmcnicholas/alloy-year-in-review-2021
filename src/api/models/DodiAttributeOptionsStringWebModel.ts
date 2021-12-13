/* eslint-disable */

import type { DodiAttributeOptionsWebModelBase } from './DodiAttributeOptionsWebModelBase';

export type DodiAttributeOptionsStringWebModel = DodiAttributeOptionsWebModelBase & {
  /**
   * The minimum number of characters that this string must have
   */
  min?: number | null;
  /**
   * The maximum number of characters that this string must have
   */
  max?: number | null;
  /**
   * The regular expression that this attribute must match
   */
  regex?: string | null;
  /**
   * The optional default value of this attribute
   */
  defaultValue?: string | null;
};

export namespace DodiAttributeOptionsStringWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiAttributeOptionsStringWebModel';
}
