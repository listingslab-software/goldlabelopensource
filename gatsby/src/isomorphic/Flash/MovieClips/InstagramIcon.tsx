import React from "react"
import {
    useTheme,
} from "@mui/material"
const InstagramIcon = () => {
    let c = `#000`
    const theme = useTheme()
    c = theme.palette.primary.main

    return (<>
            <svg width="24px" height="24px" viewBox="0 0 24 24">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g>
                        <rect fill="none" x="0" y="0" width="24" height="24"></rect>
                        <g transform="translate(2.000000, 2.000000)" fill={c} fillRule="nonzero" id="Shape">
                            <path d="M10.0022309,4.87225259 C7.16452872,4.87225259 4.87562744,7.16166462 4.87562744,10 C4.87562744,12.8383354 7.16452872,15.1277474 10.0022309,15.1277474 C12.8399331,15.1277474 15.1288344,12.8383354 15.1288344,10 C15.1288344,7.16166462 12.8399331,4.87225259 10.0022309,4.87225259 Z M10.0022309,13.3337052 C8.16843279,13.3337052 6.66926938,11.8386701 6.66926938,10 C6.66926938,8.16132991 8.163971,6.66629477 10.0022309,6.66629477 C11.8404908,6.66629477 13.3351924,8.16132991 13.3351924,10 C13.3351924,11.8386701 11.836029,13.3337052 10.0022309,13.3337052 L10.0022309,13.3337052 Z M16.5343001,4.66250139 C16.5343001,5.32745732 15.9988846,5.85852951 15.3385388,5.85852951 C14.6737312,5.85852951 14.1427775,5.32299453 14.1427775,4.66250139 C14.1427775,4.00200826 14.678193,3.46647328 15.3385388,3.46647328 C15.9988846,3.46647328 16.5343001,4.00200826 16.5343001,4.66250139 Z M19.9297267,5.87638068 C19.8538762,4.27423854 19.4880089,2.85507085 18.3145566,1.68581948 C17.1455661,0.516568113 15.726715,0.150619212 14.1249303,0.0702889657 C12.4740658,-0.0234296552 7.52593419,-0.0234296552 5.87506972,0.0702889657 C4.27774679,0.146156421 2.85889571,0.512105322 1.68544339,1.68135669 C0.511991076,2.85060806 0.150585611,4.26977574 0.070273285,5.87191788 C-0.0234244283,7.52315073 -0.0234244283,12.4723865 0.070273285,14.1236193 C0.146123815,15.7257615 0.511991076,17.1449292 1.68544339,18.3141805 C2.85889571,19.4834319 4.273285,19.8493808 5.87506972,19.929711 C7.52593419,20.0234297 12.4740658,20.0234297 14.1249303,19.929711 C15.726715,19.8538436 17.1455661,19.4878947 18.3145566,18.3141805 C19.4835471,17.1449292 19.8494144,15.7257615 19.9297267,14.1236193 C20.0234244,12.4723865 20.0234244,7.52761352 19.9297267,5.87638068 Z M17.7969883,15.8953475 C17.4489682,16.7700547 16.775237,17.4439362 15.8962632,17.7964967 C14.5800335,18.3186433 11.4567764,18.1981479 10.0022309,18.1981479 C8.54768544,18.1981479 5.41996654,18.3141805 4.10819855,17.7964967 C3.23368656,17.448399 2.55995538,16.7745175 2.20747351,15.8953475 C1.68544339,14.5788241 1.80591188,11.45487 1.80591188,10 C1.80591188,8.54512998 1.68990519,5.41671315 2.20747351,4.10465246 C2.55549359,3.22994533 3.22922476,2.55606382 4.10819855,2.20350329 C5.42442833,1.68135669 8.54768544,1.80185206 10.0022309,1.80185206 C11.4567764,1.80185206 14.5844953,1.68581948 15.8962632,2.20350329 C16.7707752,2.55160103 17.4445064,3.22548254 17.7969883,4.10465246 C18.3190184,5.42117595 18.1985499,8.54512998 18.1985499,10 C18.1985499,11.45487 18.3190184,14.5832868 17.7969883,15.8953475 Z"></path>
                        </g>
                    </g>
                </g>
            </svg>
        </>
    )
}
export default InstagramIcon
