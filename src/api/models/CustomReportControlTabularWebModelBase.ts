/* eslint-disable */

/**
 * Custom report control base
 */
export type CustomReportControlTabularWebModelBase = {
  /**
   * Description or notes relating to the control for use with the Reports Builder
   */
  description?: string | null;
  discriminator: string;
};

export namespace CustomReportControlTabularWebModelBase {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlTabularWebModelBase';
}
