/* eslint-disable */

import type { CustomReportDataSourceWebModelBase } from './CustomReportDataSourceWebModelBase';
import type { CustomReportDocumentDefinitionWebModelBase } from './CustomReportDocumentDefinitionWebModelBase';
import type { MetadataWebModel } from './MetadataWebModel';

/**
 * Web model for a card
 */
export type CustomReportWebModel = {
  /**
   * The unique custom report code
   */
  code: string;
  /**
   * The custom report name
   */
  name: string;
  /**
   * The data sources that are part of this custom report. Data sources work like report input parameters
   * and they are the entity that provides data to fill the report controls properties
   */
  dataSources: Array<CustomReportDataSourceWebModelBase>;
  /**
   * The document definitions that this custom report contains. When the report is run, a report document will
   * be generated for each document definition
   */
  documents: Array<CustomReportDocumentDefinitionWebModelBase>;
  /**
   * The metadata to a card
   */
  metadata: MetadataWebModel;
};

export namespace CustomReportWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportWebModel';
}
