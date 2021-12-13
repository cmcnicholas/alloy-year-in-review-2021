/* eslint-disable */

import type { AqsJoinWebRequestBodyModel } from '../models/AqsJoinWebRequestBodyModel';
import type { AqsJoinWebResponse } from '../models/AqsJoinWebResponse';
import type { AqsPathInfoGetWebRequestModel } from '../models/AqsPathInfoGetWebRequestModel';
import type { AqsPathInfoGetWebResponse } from '../models/AqsPathInfoGetWebResponse';
import type { AqsQueryWebRequestBodyModel } from '../models/AqsQueryWebRequestBodyModel';
import type { AqsQueryWebResponse } from '../models/AqsQueryWebResponse';
import type { AqsStatisticsAggregationWebResponse } from '../models/AqsStatisticsAggregationWebResponse';
import type { AqsStatisticsWebRequestBodyModel } from '../models/AqsStatisticsWebRequestBodyModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface AqsService {
  /**
   * Aqs Query Endpoint
   * This endpoint enacts an Aqs Query operation. This operation is intended to find items matching the specified condition tree
   * and return their basic information alongside any of the specified attributes
   *
   * @param requestBody The request body containing a AqsJsonNode of the Aqs query
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns AqsQueryWebResponse
   */
  aqsQuery(
    requestBody: AqsQueryWebRequestBodyModel,
    page?: number,
    pageSize?: number,
  ): Promise<AqsQueryWebResponse>;

  /**
   * **used to get the request options without making a http request**
   * Aqs Query Endpoint
   * This endpoint enacts an Aqs Query operation. This operation is intended to find items matching the specified condition tree
   * and return their basic information alongside any of the specified attributes
   *
   * @param requestBody The request body containing a AqsJsonNode of the Aqs query
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  aqsQueryApiRequestOptions(
    requestBody: AqsQueryWebRequestBodyModel,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Aqs Join Endpoint
   * This endpoint enacts an Aqs Join operation. This operation is intended to find items matching the specified condition tree
   * and return their basic information alongside any of the specified attributes. It will also locate additional join attributes to be
   * returned with the matching items, these join attributes can be any attribute navigated via an AQS path in the format
   * `root.attributes_linkAttribute1^attributes_linkAttribute2.attributes_stringAttributeExample`
   *
   * @param requestBody The request body containing a AqsJsonNode of the Aqs query
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns AqsJoinWebResponse
   */
  aqsJoin(
    requestBody: AqsJoinWebRequestBodyModel,
    page?: number,
    pageSize?: number,
  ): Promise<AqsJoinWebResponse>;

  /**
   * **used to get the request options without making a http request**
   * Aqs Join Endpoint
   * This endpoint enacts an Aqs Join operation. This operation is intended to find items matching the specified condition tree
   * and return their basic information alongside any of the specified attributes. It will also locate additional join attributes to be
   * returned with the matching items, these join attributes can be any attribute navigated via an AQS path in the format
   * `root.attributes_linkAttribute1^attributes_linkAttribute2.attributes_stringAttributeExample`
   *
   * @param requestBody The request body containing a AqsJsonNode of the Aqs query
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  aqsJoinApiRequestOptions(
    requestBody: AqsJoinWebRequestBodyModel,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Aqs Statistics Aggregation Endpoint
   * This endpoint enacts an Aqs Statistics Aggregation operation. This operation is intended to be executed on an attribute
   * belonging to the items matched by the specified query (i.e. the query subject) and returns the result of an aggregation operation.
   * It is also able to group on an attribute on the query subject or on one of the parents. If the attribute to group on is specified,
   * the aggregation will be executed on each of the "buckets" resulting from the group operation.
   * @param requestBody The request body containing a AqsJsonNode of the Aqs query
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns AqsStatisticsAggregationWebResponse
   */
  aqsStatisticsAggregation(
    requestBody: AqsStatisticsWebRequestBodyModel,
    page?: number,
    pageSize?: number,
  ): Promise<AqsStatisticsAggregationWebResponse>;

  /**
   * **used to get the request options without making a http request**
   * Aqs Statistics Aggregation Endpoint
   * This endpoint enacts an Aqs Statistics Aggregation operation. This operation is intended to be executed on an attribute
   * belonging to the items matched by the specified query (i.e. the query subject) and returns the result of an aggregation operation.
   * It is also able to group on an attribute on the query subject or on one of the parents. If the attribute to group on is specified,
   * the aggregation will be executed on each of the "buckets" resulting from the group operation.
   * @param requestBody The request body containing a AqsJsonNode of the Aqs query
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  aqsStatisticsAggregationApiRequestOptions(
    requestBody: AqsStatisticsWebRequestBodyModel,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * List crawled dodis given an Aqs path
   * This endpoint evaluates an Aqs path and provides info on how it would be evaluated at runtime during a query.
   * @param requestBody The model containing the info for the get Aqs path info operation
   * @returns AqsPathInfoGetWebResponse
   */
  aqsGetAqsPathInfo(requestBody: AqsPathInfoGetWebRequestModel): Promise<AqsPathInfoGetWebResponse>;

  /**
   * **used to get the request options without making a http request**
   * List crawled dodis given an Aqs path
   * This endpoint evaluates an Aqs path and provides info on how it would be evaluated at runtime during a query.
   * @param requestBody The model containing the info for the get Aqs path info operation
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  aqsGetAqsPathInfoApiRequestOptions(requestBody: AqsPathInfoGetWebRequestModel): ApiRequestOptions;
}
