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

  public async meshGet(code: string): Promise<MeshWithOperationsSummaryWebResponseModel> {
    const options = this.meshGetApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public meshGetApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/mesh/${code}`,
    };
  }

  public async meshEdit(
    code: string,
    requestBody: MeshEditWebRequestModel,
  ): Promise<MeshWithOperationsSummaryWebResponseModel> {
    const options = this.meshEditApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public meshEditApiRequestOptions(
    code: string,
    requestBody: MeshEditWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/mesh/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async meshList(
    query?: string | null,
    userGroup?: string | null,
    context?: Context | null,
    page?: number,
    pageSize?: number,
  ): Promise<MeshListWebResponseModel> {
    const options = this.meshListApiRequestOptions(query, userGroup, context, page, pageSize);
    const result = await __request(options);
    return result.body;
  }

  public meshListApiRequestOptions(
    query?: string | null,
    userGroup?: string | null,
    context?: Context | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
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

  public async meshGetPermissions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): Promise<MeshPermissionsGetWebResponseModel> {
    const options = this.meshGetPermissionsApiRequestOptions(code, username, role);
    const result = await __request(options);
    return result.body;
  }

  public meshGetPermissionsApiRequestOptions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): ApiRequestOptions {
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

  public async meshEditPermissions(
    code: string,
    requestBody: MeshPermissionsEditWebRequestModel,
  ): Promise<MeshWithPermissionsWebResponseModel> {
    const options = this.meshEditPermissionsApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public meshEditPermissionsApiRequestOptions(
    code: string,
    requestBody: MeshPermissionsEditWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/mesh/${code}/permissions`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async meshMeshAccessAdvisorByUser(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<MeshAccessAdvisorByUserListWebResponseModel> {
    const options = this.meshMeshAccessAdvisorByUserApiRequestOptions(
      username,
      query,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public meshMeshAccessAdvisorByUserApiRequestOptions(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
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

  public async meshMeshAccessAdvisorByRole(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<MeshAccessAdvisorByRoleListWebResponseModel> {
    const options = this.meshMeshAccessAdvisorByRoleApiRequestOptions(code, query, page, pageSize);
    const result = await __request(options);
    return result.body;
  }

  public meshMeshAccessAdvisorByRoleApiRequestOptions(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
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
