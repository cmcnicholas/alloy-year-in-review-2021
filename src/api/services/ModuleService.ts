/* eslint-disable */

import type { ModuleGetWebResponseModel } from '../models/ModuleGetWebResponseModel';
import type { ModuleListWebResponseModel } from '../models/ModuleListWebResponseModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface ModuleService {
  /**
   * Get an alloy module by its code
   * Fetches an alloy module by its globally unique code (Guc).
   * @returns ModuleGetWebResponseModel
   */
  moduleGet({
    code,
  }: {
    /** The Guc for the module being requested **/
    code: string;
  }): Promise<ModuleGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get an alloy module by its code
   * Fetches an alloy module by its globally unique code (Guc).
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  moduleGetApiRequestOptions({
    code,
  }: {
    /** The Guc for the module being requested **/
    code: string;
  }): ApiRequestOptions;

  /**
   * Get a list of customer installed alloy modules
   * Fetches a list of all alloy modules installed for the current customer user session
   * @returns ModuleListWebResponseModel
   */
  moduleList(): Promise<ModuleListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a list of customer installed alloy modules
   * Fetches a list of all alloy modules installed for the current customer user session
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  moduleListApiRequestOptions(): ApiRequestOptions;
}
