/* eslint-disable */

import type { TaskGetWebResponseModel } from '../models/TaskGetWebResponseModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface TaskService {
  /**
   * Get a task by its identifier
   * @param id The identifier of the task to get
   * @returns TaskGetWebResponseModel
   */
  taskGet(id: string): Promise<TaskGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a task by its identifier
   * @param id The identifier of the task to get
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  taskGetApiRequestOptions(id: string): ApiRequestOptions;
}
