/* eslint-disable */

import type { CustomerGetMetricsWebResponseModel } from '../models/CustomerGetMetricsWebResponseModel';
import type { CustomerGetWebResponseModel } from '../models/CustomerGetWebResponseModel';
import type { CustomerListWebResponseModel } from '../models/CustomerListWebResponseModel';
import type { CustomerService } from './CustomerService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class CustomerServiceDefault implements CustomerService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async customerGet(
    code: string,
    retrieveLastSeenDate: boolean = false,
  ): Promise<CustomerGetWebResponseModel> {
    const options = this.customerGetApiRequestOptions(code, retrieveLastSeenDate);
    const result = await __request(options);
    return result.body;
  }

  public customerGetApiRequestOptions(
    code: string,
    retrieveLastSeenDate: boolean = false,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/customer/${code}`,
      query: {
        retrieveLastSeenDate: retrieveLastSeenDate,
      },
    };
  }

  public async customerList(
    query?: string | null,
    retrieveLastSeenDate?: boolean,
    page?: number,
    pageSize?: number,
  ): Promise<CustomerListWebResponseModel> {
    const options = this.customerListApiRequestOptions(query, retrieveLastSeenDate, page, pageSize);
    const result = await __request(options);
    return result.body;
  }

  public customerListApiRequestOptions(
    query?: string | null,
    retrieveLastSeenDate?: boolean,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/customer`,
      query: {
        Query: query,
        RetrieveLastSeenDate: retrieveLastSeenDate,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async customerGetMetrics(code: string): Promise<CustomerGetMetricsWebResponseModel> {
    const options = this.customerGetMetricsApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public customerGetMetricsApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/customer/${code}/metrics`,
    };
  }
}
