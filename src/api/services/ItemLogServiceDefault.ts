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

  public async itemLogQueryItemLog(
    itemId: string,
    requestBody: ItemLogQueryWebRequestModel,
  ): Promise<ItemQueryGetWebResponseModel> {
    const options = this.itemLogQueryItemLogApiRequestOptions(itemId, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public itemLogQueryItemLogApiRequestOptions(
    itemId: string,
    requestBody: ItemLogQueryWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/item-log/item/${itemId}/reconstruct`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async itemLogListItemLogsByItemId(
    itemId: string,
    page?: number,
    pageSize?: number,
  ): Promise<ItemLogListWebResponseModel> {
    const options = this.itemLogListItemLogsByItemIdApiRequestOptions(itemId, page, pageSize);
    const result = await __request(options);
    return result.body;
  }

  public itemLogListItemLogsByItemIdApiRequestOptions(
    itemId: string,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/item-log/item/${itemId}`,
      query: {
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async itemLogListItemLogsByDesignCode(
    designCode: string,
    page?: number,
    pageSize?: number,
  ): Promise<ItemLogListWebResponseModel> {
    const options = this.itemLogListItemLogsByDesignCodeApiRequestOptions(
      designCode,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public itemLogListItemLogsByDesignCodeApiRequestOptions(
    designCode: string,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/item-log/design/${designCode}`,
      query: {
        Page: page,
        PageSize: pageSize,
      },
    };
  }
}
