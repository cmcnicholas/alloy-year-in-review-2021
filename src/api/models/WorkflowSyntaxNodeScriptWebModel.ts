/* eslint-disable */

import type { DodiAttributeOptionsWebModelBase } from './DodiAttributeOptionsWebModelBase';
import type { WorkflowSyntaxNodeBaseWebModel } from './WorkflowSyntaxNodeBaseWebModel';

export type WorkflowSyntaxNodeScriptWebModel = WorkflowSyntaxNodeBaseWebModel & {
  /**
   * The value of the Script
   */
  script: string;
  /**
   * Optional detail about promised return type
   */
  returnOptions?: DodiAttributeOptionsWebModelBase | null;
};

export namespace WorkflowSyntaxNodeScriptWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowSyntaxNodeScriptWebModel';
}
