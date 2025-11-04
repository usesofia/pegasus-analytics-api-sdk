
# CashFlowReportEntityDataFilters


## Properties

Name | Type
------------ | -------------
`grouping` | string
`period` | [CashFlowReportEntityDataFiltersPeriod](CashFlowReportEntityDataFiltersPeriod.md)
`bankAccounts` | Array&lt;string&gt;
`reconciled` | Array&lt;boolean&gt;
`tags` | Array&lt;string&gt;

## Example

```typescript
import type { CashFlowReportEntityDataFilters } from '@usesofia/pegasus-analytics-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "grouping": null,
  "period": null,
  "bankAccounts": null,
  "reconciled": null,
  "tags": null,
} satisfies CashFlowReportEntityDataFilters

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CashFlowReportEntityDataFilters
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


