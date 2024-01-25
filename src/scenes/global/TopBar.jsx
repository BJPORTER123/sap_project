import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColourModeContext, tokens } from "../../Theme";
import InputBase from "@mui/material";
import LightModeOutLinedIcon from "@mui/icons-material/LightModeOutLined";
import DarkModeOutLinedIcon from "@mui/icons-material/DarkModeOutLinedIcon";
import NotificationsOutLinedIcon from "@mui/icons-material/NotificationsOutLinedIcon";
import SettingsOutLinedIcon from "@mui/icons-material/SettingsOutLinedIcon";
import PersonOutLinedIcon from "@mui/icons-material/PersonOutLinedIcon";
import SearchIcon from "@mui/icons-material/Search";

const TopBar = () => {
  const theme = useTheme();
  const colours = tokens(theme(theme.palette.mode));
  const colourMode = useContext(ColourModeContext);
  return <div>TopBar</div>;
};

export default TopBar;
