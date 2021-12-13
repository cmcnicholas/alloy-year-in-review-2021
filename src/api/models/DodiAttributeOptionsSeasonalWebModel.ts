/* eslint-disable */

import type { DodiAttributeOptionsWebModelBase } from './DodiAttributeOptionsWebModelBase';

export type DodiAttributeOptionsSeasonalWebModel = DodiAttributeOptionsWebModelBase & {
  /**
   * The minimum valid value for the attribute
   */
  min?: string | null;
  /**
   * The maximum valid value for the attribute
   */
  max?: string | null;
  /**
   * The optional default value of this attribute
   */
  defaultValue?: string | null;
};

export namespace DodiAttributeOptionsSeasonalWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiAttributeOptionsSeasonalWebModel';
}
