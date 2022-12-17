/* eslint-disable */

import type { ApplicableTypeAddWebRequestModel } from '../models/ApplicableTypeAddWebRequestModel';
import type { ApplicableTypeFromItemsViaWebRequestModel } from '../models/ApplicableTypeFromItemsViaWebRequestModel';
import type { ApplicableTypeFromWebRequestModel } from '../models/ApplicableTypeFromWebRequestModel';
import type { ApplicableTypeFromWebResponseModel } from '../models/ApplicableTypeFromWebResponseModel';
import type { ApplicableTypeRemoveWebRequestModel } from '../models/ApplicableTypeRemoveWebRequestModel';
import type { ApplicableTypeToWebRequestModel } from '../models/ApplicableTypeToWebRequestModel';
import type { ApplicableTypeToWebResponseModel } from '../models/ApplicableTypeToWebResponseModel';
import type { ApplicableTypesService } from './ApplicableTypesService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class ApplicableTypesServiceDefault implements ApplicableTypesService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async applicableTypesApplicableTo({
    requestBody,
    page,
    pageSize,
  }: {
    requestBody: ApplicableTypeToWebRequestModel;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<ApplicableTypeToWebResponseModel> {
    const options = this.applicableTypesApplicableToApiRequestOptions({
      requestBody,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public applicableTypesApplicableToApiRequestOptions({
    requestBody,
    page,
    pageSize,
  }: {
    requestBody: ApplicableTypeToWebRequestModel;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/applicable-type/applicable-to`,
      query: {
        Page: page,
        PageSize: pageSize,
      },
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async applicableTypesApplicableFromItems({
    requestBody,
    page,
    pageSize,
  }: {
    requestBody: ApplicableTypeFromWebRequestModel;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<ApplicableTypeFromWebResponseModel> {
    const options = this.applicableTypesApplicableFromItemsApiRequestOptions({
      requestBody,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public applicableTypesApplicableFromItemsApiRequestOptions({
    requestBody,
    page,
    pageSize,
  }: {
    requestBody: ApplicableTypeFromWebRequestModel;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/applicable-type/applicable-from/items`,
      query: {
        Page: page,
        PageSize: pageSize,
      },
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async applicableTypesApplicableFromViaItems({
    requestBody,
    page,
    pageSize,
  }: {
    requestBody: ApplicableTypeFromItemsViaWebRequestModel;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<ApplicableTypeFromWebResponseModel> {
    const options = this.applicableTypesApplicableFromViaItemsApiRequestOptions({
      requestBody,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public applicableTypesApplicableFromViaItemsApiRequestOptions({
    requestBody,
    page,
    pageSize,
  }: {
    requestBody: ApplicableTypeFromItemsViaWebRequestModel;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/applicable-type/applicable-from/via-items`,
      query: {
        Page: page,
        PageSize: pageSize,
      },
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async applicableTypesAdd({
    requestBody,
  }: {
    requestBody: ApplicableTypeAddWebRequestModel;
  }): Promise<void> {
    const options = this.applicableTypesAddApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public applicableTypesAddApiRequestOptions({
    requestBody,
  }: {
    requestBody: ApplicableTypeAddWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/applicable-type`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async applicableTypesRemove({
    requestBody,
  }: {
    requestBody: ApplicableTypeRemoveWebRequestModel;
  }): Promise<void> {
    const options = this.applicableTypesRemoveApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public applicableTypesRemoveApiRequestOptions({
    requestBody,
  }: {
    requestBody: ApplicableTypeRemoveWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/applicable-type`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }
}
