/* eslint-disable */

import type { DodiAttributeOptionsWebModelBase } from './DodiAttributeOptionsWebModelBase';

export type DodiAttributeOptionsBooleanWebModel = DodiAttributeOptionsWebModelBase & {
  /**
   * The optional default value of this attribute
   */
  defaultValue?: boolean | null;
};

export namespace DodiAttributeOptionsBooleanWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiAttributeOptionsBooleanWebModel';
}
