import { FC, PropsWithChildren, ReactNode } from "react"
import Container from "@mui/material/Container"
import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles"

interface LayoutProps {
  children: ReactNode
}

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
}))

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
  const classes = useStyles()

  return (
    <Container maxWidth="sm">
      <Box className={classes.container}>{children}</Box>
    </Container>
  )
}

export default Layout
