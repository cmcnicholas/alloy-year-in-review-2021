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
   * @returns AlloyUserGroupGetWebResponseModel Retrieves the user group matching the specified code
   */
  userGroupGet({
    code,
  }: {
    /** The code of the user group to retrieve **/
    code: string;
  }): Promise<AlloyUserGroupGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Gets a user group by code
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  userGroupGetApiRequestOptions({
    code,
  }: {
    /** The code of the user group to retrieve **/
    code: string;
  }): ApiRequestOptions;

  /**
   * Edits a user group
   * Edits the user group matching the provided code
   * @returns UserGroupEditWebResponseModel
   */
  userGroupEdit({
    code,
    requestBody,
  }: {
    /** The Guc of the user group to edit **/
    code: string;
    /** The model containing the edit info **/
    requestBody: UserGroupEditWebRequestModel;
  }): Promise<UserGroupEditWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edits a user group
   * Edits the user group matching the provided code
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  userGroupEditApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the user group to edit **/
    code: string;
    /** The model containing the edit info **/
    requestBody: UserGroupEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Deletes a user group
   * Deletes a user group matching the specified code
   * @returns void
   */
  userGroupDelete({
    code,
  }: {
    /** The Guc of the user group to delete **/
    code: string;
  }): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Deletes a user group
   * Deletes a user group matching the specified code
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  userGroupDeleteApiRequestOptions({
    code,
  }: {
    /** The Guc of the user group to delete **/
    code: string;
  }): ApiRequestOptions;

  /**
   * List and filter user groups
   * List the user groups in the system by taking advantage of the provided optional filters
   * @returns AlloyUserGroupListWebResponseModel
   */
  userGroupList({
    query,
    context,
    username,
    role,
    page,
    pageSize,
  }: {
    /** Optional query to filter the user groups by **/
    query?: string | null;
    /** Optional Context filter **/
    context?: Context | null;
    /** Optional username parameter to return only groups containing the correspondent user **/
    username?: string | null;
    /** Optional role parameter to return only groups that are part of this role **/
    role?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<AlloyUserGroupListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List and filter user groups
   * List the user groups in the system by taking advantage of the provided optional filters
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  userGroupListApiRequestOptions({
    query,
    context,
    username,
    role,
    page,
    pageSize,
  }: {
    /** Optional query to filter the user groups by **/
    query?: string | null;
    /** Optional Context filter **/
    context?: Context | null;
    /** Optional username parameter to return only groups containing the correspondent user **/
    username?: string | null;
    /** Optional role parameter to return only groups that are part of this role **/
    role?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Creates a user group
   * Creates a user group using the information specified. A user group is the unit of permissions in Alloy.
   * It contains users and it is associated to permissions for objects with UAC
   * rules like Designs and Layers
   * @returns UserGroupCreateWebResponseModel
   */
  userGroupCreate({
    requestBody,
  }: {
    /** The model containing the creation info **/
    requestBody: UserGroupCreateWebRequestModel;
  }): Promise<UserGroupCreateWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Creates a user group
   * Creates a user group using the information specified. A user group is the unit of permissions in Alloy.
   * It contains users and it is associated to permissions for objects with UAC
   * rules like Designs and Layers
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  userGroupCreateApiRequestOptions({
    requestBody,
  }: {
    /** The model containing the creation info **/
    requestBody: UserGroupCreateWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Adds a user to a group
   * This endpoint allows to add new users to an existing user group
   * @returns void
   */
  userGroupAddUser({
    requestBody,
  }: {
    /** The model containing the info necessary to add a user to a group **/
    requestBody: UserGroupAddUserWebRequestModel;
  }): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Adds a user to a group
   * This endpoint allows to add new users to an existing user group
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  userGroupAddUserApiRequestOptions({
    requestBody,
  }: {
    /** The model containing the info necessary to add a user to a group **/
    requestBody: UserGroupAddUserWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Removes a user from a group
   * This endpoint allows to remove users from an existing user group
   * @returns void
   */
  userGroupRemoveUser({
    requestBody,
  }: {
    /** The model containing the info necessary to remove a user from a group **/
    requestBody: UserGroupRemoveUserWebRequestModel;
  }): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Removes a user from a group
   * This endpoint allows to remove users from an existing user group
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  userGroupRemoveUserApiRequestOptions({
    requestBody,
  }: {
    /** The model containing the info necessary to remove a user from a group **/
    requestBody: UserGroupRemoveUserWebRequestModel;
  }): ApiRequestOptions;
}
