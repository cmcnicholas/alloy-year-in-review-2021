/* eslint-disable */

import type { AlloyUserWebModel } from './AlloyUserWebModel';

export type AlloyCurrentUserWebModel = AlloyUserWebModel & {
  /**
   * Optional customer user api key of this logged in user
   */
  apiKey?: string | null;
};

export namespace AlloyCurrentUserWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AlloyCurrentUserWebModel';
}
