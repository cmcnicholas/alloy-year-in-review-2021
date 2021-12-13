/* eslint-disable */

import type { DrivingRouteCreateWebRequestModel } from '../models/DrivingRouteCreateWebRequestModel';
import type { DrivingRouteEditWebRequestModel } from '../models/DrivingRouteEditWebRequestModel';
import type { GenerateFastestRouteWebRequestModel } from '../models/GenerateFastestRouteWebRequestModel';
import type { GenerateFastestRouteWebResponseModel } from '../models/GenerateFastestRouteWebResponseModel';
import type { GenerateShortestRouteWebRequestModel } from '../models/GenerateShortestRouteWebRequestModel';
import type { GenerateShortestRouteWebResponseModel } from '../models/GenerateShortestRouteWebResponseModel';
import type { ItemCreateWebResponseModel } from '../models/ItemCreateWebResponseModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface RouteService {
  /**
   * Creates the fastest driving route between coordinates in the supplied order.
   * Creates a driving route which honours the ordering of route stops. It will attempt to find the fastest route but retain the
   * order so may not necessarily produce the overall fastest result.
   *
   * The coordinates are expected to be in lon lat EPSG:4326 and are returned in EPSG:4326 [longitude, latitude]
   * @param requestBody The model containing the info about the route item to be created
   * @returns ItemCreateWebResponseModel
   */
  routeCreateRouteItem(
    requestBody: DrivingRouteCreateWebRequestModel,
  ): Promise<ItemCreateWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Creates the fastest driving route between coordinates in the supplied order.
   * Creates a driving route which honours the ordering of route stops. It will attempt to find the fastest route but retain the
   * order so may not necessarily produce the overall fastest result.
   *
   * The coordinates are expected to be in lon lat EPSG:4326 and are returned in EPSG:4326 [longitude, latitude]
   * @param requestBody The model containing the info about the route item to be created
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  routeCreateRouteItemApiRequestOptions(
    requestBody: DrivingRouteCreateWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Edits route item
   * Creates the fastest driving route between coordinates in the supplied order, same as route create
   * @param id The AId of the route item to edit
   * @param requestBody The model containing the info to edit the route item
   * @returns ItemCreateWebResponseModel
   */
  routeEditRouteItem(
    id: string,
    requestBody: DrivingRouteEditWebRequestModel,
  ): Promise<ItemCreateWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edits route item
   * Creates the fastest driving route between coordinates in the supplied order, same as route create
   * @param id The AId of the route item to edit
   * @param requestBody The model containing the info to edit the route item
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  routeEditRouteItemApiRequestOptions(
    id: string,
    requestBody: DrivingRouteEditWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Adds trip (shortest route between start and end) to this route object
   * Finds the shortest route between fixed start and end points disregarding the order of middle stops.
   * To get the order in which trip is visiting stops, look into WaypointIndex property. The shortest route will not
   * override input route, just be linked to it via "attributes_routesShortestRoute". Also shortest route distance and duration
   * will be stored in extra attributes.
   *
   * The coordinates are expected to be in lon lat EPSG:4326 and are returned in EPSG:4326 [longitude, latitude]
   * @param id
   * @returns ItemCreateWebResponseModel
   */
  routeCreateShortestTrip(id: string): Promise<ItemCreateWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Adds trip (shortest route between start and end) to this route object
   * Finds the shortest route between fixed start and end points disregarding the order of middle stops.
   * To get the order in which trip is visiting stops, look into WaypointIndex property. The shortest route will not
   * override input route, just be linked to it via "attributes_routesShortestRoute". Also shortest route distance and duration
   * will be stored in extra attributes.
   *
   * The coordinates are expected to be in lon lat EPSG:4326 and are returned in EPSG:4326 [longitude, latitude]
   * @param id
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  routeCreateShortestTripApiRequestOptions(id: string): ApiRequestOptions;

  /**
   * Generates the fastest driving route between coordinates in the supplied order.
   * Generates and returns a driving route which honours the ordering of route stops.
   * It will attempt to find the fastest route but retain the order so may not necessarily produce the overall fastest result.
   *
   * The coordinates are expected to be in lon lat EPSG:4326 and are returned in EPSG:4326 [longitude, latitude]
   * @param requestBody The model containing the info about the route to be generated
   * @returns GenerateFastestRouteWebResponseModel
   */
  routeGenerateFastestRoute(
    requestBody: GenerateFastestRouteWebRequestModel,
  ): Promise<GenerateFastestRouteWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Generates the fastest driving route between coordinates in the supplied order.
   * Generates and returns a driving route which honours the ordering of route stops.
   * It will attempt to find the fastest route but retain the order so may not necessarily produce the overall fastest result.
   *
   * The coordinates are expected to be in lon lat EPSG:4326 and are returned in EPSG:4326 [longitude, latitude]
   * @param requestBody The model containing the info about the route to be generated
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  routeGenerateFastestRouteApiRequestOptions(
    requestBody: GenerateFastestRouteWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Generates the trip (shortest route between start and end) for the provided route stops
   * Finds the shortest route between fixed start and end points disregarding the order of middle stops.
   * To get the order in which trip is visiting stops, look into WaypointIndex property.
   *
   * The coordinates are expected to be in lon lat EPSG:4326 and are returned in EPSG:4326 [longitude, latitude]
   * @param requestBody
   * @returns GenerateShortestRouteWebResponseModel
   */
  routeGenerateShortestRoute(
    requestBody: GenerateShortestRouteWebRequestModel,
  ): Promise<GenerateShortestRouteWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Generates the trip (shortest route between start and end) for the provided route stops
   * Finds the shortest route between fixed start and end points disregarding the order of middle stops.
   * To get the order in which trip is visiting stops, look into WaypointIndex property.
   *
   * The coordinates are expected to be in lon lat EPSG:4326 and are returned in EPSG:4326 [longitude, latitude]
   * @param requestBody
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  routeGenerateShortestRouteApiRequestOptions(
    requestBody: GenerateShortestRouteWebRequestModel,
  ): ApiRequestOptions;
}
