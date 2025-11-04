
# FinancialRecordsAggregatedResultReportEntityData


## Properties

Name | Type
------------ | -------------
`income` | string
`outcome` | string
`resultAbsoluteValue` | string
`resultDirection` | string

## Example

```typescript
import type { FinancialRecordsAggregatedResultReportEntityData } from '@usesofia/pegasus-analytics-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "income": null,
  "outcome": null,
  "resultAbsoluteValue": null,
  "resultDirection": null,
} satisfies FinancialRecordsAggregatedResultReportEntityData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FinancialRecordsAggregatedResultReportEntityData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


