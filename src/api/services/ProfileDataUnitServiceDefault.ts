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

  public async profileDataUnitList({
    discriminator,
    dataScopes,
    page,
    pageSize,
  }: {
    /** Optionally, the type of data to return as specified by the discriminators on ProfileDataUnitValueWebModelBase **/
    discriminator?: string | null;
    /** Optionally, the data scope to filter by to get only Customer (Global) level profile data or only User level ones **/
    dataScopes?: Array<ProfileDataScope | null> | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<ProfileDataUnitListWebResponseModel> {
    const options = this.profileDataUnitListApiRequestOptions({
      discriminator,
      dataScopes,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public profileDataUnitListApiRequestOptions({
    discriminator,
    dataScopes,
    page,
    pageSize,
  }: {
    /** Optionally, the type of data to return as specified by the discriminators on ProfileDataUnitValueWebModelBase **/
    discriminator?: string | null;
    /** Optionally, the data scope to filter by to get only Customer (Global) level profile data or only User level ones **/
    dataScopes?: Array<ProfileDataScope | null> | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
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

  public async profileDataUnitGet({
    key,
    dataScope,
  }: {
    /** The key of the profile data unit to fetch **/
    key: string;
    /** The scope of the profile data unit to fetch **/
    dataScope?: ProfileDataScope;
  }): Promise<ProfileDataUnitWebModel> {
    const options = this.profileDataUnitGetApiRequestOptions({
      key,
      dataScope,
    });
    const result = await __request(options);
    return result.body;
  }

  public profileDataUnitGetApiRequestOptions({
    key,
    dataScope,
  }: {
    /** The key of the profile data unit to fetch **/
    key: string;
    /** The scope of the profile data unit to fetch **/
    dataScope?: ProfileDataScope;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/profile-data/${key}`,
      query: {
        dataScope: dataScope,
      },
    };
  }

  public async profileDataUnitUpsert({
    key,
    requestBody,
  }: {
    /** The key of the data unit to upsert **/
    key: string;
    /** Model containing the set profile data unit details **/
    requestBody: ProfileDataUnitUpsertWebRequestModel;
  }): Promise<ProfileDataUnitWebModel> {
    const options = this.profileDataUnitUpsertApiRequestOptions({
      key,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public profileDataUnitUpsertApiRequestOptions({
    key,
    requestBody,
  }: {
    /** The key of the data unit to upsert **/
    key: string;
    /** Model containing the set profile data unit details **/
    requestBody: ProfileDataUnitUpsertWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/profile-data/${key}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async profileDataUnitDelete({
    key,
    dataScope,
  }: {
    /** The key of the profile data unit to delete **/
    key: string;
    /** The scope of the profile data unit to delete **/
    dataScope?: ProfileDataScope;
  }): Promise<void> {
    const options = this.profileDataUnitDeleteApiRequestOptions({
      key,
      dataScope,
    });
    const result = await __request(options);
    return result.body;
  }

  public profileDataUnitDeleteApiRequestOptions({
    key,
    dataScope,
  }: {
    /** The key of the profile data unit to delete **/
    key: string;
    /** The scope of the profile data unit to delete **/
    dataScope?: ProfileDataScope;
  }): ApiRequestOptions {
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
