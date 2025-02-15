import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
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
import { ICourseCreate } from "../../../types/coursesTypes";
import { createCourse } from "../../api/CoursesAPI";
import CourseCardOne from "./CourseCardOne";

function CoursesFormOne() {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [isCourseCreated, setIsCourseCreated] = useState(false);

  // Utiliza el tipo de datos ICoursecreatedCourseInfo
  const [createdCourseInfo, setCreatedCourseInfo] = useState<ICourseCreate>({
    id: 0,
    course: "",
    description: "",
    cycle: "",
    type: "",
    state: "",
  } as ICourseCreate);

  // react query
  const addCourseMutation = useMutation({
    // mutationKey: ["createCourse"],

    mutationFn: createCourse,
    onSuccess: (data) => {
      // Aquí tienes acceso a los datos de la respuesta
      // Actualizar la cache o realizar otras acciones después de crear el curso

      // Puedes actualizar el estado local, mostrar una notificación, o realizar cualquier otra acción
      // setCourses([...courses, data]); // Ejemplo: Agregar el nuevo curso a un array local
      toast.success("Curso creado exitosamente");
      setIsCourseCreated(true);
      setCreatedCourseInfo(data);
    },

    onError: (error) => {
      // Aquí puedes manejar los errores de la respuesta

      toast.error("Error al crear el curso " + error);
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
    getValues,
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
    addCourseMutation.mutate(data as ICourseCreate);
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
            <Typography level="title-md">Información del curso</Typography>
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

            <Box gridColumn={{ xs: "span 12", md: "span 8", lg: "span 8" }}>
              <FormControl
                sx={{ mb: 1 }}
                error={errors.course ? true : false}
              >
                <FormLabel>Nombre</FormLabel>
                <Input
                  type="text"
                  placeholder="Atención a la primera infancia"
                  variant="outlined"
                  size="sm"
                  {...register("course", {
                    required: {
                      value: true,
                      message: "el nombre del curso no puede estar vacio",
                    },
                    minLength: {
                      value: 3,
                      message: "el nombre del curso debe tener 5 letras minimo",
                    },
                    maxLength: {
                      value: 100,
                      message:
                        "el nombre del curso puede tener 100 letras maximo",
                    },
                    pattern: {
                      value: /^[a-zA-Z\s.,;:!?]+$/,
                      message:
                        "El nombre del curso solo puede contener letras, espacios y signos de puntuación básicos",
                    },
                  })}
                  name="course"
                />
                {errors.course && (
                  <FormHelperText sx={{ gap: 1 }}>
                    <TbAlertTriangle />
                    <span>{errors.course.message as string}</span>
                  </FormHelperText>
                )}
              </FormControl>
            </Box>

            <Box gridColumn={{ xs: "span 12", md: "span 2", lg: "span 2" }}>
              <FormControl
                sx={{ mb: 1 }}
                error={errors.state ? true : false}
              >
                <FormLabel>Estado</FormLabel>

                <Select
                  placeholder="estado"
                  variant="outlined"
                  size="sm"
                  {...register("state", {
                    required: {
                      value: true,
                      message: "el estado no puede estar vacio",
                    },
                  })}
                  name="state"
                >
                  <Option value="ACTIVO">activo</Option>
                  <Option value="INACTIVO">inactivo</Option>
                  <Option value="SUSPENDIDO">suspendido</Option>
                </Select>
                {errors.state && (
                  <FormHelperText sx={{ gap: 1 }}>
                    <TbAlertTriangle />
                    <span>{errors.state.message as string}</span>
                  </FormHelperText>
                )}
              </FormControl>
            </Box>
            <Box gridColumn={{ xs: "span 12", md: "span 2", lg: "span 2" }}>
              <FormControl
                sx={{ mb: 1 }}
                error={errors.type ? true : false}
              >
                <FormLabel>Tipo de curso</FormLabel>

                <Select
                  placeholder="tipo"
                  variant="outlined"
                  size="sm"
                  {...register("type", {
                    required: {
                      value: true,
                      message: "el tipo de curso no puede estar vacio",
                    },
                  })}
                  name="type"
                >
                  <Option value="bachillerato">bachillerato</Option>
                  <Option value="tecnico">tecnico</Option>
                  <Option value="diplomado">diplomado</Option>
                  <Option value="curso libre">curso libre</Option>
                  <Option value="curso corto">curso corto</Option>
                </Select>
                {errors.type && (
                  <FormHelperText sx={{ gap: 1 }}>
                    <TbAlertTriangle />
                    <span>{errors.type.message as string}</span>
                  </FormHelperText>
                )}
              </FormControl>
            </Box>
            {/* fila 2 */}
            <Box gridColumn={{ xs: "span 12", md: "span 12", lg: "span 12" }}>
              <FormControl
                sx={{ mb: 1 }}
                error={errors.cycle ? true : false}
              >
                <FormLabel>Detalles</FormLabel>
                <Input
                  type="text"
                  placeholder="descripción corta del curso"
                  variant="outlined"
                  size="sm"
                  {...register("cycle", {
                    required: {
                      value: true,
                      message: "Los detalles del curso no pueden estar vacios",
                    },
                    minLength: {
                      value: 10,
                      message:
                        "Los detalles del curso  deben tener 10 letras minimo",
                    },
                    maxLength: {
                      value: 100,
                      message:
                        "Los detalles del curso  pueden tener 100 letras maximo",
                    },
                    pattern: {
                      value: /^[a-zA-Z\s.,;:!?]+$/,
                      message:
                        "Los detalles del curso solo puede contener letras, espacios y signos de puntuación básicos",
                    },
                  })}
                  name="cycle"
                />
                {errors.cycle && (
                  <FormHelperText sx={{ gap: 1 }}>
                    <TbAlertTriangle />
                    <span>{errors.cycle.message as string}</span>
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
                      value: 1000,
                      message:
                        "La descripción del curso puede tener 1000 letras maximo",
                    },
                  })}
                  name="description"
                  value={textAreaValue}
                  onChange={(event) => setTextAreaValue(event.target.value)}
                  minRows={2}
                  // startDecorator={
                  //   <Box sx={{ display: "flex", gap: 0.5, flex: 1 }}>
                  //     <IconButton
                  //       variant="outlined"
                  //       color="neutral"
                  //       onClick={addEmoji("👍")}
                  //     >
                  //       👍
                  //     </IconButton>
                  //     <IconButton
                  //       variant="outlined"
                  //       color="neutral"
                  //       onClick={addEmoji("🏖")}
                  //     >
                  //       🏖
                  //     </IconButton>
                  //     <IconButton
                  //       variant="outlined"
                  //       color="neutral"
                  //       onClick={addEmoji("😍")}
                  //     >
                  //       😍
                  //     </IconButton>
                  //     <Button
                  //       variant="outlined"
                  //       color="neutral"
                  //       sx={{ ml: "auto" }}
                  //     >
                  //       See all
                  //     </Button>
                  //   </Box>
                  // }
                  endDecorator={
                    <Typography
                      level="body-xs"
                      sx={{ ml: "auto" }}
                    >
                      {textAreaValue.length} / 1000 caracteres
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
      {isCourseCreated ? <CourseCardOne {...createdCourseInfo} /> : <></>}

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

export default CoursesFormOne;
