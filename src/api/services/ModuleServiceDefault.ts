/* eslint-disable */

import type { ModuleGetWebResponseModel } from '../models/ModuleGetWebResponseModel';
import type { ModuleListWebResponseModel } from '../models/ModuleListWebResponseModel';
import type { ModuleService } from './ModuleService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class ModuleServiceDefault implements ModuleService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async moduleGet(code: string): Promise<ModuleGetWebResponseModel> {
    const options = this.moduleGetApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public moduleGetApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/module/${code}`,
    };
  }

  public async moduleList(): Promise<ModuleListWebResponseModel> {
    const options = this.moduleListApiRequestOptions();
    const result = await __request(options);
    return result.body;
  }

  public moduleListApiRequestOptions(): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/module`,
    };
  }
}
