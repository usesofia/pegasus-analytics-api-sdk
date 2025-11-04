
# FinancialStatementReportEntityDataFilters


## Properties

Name | Type
------------ | -------------
`grouping` | string
`period` | [ProjectedCashFlowEntityPeriodsInnerPeriod](ProjectedCashFlowEntityPeriodsInnerPeriod.md)
`referenceDate` | string
`completed` | Array&lt;boolean&gt;
`tags` | Array&lt;string&gt;

## Example

```typescript
import type { FinancialStatementReportEntityDataFilters } from '@usesofia/pegasus-analytics-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "grouping": null,
  "period": null,
  "referenceDate": null,
  "completed": null,
  "tags": null,
} satisfies FinancialStatementReportEntityDataFilters

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FinancialStatementReportEntityDataFilters
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


