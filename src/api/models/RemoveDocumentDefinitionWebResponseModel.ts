/* eslint-disable */

import type { CustomReportWebModel } from './CustomReportWebModel';

/**
 * Remove document definition web response model
 */
export type RemoveDocumentDefinitionWebResponseModel = {
  /**
   * The custom report
   */
  customReport: CustomReportWebModel;
};

export namespace RemoveDocumentDefinitionWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'RemoveDocumentDefinitionWebResponseModel';
}
