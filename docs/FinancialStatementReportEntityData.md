
# FinancialStatementReportEntityData


## Properties

Name | Type
------------ | -------------
`filters` | [FinancialStatementReportEntityDataFilters](FinancialStatementReportEntityDataFilters.md)
`data` | [Array&lt;FinancialStatementReportEntityDataDataInner&gt;](FinancialStatementReportEntityDataDataInner.md)

## Example

```typescript
import type { FinancialStatementReportEntityData } from '@usesofia/pegasus-analytics-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "filters": null,
  "data": null,
} satisfies FinancialStatementReportEntityData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FinancialStatementReportEntityData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


