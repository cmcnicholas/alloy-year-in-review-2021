/* eslint-disable */

import type { BulkActionSubmittedWebResponseModel } from '../models/BulkActionSubmittedWebResponseModel';
import type { DeleteItemsBulkActionWebRequestModel } from '../models/DeleteItemsBulkActionWebRequestModel';
import type { EditItemsBulkActionWebRequestModel } from '../models/EditItemsBulkActionWebRequestModel';
import type { GetBulkActionWebResponseModel } from '../models/GetBulkActionWebResponseModel';
import type { ItemBulkWebRequestModel } from '../models/ItemBulkWebRequestModel';
import type { ItemBulkWebResponseModel } from '../models/ItemBulkWebResponseModel';
import type { ListBulkActionErrorsWebResponseModel } from '../models/ListBulkActionErrorsWebResponseModel';
import type { TouchItemsBulkActionWebRequestModel } from '../models/TouchItemsBulkActionWebRequestModel';
import type { BulkService } from './BulkService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class BulkServiceDefault implements BulkService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async bulkGet(id: string): Promise<GetBulkActionWebResponseModel> {
    const options = this.bulkGetApiRequestOptions(id);
    const result = await __request(options);
    return result.body;
  }

  public bulkGetApiRequestOptions(id: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/bulk/${id}`,
    };
  }

  public async bulkListErrors(
    id: string,
    page?: number,
    pageSize?: number,
  ): Promise<ListBulkActionErrorsWebResponseModel> {
    const options = this.bulkListErrorsApiRequestOptions(id, page, pageSize);
    const result = await __request(options);
    return result.body;
  }

  public bulkListErrorsApiRequestOptions(
    id: string,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/bulk/${id}/errors`,
      query: {
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async bulkDeleteItems(
    requestBody: DeleteItemsBulkActionWebRequestModel,
  ): Promise<BulkActionSubmittedWebResponseModel> {
    const options = this.bulkDeleteItemsApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public bulkDeleteItemsApiRequestOptions(
    requestBody: DeleteItemsBulkActionWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/bulk/deleteItems`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async bulkTouchItems(
    requestBody: TouchItemsBulkActionWebRequestModel,
  ): Promise<BulkActionSubmittedWebResponseModel> {
    const options = this.bulkTouchItemsApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public bulkTouchItemsApiRequestOptions(
    requestBody: TouchItemsBulkActionWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/bulk/touch-items`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async bulkEditItems(
    requestBody: EditItemsBulkActionWebRequestModel,
  ): Promise<BulkActionSubmittedWebResponseModel> {
    const options = this.bulkEditItemsApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public bulkEditItemsApiRequestOptions(
    requestBody: EditItemsBulkActionWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/bulk/bulk-edit`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async bulkGeneric(
    requestBody: ItemBulkWebRequestModel,
  ): Promise<ItemBulkWebResponseModel> {
    const options = this.bulkGenericApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public bulkGenericApiRequestOptions(requestBody: ItemBulkWebRequestModel): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/bulk/generic`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }
}
