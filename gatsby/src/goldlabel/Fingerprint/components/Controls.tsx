import * as React from 'react'
import {
  AppBar,
  IconButton,
  CardHeader,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectFingerprint,
} from "../../../goldlabel"
import {
  ForgetMe,
  toggleFullScreen,
} from "../../Fingerprint"

export default function Controls() {
  const dispatch = usePwaDispatch()
  const closeFingerprint = () => {
    dispatch(toggleFullScreen(false))
  }

  const fingerprint = usePwaSelect(selectFingerprint)
  if (!fingerprint) return null

  const {
    displayName,
    ip,
  } = fingerprint
  
  return <AppBar 
            position="static" 
            color="inherit"
            sx={{
              background: "none",
              boxShadow: "none"
            }}>
              <CardHeader 
                avatar={<IconButton onClick={closeFingerprint}
                          color="primary">
                          <Icon icon="left" />
                        </IconButton>}
                action={<>
                  <ForgetMe mode="icon"/>
                  <IconButton onClick={closeFingerprint}
                    color="primary">
                    <Icon icon="close" />
                  </IconButton>
                </>}
                title={<Font noWrap>
                        {displayName}
                      </Font>}
                subheader={<Font variant="small" noWrap>
                            IP {ip}
                          </Font>}
              />
          </AppBar>
}