import axios from "axios"
import { 
  notify,
  randomDisplayName,
} from "../../../goldlabel"
import {
  updateTing,
  newFingerprintNotify,
} from "../"

export const iPGeo = (): any => async (dispatch: any) => {
  try {
    const ep = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IPGEO}`
    axios.get(ep)
      .then(function (iPGeo) {
        const {displayName, avatarSrc} = randomDisplayName()
        dispatch(notify("displayName", "success", `You are ${displayName}`))
        dispatch(updateTing("displayName", displayName))   
        dispatch(updateTing("avatarSrc", avatarSrc))        
        const geo = {
          ip: iPGeo.data.ip,
          city: iPGeo.data.city,
          state: iPGeo.data["state_prov"],
          countryName: iPGeo.data["country_name"],
          languages: iPGeo.data.languages,
          timeZone: iPGeo.data["time_zone"].name,

        }
        dispatch(updateTing("geo", geo))
        dispatch(updateTing("countryEmoji", iPGeo.data["country_emoji"]))
        dispatch(updateTing("countryCode", iPGeo.data["country_code2"].toLowerCase()))
        dispatch(updateTing("isEu", iPGeo.data["is_eu"]))
        dispatch(updateTing("currency", `${iPGeo.data.currency.name} ${iPGeo.data.currency.symbol}`))
        dispatch(updateTing("isp", iPGeo.data.isp))
        dispatch(updateTing("lat", iPGeo.data.latitude))
        dispatch(updateTing("lng", iPGeo.data.longitude))
        // setTimeout(dispatch(() => newFingerprintNotify()), 1000)
      })
      .catch(function (e) {
        dispatch(notify("iPGeo 500", "error", e.toString()))
      })
  } catch (e: any) {
    dispatch(notify("iPGeo 500", "error", e.toString()))
  }
}