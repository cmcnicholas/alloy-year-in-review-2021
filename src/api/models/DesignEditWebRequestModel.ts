/* eslint-disable */

import type { CollectionCode } from './CollectionCode';
import type { DodiStencilEditWebModel } from './DodiStencilEditWebModel';
import type { GeoJSONObjectType } from './GeoJSONObjectType';

/**
 * Web request model for a design edit operation
 */
export type DesignEditWebRequestModel = {
  /**
   * The design name
   */
  name: string;
  /**
   * The optional design colour in the format #123456 to set on this design. When null value is deduced from implements or
   * defaulted to "#3d8fbd".
   */
  colour?: string | null;
  /**
   * The optional icon code to set for this design. When null value is deduced from implements or defaulted to "icon-shape-circle".
   */
  icon?: string | null;
  /**
   * The optional title template to use to generate the title for an item at runtime. Mustache notation can be used in this template
   * with attribute codes within the curly braces. For example "Job-{{attributes_jobNumber}}" will evaluate to "Job-1232".
   * If null value will be deduced from the implements or when missing item id is used as default.
   */
  title?: string | null;
  /**
   * The optional subtitle template to use to generate the subtitle for an item at runtime. Mustache notation can be used in this template
   * with attribute codes within the curly braces. For example "Light {{attributes_unitNumber}}" will evaluate to "Light 007".
   * If null value will be deduced from the implements or when missing item id is used as default.
   */
  subtitle?: string | null;
  /**
   * Optionally set whether geometry is required for items of the design.
   * When not set here or by any implemented interfaces, the default is false
   */
  geometryRequired?: boolean | null;
  /**
   * The optional set of allowed geometry types for items of the design.
   * When not set here or by any implemented interfaces, the default set is
   * (Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon and GeometryCollection)
   */
  geometryAllows?: Array<GeoJSONObjectType> | null;
  /**
   * The signature is used to ensure that the design being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same design
   */
  signature: string;
  /**
   * The optional collections for the design that items will be allowed to be created in. Null means no collections set on this dodi
   * and if missing on both this dodi and all of its implements it will be defaulted to 'Live'.
   */
  collections?: Array<CollectionCode> | null;
  /**
   * The optional retention time in days of item logs for items of the design.
   * If not set, item log retention time is taken from the implemented interfaces if set, or from the customer setting
   */
  itemLogsRetentionDays?: number | null;
  /**
   * The stencil used to render the item form
   */
  stencil?: DodiStencilEditWebModel | null;
};

export namespace DesignEditWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DesignEditWebRequestModel';
}
