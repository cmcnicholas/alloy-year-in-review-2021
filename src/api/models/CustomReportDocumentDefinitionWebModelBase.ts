/* eslint-disable */

/**
 * Custom report document definition web model
 */
export type CustomReportDocumentDefinitionWebModelBase = {
  /**
   * The document definition id
   */
  id: string;
  /**
   * The document name
   */
  name: string;
  discriminator: string;
};

export namespace CustomReportDocumentDefinitionWebModelBase {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportDocumentDefinitionWebModelBase';
}
