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
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface UserGroupService {
  /**
   * Gets a user group by code
   * @param code The code of the user group to retrieve
   * @returns AlloyUserGroupGetWebResponseModel Retrieves the user group matching the specified code
   */
  userGroupGet(code: string): Promise<AlloyUserGroupGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Gets a user group by code
   * @param code The code of the user group to retrieve
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  userGroupGetApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * Edits a user group
   * Edits the user group matching the provided code
   * @param code The Guc of the user group to edit
   * @param requestBody The model containing the edit info
   * @returns UserGroupEditWebResponseModel
   */
  userGroupEdit(
    code: string,
    requestBody: UserGroupEditWebRequestModel,
  ): Promise<UserGroupEditWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edits a user group
   * Edits the user group matching the provided code
   * @param code The Guc of the user group to edit
   * @param requestBody The model containing the edit info
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  userGroupEditApiRequestOptions(
    code: string,
    requestBody: UserGroupEditWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Deletes a user group
   * Deletes a user group matching the specified code
   * @param code The Guc of the user group to delete
   * @returns void
   */
  userGroupDelete(code: string): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Deletes a user group
   * Deletes a user group matching the specified code
   * @param code The Guc of the user group to delete
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  userGroupDeleteApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * List and filter user groups
   * List the user groups in the system by taking advantage of the provided optional filters
   * @param query Optional query to filter the user groups by
   * @param context Optional Context filter
   * @param username Optional username parameter to return only groups containing the correspondent user
   * @param role Optional role parameter to return only groups that are part of this role
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns AlloyUserGroupListWebResponseModel
   */
  userGroupList(
    query?: string | null,
    context?: Context | null,
    username?: string | null,
    role?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<AlloyUserGroupListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List and filter user groups
   * List the user groups in the system by taking advantage of the provided optional filters
   * @param query Optional query to filter the user groups by
   * @param context Optional Context filter
   * @param username Optional username parameter to return only groups containing the correspondent user
   * @param role Optional role parameter to return only groups that are part of this role
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  userGroupListApiRequestOptions(
    query?: string | null,
    context?: Context | null,
    username?: string | null,
    role?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Creates a user group
   * Creates a user group using the information specified. A user group is the unit of permissions in Alloy.
   * It contains users and it is associated to permissions for objects with UAC
   * rules like Designs and Layers
   * @param requestBody The model containing the creation info
   * @returns UserGroupCreateWebResponseModel
   */
  userGroupCreate(
    requestBody: UserGroupCreateWebRequestModel,
  ): Promise<UserGroupCreateWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Creates a user group
   * Creates a user group using the information specified. A user group is the unit of permissions in Alloy.
   * It contains users and it is associated to permissions for objects with UAC
   * rules like Designs and Layers
   * @param requestBody The model containing the creation info
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  userGroupCreateApiRequestOptions(requestBody: UserGroupCreateWebRequestModel): ApiRequestOptions;

  /**
   * Adds a user to a group
   * This endpoint allows to add new users to an existing user group
   * @param requestBody The model containing the info necessary to add a user to a group
   * @returns void
   */
  userGroupAddUser(requestBody: UserGroupAddUserWebRequestModel): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Adds a user to a group
   * This endpoint allows to add new users to an existing user group
   * @param requestBody The model containing the info necessary to add a user to a group
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  userGroupAddUserApiRequestOptions(
    requestBody: UserGroupAddUserWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Removes a user from a group
   * This endpoint allows to remove users from an existing user group
   * @param requestBody The model containing the info necessary to remove a user from a group
   * @returns void
   */
  userGroupRemoveUser(requestBody: UserGroupRemoveUserWebRequestModel): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Removes a user from a group
   * This endpoint allows to remove users from an existing user group
   * @param requestBody The model containing the info necessary to remove a user from a group
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  userGroupRemoveUserApiRequestOptions(
    requestBody: UserGroupRemoveUserWebRequestModel,
  ): ApiRequestOptions;
}
