/* eslint-disable */

import type { CustomReportControlFlowWebModelBase } from './CustomReportControlFlowWebModelBase';
import type { CustomReportDocumentDefinitionWebModelBase } from './CustomReportDocumentDefinitionWebModelBase';
import type { CustomReportDocumentFlowVisualizationType } from './CustomReportDocumentFlowVisualizationType';
import type { CustomReportFlowDocumentOrientation } from './CustomReportFlowDocumentOrientation';

export type CustomReportDocumentDefinitionFlowWebModel =
  CustomReportDocumentDefinitionWebModelBase & {
    /**
     * The orientation of the custom report flow document
     */
    orientation: CustomReportFlowDocumentOrientation;
    /**
     * The list of controls that make up this custom report. The order in the array is the order in which they
     * appear in the report
     */
    controls: Array<CustomReportControlFlowWebModelBase>;
    /**
     * The array of visualizations to use for this document definition. For every visualization,
     * a new report document will be created when the custom report is run
     */
    visualizations: Array<CustomReportDocumentFlowVisualizationType>;
  };

export namespace CustomReportDocumentDefinitionFlowWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportDocumentDefinitionFlowWebModel';
}
