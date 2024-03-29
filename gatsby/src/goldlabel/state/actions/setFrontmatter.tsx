import {
    store,
    setPwaKey,
    notify,
} from "../../../goldlabel"

export const setFrontmatter = (
    frontmatter: any,
): any => async (dispatch: any) => {
    try {
        const {core} = store.getState()
        dispatch(setPwaKey({ key: "core", value: {
            ...core,
            frontmatter,
        } })) 
    } catch (e: any) {
        dispatch(notify("setFrontmatter 500", "error", e.toString()))
    }
}
