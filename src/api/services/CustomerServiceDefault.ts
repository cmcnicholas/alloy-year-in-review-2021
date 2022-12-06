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

  public async customerGet({
    code,
    retrieveLastSeenDate = false,
  }: {
    /** The Guc of the customer to retrieve **/
    code: string;
    /** If true, the returned CustomerWebModel is going to contain the date at which the current user last logged in **/
    retrieveLastSeenDate?: boolean;
  }): Promise<CustomerGetWebResponseModel> {
    const options = this.customerGetApiRequestOptions({
      code,
      retrieveLastSeenDate,
    });
    const result = await __request(options);
    return result.body;
  }

  public customerGetApiRequestOptions({
    code,
    retrieveLastSeenDate = false,
  }: {
    /** The Guc of the customer to retrieve **/
    code: string;
    /** If true, the returned CustomerWebModel is going to contain the date at which the current user last logged in **/
    retrieveLastSeenDate?: boolean;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/customer/${code}`,
      query: {
        retrieveLastSeenDate: retrieveLastSeenDate,
      },
    };
  }

  public async customerList({
    query,
    retrieveLastSeenDate,
    page,
    pageSize,
  }: {
    /** The optional query string to filter customers on **/
    query?: string | null;
    /** If true, the returned CustomerWebModel is going to contain the date at which the current user last logged in **/
    retrieveLastSeenDate?: boolean;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<CustomerListWebResponseModel> {
    const options = this.customerListApiRequestOptions({
      query,
      retrieveLastSeenDate,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public customerListApiRequestOptions({
    query,
    retrieveLastSeenDate,
    page,
    pageSize,
  }: {
    /** The optional query string to filter customers on **/
    query?: string | null;
    /** If true, the returned CustomerWebModel is going to contain the date at which the current user last logged in **/
    retrieveLastSeenDate?: boolean;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
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

  public async customerGetMetrics({
    code,
  }: {
    /** The Guc of the customer to retrieve metrics **/
    code: string;
  }): Promise<CustomerGetMetricsWebResponseModel> {
    const options = this.customerGetMetricsApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public customerGetMetricsApiRequestOptions({
    code,
  }: {
    /** The Guc of the customer to retrieve metrics **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/customer/${code}/metrics`,
    };
  }
}
