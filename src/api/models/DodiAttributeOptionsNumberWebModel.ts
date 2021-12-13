/* eslint-disable */

import type { DodiAttributeOptionsWebModelBase } from './DodiAttributeOptionsWebModelBase';

export type DodiAttributeOptionsNumberWebModel = DodiAttributeOptionsWebModelBase & {
  /**
   * The number of decimal places to use for this attribute
   */
  decimalPlaces: number;
  /**
   * The minimum value that this attribute can have
   */
  min?: number | null;
  /**
   * The maximum value that this attribute can have
   */
  max?: number | null;
  /**
   * The optional default value of this attribute
   */
  defaultValue?: number | null;
};

export namespace DodiAttributeOptionsNumberWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiAttributeOptionsNumberWebModel';
}
