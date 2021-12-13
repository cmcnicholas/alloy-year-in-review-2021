/* eslint-disable */

import type { ProfileDataScope } from './ProfileDataScope';
import type { ProfileDataUnitValueWebModelBase } from './ProfileDataUnitValueWebModelBase';

/**
 * Web request model for a profile data unit edit operation
 */
export type ProfileDataUnitUpsertWebRequestModel = {
  /**
   * Scope of the profile data unit
   */
  dataScope: ProfileDataScope;
  /**
   * The value of the profile data unit
   */
  value: ProfileDataUnitValueWebModelBase;
};

export namespace ProfileDataUnitUpsertWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ProfileDataUnitUpsertWebRequestModel';
}
