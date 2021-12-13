/* eslint-disable */

import type { ApiKeyCreateWebRequestModel } from '../models/ApiKeyCreateWebRequestModel';
import type { ApiKeyCreateWebResponseModel } from '../models/ApiKeyCreateWebResponseModel';
import type { ApiKeyEditWebRequestModel } from '../models/ApiKeyEditWebRequestModel';
import type { ApiKeyListWebResponseModel } from '../models/ApiKeyListWebResponseModel';
import type { ApiKeyWebModel } from '../models/ApiKeyWebModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface ApiKeyService {
  /**
   * Get an Api key by its id
   * Fetches an Api key by its Alloy Id (AId).
   * @param id The AId for the Api key being requested
   * @returns ApiKeyWebModel
   */
  apiKeyGet(id: string): Promise<ApiKeyWebModel>;

  /**
   * **used to get the request options without making a http request**
   * Get an Api key by its id
   * Fetches an Api key by its Alloy Id (AId).
   * @param id The AId for the Api key being requested
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  apiKeyGetApiRequestOptions(id: string): ApiRequestOptions;

  /**
   * Edit an Api key
   * Edits an Api key based on the information sent in the model
   * @param id The AId of the Api key to edit
   * @param requestBody Model containing the new Api Key details
   * @returns ApiKeyWebModel
   */
  apiKeyEdit(id: string, requestBody: ApiKeyEditWebRequestModel): Promise<ApiKeyWebModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit an Api key
   * Edits an Api key based on the information sent in the model
   * @param id The AId of the Api key to edit
   * @param requestBody Model containing the new Api Key details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  apiKeyEditApiRequestOptions(
    id: string,
    requestBody: ApiKeyEditWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Delete an Api key
   * Deletes an Api key based on the information sent in the model
   * @param id The AId of the Api Key to delete
   * @returns void
   */
  apiKeyDelete(id: string): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete an Api key
   * Deletes an Api key based on the information sent in the model
   * @param id The AId of the Api Key to delete
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  apiKeyDeleteApiRequestOptions(id: string): ApiRequestOptions;

  /**
   * Get a list of Api keys
   * Fetches a list of Api keys optionally specifying page and the number of results to return per page.
   * @param query Optional query to filter the Api keys by
   * @param username Username to filter cards by. If specified, only the cards
   * that have this user group code within their permissions are returned
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiKeyListWebResponseModel
   */
  apiKeyList(
    query?: string | null,
    username?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<ApiKeyListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a list of Api keys
   * Fetches a list of Api keys optionally specifying page and the number of results to return per page.
   * @param query Optional query to filter the Api keys by
   * @param username Username to filter cards by. If specified, only the cards
   * that have this user group code within their permissions are returned
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  apiKeyListApiRequestOptions(
    query?: string | null,
    username?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Create an Api key
   * Creates an Api key based on the information sent in the model
   * @param requestBody Model containing the new Api key details
   * @returns ApiKeyCreateWebResponseModel
   */
  apiKeyCreate(requestBody: ApiKeyCreateWebRequestModel): Promise<ApiKeyCreateWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Create an Api key
   * Creates an Api key based on the information sent in the model
   * @param requestBody Model containing the new Api key details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  apiKeyCreateApiRequestOptions(requestBody: ApiKeyCreateWebRequestModel): ApiRequestOptions;
}
