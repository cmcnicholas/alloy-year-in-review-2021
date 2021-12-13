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

  public async workflowGet(code: string): Promise<WorkflowGetWebResponseModel> {
    const options = this.workflowGetApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public workflowGetApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/workflow/${code}`,
    };
  }

  public async workflowEdit(
    code: string,
    requestBody: WorkflowEditWebRequestModel,
  ): Promise<WorkflowWithOperationsSummaryWebResponseModel> {
    const options = this.workflowEditApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public workflowEditApiRequestOptions(
    code: string,
    requestBody: WorkflowEditWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/workflow/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowDelete(code: string): Promise<void> {
    const options = this.workflowDeleteApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public workflowDeleteApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/workflow/${code}`,
    };
  }

  public async workflowList(
    name?: string | null,
    context?: Context | null,
    userGroup?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<WorkflowListWebResponseModel> {
    const options = this.workflowListApiRequestOptions(name, context, userGroup, page, pageSize);
    const result = await __request(options);
    return result.body;
  }

  public workflowListApiRequestOptions(
    name?: string | null,
    context?: Context | null,
    userGroup?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/workflow`,
      query: {
        Name: name,
        Context: context,
        UserGroup: userGroup,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async workflowCreate(
    requestBody: WorkflowCreateWebRequestModel,
  ): Promise<WorkflowWithOperationsSummaryWebResponseModel> {
    const options = this.workflowCreateApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public workflowCreateApiRequestOptions(
    requestBody: WorkflowCreateWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/workflow`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowClone(
    code: string,
    requestBody: WorkflowCloneWebRequestModel,
  ): Promise<WorkflowWithOperationsSummaryWebResponseModel> {
    const options = this.workflowCloneApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public workflowCloneApiRequestOptions(
    code: string,
    requestBody: WorkflowCloneWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/workflow/${code}/clone`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowGetActionParameters(
    code: string,
    requestBody: WorkflowGetActionParametersWebRequestModel,
  ): Promise<WorkflowGetActionParametersWebResponseModel> {
    const options = this.workflowGetActionParametersApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public workflowGetActionParametersApiRequestOptions(
    code: string,
    requestBody: WorkflowGetActionParametersWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/workflow/${code}/action/parameters`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowGetAllowedActions(
    code: string,
    requestBody: WorkflowGetAllowedActionsWebRequestModel,
  ): Promise<WorkflowGetAllowedActionsWebResponseModel> {
    const options = this.workflowGetAllowedActionsApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public workflowGetAllowedActionsApiRequestOptions(
    code: string,
    requestBody: WorkflowGetAllowedActionsWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/workflow/${code}/action/allowed`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowAddAction(
    code: string,
    requestBody: WorkflowAddActionWebRequestModel,
  ): Promise<WorkflowAddActionWebResponseModel> {
    const options = this.workflowAddActionApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public workflowAddActionApiRequestOptions(
    code: string,
    requestBody: WorkflowAddActionWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/workflow/${code}/action`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowEditAction(
    code: string,
    id: string,
    requestBody: WorkflowEditActionWebRequestModel,
  ): Promise<WorkflowEditActionWebResponseModel> {
    const options = this.workflowEditActionApiRequestOptions(code, id, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public workflowEditActionApiRequestOptions(
    code: string,
    id: string,
    requestBody: WorkflowEditActionWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/workflow/${code}/action/${id}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowRemoveAction(
    code: string,
    id: string,
    signature?: string | null,
  ): Promise<WorkflowRemoveActionWebResponseModel> {
    const options = this.workflowRemoveActionApiRequestOptions(code, id, signature);
    const result = await __request(options);
    return result.body;
  }

  public workflowRemoveActionApiRequestOptions(
    code: string,
    id: string,
    signature?: string | null,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/workflow/${code}/action/${id}`,
      query: {
        signature: signature,
      },
    };
  }

  public async workflowGetPermissions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): Promise<WorkflowPermissionsGetWebResponseModel> {
    const options = this.workflowGetPermissionsApiRequestOptions(code, username, role);
    const result = await __request(options);
    return result.body;
  }

  public workflowGetPermissionsApiRequestOptions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): ApiRequestOptions {
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

  public async workflowEditPermissions(
    code: string,
    requestBody: WorkflowPermissionsEditWebRequestModel,
  ): Promise<WorkflowWithPermissionsWebResponseModel> {
    const options = this.workflowEditPermissionsApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public workflowEditPermissionsApiRequestOptions(
    code: string,
    requestBody: WorkflowPermissionsEditWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/workflow/${code}/permissions`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowGetLogs(runId?: string | null): Promise<WorkflowLogsGetWebResponseModel> {
    const options = this.workflowGetLogsApiRequestOptions(runId);
    const result = await __request(options);
    return result.body;
  }

  public workflowGetLogsApiRequestOptions(runId?: string | null): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/workflow/log`,
      query: {
        runId: runId,
      },
    };
  }

  public async workflowListTriggerLogs(
    code: string,
    page?: number,
    pageSize?: number,
  ): Promise<WorkflowLogTriggerListWebResponseModel> {
    const options = this.workflowListTriggerLogsApiRequestOptions(code, page, pageSize);
    const result = await __request(options);
    return result.body;
  }

  public workflowListTriggerLogsApiRequestOptions(
    code: string,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
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

  public async workflowListApplicableWorkflows(
    code: string,
    page?: number,
    pageSize?: number,
  ): Promise<WorkflowListApplicableWebResponseModel> {
    const options = this.workflowListApplicableWorkflowsApiRequestOptions(code, page, pageSize);
    const result = await __request(options);
    return result.body;
  }

  public workflowListApplicableWorkflowsApiRequestOptions(
    code: string,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/workflow/applicable/${code}`,
      query: {
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async workflowListCloningItemWorkflows(
    itemId: string,
    page?: number,
    pageSize?: number,
  ): Promise<WorkflowListCloningItemWebResponseModel> {
    const options = this.workflowListCloningItemWorkflowsApiRequestOptions(itemId, page, pageSize);
    const result = await __request(options);
    return result.body;
  }

  public workflowListCloningItemWorkflowsApiRequestOptions(
    itemId: string,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
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

  public async workflowWorkflowAccessAdvisorByUser(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<WorkflowAccessAdvisorByUserListWebResponseModel> {
    const options = this.workflowWorkflowAccessAdvisorByUserApiRequestOptions(
      username,
      query,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public workflowWorkflowAccessAdvisorByUserApiRequestOptions(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
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

  public async workflowWorkflowAccessAdvisorByRole(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<WorkflowAccessAdvisorByRoleListWebResponseModel> {
    const options = this.workflowWorkflowAccessAdvisorByRoleApiRequestOptions(
      code,
      query,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public workflowWorkflowAccessAdvisorByRoleApiRequestOptions(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
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

  public async workflowWorkflowListNextDates(
    requestBody: WorkflowListNextDateTimesWebRequestModel,
  ): Promise<WorkflowListNextDateTimesWebResponseModel> {
    const options = this.workflowWorkflowListNextDatesApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public workflowWorkflowListNextDatesApiRequestOptions(
    requestBody: WorkflowListNextDateTimesWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/workflow/next-dates`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowWorkflowManualRun(
    code: string,
    requestBody: CreateManualWorkflowRunWebRequestModel,
  ): Promise<CreateManualWorkflowRunWebResponseModel> {
    const options = this.workflowWorkflowManualRunApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public workflowWorkflowManualRunApiRequestOptions(
    code: string,
    requestBody: CreateManualWorkflowRunWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/workflow/${code}/manual-run`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }
}
