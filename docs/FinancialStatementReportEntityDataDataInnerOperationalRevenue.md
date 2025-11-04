
# FinancialStatementReportEntityDataDataInnerOperationalRevenue


## Properties

Name | Type
------------ | -------------
`amount` | number
`direction` | string
`subcategories` | [Array&lt;FinancialStatementReportEntityDataDataInnerOperationalRevenueSubcategoriesInner&gt;](FinancialStatementReportEntityDataDataInnerOperationalRevenueSubcategoriesInner.md)

## Example

```typescript
import type { FinancialStatementReportEntityDataDataInnerOperationalRevenue } from '@usesofia/pegasus-analytics-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "amount": null,
  "direction": null,
  "subcategories": null,
} satisfies FinancialStatementReportEntityDataDataInnerOperationalRevenue

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FinancialStatementReportEntityDataDataInnerOperationalRevenue
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


