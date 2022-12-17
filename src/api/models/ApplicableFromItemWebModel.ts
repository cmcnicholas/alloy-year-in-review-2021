/* eslint-disable */

import type { ApplicableFromWebModelBase } from './ApplicableFromWebModelBase';

export type ApplicableFromItemWebModel = ApplicableFromWebModelBase & {
  /**
   * The item AId
   */
  itemId: string;
};

export namespace ApplicableFromItemWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ApplicableFromItemWebModel';
}
