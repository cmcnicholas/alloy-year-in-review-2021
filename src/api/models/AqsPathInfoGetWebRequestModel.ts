/* eslint-disable */

/**
 * Web request model for an Aqs path info get operation
 */
export type AqsPathInfoGetWebRequestModel = {
  /**
   * The Guc of the dodi the path is starting from
   */
  rootDodiCode: string;
  /**
   * The aqs path to return the crawled dodis for
   */
  aqsPath: string;
};

export namespace AqsPathInfoGetWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AqsPathInfoGetWebRequestModel';
}
