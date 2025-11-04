
# CashFlowReportEntityData


## Properties

Name | Type
------------ | -------------
`filters` | [CashFlowReportEntityDataFilters](CashFlowReportEntityDataFilters.md)
`data` | [Array&lt;CashFlowReportEntityDataDataInner&gt;](CashFlowReportEntityDataDataInner.md)
`summary` | [CashFlowReportEntityDataSummary](CashFlowReportEntityDataSummary.md)

## Example

```typescript
import type { CashFlowReportEntityData } from '@usesofia/pegasus-analytics-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "filters": null,
  "data": null,
  "summary": null,
} satisfies CashFlowReportEntityData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CashFlowReportEntityData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


