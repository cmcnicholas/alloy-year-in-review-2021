/* eslint-disable */

import type { DodiAttributeOperationsSummaryWebModel } from './DodiAttributeOperationsSummaryWebModel';

/**
 * Web model for dodi operation summary
 */
export type DodiOperationsSummaryWebModel = {
  /**
   * If true, the current user has permissions to edit this design
   */
  canWrite: boolean;
  /**
   * If true, the current user has permissions to delete this design
   */
  canDelete: boolean;
  /**
   * If true, the user has permission to read items in this design
   */
  canReadItems: boolean;
  /**
   * If true, the user has permission to edit items in this design
   */
  canEditItems: boolean;
  /**
   * If true, the user has permission to delete items in this design
   */
  canDeleteItems: boolean;
  /**
   * If true, the user has permission to create items in this design
   */
  canCreateItems: boolean;
  /**
   * The operations summaries for the attributes belonging to this design
   */
  attributeOperationsSummary: Array<DodiAttributeOperationsSummaryWebModel>;
};

export namespace DodiOperationsSummaryWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiOperationsSummaryWebModel';
}
