import * as React from "react";
import Box from "@mui/joy/Box";
import Tooltip from "@mui/joy/Tooltip";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import Chip from "@mui/joy/Chip";
import AdjustIcon from "@mui/icons-material/Adjust";
import { IconButton } from "@mui/joy";
import { TbInfoSquare } from "react-icons/tb";
import CarduserInfo from "./CardUserInfo";

export default function GitHubTooltip() {
  return (
    <Tooltip
      placement="top-end"
      variant="outlined"
      arrow
      title={<CarduserInfo />}
    >
      <IconButton
        variant="outlined"
        size="md"
        sx={{ width: 32, height: 32 }}
      >
        <TbInfoSquare />
      </IconButton>
    </Tooltip>
  );
}
