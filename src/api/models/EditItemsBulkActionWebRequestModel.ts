/* eslint-disable */

import type { AqsJsonNode } from './AqsJsonNode';
import type { AqsJsonParameterValue } from './AqsJsonParameterValue';
import type { ContainerWebModelOfBoolean } from './ContainerWebModelOfBoolean';
import type { ContainerWebModelOfCollectionCode } from './ContainerWebModelOfCollectionCode';
import type { ContainerWebModelOfString } from './ContainerWebModelOfString';
import type { ItemAttributeWebModel } from './ItemAttributeWebModel';

/**
 * Request model for setting attribute values of many items
 */
export type EditItemsBulkActionWebRequestModel = {
  /**
   * The AQS query to select the items to set
   */
  aqs: AqsJsonNode;
  /**
   * The parameter values to swap out in the aqs query
   */
  parameterValues?: Array<AqsJsonParameterValue> | null;
  /**
   * The item attributes to set
   */
  attributes: Array<ItemAttributeWebModel>;
  /**
   * The collection code to set
   */
  collection?: ContainerWebModelOfCollectionCode | null;
  /**
   * The icon to set
   */
  icon?: ContainerWebModelOfString | null;
  /**
   * The colour to set
   */
  colour?: ContainerWebModelOfString | null;
  /**
   * Whether the item should be locked or not.
   * Only admin users can set an item to locked.
   * Once locked, the item cannot be edited or deleted.
   */
  locked?: ContainerWebModelOfBoolean | null;
};

export namespace EditItemsBulkActionWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditItemsBulkActionWebRequestModel';
}
