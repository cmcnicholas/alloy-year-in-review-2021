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
import type { WorkflowListApplicableWebResponseModel } from '../models/WorkflowListApplicableWebResponseModel';
import type { WorkflowListCloningItemWebResponseModel } from '../models/WorkflowListCloningItemWebResponseModel';
import type { WorkflowListNextDateTimesWebRequestModel } from '../models/WorkflowListNextDateTimesWebRequestModel';
import type { WorkflowListNextDateTimesWebResponseModel } from '../models/WorkflowListNextDateTimesWebResponseModel';
import type { WorkflowListWebResponseModel } from '../models/WorkflowListWebResponseModel';
import type { WorkflowLogsGetWebResponseModel } from '../models/WorkflowLogsGetWebResponseModel';
import type { WorkflowLogTriggerListWebResponseModel } from '../models/WorkflowLogTriggerListWebResponseModel';
import type { WorkflowPermissionsEditWebRequestModel } from '../models/WorkflowPermissionsEditWebRequestModel';
import type { WorkflowPermissionsGetWebResponseModel } from '../models/WorkflowPermissionsGetWebResponseModel';
import type { WorkflowRemoveActionWebResponseModel } from '../models/WorkflowRemoveActionWebResponseModel';
import type { WorkflowWithOperationsSummaryWebResponseModel } from '../models/WorkflowWithOperationsSummaryWebResponseModel';
import type { WorkflowWithPermissionsWebResponseModel } from '../models/WorkflowWithPermissionsWebResponseModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface WorkflowService {
  /**
   * Get a workflow
   * @param code The Guc of the workflow to retrieve
   * @returns WorkflowGetWebResponseModel
   */
  workflowGet(code: string): Promise<WorkflowGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a workflow
   * @param code The Guc of the workflow to retrieve
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowGetApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * Edit a workflow
   * @param code The code of the workflow to edit
   * @param requestBody The model containing all the edit operation details
   * @returns WorkflowWithOperationsSummaryWebResponseModel
   */
  workflowEdit(
    code: string,
    requestBody: WorkflowEditWebRequestModel,
  ): Promise<WorkflowWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a workflow
   * @param code The code of the workflow to edit
   * @param requestBody The model containing all the edit operation details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowEditApiRequestOptions(
    code: string,
    requestBody: WorkflowEditWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Delete a workflow
   * @param code The code of the workflow to delete
   * @returns void
   */
  workflowDelete(code: string): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete a workflow
   * @param code The code of the workflow to delete
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowDeleteApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * List workflows
   * @param name The optional workflow name (full or partial) to filter on
   * @param context The optional workflow context to filter on
   * @param userGroup Optional Guc to filter workflows by. If specified, only the workflows
   * that have this user group code within their permissions are returned
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns WorkflowListWebResponseModel
   */
  workflowList(
    name?: string | null,
    context?: Context | null,
    userGroup?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<WorkflowListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List workflows
   * @param name The optional workflow name (full or partial) to filter on
   * @param context The optional workflow context to filter on
   * @param userGroup Optional Guc to filter workflows by. If specified, only the workflows
   * that have this user group code within their permissions are returned
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowListApiRequestOptions(
    name?: string | null,
    context?: Context | null,
    userGroup?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Create a workflow
   * @param requestBody The model containing all the create operation details
   * @returns WorkflowWithOperationsSummaryWebResponseModel
   */
  workflowCreate(
    requestBody: WorkflowCreateWebRequestModel,
  ): Promise<WorkflowWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Create a workflow
   * @param requestBody The model containing all the create operation details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowCreateApiRequestOptions(requestBody: WorkflowCreateWebRequestModel): ApiRequestOptions;

  /**
   * Clone a workflow
   * @param code The code of the workflow to clone
   * @param requestBody The model containing all the clone operation details
   * @returns WorkflowWithOperationsSummaryWebResponseModel
   */
  workflowClone(
    code: string,
    requestBody: WorkflowCloneWebRequestModel,
  ): Promise<WorkflowWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Clone a workflow
   * @param code The code of the workflow to clone
   * @param requestBody The model containing all the clone operation details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowCloneApiRequestOptions(
    code: string,
    requestBody: WorkflowCloneWebRequestModel,
  ): ApiRequestOptions;

  /**
   * List the parameters for the specified action.
   * Given an action type, position in workflow action group, and values, get information
   * about extra parameters that need to be supplied (and if any are optional
   * since they can be inferred by the system) in this case.
   * @param code The code of the workflow being queried
   * @param requestBody Model containing the details of the get parameters request
   * @returns WorkflowGetActionParametersWebResponseModel
   */
  workflowGetActionParameters(
    code: string,
    requestBody: WorkflowGetActionParametersWebRequestModel,
  ): Promise<WorkflowGetActionParametersWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List the parameters for the specified action.
   * Given an action type, position in workflow action group, and values, get information
   * about extra parameters that need to be supplied (and if any are optional
   * since they can be inferred by the system) in this case.
   * @param code The code of the workflow being queried
   * @param requestBody Model containing the details of the get parameters request
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowGetActionParametersApiRequestOptions(
    code: string,
    requestBody: WorkflowGetActionParametersWebRequestModel,
  ): ApiRequestOptions;

  /**
   * List the actions that are valid to be added to this location in a workflow action group.
   * @param code The code of the workflow being queried
   * @param requestBody Model containing the details of the get allowed actions request
   * @returns WorkflowGetAllowedActionsWebResponseModel
   */
  workflowGetAllowedActions(
    code: string,
    requestBody: WorkflowGetAllowedActionsWebRequestModel,
  ): Promise<WorkflowGetAllowedActionsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List the actions that are valid to be added to this location in a workflow action group.
   * @param code The code of the workflow being queried
   * @param requestBody Model containing the details of the get allowed actions request
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowGetAllowedActionsApiRequestOptions(
    code: string,
    requestBody: WorkflowGetAllowedActionsWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Add an action to a workflow
   * @param code The code of the workflow to add the action to
   * @param requestBody The model containing all the add action operation details
   * @returns WorkflowAddActionWebResponseModel
   */
  workflowAddAction(
    code: string,
    requestBody: WorkflowAddActionWebRequestModel,
  ): Promise<WorkflowAddActionWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Add an action to a workflow
   * @param code The code of the workflow to add the action to
   * @param requestBody The model containing all the add action operation details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowAddActionApiRequestOptions(
    code: string,
    requestBody: WorkflowAddActionWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Edit an action on a workflow
   * @param code The code of the workflow to edit the action on
   * @param id The id of the action to edit
   * @param requestBody The model containing all the edit action operation details
   * @returns WorkflowEditActionWebResponseModel
   */
  workflowEditAction(
    code: string,
    id: string,
    requestBody: WorkflowEditActionWebRequestModel,
  ): Promise<WorkflowEditActionWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit an action on a workflow
   * @param code The code of the workflow to edit the action on
   * @param id The id of the action to edit
   * @param requestBody The model containing all the edit action operation details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowEditActionApiRequestOptions(
    code: string,
    id: string,
    requestBody: WorkflowEditActionWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Remove an action on a workflow
   * @param code The code of the workflow to remove the action from
   * @param id The id of the action to remove
   * @param signature The signature is used to ensure that the workflow being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same workflow
   * @returns WorkflowRemoveActionWebResponseModel
   */
  workflowRemoveAction(
    code: string,
    id: string,
    signature?: string | null,
  ): Promise<WorkflowRemoveActionWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Remove an action on a workflow
   * @param code The code of the workflow to remove the action from
   * @param id The id of the action to remove
   * @param signature The signature is used to ensure that the workflow being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same workflow
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowRemoveActionApiRequestOptions(
    code: string,
    id: string,
    signature?: string | null,
  ): ApiRequestOptions;

  /**
   * Get a workflow permissions by its code
   * Fetches the permissions of a workflow by its Guc
   * @param code The Guc for the workflow whose permissions are being requested
   * @param username Optional username to get permissions for the specific user.
   * This value is mutually exclusive with Role.
   * @param role Optional role to get permissions for the specific role.
   * This value is mutually exclusive with Username.
   * @returns WorkflowPermissionsGetWebResponseModel
   */
  workflowGetPermissions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): Promise<WorkflowPermissionsGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a workflow permissions by its code
   * Fetches the permissions of a workflow by its Guc
   * @param code The Guc for the workflow whose permissions are being requested
   * @param username Optional username to get permissions for the specific user.
   * This value is mutually exclusive with Role.
   * @param role Optional role to get permissions for the specific role.
   * This value is mutually exclusive with Username.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowGetPermissionsApiRequestOptions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): ApiRequestOptions;

  /**
   * Edit permissions for a workflow
   * Edit the permissions on the workflow with the specified code
   * @param code The Guc of the workflow to edit the permissions of
   * @param requestBody The model containing the info necessary to the edit permissions operation
   * @returns WorkflowWithPermissionsWebResponseModel
   */
  workflowEditPermissions(
    code: string,
    requestBody: WorkflowPermissionsEditWebRequestModel,
  ): Promise<WorkflowWithPermissionsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit permissions for a workflow
   * Edit the permissions on the workflow with the specified code
   * @param code The Guc of the workflow to edit the permissions of
   * @param requestBody The model containing the info necessary to the edit permissions operation
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowEditPermissionsApiRequestOptions(
    code: string,
    requestBody: WorkflowPermissionsEditWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Get the logs associated with a workflow run
   * @param runId The id of the workflow run to retrieve logs for
   * @returns WorkflowLogsGetWebResponseModel
   */
  workflowGetLogs(runId?: string | null): Promise<WorkflowLogsGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get the logs associated with a workflow run
   * @param runId The id of the workflow run to retrieve logs for
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowGetLogsApiRequestOptions(runId?: string | null): ApiRequestOptions;

  /**
   * List the triggered runs for a workflow
   * @param code
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns WorkflowLogTriggerListWebResponseModel
   */
  workflowListTriggerLogs(
    code: string,
    page?: number,
    pageSize?: number,
  ): Promise<WorkflowLogTriggerListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List the triggered runs for a workflow
   * @param code
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowListTriggerLogsApiRequestOptions(
    code: string,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * List the workflows that are applicable to a dodi
   * @param code The dodi code to find workflows applicable to
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns WorkflowListApplicableWebResponseModel
   */
  workflowListApplicableWorkflows(
    code: string,
    page?: number,
    pageSize?: number,
  ): Promise<WorkflowListApplicableWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List the workflows that are applicable to a dodi
   * @param code The dodi code to find workflows applicable to
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowListApplicableWorkflowsApiRequestOptions(
    code: string,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * List the workflows that will clone a specific item
   * @param itemId The id of the item that will be cloned
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns WorkflowListCloningItemWebResponseModel
   */
  workflowListCloningItemWorkflows(
    itemId: string,
    page?: number,
    pageSize?: number,
  ): Promise<WorkflowListCloningItemWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List the workflows that will clone a specific item
   * @param itemId The id of the item that will be cloned
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowListCloningItemWorkflowsApiRequestOptions(
    itemId: string,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Lists user workflows with their winning permission
   * Fetches a list of workflows with winning permission optionally specifying page and the number of results to return per page.
   * @param username The name of the user to get workflow access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns WorkflowAccessAdvisorByUserListWebResponseModel
   */
  workflowWorkflowAccessAdvisorByUser(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<WorkflowAccessAdvisorByUserListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists user workflows with their winning permission
   * Fetches a list of workflows with winning permission optionally specifying page and the number of results to return per page.
   * @param username The name of the user to get workflow access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowWorkflowAccessAdvisorByUserApiRequestOptions(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Lists role workflows with their winning permission
   * Fetches a list of workflows with winning permission optionally specifying page and the number of results to return per page.
   * @param code The code of the role to get workflow access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns WorkflowAccessAdvisorByRoleListWebResponseModel
   */
  workflowWorkflowAccessAdvisorByRole(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<WorkflowAccessAdvisorByRoleListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists role workflows with their winning permission
   * Fetches a list of workflows with winning permission optionally specifying page and the number of results to return per page.
   * @param code The code of the role to get workflow access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowWorkflowAccessAdvisorByRoleApiRequestOptions(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Get next trigger dates
   * Returns the next n dates, where n is the number specified in the model,
   * at which the stated workflows will trigger. If more than the specified dates are available, only the n
   * closest to the current date will be returned.
   * NOTE: Currently only Calendar triggers are supported
   * @param requestBody
   * @returns WorkflowListNextDateTimesWebResponseModel
   */
  workflowWorkflowListNextDates(
    requestBody: WorkflowListNextDateTimesWebRequestModel,
  ): Promise<WorkflowListNextDateTimesWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get next trigger dates
   * Returns the next n dates, where n is the number specified in the model,
   * at which the stated workflows will trigger. If more than the specified dates are available, only the n
   * closest to the current date will be returned.
   * NOTE: Currently only Calendar triggers are supported
   * @param requestBody
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowWorkflowListNextDatesApiRequestOptions(
    requestBody: WorkflowListNextDateTimesWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Start a manually triggered workflow run
   * Queues a workflow run for a workflow that has a time or manual trigger, event triggered workflows are not supported.
   * Manual trigger workflows are using the supplied AQS query to specify the output items of the manual trigger.
   * Time based workflows do not support the query parameter for the manual runs.
   * @param code The code of the workflow to run, which must have a time or manual trigger
   * @param requestBody
   * @returns CreateManualWorkflowRunWebResponseModel
   */
  workflowWorkflowManualRun(
    code: string,
    requestBody: CreateManualWorkflowRunWebRequestModel,
  ): Promise<CreateManualWorkflowRunWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Start a manually triggered workflow run
   * Queues a workflow run for a workflow that has a time or manual trigger, event triggered workflows are not supported.
   * Manual trigger workflows are using the supplied AQS query to specify the output items of the manual trigger.
   * Time based workflows do not support the query parameter for the manual runs.
   * @param code The code of the workflow to run, which must have a time or manual trigger
   * @param requestBody
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  workflowWorkflowManualRunApiRequestOptions(
    code: string,
    requestBody: CreateManualWorkflowRunWebRequestModel,
  ): ApiRequestOptions;
}
