/* eslint-disable */

import type { WorkflowSyntaxNodeBaseWebModel } from './WorkflowSyntaxNodeBaseWebModel';

export type WorkflowSyntaxNodeTemplateWebModel = WorkflowSyntaxNodeBaseWebModel & {
  /**
   * The value of the template
   */
  template: string;
};

export namespace WorkflowSyntaxNodeTemplateWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowSyntaxNodeTemplateWebModel';
}
