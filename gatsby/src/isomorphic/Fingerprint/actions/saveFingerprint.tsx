import { 
  getFirestore, 
  doc, 
  getDoc,
  setDoc,
} from "firebase/firestore"
import {
  store,
  notify,
} from "../../../goldlabel"
import {
  setFingerprintKey,
  addOutput,
} from "../../Fingerprint"

export const saveFingerprint = (
  uid: string
): any =>
  async (dispatch: any) => {
    try {
      const frontmatter = store.getState().core.frontmatter
      dispatch(setFingerprintKey("saving", true))
      const r = doc(getFirestore(), "fingerprints2", uid)
      const s = await getDoc(r)
      if (s.exists()) {
        const existing = s.data()
        const updatedFingerprint = {
          ...existing,
          updated: Date.now(),
          frontmatter,
        }
        await setDoc(doc(getFirestore(), "fingerprints2", uid), updatedFingerprint)
      } else {
        const {firstFingerprint} = store.getState().fingerprint
        await setDoc(doc(getFirestore(), "fingerprints2", uid), firstFingerprint)
      }
      
      dispatch(setFingerprintKey("saved", true))
      dispatch(addOutput(`subscribe to ${uid}`)) 
      return true
    } catch (e: any) {
      dispatch(notify("saveFingerprint 500", "error", e.toString()))
      return false
    }
}