/* eslint-disable */

import type { ApplicableToWebModelBase } from './ApplicableToWebModelBase';

export type ApplicableToDodiWebModel = ApplicableToWebModelBase & {
  /**
   * The dodi Guc
   */
  code: string;
};

export namespace ApplicableToDodiWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ApplicableToDodiWebModel';
}
