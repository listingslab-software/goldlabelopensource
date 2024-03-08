import React from "react"
import {
  Box,
} from "@mui/material"
import {
  usePwaSelect,
  selectTings,
  Icon,
} from "../../../../goldlabel"

export function Iconify(props: any) {
  console.log("props",props)
  const {needle} = props
  if (!needle) return null
  let iconSlug: any = "success"
  // const tings = usePwaSelect(selectTings)
  // const {ting} = tings
  // if (!ting) return null
  // let os = ""
  // if (ting.os) os = ting.os
  // let iconOs: any = "desktop"
  // if (os.includes("Linux")) iconOs = "linux"
  // if (os.includes("iOS")) iconOs = "mac"
  // if (os.includes("Mac")) iconOs = "mac"
  // if (os.includes("Windows")) iconOs = "windows"
  // if (os.includes("Android")) iconOs = "android"

  // let browser = ""
  // if (ting.browser) browser = ting.browser
  // let iconBrowser: any = "web"
  // if (browser.includes("Chrome")) iconBrowser = "chrome"
  // if (browser.includes("Facebook")) iconBrowser = "facebook"
  // if (browser.includes("Opera")) iconBrowser = "web"
  // if (browser.includes("Safari")) iconBrowser = "safari"
  // if (browser.includes("Samsung")) iconBrowser = "web"
  // if (browser.includes("Firefox")) iconBrowser = "firefox"


  /*
  let iconDevice: any = "mobile"
  if (vendor.includes("Macintosh")) iconDevice = "desktopmac"
  if (vendor.includes("iPhone")) iconDevice = "iphone"
  if (vendor.includes("Chromium")) iconDevice = "chrome"
  */
 
  return <>
    <Icon icon={iconSlug}/>
  </>
}

/*
<pre>
  {JSON.stringify(iconOs, null, 2)}
</pre> 
*/