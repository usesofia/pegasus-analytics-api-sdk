
# MonthlyFinancialReportEntityDataFilters

Filtros aplicados

## Properties

Name | Type
------------ | -------------
`amountFrom` | number
`amountTo` | number
`finalAmountFrom` | number
`finalAmountTo` | number
`direction` | string
`dueDateFrom` | string
`dueDateTo` | string
`contact` | Array&lt;string&gt;
`subcategory` | Array&lt;string&gt;
`competenceDateFrom` | string
`competenceDateTo` | string
`cashDateFrom` | string
`cashDateTo` | string
`createdAtFrom` | any
`createdAtTo` | any
`tags` | Array&lt;string&gt;
`completed` | boolean
`reconciled` | boolean
`account` | Array&lt;string&gt;
`installmentFinancialRecord` | Array&lt;string&gt;
`recurringFinancialRecord` | Array&lt;string&gt;
`amountType` | string

## Example

```typescript
import type { MonthlyFinancialReportEntityDataFilters } from '@usesofia/pegasus-analytics-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "amountFrom": null,
  "amountTo": null,
  "finalAmountFrom": null,
  "finalAmountTo": null,
  "direction": null,
  "dueDateFrom": null,
  "dueDateTo": null,
  "contact": null,
  "subcategory": null,
  "competenceDateFrom": null,
  "competenceDateTo": null,
  "cashDateFrom": null,
  "cashDateTo": null,
  "createdAtFrom": null,
  "createdAtTo": null,
  "tags": null,
  "completed": null,
  "reconciled": null,
  "account": null,
  "installmentFinancialRecord": null,
  "recurringFinancialRecord": null,
  "amountType": null,
} satisfies MonthlyFinancialReportEntityDataFilters

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MonthlyFinancialReportEntityDataFilters
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


