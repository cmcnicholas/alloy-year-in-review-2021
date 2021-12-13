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
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface RoleService {
  /**
   * Gets a user role by code
   * @param code The code of the user role to retrieve
   * @returns AlloyRoleGetWebResponseModel Retrieves the user role matching the specified code
   */
  roleGet(code: string): Promise<AlloyRoleGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Gets a user role by code
   * @param code The code of the user role to retrieve
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  roleGetApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * Edits a user role
   * Edits the user role matching the provided code
   * @param code The Guc of the user role to edit
   * @param requestBody The model containing the edit info
   * @returns AlloyRoleEditWebResponseModel
   */
  roleEdit(
    code: string,
    requestBody: AlloyRoleEditWebRequestModel,
  ): Promise<AlloyRoleEditWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edits a user role
   * Edits the user role matching the provided code
   * @param code The Guc of the user role to edit
   * @param requestBody The model containing the edit info
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  roleEditApiRequestOptions(
    code: string,
    requestBody: AlloyRoleEditWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Deletes a user role
   * Deletes a user role matching the specified code
   * @param code The Guc of the user role to delete
   * @returns void
   */
  roleDelete(code: string): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Deletes a user role
   * Deletes a user role matching the specified code
   * @param code The Guc of the user role to delete
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  roleDeleteApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * List and filter user roles
   * List the user roles in the system by taking advantage of the provided optional filters
   * @param query Optional query to filter the user roles by
   * @param context Optional Context filter
   * @param username Optional username parameter to return only roles containing the correspondent user
   * @param groupCode Optional group code parameter to return only roles containing the correspondent user group
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns AlloyRoleListWebResponseModel
   */
  roleList(
    query?: string | null,
    context?: Context | null,
    username?: string | null,
    groupCode?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<AlloyRoleListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List and filter user roles
   * List the user roles in the system by taking advantage of the provided optional filters
   * @param query Optional query to filter the user roles by
   * @param context Optional Context filter
   * @param username Optional username parameter to return only roles containing the correspondent user
   * @param groupCode Optional group code parameter to return only roles containing the correspondent user group
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  roleListApiRequestOptions(
    query?: string | null,
    context?: Context | null,
    username?: string | null,
    groupCode?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Creates a user role
   * Creates a user role using the information specified. A user role is the unit of permissions in Alloy.
   * It contains users and it is associated to permissions for objects with UAC
   * rules like Designs and Layers
   * @param requestBody The model containing the creation info
   * @returns AlloyRoleCreateWebResponseModel
   */
  roleCreate(requestBody: AlloyRoleCreateWebRequestModel): Promise<AlloyRoleCreateWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Creates a user role
   * Creates a user role using the information specified. A user role is the unit of permissions in Alloy.
   * It contains users and it is associated to permissions for objects with UAC
   * rules like Designs and Layers
   * @param requestBody The model containing the creation info
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  roleCreateApiRequestOptions(requestBody: AlloyRoleCreateWebRequestModel): ApiRequestOptions;

  /**
   * Adds a user to a role
   * This endpoint allows to add new users to an existing user role
   * @param requestBody The model containing the info necessary to add a user to a role
   * @returns void
   */
  roleAddUser(requestBody: AlloyRoleAddUserWebRequestModel): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Adds a user to a role
   * This endpoint allows to add new users to an existing user role
   * @param requestBody The model containing the info necessary to add a user to a role
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  roleAddUserApiRequestOptions(requestBody: AlloyRoleAddUserWebRequestModel): ApiRequestOptions;

  /**
   * Removes a user from a role
   * This endpoint allows to remove users from an existing user role
   * @param requestBody The model containing the info necessary to remove a user from a role
   * @returns void
   */
  roleRemoveUser(requestBody: AlloyRoleRemoveUserWebRequestModel): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Removes a user from a role
   * This endpoint allows to remove users from an existing user role
   * @param requestBody The model containing the info necessary to remove a user from a role
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  roleRemoveUserApiRequestOptions(
    requestBody: AlloyRoleRemoveUserWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Adds a group to a role
   * This endpoint allows to add new groups to an existing group role
   * @param requestBody The model containing the info necessary to add a group to a role
   * @returns void
   */
  roleAddGroup(requestBody: AlloyRoleAddGroupWebRequestModel): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Adds a group to a role
   * This endpoint allows to add new groups to an existing group role
   * @param requestBody The model containing the info necessary to add a group to a role
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  roleAddGroupApiRequestOptions(requestBody: AlloyRoleAddGroupWebRequestModel): ApiRequestOptions;

  /**
   * Removes a group from a role
   * This endpoint allows to remove groups from an existing group role
   * @param requestBody The model containing the info necessary to remove a group from a role
   * @returns void
   */
  roleRemoveGroup(requestBody: AlloyRoleRemoveGroupWebRequestModel): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Removes a group from a role
   * This endpoint allows to remove groups from an existing group role
   * @param requestBody The model containing the info necessary to remove a group from a role
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  roleRemoveGroupApiRequestOptions(
    requestBody: AlloyRoleRemoveGroupWebRequestModel,
  ): ApiRequestOptions;
}
