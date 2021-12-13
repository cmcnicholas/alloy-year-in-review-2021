/* eslint-disable */

import type { CloneCascadeMode } from './CloneCascadeMode';

/**
 * Web request model for a mode option within an item clone operation
 */
export type ItemCloneModeWebModelOfCloneCascadeMode = {
  /**
   * The graph code to specify the clone mode on
   */
  graph: string;
  /**
   * The clone mode
   */
  mode: CloneCascadeMode;
};

export namespace ItemCloneModeWebModelOfCloneCascadeMode {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemCloneModeWebModelOfCloneCascadeMode';
}
