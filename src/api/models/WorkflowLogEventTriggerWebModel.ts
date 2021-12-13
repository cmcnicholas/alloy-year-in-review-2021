/* eslint-disable */

import type { CollectionCode } from './CollectionCode';
import type { ItemChangeType } from './ItemChangeType';
import type { WorkflowLogNodeWebModelBase } from './WorkflowLogNodeWebModelBase';

export type WorkflowLogEventTriggerWebModel = WorkflowLogNodeWebModelBase & {
  /**
   * The collection of the item that caused the trigger
   */
  collection: CollectionCode;
  /**
   * The type of event that caused the trigger
   */
  eventType: ItemChangeType;
  /**
   * The time of the event that caused the trigger
   */
  eventTime: string;
  /**
   * The affected attributes if any that caused the trigger
   */
  attributesTriggeredBy?: Array<string> | null;
};

export namespace WorkflowLogEventTriggerWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowLogEventTriggerWebModel';
}
