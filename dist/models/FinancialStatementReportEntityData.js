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
exports.instanceOfFinancialStatementReportEntityData = instanceOfFinancialStatementReportEntityData;
exports.FinancialStatementReportEntityDataFromJSON = FinancialStatementReportEntityDataFromJSON;
exports.FinancialStatementReportEntityDataFromJSONTyped = FinancialStatementReportEntityDataFromJSONTyped;
exports.FinancialStatementReportEntityDataToJSON = FinancialStatementReportEntityDataToJSON;
exports.FinancialStatementReportEntityDataToJSONTyped = FinancialStatementReportEntityDataToJSONTyped;
var FinancialStatementReportEntityDataFilters_1 = require("./FinancialStatementReportEntityDataFilters");
var FinancialStatementReportEntityDataDataInner_1 = require("./FinancialStatementReportEntityDataDataInner");
/**
 * Check if a given object implements the FinancialStatementReportEntityData interface.
 */
function instanceOfFinancialStatementReportEntityData(value) {
    if (!('filters' in value) || value['filters'] === undefined)
        return false;
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
function FinancialStatementReportEntityDataFromJSON(json) {
    return FinancialStatementReportEntityDataFromJSONTyped(json, false);
}
function FinancialStatementReportEntityDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'filters': (0, FinancialStatementReportEntityDataFilters_1.FinancialStatementReportEntityDataFiltersFromJSON)(json['filters']),
        'data': (json['data'].map(FinancialStatementReportEntityDataDataInner_1.FinancialStatementReportEntityDataDataInnerFromJSON)),
    };
}
function FinancialStatementReportEntityDataToJSON(json) {
    return FinancialStatementReportEntityDataToJSONTyped(json, false);
}
function FinancialStatementReportEntityDataToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'filters': (0, FinancialStatementReportEntityDataFilters_1.FinancialStatementReportEntityDataFiltersToJSON)(value['filters']),
        'data': (value['data'].map(FinancialStatementReportEntityDataDataInner_1.FinancialStatementReportEntityDataDataInnerToJSON)),
    };
}
