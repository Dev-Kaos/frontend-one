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
import { useForm, set } from "react-hook-form";
import { useMutation, refetch } from "@tanstack/react-query";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IModuleCreate, IModuleEdit } from "../../../shared/types/moduleTypes";

import { createModules, updateModules } from "../../api/ModulesAPI";

// import CourseCardOne from "./CourseCardOne";

function PModuleEditForm(moduleData: IModuleEdit) {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [isModuleEdited, setIsModuleEdited] = useState(false);

  // TODO: notify-toast theme
  const theme = useTheme();

  // TODO: react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  // Utiliza el tipo de datos ICoursecreatedCourseInfo
  const [editModuleInfo, setEditModuleInfo] = useState<IModuleEdit>({
    id: moduleData.id,
    module: moduleData.module,
    description: moduleData.description,
  } as IModuleEdit);

  const onSubmit = handleSubmit((data) => {
    const moduleInfo: IModuleEdit = {
      id: editModuleInfo.id,
      module: data.module,
      description: data.description,
    };

    editModuleMutation.mutate(moduleInfo);
    setIsModuleEdited(true);
    setEditModuleInfo(moduleInfo);
  });

  // react query
  const editModuleMutation = useMutation({
    // mutationKey: ["editModules"],

    mutationFn: updateModules,
    onSuccess: (data) => {
      toast.success("Curso editado exitosamente");
    },

    onError: (error) => {
      // Aquí puedes manejar los errores de la respuesta

      toast.error("Error al editar el module " + error);
    },

    // ... resto de la configuración
  });

  const handleEdit = () => {
    setEditModuleInfo(editModuleInfo);
    console.log("|| editModuleInfo", editModuleInfo);
  };

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
            <Typography level="title-md">Información del Modulo</Typography>
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
                error={errors.module ? true : false}
              >
                <FormLabel>Modulo</FormLabel>
                <Input
                  placeholder={moduleData.module}
                  type="text"
                  variant="outlined"
                  size="sm"
                  {...register("module", {
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
                      value: /^[a-zA-Z\s.,;:!?]+$/,
                      message:
                        "El nombre del modulo solo puede contener letras, espacios y signos de puntuación básicos",
                    },
                  })}
                  name="module"
                />
                {errors.module && (
                  <FormHelperText sx={{ gap: 1 }}>
                    <TbAlertTriangle />
                    <span>{errors.module.message as string}</span>
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
                  placeholder={moduleData.description}
                  value={textAreaValue}
                  onChange={(event) => setTextAreaValue(event.target.value)}
                  minRows={2}
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
                Editar
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

export default PModuleEditForm;
