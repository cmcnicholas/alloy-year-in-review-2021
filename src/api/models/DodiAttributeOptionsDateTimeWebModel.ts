/* eslint-disable */

import type { DateTimePrecision } from './DateTimePrecision';
import type { DodiAttributeOptionsWebModelBase } from './DodiAttributeOptionsWebModelBase';

export type DodiAttributeOptionsDateTimeWebModel = DodiAttributeOptionsWebModelBase & {
  /**
   * The datetime attribute precision
   */
  precision?: DateTimePrecision | null;
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

export namespace DodiAttributeOptionsDateTimeWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiAttributeOptionsDateTimeWebModel';
}
