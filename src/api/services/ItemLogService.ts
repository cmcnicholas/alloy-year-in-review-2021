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
   * @returns ItemQueryGetWebResponseModel
   */
  itemLogQueryItemLog({
    itemId,
    requestBody,
  }: {
    itemId: string;
    requestBody: ItemLogQueryWebRequestModel;
  }): Promise<ItemQueryGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Query the item logs
   * The  of the item whose related logs need to be fetched
   * The model containing the info for the operation
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemLogQueryItemLogApiRequestOptions({
    itemId,
    requestBody,
  }: {
    itemId: string;
    requestBody: ItemLogQueryWebRequestModel;
  }): ApiRequestOptions;

  /**
   * List the item logs on an item
   * Retrieve the item log related to a specific item to get the audit history for that item
   * @returns ItemLogListWebResponseModel
   */
  itemLogListItemLogsByItemId({
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
  }): Promise<ItemLogListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List the item logs on an item
   * Retrieve the item log related to a specific item to get the audit history for that item
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemLogListItemLogsByItemIdApiRequestOptions({
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
  }): ApiRequestOptions;

  /**
   * List the item logs on a design
   * Retrieve the item log related to a specific design to get the audit history for that design
   * @returns ItemLogListWebResponseModel
   */
  itemLogListItemLogsByDesignCode({
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
  }): Promise<ItemLogListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List the item logs on a design
   * Retrieve the item log related to a specific design to get the audit history for that design
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemLogListItemLogsByDesignCodeApiRequestOptions({
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
  }): ApiRequestOptions;
}
