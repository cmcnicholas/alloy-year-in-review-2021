/* eslint-disable */

import type { CollectionCode } from './CollectionCode';
import type { DodiStencilCreateWebModel } from './DodiStencilCreateWebModel';
import type { GeoJSONObjectType } from './GeoJSONObjectType';

/**
 * Web request model for a design create operation
 */
export type DesignCreateWebRequestModel = {
  /**
   * The design name
   */
  name: string;
  /**
   * The default design colour in the format #123456, when not set on the design or any of its implements defaults to "#3d8fbd"
   */
  colour?: string | null;
  /**
   * The default design icon code, when not set on the design or any of its implements defaults to "icon-shape-circle"
   */
  icon?: string | null;
  /**
   * The optional title template to use to generate the title for an item at runtime. Mustache notation can be used in this template
   * with attribute codes within the curly braces. For example "Job-{{attributes_jobNumber}}" will evaluate to "Job-1232"
   */
  title?: string | null;
  /**
   * The optional subtitle template to use to generate the subtitle for an item at runtime. Mustache notation can be used in this template
   * with attribute codes within the curly braces. For example "Light {{attributes_unitNumber}}" will evaluate to "Light 007"
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
   * The optional collections for the design that items will be allowed to be created in.
   * Null means no collections. If not set on design or any of its implements it will default to Live.
   */
  collections?: Array<CollectionCode> | null;
  /**
   * The optional retention time in days of item logs for items of the design.
   * If not set, item log retention time is taken from the implemented interfaces if set, or from the customer setting
   */
  itemLogsRetentionDays?: number | null;
  /**
   * The optional stencil configuration to use for layout of the item forms generated for this design.
   */
  stencil?: DodiStencilCreateWebModel | null;
};

export namespace DesignCreateWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DesignCreateWebRequestModel';
}
