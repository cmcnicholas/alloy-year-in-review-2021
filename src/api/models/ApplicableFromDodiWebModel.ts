/* eslint-disable */

import type { ApplicableFromWebModelBase } from './ApplicableFromWebModelBase';

export type ApplicableFromDodiWebModel = ApplicableFromWebModelBase & {
  /**
   * The dodi Guc
   */
  code: string;
};

export namespace ApplicableFromDodiWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ApplicableFromDodiWebModel';
}
