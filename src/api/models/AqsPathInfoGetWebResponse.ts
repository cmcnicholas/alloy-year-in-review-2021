/* eslint-disable */

import type { AqsPathInfoElementWebModel } from './AqsPathInfoElementWebModel';

/**
 * Response model of an aqs path info get operation
 */
export type AqsPathInfoGetWebResponse = {
  /**
   * The path info elements returned in the order in which they are crawled for the provided path
   */
  pathInfoElements: Array<AqsPathInfoElementWebModel>;
};

export namespace AqsPathInfoGetWebResponse {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AqsPathInfoGetWebResponse';
}
