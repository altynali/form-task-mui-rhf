import { RulesType } from "../form/types"

export const nameValidation = (): RulesType => {
  return {
    required: "Name is required",
    pattern: {
      value: /^[a-z][a-z '-.,]{0,31}$|^$/i,
      message: "Invalid Name",
    },
  }
}

export const emailValidation = (): RulesType => {
  return {
    required: "Email is required",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Invalid email address",
    },
  }
}

export const phoneNumberValidation = () => {
  return {
    required: "Phone number is required",
    pattern: {
      value: /^(?:\+420|00420|0)?[1-9][0-9]{8}$/,
      message: "Invalid Czech phone number",
    },
  }
}

export const languageValidation = () => {
  return {
    required: "Language is required",
  }
}
