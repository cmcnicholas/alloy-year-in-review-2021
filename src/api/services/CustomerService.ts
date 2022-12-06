/* eslint-disable */

import type { CustomerGetMetricsWebResponseModel } from '../models/CustomerGetMetricsWebResponseModel';
import type { CustomerGetWebResponseModel } from '../models/CustomerGetWebResponseModel';
import type { CustomerListWebResponseModel } from '../models/CustomerListWebResponseModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface CustomerService {
  /**
   * Get a customer by its code
   * Fetches a customer by customer Guc
   * @returns CustomerGetWebResponseModel
   */
  customerGet({
    code,
    retrieveLastSeenDate = false,
  }: {
    /** The Guc of the customer to retrieve **/
    code: string;
    /** If true, the returned CustomerWebModel is going to contain the date at which the current user last logged in **/
    retrieveLastSeenDate?: boolean;
  }): Promise<CustomerGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a customer by its code
   * Fetches a customer by customer Guc
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customerGetApiRequestOptions({
    code,
    retrieveLastSeenDate = false,
  }: {
    /** The Guc of the customer to retrieve **/
    code: string;
    /** If true, the returned CustomerWebModel is going to contain the date at which the current user last logged in **/
    retrieveLastSeenDate?: boolean;
  }): ApiRequestOptions;

  /**
   * List the customers on which the requesting user is registered
   * Lists all the customers that the user making the request has access to
   * @returns CustomerListWebResponseModel
   */
  customerList({
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
  }): Promise<CustomerListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List the customers on which the requesting user is registered
   * Lists all the customers that the user making the request has access to
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customerListApiRequestOptions({
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
  }): ApiRequestOptions;

  /**
   * Get usage metrics for a customer by customer code
   * Fetches customer metrics by customer Guc, see response model comments for details
   * @returns CustomerGetMetricsWebResponseModel
   */
  customerGetMetrics({
    code,
  }: {
    /** The Guc of the customer to retrieve metrics **/
    code: string;
  }): Promise<CustomerGetMetricsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get usage metrics for a customer by customer code
   * Fetches customer metrics by customer Guc, see response model comments for details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customerGetMetricsApiRequestOptions({
    code,
  }: {
    /** The Guc of the customer to retrieve metrics **/
    code: string;
  }): ApiRequestOptions;
}
