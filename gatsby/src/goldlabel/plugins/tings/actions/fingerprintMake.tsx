import FingerprintJS from "@fingerprintjs/fingerprintjs"
import { 
  notify,
} from "../../../../goldlabel"
import {
  updateTing,
} from "../"

export const fingerprintMake = (): any => async (dispatch: any) => {
  try {
    const fp = await FingerprintJS.load()
    const {visitorId} = await fp.get()
    const host = window.location.host
    const fingerprint = `${host}_${visitorId}`
    dispatch(updateTing("host", host))
    dispatch(updateTing("fingerprint", fingerprint))
  } catch (e: any) {
    dispatch(notify("fingerprintMake 500", "error", e.toString()))
  }
}
