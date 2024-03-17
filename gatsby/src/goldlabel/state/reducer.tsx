import {
  KeyValueShape,
} from "../../types"
import {glConfig} from "../../config"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"
import {coreState} from "./coreState"
import {fingerprintSlice} from "../../isomorphic/Fingerprint"
import {themeSlice} from "../../isomorphic/Theme"
import {flashSlice} from "../../isomorphic/Flash"

const initialState: any = {
  bootTime: Date.now(),
  auth: null,
  config: glConfig,
  core: coreState,
  fingerprint: fingerprintSlice,
  theme: themeSlice,
  flash: flashSlice,
}

export const pwaSlice = createSlice({
  name: "listingslab",
  initialState,
  reducers: {
    setPwaKey: (state, action: PayloadAction<KeyValueShape>) => {
      const { key, value } = action.payload
      // @ts-ignore
      state[key] = value
    },
  },
})

export const selectBootTime = (state: RootState) => state.bootTime
export const selectConfig = (state: RootState) => state.config
export const selectCore = (state: RootState) => state.core
export const selectNotifyer = (state: RootState) => state.core.notifyer
export const selectDisplay = (state: RootState) => state.core.display
export const selectFrontmatter = (state: RootState) => state.core.frontmatter
export const selectAuth = (state: RootState) => state.auth
export const selectFingerprint = (state: RootState) => state.fingerprint
export const selectTheme = (state: RootState) => state.theme
export const selectFlash = (state: RootState) => state.flash

export const { setPwaKey } = pwaSlice.actions
export default pwaSlice.reducer
