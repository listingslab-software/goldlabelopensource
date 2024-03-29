import * as React from 'react'
import {
  AppBar,
  IconButton,
  CardHeader,
} from "@mui/material"
import {
  Icon,
  // usePwaDispatch,
  // usePwaSelect,

} from "../../../goldlabel"

export default function Header() {
  // const dispatch = usePwaDispatch()
  // const closeFingerprint = () => {
  //   // dispatch(toggleFullScreen(false))
  // }

  // const fingerprint = usePwaSelect(selectFingerprint)
  // if (!fingerprint) return null
  
  return <AppBar 
            position="static" 
            color="inherit"
            sx={{
              background: "none",
              boxShadow: "none"
            }}>
              <CardHeader 
                title={"Header"}
                action={<>
                  <IconButton
                    color="primary">
                    <Icon icon="close" />
                  </IconButton>
                </>}
              />
          </AppBar>
}
