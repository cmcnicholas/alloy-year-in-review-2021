/* eslint-disable */

import type { Context } from '../models/Context';
import type { WorkflowActionGroupAccessAdvisorByRoleListWebResponseModel } from '../models/WorkflowActionGroupAccessAdvisorByRoleListWebResponseModel';
import type { WorkflowActionGroupAccessAdvisorByUserListWebResponseModel } from '../models/WorkflowActionGroupAccessAdvisorByUserListWebResponseModel';
import type { WorkflowActionGroupAddActionWebRequestModel } from '../models/WorkflowActionGroupAddActionWebRequestModel';
import type { WorkflowActionGroupAddActionWebResponseModel } from '../models/WorkflowActionGroupAddActionWebResponseModel';
import type { WorkflowActionGroupCreateWebRequestModel } from '../models/WorkflowActionGroupCreateWebRequestModel';
import type { WorkflowActionGroupEditActionWebRequestModel } from '../models/WorkflowActionGroupEditActionWebRequestModel';
import type { WorkflowActionGroupEditActionWebResponseModel } from '../models/WorkflowActionGroupEditActionWebResponseModel';
import type { WorkflowActionGroupEditWebRequestModel } from '../models/WorkflowActionGroupEditWebRequestModel';
import type { WorkflowActionGroupGetActionParametersWebRequestModel } from '../models/WorkflowActionGroupGetActionParametersWebRequestModel';
import type { WorkflowActionGroupGetActionParametersWebResponseModel } from '../models/WorkflowActionGroupGetActionParametersWebResponseModel';
import type { WorkflowActionGroupGetAllowedActionsWebRequestModel } from '../models/WorkflowActionGroupGetAllowedActionsWebRequestModel';
import type { WorkflowActionGroupGetAllowedActionsWebResponseModel } from '../models/WorkflowActionGroupGetAllowedActionsWebResponseModel';
import type { WorkflowActionGroupGetWebResponseModel } from '../models/WorkflowActionGroupGetWebResponseModel';
import type { WorkflowActionGroupListWebResponseModel } from '../models/WorkflowActionGroupListWebResponseModel';
import type { WorkflowActionGroupPermissionsEditWebRequestModel } from '../models/WorkflowActionGroupPermissionsEditWebRequestModel';
import type { WorkflowActionGroupPermissionsGetWebResponseModel } from '../models/WorkflowActionGroupPermissionsGetWebResponseModel';
import type { WorkflowActionGroupRemoveActionWebResponseModel } from '../models/WorkflowActionGroupRemoveActionWebResponseModel';
import type { WorkflowActionGroupWithOperationsSummaryWebResponseModel } from '../models/WorkflowActionGroupWithOperationsSummaryWebResponseModel';
import type { WorkflowActionGroupWithPermissionsWebResponseModel } from '../models/WorkflowActionGroupWithPermissionsWebResponseModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface WorkflowActionGroupService {
  /**
   * Get a workflowActionGroup
   * @returns WorkflowActionGroupGetWebResponseModel
   */
  workflowActionGroupGet({
    code,
  }: {
    /** The Guc of the workflowActionGroup to retrieve **/
    code: string;
  }): Promise<WorkflowActionGroupGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a workflowActionGroup
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupGetApiRequestOptions({
    code,
  }: {
    /** The Guc of the workflowActionGroup to retrieve **/
    code: string;
  }): ApiRequestOptions;

  /**
   * Edit a workflowActionGroup
   * @returns WorkflowActionGroupWithOperationsSummaryWebResponseModel
   */
  workflowActionGroupEdit({
    code,
    requestBody,
  }: {
    /** The code of the workflowActionGroup to edit **/
    code: string;
    /** The model containing all the edit operation details **/
    requestBody: WorkflowActionGroupEditWebRequestModel;
  }): Promise<WorkflowActionGroupWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a workflowActionGroup
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupEditApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The code of the workflowActionGroup to edit **/
    code: string;
    /** The model containing all the edit operation details **/
    requestBody: WorkflowActionGroupEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Delete a workflowActionGroup
   * @returns void
   */
  workflowActionGroupDelete({
    code,
  }: {
    /** The code of the workflowActionGroup to delete **/
    code: string;
  }): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete a workflowActionGroup
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupDeleteApiRequestOptions({
    code,
  }: {
    /** The code of the workflowActionGroup to delete **/
    code: string;
  }): ApiRequestOptions;

  /**
   * List workflowActionGroups
   * @returns WorkflowActionGroupListWebResponseModel
   */
  workflowActionGroupList({
    name,
    context,
    userGroup,
    actionGroupInputCode,
    page,
    pageSize,
  }: {
    /** The optional workflow Action Group name (full or partial) to filter on **/
    name?: string | null;
    /** The optional workflow Action Group context to filter on **/
    context?: Context | null;
    /** Optional Guc to filter workflow Action Groups by. If specified, only the workflow action groups
     * that have this user group code within their permissions are returned **/
    userGroup?: string | null;
    /** Optional Guc to filter workflow action groups by. If specified, only the workflow action groups
     * that have this dodi code as their declared input type are returned **/
    actionGroupInputCode?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<WorkflowActionGroupListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List workflowActionGroups
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupListApiRequestOptions({
    name,
    context,
    userGroup,
    actionGroupInputCode,
    page,
    pageSize,
  }: {
    /** The optional workflow Action Group name (full or partial) to filter on **/
    name?: string | null;
    /** The optional workflow Action Group context to filter on **/
    context?: Context | null;
    /** Optional Guc to filter workflow Action Groups by. If specified, only the workflow action groups
     * that have this user group code within their permissions are returned **/
    userGroup?: string | null;
    /** Optional Guc to filter workflow action groups by. If specified, only the workflow action groups
     * that have this dodi code as their declared input type are returned **/
    actionGroupInputCode?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Create a workflowActionGroup
   * @returns WorkflowActionGroupWithOperationsSummaryWebResponseModel
   */
  workflowActionGroupCreate({
    requestBody,
  }: {
    /** The model containing all the create operation details **/
    requestBody: WorkflowActionGroupCreateWebRequestModel;
  }): Promise<WorkflowActionGroupWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Create a workflowActionGroup
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupCreateApiRequestOptions({
    requestBody,
  }: {
    /** The model containing all the create operation details **/
    requestBody: WorkflowActionGroupCreateWebRequestModel;
  }): ApiRequestOptions;

  /**
   * List the parameters for the specified action.
   * Given an action type, position in workflow action group, and values, get information
   * about extra parameters that need to be supplied (and if any are optional
   * since they can be inferred by the system) in this case.
   * @returns WorkflowActionGroupGetActionParametersWebResponseModel
   */
  workflowActionGroupGetActionParameters({
    code,
    requestBody,
  }: {
    /** The code of the workflowActionGroup being queried **/
    code: string;
    /** Model containing the details of the get parameters request **/
    requestBody: WorkflowActionGroupGetActionParametersWebRequestModel;
  }): Promise<WorkflowActionGroupGetActionParametersWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List the parameters for the specified action.
   * Given an action type, position in workflow action group, and values, get information
   * about extra parameters that need to be supplied (and if any are optional
   * since they can be inferred by the system) in this case.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupGetActionParametersApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The code of the workflowActionGroup being queried **/
    code: string;
    /** Model containing the details of the get parameters request **/
    requestBody: WorkflowActionGroupGetActionParametersWebRequestModel;
  }): ApiRequestOptions;

  /**
   * List the actions that are valid to be added to this location in a workflow action group.
   * @returns WorkflowActionGroupGetAllowedActionsWebResponseModel
   */
  workflowActionGroupGetAllowedActions({
    code,
    requestBody,
  }: {
    /** The code of the workflowActionGroup being queried **/
    code: string;
    /** Model containing the details of the get allowed actions request **/
    requestBody: WorkflowActionGroupGetAllowedActionsWebRequestModel;
  }): Promise<WorkflowActionGroupGetAllowedActionsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List the actions that are valid to be added to this location in a workflow action group.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupGetAllowedActionsApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The code of the workflowActionGroup being queried **/
    code: string;
    /** Model containing the details of the get allowed actions request **/
    requestBody: WorkflowActionGroupGetAllowedActionsWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Add an action to a workflowActionGroup
   * @returns WorkflowActionGroupAddActionWebResponseModel
   */
  workflowActionGroupAddAction({
    code,
    requestBody,
  }: {
    /** The code of the workflowActionGroup to add the action to **/
    code: string;
    /** The model containing all the add action operation details **/
    requestBody: WorkflowActionGroupAddActionWebRequestModel;
  }): Promise<WorkflowActionGroupAddActionWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Add an action to a workflowActionGroup
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupAddActionApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The code of the workflowActionGroup to add the action to **/
    code: string;
    /** The model containing all the add action operation details **/
    requestBody: WorkflowActionGroupAddActionWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Edit an action on a workflowActionGroup
   * @returns WorkflowActionGroupEditActionWebResponseModel
   */
  workflowActionGroupEditAction({
    code,
    id,
    requestBody,
  }: {
    /** The code of the workflowActionGroup to edit the action on **/
    code: string;
    /** The id of the action to edit **/
    id: string;
    /** The model containing all the edit action operation details **/
    requestBody: WorkflowActionGroupEditActionWebRequestModel;
  }): Promise<WorkflowActionGroupEditActionWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit an action on a workflowActionGroup
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupEditActionApiRequestOptions({
    code,
    id,
    requestBody,
  }: {
    /** The code of the workflowActionGroup to edit the action on **/
    code: string;
    /** The id of the action to edit **/
    id: string;
    /** The model containing all the edit action operation details **/
    requestBody: WorkflowActionGroupEditActionWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Remove an action on a workflowActionGroup
   * @returns WorkflowActionGroupRemoveActionWebResponseModel
   */
  workflowActionGroupRemoveAction({
    code,
    id,
    signature,
  }: {
    /** The code of the workflowActionGroup to remove the action from **/
    code: string;
    /** The id of the action to remove **/
    id: string;
    /** The signature is used to ensure that the workflow action group being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same workflow action group **/
    signature: string | null;
  }): Promise<WorkflowActionGroupRemoveActionWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Remove an action on a workflowActionGroup
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupRemoveActionApiRequestOptions({
    code,
    id,
    signature,
  }: {
    /** The code of the workflowActionGroup to remove the action from **/
    code: string;
    /** The id of the action to remove **/
    id: string;
    /** The signature is used to ensure that the workflow action group being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same workflow action group **/
    signature: string | null;
  }): ApiRequestOptions;

  /**
   * Get a workflowActionGroup permissions by its code
   * Fetches the permissions of a workflowActionGroup by its Guc
   * @returns WorkflowActionGroupPermissionsGetWebResponseModel
   */
  workflowActionGroupGetPermissions({
    code,
    username,
    role,
  }: {
    /** The Guc for the workflowActionGroup whose permissions are being requested **/
    code: string;
    /** Optional username to get permissions for the specific user.
     * This value is mutually exclusive with Role. **/
    username?: string | null;
    /** Optional role to get permissions for the specific role.
     * This value is mutually exclusive with Username. **/
    role?: string | null;
  }): Promise<WorkflowActionGroupPermissionsGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a workflowActionGroup permissions by its code
   * Fetches the permissions of a workflowActionGroup by its Guc
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupGetPermissionsApiRequestOptions({
    code,
    username,
    role,
  }: {
    /** The Guc for the workflowActionGroup whose permissions are being requested **/
    code: string;
    /** Optional username to get permissions for the specific user.
     * This value is mutually exclusive with Role. **/
    username?: string | null;
    /** Optional role to get permissions for the specific role.
     * This value is mutually exclusive with Username. **/
    role?: string | null;
  }): ApiRequestOptions;

  /**
   * Edit permissions for a workflowActionGroup
   * Edit the permissions on the workflowActionGroup with the specified code
   * @returns WorkflowActionGroupWithPermissionsWebResponseModel
   */
  workflowActionGroupEditPermissions({
    code,
    requestBody,
  }: {
    /** The Guc of the workflowActionGroup to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: WorkflowActionGroupPermissionsEditWebRequestModel;
  }): Promise<WorkflowActionGroupWithPermissionsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit permissions for a workflowActionGroup
   * Edit the permissions on the workflowActionGroup with the specified code
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupEditPermissionsApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the workflowActionGroup to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: WorkflowActionGroupPermissionsEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Lists user workflowActionGroups with their winning permission
   * Fetches a list of workflowActionGroups with winning permission optionally specifying page and the number of results to return per page.
   * @returns WorkflowActionGroupAccessAdvisorByUserListWebResponseModel
   */
  workflowActionGroupWorkflowActionGroupAccessAdvisorByUser({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get workflowActionGroup access advisor for **/
    username: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<WorkflowActionGroupAccessAdvisorByUserListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists user workflowActionGroups with their winning permission
   * Fetches a list of workflowActionGroups with winning permission optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupWorkflowActionGroupAccessAdvisorByUserApiRequestOptions({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get workflowActionGroup access advisor for **/
    username: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Lists role workflowActionGroups with their winning permission
   * Fetches a list of workflowActionGroups with winning permission optionally specifying page and the number of results to return per page.
   * @returns WorkflowActionGroupAccessAdvisorByRoleListWebResponseModel
   */
  workflowActionGroupWorkflowActionGroupAccessAdvisorByRole({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get workflowActionGroup access advisor for **/
    code: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<WorkflowActionGroupAccessAdvisorByRoleListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists role workflowActionGroups with their winning permission
   * Fetches a list of workflowActionGroups with winning permission optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupWorkflowActionGroupAccessAdvisorByRoleApiRequestOptions({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get workflowActionGroup access advisor for **/
    code: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;
}
