/* eslint-disable */

import type { ItemLogListWebResponseModel } from '../models/ItemLogListWebResponseModel';
import type { ItemLogQueryWebRequestModel } from '../models/ItemLogQueryWebRequestModel';
import type { ItemQueryGetWebResponseModel } from '../models/ItemQueryGetWebResponseModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface ItemLogService {
  /**
   * Query the item logs
   * The  of the item whose related logs need to be fetched
   * The model containing the info for the operation
   * @param itemId
   * @param requestBody
   * @returns ItemQueryGetWebResponseModel
   */
  itemLogQueryItemLog(
    itemId: string,
    requestBody: ItemLogQueryWebRequestModel,
  ): Promise<ItemQueryGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Query the item logs
   * The  of the item whose related logs need to be fetched
   * The model containing the info for the operation
   * @param itemId
   * @param requestBody
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemLogQueryItemLogApiRequestOptions(
    itemId: string,
    requestBody: ItemLogQueryWebRequestModel,
  ): ApiRequestOptions;

  /**
   * List the item logs on an item
   * Retrieve the item log related to a specific item to get the audit history for that item
   * @param itemId The AId of the item whose related logs need to be fetched
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ItemLogListWebResponseModel
   */
  itemLogListItemLogsByItemId(
    itemId: string,
    page?: number,
    pageSize?: number,
  ): Promise<ItemLogListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List the item logs on an item
   * Retrieve the item log related to a specific item to get the audit history for that item
   * @param itemId The AId of the item whose related logs need to be fetched
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemLogListItemLogsByItemIdApiRequestOptions(
    itemId: string,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * List the item logs on a design
   * Retrieve the item log related to a specific design to get the audit history for that design
   * @param designCode The Guc of the design whose related item logs need to be fetched
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ItemLogListWebResponseModel
   */
  itemLogListItemLogsByDesignCode(
    designCode: string,
    page?: number,
    pageSize?: number,
  ): Promise<ItemLogListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List the item logs on a design
   * Retrieve the item log related to a specific design to get the audit history for that design
   * @param designCode The Guc of the design whose related item logs need to be fetched
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemLogListItemLogsByDesignCodeApiRequestOptions(
    designCode: string,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;
}
