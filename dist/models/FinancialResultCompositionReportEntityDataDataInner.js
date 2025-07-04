"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialResultCompositionReportEntityDataDataInnerDirectionEnum = void 0;
exports.instanceOfFinancialResultCompositionReportEntityDataDataInner = instanceOfFinancialResultCompositionReportEntityDataDataInner;
exports.FinancialResultCompositionReportEntityDataDataInnerFromJSON = FinancialResultCompositionReportEntityDataDataInnerFromJSON;
exports.FinancialResultCompositionReportEntityDataDataInnerFromJSONTyped = FinancialResultCompositionReportEntityDataDataInnerFromJSONTyped;
exports.FinancialResultCompositionReportEntityDataDataInnerToJSON = FinancialResultCompositionReportEntityDataDataInnerToJSON;
exports.FinancialResultCompositionReportEntityDataDataInnerToJSONTyped = FinancialResultCompositionReportEntityDataDataInnerToJSONTyped;
/**
 * @export
 */
exports.FinancialResultCompositionReportEntityDataDataInnerDirectionEnum = {
    In: 'IN',
    Out: 'OUT'
};
/**
 * Check if a given object implements the FinancialResultCompositionReportEntityDataDataInner interface.
 */
function instanceOfFinancialResultCompositionReportEntityDataDataInner(value) {
    if (!('label' in value) || value['label'] === undefined)
        return false;
    if (!('amount' in value) || value['amount'] === undefined)
        return false;
    if (!('percentage' in value) || value['percentage'] === undefined)
        return false;
    if (!('direction' in value) || value['direction'] === undefined)
        return false;
    return true;
}
function FinancialResultCompositionReportEntityDataDataInnerFromJSON(json) {
    return FinancialResultCompositionReportEntityDataDataInnerFromJSONTyped(json, false);
}
function FinancialResultCompositionReportEntityDataDataInnerFromJSONTyped(json, ignoreDiscriminator) {
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
function FinancialResultCompositionReportEntityDataDataInnerToJSON(json) {
    return FinancialResultCompositionReportEntityDataDataInnerToJSONTyped(json, false);
}
function FinancialResultCompositionReportEntityDataDataInnerToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
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
