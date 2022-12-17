/* eslint-disable */

import type { QuotaListUsageWebResponseModel } from '../models/QuotaListUsageWebResponseModel';
import type { QuotaUsageComponent } from '../models/QuotaUsageComponent';
import type { QuotaUsageService } from './QuotaUsageService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class QuotaUsageServiceDefault implements QuotaUsageService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async quotaUsageListQuotaUsage({
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
  }): Promise<QuotaListUsageWebResponseModel> {
    const options = this.quotaUsageListQuotaUsageApiRequestOptions({
      start,
      end,
      category,
      component,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public quotaUsageListQuotaUsageApiRequestOptions({
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
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/quota-usage`,
      query: {
        Start: start,
        End: end,
        Category: category,
        Component: component,
        Page: page,
        PageSize: pageSize,
      },
    };
  }
}
