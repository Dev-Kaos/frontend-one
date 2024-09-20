import { CssVarsProvider, useColorScheme, useTheme } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Checkbox from "@mui/joy/Checkbox";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import IconButton, { IconButtonProps } from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import {
  TbAlertTriangle,
  TbBrandReact,
  TbLock,
  TbLockOpen2,
  TbMoonFilled,
  TbSunFilled,
} from "react-icons/tb";
import { FcLike } from "react-icons/fc";
import { SiSpringboot } from "react-icons/si";
import { useEffect, useState } from "react";
import { FormHelperText } from "@mui/joy";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LoginInfoTooltip from "../components/modules/LoginInfoTooltip";
import { toast, ToastContainer } from "react-toastify";
import { useAuthStore } from "../../store/authStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { loginRequest } from "../../api/authAPI";
import { ILoginRequestData } from "../../types/authTypes";

function ColorSchemeToggle(props: IconButtonProps) {
  const { onClick, ...other } = props;
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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

export default function LoginOne() {
  //toast notification theme
  const theme = useTheme();

  //  Password
  const [showPassword, setShowPassword] = useState(false);

  //  routes
  const navigate = useNavigate();

  //authStore
  const { setIsAuthenticated, setToken, token, isAuthenticated } = useAuthStore(
    (state) => state
  );

  // TODO: react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // TODO: actions and handlers

  const handlePasswordClick = () => {
    setShowPassword((prev) => !prev);
  };
  //  react-query
  const loginRequestMutation = useMutation({
    // mutationKey: ["loginRequestMutation"],

    mutationFn: loginRequest,
    onSuccess: (data) => {
      // Aquí tienes acceso a los datos de la respuesta
      setIsAuthenticated(true);
      // console.log("isAuthenticated", isAuthenticated);
      setToken(data.token);
      localStorage.setItem("authToken", data.token);
      // console.log("token", token);

      toast.success("Sesion iniciada exitosamente");
      navigate("/administrador/inicio");
    },

    onError: (error) => {
      toast.error("Error al iniciar sesión " + error);
    },

    // ... resto de la configuración
  });

  // Aquí form submit
  const onSubmit = handleSubmit((data) => {
    // Aquí puedes hacer lo que quieras con los datos del formulario
    // hacer una llamada a tu API o realizar otras acciones

    return loginRequestMutation.mutate(data as ILoginRequestData);

    // const { username, password } = data;
    // const dataToSend = { username, password };
    // console.log(JSON.stringify(dataToSend));
  });

  return (
    <>
      <CssVarsProvider disableTransitionOnChange>
        <CssBaseline />
        <GlobalStyles
          styles={{
            ":root": {
              "--Form-maxWidth": "800px",
              "--Transition-duration": "0.4s", // set to `none` to disable transition
            },
          }}
        />
        <Box
          sx={(theme) => ({
            width: { xs: "100%", md: "50vw" },
            transition: "width var(--Transition-duration)",
            transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
            position: "relative",
            zIndex: 1,
            display: "flex",
            justifyContent: "flex-end",
            backdropFilter: "blur(12px)",
            backgroundColor: "rgba(255 255 255 / 0.2)",
            [theme.getColorSchemeSelector("dark")]: {
              backgroundColor: "rgba(19 19 24 / 0.4)",
            },
          })}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100dvh",
              width: "100%",
              px: 2,
            }}
          >
            <Box
              component="header"
              sx={{ py: 3, display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ gap: 2, display: "flex", alignItems: "center" }}>
                <IconButton
                  variant="soft"
                  color="primary"
                  size="sm"
                >
                  <BadgeRoundedIcon />
                </IconButton>
                <Typography level="title-lg">
                  Colegio Instituto Inscap
                </Typography>
              </Box>
              <ColorSchemeToggle />
            </Box>
            <Box
              component="main"
              sx={{
                my: "auto",
                py: 2,
                pb: 5,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: 400,
                maxWidth: "100%",
                mx: "auto",
                borderRadius: "sm",
                "& form": {
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                },
                [`& .MuiFormLabel-asterisk`]: {
                  visibility: "hidden",
                },
              }}
            >
              <Stack sx={{ gap: 4, mb: 2 }}>
                <Stack sx={{ gap: 1 }}>
                  <Typography
                    component="h1"
                    level="h3"
                  >
                    Bienvenido
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography level="body-sm">
                      ¿Necesitas información o tienes algún problema?
                    </Typography>
                    <LoginInfoTooltip />
                  </Stack>
                </Stack>
              </Stack>
              <Divider
                sx={(theme) => ({
                  [theme.getColorSchemeSelector("light")]: {
                    color: { xs: "#FFF", md: "text.tertiary" },
                  },
                })}
              ></Divider>
              <Stack sx={{ gap: 4, mt: 2 }}>
                {/* //TODO: Forms */}
                <form onSubmit={onSubmit}>
                  <FormControl error={errors.username ? true : false}>
                    <FormLabel>Cuenta</FormLabel>
                    <Input
                      type="text"
                      {...register("username", {
                        required: {
                          value: true,
                          message: "El campo cuenta no puede estar vacio",
                        },
                        minLength: {
                          value: 6,
                          message:
                            "el campo cuenta debe tener al menos 6 caracteres",
                        },
                        maxLength: {
                          value: 15,
                          message:
                            "el campo cuenta no puede contener mas de 15 caracteres",
                        },
                      })}
                      name="username"
                    />
                    {errors.username && (
                      <FormHelperText sx={{ gap: 1 }}>
                        <TbAlertTriangle />
                        <span>{errors.username.message as string}</span>
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl error={errors.password ? true : false}>
                    <FormLabel>Contraseña</FormLabel>
                    <Input
                      type={showPassword ? "text" : "password"}
                      {...register("password", {
                        required: {
                          value: true,
                          message: "El campo contraseña no puede estar vacio",
                        },
                        minLength: {
                          value: 6,
                          message:
                            "el campo contraseña debe tener al menos 6 caracteres",
                        },
                        maxLength: {
                          value: 25,
                          message:
                            "el campo contraseña no puede contener mas de 25 caracteres",
                        },
                      })}
                      name="password"
                      endDecorator={
                        <IconButton
                          variant="plain"
                          onClick={handlePasswordClick}
                        >
                          {showPassword ? <TbLockOpen2 /> : <TbLock />}
                        </IconButton>
                      }
                    />
                    {errors.password && (
                      <FormHelperText sx={{ gap: 1 }}>
                        <TbAlertTriangle />
                        <span>{errors.password.message as string}</span>
                      </FormHelperText>
                    )}
                  </FormControl>
                  <Stack sx={{ gap: 4, mt: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox
                        size="sm"
                        label="Recuerdame"
                        name="persistent"
                      />
                      <Link
                        level="title-sm"
                        href="#replace-with-a-link"
                      >
                        ¿Olvidaste tu contraseña?
                      </Link>
                    </Box>
                    <Button
                      type="submit"
                      fullWidth
                    >
                      Entrar
                    </Button>
                  </Stack>
                </form>
              </Stack>
            </Box>
            {/* TODO:footer */}
            <Box
              component="footer"
              sx={{
                py: 2,
                gap: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                level="body-xs"
                textAlign="center"
              >
                © Made by Kaos with
              </Typography>
              <IconButton
                className=""
                color="danger"
                size="lg"
              >
                <FcLike />
              </IconButton>
              <Typography
                level="body-xs"
                textAlign="center"
              >
                +
              </Typography>
              <IconButton
                className="size-4"
                size="lg"
                sx={{ color: "#08d9ff" }}
              >
                <TbBrandReact />
              </IconButton>
              <Typography
                level="body-xs"
                textAlign="center"
              >
                +
              </Typography>
              <IconButton
                className=""
                color="success"
                size="lg"
                sx={{ color: "#8fc550" }}
              >
                <SiSpringboot />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box
          sx={(theme) => ({
            height: "100%",
            position: "fixed",
            right: 0,
            top: 0,
            bottom: 0,
            left: { xs: 0, md: "50vw" },
            transition:
              "background-image var(--Transition-duration), left var(--Transition-duration) !important",
            transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
            backgroundColor: "background.level1",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)",
            [theme.getColorSchemeSelector("dark")]: {
              backgroundImage:
                "url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)",
            },
          })}
        />
      </CssVarsProvider>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme.palette.mode === "dark" ? "dark" : "light"}
      />
    </>
  );
}
