/* eslint-disable */

import type { ErrorCodeCategory } from './ErrorCodeCategory';
import type { JToken } from './JToken';

/**
 * Web model for the alloy exception
 */
export type AlloyExceptionWebModel = {
  /**
   * Category of the error
   */
  category: ErrorCodeCategory;
  /**
   * Code for the error
   */
  errorCode: string;
  /**
   * Details of the error
   */
  errorData?: JToken | null;
  /**
   * HTTP Status Code
   */
  httpStatusCode: number;
  /**
   * Error message
   */
  message: string;
};

export namespace AlloyExceptionWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AlloyExceptionWebModel';
}
