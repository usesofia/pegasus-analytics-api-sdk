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
 * Período para filtrar
 * @export
 * @interface CashFlowReportEntityDataFiltersPeriod
 */
export interface CashFlowReportEntityDataFiltersPeriod {
    /**
     * Data de início do período
     * @type {string}
     * @memberof CashFlowReportEntityDataFiltersPeriod
     */
    start: string;
    /**
     * Data de fim do período
     * @type {string}
     * @memberof CashFlowReportEntityDataFiltersPeriod
     */
    end: string;
}

/**
 * Check if a given object implements the CashFlowReportEntityDataFiltersPeriod interface.
 */
export function instanceOfCashFlowReportEntityDataFiltersPeriod(value: object): value is CashFlowReportEntityDataFiltersPeriod {
    if (!('start' in value) || value['start'] === undefined) return false;
    if (!('end' in value) || value['end'] === undefined) return false;
    return true;
}

export function CashFlowReportEntityDataFiltersPeriodFromJSON(json: any): CashFlowReportEntityDataFiltersPeriod {
    return CashFlowReportEntityDataFiltersPeriodFromJSONTyped(json, false);
}

export function CashFlowReportEntityDataFiltersPeriodFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashFlowReportEntityDataFiltersPeriod {
    if (json == null) {
        return json;
    }
    return {
        
        'start': json['start'],
        'end': json['end'],
    };
}

export function CashFlowReportEntityDataFiltersPeriodToJSON(json: any): CashFlowReportEntityDataFiltersPeriod {
    return CashFlowReportEntityDataFiltersPeriodToJSONTyped(json, false);
}

export function CashFlowReportEntityDataFiltersPeriodToJSONTyped(value?: CashFlowReportEntityDataFiltersPeriod | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'start': value['start'],
        'end': value['end'],
    };
}

