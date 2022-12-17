/* eslint-disable */

import type { BulkActionSubmittedWebResponseModel } from '../models/BulkActionSubmittedWebResponseModel';
import type { DeleteItemsBulkActionWebRequestModel } from '../models/DeleteItemsBulkActionWebRequestModel';
import type { EditItemsBulkActionWebRequestModel } from '../models/EditItemsBulkActionWebRequestModel';
import type { GetBulkActionWebResponseModel } from '../models/GetBulkActionWebResponseModel';
import type { ItemBulkWebRequestModel } from '../models/ItemBulkWebRequestModel';
import type { ItemBulkWebResponseModel } from '../models/ItemBulkWebResponseModel';
import type { ListBulkActionErrorsWebResponseModel } from '../models/ListBulkActionErrorsWebResponseModel';
import type { TouchItemsBulkActionWebRequestModel } from '../models/TouchItemsBulkActionWebRequestModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface BulkService {
  /**
   * Get a bulk action by its id
   * Fetches a bulk action by its Alloy Id (AId)
   * @returns GetBulkActionWebResponseModel
   */
  bulkGet({
    id,
  }: {
    /** The id for the bulk action **/
    id: string;
  }): Promise<GetBulkActionWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a bulk action by its id
   * Fetches a bulk action by its Alloy Id (AId)
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  bulkGetApiRequestOptions({
    id,
  }: {
    /** The id for the bulk action **/
    id: string;
  }): ApiRequestOptions;

  /**
   * Get a list of bulk action errors
   * Fetches a list of bulk action errors, optionally specifying page and the number of results to return per page.
   * @returns ListBulkActionErrorsWebResponseModel
   */
  bulkListErrors({
    id,
    page,
    pageSize,
  }: {
    /** The AId for the bulk action **/
    id: string;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<ListBulkActionErrorsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a list of bulk action errors
   * Fetches a list of bulk action errors, optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  bulkListErrorsApiRequestOptions({
    id,
    page,
    pageSize,
  }: {
    /** The AId for the bulk action **/
    id: string;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Submit a bulk delete item action
   * This operation allows to delete the items matching the specified Aqs query
   * @returns BulkActionSubmittedWebResponseModel
   */
  bulkDeleteItems({
    requestBody,
  }: {
    /** The model containing the info needed for the delete items bulk operation **/
    requestBody: DeleteItemsBulkActionWebRequestModel;
  }): Promise<BulkActionSubmittedWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Submit a bulk delete item action
   * This operation allows to delete the items matching the specified Aqs query
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  bulkDeleteItemsApiRequestOptions({
    requestBody,
  }: {
    /** The model containing the info needed for the delete items bulk operation **/
    requestBody: DeleteItemsBulkActionWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Submit a bulk touch item action
   * This operation allows to touch the items matching the specified Aqs query
   * @returns BulkActionSubmittedWebResponseModel
   */
  bulkTouchItems({
    requestBody,
  }: {
    /** The model containing the info needed for the touch items bulk operation **/
    requestBody: TouchItemsBulkActionWebRequestModel;
  }): Promise<BulkActionSubmittedWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Submit a bulk touch item action
   * This operation allows to touch the items matching the specified Aqs query
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  bulkTouchItemsApiRequestOptions({
    requestBody,
  }: {
    /** The model containing the info needed for the touch items bulk operation **/
    requestBody: TouchItemsBulkActionWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Submit a bulk item edit operation
   * This operation allows to edit a specific set of attributes and properties on the items matching the specified Aqs query
   * @returns BulkActionSubmittedWebResponseModel
   */
  bulkEditItems({
    requestBody,
  }: {
    /** The model containing the info needed for the edit items bulk operation **/
    requestBody: EditItemsBulkActionWebRequestModel;
  }): Promise<BulkActionSubmittedWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Submit a bulk item edit operation
   * This operation allows to edit a specific set of attributes and properties on the items matching the specified Aqs query
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  bulkEditItemsApiRequestOptions({
    requestBody,
  }: {
    /** The model containing the info needed for the edit items bulk operation **/
    requestBody: EditItemsBulkActionWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Performs many item CUD operations
   * Accepts a list of Create, Edit and Delete operations, using the same models as the respective
   * item APIs, performing bulked operations. Any errors will be returned in the response
   * model.
   * This endpoint is NOT meant to replace the import process and does not guarantee transactional integrity.
   * Moreover the endpoint does not accept more than 1000 requests.
   * @returns ItemBulkWebResponseModel
   */
  bulkGeneric({
    requestBody,
  }: {
    requestBody: ItemBulkWebRequestModel;
  }): Promise<ItemBulkWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Performs many item CUD operations
   * Accepts a list of Create, Edit and Delete operations, using the same models as the respective
   * item APIs, performing bulked operations. Any errors will be returned in the response
   * model.
   * This endpoint is NOT meant to replace the import process and does not guarantee transactional integrity.
   * Moreover the endpoint does not accept more than 1000 requests.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  bulkGenericApiRequestOptions({
    requestBody,
  }: {
    requestBody: ItemBulkWebRequestModel;
  }): ApiRequestOptions;
}
