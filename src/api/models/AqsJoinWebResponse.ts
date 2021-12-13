/* eslint-disable */

import type { AqsJoinResultWebModel } from './AqsJoinResultWebModel';
import type { PaginatedWebResponseModelBaseOfItemWebModel } from './PaginatedWebResponseModelBaseOfItemWebModel';

export type AqsJoinWebResponse = PaginatedWebResponseModelBaseOfItemWebModel & {
  /**
   * Each items join attribute results, every element represents an item returned as
   * part of the Results property and it matched by ItemId
   */
  joinResults: Array<AqsJoinResultWebModel>;
};

export namespace AqsJoinWebResponse {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AqsJoinWebResponse';
}
