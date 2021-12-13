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
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface UserService {
  /**
   * Gets a user by username
   * Retrieves the user matching the username
   * @param username The username of the user to retrieve
   * @returns AlloyUserGetWebResponseModel
   */
  userGet(username: string): Promise<AlloyUserGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Gets a user by username
   * Retrieves the user matching the username
   * @param username The username of the user to retrieve
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  userGetApiRequestOptions(username: string): ApiRequestOptions;

  /**
   * Remove a user
   * This call will remove a user from the current sessions customer. This does not delete the user from an Alloy
   * region but, instead, deletes the user for this customer.
   * @param username The username of the user to remove from the customer
   * @returns void
   */
  userRemove(username: string): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Remove a user
   * This call will remove a user from the current sessions customer. This does not delete the user from an Alloy
   * region but, instead, deletes the user for this customer.
   * @param username The username of the user to remove from the customer
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  userRemoveApiRequestOptions(username: string): ApiRequestOptions;

  /**
   * Gets a user by its unique user id
   * Retrieves the user matching the use id
   * @param userId The user id of the user to retrieve
   * @returns AlloyUserGetWebResponseModel
   */
  userGetByUserId(userId: string): Promise<AlloyUserGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Gets a user by its unique user id
   * Retrieves the user matching the use id
   * @param userId The user id of the user to retrieve
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  userGetByUserIdApiRequestOptions(userId: string): ApiRequestOptions;

  /**
   * Get the logged in user
   * Retrieves the information of the logged in user
   * @returns AlloyUserGetCurrentWebResponseModel
   */
  userGetCurrentUser(): Promise<AlloyUserGetCurrentWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get the logged in user
   * Retrieves the information of the logged in user
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  userGetCurrentUserApiRequestOptions(): ApiRequestOptions;

  /**
   * Edit the logged in user
   * This call will allow editing on the current user session. Only person owning the user
   * account may alter their details through this api.
   * @param requestBody The model containing the information of the user to edit
   * @returns AlloyUserEditCurrentWebResponseModel
   */
  userEditCurrentUser(
    requestBody: AlloyUserEditCurrentWebRequestModel,
  ): Promise<AlloyUserEditCurrentWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit the logged in user
   * This call will allow editing on the current user session. Only person owning the user
   * account may alter their details through this api.
   * @param requestBody The model containing the information of the user to edit
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  userEditCurrentUserApiRequestOptions(
    requestBody: AlloyUserEditCurrentWebRequestModel,
  ): ApiRequestOptions;

  /**
   * List users
   * Retrieves the users belonging to the current customer and that match the information specified
   * @param query Optional query to filter the user groups by which is applied to first name, last name, username and email
   * @param userGroup Optional user group code to filter users by the user group they belong to
   * @param role Optional role code to filter users by the role they belong to
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns AlloyUserListWebResponseModel
   */
  userList(
    query?: string | null,
    userGroup?: string | null,
    role?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<AlloyUserListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List users
   * Retrieves the users belonging to the current customer and that match the information specified
   * @param query Optional query to filter the user groups by which is applied to first name, last name, username and email
   * @param userGroup Optional user group code to filter users by the user group they belong to
   * @param role Optional role code to filter users by the role they belong to
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  userListApiRequestOptions(
    query?: string | null,
    userGroup?: string | null,
    role?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Create a user
   * This call will allow to create a user on a specific customer. As a result of this operation the user will be sent an email
   * containing the link necessary to set a new password
   * @param requestBody The model containing the information of the user to create
   * @returns AlloyUserCreateWebResponseModel
   */
  userCreate(requestBody: AlloyUserCreateWebRequestModel): Promise<AlloyUserCreateWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Create a user
   * This call will allow to create a user on a specific customer. As a result of this operation the user will be sent an email
   * containing the link necessary to set a new password
   * @param requestBody The model containing the information of the user to create
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  userCreateApiRequestOptions(requestBody: AlloyUserCreateWebRequestModel): ApiRequestOptions;

  /**
   * Trigger the forgotten password process
   * This endpoint is used when a user forgets a password and is thus unable to log into the system.
   * An email will be sent to the specified address giving the user the possibility to reset their own password
   * @param requestBody The model containing the information necessary to the process
   * @returns void
   */
  userForgotPasswordReset(requestBody: ForgotPasswordWebRequestModel): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Trigger the forgotten password process
   * This endpoint is used when a user forgets a password and is thus unable to log into the system.
   * An email will be sent to the specified address giving the user the possibility to reset their own password
   * @param requestBody The model containing the information necessary to the process
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  userForgotPasswordResetApiRequestOptions(
    requestBody: ForgotPasswordWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Submit password reset
   * Sets a new password for the user that matches the reset password token
   * @param resetToken The password reset token
   * @param requestBody The model containing the details necessary to submit a password reset
   * @returns void
   */
  userSubmitPasswordReset(
    resetToken: string,
    requestBody: SubmitPasswordResetWebRequestModel,
  ): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Submit password reset
   * Sets a new password for the user that matches the reset password token
   * @param resetToken The password reset token
   * @param requestBody The model containing the details necessary to submit a password reset
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  userSubmitPasswordResetApiRequestOptions(
    resetToken: string,
    requestBody: SubmitPasswordResetWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Change the password for the current user
   * Changes the user's current password. Checks that the old password given is valid for the current user
   * @param requestBody The model containing the details for changing password
   * @returns void
   */
  userChangePassword(requestBody: ChangePasswordWebRequestModel): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Change the password for the current user
   * Changes the user's current password. Checks that the old password given is valid for the current user
   * @param requestBody The model containing the details for changing password
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  userChangePasswordApiRequestOptions(
    requestBody: ChangePasswordWebRequestModel,
  ): ApiRequestOptions;
}
