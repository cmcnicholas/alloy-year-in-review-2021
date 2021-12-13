/* eslint-disable */

/**
 * Web request model to clone a custom report.
 */
export type CustomReportCloneWebRequestModel = {
  /**
   * The name to override the existing custom report with.
   */
  name: string;
};

export namespace CustomReportCloneWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportCloneWebRequestModel';
}
