/* eslint-disable */

import type { CustomReportDocumentDefinitionInfoWebModelBase } from './CustomReportDocumentDefinitionInfoWebModelBase';

/**
 * Add document definition web request model
 */
export type AddDocumentDefinitionWebRequestModel = {
  /**
   * The name of the document definition
   */
  name: string;
  /**
   * The information specific to the document definition type
   */
  documentDefinitionInfo: CustomReportDocumentDefinitionInfoWebModelBase;
  /**
   * The signature is used to ensure that the custom report being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same custom report
   */
  signature: string;
};

export namespace AddDocumentDefinitionWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AddDocumentDefinitionWebRequestModel';
}
