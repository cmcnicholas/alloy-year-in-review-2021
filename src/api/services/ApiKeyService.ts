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
   * @returns ApiKeyWebModel
   */
  apiKeyGet({
    id,
  }: {
    /** The AId for the Api key being requested **/
    id: string;
  }): Promise<ApiKeyWebModel>;

  /**
   * **used to get the request options without making a http request**
   * Get an Api key by its id
   * Fetches an Api key by its Alloy Id (AId).
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  apiKeyGetApiRequestOptions({
    id,
  }: {
    /** The AId for the Api key being requested **/
    id: string;
  }): ApiRequestOptions;

  /**
   * Edit an Api key
   * Edits an Api key based on the information sent in the model
   * @returns ApiKeyWebModel
   */
  apiKeyEdit({
    id,
    requestBody,
  }: {
    /** The AId of the Api key to edit **/
    id: string;
    /** Model containing the new Api Key details **/
    requestBody: ApiKeyEditWebRequestModel;
  }): Promise<ApiKeyWebModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit an Api key
   * Edits an Api key based on the information sent in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  apiKeyEditApiRequestOptions({
    id,
    requestBody,
  }: {
    /** The AId of the Api key to edit **/
    id: string;
    /** Model containing the new Api Key details **/
    requestBody: ApiKeyEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Delete an Api key
   * Deletes an Api key based on the information sent in the model
   * @returns void
   */
  apiKeyDelete({
    id,
  }: {
    /** The AId of the Api Key to delete **/
    id: string;
  }): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete an Api key
   * Deletes an Api key based on the information sent in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  apiKeyDeleteApiRequestOptions({
    id,
  }: {
    /** The AId of the Api Key to delete **/
    id: string;
  }): ApiRequestOptions;

  /**
   * Get a list of Api keys
   * Fetches a list of Api keys optionally specifying page and the number of results to return per page.
   * @returns ApiKeyListWebResponseModel
   */
  apiKeyList({
    username,
    query,
    page,
    pageSize,
  }: {
    /** Username to filter Api Keys by **/
    username: string | null;
    /** Optional query to filter the Api keys by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<ApiKeyListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a list of Api keys
   * Fetches a list of Api keys optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  apiKeyListApiRequestOptions({
    username,
    query,
    page,
    pageSize,
  }: {
    /** Username to filter Api Keys by **/
    username: string | null;
    /** Optional query to filter the Api keys by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Create an Api key
   * Creates an Api key based on the information sent in the model
   * @returns ApiKeyCreateWebResponseModel
   */
  apiKeyCreate({
    requestBody,
  }: {
    /** Model containing the new Api key details **/
    requestBody: ApiKeyCreateWebRequestModel;
  }): Promise<ApiKeyCreateWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Create an Api key
   * Creates an Api key based on the information sent in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  apiKeyCreateApiRequestOptions({
    requestBody,
  }: {
    /** Model containing the new Api key details **/
    requestBody: ApiKeyCreateWebRequestModel;
  }): ApiRequestOptions;
}
