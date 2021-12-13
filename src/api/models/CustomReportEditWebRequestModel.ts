/* eslint-disable */

/**
 * The web request model used to edit a custom report
 */
export type CustomReportEditWebRequestModel = {
  /**
   * The list of controls that make up this custom report. The order in the array is the order in which they
   * appear in the report
   */
  name: string;
  /**
   * The signature is used to ensure that the custom report being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same custom report
   */
  signature: string;
};

export namespace CustomReportEditWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportEditWebRequestModel';
}
