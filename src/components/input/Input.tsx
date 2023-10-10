import { TextField, TextFieldProps } from "@mui/material"
import { FC } from "react"
import { Control, Controller } from "react-hook-form"
import { FormData } from "../../App"
import { FieldType, RulesType } from "../form/types"

type MyInputProps = {
  name: FieldType
  label: string
  control: Control<FormData>
  fullWidth?: boolean
  onChange: () => void
  rules: RulesType
} & TextFieldProps

const MyInput: FC<MyInputProps> = ({
  name,
  label,
  control,
  defaultValue,
  fullWidth = true,
  onChange,
  error,
  rules,
  helperText,
  ...props
}) => {
  return (
    <Controller
      render={({ field }) => (
        <TextField
          {...props}
          {...field}
          value={field.value ?? ""}
          label={label}
          fullWidth
          variant="outlined"
          error={error}
          helperText={helperText}
        />
      )}
      name={name}
      control={control}
      rules={rules}
    />
  )
}
export default MyInput
