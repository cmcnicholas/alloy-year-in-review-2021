/* eslint-disable */

import type { Context } from '../models/Context';
import type { CreateManualWorkflowRunWebRequestModel } from '../models/CreateManualWorkflowRunWebRequestModel';
import type { CreateManualWorkflowRunWebResponseModel } from '../models/CreateManualWorkflowRunWebResponseModel';
import type { WorkflowAccessAdvisorByRoleListWebResponseModel } from '../models/WorkflowAccessAdvisorByRoleListWebResponseModel';
import type { WorkflowAccessAdvisorByUserListWebResponseModel } from '../models/WorkflowAccessAdvisorByUserListWebResponseModel';
import type { WorkflowAddActionWebRequestModel } from '../models/WorkflowAddActionWebRequestModel';
import type { WorkflowAddActionWebResponseModel } from '../models/WorkflowAddActionWebResponseModel';
import type { WorkflowCloneWebRequestModel } from '../models/WorkflowCloneWebRequestModel';
import type { WorkflowCreateWebRequestModel } from '../models/WorkflowCreateWebRequestModel';
import type { WorkflowEditActionWebRequestModel } from '../models/WorkflowEditActionWebRequestModel';
import type { WorkflowEditActionWebResponseModel } from '../models/WorkflowEditActionWebResponseModel';
import type { WorkflowEditWebRequestModel } from '../models/WorkflowEditWebRequestModel';
import type { WorkflowGetActionParametersWebRequestModel } from '../models/WorkflowGetActionParametersWebRequestModel';
import type { WorkflowGetActionParametersWebResponseModel } from '../models/WorkflowGetActionParametersWebResponseModel';
import type { WorkflowGetAllowedActionsWebRequestModel } from '../models/WorkflowGetAllowedActionsWebRequestModel';
import type { WorkflowGetAllowedActionsWebResponseModel } from '../models/WorkflowGetAllowedActionsWebResponseModel';
import type { WorkflowGetWebResponseModel } from '../models/WorkflowGetWebResponseModel';
import type { WorkflowListCloningItemWebResponseModel } from '../models/WorkflowListCloningItemWebResponseModel';
import type { WorkflowListNextDateTimesWebRequestModel } from '../models/WorkflowListNextDateTimesWebRequestModel';
import type { WorkflowListNextDateTimesWebResponseModel } from '../models/WorkflowListNextDateTimesWebResponseModel';
import type { WorkflowListWebResponseModel } from '../models/WorkflowListWebResponseModel';
import type { WorkflowLogsGetWebResponseModel } from '../models/WorkflowLogsGetWebResponseModel';
import type { WorkflowLogTriggerListWebResponseModel } from '../models/WorkflowLogTriggerListWebResponseModel';
import type { WorkflowPermissionsEditWebRequestModel } from '../models/WorkflowPermissionsEditWebRequestModel';
import type { WorkflowPermissionsGetWebResponseModel } from '../models/WorkflowPermissionsGetWebResponseModel';
import type { WorkflowRemoveActionWebResponseModel } from '../models/WorkflowRemoveActionWebResponseModel';
import type { WorkflowTagsListWebResponseModel } from '../models/WorkflowTagsListWebResponseModel';
import type { WorkflowTriggerType } from '../models/WorkflowTriggerType';
import type { WorkflowWithOperationsSummaryWebResponseModel } from '../models/WorkflowWithOperationsSummaryWebResponseModel';
import type { WorkflowWithPermissionsWebResponseModel } from '../models/WorkflowWithPermissionsWebResponseModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface WorkflowService {
  /**
   * Get a workflow
   * @returns WorkflowGetWebResponseModel
   */
  workflowGet({
    code,
  }: {
    /** The Guc of the workflow to retrieve **/
    code: string;
  }): Promise<WorkflowGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a workflow
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowGetApiRequestOptions({
    code,
  }: {
    /** The Guc of the workflow to retrieve **/
    code: string;
  }): ApiRequestOptions;

  /**
   * Edit a workflow
   * @returns WorkflowWithOperationsSummaryWebResponseModel
   */
  workflowEdit({
    code,
    requestBody,
  }: {
    /** The code of the workflow to edit **/
    code: string;
    /** The model containing all the edit operation details **/
    requestBody: WorkflowEditWebRequestModel;
  }): Promise<WorkflowWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a workflow
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowEditApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The code of the workflow to edit **/
    code: string;
    /** The model containing all the edit operation details **/
    requestBody: WorkflowEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Delete a workflow
   * @returns void
   */
  workflowDelete({
    code,
  }: {
    /** The code of the workflow to delete **/
    code: string;
  }): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete a workflow
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowDeleteApiRequestOptions({
    code,
  }: {
    /** The code of the workflow to delete **/
    code: string;
  }): ApiRequestOptions;

  /**
   * List workflows
   * @returns WorkflowListWebResponseModel
   */
  workflowList({
    name,
    context,
    andTags,
    orTags,
    notTags,
    userGroup,
    dodiCodeTriggeringOn,
    triggerTypes,
    enabled,
    page,
    pageSize,
  }: {
    /** The optional workflow name (full or partial) to filter on **/
    name?: string | null;
    /** The optional workflow context to filter on **/
    context?: Context | null;
    /** If this parameter is passed, only the workflows with ALL of the specified tags will be returned
     * It is possible to use this in conjunction with the other tags conditions **/
    andTags?: Array<string> | null;
    /** If this parameter is passed, only the workflows with AT LEAST one of the specified tags will be returned
     * It is possible to use this in conjunction with the other tags conditions **/
    orTags?: Array<string> | null;
    /** If this parameter is passed, only the workflows with NONE of the specified tags will be returned
     * It is possible to use this in conjunction with the other tags conditions **/
    notTags?: Array<string> | null;
    /** Optional Guc to filter workflows by. If specified, only the workflows
     * that have this user group code within their permissions are returned **/
    userGroup?: string | null;
    /** Optional Guc to filter workflows by. If specified, the endpoint will only return the workflows
     * whose trigger has the specified dodi code (or a dodi implementing it) as an output **/
    dodiCodeTriggeringOn?: string | null;
    /** Optional trigger type enumeration. If specified, the endpoint will only return the workflows with a
     * trigger of the specified type **/
    triggerTypes?: Array<WorkflowTriggerType> | null;
    /** The optional workflow enabled property to filter on **/
    enabled?: boolean | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<WorkflowListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List workflows
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowListApiRequestOptions({
    name,
    context,
    andTags,
    orTags,
    notTags,
    userGroup,
    dodiCodeTriggeringOn,
    triggerTypes,
    enabled,
    page,
    pageSize,
  }: {
    /** The optional workflow name (full or partial) to filter on **/
    name?: string | null;
    /** The optional workflow context to filter on **/
    context?: Context | null;
    /** If this parameter is passed, only the workflows with ALL of the specified tags will be returned
     * It is possible to use this in conjunction with the other tags conditions **/
    andTags?: Array<string> | null;
    /** If this parameter is passed, only the workflows with AT LEAST one of the specified tags will be returned
     * It is possible to use this in conjunction with the other tags conditions **/
    orTags?: Array<string> | null;
    /** If this parameter is passed, only the workflows with NONE of the specified tags will be returned
     * It is possible to use this in conjunction with the other tags conditions **/
    notTags?: Array<string> | null;
    /** Optional Guc to filter workflows by. If specified, only the workflows
     * that have this user group code within their permissions are returned **/
    userGroup?: string | null;
    /** Optional Guc to filter workflows by. If specified, the endpoint will only return the workflows
     * whose trigger has the specified dodi code (or a dodi implementing it) as an output **/
    dodiCodeTriggeringOn?: string | null;
    /** Optional trigger type enumeration. If specified, the endpoint will only return the workflows with a
     * trigger of the specified type **/
    triggerTypes?: Array<WorkflowTriggerType> | null;
    /** The optional workflow enabled property to filter on **/
    enabled?: boolean | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Create a workflow
   * @returns WorkflowWithOperationsSummaryWebResponseModel
   */
  workflowCreate({
    requestBody,
  }: {
    /** The model containing all the create operation details **/
    requestBody: WorkflowCreateWebRequestModel;
  }): Promise<WorkflowWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Create a workflow
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowCreateApiRequestOptions({
    requestBody,
  }: {
    /** The model containing all the create operation details **/
    requestBody: WorkflowCreateWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Clone a workflow
   * @returns WorkflowWithOperationsSummaryWebResponseModel
   */
  workflowClone({
    code,
    requestBody,
  }: {
    /** The code of the workflow to clone **/
    code: string;
    /** The model containing all the clone operation details **/
    requestBody: WorkflowCloneWebRequestModel;
  }): Promise<WorkflowWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Clone a workflow
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowCloneApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The code of the workflow to clone **/
    code: string;
    /** The model containing all the clone operation details **/
    requestBody: WorkflowCloneWebRequestModel;
  }): ApiRequestOptions;

  /**
   * List the parameters for the specified action.
   * Given an action type, position in workflow action group, and values, get information
   * about extra parameters that need to be supplied (and if any are optional
   * since they can be inferred by the system) in this case.
   * @returns WorkflowGetActionParametersWebResponseModel
   */
  workflowGetActionParameters({
    code,
    requestBody,
  }: {
    /** The code of the workflow being queried **/
    code: string;
    /** Model containing the details of the get parameters request **/
    requestBody: WorkflowGetActionParametersWebRequestModel;
  }): Promise<WorkflowGetActionParametersWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List the parameters for the specified action.
   * Given an action type, position in workflow action group, and values, get information
   * about extra parameters that need to be supplied (and if any are optional
   * since they can be inferred by the system) in this case.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowGetActionParametersApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The code of the workflow being queried **/
    code: string;
    /** Model containing the details of the get parameters request **/
    requestBody: WorkflowGetActionParametersWebRequestModel;
  }): ApiRequestOptions;

  /**
   * List the actions that are valid to be added to this location in a workflow action group.
   * @returns WorkflowGetAllowedActionsWebResponseModel
   */
  workflowGetAllowedActions({
    code,
    requestBody,
  }: {
    /** The code of the workflow being queried **/
    code: string;
    /** Model containing the details of the get allowed actions request **/
    requestBody: WorkflowGetAllowedActionsWebRequestModel;
  }): Promise<WorkflowGetAllowedActionsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List the actions that are valid to be added to this location in a workflow action group.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowGetAllowedActionsApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The code of the workflow being queried **/
    code: string;
    /** Model containing the details of the get allowed actions request **/
    requestBody: WorkflowGetAllowedActionsWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Add an action to a workflow
   * @returns WorkflowAddActionWebResponseModel
   */
  workflowAddAction({
    code,
    requestBody,
  }: {
    /** The code of the workflow to add the action to **/
    code: string;
    /** The model containing all the add action operation details **/
    requestBody: WorkflowAddActionWebRequestModel;
  }): Promise<WorkflowAddActionWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Add an action to a workflow
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowAddActionApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The code of the workflow to add the action to **/
    code: string;
    /** The model containing all the add action operation details **/
    requestBody: WorkflowAddActionWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Edit an action on a workflow
   * @returns WorkflowEditActionWebResponseModel
   */
  workflowEditAction({
    code,
    id,
    requestBody,
  }: {
    /** The code of the workflow to edit the action on **/
    code: string;
    /** The id of the action to edit **/
    id: string;
    /** The model containing all the edit action operation details **/
    requestBody: WorkflowEditActionWebRequestModel;
  }): Promise<WorkflowEditActionWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit an action on a workflow
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowEditActionApiRequestOptions({
    code,
    id,
    requestBody,
  }: {
    /** The code of the workflow to edit the action on **/
    code: string;
    /** The id of the action to edit **/
    id: string;
    /** The model containing all the edit action operation details **/
    requestBody: WorkflowEditActionWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Remove an action on a workflow
   * @returns WorkflowRemoveActionWebResponseModel
   */
  workflowRemoveAction({
    code,
    id,
    signature,
  }: {
    /** The code of the workflow to remove the action from **/
    code: string;
    /** The id of the action to remove **/
    id: string;
    /** The signature is used to ensure that the workflow being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same workflow **/
    signature: string | null;
  }): Promise<WorkflowRemoveActionWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Remove an action on a workflow
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowRemoveActionApiRequestOptions({
    code,
    id,
    signature,
  }: {
    /** The code of the workflow to remove the action from **/
    code: string;
    /** The id of the action to remove **/
    id: string;
    /** The signature is used to ensure that the workflow being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same workflow **/
    signature: string | null;
  }): ApiRequestOptions;

  /**
   * Get a workflow permissions by its code
   * Fetches the permissions of a workflow by its Guc
   * @returns WorkflowPermissionsGetWebResponseModel
   */
  workflowGetPermissions({
    code,
    username,
    role,
  }: {
    /** The Guc for the workflow whose permissions are being requested **/
    code: string;
    /** Optional username to get permissions for the specific user.
     * This value is mutually exclusive with Role. **/
    username?: string | null;
    /** Optional role to get permissions for the specific role.
     * This value is mutually exclusive with Username. **/
    role?: string | null;
  }): Promise<WorkflowPermissionsGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a workflow permissions by its code
   * Fetches the permissions of a workflow by its Guc
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowGetPermissionsApiRequestOptions({
    code,
    username,
    role,
  }: {
    /** The Guc for the workflow whose permissions are being requested **/
    code: string;
    /** Optional username to get permissions for the specific user.
     * This value is mutually exclusive with Role. **/
    username?: string | null;
    /** Optional role to get permissions for the specific role.
     * This value is mutually exclusive with Username. **/
    role?: string | null;
  }): ApiRequestOptions;

  /**
   * Edit permissions for a workflow
   * Edit the permissions on the workflow with the specified code
   * @returns WorkflowWithPermissionsWebResponseModel
   */
  workflowEditPermissions({
    code,
    requestBody,
  }: {
    /** The Guc of the workflow to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: WorkflowPermissionsEditWebRequestModel;
  }): Promise<WorkflowWithPermissionsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit permissions for a workflow
   * Edit the permissions on the workflow with the specified code
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowEditPermissionsApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the workflow to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: WorkflowPermissionsEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Get the list of the workflow tags in the system
   * Fetches all of the workflow tags in the system
   * @returns WorkflowTagsListWebResponseModel
   */
  workflowListTags(): Promise<WorkflowTagsListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get the list of the workflow tags in the system
   * Fetches all of the workflow tags in the system
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowListTagsApiRequestOptions(): ApiRequestOptions;

  /**
   * Get the logs associated with a workflow run
   * @returns WorkflowLogsGetWebResponseModel
   */
  workflowGetLogs({
    runId,
  }: {
    /** The id of the workflow run to retrieve logs for **/
    runId: string | null;
  }): Promise<WorkflowLogsGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get the logs associated with a workflow run
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowGetLogsApiRequestOptions({
    runId,
  }: {
    /** The id of the workflow run to retrieve logs for **/
    runId: string | null;
  }): ApiRequestOptions;

  /**
   * List the triggered runs for a workflow
   * @returns WorkflowLogTriggerListWebResponseModel
   */
  workflowListTriggerLogs({
    code,
    page,
    pageSize,
  }: {
    code: string;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<WorkflowLogTriggerListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List the triggered runs for a workflow
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowListTriggerLogsApiRequestOptions({
    code,
    page,
    pageSize,
  }: {
    code: string;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * List the workflows that will clone a specific item
   * @returns WorkflowListCloningItemWebResponseModel
   */
  workflowListCloningItemWorkflows({
    itemId,
    page,
    pageSize,
  }: {
    /** The id of the item that will be cloned **/
    itemId: string;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<WorkflowListCloningItemWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List the workflows that will clone a specific item
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowListCloningItemWorkflowsApiRequestOptions({
    itemId,
    page,
    pageSize,
  }: {
    /** The id of the item that will be cloned **/
    itemId: string;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Lists user workflows with their winning permission
   * Fetches a list of workflows with winning permission optionally specifying page and the number of results to return per page.
   * @returns WorkflowAccessAdvisorByUserListWebResponseModel
   */
  workflowWorkflowAccessAdvisorByUser({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get workflow access advisor for **/
    username: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<WorkflowAccessAdvisorByUserListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists user workflows with their winning permission
   * Fetches a list of workflows with winning permission optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowWorkflowAccessAdvisorByUserApiRequestOptions({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get workflow access advisor for **/
    username: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Lists role workflows with their winning permission
   * Fetches a list of workflows with winning permission optionally specifying page and the number of results to return per page.
   * @returns WorkflowAccessAdvisorByRoleListWebResponseModel
   */
  workflowWorkflowAccessAdvisorByRole({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get workflow access advisor for **/
    code: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<WorkflowAccessAdvisorByRoleListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists role workflows with their winning permission
   * Fetches a list of workflows with winning permission optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowWorkflowAccessAdvisorByRoleApiRequestOptions({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get workflow access advisor for **/
    code: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Get next trigger dates
   * Returns the next n dates, where n is the number specified in the model,
   * at which the stated workflows will trigger. If more than the specified dates are available, only the n
   * closest to the current date will be returned.
   * NOTE: Currently only Calendar triggers are supported
   * @returns WorkflowListNextDateTimesWebResponseModel
   */
  workflowWorkflowListNextDates({
    requestBody,
  }: {
    requestBody: WorkflowListNextDateTimesWebRequestModel;
  }): Promise<WorkflowListNextDateTimesWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get next trigger dates
   * Returns the next n dates, where n is the number specified in the model,
   * at which the stated workflows will trigger. If more than the specified dates are available, only the n
   * closest to the current date will be returned.
   * NOTE: Currently only Calendar triggers are supported
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowWorkflowListNextDatesApiRequestOptions({
    requestBody,
  }: {
    requestBody: WorkflowListNextDateTimesWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Start a manually triggered workflow run
   * Queues a workflow run for a workflow that has a time or manual trigger, event triggered workflows are not supported.
   * Manual trigger workflows are using the supplied AQS query to specify the output items of the manual trigger.
   * Time based workflows do not support the query parameter for the manual runs.
   * @returns CreateManualWorkflowRunWebResponseModel
   */
  workflowWorkflowManualRun({
    code,
    requestBody,
  }: {
    /** The code of the workflow to run, which must have a time or manual trigger **/
    code: string;
    requestBody: CreateManualWorkflowRunWebRequestModel;
  }): Promise<CreateManualWorkflowRunWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Start a manually triggered workflow run
   * Queues a workflow run for a workflow that has a time or manual trigger, event triggered workflows are not supported.
   * Manual trigger workflows are using the supplied AQS query to specify the output items of the manual trigger.
   * Time based workflows do not support the query parameter for the manual runs.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowWorkflowManualRunApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The code of the workflow to run, which must have a time or manual trigger **/
    code: string;
    requestBody: CreateManualWorkflowRunWebRequestModel;
  }): ApiRequestOptions;
}
