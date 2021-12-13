/* eslint-disable */

import type { AqsJoinResultQueryWebModel } from './AqsJoinResultQueryWebModel';

/**
 * Web model of an aqs join result
 */
export type AqsJoinResultWebModel = {
  /**
   * The item AId
   */
  itemId: string;
  /**
   * The join queries executed grouping join attributes by common paths.
   */
  joinQueries: Array<AqsJoinResultQueryWebModel>;
};

export namespace AqsJoinResultWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AqsJoinResultWebModel';
}
