/* eslint-disable */

import type { DrivingRouteCreateWebRequestModel } from '../models/DrivingRouteCreateWebRequestModel';
import type { DrivingRouteEditWebRequestModel } from '../models/DrivingRouteEditWebRequestModel';
import type { GenerateFastestRouteWebRequestModel } from '../models/GenerateFastestRouteWebRequestModel';
import type { GenerateFastestRouteWebResponseModel } from '../models/GenerateFastestRouteWebResponseModel';
import type { GenerateShortestRouteWebRequestModel } from '../models/GenerateShortestRouteWebRequestModel';
import type { GenerateShortestRouteWebResponseModel } from '../models/GenerateShortestRouteWebResponseModel';
import type { ItemCreateWebResponseModel } from '../models/ItemCreateWebResponseModel';
import type { RouteService } from './RouteService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class RouteServiceDefault implements RouteService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async routeCreateRouteItem({
    requestBody,
  }: {
    /** The model containing the info about the route item to be created **/
    requestBody: DrivingRouteCreateWebRequestModel;
  }): Promise<ItemCreateWebResponseModel> {
    const options = this.routeCreateRouteItemApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public routeCreateRouteItemApiRequestOptions({
    requestBody,
  }: {
    /** The model containing the info about the route item to be created **/
    requestBody: DrivingRouteCreateWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/route`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async routeEditRouteItem({
    id,
    requestBody,
  }: {
    /** The AId of the route item to edit **/
    id: string;
    /** The model containing the info to edit the route item **/
    requestBody: DrivingRouteEditWebRequestModel;
  }): Promise<ItemCreateWebResponseModel> {
    const options = this.routeEditRouteItemApiRequestOptions({
      id,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public routeEditRouteItemApiRequestOptions({
    id,
    requestBody,
  }: {
    /** The AId of the route item to edit **/
    id: string;
    /** The model containing the info to edit the route item **/
    requestBody: DrivingRouteEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/route/${id}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async routeCreateShortestTrip({
    id,
  }: {
    id: string;
  }): Promise<ItemCreateWebResponseModel> {
    const options = this.routeCreateShortestTripApiRequestOptions({
      id,
    });
    const result = await __request(options);
    return result.body;
  }

  public routeCreateShortestTripApiRequestOptions({ id }: { id: string }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/route/${id}/shortest`,
    };
  }

  public async routeGenerateFastestRoute({
    requestBody,
  }: {
    /** The model containing the info about the route to be generated **/
    requestBody: GenerateFastestRouteWebRequestModel;
  }): Promise<GenerateFastestRouteWebResponseModel> {
    const options = this.routeGenerateFastestRouteApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public routeGenerateFastestRouteApiRequestOptions({
    requestBody,
  }: {
    /** The model containing the info about the route to be generated **/
    requestBody: GenerateFastestRouteWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/route/fastest`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async routeGenerateShortestRoute({
    requestBody,
  }: {
    requestBody: GenerateShortestRouteWebRequestModel;
  }): Promise<GenerateShortestRouteWebResponseModel> {
    const options = this.routeGenerateShortestRouteApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public routeGenerateShortestRouteApiRequestOptions({
    requestBody,
  }: {
    requestBody: GenerateShortestRouteWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/route/shortest`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }
}
