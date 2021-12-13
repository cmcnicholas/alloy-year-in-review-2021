/* eslint-disable */

import type { BasemapAccessAdvisorByRoleListWebResponseModel } from '../models/BasemapAccessAdvisorByRoleListWebResponseModel';
import type { BasemapAccessAdvisorByUserListWebResponseModel } from '../models/BasemapAccessAdvisorByUserListWebResponseModel';
import type { BasemapCreateWebRequestModel } from '../models/BasemapCreateWebRequestModel';
import type { BasemapEditWebRequestModel } from '../models/BasemapEditWebRequestModel';
import type { BasemapListWebResponseModel } from '../models/BasemapListWebResponseModel';
import type { BasemapPermissionsEditWebRequestModel } from '../models/BasemapPermissionsEditWebRequestModel';
import type { BasemapPermissionsGetWebResponseModel } from '../models/BasemapPermissionsGetWebResponseModel';
import type { BasemapWithOperationsSummaryWebResponseModel } from '../models/BasemapWithOperationsSummaryWebResponseModel';
import type { BasemapWithPermissionsWebResponseModel } from '../models/BasemapWithPermissionsWebResponseModel';
import type { Context } from '../models/Context';
import type { BasemapService } from './BasemapService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class BasemapServiceDefault implements BasemapService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async basemapGet(code: string): Promise<BasemapWithOperationsSummaryWebResponseModel> {
    const options = this.basemapGetApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public basemapGetApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/basemap/${code}`,
    };
  }

  public async basemapEdit(
    code: string,
    requestBody: BasemapEditWebRequestModel,
  ): Promise<BasemapWithOperationsSummaryWebResponseModel> {
    const options = this.basemapEditApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public basemapEditApiRequestOptions(
    code: string,
    requestBody: BasemapEditWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/basemap/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async basemapDelete(code: string): Promise<void> {
    const options = this.basemapDeleteApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public basemapDeleteApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/basemap/${code}`,
    };
  }

  public async basemapList(
    query?: string | null,
    userGroup?: string | null,
    context?: Context | null,
    page?: number,
    pageSize?: number,
  ): Promise<BasemapListWebResponseModel> {
    const options = this.basemapListApiRequestOptions(query, userGroup, context, page, pageSize);
    const result = await __request(options);
    return result.body;
  }

  public basemapListApiRequestOptions(
    query?: string | null,
    userGroup?: string | null,
    context?: Context | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/basemap`,
      query: {
        Query: query,
        UserGroup: userGroup,
        Context: context,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async basemapCreate(
    requestBody: BasemapCreateWebRequestModel,
  ): Promise<BasemapWithOperationsSummaryWebResponseModel> {
    const options = this.basemapCreateApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public basemapCreateApiRequestOptions(
    requestBody: BasemapCreateWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/basemap`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async basemapGetPermissions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): Promise<BasemapPermissionsGetWebResponseModel> {
    const options = this.basemapGetPermissionsApiRequestOptions(code, username, role);
    const result = await __request(options);
    return result.body;
  }

  public basemapGetPermissionsApiRequestOptions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/basemap/${code}/permissions`,
      query: {
        Username: username,
        Role: role,
      },
    };
  }

  public async basemapEditPermissions(
    code: string,
    requestBody: BasemapPermissionsEditWebRequestModel,
  ): Promise<BasemapWithPermissionsWebResponseModel> {
    const options = this.basemapEditPermissionsApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public basemapEditPermissionsApiRequestOptions(
    code: string,
    requestBody: BasemapPermissionsEditWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/basemap/${code}/permissions`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async basemapBasemapAccessAdvisorByUser(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<BasemapAccessAdvisorByUserListWebResponseModel> {
    const options = this.basemapBasemapAccessAdvisorByUserApiRequestOptions(
      username,
      query,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public basemapBasemapAccessAdvisorByUserApiRequestOptions(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/basemap/access-advisor/user/${username}`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async basemapBasemapAccessAdvisorByRole(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<BasemapAccessAdvisorByRoleListWebResponseModel> {
    const options = this.basemapBasemapAccessAdvisorByRoleApiRequestOptions(
      code,
      query,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public basemapBasemapAccessAdvisorByRoleApiRequestOptions(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/basemap/access-advisor/role/${code}`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }
}
