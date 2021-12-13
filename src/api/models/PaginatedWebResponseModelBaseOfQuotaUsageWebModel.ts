/* eslint-disable */

import type { QuotaUsageWebModel } from './QuotaUsageWebModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfQuotaUsageWebModel = {
  /**
   * The page number where data was loaded (1 based)
   */
  page: number;
  /**
   * The number of results being returned per page
   */
  pageSize: number;
  /**
   * The results for the request
   */
  results: Array<QuotaUsageWebModel>;
};

export namespace PaginatedWebResponseModelBaseOfQuotaUsageWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelBaseOfQuotaUsageWebModel';
}
