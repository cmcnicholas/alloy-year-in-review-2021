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
   * @param id The id for the bulk action
   * @returns GetBulkActionWebResponseModel
   */
  bulkGet(id: string): Promise<GetBulkActionWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a bulk action by its id
   * Fetches a bulk action by its Alloy Id (AId)
   * @param id The id for the bulk action
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  bulkGetApiRequestOptions(id: string): ApiRequestOptions;

  /**
   * Get a list of bulk action errors
   * Fetches a list of bulk action errors, optionally specifying page and the number of results to return per page.
   * @param id The AId for the bulk action
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ListBulkActionErrorsWebResponseModel
   */
  bulkListErrors(
    id: string,
    page?: number,
    pageSize?: number,
  ): Promise<ListBulkActionErrorsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a list of bulk action errors
   * Fetches a list of bulk action errors, optionally specifying page and the number of results to return per page.
   * @param id The AId for the bulk action
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  bulkListErrorsApiRequestOptions(id: string, page?: number, pageSize?: number): ApiRequestOptions;

  /**
   * Submit a bulk delete item action
   * This operation allows to delete the items matching the specified Aqs query
   * @param requestBody The model containing the info needed for the delete items bulk operation
   * @returns BulkActionSubmittedWebResponseModel
   */
  bulkDeleteItems(
    requestBody: DeleteItemsBulkActionWebRequestModel,
  ): Promise<BulkActionSubmittedWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Submit a bulk delete item action
   * This operation allows to delete the items matching the specified Aqs query
   * @param requestBody The model containing the info needed for the delete items bulk operation
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  bulkDeleteItemsApiRequestOptions(
    requestBody: DeleteItemsBulkActionWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Submit a bulk touch item action
   * This operation allows to touch the items matching the specified Aqs query
   * @param requestBody The model containing the info needed for the touch items bulk operation
   * @returns BulkActionSubmittedWebResponseModel
   */
  bulkTouchItems(
    requestBody: TouchItemsBulkActionWebRequestModel,
  ): Promise<BulkActionSubmittedWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Submit a bulk touch item action
   * This operation allows to touch the items matching the specified Aqs query
   * @param requestBody The model containing the info needed for the touch items bulk operation
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  bulkTouchItemsApiRequestOptions(
    requestBody: TouchItemsBulkActionWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Submit a bulk item edit operation
   * This operation allows to edit a specific set of attributes and properties on the items matching the specified Aqs query
   * @param requestBody The model containing the info needed for the edit items bulk operation
   * @returns BulkActionSubmittedWebResponseModel
   */
  bulkEditItems(
    requestBody: EditItemsBulkActionWebRequestModel,
  ): Promise<BulkActionSubmittedWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Submit a bulk item edit operation
   * This operation allows to edit a specific set of attributes and properties on the items matching the specified Aqs query
   * @param requestBody The model containing the info needed for the edit items bulk operation
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  bulkEditItemsApiRequestOptions(
    requestBody: EditItemsBulkActionWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Performs many item CUD operations
   * Accepts a list of Create, Edit and Delete operations, using the same models as the respective
   * item APIs, performing bulked operations. Any errors will be returned in the response
   * model.
   * This endpoint is NOT meant to replace the import process and does not guarantee transactional integrity.
   * Moreover the endpoint does not accept more than 1000 requests.
   * @param requestBody
   * @returns ItemBulkWebResponseModel
   */
  bulkGeneric(requestBody: ItemBulkWebRequestModel): Promise<ItemBulkWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Performs many item CUD operations
   * Accepts a list of Create, Edit and Delete operations, using the same models as the respective
   * item APIs, performing bulked operations. Any errors will be returned in the response
   * model.
   * This endpoint is NOT meant to replace the import process and does not guarantee transactional integrity.
   * Moreover the endpoint does not accept more than 1000 requests.
   * @param requestBody
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  bulkGenericApiRequestOptions(requestBody: ItemBulkWebRequestModel): ApiRequestOptions;
}
