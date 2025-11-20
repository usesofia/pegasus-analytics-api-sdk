
# MonthlyFinancialReportEntityDataFilters

Filtros aplicados

## Properties

Name | Type
------------ | -------------
`account` | Array&lt;string&gt;
`amountFrom` | number
`amountTo` | number
`amountType` | string
`cashDateFrom` | string
`cashDateTo` | string
`competenceDateFrom` | string
`competenceDateTo` | string
`completed` | boolean
`contact` | Array&lt;string&gt;
`createdAtFrom` | any
`createdAtTo` | any
`direction` | string
`dueDateFrom` | string
`dueDateTo` | string
`filterId` | string
`finalAmountFrom` | number
`finalAmountTo` | number
`installmentFinancialRecord` | Array&lt;string&gt;
`recurringFinancialRecord` | Array&lt;string&gt;
`reconciled` | boolean
`subcategory` | Array&lt;string&gt;
`tags` | Array&lt;string&gt;
`considerInternalTransfers` | boolean

## Example

```typescript
import type { MonthlyFinancialReportEntityDataFilters } from '@usesofia/pegasus-analytics-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "account": null,
  "amountFrom": null,
  "amountTo": null,
  "amountType": null,
  "cashDateFrom": null,
  "cashDateTo": null,
  "competenceDateFrom": null,
  "competenceDateTo": null,
  "completed": null,
  "contact": null,
  "createdAtFrom": null,
  "createdAtTo": null,
  "direction": null,
  "dueDateFrom": null,
  "dueDateTo": null,
  "filterId": null,
  "finalAmountFrom": null,
  "finalAmountTo": null,
  "installmentFinancialRecord": null,
  "recurringFinancialRecord": null,
  "reconciled": null,
  "subcategory": null,
  "tags": null,
  "considerInternalTransfers": null,
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


