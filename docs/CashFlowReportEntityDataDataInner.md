
# CashFlowReportEntityDataDataInner


## Properties

Name | Type
------------ | -------------
`period` | [CashFlowReportEntityDataDataInnerPeriod](CashFlowReportEntityDataDataInnerPeriod.md)
`openingBalance` | number
`totalIncome` | number
`totalOutcome` | number
`closingBalance` | number
`insertedAccounts` | [Array&lt;CashFlowReportEntityDataDataInnerInsertedAccountsInner&gt;](CashFlowReportEntityDataDataInnerInsertedAccountsInner.md)

## Example

```typescript
import type { CashFlowReportEntityDataDataInner } from '@usesofia/pegasus-analytics-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "period": null,
  "openingBalance": null,
  "totalIncome": null,
  "totalOutcome": null,
  "closingBalance": null,
  "insertedAccounts": null,
} satisfies CashFlowReportEntityDataDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CashFlowReportEntityDataDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


