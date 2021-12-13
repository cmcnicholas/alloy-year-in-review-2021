/* eslint-disable */

import type { AlloyUserCreateWebRequestModel } from '../models/AlloyUserCreateWebRequestModel';
import type { AlloyUserCreateWebResponseModel } from '../models/AlloyUserCreateWebResponseModel';
import type { AlloyUserEditCurrentWebRequestModel } from '../models/AlloyUserEditCurrentWebRequestModel';
import type { AlloyUserEditCurrentWebResponseModel } from '../models/AlloyUserEditCurrentWebResponseModel';
import type { AlloyUserGetCurrentWebResponseModel } from '../models/AlloyUserGetCurrentWebResponseModel';
import type { AlloyUserGetWebResponseModel } from '../models/AlloyUserGetWebResponseModel';
import type { AlloyUserListWebResponseModel } from '../models/AlloyUserListWebResponseModel';
import type { ChangePasswordWebRequestModel } from '../models/ChangePasswordWebRequestModel';
import type { ForgotPasswordWebRequestModel } from '../models/ForgotPasswordWebRequestModel';
import type { SubmitPasswordResetWebRequestModel } from '../models/SubmitPasswordResetWebRequestModel';
import type { UserService } from './UserService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class UserServiceDefault implements UserService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async userGet(username: string): Promise<AlloyUserGetWebResponseModel> {
    const options = this.userGetApiRequestOptions(username);
    const result = await __request(options);
    return result.body;
  }

  public userGetApiRequestOptions(username: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/user/${username}`,
    };
  }

  public async userRemove(username: string): Promise<void> {
    const options = this.userRemoveApiRequestOptions(username);
    const result = await __request(options);
    return result.body;
  }

  public userRemoveApiRequestOptions(username: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/user/${username}`,
    };
  }

  public async userGetByUserId(userId: string): Promise<AlloyUserGetWebResponseModel> {
    const options = this.userGetByUserIdApiRequestOptions(userId);
    const result = await __request(options);
    return result.body;
  }

  public userGetByUserIdApiRequestOptions(userId: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/user/user-id/${userId}`,
    };
  }

  public async userGetCurrentUser(): Promise<AlloyUserGetCurrentWebResponseModel> {
    const options = this.userGetCurrentUserApiRequestOptions();
    const result = await __request(options);
    return result.body;
  }

  public userGetCurrentUserApiRequestOptions(): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/user/me`,
    };
  }

  public async userEditCurrentUser(
    requestBody: AlloyUserEditCurrentWebRequestModel,
  ): Promise<AlloyUserEditCurrentWebResponseModel> {
    const options = this.userEditCurrentUserApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public userEditCurrentUserApiRequestOptions(
    requestBody: AlloyUserEditCurrentWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/user/me`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async userList(
    query?: string | null,
    userGroup?: string | null,
    role?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<AlloyUserListWebResponseModel> {
    const options = this.userListApiRequestOptions(query, userGroup, role, page, pageSize);
    const result = await __request(options);
    return result.body;
  }

  public userListApiRequestOptions(
    query?: string | null,
    userGroup?: string | null,
    role?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/user`,
      query: {
        Query: query,
        UserGroup: userGroup,
        Role: role,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async userCreate(
    requestBody: AlloyUserCreateWebRequestModel,
  ): Promise<AlloyUserCreateWebResponseModel> {
    const options = this.userCreateApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public userCreateApiRequestOptions(
    requestBody: AlloyUserCreateWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/user`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async userForgotPasswordReset(requestBody: ForgotPasswordWebRequestModel): Promise<void> {
    const options = this.userForgotPasswordResetApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public userForgotPasswordResetApiRequestOptions(
    requestBody: ForgotPasswordWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/user/forgot-password`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async userSubmitPasswordReset(
    resetToken: string,
    requestBody: SubmitPasswordResetWebRequestModel,
  ): Promise<void> {
    const options = this.userSubmitPasswordResetApiRequestOptions(resetToken, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public userSubmitPasswordResetApiRequestOptions(
    resetToken: string,
    requestBody: SubmitPasswordResetWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/user/password-reset/${resetToken}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async userChangePassword(requestBody: ChangePasswordWebRequestModel): Promise<void> {
    const options = this.userChangePasswordApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public userChangePasswordApiRequestOptions(
    requestBody: ChangePasswordWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/user/password-change`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }
}
