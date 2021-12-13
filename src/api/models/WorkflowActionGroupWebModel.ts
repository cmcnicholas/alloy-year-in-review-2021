/* eslint-disable */

import type { MetadataWebModel } from './MetadataWebModel';
import type { WorkflowActionGroupParameterWebModel } from './WorkflowActionGroupParameterWebModel';

/**
 * Web model for a workflow action group
 */
export type WorkflowActionGroupWebModel = {
  /**
   * Parameter mappings to internal actions
   */
  parameters: Array<WorkflowActionGroupParameterWebModel>;
  /**
   * The dodi code that this action group will accept
   */
  inputDodiCode?: string | null;
  /**
   * The id representing the root of the action group, the input items
   */
  rootId: string;
  /**
   * The id of the action within the group that acts as the output
   */
  outputActionId?: string | null;
  /**
   * The name of the workflow action group
   */
  name: string;
  /**
   * Optional description that provides additional information about this workflow action group
   */
  description?: string | null;
  /**
   * The code of the workflow action group
   */
  code: string;
  /**
   * The code of the corresponding design of the workflow action group
   */
  designCode: string;
  /**
   * The metadata to a workflow action group
   */
  metadata: MetadataWebModel;
};

export namespace WorkflowActionGroupWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowActionGroupWebModel';
}
