/* eslint-disable */

import type { ItemCreateWebRequestModel } from './ItemCreateWebRequestModel';

/**
 * Web request model for report list operation
 */
export type ReportGenerateWebRequestModel = {
  /**
   * Guc to filter report designs by.
   */
  reportItemModel: ItemCreateWebRequestModel;
};

export namespace ReportGenerateWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ReportGenerateWebRequestModel';
}
