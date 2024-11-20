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
import { useState } from "react";
import { Textarea, useTheme } from "@mui/joy";
import { TbAlertTriangle, TbUserPlus } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRolesStore } from "../../../store/rolesStore";
import { IRoleCreate } from "../../../../shared/types/roleTypes";
import { createRoles } from "../../../api/RolesAPI";

// import CourseCardOne from "./CourseCardOne";

function PRoleCreate() {
  const [textAreaValue, setTextAreaValue] = useState("");
  const { isCreated, setIsCreated } = useRolesStore((state) => state);

  // Utiliza el tipo de datos ICoursecreatedCourseInfo
  const [createdRoleInfo, setCreatedRoleInfo] = useState<IRoleCreate>({
    id: 0,
    role: "",
    description: "",
  } as IRoleCreate);

  // react query
  const addRoleMutation = useMutation({
    // mutationKey: ["createmodules"],

    mutationFn: createRoles,
    onSuccess: (data) => {
      // Aquí tienes acceso a los datos de la respuesta
      // Actualizar la cache o realizar otras acciones después de crear el curso

      // Puedes actualizar el estado local, mostrar una notificación, o realizar cualquier otra acción
      // setCourses([...courses, data]); // Ejemplo: Agregar el nuevo curso a un array local
      toast.success("Curso creado exitosamente");
      setIsCreated(true);
      setCreatedRoleInfo(data);
    },

    onError: (error) => {
      // Aquí puedes manejar los errores de la respuesta

      toast.error("Error al crear el module " + error);
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
    // Aquí puedes hacer lo que quieras con los datos del formulario
    // Coregir la redireccion

    // console.log(data);
    // const { username, password } = data;
    // const dataToSend = { username, password };
    // console.log(JSON.stringify(dataToSend));
    // Aquí podrías hacer una llamada a tu API o realizar otras acciones
    // ...
    // navigate("/administrador");
    addRoleMutation.mutate(data as IRoleCreate);
    // toast.success("Curso creado correctamente");
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
            <Typography level="title-md">Información del Rol</Typography>
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

            <Box gridColumn={{ xs: "span 12", md: "span 12", lg: "span 12" }}>
              <FormControl
                sx={{ mb: 1 }}
                error={errors.role ? true : false}
              >
                <FormLabel>Rol</FormLabel>
                <Input
                  type="text"
                  placeholder="Nombre del Modulo"
                  variant="outlined"
                  size="sm"
                  {...register("role", {
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
                  name="role"
                />
                {errors.role && (
                  <FormHelperText sx={{ gap: 1 }}>
                    <TbAlertTriangle />
                    <span>{errors.role.message as string}</span>
                  </FormHelperText>
                )}
              </FormControl>
            </Box>

            {/* fila 3 */}

            <Box gridColumn={{ xs: "span 12", md: "span 12", lg: "span 12" }}>
              <FormControl
                sx={{ mb: 1 }}
                error={errors.description ? true : false}
              >
                <FormLabel>Descripción</FormLabel>
                <Textarea
                  placeholder="Describe las caracteristicas del curso"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "La descripción del curso no puede estar vacia",
                    },
                    minLength: {
                      value: 10,
                      message:
                        "La descripción del curso debe tener 50 letras minimo",
                    },
                    maxLength: {
                      value: 500,
                      message:
                        "La descripción del curso puede tener 1000 letras maximo",
                    },
                  })}
                  name="description"
                  value={textAreaValue}
                  onChange={(event) => setTextAreaValue(event.target.value)}
                  minRows={2}
                  endDecorator={
                    <Typography
                      level="body-xs"
                      sx={{ ml: "auto" }}
                    >
                      {textAreaValue.length} / 500 caracteres
                    </Typography>
                  }
                  sx={{ minWidth: 300 }}
                />

                {errors.description && (
                  <FormHelperText sx={{ gap: 1 }}>
                    <TbAlertTriangle />
                    <span>{errors.description.message as string}</span>
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

export default PRoleCreate;
