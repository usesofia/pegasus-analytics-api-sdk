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
import * as runtime from '../runtime';
import type { BankAccountsDashboardReportEntity } from '../models/index';
export interface GetBankAccountsReportRequest {
    amountType?: GetBankAccountsReportAmountTypeEnum;
    recurringFinancialRecord?: string;
    installmentFinancialRecord?: string;
    account?: string;
    reconciled?: boolean;
    completed?: boolean;
    tags?: string;
    createdAtTo?: string;
    createdAtFrom?: string;
    cashDateTo?: string;
    cashDateFrom?: string;
    competenceDateTo?: string;
    competenceDateFrom?: string;
    subcategory?: string;
    contact?: string;
    dueDateTo?: string;
    dueDateFrom?: string;
    direction?: GetBankAccountsReportDirectionEnum;
}
/**
 * BankAccountsApi - interface
 *
 * @export
 * @interface BankAccountsApiInterface
 */
export interface BankAccountsApiInterface {
    /**
     *
     * @summary Gera relatório de contas bancárias
     * @param {'base' | 'final'} [amountType] Tipo de valor a ser utilizado nos cálculos.
     * @param {string} [recurringFinancialRecord] ID do lançamento financeiro recorrente.
     * @param {string} [installmentFinancialRecord] ID do lançamento financeiro parcelado.
     * @param {string} [account] ID da conta bancária.
     * @param {boolean} [reconciled] Status de conciliação dos lançamentos.
     * @param {boolean} [completed] Status de conclusão dos lançamentos.
     * @param {string} [tags] IDs das tags separadas por vírgula.
     * @param {string} [createdAtTo] Data de criação final.
     * @param {string} [createdAtFrom] Data de criação inicial.
     * @param {string} [cashDateTo] Data de caixa final.
     * @param {string} [cashDateFrom] Data de caixa inicial.
     * @param {string} [competenceDateTo] Data de competência final.
     * @param {string} [competenceDateFrom] Data de competência inicial.
     * @param {string} [subcategory] ID da subcategoria.
     * @param {string} [contact] ID do contato.
     * @param {string} [dueDateTo] Data de vencimento final.
     * @param {string} [dueDateFrom] Data de vencimento inicial.
     * @param {'IN' | 'OUT'} [direction] Direção do lançamento financeiro.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankAccountsApiInterface
     */
    getBankAccountsReportRaw(requestParameters: GetBankAccountsReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BankAccountsDashboardReportEntity>>;
    /**
     * Gera relatório de contas bancárias
     */
    getBankAccountsReport(requestParameters: GetBankAccountsReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BankAccountsDashboardReportEntity>;
}
/**
 *
 */
export declare class BankAccountsApi extends runtime.BaseAPI implements BankAccountsApiInterface {
    /**
     * Gera relatório de contas bancárias
     */
    getBankAccountsReportRaw(requestParameters: GetBankAccountsReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BankAccountsDashboardReportEntity>>;
    /**
     * Gera relatório de contas bancárias
     */
    getBankAccountsReport(requestParameters?: GetBankAccountsReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BankAccountsDashboardReportEntity>;
}
/**
 * @export
 */
export declare const GetBankAccountsReportAmountTypeEnum: {
    readonly Base: "base";
    readonly Final: "final";
};
export type GetBankAccountsReportAmountTypeEnum = typeof GetBankAccountsReportAmountTypeEnum[keyof typeof GetBankAccountsReportAmountTypeEnum];
/**
 * @export
 */
export declare const GetBankAccountsReportDirectionEnum: {
    readonly In: "IN";
    readonly Out: "OUT";
};
export type GetBankAccountsReportDirectionEnum = typeof GetBankAccountsReportDirectionEnum[keyof typeof GetBankAccountsReportDirectionEnum];
