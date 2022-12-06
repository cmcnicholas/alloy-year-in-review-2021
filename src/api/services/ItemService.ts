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
   * @returns ItemGetWebResponseModel
   */
  itemGet({
    id,
  }: {
    /** The AId of the item to retrieve **/
    id: string;
  }): Promise<ItemGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Gets an item by id
   * Gets the item that matches the specified id.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemGetApiRequestOptions({
    id,
  }: {
    /** The AId of the item to retrieve **/
    id: string;
  }): ApiRequestOptions;

  /**
   * Edits the item by id
   * If an attribute is not specified or the value is the same as the previous one, its value will be left
   * unchanged, otherwise its value will be replaced by the provided one.
   * @returns ItemEditWebResponseModel
   */
  itemEdit({
    id,
    requestBody,
  }: {
    /** The AId of the item to edit **/
    id: string;
    /** The model containing the info to edit the item **/
    requestBody: ItemEditWebRequestModel;
  }): Promise<ItemEditWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edits the item by id
   * If an attribute is not specified or the value is the same as the previous one, its value will be left
   * unchanged, otherwise its value will be replaced by the provided one.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemEditApiRequestOptions({
    id,
    requestBody,
  }: {
    /** The AId of the item to edit **/
    id: string;
    /** The model containing the info to edit the item **/
    requestBody: ItemEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Deletes an item by id
   * This endpoint is used to completely and irreversibly delete an item by its id.
   * @returns void
   */
  itemDelete({
    id,
  }: {
    /** The AId of the item to delete **/
    id: string;
  }): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Deletes an item by id
   * This endpoint is used to completely and irreversibly delete an item by its id.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemDeleteApiRequestOptions({
    id,
  }: {
    /** The AId of the item to delete **/
    id: string;
  }): ApiRequestOptions;

  /**
   * Touches the item by id
   * Refreshes any out of date computed data on the item that has no
   * been updated automatically
   * @returns ItemTouchWebResponseModel
   */
  itemTouch({
    id,
  }: {
    /** The AId of the item to touch **/
    id: string;
  }): Promise<ItemTouchWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Touches the item by id
   * Refreshes any out of date computed data on the item that has no
   * been updated automatically
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemTouchApiRequestOptions({
    id,
  }: {
    /** The AId of the item to touch **/
    id: string;
  }): ApiRequestOptions;

  /**
   * Creates an item
   * Creates a new item in the provided design and collection
   * @returns ItemCreateWebResponseModel
   */
  itemCreate({
    requestBody,
  }: {
    /** The models containing the info about the item to be created **/
    requestBody: ItemCreateWebRequestModel;
  }): Promise<ItemCreateWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Creates an item
   * Creates a new item in the provided design and collection
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemCreateApiRequestOptions({
    requestBody,
  }: {
    /** The models containing the info about the item to be created **/
    requestBody: ItemCreateWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Clones an item
   * Create a copy of an existing item.  If the item is in the template collection, then template
   * logic will be used to deep copy any child items that are also in the template collection, as
   * well as maintaining any existing links to parent items.
   * @returns ItemCloneWebResponseModel
   */
  itemClone({
    id,
    requestBody,
  }: {
    /** The AId item id of the item to clone **/
    id: string;
    /** The models containing the info about the item to be cloned **/
    requestBody: ItemCloneWebRequestModel;
  }): Promise<ItemCloneWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Clones an item
   * Create a copy of an existing item.  If the item is in the template collection, then template
   * logic will be used to deep copy any child items that are also in the template collection, as
   * well as maintaining any existing links to parent items.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemCloneApiRequestOptions({
    id,
    requestBody,
  }: {
    /** The AId item id of the item to clone **/
    id: string;
    /** The models containing the info about the item to be cloned **/
    requestBody: ItemCloneWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Gets an item graph by id and code
   * Gets the item graph for the specified item id and graph code.
   * @returns ItemGraphGetWebResponseModel
   */
  itemGetItemGraph({
    id,
    code,
    collectionCodes,
    maxRecursionDepth,
  }: {
    /** The AId of the item to retrieve **/
    id: string;
    /** The code of the graph to retrieve for example "Component", "Job", "Lookup", "Network" **/
    code: string;
    /** Optional collections to filter the children by **/
    collectionCodes?: Array<CollectionCode> | null;
    /** Optional maximum recursion depth **/
    maxRecursionDepth?: number | null;
  }): Promise<ItemGraphGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Gets an item graph by id and code
   * Gets the item graph for the specified item id and graph code.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemGetItemGraphApiRequestOptions({
    id,
    code,
    collectionCodes,
    maxRecursionDepth,
  }: {
    /** The AId of the item to retrieve **/
    id: string;
    /** The code of the graph to retrieve for example "Component", "Job", "Lookup", "Network" **/
    code: string;
    /** Optional collections to filter the children by **/
    collectionCodes?: Array<CollectionCode> | null;
    /** Optional maximum recursion depth **/
    maxRecursionDepth?: number | null;
  }): ApiRequestOptions;

  /**
   * Gets an item parents
   * Gets all parents items for the item filtered on optional attribute and graph codes.
   * If none of the optional parameters is set it returns all parents for the item.
   * @returns ItemParentsGetWebResponseModel
   */
  itemGetItemParents({
    id,
    attributeCode,
    graphCode,
    page,
    pageSize,
  }: {
    /** The AId of the item to retrieve parents for **/
    id: string;
    /** Optional attribute code to filter parents on **/
    attributeCode?: string | null;
    /** Optional graph code to filter parents on **/
    graphCode?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<ItemParentsGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Gets an item parents
   * Gets all parents items for the item filtered on optional attribute and graph codes.
   * If none of the optional parameters is set it returns all parents for the item.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemGetItemParentsApiRequestOptions({
    id,
    attributeCode,
    graphCode,
    page,
    pageSize,
  }: {
    /** The AId of the item to retrieve parents for **/
    id: string;
    /** Optional attribute code to filter parents on **/
    attributeCode?: string | null;
    /** Optional graph code to filter parents on **/
    graphCode?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;
}
