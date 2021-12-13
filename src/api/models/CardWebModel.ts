/* eslint-disable */

import type { CardQueryWebModel } from './CardQueryWebModel';
import type { Context } from './Context';
import type { MetadataWebModel } from './MetadataWebModel';

/**
 * Web model for a card
 */
export type CardWebModel = {
  /**
   * The card name
   */
  name: string;
  /**
   * The card Context
   */
  context: Context;
  /**
   * The card icon
   */
  icon: string;
  /**
   * The unique card code
   */
  code: string;
  /**
   * A list of design or design interface codes to give access to inside the card
   */
  dodiCodes: Array<string>;
  /**
   * The queries to execute to populate the card data
   */
  queries: Array<CardQueryWebModel>;
  /**
   * The metadata to a card
   */
  metadata: MetadataWebModel;
};

export namespace CardWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CardWebModel';
}
