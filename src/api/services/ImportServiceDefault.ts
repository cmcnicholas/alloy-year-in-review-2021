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

  public async importGet({
    code,
  }: {
    /** The Guc to use to fetch the required import **/
    code: string;
  }): Promise<ImportGetWebResponseModel> {
    const options = this.importGetApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public importGetApiRequestOptions({
    code,
  }: {
    /** The Guc to use to fetch the required import **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/import/${code}`,
    };
  }

  public async importDelete({
    code,
  }: {
    /** The Guc of the import to delete **/
    code: string;
  }): Promise<void> {
    const options = this.importDeleteApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public importDeleteApiRequestOptions({
    code,
  }: {
    /** The Guc of the import to delete **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/import/${code}`,
    };
  }

  public async importList({
    query,
    page,
    pageSize,
  }: {
    /** Optional query to filter the imports by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<ImportListWebResponseModel> {
    const options = this.importListApiRequestOptions({
      query,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public importListApiRequestOptions({
    query,
    page,
    pageSize,
  }: {
    /** Optional query to filter the imports by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
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

  public async importImportInitialise({
    requestBody,
  }: {
    /** The model containing all necessary data to initialise import **/
    requestBody: ImportInitialiseWebRequestModel;
  }): Promise<ImportInitialiseWebResponseModel> {
    const options = this.importImportInitialiseApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public importImportInitialiseApiRequestOptions({
    requestBody,
  }: {
    /** The model containing all necessary data to initialise import **/
    requestBody: ImportInitialiseWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/import/initialise`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async importImportValidate({
    code,
    requestBody,
  }: {
    /** The code of the import to validate **/
    code: string;
    /** The model containing all necessary data to validate import **/
    requestBody: ImportValidateWebRequestModel;
  }): Promise<ImportValidateWebResponseModel> {
    const options = this.importImportValidateApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public importImportValidateApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The code of the import to validate **/
    code: string;
    /** The model containing all necessary data to validate import **/
    requestBody: ImportValidateWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/import/${code}/validate`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async importImportCommit({
    code,
  }: {
    /** The code of the import to validate **/
    code: string;
  }): Promise<ImportCommitWebResponseModel> {
    const options = this.importImportCommitApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public importImportCommitApiRequestOptions({
    code,
  }: {
    /** The code of the import to validate **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/import/${code}/commit`,
    };
  }
}
