
# FinancialStatementReportEntityDataDataInner


## Properties

Name | Type
------------ | -------------
`period` | [FinancialStatementReportEntityDataDataInnerPeriod](FinancialStatementReportEntityDataDataInnerPeriod.md)
`operationalRevenue` | [FinancialStatementReportEntityDataDataInnerOperationalRevenue](FinancialStatementReportEntityDataDataInnerOperationalRevenue.md)
`operatingExpenses` | [FinancialStatementReportEntityDataDataInnerOperationalRevenue](FinancialStatementReportEntityDataDataInnerOperationalRevenue.md)
`salesAndMarketingExpenses` | [FinancialStatementReportEntityDataDataInnerOperationalRevenue](FinancialStatementReportEntityDataDataInnerOperationalRevenue.md)
`administrativeExpenses` | [FinancialStatementReportEntityDataDataInnerOperationalRevenue](FinancialStatementReportEntityDataDataInnerOperationalRevenue.md)
`personnelExpenses` | [FinancialStatementReportEntityDataDataInnerOperationalRevenue](FinancialStatementReportEntityDataDataInnerOperationalRevenue.md)
`financialIncome` | [FinancialStatementReportEntityDataDataInnerOperationalRevenue](FinancialStatementReportEntityDataDataInnerOperationalRevenue.md)
`otherIncome` | [FinancialStatementReportEntityDataDataInnerOperationalRevenue](FinancialStatementReportEntityDataDataInnerOperationalRevenue.md)
`financialExpenses` | [FinancialStatementReportEntityDataDataInnerOperationalRevenue](FinancialStatementReportEntityDataDataInnerOperationalRevenue.md)
`investments` | [FinancialStatementReportEntityDataDataInnerOperationalRevenue](FinancialStatementReportEntityDataDataInnerOperationalRevenue.md)
`incomeTaxExpense` | [FinancialStatementReportEntityDataDataInnerOperationalRevenue](FinancialStatementReportEntityDataDataInnerOperationalRevenue.md)
`contributionMargin` | [FinancialStatementReportEntityDataDataInnerContributionMargin](FinancialStatementReportEntityDataDataInnerContributionMargin.md)
`netIncome` | [FinancialStatementReportEntityDataDataInnerContributionMargin](FinancialStatementReportEntityDataDataInnerContributionMargin.md)
`ebitda` | [FinancialStatementReportEntityDataDataInnerContributionMargin](FinancialStatementReportEntityDataDataInnerContributionMargin.md)

## Example

```typescript
import type { FinancialStatementReportEntityDataDataInner } from '@usesofia/pegasus-analytics-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "period": null,
  "operationalRevenue": null,
  "operatingExpenses": null,
  "salesAndMarketingExpenses": null,
  "administrativeExpenses": null,
  "personnelExpenses": null,
  "financialIncome": null,
  "otherIncome": null,
  "financialExpenses": null,
  "investments": null,
  "incomeTaxExpense": null,
  "contributionMargin": null,
  "netIncome": null,
  "ebitda": null,
} satisfies FinancialStatementReportEntityDataDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FinancialStatementReportEntityDataDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


