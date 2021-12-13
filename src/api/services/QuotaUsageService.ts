/* eslint-disable */

import type { QuotaListUsageWebResponseModel } from '../models/QuotaListUsageWebResponseModel';
import type { QuotaUsageComponent } from '../models/QuotaUsageComponent';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface QuotaUsageService {
  /**
   * List quota usage for a customer by customer code
   * Fetches customer quota usage by customer Guc, see response model comments for details
   * @param start Start time of quota usage to query
   * @param end End time of quota usage to query
   * @param category Category to filter by
   * @param component Component to filter by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns QuotaListUsageWebResponseModel
   */
  quotaUsageListQuotaUsage(
    start?: string | null,
    end?: string | null,
    category?: string | null,
    component?: QuotaUsageComponent | null,
    page?: number,
    pageSize?: number,
  ): Promise<QuotaListUsageWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List quota usage for a customer by customer code
   * Fetches customer quota usage by customer Guc, see response model comments for details
   * @param start Start time of quota usage to query
   * @param end End time of quota usage to query
   * @param category Category to filter by
   * @param component Component to filter by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  quotaUsageListQuotaUsageApiRequestOptions(
    start?: string | null,
    end?: string | null,
    category?: string | null,
    component?: QuotaUsageComponent | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;
}
