
# MonthlyFinancialReportEntityDataData


## Properties

Name | Type
------------ | -------------
`items` | [Array&lt;MonthlyFinancialReportEntityDataDataItemsInner&gt;](MonthlyFinancialReportEntityDataDataItemsInner.md)
`periodResult` | number

## Example

```typescript
import type { MonthlyFinancialReportEntityDataData } from '@usesofia/pegasus-analytics-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "items": null,
  "periodResult": null,
} satisfies MonthlyFinancialReportEntityDataData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MonthlyFinancialReportEntityDataData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


