/* eslint-disable */

/**
 * To be used for properties whose value comes from a data source. Will apply some type of summary to the value
 * produced. Note that most of the summary types only apply to numeric values
 */
export enum CustomReportSummaryTypeWebModel {
  None = 'None',
  Average = 'Average',
  Count = 'Count',
  Max = 'Max',
  Min = 'Min',
  Product = 'Product',
  StandardDeviationPopulation = 'StandardDeviationPopulation',
  StandardDeviationSample = 'StandardDeviationSample',
  Sum = 'Sum',
}
