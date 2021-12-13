/* eslint-disable */

import type { ImportCommitWebResponseModel } from '../models/ImportCommitWebResponseModel';
import type { ImportGetWebResponseModel } from '../models/ImportGetWebResponseModel';
import type { ImportInitialiseWebRequestModel } from '../models/ImportInitialiseWebRequestModel';
import type { ImportInitialiseWebResponseModel } from '../models/ImportInitialiseWebResponseModel';
import type { ImportListWebResponseModel } from '../models/ImportListWebResponseModel';
import type { ImportValidateWebRequestModel } from '../models/ImportValidateWebRequestModel';
import type { ImportValidateWebResponseModel } from '../models/ImportValidateWebResponseModel';
import type { ImportService } from './ImportService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class ImportServiceDefault implements ImportService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async importGet(code: string): Promise<ImportGetWebResponseModel> {
    const options = this.importGetApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public importGetApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/import/${code}`,
    };
  }

  public async importDelete(code: string): Promise<void> {
    const options = this.importDeleteApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public importDeleteApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/import/${code}`,
    };
  }

  public async importList(
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<ImportListWebResponseModel> {
    const options = this.importListApiRequestOptions(query, page, pageSize);
    const result = await __request(options);
    return result.body;
  }

  public importListApiRequestOptions(
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/import`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async importImportInitialise(
    requestBody: ImportInitialiseWebRequestModel,
  ): Promise<ImportInitialiseWebResponseModel> {
    const options = this.importImportInitialiseApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public importImportInitialiseApiRequestOptions(
    requestBody: ImportInitialiseWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/import/initialise`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async importImportValidate(
    code: string,
    requestBody: ImportValidateWebRequestModel,
  ): Promise<ImportValidateWebResponseModel> {
    const options = this.importImportValidateApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public importImportValidateApiRequestOptions(
    code: string,
    requestBody: ImportValidateWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/import/${code}/validate`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async importImportCommit(code: string): Promise<ImportCommitWebResponseModel> {
    const options = this.importImportCommitApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public importImportCommitApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/import/${code}/commit`,
    };
  }
}
