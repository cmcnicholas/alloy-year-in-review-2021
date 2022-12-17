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

  public async dodiGet({
    code,
  }: {
    /** The Guc to use to fetch the required dodi **/
    code: string;
  }): Promise<DodiWithOperationsSummaryWebResponseModel> {
    const options = this.dodiGetApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public dodiGetApiRequestOptions({
    code,
  }: {
    /** The Guc to use to fetch the required dodi **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/dodi/${code}`,
    };
  }

  public async dodiList({
    query,
    context,
    implementsInterface,
    userGroup,
    childDodi,
    lastEditDate,
    queryCompleteDodi,
    page,
    pageSize,
  }: {
    /** Optional query to filter the dodis by **/
    query?: string | null;
    /** Optional dodis Context filter **/
    context?: Context | null;
    /** The optional dodi code Guc, if specified, only the dodis
     * implementing that interface code will be returned **/
    implementsInterface?: string | null;
    /** The optional user group Guc. If specified, only the dodis
     * that have this user group code within their permissions or the permissions
     * of the attributes within them are returned **/
    userGroup?: string | null;
    /** Optional Guc to filter dodis by. If specified, only the dodis
     * that have a link attribute pointing to the specified dodi are returned **/
    childDodi?: string | null;
    /** The optional last edit date to return only dodis created or edited after this date **/
    lastEditDate?: string | null;
    /** Optional boolean that can be set to false to query against dodis without taking into account inheritance **/
    queryCompleteDodi?: boolean | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<DodiListWebResponseModel> {
    const options = this.dodiListApiRequestOptions({
      query,
      context,
      implementsInterface,
      userGroup,
      childDodi,
      lastEditDate,
      queryCompleteDodi,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public dodiListApiRequestOptions({
    query,
    context,
    implementsInterface,
    userGroup,
    childDodi,
    lastEditDate,
    queryCompleteDodi,
    page,
    pageSize,
  }: {
    /** Optional query to filter the dodis by **/
    query?: string | null;
    /** Optional dodis Context filter **/
    context?: Context | null;
    /** The optional dodi code Guc, if specified, only the dodis
     * implementing that interface code will be returned **/
    implementsInterface?: string | null;
    /** The optional user group Guc. If specified, only the dodis
     * that have this user group code within their permissions or the permissions
     * of the attributes within them are returned **/
    userGroup?: string | null;
    /** Optional Guc to filter dodis by. If specified, only the dodis
     * that have a link attribute pointing to the specified dodi are returned **/
    childDodi?: string | null;
    /** The optional last edit date to return only dodis created or edited after this date **/
    lastEditDate?: string | null;
    /** Optional boolean that can be set to false to query against dodis without taking into account inheritance **/
    queryCompleteDodi?: boolean | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
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
