/* eslint-disable */

import type { QuotaUsageComponent } from './QuotaUsageComponent';

/**
 * Web model for quota usage
 */
export type QuotaUsageWebModel = {
  /**
   * The start time that the quota usage value applies to
   */
  start: string;
  /**
   * The duration from the start time that the quota usage value applies to
   */
  duration: string;
  /**
   * The amount of quota used over specified duration at specified start time
   */
  value: number;
  /**
   * The category that consumed the value of quota usage
   */
  category: string;
  /**
   * The component that consumed the value of quota usage
   */
  component: QuotaUsageComponent;
};

export namespace QuotaUsageWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'QuotaUsageWebModel';
}
