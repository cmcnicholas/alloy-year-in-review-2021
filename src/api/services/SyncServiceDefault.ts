/* eslint-disable */

import type { SyncBootstrapItemsRequestModel } from '../models/SyncBootstrapItemsRequestModel';
import type { SyncDeltaItemsRequestModel } from '../models/SyncDeltaItemsRequestModel';
import type { SyncService } from './SyncService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class SyncServiceDefault implements SyncService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async syncBootStrap({
    requestBody,
  }: {
    /** Parameters **/
    requestBody: SyncBootstrapItemsRequestModel;
  }): Promise<any> {
    const options = this.syncBootStrapApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public syncBootStrapApiRequestOptions({
    requestBody,
  }: {
    /** Parameters **/
    requestBody: SyncBootstrapItemsRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/sync/bootstrap`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async syncBootStrapObsolete({
    requestBody,
  }: {
    /** Parameters **/
    requestBody: SyncBootstrapItemsRequestModel;
  }): Promise<any> {
    const options = this.syncBootStrapObsoleteApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public syncBootStrapObsoleteApiRequestOptions({
    requestBody,
  }: {
    /** Parameters **/
    requestBody: SyncBootstrapItemsRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/sync/bootstrap-obsolete`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async syncDelta({
    requestBody,
  }: {
    /** Parameters **/
    requestBody: SyncDeltaItemsRequestModel;
  }): Promise<any> {
    const options = this.syncDeltaApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public syncDeltaApiRequestOptions({
    requestBody,
  }: {
    /** Parameters **/
    requestBody: SyncDeltaItemsRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/sync/delta`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async syncDeltaObsolete({
    requestBody,
  }: {
    /** Parameters **/
    requestBody: SyncDeltaItemsRequestModel;
  }): Promise<any> {
    const options = this.syncDeltaObsoleteApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public syncDeltaObsoleteApiRequestOptions({
    requestBody,
  }: {
    /** Parameters **/
    requestBody: SyncDeltaItemsRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/sync/delta-obsolete`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }
}
