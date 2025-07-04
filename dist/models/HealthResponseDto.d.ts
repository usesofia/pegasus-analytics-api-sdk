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
 * @interface HealthResponseDto
 */
export interface HealthResponseDto {
    /**
     *
     * @type {string}
     * @memberof HealthResponseDto
     */
    status: string;
}
/**
 * Check if a given object implements the HealthResponseDto interface.
 */
export declare function instanceOfHealthResponseDto(value: object): value is HealthResponseDto;
export declare function HealthResponseDtoFromJSON(json: any): HealthResponseDto;
export declare function HealthResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): HealthResponseDto;
export declare function HealthResponseDtoToJSON(json: any): HealthResponseDto;
export declare function HealthResponseDtoToJSONTyped(value?: HealthResponseDto | null, ignoreDiscriminator?: boolean): any;
