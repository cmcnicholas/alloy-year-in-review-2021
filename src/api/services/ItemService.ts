/* eslint-disable */

import type { CollectionCode } from '../models/CollectionCode';
import type { ItemCloneWebRequestModel } from '../models/ItemCloneWebRequestModel';
import type { ItemCloneWebResponseModel } from '../models/ItemCloneWebResponseModel';
import type { ItemCreateWebRequestModel } from '../models/ItemCreateWebRequestModel';
import type { ItemCreateWebResponseModel } from '../models/ItemCreateWebResponseModel';
import type { ItemEditWebRequestModel } from '../models/ItemEditWebRequestModel';
import type { ItemEditWebResponseModel } from '../models/ItemEditWebResponseModel';
import type { ItemGetWebResponseModel } from '../models/ItemGetWebResponseModel';
import type { ItemGraphGetWebResponseModel } from '../models/ItemGraphGetWebResponseModel';
import type { ItemParentsGetWebResponseModel } from '../models/ItemParentsGetWebResponseModel';
import type { ItemTouchWebResponseModel } from '../models/ItemTouchWebResponseModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface ItemService {
  /**
   * Gets an item by id
   * Gets the item that matches the specified id.
   * @param id The AId of the item to retrieve
   * @returns ItemGetWebResponseModel
   */
  itemGet(id: string): Promise<ItemGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Gets an item by id
   * Gets the item that matches the specified id.
   * @param id The AId of the item to retrieve
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemGetApiRequestOptions(id: string): ApiRequestOptions;

  /**
   * Edits the item by id
   * If an attribute is not specified or the value is the same as the previous one, its value will be left
   * unchanged, otherwise its value will be replaced by the provided one.
   * @param id The AId of the item to edit
   * @param requestBody The model containing the info to edit the item
   * @returns ItemEditWebResponseModel
   */
  itemEdit(id: string, requestBody: ItemEditWebRequestModel): Promise<ItemEditWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edits the item by id
   * If an attribute is not specified or the value is the same as the previous one, its value will be left
   * unchanged, otherwise its value will be replaced by the provided one.
   * @param id The AId of the item to edit
   * @param requestBody The model containing the info to edit the item
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemEditApiRequestOptions(id: string, requestBody: ItemEditWebRequestModel): ApiRequestOptions;

  /**
   * Deletes an item by id
   * This endpoint is used to completely and irreversibly delete an item by its id.
   * @param id The AId of the item to delete
   * @returns void
   */
  itemDelete(id: string): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Deletes an item by id
   * This endpoint is used to completely and irreversibly delete an item by its id.
   * @param id The AId of the item to delete
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemDeleteApiRequestOptions(id: string): ApiRequestOptions;

  /**
   * Touches the item by id
   * Refreshes any out of date computed data on the item that has no
   * been updated automatically
   * @param id The AId of the item to touch
   * @returns ItemTouchWebResponseModel
   */
  itemTouch(id: string): Promise<ItemTouchWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Touches the item by id
   * Refreshes any out of date computed data on the item that has no
   * been updated automatically
   * @param id The AId of the item to touch
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemTouchApiRequestOptions(id: string): ApiRequestOptions;

  /**
   * Creates an item
   * Creates a new item in the provided design and collection
   * @param requestBody The models containing the info about the item to be created
   * @returns ItemCreateWebResponseModel
   */
  itemCreate(requestBody: ItemCreateWebRequestModel): Promise<ItemCreateWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Creates an item
   * Creates a new item in the provided design and collection
   * @param requestBody The models containing the info about the item to be created
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemCreateApiRequestOptions(requestBody: ItemCreateWebRequestModel): ApiRequestOptions;

  /**
   * Clones an item
   * Create a copy of an existing item.  If the item is in the template collection, then template
   * logic will be used to deep copy any child items that are also in the template collection, as
   * well as maintaining any existing links to parent items.
   * @param id The AId item id of the item to clone
   * @param requestBody The models containing the info about the item to be cloned
   * @returns ItemCloneWebResponseModel
   */
  itemClone(id: string, requestBody: ItemCloneWebRequestModel): Promise<ItemCloneWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Clones an item
   * Create a copy of an existing item.  If the item is in the template collection, then template
   * logic will be used to deep copy any child items that are also in the template collection, as
   * well as maintaining any existing links to parent items.
   * @param id The AId item id of the item to clone
   * @param requestBody The models containing the info about the item to be cloned
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemCloneApiRequestOptions(id: string, requestBody: ItemCloneWebRequestModel): ApiRequestOptions;

  /**
   * Gets an item graph by id and code
   * Gets the item graph for the specified item id and graph code.
   * @param id The AId of the item to retrieve
   * @param code The code of the graph to retrieve for example "Component", "Job", "Lookup", "Network"
   * @param collectionCodes Optional collections to filter the children by
   * @param maxRecursionDepth Optional maximum recursion depth
   * @returns ItemGraphGetWebResponseModel
   */
  itemGetItemGraph(
    id: string,
    code: string,
    collectionCodes?: Array<CollectionCode> | null,
    maxRecursionDepth?: number | null,
  ): Promise<ItemGraphGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Gets an item graph by id and code
   * Gets the item graph for the specified item id and graph code.
   * @param id The AId of the item to retrieve
   * @param code The code of the graph to retrieve for example "Component", "Job", "Lookup", "Network"
   * @param collectionCodes Optional collections to filter the children by
   * @param maxRecursionDepth Optional maximum recursion depth
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemGetItemGraphApiRequestOptions(
    id: string,
    code: string,
    collectionCodes?: Array<CollectionCode> | null,
    maxRecursionDepth?: number | null,
  ): ApiRequestOptions;

  /**
   * Gets an item parents
   * Gets all parents items for the item filtered on optional attribute and graph codes.
   * If none of the optional parameters is set it returns all parents for the item.
   * @param id The AId of the item to retrieve parents for
   * @param attributeCode Optional attribute code to filter parents on
   * @param graphCode Optional graph code to filter parents on
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ItemParentsGetWebResponseModel
   */
  itemGetItemParents(
    id: string,
    attributeCode?: string | null,
    graphCode?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<ItemParentsGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Gets an item parents
   * Gets all parents items for the item filtered on optional attribute and graph codes.
   * If none of the optional parameters is set it returns all parents for the item.
   * @param id The AId of the item to retrieve parents for
   * @param attributeCode Optional attribute code to filter parents on
   * @param graphCode Optional graph code to filter parents on
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemGetItemParentsApiRequestOptions(
    id: string,
    attributeCode?: string | null,
    graphCode?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;
}
