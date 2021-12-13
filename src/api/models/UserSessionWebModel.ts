/* eslint-disable */

/**
 * Web model for a user session
 */
export type UserSessionWebModel = {
  /**
   * The session token
   */
  token: string;
  /**
   * If true, this is a master session
   */
  isMaster: boolean;
  /**
   * The customer Guc that this session is on. Null if this is a master session
   */
  customerCode?: string | null;
};

export namespace UserSessionWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'UserSessionWebModel';
}
