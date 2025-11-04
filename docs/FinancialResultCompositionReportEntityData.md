
# FinancialResultCompositionReportEntityData


## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;FinancialResultCompositionReportEntityDataDataInner&gt;](FinancialResultCompositionReportEntityDataDataInner.md)
`totalRevenue` | string
`filters` | [MonthlyFinancialReportEntityDataFilters](MonthlyFinancialReportEntityDataFilters.md)

## Example

```typescript
import type { FinancialResultCompositionReportEntityData } from '@usesofia/pegasus-analytics-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "totalRevenue": null,
  "filters": null,
} satisfies FinancialResultCompositionReportEntityData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FinancialResultCompositionReportEntityData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


