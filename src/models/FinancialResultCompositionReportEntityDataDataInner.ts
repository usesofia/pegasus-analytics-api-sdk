/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface FinancialResultCompositionReportEntityDataDataInner
 */
export interface FinancialResultCompositionReportEntityDataDataInner {
    /**
     * Nome da categoria
     * @type {string}
     * @memberof FinancialResultCompositionReportEntityDataDataInner
     */
    label: string;
    /**
     * Valor da categoria em formato string
     * @type {string}
     * @memberof FinancialResultCompositionReportEntityDataDataInner
     */
    amount: string;
    /**
     * Percentual relativo à receita operacional
     * @type {number}
     * @memberof FinancialResultCompositionReportEntityDataDataInner
     */
    percentage: number;
    /**
     * Direção do valor (entrada ou saída)
     * @type {string}
     * @memberof FinancialResultCompositionReportEntityDataDataInner
     */
    direction: FinancialResultCompositionReportEntityDataDataInnerDirectionEnum;
}


/**
 * @export
 */
export const FinancialResultCompositionReportEntityDataDataInnerDirectionEnum = {
    In: 'IN',
    Out: 'OUT'
} as const;
export type FinancialResultCompositionReportEntityDataDataInnerDirectionEnum = typeof FinancialResultCompositionReportEntityDataDataInnerDirectionEnum[keyof typeof FinancialResultCompositionReportEntityDataDataInnerDirectionEnum];


/**
 * Check if a given object implements the FinancialResultCompositionReportEntityDataDataInner interface.
 */
export function instanceOfFinancialResultCompositionReportEntityDataDataInner(value: object): value is FinancialResultCompositionReportEntityDataDataInner {
    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('percentage' in value) || value['percentage'] === undefined) return false;
    if (!('direction' in value) || value['direction'] === undefined) return false;
    return true;
}

export function FinancialResultCompositionReportEntityDataDataInnerFromJSON(json: any): FinancialResultCompositionReportEntityDataDataInner {
    return FinancialResultCompositionReportEntityDataDataInnerFromJSONTyped(json, false);
}

export function FinancialResultCompositionReportEntityDataDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): FinancialResultCompositionReportEntityDataDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'label': json['label'],
        'amount': json['amount'],
        'percentage': json['percentage'],
        'direction': json['direction'],
    };
}

export function FinancialResultCompositionReportEntityDataDataInnerToJSON(json: any): FinancialResultCompositionReportEntityDataDataInner {
    return FinancialResultCompositionReportEntityDataDataInnerToJSONTyped(json, false);
}

export function FinancialResultCompositionReportEntityDataDataInnerToJSONTyped(value?: FinancialResultCompositionReportEntityDataDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'label': value['label'],
        'amount': value['amount'],
        'percentage': value['percentage'],
        'direction': value['direction'],
    };
}

