import Tooltip from "@mui/joy/Tooltip";
import { IconButton } from "@mui/joy";
import { TbInfoSquare } from "react-icons/tb";

import NewsTooltipCard from "./NewsTooltipCard";

export default function NewsTooltip() {
  return (
    <Tooltip
      placement="left-end"
      variant="outlined"
      arrow
      title={<NewsTooltipCard />}
    >
      <IconButton
        variant="outlined"
        size="md"
        sx={{ width: 32, height: 32 }}
      >
        <TbInfoSquare fontSize={24} />
      </IconButton>
    </Tooltip>
  );
}
