/* eslint-disable */

import type { Context } from '../models/Context';
import type { DodiListWebResponseModel } from '../models/DodiListWebResponseModel';
import type { DodiWithOperationsSummaryWebResponseModel } from '../models/DodiWithOperationsSummaryWebResponseModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface DodiService {
  /**
   * Get a dodi by its Guc
   * Finds a dodi with the specified code
   * @param code The Guc to use to fetch the required dodi
   * @returns DodiWithOperationsSummaryWebResponseModel
   */
  dodiGet(code: string): Promise<DodiWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a dodi by its Guc
   * Finds a dodi with the specified code
   * @param code The Guc to use to fetch the required dodi
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  dodiGetApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * List dodis
   * Lists dodis in the system using pagination
   * @param query Optional query to filter the dodis by
   * @param context Optional dodis Context filter
   * @param implementsInterface The optional dodi code Guc, if specified, only the dodis
   * implementing that interface code will be returned
   * @param userGroup The optional user group Guc. If specified, only the dodis
   * that have this user group code within their permissions or the permissions
   * of the attributes within them are returned
   * @param childDodi Optional Guc to filter dodis by. If specified, only the dodis
   * that have a link attribute pointing to the specified dodi are returned
   * @param lastEditDate The optional last edit date to return only dodis created or edited after this date
   * @param queryCompleteDodi Optional boolean that can be set to false to query against dodis without taking into account inheritance
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns DodiListWebResponseModel
   */
  dodiList(
    query?: string | null,
    context?: Context | null,
    implementsInterface?: string | null,
    userGroup?: string | null,
    childDodi?: string | null,
    lastEditDate?: string | null,
    queryCompleteDodi?: boolean | null,
    page?: number,
    pageSize?: number,
  ): Promise<DodiListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List dodis
   * Lists dodis in the system using pagination
   * @param query Optional query to filter the dodis by
   * @param context Optional dodis Context filter
   * @param implementsInterface The optional dodi code Guc, if specified, only the dodis
   * implementing that interface code will be returned
   * @param userGroup The optional user group Guc. If specified, only the dodis
   * that have this user group code within their permissions or the permissions
   * of the attributes within them are returned
   * @param childDodi Optional Guc to filter dodis by. If specified, only the dodis
   * that have a link attribute pointing to the specified dodi are returned
   * @param lastEditDate The optional last edit date to return only dodis created or edited after this date
   * @param queryCompleteDodi Optional boolean that can be set to false to query against dodis without taking into account inheritance
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  dodiListApiRequestOptions(
    query?: string | null,
    context?: Context | null,
    implementsInterface?: string | null,
    userGroup?: string | null,
    childDodi?: string | null,
    lastEditDate?: string | null,
    queryCompleteDodi?: boolean | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;
}
