import Tooltip from "@mui/joy/Tooltip";
import { IconButton } from "@mui/joy";
import { TbHelp } from "react-icons/tb";
import CarduserInfo from "../common/CardLoginInfo";

export default function LoginInfoTooltip() {
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
        <TbHelp fontSize={24} />
      </IconButton>
    </Tooltip>
  );
}
