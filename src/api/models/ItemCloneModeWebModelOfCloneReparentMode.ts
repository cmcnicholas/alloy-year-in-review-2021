/* eslint-disable */

import type { CloneReparentMode } from './CloneReparentMode';

/**
 * Web request model for a mode option within an item clone operation
 */
export type ItemCloneModeWebModelOfCloneReparentMode = {
  /**
   * The graph code to specify the clone mode on
   */
  graph: string;
  /**
   * The clone mode
   */
  mode: CloneReparentMode;
};

export namespace ItemCloneModeWebModelOfCloneReparentMode {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemCloneModeWebModelOfCloneReparentMode';
}
