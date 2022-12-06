/* eslint-disable */

import type { AlloyUserCreateWebRequestModel } from '../models/AlloyUserCreateWebRequestModel';
import type { AlloyUserCreateWebResponseModel } from '../models/AlloyUserCreateWebResponseModel';
import type { AlloyUserEditCurrentWebRequestModel } from '../models/AlloyUserEditCurrentWebRequestModel';
import type { AlloyUserEditCurrentWebResponseModel } from '../models/AlloyUserEditCurrentWebResponseModel';
import type { AlloyUserGetCurrentWebResponseModel } from '../models/AlloyUserGetCurrentWebResponseModel';
import type { AlloyUserGetWebResponseModel } from '../models/AlloyUserGetWebResponseModel';
import type { AlloyUserListWebResponseModel } from '../models/AlloyUserListWebResponseModel';
import type { ChangePasswordWebRequestModel } from '../models/ChangePasswordWebRequestModel';
import type { CustomerUserEditWebRequestModel } from '../models/CustomerUserEditWebRequestModel';
import type { CustomerUserEditWebResponseModel } from '../models/CustomerUserEditWebResponseModel';
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

  public async userGet({
    username,
  }: {
    /** The username of the user to retrieve **/
    username: string;
  }): Promise<AlloyUserGetWebResponseModel> {
    const options = this.userGetApiRequestOptions({
      username,
    });
    const result = await __request(options);
    return result.body;
  }

  public userGetApiRequestOptions({
    username,
  }: {
    /** The username of the user to retrieve **/
    username: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/user/${username}`,
    };
  }

  public async userRemove({
    username,
  }: {
    /** The username of the user to remove from the customer **/
    username: string;
  }): Promise<void> {
    const options = this.userRemoveApiRequestOptions({
      username,
    });
    const result = await __request(options);
    return result.body;
  }

  public userRemoveApiRequestOptions({
    username,
  }: {
    /** The username of the user to remove from the customer **/
    username: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/user/${username}`,
    };
  }

  public async userEditCustomerUser({
    username,
    requestBody,
  }: {
    username: string;
    requestBody: CustomerUserEditWebRequestModel;
  }): Promise<CustomerUserEditWebResponseModel> {
    const options = this.userEditCustomerUserApiRequestOptions({
      username,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public userEditCustomerUserApiRequestOptions({
    username,
    requestBody,
  }: {
    username: string;
    requestBody: CustomerUserEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/user/${username}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async userGetByUserId({
    userId,
  }: {
    /** The user id of the user to retrieve **/
    userId: string;
  }): Promise<AlloyUserGetWebResponseModel> {
    const options = this.userGetByUserIdApiRequestOptions({
      userId,
    });
    const result = await __request(options);
    return result.body;
  }

  public userGetByUserIdApiRequestOptions({
    userId,
  }: {
    /** The user id of the user to retrieve **/
    userId: string;
  }): ApiRequestOptions {
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

  public async userEditCurrentUser({
    requestBody,
  }: {
    /** The model containing the information of the user to edit **/
    requestBody: AlloyUserEditCurrentWebRequestModel;
  }): Promise<AlloyUserEditCurrentWebResponseModel> {
    const options = this.userEditCurrentUserApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public userEditCurrentUserApiRequestOptions({
    requestBody,
  }: {
    /** The model containing the information of the user to edit **/
    requestBody: AlloyUserEditCurrentWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/user/me`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async userList({
    query,
    userGroup,
    role,
    page,
    pageSize,
  }: {
    /** Optional query to filter the user groups by which is applied to first name, last name, username and email **/
    query?: string | null;
    /** Optional user group code to filter users by the user group they belong to **/
    userGroup?: string | null;
    /** Optional role code to filter users by the role they belong to **/
    role?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<AlloyUserListWebResponseModel> {
    const options = this.userListApiRequestOptions({
      query,
      userGroup,
      role,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public userListApiRequestOptions({
    query,
    userGroup,
    role,
    page,
    pageSize,
  }: {
    /** Optional query to filter the user groups by which is applied to first name, last name, username and email **/
    query?: string | null;
    /** Optional user group code to filter users by the user group they belong to **/
    userGroup?: string | null;
    /** Optional role code to filter users by the role they belong to **/
    role?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
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

  public async userCreate({
    requestBody,
  }: {
    /** The model containing the information of the user to create **/
    requestBody: AlloyUserCreateWebRequestModel;
  }): Promise<AlloyUserCreateWebResponseModel> {
    const options = this.userCreateApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public userCreateApiRequestOptions({
    requestBody,
  }: {
    /** The model containing the information of the user to create **/
    requestBody: AlloyUserCreateWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/user`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async userForgotPasswordReset({
    requestBody,
  }: {
    /** The model containing the information necessary to the process **/
    requestBody: ForgotPasswordWebRequestModel;
  }): Promise<void> {
    const options = this.userForgotPasswordResetApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public userForgotPasswordResetApiRequestOptions({
    requestBody,
  }: {
    /** The model containing the information necessary to the process **/
    requestBody: ForgotPasswordWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/user/forgot-password`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async userSubmitPasswordReset({
    resetToken,
    requestBody,
  }: {
    /** The password reset token **/
    resetToken: string;
    /** The model containing the details necessary to submit a password reset **/
    requestBody: SubmitPasswordResetWebRequestModel;
  }): Promise<void> {
    const options = this.userSubmitPasswordResetApiRequestOptions({
      resetToken,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public userSubmitPasswordResetApiRequestOptions({
    resetToken,
    requestBody,
  }: {
    /** The password reset token **/
    resetToken: string;
    /** The model containing the details necessary to submit a password reset **/
    requestBody: SubmitPasswordResetWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/user/password-reset/${resetToken}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async userChangePassword({
    requestBody,
  }: {
    /** The model containing the details for changing password **/
    requestBody: ChangePasswordWebRequestModel;
  }): Promise<void> {
    const options = this.userChangePasswordApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public userChangePasswordApiRequestOptions({
    requestBody,
  }: {
    /** The model containing the details for changing password **/
    requestBody: ChangePasswordWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/user/password-change`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }
}
