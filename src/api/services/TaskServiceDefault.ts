/* eslint-disable */

import type { TaskGetWebResponseModel } from '../models/TaskGetWebResponseModel';
import type { TaskService } from './TaskService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class TaskServiceDefault implements TaskService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async taskGet({
    id,
  }: {
    /** The identifier of the task to get **/
    id: string;
  }): Promise<TaskGetWebResponseModel> {
    const options = this.taskGetApiRequestOptions({
      id,
    });
    const result = await __request(options);
    return result.body;
  }

  public taskGetApiRequestOptions({
    id,
  }: {
    /** The identifier of the task to get **/
    id: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/task/${id}`,
    };
  }
}
