/* eslint-disable */

import type { CustomerGetMetricsWebResponseModel } from '../models/CustomerGetMetricsWebResponseModel';
import type { CustomerGetWebResponseModel } from '../models/CustomerGetWebResponseModel';
import type { CustomerListWebResponseModel } from '../models/CustomerListWebResponseModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface CustomerService {
  /**
   * Get a customer by its code
   * Fetches a customer by customer Guc
   * @param code The Guc of the customer to retrieve
   * @param retrieveLastSeenDate If true, the returned CustomerWebModel is going to contain the date at which the current user last logged in
   * @returns CustomerGetWebResponseModel
   */
  customerGet(code: string, retrieveLastSeenDate: boolean): Promise<CustomerGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a customer by its code
   * Fetches a customer by customer Guc
   * @param code The Guc of the customer to retrieve
   * @param retrieveLastSeenDate If true, the returned CustomerWebModel is going to contain the date at which the current user last logged in
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customerGetApiRequestOptions(code: string, retrieveLastSeenDate: boolean): ApiRequestOptions;

  /**
   * List the customers on which the requesting user is registered
   * Lists all the customers that the user making the request has access to
   * @param query The optional query string to filter customers on
   * @param retrieveLastSeenDate If true, the returned CustomerWebModel is going to contain the date at which the current user last logged in
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns CustomerListWebResponseModel
   */
  customerList(
    query?: string | null,
    retrieveLastSeenDate?: boolean,
    page?: number,
    pageSize?: number,
  ): Promise<CustomerListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List the customers on which the requesting user is registered
   * Lists all the customers that the user making the request has access to
   * @param query The optional query string to filter customers on
   * @param retrieveLastSeenDate If true, the returned CustomerWebModel is going to contain the date at which the current user last logged in
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customerListApiRequestOptions(
    query?: string | null,
    retrieveLastSeenDate?: boolean,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Get usage metrics for a customer by customer code
   * Fetches customer metrics by customer Guc, see response model comments for details
   * @param code The Guc of the customer to retrieve metrics
   * @returns CustomerGetMetricsWebResponseModel
   */
  customerGetMetrics(code: string): Promise<CustomerGetMetricsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get usage metrics for a customer by customer code
   * Fetches customer metrics by customer Guc, see response model comments for details
   * @param code The Guc of the customer to retrieve metrics
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customerGetMetricsApiRequestOptions(code: string): ApiRequestOptions;
}
