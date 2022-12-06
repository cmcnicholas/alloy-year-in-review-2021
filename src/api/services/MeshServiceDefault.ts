/* eslint-disable */

import type { Context } from '../models/Context';
import type { MeshAccessAdvisorByRoleListWebResponseModel } from '../models/MeshAccessAdvisorByRoleListWebResponseModel';
import type { MeshAccessAdvisorByUserListWebResponseModel } from '../models/MeshAccessAdvisorByUserListWebResponseModel';
import type { MeshEditWebRequestModel } from '../models/MeshEditWebRequestModel';
import type { MeshListWebResponseModel } from '../models/MeshListWebResponseModel';
import type { MeshPermissionsEditWebRequestModel } from '../models/MeshPermissionsEditWebRequestModel';
import type { MeshPermissionsGetWebResponseModel } from '../models/MeshPermissionsGetWebResponseModel';
import type { MeshWithOperationsSummaryWebResponseModel } from '../models/MeshWithOperationsSummaryWebResponseModel';
import type { MeshWithPermissionsWebResponseModel } from '../models/MeshWithPermissionsWebResponseModel';
import type { MeshService } from './MeshService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class MeshServiceDefault implements MeshService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async meshGet({
    code,
  }: {
    /** The Guc for the mesh being requested **/
    code: string;
  }): Promise<MeshWithOperationsSummaryWebResponseModel> {
    const options = this.meshGetApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public meshGetApiRequestOptions({
    code,
  }: {
    /** The Guc for the mesh being requested **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/mesh/${code}`,
    };
  }

  public async meshEdit({
    code,
    requestBody,
  }: {
    /** The Guc of the mesh to edit **/
    code: string;
    /** Model containing the new mesh details **/
    requestBody: MeshEditWebRequestModel;
  }): Promise<MeshWithOperationsSummaryWebResponseModel> {
    const options = this.meshEditApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public meshEditApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the mesh to edit **/
    code: string;
    /** Model containing the new mesh details **/
    requestBody: MeshEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/mesh/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async meshList({
    query,
    userGroup,
    context,
    page,
    pageSize,
  }: {
    /** The optional mesh query string to filter on **/
    query?: string | null;
    /** Optional Guc to filter meshes by. If specified, only the meshes
     * that have this user group code within their permissions are returned **/
    userGroup?: string | null;
    /** Optional mesh Context filter **/
    context?: Context | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<MeshListWebResponseModel> {
    const options = this.meshListApiRequestOptions({
      query,
      userGroup,
      context,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public meshListApiRequestOptions({
    query,
    userGroup,
    context,
    page,
    pageSize,
  }: {
    /** The optional mesh query string to filter on **/
    query?: string | null;
    /** Optional Guc to filter meshes by. If specified, only the meshes
     * that have this user group code within their permissions are returned **/
    userGroup?: string | null;
    /** Optional mesh Context filter **/
    context?: Context | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/mesh`,
      query: {
        Query: query,
        UserGroup: userGroup,
        Context: context,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async meshGetPermissions({
    code,
    username,
    role,
  }: {
    /** The Guc for the mesh whose permissions are being requested **/
    code: string;
    /** Optional username to get permissions for the specific user.
     * This value is mutually exclusive with Role. **/
    username?: string | null;
    /** Optional role to get permissions for the specific role.
     * This value is mutually exclusive with Username. **/
    role?: string | null;
  }): Promise<MeshPermissionsGetWebResponseModel> {
    const options = this.meshGetPermissionsApiRequestOptions({
      code,
      username,
      role,
    });
    const result = await __request(options);
    return result.body;
  }

  public meshGetPermissionsApiRequestOptions({
    code,
    username,
    role,
  }: {
    /** The Guc for the mesh whose permissions are being requested **/
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
      path: `/api/mesh/${code}/permissions`,
      query: {
        Username: username,
        Role: role,
      },
    };
  }

  public async meshEditPermissions({
    code,
    requestBody,
  }: {
    /** The Guc of the mesh to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: MeshPermissionsEditWebRequestModel;
  }): Promise<MeshWithPermissionsWebResponseModel> {
    const options = this.meshEditPermissionsApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public meshEditPermissionsApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the mesh to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: MeshPermissionsEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/mesh/${code}/permissions`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async meshMeshAccessAdvisorByUser({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get mesh access advisor for **/
    username: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<MeshAccessAdvisorByUserListWebResponseModel> {
    const options = this.meshMeshAccessAdvisorByUserApiRequestOptions({
      username,
      query,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public meshMeshAccessAdvisorByUserApiRequestOptions({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get mesh access advisor for **/
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
      path: `/api/mesh/access-advisor/user/${username}`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async meshMeshAccessAdvisorByRole({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get mesh access advisor for **/
    code: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<MeshAccessAdvisorByRoleListWebResponseModel> {
    const options = this.meshMeshAccessAdvisorByRoleApiRequestOptions({
      code,
      query,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public meshMeshAccessAdvisorByRoleApiRequestOptions({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get mesh access advisor for **/
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
      path: `/api/mesh/access-advisor/role/${code}`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }
}
