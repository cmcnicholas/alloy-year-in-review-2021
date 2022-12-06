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

  public async roleGet({
    code,
  }: {
    /** The code of the user role to retrieve **/
    code: string;
  }): Promise<AlloyRoleGetWebResponseModel> {
    const options = this.roleGetApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public roleGetApiRequestOptions({
    code,
  }: {
    /** The code of the user role to retrieve **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/role/${code}`,
    };
  }

  public async roleEdit({
    code,
    requestBody,
  }: {
    /** The Guc of the user role to edit **/
    code: string;
    /** The model containing the edit info **/
    requestBody: AlloyRoleEditWebRequestModel;
  }): Promise<AlloyRoleEditWebResponseModel> {
    const options = this.roleEditApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public roleEditApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the user role to edit **/
    code: string;
    /** The model containing the edit info **/
    requestBody: AlloyRoleEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/role/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async roleDelete({
    code,
  }: {
    /** The Guc of the user role to delete **/
    code: string;
  }): Promise<void> {
    const options = this.roleDeleteApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public roleDeleteApiRequestOptions({
    code,
  }: {
    /** The Guc of the user role to delete **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/role/${code}`,
    };
  }

  public async roleList({
    query,
    context,
    username,
    groupCode,
    page,
    pageSize,
  }: {
    /** Optional query to filter the user roles by **/
    query?: string | null;
    /** Optional Context filter **/
    context?: Context | null;
    /** Optional username parameter to return only roles containing the correspondent user **/
    username?: string | null;
    /** Optional group code parameter to return only roles containing the correspondent user group **/
    groupCode?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<AlloyRoleListWebResponseModel> {
    const options = this.roleListApiRequestOptions({
      query,
      context,
      username,
      groupCode,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public roleListApiRequestOptions({
    query,
    context,
    username,
    groupCode,
    page,
    pageSize,
  }: {
    /** Optional query to filter the user roles by **/
    query?: string | null;
    /** Optional Context filter **/
    context?: Context | null;
    /** Optional username parameter to return only roles containing the correspondent user **/
    username?: string | null;
    /** Optional group code parameter to return only roles containing the correspondent user group **/
    groupCode?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
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

  public async roleCreate({
    requestBody,
  }: {
    /** The model containing the creation info **/
    requestBody: AlloyRoleCreateWebRequestModel;
  }): Promise<AlloyRoleCreateWebResponseModel> {
    const options = this.roleCreateApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public roleCreateApiRequestOptions({
    requestBody,
  }: {
    /** The model containing the creation info **/
    requestBody: AlloyRoleCreateWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/role`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async roleAddUser({
    requestBody,
  }: {
    /** The model containing the info necessary to add a user to a role **/
    requestBody: AlloyRoleAddUserWebRequestModel;
  }): Promise<void> {
    const options = this.roleAddUserApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public roleAddUserApiRequestOptions({
    requestBody,
  }: {
    /** The model containing the info necessary to add a user to a role **/
    requestBody: AlloyRoleAddUserWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/role/user/add`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async roleRemoveUser({
    requestBody,
  }: {
    /** The model containing the info necessary to remove a user from a role **/
    requestBody: AlloyRoleRemoveUserWebRequestModel;
  }): Promise<void> {
    const options = this.roleRemoveUserApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public roleRemoveUserApiRequestOptions({
    requestBody,
  }: {
    /** The model containing the info necessary to remove a user from a role **/
    requestBody: AlloyRoleRemoveUserWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/role/user/remove`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async roleAddGroup({
    requestBody,
  }: {
    /** The model containing the info necessary to add a group to a role **/
    requestBody: AlloyRoleAddGroupWebRequestModel;
  }): Promise<void> {
    const options = this.roleAddGroupApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public roleAddGroupApiRequestOptions({
    requestBody,
  }: {
    /** The model containing the info necessary to add a group to a role **/
    requestBody: AlloyRoleAddGroupWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/role/group/add`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async roleRemoveGroup({
    requestBody,
  }: {
    /** The model containing the info necessary to remove a group from a role **/
    requestBody: AlloyRoleRemoveGroupWebRequestModel;
  }): Promise<void> {
    const options = this.roleRemoveGroupApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public roleRemoveGroupApiRequestOptions({
    requestBody,
  }: {
    /** The model containing the info necessary to remove a group from a role **/
    requestBody: AlloyRoleRemoveGroupWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/role/group/remove`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }
}
