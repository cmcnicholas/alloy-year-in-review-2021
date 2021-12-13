/* eslint-disable */

import type { ItemWebModel } from './ItemWebModel';

/**
 * Web model for a file item move response
 */
export type FileMoveWebResponseModel = {
  /**
   * The file item returned as a result
   */
  item: ItemWebModel;
};

export namespace FileMoveWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'FileMoveWebResponseModel';
}
