/* eslint-disable */

import type { AlloyRoleAddGroupWebRequestModel } from '../models/AlloyRoleAddGroupWebRequestModel';
import type { AlloyRoleAddUserWebRequestModel } from '../models/AlloyRoleAddUserWebRequestModel';
import type { AlloyRoleCreateWebRequestModel } from '../models/AlloyRoleCreateWebRequestModel';
import type { AlloyRoleCreateWebResponseModel } from '../models/AlloyRoleCreateWebResponseModel';
import type { AlloyRoleEditWebRequestModel } from '../models/AlloyRoleEditWebRequestModel';
import type { AlloyRoleEditWebResponseModel } from '../models/AlloyRoleEditWebResponseModel';
import type { AlloyRoleGetWebResponseModel } from '../models/AlloyRoleGetWebResponseModel';
import type { AlloyRoleListWebResponseModel } from '../models/AlloyRoleListWebResponseModel';
import type { AlloyRoleRemoveGroupWebRequestModel } from '../models/AlloyRoleRemoveGroupWebRequestModel';
import type { AlloyRoleRemoveUserWebRequestModel } from '../models/AlloyRoleRemoveUserWebRequestModel';
import type { Context } from '../models/Context';
import type { RoleService } from './RoleService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class RoleServiceDefault implements RoleService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async roleGet(code: string): Promise<AlloyRoleGetWebResponseModel> {
    const options = this.roleGetApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public roleGetApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/role/${code}`,
    };
  }

  public async roleEdit(
    code: string,
    requestBody: AlloyRoleEditWebRequestModel,
  ): Promise<AlloyRoleEditWebResponseModel> {
    const options = this.roleEditApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public roleEditApiRequestOptions(
    code: string,
    requestBody: AlloyRoleEditWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/role/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async roleDelete(code: string): Promise<void> {
    const options = this.roleDeleteApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public roleDeleteApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/role/${code}`,
    };
  }

  public async roleList(
    query?: string | null,
    context?: Context | null,
    username?: string | null,
    groupCode?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<AlloyRoleListWebResponseModel> {
    const options = this.roleListApiRequestOptions(
      query,
      context,
      username,
      groupCode,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public roleListApiRequestOptions(
    query?: string | null,
    context?: Context | null,
    username?: string | null,
    groupCode?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/role`,
      query: {
        Query: query,
        Context: context,
        Username: username,
        GroupCode: groupCode,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async roleCreate(
    requestBody: AlloyRoleCreateWebRequestModel,
  ): Promise<AlloyRoleCreateWebResponseModel> {
    const options = this.roleCreateApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public roleCreateApiRequestOptions(
    requestBody: AlloyRoleCreateWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/role`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async roleAddUser(requestBody: AlloyRoleAddUserWebRequestModel): Promise<void> {
    const options = this.roleAddUserApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public roleAddUserApiRequestOptions(
    requestBody: AlloyRoleAddUserWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/role/user/add`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async roleRemoveUser(requestBody: AlloyRoleRemoveUserWebRequestModel): Promise<void> {
    const options = this.roleRemoveUserApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public roleRemoveUserApiRequestOptions(
    requestBody: AlloyRoleRemoveUserWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/role/user/remove`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async roleAddGroup(requestBody: AlloyRoleAddGroupWebRequestModel): Promise<void> {
    const options = this.roleAddGroupApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public roleAddGroupApiRequestOptions(
    requestBody: AlloyRoleAddGroupWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/role/group/add`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async roleRemoveGroup(requestBody: AlloyRoleRemoveGroupWebRequestModel): Promise<void> {
    const options = this.roleRemoveGroupApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public roleRemoveGroupApiRequestOptions(
    requestBody: AlloyRoleRemoveGroupWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/role/group/remove`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }
}
