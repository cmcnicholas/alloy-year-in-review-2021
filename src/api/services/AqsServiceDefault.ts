/* eslint-disable */

import type { AqsJoinWebRequestBodyModel } from '../models/AqsJoinWebRequestBodyModel';
import type { AqsJoinWebResponse } from '../models/AqsJoinWebResponse';
import type { AqsPathInfoGetWebRequestModel } from '../models/AqsPathInfoGetWebRequestModel';
import type { AqsPathInfoGetWebResponse } from '../models/AqsPathInfoGetWebResponse';
import type { AqsQueryWebRequestBodyModel } from '../models/AqsQueryWebRequestBodyModel';
import type { AqsQueryWebResponse } from '../models/AqsQueryWebResponse';
import type { AqsStatisticsAggregationWebResponse } from '../models/AqsStatisticsAggregationWebResponse';
import type { AqsStatisticsWebRequestBodyModel } from '../models/AqsStatisticsWebRequestBodyModel';
import type { AqsService } from './AqsService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class AqsServiceDefault implements AqsService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async aqsQuery({
    requestBody,
    page,
    pageSize,
  }: {
    /** The request body containing a AqsJsonNode of the Aqs query **/
    requestBody: AqsQueryWebRequestBodyModel;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<AqsQueryWebResponse> {
    const options = this.aqsQueryApiRequestOptions({
      requestBody,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public aqsQueryApiRequestOptions({
    requestBody,
    page,
    pageSize,
  }: {
    /** The request body containing a AqsJsonNode of the Aqs query **/
    requestBody: AqsQueryWebRequestBodyModel;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/aqs/query`,
      query: {
        Page: page,
        PageSize: pageSize,
      },
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async aqsJoin({
    requestBody,
    page,
    pageSize,
  }: {
    /** The request body containing a AqsJsonNode of the Aqs query **/
    requestBody: AqsJoinWebRequestBodyModel;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<AqsJoinWebResponse> {
    const options = this.aqsJoinApiRequestOptions({
      requestBody,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public aqsJoinApiRequestOptions({
    requestBody,
    page,
    pageSize,
  }: {
    /** The request body containing a AqsJsonNode of the Aqs query **/
    requestBody: AqsJoinWebRequestBodyModel;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/aqs/join`,
      query: {
        Page: page,
        PageSize: pageSize,
      },
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async aqsStatisticsAggregation({
    requestBody,
    page,
    pageSize,
  }: {
    /** The request body containing a AqsJsonNode of the Aqs query **/
    requestBody: AqsStatisticsWebRequestBodyModel;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<AqsStatisticsAggregationWebResponse> {
    const options = this.aqsStatisticsAggregationApiRequestOptions({
      requestBody,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public aqsStatisticsAggregationApiRequestOptions({
    requestBody,
    page,
    pageSize,
  }: {
    /** The request body containing a AqsJsonNode of the Aqs query **/
    requestBody: AqsStatisticsWebRequestBodyModel;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/aqs/statistics`,
      query: {
        Page: page,
        PageSize: pageSize,
      },
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async aqsGetAqsPathInfo({
    requestBody,
  }: {
    /** The model containing the info for the get Aqs path info operation **/
    requestBody: AqsPathInfoGetWebRequestModel;
  }): Promise<AqsPathInfoGetWebResponse> {
    const options = this.aqsGetAqsPathInfoApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public aqsGetAqsPathInfoApiRequestOptions({
    requestBody,
  }: {
    /** The model containing the info for the get Aqs path info operation **/
    requestBody: AqsPathInfoGetWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/aqs/path-info`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }
}
