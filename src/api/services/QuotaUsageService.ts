/* eslint-disable */

import type { QuotaListUsageWebResponseModel } from '../models/QuotaListUsageWebResponseModel';
import type { QuotaUsageComponent } from '../models/QuotaUsageComponent';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface QuotaUsageService {
  /**
   * List quota usage for a customer by customer code
   * Fetches customer quota usage by customer Guc, see response model comments for details
   * @returns QuotaListUsageWebResponseModel
   */
  quotaUsageListQuotaUsage({
    start,
    end,
    category,
    component,
    page,
    pageSize,
  }: {
    /** Start time of quota usage to query **/
    start?: string | null;
    /** End time of quota usage to query **/
    end?: string | null;
    /** Category to filter by **/
    category?: string | null;
    /** Component to filter by **/
    component?: QuotaUsageComponent | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<QuotaListUsageWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List quota usage for a customer by customer code
   * Fetches customer quota usage by customer Guc, see response model comments for details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  quotaUsageListQuotaUsageApiRequestOptions({
    start,
    end,
    category,
    component,
    page,
    pageSize,
  }: {
    /** Start time of quota usage to query **/
    start?: string | null;
    /** End time of quota usage to query **/
    end?: string | null;
    /** Category to filter by **/
    category?: string | null;
    /** Component to filter by **/
    component?: QuotaUsageComponent | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;
}
