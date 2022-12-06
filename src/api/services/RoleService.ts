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
   * @returns AlloyRoleGetWebResponseModel Retrieves the user role matching the specified code
   */
  roleGet({
    code,
  }: {
    /** The code of the user role to retrieve **/
    code: string;
  }): Promise<AlloyRoleGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Gets a user role by code
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  roleGetApiRequestOptions({
    code,
  }: {
    /** The code of the user role to retrieve **/
    code: string;
  }): ApiRequestOptions;

  /**
   * Edits a user role
   * Edits the user role matching the provided code
   * @returns AlloyRoleEditWebResponseModel
   */
  roleEdit({
    code,
    requestBody,
  }: {
    /** The Guc of the user role to edit **/
    code: string;
    /** The model containing the edit info **/
    requestBody: AlloyRoleEditWebRequestModel;
  }): Promise<AlloyRoleEditWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edits a user role
   * Edits the user role matching the provided code
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  roleEditApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the user role to edit **/
    code: string;
    /** The model containing the edit info **/
    requestBody: AlloyRoleEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Deletes a user role
   * Deletes a user role matching the specified code
   * @returns void
   */
  roleDelete({
    code,
  }: {
    /** The Guc of the user role to delete **/
    code: string;
  }): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Deletes a user role
   * Deletes a user role matching the specified code
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  roleDeleteApiRequestOptions({
    code,
  }: {
    /** The Guc of the user role to delete **/
    code: string;
  }): ApiRequestOptions;

  /**
   * List and filter user roles
   * List the user roles in the system by taking advantage of the provided optional filters
   * @returns AlloyRoleListWebResponseModel
   */
  roleList({
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
  }): Promise<AlloyRoleListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List and filter user roles
   * List the user roles in the system by taking advantage of the provided optional filters
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  roleListApiRequestOptions({
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
  }): ApiRequestOptions;

  /**
   * Creates a user role
   * Creates a user role using the information specified. A user role is the unit of permissions in Alloy.
   * It contains users and it is associated to permissions for objects with UAC
   * rules like Designs and Layers
   * @returns AlloyRoleCreateWebResponseModel
   */
  roleCreate({
    requestBody,
  }: {
    /** The model containing the creation info **/
    requestBody: AlloyRoleCreateWebRequestModel;
  }): Promise<AlloyRoleCreateWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Creates a user role
   * Creates a user role using the information specified. A user role is the unit of permissions in Alloy.
   * It contains users and it is associated to permissions for objects with UAC
   * rules like Designs and Layers
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  roleCreateApiRequestOptions({
    requestBody,
  }: {
    /** The model containing the creation info **/
    requestBody: AlloyRoleCreateWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Adds a user to a role
   * This endpoint allows to add new users to an existing user role
   * @returns void
   */
  roleAddUser({
    requestBody,
  }: {
    /** The model containing the info necessary to add a user to a role **/
    requestBody: AlloyRoleAddUserWebRequestModel;
  }): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Adds a user to a role
   * This endpoint allows to add new users to an existing user role
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  roleAddUserApiRequestOptions({
    requestBody,
  }: {
    /** The model containing the info necessary to add a user to a role **/
    requestBody: AlloyRoleAddUserWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Removes a user from a role
   * This endpoint allows to remove users from an existing user role
   * @returns void
   */
  roleRemoveUser({
    requestBody,
  }: {
    /** The model containing the info necessary to remove a user from a role **/
    requestBody: AlloyRoleRemoveUserWebRequestModel;
  }): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Removes a user from a role
   * This endpoint allows to remove users from an existing user role
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  roleRemoveUserApiRequestOptions({
    requestBody,
  }: {
    /** The model containing the info necessary to remove a user from a role **/
    requestBody: AlloyRoleRemoveUserWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Adds a group to a role
   * This endpoint allows to add new groups to an existing group role
   * @returns void
   */
  roleAddGroup({
    requestBody,
  }: {
    /** The model containing the info necessary to add a group to a role **/
    requestBody: AlloyRoleAddGroupWebRequestModel;
  }): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Adds a group to a role
   * This endpoint allows to add new groups to an existing group role
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  roleAddGroupApiRequestOptions({
    requestBody,
  }: {
    /** The model containing the info necessary to add a group to a role **/
    requestBody: AlloyRoleAddGroupWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Removes a group from a role
   * This endpoint allows to remove groups from an existing group role
   * @returns void
   */
  roleRemoveGroup({
    requestBody,
  }: {
    /** The model containing the info necessary to remove a group from a role **/
    requestBody: AlloyRoleRemoveGroupWebRequestModel;
  }): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Removes a group from a role
   * This endpoint allows to remove groups from an existing group role
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  roleRemoveGroupApiRequestOptions({
    requestBody,
  }: {
    /** The model containing the info necessary to remove a group from a role **/
    requestBody: AlloyRoleRemoveGroupWebRequestModel;
  }): ApiRequestOptions;
}
