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
import type { ItemService } from './ItemService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class ItemServiceDefault implements ItemService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async itemGet(id: string): Promise<ItemGetWebResponseModel> {
    const options = this.itemGetApiRequestOptions(id);
    const result = await __request(options);
    return result.body;
  }

  public itemGetApiRequestOptions(id: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/item/${id}`,
    };
  }

  public async itemEdit(
    id: string,
    requestBody: ItemEditWebRequestModel,
  ): Promise<ItemEditWebResponseModel> {
    const options = this.itemEditApiRequestOptions(id, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public itemEditApiRequestOptions(
    id: string,
    requestBody: ItemEditWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/item/${id}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async itemDelete(id: string): Promise<void> {
    const options = this.itemDeleteApiRequestOptions(id);
    const result = await __request(options);
    return result.body;
  }

  public itemDeleteApiRequestOptions(id: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/item/${id}`,
    };
  }

  public async itemTouch(id: string): Promise<ItemTouchWebResponseModel> {
    const options = this.itemTouchApiRequestOptions(id);
    const result = await __request(options);
    return result.body;
  }

  public itemTouchApiRequestOptions(id: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/item/${id}/touch`,
    };
  }

  public async itemCreate(
    requestBody: ItemCreateWebRequestModel,
  ): Promise<ItemCreateWebResponseModel> {
    const options = this.itemCreateApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public itemCreateApiRequestOptions(requestBody: ItemCreateWebRequestModel): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/item`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async itemClone(
    id: string,
    requestBody: ItemCloneWebRequestModel,
  ): Promise<ItemCloneWebResponseModel> {
    const options = this.itemCloneApiRequestOptions(id, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public itemCloneApiRequestOptions(
    id: string,
    requestBody: ItemCloneWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/item/${id}/clone`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async itemGetItemGraph(
    id: string,
    code: string,
    collectionCodes?: Array<CollectionCode> | null,
    maxRecursionDepth?: number | null,
  ): Promise<ItemGraphGetWebResponseModel> {
    const options = this.itemGetItemGraphApiRequestOptions(
      id,
      code,
      collectionCodes,
      maxRecursionDepth,
    );
    const result = await __request(options);
    return result.body;
  }

  public itemGetItemGraphApiRequestOptions(
    id: string,
    code: string,
    collectionCodes?: Array<CollectionCode> | null,
    maxRecursionDepth?: number | null,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/item/${id}/graph/${code}`,
      query: {
        CollectionCodes: collectionCodes,
        MaxRecursionDepth: maxRecursionDepth,
      },
    };
  }

  public async itemGetItemParents(
    id: string,
    attributeCode?: string | null,
    graphCode?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<ItemParentsGetWebResponseModel> {
    const options = this.itemGetItemParentsApiRequestOptions(
      id,
      attributeCode,
      graphCode,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public itemGetItemParentsApiRequestOptions(
    id: string,
    attributeCode?: string | null,
    graphCode?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/item/${id}/parents`,
      query: {
        AttributeCode: attributeCode,
        GraphCode: graphCode,
        Page: page,
        PageSize: pageSize,
      },
    };
  }
}
