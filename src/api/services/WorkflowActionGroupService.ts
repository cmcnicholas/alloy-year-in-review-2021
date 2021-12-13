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
   * @param code The Guc of the workflowActionGroup to retrieve
   * @returns WorkflowActionGroupGetWebResponseModel
   */
  workflowActionGroupGet(code: string): Promise<WorkflowActionGroupGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a workflowActionGroup
   * @param code The Guc of the workflowActionGroup to retrieve
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupGetApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * Edit a workflowActionGroup
   * @param code The code of the workflowActionGroup to edit
   * @param requestBody The model containing all the edit operation details
   * @returns WorkflowActionGroupWithOperationsSummaryWebResponseModel
   */
  workflowActionGroupEdit(
    code: string,
    requestBody: WorkflowActionGroupEditWebRequestModel,
  ): Promise<WorkflowActionGroupWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a workflowActionGroup
   * @param code The code of the workflowActionGroup to edit
   * @param requestBody The model containing all the edit operation details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupEditApiRequestOptions(
    code: string,
    requestBody: WorkflowActionGroupEditWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Delete a workflowActionGroup
   * @param code The code of the workflowActionGroup to delete
   * @returns void
   */
  workflowActionGroupDelete(code: string): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete a workflowActionGroup
   * @param code The code of the workflowActionGroup to delete
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupDeleteApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * List workflowActionGroups
   * @param name The optional workflow Action Group name (full or partial) to filter on
   * @param context The optional workflow Action Group context to filter on
   * @param userGroup Optional Guc to filter workflow Action Groups by. If specified, only the workflow action groups
   * that have this user group code within their permissions are returned
   * @param actionGroupInputCode Optional Guc to filter workflow action groups by. If specified, only the workflow action groups
   * that have this dodi code as their declared input type are returned
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns WorkflowActionGroupListWebResponseModel
   */
  workflowActionGroupList(
    name?: string | null,
    context?: Context | null,
    userGroup?: string | null,
    actionGroupInputCode?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<WorkflowActionGroupListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List workflowActionGroups
   * @param name The optional workflow Action Group name (full or partial) to filter on
   * @param context The optional workflow Action Group context to filter on
   * @param userGroup Optional Guc to filter workflow Action Groups by. If specified, only the workflow action groups
   * that have this user group code within their permissions are returned
   * @param actionGroupInputCode Optional Guc to filter workflow action groups by. If specified, only the workflow action groups
   * that have this dodi code as their declared input type are returned
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupListApiRequestOptions(
    name?: string | null,
    context?: Context | null,
    userGroup?: string | null,
    actionGroupInputCode?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Create a workflowActionGroup
   * @param requestBody The model containing all the create operation details
   * @returns WorkflowActionGroupWithOperationsSummaryWebResponseModel
   */
  workflowActionGroupCreate(
    requestBody: WorkflowActionGroupCreateWebRequestModel,
  ): Promise<WorkflowActionGroupWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Create a workflowActionGroup
   * @param requestBody The model containing all the create operation details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupCreateApiRequestOptions(
    requestBody: WorkflowActionGroupCreateWebRequestModel,
  ): ApiRequestOptions;

  /**
   * List the parameters for the specified action.
   * Given an action type, position in workflow action group, and values, get information
   * about extra parameters that need to be supplied (and if any are optional
   * since they can be inferred by the system) in this case.
   * @param code The code of the workflowActionGroup being queried
   * @param requestBody Model containing the details of the get parameters request
   * @returns WorkflowActionGroupGetActionParametersWebResponseModel
   */
  workflowActionGroupGetActionParameters(
    code: string,
    requestBody: WorkflowActionGroupGetActionParametersWebRequestModel,
  ): Promise<WorkflowActionGroupGetActionParametersWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List the parameters for the specified action.
   * Given an action type, position in workflow action group, and values, get information
   * about extra parameters that need to be supplied (and if any are optional
   * since they can be inferred by the system) in this case.
   * @param code The code of the workflowActionGroup being queried
   * @param requestBody Model containing the details of the get parameters request
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupGetActionParametersApiRequestOptions(
    code: string,
    requestBody: WorkflowActionGroupGetActionParametersWebRequestModel,
  ): ApiRequestOptions;

  /**
   * List the actions that are valid to be added to this location in a workflow action group.
   * @param code The code of the workflowActionGroup being queried
   * @param requestBody Model containing the details of the get allowed actions request
   * @returns WorkflowActionGroupGetAllowedActionsWebResponseModel
   */
  workflowActionGroupGetAllowedActions(
    code: string,
    requestBody: WorkflowActionGroupGetAllowedActionsWebRequestModel,
  ): Promise<WorkflowActionGroupGetAllowedActionsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List the actions that are valid to be added to this location in a workflow action group.
   * @param code The code of the workflowActionGroup being queried
   * @param requestBody Model containing the details of the get allowed actions request
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupGetAllowedActionsApiRequestOptions(
    code: string,
    requestBody: WorkflowActionGroupGetAllowedActionsWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Add an action to a workflowActionGroup
   * @param code The code of the workflowActionGroup to add the action to
   * @param requestBody The model containing all the add action operation details
   * @returns WorkflowActionGroupAddActionWebResponseModel
   */
  workflowActionGroupAddAction(
    code: string,
    requestBody: WorkflowActionGroupAddActionWebRequestModel,
  ): Promise<WorkflowActionGroupAddActionWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Add an action to a workflowActionGroup
   * @param code The code of the workflowActionGroup to add the action to
   * @param requestBody The model containing all the add action operation details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupAddActionApiRequestOptions(
    code: string,
    requestBody: WorkflowActionGroupAddActionWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Edit an action on a workflowActionGroup
   * @param code The code of the workflowActionGroup to edit the action on
   * @param id The id of the action to edit
   * @param requestBody The model containing all the edit action operation details
   * @returns WorkflowActionGroupEditActionWebResponseModel
   */
  workflowActionGroupEditAction(
    code: string,
    id: string,
    requestBody: WorkflowActionGroupEditActionWebRequestModel,
  ): Promise<WorkflowActionGroupEditActionWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit an action on a workflowActionGroup
   * @param code The code of the workflowActionGroup to edit the action on
   * @param id The id of the action to edit
   * @param requestBody The model containing all the edit action operation details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupEditActionApiRequestOptions(
    code: string,
    id: string,
    requestBody: WorkflowActionGroupEditActionWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Remove an action on a workflowActionGroup
   * @param code The code of the workflowActionGroup to remove the action from
   * @param id The id of the action to remove
   * @param signature The signature is used to ensure that the workflow action group being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same workflow action group
   * @returns WorkflowActionGroupRemoveActionWebResponseModel
   */
  workflowActionGroupRemoveAction(
    code: string,
    id: string,
    signature?: string | null,
  ): Promise<WorkflowActionGroupRemoveActionWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Remove an action on a workflowActionGroup
   * @param code The code of the workflowActionGroup to remove the action from
   * @param id The id of the action to remove
   * @param signature The signature is used to ensure that the workflow action group being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same workflow action group
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupRemoveActionApiRequestOptions(
    code: string,
    id: string,
    signature?: string | null,
  ): ApiRequestOptions;

  /**
   * Get a workflowActionGroup permissions by its code
   * Fetches the permissions of a workflowActionGroup by its Guc
   * @param code The Guc for the workflowActionGroup whose permissions are being requested
   * @param username Optional username to get permissions for the specific user.
   * This value is mutually exclusive with Role.
   * @param role Optional role to get permissions for the specific role.
   * This value is mutually exclusive with Username.
   * @returns WorkflowActionGroupPermissionsGetWebResponseModel
   */
  workflowActionGroupGetPermissions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): Promise<WorkflowActionGroupPermissionsGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a workflowActionGroup permissions by its code
   * Fetches the permissions of a workflowActionGroup by its Guc
   * @param code The Guc for the workflowActionGroup whose permissions are being requested
   * @param username Optional username to get permissions for the specific user.
   * This value is mutually exclusive with Role.
   * @param role Optional role to get permissions for the specific role.
   * This value is mutually exclusive with Username.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupGetPermissionsApiRequestOptions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): ApiRequestOptions;

  /**
   * Edit permissions for a workflowActionGroup
   * Edit the permissions on the workflowActionGroup with the specified code
   * @param code The Guc of the workflowActionGroup to edit the permissions of
   * @param requestBody The model containing the info necessary to the edit permissions operation
   * @returns WorkflowActionGroupWithPermissionsWebResponseModel
   */
  workflowActionGroupEditPermissions(
    code: string,
    requestBody: WorkflowActionGroupPermissionsEditWebRequestModel,
  ): Promise<WorkflowActionGroupWithPermissionsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit permissions for a workflowActionGroup
   * Edit the permissions on the workflowActionGroup with the specified code
   * @param code The Guc of the workflowActionGroup to edit the permissions of
   * @param requestBody The model containing the info necessary to the edit permissions operation
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupEditPermissionsApiRequestOptions(
    code: string,
    requestBody: WorkflowActionGroupPermissionsEditWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Lists user workflowActionGroups with their winning permission
   * Fetches a list of workflowActionGroups with winning permission optionally specifying page and the number of results to return per page.
   * @param username The name of the user to get workflowActionGroup access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns WorkflowActionGroupAccessAdvisorByUserListWebResponseModel
   */
  workflowActionGroupWorkflowActionGroupAccessAdvisorByUser(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<WorkflowActionGroupAccessAdvisorByUserListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists user workflowActionGroups with their winning permission
   * Fetches a list of workflowActionGroups with winning permission optionally specifying page and the number of results to return per page.
   * @param username The name of the user to get workflowActionGroup access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupWorkflowActionGroupAccessAdvisorByUserApiRequestOptions(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Lists role workflowActionGroups with their winning permission
   * Fetches a list of workflowActionGroups with winning permission optionally specifying page and the number of results to return per page.
   * @param code The code of the role to get workflowActionGroup access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns WorkflowActionGroupAccessAdvisorByRoleListWebResponseModel
   */
  workflowActionGroupWorkflowActionGroupAccessAdvisorByRole(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<WorkflowActionGroupAccessAdvisorByRoleListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists role workflowActionGroups with their winning permission
   * Fetches a list of workflowActionGroups with winning permission optionally specifying page and the number of results to return per page.
   * @param code The code of the role to get workflowActionGroup access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowActionGroupWorkflowActionGroupAccessAdvisorByRoleApiRequestOptions(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;
}
