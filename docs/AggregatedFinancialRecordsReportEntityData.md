
# AggregatedFinancialRecordsReportEntityData


## Properties

Name | Type
------------ | -------------
`filters` | [AggregatedFinancialRecordsReportEntityDataFilters](AggregatedFinancialRecordsReportEntityDataFilters.md)
`data` | [Array&lt;AggregatedFinancialRecordsReportEntityDataDataInner&gt;](AggregatedFinancialRecordsReportEntityDataDataInner.md)

## Example

```typescript
import type { AggregatedFinancialRecordsReportEntityData } from '@usesofia/pegasus-analytics-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "filters": null,
  "data": null,
} satisfies AggregatedFinancialRecordsReportEntityData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AggregatedFinancialRecordsReportEntityData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


