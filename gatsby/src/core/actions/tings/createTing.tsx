import { 
  collection, 
  addDoc,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { 
  notify,
  notifyTing,
} from "../../../core"

export const createTing = (tings: any): any =>
  async (dispatch: any) => {
    try {
      const {
        host,
        fingerprint,
        ipGeo,
        userAgent,
      } = tings
      const created = Date.now()
      const uid = `${host}_${ipGeo.ip}_${fingerprint}`
      const device =  `${userAgent.device.vendor || ""} ${userAgent.device.model || ""}`
      const browser =  `${userAgent.browser.name || ""} ${userAgent.browser.version || ""}`
      const os =  `${userAgent.os.name || ""} ${userAgent.os.version || ""}`
      const locationStr = `${ipGeo.city || ""}, ${ipGeo.country_name || ""}`
      const ip = ipGeo.ip
      const timeZone = ipGeo.time_zone.name
      const lat = ipGeo.latitude
      const lng = ipGeo.longitude
      const slug = window.location.pathname
      const url = window.location.href
      const countryCode = ipGeo.country_code2.toLowerCase()
      const isp = ipGeo.isp
      const currency = ipGeo.currency.symbol
      const currentPage = {
        title: document.title,
        slug,
        url,
      }
      const db = getFirestore()
      await addDoc(collection(db, "pingpong"), {
        uid,
        created,
        host,
        slug,
        url,
        fingerprint,
        currentPage,
        locationStr,
        browser,
        device,
        os,
        ip,
        timeZone,
        lat,
        lng,
        countryCode,
        isp,
        currency,
      })
      dispatch(notifyTing({
        code: "NEW TING",
        severity: "success",
        message: `uid ${uid}`,
      }))
    } catch (e: any) {
      dispatch(notify(
        "TC100",
        "error", 
        `createTing ${e.toString()}`
      ))
    }
}