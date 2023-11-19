import React from "react"
import {
    Avatar,
    Box,
    IconButton,
} from "@mui/material"
import {
    Font,
    usePwaDispatch,
    navigate,
} from "../../../core"

export default function AuthHeader({title}) {
    const dispatch = usePwaDispatch()

    return <>
        <Box sx={{ display: "flex", my:2}}>
                <Box sx={{mr:2, mt:1}}>
                
                    <Avatar src="/svg/iOS.svg"/>
                    
                </Box>
                <Box sx={{mt:2}}>
                    <Font variant="title">
                        {title}
                    </Font>
                </Box>
                <Box sx={{flexGrow:1}} />
        </Box>
    </>
}
