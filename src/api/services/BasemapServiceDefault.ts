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

  public async basemapGet({
    code,
  }: {
    /** The Guc for the basemap being requested **/
    code: string;
  }): Promise<BasemapWithOperationsSummaryWebResponseModel> {
    const options = this.basemapGetApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public basemapGetApiRequestOptions({
    code,
  }: {
    /** The Guc for the basemap being requested **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/basemap/${code}`,
    };
  }

  public async basemapEdit({
    code,
    requestBody,
  }: {
    /** The Guc of the basemap to edit **/
    code: string;
    /** Model containing the new basemap details **/
    requestBody: BasemapEditWebRequestModel;
  }): Promise<BasemapWithOperationsSummaryWebResponseModel> {
    const options = this.basemapEditApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public basemapEditApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the basemap to edit **/
    code: string;
    /** Model containing the new basemap details **/
    requestBody: BasemapEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/basemap/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async basemapDelete({
    code,
  }: {
    /** The Guc of the basemap to delete **/
    code: string;
  }): Promise<void> {
    const options = this.basemapDeleteApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public basemapDeleteApiRequestOptions({
    code,
  }: {
    /** The Guc of the basemap to delete **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/basemap/${code}`,
    };
  }

  public async basemapList({
    query,
    userGroup,
    context,
    page,
    pageSize,
  }: {
    /** Optional Name query to filter the basemaps by **/
    query?: string | null;
    /** Optional Guc to filter basemaps by. If specified, only the basemaps
     * that have this user group code within their permissions are returned **/
    userGroup?: string | null;
    /** The optional basemaps context to filter on **/
    context?: Context | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<BasemapListWebResponseModel> {
    const options = this.basemapListApiRequestOptions({
      query,
      userGroup,
      context,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public basemapListApiRequestOptions({
    query,
    userGroup,
    context,
    page,
    pageSize,
  }: {
    /** Optional Name query to filter the basemaps by **/
    query?: string | null;
    /** Optional Guc to filter basemaps by. If specified, only the basemaps
     * that have this user group code within their permissions are returned **/
    userGroup?: string | null;
    /** The optional basemaps context to filter on **/
    context?: Context | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
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

  public async basemapCreate({
    requestBody,
  }: {
    /** Model containing the new basemap details **/
    requestBody: BasemapCreateWebRequestModel;
  }): Promise<BasemapWithOperationsSummaryWebResponseModel> {
    const options = this.basemapCreateApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public basemapCreateApiRequestOptions({
    requestBody,
  }: {
    /** Model containing the new basemap details **/
    requestBody: BasemapCreateWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/basemap`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async basemapGetPermissions({
    code,
    username,
    role,
  }: {
    /** The Guc for the basemap whose permissions are being requested **/
    code: string;
    /** Optional username to get permissions for the specific user.
     * This value is mutually exclusive with Role. **/
    username?: string | null;
    /** Optional role to get permissions for the specific role.
     * This value is mutually exclusive with Username. **/
    role?: string | null;
  }): Promise<BasemapPermissionsGetWebResponseModel> {
    const options = this.basemapGetPermissionsApiRequestOptions({
      code,
      username,
      role,
    });
    const result = await __request(options);
    return result.body;
  }

  public basemapGetPermissionsApiRequestOptions({
    code,
    username,
    role,
  }: {
    /** The Guc for the basemap whose permissions are being requested **/
    code: string;
    /** Optional username to get permissions for the specific user.
     * This value is mutually exclusive with Role. **/
    username?: string | null;
    /** Optional role to get permissions for the specific role.
     * This value is mutually exclusive with Username. **/
    role?: string | null;
  }): ApiRequestOptions {
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

  public async basemapEditPermissions({
    code,
    requestBody,
  }: {
    /** The Guc of the basemap to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: BasemapPermissionsEditWebRequestModel;
  }): Promise<BasemapWithPermissionsWebResponseModel> {
    const options = this.basemapEditPermissionsApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public basemapEditPermissionsApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the basemap to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: BasemapPermissionsEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/basemap/${code}/permissions`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async basemapBasemapAccessAdvisorByUser({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get basemap access advisor for **/
    username: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<BasemapAccessAdvisorByUserListWebResponseModel> {
    const options = this.basemapBasemapAccessAdvisorByUserApiRequestOptions({
      username,
      query,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public basemapBasemapAccessAdvisorByUserApiRequestOptions({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get basemap access advisor for **/
    username: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
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

  public async basemapBasemapAccessAdvisorByRole({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get basemap access advisor for **/
    code: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<BasemapAccessAdvisorByRoleListWebResponseModel> {
    const options = this.basemapBasemapAccessAdvisorByRoleApiRequestOptions({
      code,
      query,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public basemapBasemapAccessAdvisorByRoleApiRequestOptions({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get basemap access advisor for **/
    code: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
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
