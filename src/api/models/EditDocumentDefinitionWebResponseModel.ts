/* eslint-disable */

import type { CustomReportWebModel } from './CustomReportWebModel';

/**
 * Edit document definition web response model
 */
export type EditDocumentDefinitionWebResponseModel = {
  /**
   * The custom report
   */
  customReport: CustomReportWebModel;
};

export namespace EditDocumentDefinitionWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditDocumentDefinitionWebResponseModel';
}
