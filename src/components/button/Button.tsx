import React from "react"
import Button from "@mui/material/Button"
import { ButtonProps } from "@mui/material"

const MytButton: React.FC<ButtonProps> = ({
  disabled,
  type = "submit",
  variant = "contained",
  color = "primary",
  size = "small",
}) => {
  return (
    <Button
      type={type}
      fullWidth
      disabled={disabled}
      variant={variant}
      color={color}
      size={size}
    >
      Submit
    </Button>
  )
}

export default MytButton
