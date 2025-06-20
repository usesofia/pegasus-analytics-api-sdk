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
exports.AggregatedFinancialRecordsReportEntityDataFiltersDirectionEnum = exports.AggregatedFinancialRecordsReportEntityDataFiltersSortOrderEnum = exports.AggregatedFinancialRecordsReportEntityDataFiltersGroupByEnum = void 0;
exports.instanceOfAggregatedFinancialRecordsReportEntityDataFilters = instanceOfAggregatedFinancialRecordsReportEntityDataFilters;
exports.AggregatedFinancialRecordsReportEntityDataFiltersFromJSON = AggregatedFinancialRecordsReportEntityDataFiltersFromJSON;
exports.AggregatedFinancialRecordsReportEntityDataFiltersFromJSONTyped = AggregatedFinancialRecordsReportEntityDataFiltersFromJSONTyped;
exports.AggregatedFinancialRecordsReportEntityDataFiltersToJSON = AggregatedFinancialRecordsReportEntityDataFiltersToJSON;
exports.AggregatedFinancialRecordsReportEntityDataFiltersToJSONTyped = AggregatedFinancialRecordsReportEntityDataFiltersToJSONTyped;
/**
 * @export
 */
exports.AggregatedFinancialRecordsReportEntityDataFiltersGroupByEnum = {
    Category: 'category',
    Contact: 'contact',
    Tag: 'tag'
};
/**
 * @export
 */
exports.AggregatedFinancialRecordsReportEntityDataFiltersSortOrderEnum = {
    Asc: 'asc',
    Desc: 'desc'
};
/**
 * @export
 */
exports.AggregatedFinancialRecordsReportEntityDataFiltersDirectionEnum = {
    Income: 'INCOME',
    Outcome: 'OUTCOME'
};
/**
 * Check if a given object implements the AggregatedFinancialRecordsReportEntityDataFilters interface.
 */
function instanceOfAggregatedFinancialRecordsReportEntityDataFilters(value) {
    if (!('groupBy' in value) || value['groupBy'] === undefined)
        return false;
    if (!('direction' in value) || value['direction'] === undefined)
        return false;
    if (!('dueDateFrom' in value) || value['dueDateFrom'] === undefined)
        return false;
    if (!('dueDateTo' in value) || value['dueDateTo'] === undefined)
        return false;
    return true;
}
function AggregatedFinancialRecordsReportEntityDataFiltersFromJSON(json) {
    return AggregatedFinancialRecordsReportEntityDataFiltersFromJSONTyped(json, false);
}
function AggregatedFinancialRecordsReportEntityDataFiltersFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'groupBy': json['groupBy'],
        'sortOrder': json['sortOrder'] == null ? undefined : json['sortOrder'],
        'populate': json['populate'] == null ? undefined : json['populate'],
        'direction': json['direction'],
        'dueDateFrom': json['dueDateFrom'],
        'dueDateTo': json['dueDateTo'],
        'contact': json['contact'] == null ? undefined : json['contact'],
        'subcategory': json['subcategory'] == null ? undefined : json['subcategory'],
        'competenceDateFrom': json['competenceDateFrom'] == null ? undefined : json['competenceDateFrom'],
        'competenceDateTo': json['competenceDateTo'] == null ? undefined : json['competenceDateTo'],
        'cashDateFrom': json['cashDateFrom'] == null ? undefined : json['cashDateFrom'],
        'cashDateTo': json['cashDateTo'] == null ? undefined : json['cashDateTo'],
        'createdAtFrom': json['createdAtFrom'] == null ? undefined : json['createdAtFrom'],
        'createdAtTo': json['createdAtTo'] == null ? undefined : json['createdAtTo'],
        'tags': json['tags'] == null ? undefined : json['tags'],
        'completed': json['completed'] == null ? undefined : json['completed'],
        'reconciled': json['reconciled'] == null ? undefined : json['reconciled'],
        'account': json['account'] == null ? undefined : json['account'],
    };
}
function AggregatedFinancialRecordsReportEntityDataFiltersToJSON(json) {
    return AggregatedFinancialRecordsReportEntityDataFiltersToJSONTyped(json, false);
}
function AggregatedFinancialRecordsReportEntityDataFiltersToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'groupBy': value['groupBy'],
        'sortOrder': value['sortOrder'],
        'populate': value['populate'],
        'direction': value['direction'],
        'dueDateFrom': value['dueDateFrom'],
        'dueDateTo': value['dueDateTo'],
        'contact': value['contact'],
        'subcategory': value['subcategory'],
        'competenceDateFrom': value['competenceDateFrom'],
        'competenceDateTo': value['competenceDateTo'],
        'cashDateFrom': value['cashDateFrom'],
        'cashDateTo': value['cashDateTo'],
        'createdAtFrom': value['createdAtFrom'],
        'createdAtTo': value['createdAtTo'],
        'tags': value['tags'],
        'completed': value['completed'],
        'reconciled': value['reconciled'],
        'account': value['account'],
    };
}
