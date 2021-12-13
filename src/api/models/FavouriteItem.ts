/* eslint-disable */

import type { FavouriteFeatureName } from './FavouriteFeatureName';
import type { ProfileDataUnitValueWebModelBase } from './ProfileDataUnitValueWebModelBase';

export type FavouriteItem = ProfileDataUnitValueWebModelBase & {
  /**
   * The AId of the favourite item
   */
  alloyId?: string | null;
  /**
   * The Guc of the favourite item
   */
  code?: string | null;
  /**
   * The feature of the favourite item
   */
  featureName: FavouriteFeatureName;
  /**
   * The colour of the favourite item
   */
  colour?: string | null;
  /**
   * The icon of the favourite item
   */
  icon?: string | null;
  /**
   * The title of the favourite item
   */
  title?: string | null;
  /**
   * The subtitle of the favourite item
   */
  subtitle?: string | null;
};

export namespace FavouriteItem {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'FavouriteItem';
}
