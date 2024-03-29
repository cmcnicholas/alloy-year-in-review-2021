/* eslint-disable */

import type { ApiKeyCreateWebRequestModel } from '../models/ApiKeyCreateWebRequestModel';
import type { ApiKeyCreateWebResponseModel } from '../models/ApiKeyCreateWebResponseModel';
import type { ApiKeyEditWebRequestModel } from '../models/ApiKeyEditWebRequestModel';
import type { ApiKeyListWebResponseModel } from '../models/ApiKeyListWebResponseModel';
import type { ApiKeyWebModel } from '../models/ApiKeyWebModel';
import type { ApiKeyService } from './ApiKeyService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class ApiKeyServiceDefault implements ApiKeyService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async apiKeyGet({
    id,
  }: {
    /** The AId for the Api key being requested **/
    id: string;
  }): Promise<ApiKeyWebModel> {
    const options = this.apiKeyGetApiRequestOptions({
      id,
    });
    const result = await __request(options);
    return result.body;
  }

  public apiKeyGetApiRequestOptions({
    id,
  }: {
    /** The AId for the Api key being requested **/
    id: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/api-key/${id}`,
    };
  }

  public async apiKeyEdit({
    id,
    requestBody,
  }: {
    /** The AId of the Api key to edit **/
    id: string;
    /** Model containing the new Api Key details **/
    requestBody: ApiKeyEditWebRequestModel;
  }): Promise<ApiKeyWebModel> {
    const options = this.apiKeyEditApiRequestOptions({
      id,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public apiKeyEditApiRequestOptions({
    id,
    requestBody,
  }: {
    /** The AId of the Api key to edit **/
    id: string;
    /** Model containing the new Api Key details **/
    requestBody: ApiKeyEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/api-key/${id}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async apiKeyDelete({
    id,
  }: {
    /** The AId of the Api Key to delete **/
    id: string;
  }): Promise<void> {
    const options = this.apiKeyDeleteApiRequestOptions({
      id,
    });
    const result = await __request(options);
    return result.body;
  }

  public apiKeyDeleteApiRequestOptions({
    id,
  }: {
    /** The AId of the Api Key to delete **/
    id: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/api-key/${id}`,
    };
  }

  public async apiKeyList({
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
  }): Promise<ApiKeyListWebResponseModel> {
    const options = this.apiKeyListApiRequestOptions({
      username,
      query,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public apiKeyListApiRequestOptions({
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
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/api-key`,
      query: {
        Username: username,
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async apiKeyCreate({
    requestBody,
  }: {
    /** Model containing the new Api key details **/
    requestBody: ApiKeyCreateWebRequestModel;
  }): Promise<ApiKeyCreateWebResponseModel> {
    const options = this.apiKeyCreateApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public apiKeyCreateApiRequestOptions({
    requestBody,
  }: {
    /** Model containing the new Api key details **/
    requestBody: ApiKeyCreateWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/api-key`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }
}
