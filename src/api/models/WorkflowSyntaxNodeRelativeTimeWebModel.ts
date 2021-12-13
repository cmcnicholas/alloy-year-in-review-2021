/* eslint-disable */

import type { OffsetOriginType } from './OffsetOriginType';
import type { WorkflowSyntaxNodeBaseWebModel } from './WorkflowSyntaxNodeBaseWebModel';
import type { WorkflowTimeConditionWebModel } from './WorkflowTimeConditionWebModel';

export type WorkflowSyntaxNodeRelativeTimeWebModel = WorkflowSyntaxNodeBaseWebModel & {
  /**
   * Condition specifying at what times the Offset applies
   */
  condition?: WorkflowTimeConditionWebModel | null;
  /**
   * Milliseconds to offset from now, given the specified condition
   */
  offsetMilliseconds: number;
  /**
   * Optional origin to offset from
   */
  offsetOrigin?: OffsetOriginType | null;
};

export namespace WorkflowSyntaxNodeRelativeTimeWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowSyntaxNodeRelativeTimeWebModel';
}
