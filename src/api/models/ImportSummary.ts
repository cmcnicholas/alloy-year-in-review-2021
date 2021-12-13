/* eslint-disable */

export type ImportSummary = {
  errorsNumber: number;
  warningsNumber: number;
  successNumber: number;
};

export namespace ImportSummary {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ImportSummary';
}
