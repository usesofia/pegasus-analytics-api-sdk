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
exports.FinancialStatementReportEntityDataDataInnerPersonnelExpensesDirectionEnum = void 0;
exports.instanceOfFinancialStatementReportEntityDataDataInnerPersonnelExpenses = instanceOfFinancialStatementReportEntityDataDataInnerPersonnelExpenses;
exports.FinancialStatementReportEntityDataDataInnerPersonnelExpensesFromJSON = FinancialStatementReportEntityDataDataInnerPersonnelExpensesFromJSON;
exports.FinancialStatementReportEntityDataDataInnerPersonnelExpensesFromJSONTyped = FinancialStatementReportEntityDataDataInnerPersonnelExpensesFromJSONTyped;
exports.FinancialStatementReportEntityDataDataInnerPersonnelExpensesToJSON = FinancialStatementReportEntityDataDataInnerPersonnelExpensesToJSON;
exports.FinancialStatementReportEntityDataDataInnerPersonnelExpensesToJSONTyped = FinancialStatementReportEntityDataDataInnerPersonnelExpensesToJSONTyped;
var FinancialStatementReportEntityDataDataInnerOperationalRevenueSubcategoriesInner_1 = require("./FinancialStatementReportEntityDataDataInnerOperationalRevenueSubcategoriesInner");
/**
 * @export
 */
exports.FinancialStatementReportEntityDataDataInnerPersonnelExpensesDirectionEnum = {
    In: 'IN',
    Out: 'OUT'
};
/**
 * Check if a given object implements the FinancialStatementReportEntityDataDataInnerPersonnelExpenses interface.
 */
function instanceOfFinancialStatementReportEntityDataDataInnerPersonnelExpenses(value) {
    if (!('amount' in value) || value['amount'] === undefined)
        return false;
    if (!('direction' in value) || value['direction'] === undefined)
        return false;
    if (!('subcategories' in value) || value['subcategories'] === undefined)
        return false;
    return true;
}
function FinancialStatementReportEntityDataDataInnerPersonnelExpensesFromJSON(json) {
    return FinancialStatementReportEntityDataDataInnerPersonnelExpensesFromJSONTyped(json, false);
}
function FinancialStatementReportEntityDataDataInnerPersonnelExpensesFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'amount': json['amount'],
        'direction': json['direction'],
        'subcategories': (json['subcategories'].map(FinancialStatementReportEntityDataDataInnerOperationalRevenueSubcategoriesInner_1.FinancialStatementReportEntityDataDataInnerOperationalRevenueSubcategoriesInnerFromJSON)),
    };
}
function FinancialStatementReportEntityDataDataInnerPersonnelExpensesToJSON(json) {
    return FinancialStatementReportEntityDataDataInnerPersonnelExpensesToJSONTyped(json, false);
}
function FinancialStatementReportEntityDataDataInnerPersonnelExpensesToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'amount': value['amount'],
        'direction': value['direction'],
        'subcategories': (value['subcategories'].map(FinancialStatementReportEntityDataDataInnerOperationalRevenueSubcategoriesInner_1.FinancialStatementReportEntityDataDataInnerOperationalRevenueSubcategoriesInnerToJSON)),
    };
}
