/* eslint-disable */

import type { Context } from './Context';
import type { DodiAttributeWebModel } from './DodiAttributeWebModel';
import type { DodiCollectionsWebModel } from './DodiCollectionsWebModel';
import type { DodiColourWebModel } from './DodiColourWebModel';
import type { DodiGeometryAllowsWebModel } from './DodiGeometryAllowsWebModel';
import type { DodiGeometryRequiredWebModel } from './DodiGeometryRequiredWebModel';
import type { DodiIconWebModel } from './DodiIconWebModel';
import type { DodiImplementsWebModel } from './DodiImplementsWebModel';
import type { DodiItemLogsRetentionDaysWebModel } from './DodiItemLogsRetentionDaysWebModel';
import type { DodiStencilWebModel } from './DodiStencilWebModel';
import type { DodiSubtitleWebModel } from './DodiSubtitleWebModel';
import type { DodiTitleWebModel } from './DodiTitleWebModel';
import type { MetadataWebModel } from './MetadataWebModel';

/**
 * The web model for a dodi
 */
export type DodiWebModel = {
  /**
   * The dodi name
   */
  name: string;
  /**
   * The dodi Guc
   */
  code: string;
  /**
   * The dodi Context
   */
  context: Context;
  /**
   * The dodi codes Guc that this dodi implements
   */
  implements: Array<DodiImplementsWebModel>;
  /**
   * List of dodi attributes on this design
   */
  attributes: Array<DodiAttributeWebModel>;
  /**
   * The metadata for a design or design interface
   */
  metadata: MetadataWebModel;
  /**
   * The optional title template to use to generate the title for an item at runtime.
   */
  dodiTitle?: DodiTitleWebModel | null;
  /**
   * The optional subtitle template to use to generate the subtitle for an item at runtime.
   */
  dodiSubtitle?: DodiSubtitleWebModel | null;
  /**
   * The optional dodi colour
   */
  dodiColour?: DodiColourWebModel | null;
  /**
   * The optional dodi icon
   */
  dodiIcon?: DodiIconWebModel | null;
  /**
   * The dodi geometry required details
   */
  geometryRequired?: DodiGeometryRequiredWebModel | null;
  /**
   * The dodi geometry allows details
   */
  geometryAllows?: DodiGeometryAllowsWebModel | null;
  /**
   * The collections associated to this design
   */
  dodiCollections?: DodiCollectionsWebModel | null;
  /**
   * The optional retention time in days of item logs for items of the design.
   * If not set, item log retention time is taken from the customer setting
   */
  itemLogsRetentionDays?: DodiItemLogsRetentionDaysWebModel | null;
  /**
   * The stencil used by this dodi and the ones implementing it. Note that a stencil in a closer "dodi" overrides
   * any stencil in a "further away" dodi
   */
  stencil?: DodiStencilWebModel | null;
  discriminator: string;
};

export namespace DodiWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiWebModel';
}
