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
import type { FinancialStatementReportEntityData } from './FinancialStatementReportEntityData';
/**
 *
 * @export
 * @interface FinancialStatementReportEntity
 */
export interface FinancialStatementReportEntity {
    /**
     *
     * @type {string}
     * @memberof FinancialStatementReportEntity
     */
    type: FinancialStatementReportEntityTypeEnum;
    /**
     *
     * @type {any}
     * @memberof FinancialStatementReportEntity
     */
    generatedAt: any | null;
    /**
     *
     * @type {FinancialStatementReportEntityData}
     * @memberof FinancialStatementReportEntity
     */
    data: FinancialStatementReportEntityData;
}
/**
 * @export
 */
export declare const FinancialStatementReportEntityTypeEnum: {
    readonly FinancialStatementReport: "FINANCIAL_STATEMENT_REPORT";
};
export type FinancialStatementReportEntityTypeEnum = typeof FinancialStatementReportEntityTypeEnum[keyof typeof FinancialStatementReportEntityTypeEnum];
/**
 * Check if a given object implements the FinancialStatementReportEntity interface.
 */
export declare function instanceOfFinancialStatementReportEntity(value: object): value is FinancialStatementReportEntity;
export declare function FinancialStatementReportEntityFromJSON(json: any): FinancialStatementReportEntity;
export declare function FinancialStatementReportEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): FinancialStatementReportEntity;
export declare function FinancialStatementReportEntityToJSON(json: any): FinancialStatementReportEntity;
export declare function FinancialStatementReportEntityToJSONTyped(value?: FinancialStatementReportEntity | null, ignoreDiscriminator?: boolean): any;
