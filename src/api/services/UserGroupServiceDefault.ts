/* eslint-disable */

import type { AlloyUserGroupGetWebResponseModel } from '../models/AlloyUserGroupGetWebResponseModel';
import type { AlloyUserGroupListWebResponseModel } from '../models/AlloyUserGroupListWebResponseModel';
import type { Context } from '../models/Context';
import type { UserGroupAddUserWebRequestModel } from '../models/UserGroupAddUserWebRequestModel';
import type { UserGroupCreateWebRequestModel } from '../models/UserGroupCreateWebRequestModel';
import type { UserGroupCreateWebResponseModel } from '../models/UserGroupCreateWebResponseModel';
import type { UserGroupEditWebRequestModel } from '../models/UserGroupEditWebRequestModel';
import type { UserGroupEditWebResponseModel } from '../models/UserGroupEditWebResponseModel';
import type { UserGroupRemoveUserWebRequestModel } from '../models/UserGroupRemoveUserWebRequestModel';
import type { UserGroupService } from './UserGroupService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class UserGroupServiceDefault implements UserGroupService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async userGroupGet(code: string): Promise<AlloyUserGroupGetWebResponseModel> {
    const options = this.userGroupGetApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public userGroupGetApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/user-group/${code}`,
    };
  }

  public async userGroupEdit(
    code: string,
    requestBody: UserGroupEditWebRequestModel,
  ): Promise<UserGroupEditWebResponseModel> {
    const options = this.userGroupEditApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public userGroupEditApiRequestOptions(
    code: string,
    requestBody: UserGroupEditWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/user-group/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async userGroupDelete(code: string): Promise<void> {
    const options = this.userGroupDeleteApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public userGroupDeleteApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/user-group/${code}`,
    };
  }

  public async userGroupList(
    query?: string | null,
    context?: Context | null,
    username?: string | null,
    role?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<AlloyUserGroupListWebResponseModel> {
    const options = this.userGroupListApiRequestOptions(
      query,
      context,
      username,
      role,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public userGroupListApiRequestOptions(
    query?: string | null,
    context?: Context | null,
    username?: string | null,
    role?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/user-group`,
      query: {
        Query: query,
        Context: context,
        Username: username,
        Role: role,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async userGroupCreate(
    requestBody: UserGroupCreateWebRequestModel,
  ): Promise<UserGroupCreateWebResponseModel> {
    const options = this.userGroupCreateApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public userGroupCreateApiRequestOptions(
    requestBody: UserGroupCreateWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/user-group`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async userGroupAddUser(requestBody: UserGroupAddUserWebRequestModel): Promise<void> {
    const options = this.userGroupAddUserApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public userGroupAddUserApiRequestOptions(
    requestBody: UserGroupAddUserWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/user-group/user/add`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async userGroupRemoveUser(requestBody: UserGroupRemoveUserWebRequestModel): Promise<void> {
    const options = this.userGroupRemoveUserApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public userGroupRemoveUserApiRequestOptions(
    requestBody: UserGroupRemoveUserWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/user-group/user/remove`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }
}
