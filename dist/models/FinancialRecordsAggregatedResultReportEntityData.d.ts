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
 * @interface FinancialRecordsAggregatedResultReportEntityData
 */
export interface FinancialRecordsAggregatedResultReportEntityData {
    /**
     * Sum of all INCOME financial records for the given filter in string format
     * @type {string}
     * @memberof FinancialRecordsAggregatedResultReportEntityData
     */
    income: string;
    /**
     * Sum of all OUTCOME financial records for the given filter in string format
     * @type {string}
     * @memberof FinancialRecordsAggregatedResultReportEntityData
     */
    outcome: string;
    /**
     * Absolute value of the difference between income and outcome
     * @type {string}
     * @memberof FinancialRecordsAggregatedResultReportEntityData
     */
    resultAbsoluteValue: string;
    /**
     * Direction of the result (INCOME if income > outcome, OUTCOME otherwise)
     * @type {string}
     * @memberof FinancialRecordsAggregatedResultReportEntityData
     */
    resultDirection: FinancialRecordsAggregatedResultReportEntityDataResultDirectionEnum;
}
/**
 * @export
 */
export declare const FinancialRecordsAggregatedResultReportEntityDataResultDirectionEnum: {
    readonly In: "IN";
    readonly Out: "OUT";
};
export type FinancialRecordsAggregatedResultReportEntityDataResultDirectionEnum = typeof FinancialRecordsAggregatedResultReportEntityDataResultDirectionEnum[keyof typeof FinancialRecordsAggregatedResultReportEntityDataResultDirectionEnum];
/**
 * Check if a given object implements the FinancialRecordsAggregatedResultReportEntityData interface.
 */
export declare function instanceOfFinancialRecordsAggregatedResultReportEntityData(value: object): value is FinancialRecordsAggregatedResultReportEntityData;
export declare function FinancialRecordsAggregatedResultReportEntityDataFromJSON(json: any): FinancialRecordsAggregatedResultReportEntityData;
export declare function FinancialRecordsAggregatedResultReportEntityDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FinancialRecordsAggregatedResultReportEntityData;
export declare function FinancialRecordsAggregatedResultReportEntityDataToJSON(json: any): FinancialRecordsAggregatedResultReportEntityData;
export declare function FinancialRecordsAggregatedResultReportEntityDataToJSONTyped(value?: FinancialRecordsAggregatedResultReportEntityData | null, ignoreDiscriminator?: boolean): any;
