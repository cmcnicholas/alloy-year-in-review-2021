/* eslint-disable */

import type { JObject } from './JObject';
import type { LogAction } from './LogAction';

/**
 * Web response model for an audit log
 */
export type AuditLogWebModel = {
  /**
   * The mongo collection name that this log relates to
   */
  mongoCollection: string;
  /**
   * The document code that this log relates to
   */
  documentCode: string;
  /**
   * The action audited by this log entry
   */
  action: LogAction;
  /**
   * The date time at which the action happened
   */
  date: string;
  /**
   * The username of the user executing the action
   */
  username?: string | null;
  /**
   * Notes that go with the operation
   */
  note?: string | null;
  /**
   * The state of the item before the operation, null if it is a create operation
   */
  before?: JObject | null;
  /**
   * The state of the item after the operation, null if it is a delete operation
   */
  after?: JObject | null;
};

export namespace AuditLogWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AuditLogWebModel';
}
