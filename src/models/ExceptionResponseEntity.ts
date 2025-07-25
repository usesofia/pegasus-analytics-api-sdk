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
import type { ExceptionResponseEntityErrorsInner } from './ExceptionResponseEntityErrorsInner';
import {
    ExceptionResponseEntityErrorsInnerFromJSON,
    ExceptionResponseEntityErrorsInnerFromJSONTyped,
    ExceptionResponseEntityErrorsInnerToJSON,
    ExceptionResponseEntityErrorsInnerToJSONTyped,
} from './ExceptionResponseEntityErrorsInner';

/**
 * 
 * @export
 * @interface ExceptionResponseEntity
 */
export interface ExceptionResponseEntity {
    /**
     * 
     * @type {number}
     * @memberof ExceptionResponseEntity
     */
    statusCode: number;
    /**
     * 
     * @type {string}
     * @memberof ExceptionResponseEntity
     */
    message: string;
    /**
     * 
     * @type {Array<ExceptionResponseEntityErrorsInner>}
     * @memberof ExceptionResponseEntity
     */
    errors: Array<ExceptionResponseEntityErrorsInner>;
}

/**
 * Check if a given object implements the ExceptionResponseEntity interface.
 */
export function instanceOfExceptionResponseEntity(value: object): value is ExceptionResponseEntity {
    if (!('statusCode' in value) || value['statusCode'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('errors' in value) || value['errors'] === undefined) return false;
    return true;
}

export function ExceptionResponseEntityFromJSON(json: any): ExceptionResponseEntity {
    return ExceptionResponseEntityFromJSONTyped(json, false);
}

export function ExceptionResponseEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExceptionResponseEntity {
    if (json == null) {
        return json;
    }
    return {
        
        'statusCode': json['statusCode'],
        'message': json['message'],
        'errors': ((json['errors'] as Array<any>).map(ExceptionResponseEntityErrorsInnerFromJSON)),
    };
}

export function ExceptionResponseEntityToJSON(json: any): ExceptionResponseEntity {
    return ExceptionResponseEntityToJSONTyped(json, false);
}

export function ExceptionResponseEntityToJSONTyped(value?: ExceptionResponseEntity | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'statusCode': value['statusCode'],
        'message': value['message'],
        'errors': ((value['errors'] as Array<any>).map(ExceptionResponseEntityErrorsInnerToJSON)),
    };
}

