/* eslint-disable */

import type { ApplicabilitySource } from './ApplicabilitySource';
import type { DodiWithOperationsSummaryWebResponseModel } from './DodiWithOperationsSummaryWebResponseModel';

/**
 * Applicable to dodi web response
 */
export type ApplicableToDodiWebResponseModel = {
  /**
   * The applicable dodi with operations summary
   */
  dodiWithOperationsSummary?: DodiWithOperationsSummaryWebResponseModel | null;
  /**
   * How the applicability is reached
   */
  applicabilitySource?: ApplicabilitySource;
};

export namespace ApplicableToDodiWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ApplicableToDodiWebResponseModel';
}
