/* eslint-disable */

import type { Context } from '../models/Context';
import type { DodiListWebResponseModel } from '../models/DodiListWebResponseModel';
import type { DodiWithOperationsSummaryWebResponseModel } from '../models/DodiWithOperationsSummaryWebResponseModel';
import type { DodiService } from './DodiService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class DodiServiceDefault implements DodiService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async dodiGet(code: string): Promise<DodiWithOperationsSummaryWebResponseModel> {
    const options = this.dodiGetApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public dodiGetApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/dodi/${code}`,
    };
  }

  public async dodiList(
    query?: string | null,
    context?: Context | null,
    implementsInterface?: string | null,
    userGroup?: string | null,
    childDodi?: string | null,
    lastEditDate?: string | null,
    queryCompleteDodi?: boolean | null,
    page?: number,
    pageSize?: number,
  ): Promise<DodiListWebResponseModel> {
    const options = this.dodiListApiRequestOptions(
      query,
      context,
      implementsInterface,
      userGroup,
      childDodi,
      lastEditDate,
      queryCompleteDodi,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public dodiListApiRequestOptions(
    query?: string | null,
    context?: Context | null,
    implementsInterface?: string | null,
    userGroup?: string | null,
    childDodi?: string | null,
    lastEditDate?: string | null,
    queryCompleteDodi?: boolean | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/dodi`,
      query: {
        Query: query,
        Context: context,
        ImplementsInterface: implementsInterface,
        UserGroup: userGroup,
        ChildDodi: childDodi,
        LastEditDate: lastEditDate,
        QueryCompleteDodi: queryCompleteDodi,
        Page: page,
        PageSize: pageSize,
      },
    };
  }
}
