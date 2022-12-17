/* eslint-disable */

import type { ApplicableFromResultWebModelBase } from './ApplicableFromResultWebModelBase';
import type { DodiWithOperationsSummaryWebResponseModel } from './DodiWithOperationsSummaryWebResponseModel';

export type ApplicableFromDodiWebResponseModel = ApplicableFromResultWebModelBase & {
  /**
   * The applicable dodi with operations summary
   */
  dodiWithOperationsSummary?: DodiWithOperationsSummaryWebResponseModel | null;
};

export namespace ApplicableFromDodiWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ApplicableFromDodiWebResponseModel';
}
