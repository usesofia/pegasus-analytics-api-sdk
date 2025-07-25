/**
 * Sofia Pegasus analytics-api
 * Api do sistema Pegasus para geração de relatórios e dashboards.
 *
 * The version of the OpenAPI document: 1.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface AggregatedFinancialRecordsReportEntityDataDataInner
 */
export interface AggregatedFinancialRecordsReportEntityDataDataInner {
    /**
     * Rótulo do item agrupado
     * @type {string}
     * @memberof AggregatedFinancialRecordsReportEntityDataDataInner
     */
    label: string;
    /**
     * Valor total
     * @type {number}
     * @memberof AggregatedFinancialRecordsReportEntityDataDataInner
     */
    totalAmount: number;
}
/**
 * Check if a given object implements the AggregatedFinancialRecordsReportEntityDataDataInner interface.
 */
export declare function instanceOfAggregatedFinancialRecordsReportEntityDataDataInner(value: object): value is AggregatedFinancialRecordsReportEntityDataDataInner;
export declare function AggregatedFinancialRecordsReportEntityDataDataInnerFromJSON(json: any): AggregatedFinancialRecordsReportEntityDataDataInner;
export declare function AggregatedFinancialRecordsReportEntityDataDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AggregatedFinancialRecordsReportEntityDataDataInner;
export declare function AggregatedFinancialRecordsReportEntityDataDataInnerToJSON(json: any): AggregatedFinancialRecordsReportEntityDataDataInner;
export declare function AggregatedFinancialRecordsReportEntityDataDataInnerToJSONTyped(value?: AggregatedFinancialRecordsReportEntityDataDataInner | null, ignoreDiscriminator?: boolean): any;
