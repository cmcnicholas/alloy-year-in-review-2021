/* eslint-disable */

import type { ApplicableFromResultWebModelBase } from './ApplicableFromResultWebModelBase';
import type { ItemWebModel } from './ItemWebModel';

export type ApplicableFromItemWebResponseModel = ApplicableFromResultWebModelBase & {
  /**
   * The applicable item
   */
  item?: ItemWebModel | null;
};

export namespace ApplicableFromItemWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ApplicableFromItemWebResponseModel';
}
