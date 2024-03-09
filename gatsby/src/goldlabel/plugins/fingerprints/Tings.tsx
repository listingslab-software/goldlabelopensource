import React from "react"
import { 
  getFirestore,
  onSnapshot,
  doc,
} from "firebase/firestore"
import {
  usePwaDispatch,
  usePwaSelect,
  selectTings,
} from "../../../goldlabel"
import {
  Fingerprint,
  ToggleBar,
  init,
  saveTing,
  updateFbTing,
} from "./"

export function Tings() {
  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
  const {
    ting,
  } = tings

  React.useEffect(() => {
    if (ting){
      const {fingerprint} = ting
      if (fingerprint){
        // console.log("subscribe", fingerprint)
        
        // const db = getFirestore()
        // const unsubscribe = onSnapshot(doc(db, "fingerprints", fingerprint), (doc) => {
        //   // console.log("docUpdate", doc.data())
        //   // dispatch(updateFbTing(doc.data()))
        // })
        // return () => unsubscribe()
      }
    }
  }, [ting, dispatch])

  React.useEffect(() => {
    const {
      initted,
      initting,
      ting,
    } = tings
    if (!initted && !initting) dispatch(init())
    if (ting){
      const {ip} = ting
      if (ip) dispatch(saveTing())
    }
  }, [tings, dispatch])
  
  return <>
          <ToggleBar />
          <Fingerprint />
        </>
}
