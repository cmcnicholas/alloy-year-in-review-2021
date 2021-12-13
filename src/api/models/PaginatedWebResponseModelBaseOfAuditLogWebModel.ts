/* eslint-disable */

import type { AuditLogWebModel } from './AuditLogWebModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfAuditLogWebModel = {
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
  results: Array<AuditLogWebModel>;
};

export namespace PaginatedWebResponseModelBaseOfAuditLogWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelBaseOfAuditLogWebModel';
}
