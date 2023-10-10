export type RulesType = {
  required: string
  pattern?: {
    value: RegExp
    message: string
  }
}

export type Option = {
  value: string
  label: string
}

export type FieldType = "name" | "email" | "phoneNumber" | "language"
