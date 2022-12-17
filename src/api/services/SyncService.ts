/* eslint-disable */

import type { SyncBootstrapItemsRequestModel } from '../models/SyncBootstrapItemsRequestModel';
import type { SyncDeltaItemsRequestModel } from '../models/SyncDeltaItemsRequestModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface SyncService {
  /**
   * Bootstrap download of initial data
   * Streams a sequence of Item BsonDocuments, based on the input parameters.
   * These are back-to-back, so repeated deserialization of items will be required until end of stream.
   * @returns any
   */
  syncBootStrap({
    requestBody,
  }: {
    /** Parameters **/
    requestBody: SyncBootstrapItemsRequestModel;
  }): Promise<any>;

  /**
   * **used to get the request options without making a http request**
   * Bootstrap download of initial data
   * Streams a sequence of Item BsonDocuments, based on the input parameters.
   * These are back-to-back, so repeated deserialization of items will be required until end of stream.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  syncBootStrapApiRequestOptions({
    requestBody,
  }: {
    /** Parameters **/
    requestBody: SyncBootstrapItemsRequestModel;
  }): ApiRequestOptions;

  /**
   * @deprecated
   * Bootstrap download of initial data (Obsolete)
   * Streams a sequence of ItemWebModel BsonDocuments, based on the input parameters.
   * These are back-to-back, so repeated deserialization of items will be required until end of stream.
   * @returns any
   */
  syncBootStrapObsolete({
    requestBody,
  }: {
    /** Parameters **/
    requestBody: SyncBootstrapItemsRequestModel;
  }): Promise<any>;

  /**
   * @deprecated
   * **used to get the request options without making a http request**
   * Bootstrap download of initial data (Obsolete)
   * Streams a sequence of ItemWebModel BsonDocuments, based on the input parameters.
   * These are back-to-back, so repeated deserialization of items will be required until end of stream.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  syncBootStrapObsoleteApiRequestOptions({
    requestBody,
  }: {
    /** Parameters **/
    requestBody: SyncBootstrapItemsRequestModel;
  }): ApiRequestOptions;

  /**
   * Download of delta data
   * Streams a sequence of Item BsonDocuments, based on the input parameters.
   * These are back-to-back, so repeated deserialization of items will be required until the end of the stream.
   * This endpoint will return all the items matching the query (and the children down the specified graphs)
   * that were edited after the delta date. It will also return all the ids of items still matching the query
   * (and the children down the specified graphs) that were not edited.
   * This means that any item ids NOT returned are assumed to have either been deleted or no longer match the query,
   * which means they can be removed from the remote db being synced via this endpoint
   * @returns any
   */
  syncDelta({
    requestBody,
  }: {
    /** Parameters **/
    requestBody: SyncDeltaItemsRequestModel;
  }): Promise<any>;

  /**
   * **used to get the request options without making a http request**
   * Download of delta data
   * Streams a sequence of Item BsonDocuments, based on the input parameters.
   * These are back-to-back, so repeated deserialization of items will be required until the end of the stream.
   * This endpoint will return all the items matching the query (and the children down the specified graphs)
   * that were edited after the delta date. It will also return all the ids of items still matching the query
   * (and the children down the specified graphs) that were not edited.
   * This means that any item ids NOT returned are assumed to have either been deleted or no longer match the query,
   * which means they can be removed from the remote db being synced via this endpoint
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  syncDeltaApiRequestOptions({
    requestBody,
  }: {
    /** Parameters **/
    requestBody: SyncDeltaItemsRequestModel;
  }): ApiRequestOptions;

  /**
   * @deprecated
   * Download of delta data
   * Streams a sequence of ItemWebModel BsonDocuments, based on the input parameters.
   * These are back-to-back, so repeated deserialization of items will be required until end of stream.
   * This endpoint will return all the items matching the query (and the children down the specified graphs)
   * that were edited after the delta date. It will also return all the ids of items still matching the query
   * (and the children down the specified graphs) that were not edited.
   * This means that all the item ids NOT returned have to assumed either having been delete or not matching the query
   * anymore, which means they can be removed from the remote db that is been synced using this endpoint
   * @returns any
   */
  syncDeltaObsolete({
    requestBody,
  }: {
    /** Parameters **/
    requestBody: SyncDeltaItemsRequestModel;
  }): Promise<any>;

  /**
   * @deprecated
   * **used to get the request options without making a http request**
   * Download of delta data
   * Streams a sequence of ItemWebModel BsonDocuments, based on the input parameters.
   * These are back-to-back, so repeated deserialization of items will be required until end of stream.
   * This endpoint will return all the items matching the query (and the children down the specified graphs)
   * that were edited after the delta date. It will also return all the ids of items still matching the query
   * (and the children down the specified graphs) that were not edited.
   * This means that all the item ids NOT returned have to assumed either having been delete or not matching the query
   * anymore, which means they can be removed from the remote db that is been synced using this endpoint
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  syncDeltaObsoleteApiRequestOptions({
    requestBody,
  }: {
    /** Parameters **/
    requestBody: SyncDeltaItemsRequestModel;
  }): ApiRequestOptions;
}
