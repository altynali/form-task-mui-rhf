import { FC } from "react"
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"
import Layout from "./components/layout/Layout"
import Form from "./components/form/Form"
import { defaultValues, languages } from "./data/data"

export interface FormData {
  name: string
  phoneNumber: string
  email: string
  language: string
}

const App: FC = () => {
  const methods = useForm<FormData>({
    mode: "onBlur",
    defaultValues: defaultValues,
  })

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = methods

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }

  return (
    <Layout title="">
      <FormProvider {...methods}>
        <Form
          control={control}
          errors={errors}
          languages={languages}
          handleSubmit={handleSubmit(onSubmit)}
          isValid={isValid}
        />
      </FormProvider>
    </Layout>
  )
}

export default App
