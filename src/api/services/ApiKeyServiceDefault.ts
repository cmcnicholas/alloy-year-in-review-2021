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

  public async apiKeyGet(id: string): Promise<ApiKeyWebModel> {
    const options = this.apiKeyGetApiRequestOptions(id);
    const result = await __request(options);
    return result.body;
  }

  public apiKeyGetApiRequestOptions(id: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/api-key/${id}`,
    };
  }

  public async apiKeyEdit(
    id: string,
    requestBody: ApiKeyEditWebRequestModel,
  ): Promise<ApiKeyWebModel> {
    const options = this.apiKeyEditApiRequestOptions(id, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public apiKeyEditApiRequestOptions(
    id: string,
    requestBody: ApiKeyEditWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/api-key/${id}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async apiKeyDelete(id: string): Promise<void> {
    const options = this.apiKeyDeleteApiRequestOptions(id);
    const result = await __request(options);
    return result.body;
  }

  public apiKeyDeleteApiRequestOptions(id: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/api-key/${id}`,
    };
  }

  public async apiKeyList(
    query?: string | null,
    username?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<ApiKeyListWebResponseModel> {
    const options = this.apiKeyListApiRequestOptions(query, username, page, pageSize);
    const result = await __request(options);
    return result.body;
  }

  public apiKeyListApiRequestOptions(
    query?: string | null,
    username?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/api-key`,
      query: {
        Query: query,
        Username: username,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async apiKeyCreate(
    requestBody: ApiKeyCreateWebRequestModel,
  ): Promise<ApiKeyCreateWebResponseModel> {
    const options = this.apiKeyCreateApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public apiKeyCreateApiRequestOptions(
    requestBody: ApiKeyCreateWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/api-key`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }
}
