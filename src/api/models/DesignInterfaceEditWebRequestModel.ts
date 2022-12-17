/* eslint-disable */

import type { CollectionCode } from './CollectionCode';
import type { DodiStencilEditWebModel } from './DodiStencilEditWebModel';
import type { GeoJSONObjectType } from './GeoJSONObjectType';

/**
 * Web request model for a design interface edit operation
 */
export type DesignInterfaceEditWebRequestModel = {
  /**
   * The design interface name
   */
  name: string;
  /**
   * The optional design interface colour in the format #123456 to set on this interface
   */
  colour?: string | null;
  /**
   * The optional icon code to set for this interface
   */
  icon?: string | null;
  /**
   * The optional title template to use to generate the title for an item at runtime when deduced from implements
   */
  title?: string | null;
  /**
   * The optional subtitle template to use to generate the subtitle for an item at runtime when deduced from implements
   */
  subtitle?: string | null;
  /**
   * The optional geometry required information to set for this interface
   */
  geometryRequired?: boolean | null;
  /**
   * The optional geometry allows information to set for this interface
   */
  geometryAllows?: Array<GeoJSONObjectType> | null;
  /**
   * The optional collections for the interface that items of implementing designs will be allowed to be created in
   */
  collections?: Array<CollectionCode> | null;
  /**
   * The optional retention time in days of item logs for items of the design interface.
   * If not set, item log retention time is taken from the implemented interfaces if set, or from the customer setting
   */
  itemLogsRetentionDays?: number | null;
  /**
   * The stencil used to render the item form
   */
  stencil?: DodiStencilEditWebModel | null;
  /**
   * The signature is used to ensure that the interface being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same interface
   */
  signature: string;
};

export namespace DesignInterfaceEditWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DesignInterfaceEditWebRequestModel';
}
