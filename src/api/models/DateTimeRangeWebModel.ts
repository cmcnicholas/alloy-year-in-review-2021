/* eslint-disable */

/**
 * Represents a range of time in UTC
 */
export type DateTimeRangeWebModel = {
  /**
   * starting point of the dateTime range
   */
  start?: string | null;
  /**
   * ending point of the dateTime range
   */
  end?: string | null;
};

export namespace DateTimeRangeWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DateTimeRangeWebModel';
}
