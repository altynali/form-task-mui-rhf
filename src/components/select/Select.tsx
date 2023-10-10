import {
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material"
import { FC } from "react"
import { Control, Controller } from "react-hook-form"
import { FormData } from "../../App"
import { FieldType, Option, RulesType } from "../form/types"

type MySelectProps = {
  name: FieldType
  label: string
  control: Control<FormData>
  defaultValue: string
  fullWidth?: boolean
  options: Option[]
  helperText?: string
  rules: RulesType
} & SelectProps

const MySelect: FC<MySelectProps> = ({
  name,
  label,
  control,
  defaultValue,
  fullWidth = true,
  options,
  rules,
  helperText,
  ...props
}) => {
  return (
    <>
      <InputLabel id={name}>{label}</InputLabel>
      <Controller
        render={({ field }) => (
          <Select
            {...props}
            {...field}
            defaultValue={defaultValue}
            labelId={name}
            label={label}
          >
            {options.map(({ value, label }) => (
              <MenuItem
                key={value}
                value={value}
                disabled={value === defaultValue}
              >
                {label}
              </MenuItem>
            ))}
          </Select>
        )}
        name={name}
        control={control}
        rules={rules}
      />
      {helperText ? <FormHelperText error>{helperText}</FormHelperText> : null}
    </>
  )
}

export default MySelect
