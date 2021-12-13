/* eslint-disable */

import type { PowerBiReportWebModel } from './PowerBiReportWebModel';

/**
 * List Power Bi reports web response model
 */
export type ListPowerBiReportsWebResponseModel = {
  /**
   * Power Bi reports
   */
  reports: Array<PowerBiReportWebModel>;
};

export namespace ListPowerBiReportsWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ListPowerBiReportsWebResponseModel';
}
