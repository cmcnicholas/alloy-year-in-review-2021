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
import type { WorkflowService } from './WorkflowService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class WorkflowServiceDefault implements WorkflowService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async workflowGet({
    code,
  }: {
    /** The Guc of the workflow to retrieve **/
    code: string;
  }): Promise<WorkflowGetWebResponseModel> {
    const options = this.workflowGetApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowGetApiRequestOptions({
    code,
  }: {
    /** The Guc of the workflow to retrieve **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/workflow/${code}`,
    };
  }

  public async workflowEdit({
    code,
    requestBody,
  }: {
    /** The code of the workflow to edit **/
    code: string;
    /** The model containing all the edit operation details **/
    requestBody: WorkflowEditWebRequestModel;
  }): Promise<WorkflowWithOperationsSummaryWebResponseModel> {
    const options = this.workflowEditApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowEditApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The code of the workflow to edit **/
    code: string;
    /** The model containing all the edit operation details **/
    requestBody: WorkflowEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/workflow/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowDelete({
    code,
  }: {
    /** The code of the workflow to delete **/
    code: string;
  }): Promise<void> {
    const options = this.workflowDeleteApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowDeleteApiRequestOptions({
    code,
  }: {
    /** The code of the workflow to delete **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/workflow/${code}`,
    };
  }

  public async workflowList({
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
  }): Promise<WorkflowListWebResponseModel> {
    const options = this.workflowListApiRequestOptions({
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
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowListApiRequestOptions({
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
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/workflow`,
      query: {
        Name: name,
        Context: context,
        AndTags: andTags,
        OrTags: orTags,
        NotTags: notTags,
        UserGroup: userGroup,
        DodiCodeTriggeringOn: dodiCodeTriggeringOn,
        TriggerTypes: triggerTypes,
        Enabled: enabled,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async workflowCreate({
    requestBody,
  }: {
    /** The model containing all the create operation details **/
    requestBody: WorkflowCreateWebRequestModel;
  }): Promise<WorkflowWithOperationsSummaryWebResponseModel> {
    const options = this.workflowCreateApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowCreateApiRequestOptions({
    requestBody,
  }: {
    /** The model containing all the create operation details **/
    requestBody: WorkflowCreateWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/workflow`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowClone({
    code,
    requestBody,
  }: {
    /** The code of the workflow to clone **/
    code: string;
    /** The model containing all the clone operation details **/
    requestBody: WorkflowCloneWebRequestModel;
  }): Promise<WorkflowWithOperationsSummaryWebResponseModel> {
    const options = this.workflowCloneApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowCloneApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The code of the workflow to clone **/
    code: string;
    /** The model containing all the clone operation details **/
    requestBody: WorkflowCloneWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/workflow/${code}/clone`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowGetActionParameters({
    code,
    requestBody,
  }: {
    /** The code of the workflow being queried **/
    code: string;
    /** Model containing the details of the get parameters request **/
    requestBody: WorkflowGetActionParametersWebRequestModel;
  }): Promise<WorkflowGetActionParametersWebResponseModel> {
    const options = this.workflowGetActionParametersApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowGetActionParametersApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The code of the workflow being queried **/
    code: string;
    /** Model containing the details of the get parameters request **/
    requestBody: WorkflowGetActionParametersWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/workflow/${code}/action/parameters`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowGetAllowedActions({
    code,
    requestBody,
  }: {
    /** The code of the workflow being queried **/
    code: string;
    /** Model containing the details of the get allowed actions request **/
    requestBody: WorkflowGetAllowedActionsWebRequestModel;
  }): Promise<WorkflowGetAllowedActionsWebResponseModel> {
    const options = this.workflowGetAllowedActionsApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowGetAllowedActionsApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The code of the workflow being queried **/
    code: string;
    /** Model containing the details of the get allowed actions request **/
    requestBody: WorkflowGetAllowedActionsWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/workflow/${code}/action/allowed`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowAddAction({
    code,
    requestBody,
  }: {
    /** The code of the workflow to add the action to **/
    code: string;
    /** The model containing all the add action operation details **/
    requestBody: WorkflowAddActionWebRequestModel;
  }): Promise<WorkflowAddActionWebResponseModel> {
    const options = this.workflowAddActionApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowAddActionApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The code of the workflow to add the action to **/
    code: string;
    /** The model containing all the add action operation details **/
    requestBody: WorkflowAddActionWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/workflow/${code}/action`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowEditAction({
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
  }): Promise<WorkflowEditActionWebResponseModel> {
    const options = this.workflowEditActionApiRequestOptions({
      code,
      id,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowEditActionApiRequestOptions({
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
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/workflow/${code}/action/${id}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowRemoveAction({
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
  }): Promise<WorkflowRemoveActionWebResponseModel> {
    const options = this.workflowRemoveActionApiRequestOptions({
      code,
      id,
      signature,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowRemoveActionApiRequestOptions({
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
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/workflow/${code}/action/${id}`,
      query: {
        signature: signature,
      },
    };
  }

  public async workflowGetPermissions({
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
  }): Promise<WorkflowPermissionsGetWebResponseModel> {
    const options = this.workflowGetPermissionsApiRequestOptions({
      code,
      username,
      role,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowGetPermissionsApiRequestOptions({
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
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/workflow/${code}/permissions`,
      query: {
        Username: username,
        Role: role,
      },
    };
  }

  public async workflowEditPermissions({
    code,
    requestBody,
  }: {
    /** The Guc of the workflow to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: WorkflowPermissionsEditWebRequestModel;
  }): Promise<WorkflowWithPermissionsWebResponseModel> {
    const options = this.workflowEditPermissionsApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowEditPermissionsApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the workflow to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: WorkflowPermissionsEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/workflow/${code}/permissions`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowListTags(): Promise<WorkflowTagsListWebResponseModel> {
    const options = this.workflowListTagsApiRequestOptions();
    const result = await __request(options);
    return result.body;
  }

  public workflowListTagsApiRequestOptions(): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/workflow/tags`,
    };
  }

  public async workflowGetLogs({
    runId,
  }: {
    /** The id of the workflow run to retrieve logs for **/
    runId: string | null;
  }): Promise<WorkflowLogsGetWebResponseModel> {
    const options = this.workflowGetLogsApiRequestOptions({
      runId,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowGetLogsApiRequestOptions({
    runId,
  }: {
    /** The id of the workflow run to retrieve logs for **/
    runId: string | null;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/workflow/log`,
      query: {
        runId: runId,
      },
    };
  }

  public async workflowListTriggerLogs({
    code,
    page,
    pageSize,
  }: {
    code: string;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<WorkflowLogTriggerListWebResponseModel> {
    const options = this.workflowListTriggerLogsApiRequestOptions({
      code,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowListTriggerLogsApiRequestOptions({
    code,
    page,
    pageSize,
  }: {
    code: string;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/workflow/${code}/log`,
      query: {
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async workflowListCloningItemWorkflows({
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
  }): Promise<WorkflowListCloningItemWebResponseModel> {
    const options = this.workflowListCloningItemWorkflowsApiRequestOptions({
      itemId,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowListCloningItemWorkflowsApiRequestOptions({
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
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/workflow/clone-item/${itemId}`,
      query: {
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async workflowWorkflowAccessAdvisorByUser({
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
  }): Promise<WorkflowAccessAdvisorByUserListWebResponseModel> {
    const options = this.workflowWorkflowAccessAdvisorByUserApiRequestOptions({
      username,
      query,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowWorkflowAccessAdvisorByUserApiRequestOptions({
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
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/workflow/access-advisor/user/${username}`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async workflowWorkflowAccessAdvisorByRole({
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
  }): Promise<WorkflowAccessAdvisorByRoleListWebResponseModel> {
    const options = this.workflowWorkflowAccessAdvisorByRoleApiRequestOptions({
      code,
      query,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowWorkflowAccessAdvisorByRoleApiRequestOptions({
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
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/workflow/access-advisor/role/${code}`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async workflowWorkflowListNextDates({
    requestBody,
  }: {
    requestBody: WorkflowListNextDateTimesWebRequestModel;
  }): Promise<WorkflowListNextDateTimesWebResponseModel> {
    const options = this.workflowWorkflowListNextDatesApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowWorkflowListNextDatesApiRequestOptions({
    requestBody,
  }: {
    requestBody: WorkflowListNextDateTimesWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/workflow/next-dates`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowWorkflowManualRun({
    code,
    requestBody,
  }: {
    /** The code of the workflow to run, which must have a time or manual trigger **/
    code: string;
    requestBody: CreateManualWorkflowRunWebRequestModel;
  }): Promise<CreateManualWorkflowRunWebResponseModel> {
    const options = this.workflowWorkflowManualRunApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowWorkflowManualRunApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The code of the workflow to run, which must have a time or manual trigger **/
    code: string;
    requestBody: CreateManualWorkflowRunWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/workflow/${code}/manual-run`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }
}
