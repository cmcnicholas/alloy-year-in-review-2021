/* eslint-disable */

import type { ItemLogListWebResponseModel } from '../models/ItemLogListWebResponseModel';
import type { ItemLogQueryWebRequestModel } from '../models/ItemLogQueryWebRequestModel';
import type { ItemQueryGetWebResponseModel } from '../models/ItemQueryGetWebResponseModel';
import type { ItemLogService } from './ItemLogService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class ItemLogServiceDefault implements ItemLogService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async itemLogQueryItemLog({
    itemId,
    requestBody,
  }: {
    itemId: string;
    requestBody: ItemLogQueryWebRequestModel;
  }): Promise<ItemQueryGetWebResponseModel> {
    const options = this.itemLogQueryItemLogApiRequestOptions({
      itemId,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public itemLogQueryItemLogApiRequestOptions({
    itemId,
    requestBody,
  }: {
    itemId: string;
    requestBody: ItemLogQueryWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/item-log/item/${itemId}/reconstruct`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async itemLogListItemLogsByItemId({
    itemId,
    since,
    until,
    descending,
    page,
    pageSize,
  }: {
    /** The AId of the item whose related logs need to be fetched **/
    itemId: string;
    /** An optional date to return only item logs for items created or edited after this date **/
    since?: string | null;
    /** An optional date to return only item logs for items created or edited before this date **/
    until?: string | null;
    /** If true, logs will be returned in descending order by date, otherwise they will be returned in ascending
     * order **/
    descending?: boolean;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<ItemLogListWebResponseModel> {
    const options = this.itemLogListItemLogsByItemIdApiRequestOptions({
      itemId,
      since,
      until,
      descending,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public itemLogListItemLogsByItemIdApiRequestOptions({
    itemId,
    since,
    until,
    descending,
    page,
    pageSize,
  }: {
    /** The AId of the item whose related logs need to be fetched **/
    itemId: string;
    /** An optional date to return only item logs for items created or edited after this date **/
    since?: string | null;
    /** An optional date to return only item logs for items created or edited before this date **/
    until?: string | null;
    /** If true, logs will be returned in descending order by date, otherwise they will be returned in ascending
     * order **/
    descending?: boolean;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/item-log/item/${itemId}`,
      query: {
        Since: since,
        Until: until,
        Descending: descending,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async itemLogListItemLogsByDesignCode({
    designCode,
    since,
    until,
    descending,
    page,
    pageSize,
  }: {
    /** The Guc of the design whose related item logs need to be fetched **/
    designCode: string;
    /** An optional date to return only item logs for items created or edited after this date **/
    since?: string | null;
    /** An optional date to return only item logs for items created or edited before this date **/
    until?: string | null;
    /** If true, logs will be returned in descending order by date, otherwise they will be returned in ascending
     * order **/
    descending?: boolean;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<ItemLogListWebResponseModel> {
    const options = this.itemLogListItemLogsByDesignCodeApiRequestOptions({
      designCode,
      since,
      until,
      descending,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public itemLogListItemLogsByDesignCodeApiRequestOptions({
    designCode,
    since,
    until,
    descending,
    page,
    pageSize,
  }: {
    /** The Guc of the design whose related item logs need to be fetched **/
    designCode: string;
    /** An optional date to return only item logs for items created or edited after this date **/
    since?: string | null;
    /** An optional date to return only item logs for items created or edited before this date **/
    until?: string | null;
    /** If true, logs will be returned in descending order by date, otherwise they will be returned in ascending
     * order **/
    descending?: boolean;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/item-log/design/${designCode}`,
      query: {
        Since: since,
        Until: until,
        Descending: descending,
        Page: page,
        PageSize: pageSize,
      },
    };
  }
}
