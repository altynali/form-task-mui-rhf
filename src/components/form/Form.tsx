import { FC, FormEvent } from "react"
import { Control, FieldErrors } from "react-hook-form"
import { Button, FormControl } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { FormData } from "../../App"
import MySelect from "../select/Select"
import MyInput from "../input/Input"
import {
  emailValidation,
  languageValidation,
  nameValidation,
  phoneNumberValidation,
} from "../validation/validation"
import { Option } from "./types"

type FormProps = {
  control: Control<FormData, any>
  handleSubmit: (e: FormEvent) => void
  errors: FieldErrors<FormData>
  languages: Option[]
  isValid: boolean
}

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    maxWidth: "400px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    background: "#fff",
  },
  input: {
    marginBottom: "20px",
  },
  submitButton: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px",
    "& > button": {
      background: "rgb(203,95,93)",
      "&:hover": {
        background: "rgba(203,95,93,0.9)",
      },
    },
  },
}))

const Form: FC<FormProps> = ({
  control,
  handleSubmit,
  errors,
  languages,
  isValid,
}) => {
  const classes = useStyles()

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div className={classes.input}>
        <FormControl fullWidth>
          <MyInput
            name="name"
            label="Jmeno"
            control={control}
            onChange={() => {}}
            rules={nameValidation()}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </FormControl>
      </div>

      <div className={classes.input}>
        <FormControl fullWidth>
          <MyInput
            name="phoneNumber"
            label="Telefon"
            control={control}
            onChange={() => {}}
            rules={phoneNumberValidation()}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
          />
        </FormControl>
      </div>

      <div className={classes.input}>
        <FormControl fullWidth>
          <MyInput
            name="email"
            label="E-mail"
            control={control}
            onChange={() => {}}
            rules={emailValidation()}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </FormControl>
      </div>

      <div className={classes.input}>
        <FormControl fullWidth>
          <MySelect
            name="language"
            label="Hlavni jazyk"
            control={control}
            defaultValue={languages[0].value}
            options={languages}
            rules={languageValidation()}
            onChange={(val: any) => {
              console.log(val)
            }}
            error={!!errors.language}
            helperText={errors.language?.message}
          />
        </FormControl>
      </div>

      <div className={classes.submitButton}>
        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={!isValid}
        >
          Submit
        </Button>
      </div>
    </form>
  )
}

export default Form
