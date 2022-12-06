/* eslint-disable */

import type { CollectionCode } from './CollectionCode';
import type { ItemChangeType } from './ItemChangeType';
import type { WorkflowEventTriggerOutputMode } from './WorkflowEventTriggerOutputMode';
import type { WorkflowTriggerWebModelBase } from './WorkflowTriggerWebModelBase';

export type EventTrigger = WorkflowTriggerWebModelBase & {
  /**
   * The trigger will cause the workflow to run only if items of this
   * dodi are affected.
   */
  dodiCode: string;
  /**
   * The trigger will cause the workflow to run only if items of these collections
   * are affected. Live is the default.
   */
  collections?: Array<CollectionCode> | null;
  /**
   * The trigger will cause the workflow to run only on these item events
   */
  events: Array<ItemChangeType>;
  /**
   * Only valid if Edit Events are used by this event.  In that case,
   * the trigger will cause the workflow to run only if the specified attributes
   * are affected.
   */
  attributesListeningFor?: Array<string> | null;
  /**
   * If the workflow should trigger once per event, or many events
   * with 1 to many items output by and referenceable from the trigger
   */
  outputMode?: WorkflowEventTriggerOutputMode;
};

export namespace EventTrigger {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EventTrigger';
}
