/* eslint-disable */

import type { ProfileDataUnitValueWebModelBase } from './ProfileDataUnitValueWebModelBase';

/**
 * An element of profile data
 */
export type ProfileDataUnitWebModel = {
  /**
   * The key of the profile datum
   */
  key: string;
  /**
   * The value of the profile datum
   */
  value: ProfileDataUnitValueWebModelBase;
};

export namespace ProfileDataUnitWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ProfileDataUnitWebModel';
}
