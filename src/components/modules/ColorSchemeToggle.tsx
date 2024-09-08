import * as React from "react";
import { useColorScheme } from "@mui/joy/styles";
import IconButton, { IconButtonProps } from "@mui/joy/IconButton";
import { useState } from "react";
import { TbMoonFilled, TbSunFilled } from "react-icons/tb";

function ColorSchemeToggle(props: IconButtonProps) {
  const { onClick, ...other } = props;
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <IconButton
      aria-label="toggle light/dark mode"
      size="sm"
      variant="outlined"
      disabled={!mounted}
      onClick={(event) => {
        setMode(mode === "light" ? "dark" : "light");
        onClick?.(event);
      }}
      {...other}
    >
      {mode === "light" ? <TbMoonFilled /> : <TbSunFilled />}
    </IconButton>
  );
}

export default ColorSchemeToggle;
