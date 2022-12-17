/* eslint-disable */

import type { Context } from '../models/Context';
import type { DodiListWebResponseModel } from '../models/DodiListWebResponseModel';
import type { DodiWithOperationsSummaryWebResponseModel } from '../models/DodiWithOperationsSummaryWebResponseModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface DodiService {
  /**
   * Get a dodi by its Guc
   * Finds a dodi with the specified code
   * @returns DodiWithOperationsSummaryWebResponseModel
   */
  dodiGet({
    code,
  }: {
    /** The Guc to use to fetch the required dodi **/
    code: string;
  }): Promise<DodiWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a dodi by its Guc
   * Finds a dodi with the specified code
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  dodiGetApiRequestOptions({
    code,
  }: {
    /** The Guc to use to fetch the required dodi **/
    code: string;
  }): ApiRequestOptions;

  /**
   * List dodis
   * Lists dodis in the system using pagination
   * @returns DodiListWebResponseModel
   */
  dodiList({
    query,
    context,
    implementsInterface,
    userGroup,
    childDodi,
    lastEditDate,
    queryCompleteDodi,
    page,
    pageSize,
  }: {
    /** Optional query to filter the dodis by **/
    query?: string | null;
    /** Optional dodis Context filter **/
    context?: Context | null;
    /** The optional dodi code Guc, if specified, only the dodis
     * implementing that interface code will be returned **/
    implementsInterface?: string | null;
    /** The optional user group Guc. If specified, only the dodis
     * that have this user group code within their permissions or the permissions
     * of the attributes within them are returned **/
    userGroup?: string | null;
    /** Optional Guc to filter dodis by. If specified, only the dodis
     * that have a link attribute pointing to the specified dodi are returned **/
    childDodi?: string | null;
    /** The optional last edit date to return only dodis created or edited after this date **/
    lastEditDate?: string | null;
    /** Optional boolean that can be set to false to query against dodis without taking into account inheritance **/
    queryCompleteDodi?: boolean | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<DodiListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List dodis
   * Lists dodis in the system using pagination
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  dodiListApiRequestOptions({
    query,
    context,
    implementsInterface,
    userGroup,
    childDodi,
    lastEditDate,
    queryCompleteDodi,
    page,
    pageSize,
  }: {
    /** Optional query to filter the dodis by **/
    query?: string | null;
    /** Optional dodis Context filter **/
    context?: Context | null;
    /** The optional dodi code Guc, if specified, only the dodis
     * implementing that interface code will be returned **/
    implementsInterface?: string | null;
    /** The optional user group Guc. If specified, only the dodis
     * that have this user group code within their permissions or the permissions
     * of the attributes within them are returned **/
    userGroup?: string | null;
    /** Optional Guc to filter dodis by. If specified, only the dodis
     * that have a link attribute pointing to the specified dodi are returned **/
    childDodi?: string | null;
    /** The optional last edit date to return only dodis created or edited after this date **/
    lastEditDate?: string | null;
    /** Optional boolean that can be set to false to query against dodis without taking into account inheritance **/
    queryCompleteDodi?: boolean | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;
}
