import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";

import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardOverflow from "@mui/joy/CardOverflow";
import { useEffect, useState } from "react";
import { LinearProgress, Select, useTheme } from "@mui/joy";
import Option from "@mui/joy/Option";

import { TbAlertTriangle, TbKey, TbUserPlus } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { IRoleEdit } from "../../../../shared/types/roleTypes";
import { getRoles } from "../../../api/RolesAPI";
import { IUserCreate } from "../../../../shared/types/userTypes";
import { createUsers } from "../../../api/UsersAPI";
import { useRusersStore } from "../../../store/rusersStore";

// import CourseCardOne from "./CourseCardOne";

function PUserCreate() {
  // TODO: Password
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordClick = () => {
    setShowPassword((prev) => !prev);
  };

  // TODO: password meter

  const [passwordMeter, setPasswordMeter] = useState("");

  // TODO: password meter

  const [passwordMeterConfirm, setPasswordMeterConfirm] = useState("");

  const minLength = 8;
  const { isFetching, isLoading, error, isError, data, refetch } = useQuery({
    queryKey: ["getAllRoles"],
    queryFn: getRoles,
    refetchOnWindowFocus: false,
  });

  const [options, setOptions] = useState<IRoleEdit[]>([]);
  useEffect(() => {
    if (data) {
      setOptions(data);
    }
  }, [data]);

  const { isCreated, setIsCreated } = useRusersStore((state) => state);

  // Utiliza el tipo de datos ICoursecreatedCourseInfo
  const [createdUserInfo, setCreatedUserInfo] = useState<IUserCreate>({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    role: "",
  } as IUserCreate);

  // react query
  const addUserMutation = useMutation({
    // mutationKey: ["createRusers"],

    mutationFn: createUsers,
    onSuccess: (data) => {
      // Aquí tienes acceso a los datos de la respuesta
      // Actualizar la cache o realizar otras acciones después de crear el curso

      // Puedes actualizar el estado local, mostrar una notificación, o realizar cualquier otra acción
      // setCourses([...courses, data]); // Ejemplo: Agregar el nuevo curso a un array local

      setIsCreated(true);
      setCreatedUserInfo(data);
      console.log("createdUserInfo", createdUserInfo);
      toast.success("usuario creado exitosamente");
    },

    onError: (error) => {
      // Aquí puedes manejar los errores de la respuesta

      toast.error("Error al crear el usuario " + error);
    },

    // ... resto de la configuración
  });
  // TODO: notify-toast theme
  const theme = useTheme();

  // TODO: react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log("data", data);
    addUserMutation.mutate(data as IUserCreate);
  });

  return (
    <>
      <Stack
        component="form"
        onSubmit={onSubmit}
        spacing={4}
        sx={{
          display: "flex",
          maxWidth: "100%",
          mx: "auto",
          px: { xs: 2, md: 2 },
          py: { xs: 2, md: 2 },
        }}
      >
        <Card>
          <Box>
            <Typography level="title-md">Información del Usuario</Typography>
          </Box>
          <Divider />

          {/* // TODO: GRID */}
          <Box
            sx={{
              mt: 1,
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: 2,
            }}
          >
            {/* fila 1 */}

            <Box gridColumn={{ xs: "span 12", md: "span 4", lg: "span 4" }}>
              <FormControl
                sx={{ mb: 1 }}
                error={errors.name ? true : false}
              >
                <FormLabel>Nombre</FormLabel>
                <Input
                  type="text"
                  placeholder="Nombre del usuario"
                  variant="outlined"
                  size="sm"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "el nombre del modulo no puede estar vacio",
                    },
                    minLength: {
                      value: 3,
                      message:
                        "el nombre del modulo debe tener 5 letras minimo",
                    },
                    maxLength: {
                      value: 100,
                      message:
                        "el nombre del modulo puede tener 100 letras maximo",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚüÜ.,;:!?¡¿\s]+$/,
                      message:
                        "El nombre del modulo solo puede contener letras, acentos, espacios y signos de puntuación básicos",
                    },
                  })}
                  name="name"
                />
                {errors.name && (
                  <FormHelperText sx={{ gap: 1 }}>
                    <TbAlertTriangle />
                    <span>{errors.name.message as string}</span>
                  </FormHelperText>
                )}
              </FormControl>
            </Box>
            <Box gridColumn={{ xs: "span 12", md: "span 4", lg: "span 4" }}>
              <FormControl
                sx={{ mb: 1 }}
                error={errors.lastname ? true : false}
              >
                <FormLabel>Apellido</FormLabel>
                <Input
                  type="text"
                  placeholder="apellido del usuario"
                  variant="outlined"
                  size="sm"
                  {...register("lastname", {
                    required: {
                      value: true,
                      message: "el nombre del modulo no puede estar vacio",
                    },
                    minLength: {
                      value: 3,
                      message:
                        "el nombre del modulo debe tener 5 letras minimo",
                    },
                    maxLength: {
                      value: 100,
                      message:
                        "el nombre del modulo puede tener 100 letras maximo",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚüÜ.,;:!?¡¿\s]+$/,
                      message:
                        "El nombre del modulo solo puede contener letras, acentos, espacios y signos de puntuación básicos",
                    },
                  })}
                  name="lastname"
                />
                {errors.lastname && (
                  <FormHelperText sx={{ gap: 1 }}>
                    <TbAlertTriangle />
                    <span>{errors.lastname.message as string}</span>
                  </FormHelperText>
                )}
              </FormControl>
            </Box>
            <Box gridColumn={{ xs: "span 12", md: "span 4", lg: "span 4" }}>
              <FormControl
                sx={{ mb: 1 }}
                error={errors.phone ? true : false}
              >
                <FormLabel>Telefono</FormLabel>
                <Input
                  type="text"
                  placeholder="telefono"
                  variant="outlined"
                  size="sm"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "el nombre del modulo no puede estar vacio",
                    },
                    minLength: {
                      value: 3,
                      message:
                        "el nombre del modulo debe tener 5 letras minimo",
                    },
                    maxLength: {
                      value: 100,
                      message:
                        "el nombre del modulo puede tener 100 letras maximo",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚüÜ.,;:!?¡¿\s]+$/,
                      message:
                        "El nombre del modulo solo puede contener letras, acentos, espacios y signos de puntuación básicos",
                    },
                  })}
                  name="phone"
                />
                {errors.phone && (
                  <FormHelperText sx={{ gap: 1 }}>
                    <TbAlertTriangle />
                    <span>{errors.phone.message as string}</span>
                  </FormHelperText>
                )}
              </FormControl>
            </Box>

            {/* fila 2 */}
            <Box gridColumn={{ xs: "span 12", md: "span 6", lg: "span 6" }}>
              <FormControl
                sx={{ mb: 1 }}
                error={errors.email ? true : false}
              >
                <FormLabel>Correo</FormLabel>
                <Input
                  type="text"
                  placeholder="Correo del usuario"
                  variant="outlined"
                  size="sm"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "el nombre del modulo no puede estar vacio",
                    },
                    minLength: {
                      value: 3,
                      message:
                        "el nombre del modulo debe tener 5 letras minimo",
                    },
                    maxLength: {
                      value: 100,
                      message:
                        "el nombre del modulo puede tener 100 letras maximo",
                    },
                    // pattern: {
                    //   value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚüÜ.,;:!?¡¿\s]+$/,
                    //   message:
                    //     "El nombre del modulo solo puede contener letras, acentos, espacios y signos de puntuación básicos",
                    // },
                  })}
                  name="email"
                />
                {errors.email && (
                  <FormHelperText sx={{ gap: 1 }}>
                    <TbAlertTriangle />
                    <span>{errors.email.message as string}</span>
                  </FormHelperText>
                )}
              </FormControl>
            </Box>
            <Box gridColumn={{ xs: "span 12", md: "span 6", lg: "span 6" }}>
              <FormControl
                sx={{ mb: 1 }}
                error={errors.username ? true : false}
              >
                <FormLabel>Apodo</FormLabel>
                <Input
                  type="text"
                  placeholder="Apodo del usuario"
                  variant="outlined"
                  size="sm"
                  {...register("username", {
                    required: {
                      value: true,
                      message: "el nombre del modulo no puede estar vacio",
                    },
                    minLength: {
                      value: 3,
                      message:
                        "el nombre del modulo debe tener 5 letras minimo",
                    },
                    maxLength: {
                      value: 100,
                      message:
                        "el nombre del modulo puede tener 100 letras maximo",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚüÜ.,;:!?¡¿\s]+$/,
                      message:
                        "El nombre del modulo solo puede contener letras, acentos, espacios y signos de puntuación básicos",
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
            </Box>

            {/* fila 3 */}
            <Box gridColumn={{ xs: "span 12", md: "span 6", lg: "span 6" }}>
              <FormControl
                sx={{ mb: 1 }}
                error={errors.password ? true : false}
              >
                <FormLabel>contraseña</FormLabel>
                <Stack
                  spacing={0.5}
                  sx={{
                    "--hue": Math.min(passwordMeter.length * 10, 120),
                  }}
                >
                  <Input
                    size="sm"
                    type="password"
                    placeholder="contraseña"
                    startDecorator={<TbKey />}
                    value={passwordMeter}
                    {...register("password", {
                      required: {
                        value: true,
                        message: "el nombre del modulo no puede estar vacio",
                      },
                      minLength: {
                        value: 3,
                        message:
                          "el nombre del modulo debe tener 5 letras minimo",
                      },
                      maxLength: {
                        value: 100,
                        message:
                          "el nombre del modulo puede tener 100 letras maximo",
                      },
                      pattern: {
                        value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚüÜ.,;:!?¡¿\s]+$/,
                        message:
                          "El nombre del modulo solo puede contener letras, acentos, espacios y signos de puntuación básicos",
                      },
                    })}
                    name="password"
                    onChange={(event) => setPasswordMeter(event.target.value)}
                  />
                  <LinearProgress
                    determinate
                    size="sm"
                    value={Math.min(
                      (passwordMeter.length * 100) / minLength,
                      100
                    )}
                    sx={{
                      bgcolor: "background.level3",
                      color: "hsl(var(--hue) 80% 40%)",
                    }}
                  />
                  <Typography
                    level="body-xs"
                    sx={{
                      alignSelf: "flex-end",
                      color: "hsl(var(--hue) 80% 30%)",
                    }}
                  >
                    {passwordMeter.length < 3 && "Muy débil"}
                    {passwordMeter.length >= 3 &&
                      passwordMeter.length < 6 &&
                      "débil"}
                    {passwordMeter.length >= 6 &&
                      passwordMeter.length < 10 &&
                      "fuerte"}
                    {passwordMeter.length >= 10 && "Muy fuerte"}
                  </Typography>
                </Stack>
                {errors.password && (
                  <FormHelperText sx={{ gap: 1 }}>
                    <TbAlertTriangle />
                    <span>{errors.password.message as string}</span>
                  </FormHelperText>
                )}
              </FormControl>
            </Box>
            <Box gridColumn={{ xs: "span 12", md: "span 6", lg: "span 6" }}>
              <FormControl
                sx={{ mb: 1 }}
                error={errors.role ? true : false}
              >
                <FormLabel>Rol</FormLabel>
                <Select
                  placeholder="Elige un rol"
                  {...register("role", {})}
                  name="role"
                >
                  {options.map((option) => (
                    <Option
                      key={option.id}
                      value={option.role}
                    >
                      {option.role}
                    </Option>
                  ))}
                </Select>
                {errors.role && (
                  <FormHelperText sx={{ gap: 1 }}>
                    <TbAlertTriangle />
                    <span>{errors.role.message as string}</span>
                  </FormHelperText>
                )}
              </FormControl>
            </Box>

            {/* // TODO:  fin del GRID */}
          </Box>
          <CardOverflow sx={{ borderTop: "1px solid", borderColor: "divider" }}>
            <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
              <Button
                size="sm"
                variant="solid"
                startDecorator={<TbUserPlus size={20} />}
                type="submit"
              >
                Crear
              </Button>
            </CardActions>
          </CardOverflow>
        </Card>
      </Stack>
      <Divider sx={{ my: 4 }} />
      {/* {isCourseCreated ? <CourseCardOne {...createdCourseInfo} /> : <></>} */}

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

export default PUserCreate;
