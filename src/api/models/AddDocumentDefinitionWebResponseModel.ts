/* eslint-disable */

import type { CustomReportDocumentDefinitionWebModelBase } from './CustomReportDocumentDefinitionWebModelBase';
import type { CustomReportWebModel } from './CustomReportWebModel';

/**
 * Add document definition web response model
 */
export type AddDocumentDefinitionWebResponseModel = {
  /**
   * The custom report
   */
  customReport: CustomReportWebModel;
  /**
   * The created document definition
   */
  addedDocumentDefinition: CustomReportDocumentDefinitionWebModelBase;
};

export namespace AddDocumentDefinitionWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AddDocumentDefinitionWebResponseModel';
}
