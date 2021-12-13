/* eslint-disable */

import type { ProfileDataScope } from '../models/ProfileDataScope';
import type { ProfileDataUnitListWebResponseModel } from '../models/ProfileDataUnitListWebResponseModel';
import type { ProfileDataUnitUpsertWebRequestModel } from '../models/ProfileDataUnitUpsertWebRequestModel';
import type { ProfileDataUnitWebModel } from '../models/ProfileDataUnitWebModel';
import type { ProfileDataUnitService } from './ProfileDataUnitService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class ProfileDataUnitServiceDefault implements ProfileDataUnitService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async profileDataUnitList(
    discriminator?: string | null,
    dataScopes?: Array<ProfileDataScope | null> | null,
    page?: number,
    pageSize?: number,
  ): Promise<ProfileDataUnitListWebResponseModel> {
    const options = this.profileDataUnitListApiRequestOptions(
      discriminator,
      dataScopes,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public profileDataUnitListApiRequestOptions(
    discriminator?: string | null,
    dataScopes?: Array<ProfileDataScope | null> | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/profile-data`,
      query: {
        Discriminator: discriminator,
        DataScopes: dataScopes,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async profileDataUnitGet(
    key: string,
    dataScope?: ProfileDataScope,
  ): Promise<ProfileDataUnitWebModel> {
    const options = this.profileDataUnitGetApiRequestOptions(key, dataScope);
    const result = await __request(options);
    return result.body;
  }

  public profileDataUnitGetApiRequestOptions(
    key: string,
    dataScope?: ProfileDataScope,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/profile-data/${key}`,
      query: {
        dataScope: dataScope,
      },
    };
  }

  public async profileDataUnitUpsert(
    key: string,
    requestBody: ProfileDataUnitUpsertWebRequestModel,
  ): Promise<ProfileDataUnitWebModel> {
    const options = this.profileDataUnitUpsertApiRequestOptions(key, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public profileDataUnitUpsertApiRequestOptions(
    key: string,
    requestBody: ProfileDataUnitUpsertWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/profile-data/${key}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async profileDataUnitDelete(key: string, dataScope?: ProfileDataScope): Promise<void> {
    const options = this.profileDataUnitDeleteApiRequestOptions(key, dataScope);
    const result = await __request(options);
    return result.body;
  }

  public profileDataUnitDeleteApiRequestOptions(
    key: string,
    dataScope?: ProfileDataScope,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/profile-data/${key}`,
      query: {
        dataScope: dataScope,
      },
    };
  }
}
