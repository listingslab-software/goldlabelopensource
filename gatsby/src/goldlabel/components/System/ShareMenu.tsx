import * as React from "react"
import {
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';
import {
  useTheme,
  Tooltip,
  IconButton,
  Box,
  Menu,
  MenuItem,
} from "@mui/material"
import {
  Font,
  Icon,
  usePwaSelect,
  selectFrontmatter,
} from "../../../goldlabel"

export default function ShareMenu() {
  const frontmatter = usePwaSelect(selectFrontmatter)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const theme = useTheme()
  const open = Boolean(anchorEl)
  let title = "Goldlabel"
  let iconColor = theme.palette.primary.main
  let shareUrl: string = "https://goldlabel.pro"
  if (window.location) shareUrl = window.location.href
  if (frontmatter){
    title = `${frontmatter.title}. ${frontmatter.description}`
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Tooltip title={<Font color="white">
        Share
      </Font>}>
        <IconButton
          color="primary"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Icon icon="share" />
        </IconButton>
      </Tooltip>
      <Menu
        id="share-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "share-button",
        }}>

        <MenuItem onClick={handleClose}>
          <EmailShareButton 
            title={title}
            url={shareUrl}>
            <Box sx={{display: "flex"}}>
                <Box>
                  <EmailIcon
                    iconFillColor={iconColor}
                    bgStyle={{ fill: "none" }}
                    size={40}
                    round
                  />
                </Box>
                <Box sx={{m:1.25}}>
                  <Font variant={"small"}>
                    Email
                  </Font>
                </Box>
              </Box>
          </EmailShareButton>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <WhatsappShareButton 
            url={shareUrl}
            title={title}>
              <Box sx={{display: "flex"}}>
                <Box>
                  <WhatsappIcon
                    iconFillColor={iconColor}
                    bgStyle={{ fill: "none" }}
                    size={40}
                    round
                  />
                </Box>
                <Box sx={{m:1.25}}>
                  <Font variant={"small"}>
                    WhatsApp
                  </Font>
                </Box>
              </Box>
          </WhatsappShareButton>
        </MenuItem>

        
        <MenuItem onClick={handleClose}>
          <FacebookMessengerShareButton 
            url={shareUrl}
            appId="646165055810449"
          >
              <Box sx={{display: "flex"}}>
                <Box>
                  <FacebookMessengerIcon
                    iconFillColor={iconColor}
                    bgStyle={{ fill: "none" }}
                    size={40}
                    round
                  />
                </Box>
                <Box sx={{m:1.25}}>
                  <Font variant={"small"}>
                    Messenger
                  </Font>
                </Box>
              </Box>
          </FacebookMessengerShareButton>
        </MenuItem>


        <MenuItem onClick={handleClose}>
          <FacebookShareButton 
            url={shareUrl}
            quote={title}>
              <Box sx={{display: "flex"}}>
                <Box>
                  <FacebookIcon
                    iconFillColor={iconColor}
                    bgStyle={{ fill: "none" }}
                    size={40}
                    round
                  />
                </Box>
                <Box sx={{m:1.25}}>
                  <Font variant={"small"}>
                    Facebook
                  </Font>
                </Box>
              </Box>
          </FacebookShareButton>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <TwitterShareButton 
            title={title}
            url={shareUrl}>
            <Box sx={{display: "flex"}}>
                <Box>
                  <TwitterIcon
                    iconFillColor={iconColor}
                    bgStyle={{ fill: "none" }}
                    size={40}
                    round
                  />
                </Box>
                <Box sx={{m:1.25}}>
                  <Font variant={"small"}>
                    Twitter
                  </Font>
                </Box>
              </Box>
          </TwitterShareButton>
        </MenuItem>

        

      </Menu>
    </>
  )
}
