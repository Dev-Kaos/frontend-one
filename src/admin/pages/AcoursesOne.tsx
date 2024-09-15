import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import Stack from "@mui/joy/Stack";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Typography from "@mui/joy/Typography";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardOverflow from "@mui/joy/CardOverflow";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { SetStateAction, useState } from "react";
import { Avatar, CardContent, Chip, LinearProgress, TabPanel } from "@mui/joy";
import {
  TbAlertTriangle,
  TbBook,
  TbBookDownload,
  TbBooks,
  TbBookUpload,
  TbEyeglass,
  TbHome,
  TbHomePlus,
  TbHomeSearch,
  TbInfoCircle,
  TbKey,
  TbMail,
  TbPhone,
  TbSearch,
  TbTrash,
  TbUser,
  TbUserCog,
  TbUserPlus,
  TbUserQuestion,
} from "react-icons/tb";
import { useForm } from "react-hook-form";
import React from "react";
import NewsTableOne from "../components/modules/NewsTableOne";
import NewsTooltip from "../components/common/NewsTooltip";
import Products from "../components/common/Products";
import CoursesTable from "../components/modules/CoursesTable";
import Courseprueba from "../components/common/Courseprueba";

export default function AcoursesOne() {
  // TODO: TABS
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (
    event: React.ChangeEvent<HTMLBaseElement>,
    newValue: SetStateAction<number>
  ) => {
    setTabValue(newValue);
  };

  const handleTabClick = (newValue: number) => {
    setTabValue(newValue);
  };

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
  });
  const renderFilters = () => (
    <React.Fragment>
      <FormControl size="sm">
        <FormLabel>Estado</FormLabel>
        <Select
          size="sm"
          placeholder="Cualquiera"
          slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
        >
          <Option value="1">activo</Option>
          <Option value="2">inactivo</Option>
          <Option value="3">suspendido</Option>
          <Option value="4">certificado</Option>
        </Select>
      </FormControl>
      <FormControl size="sm">
        <FormLabel>Rol</FormLabel>
        <Select
          size="sm"
          placeholder="Cualquiera"
        >
          <Option value="1">administrador</Option>
          <Option value="2">docente</Option>
          <Option value="3">estudiante</Option>
          <Option value="4">Debit</Option>
        </Select>
      </FormControl>
      {/* <FormControl size="sm">
        <FormLabel>Customer</FormLabel>
        <Select
          size="sm"
          placeholder="All"
        >
          <Option value="all">All</Option>
          <Option value="olivia">Olivia Rhye</Option>
          <Option value="steve">Steve Hampton</Option>
          <Option value="ciaran">Ciaran Murray</Option>
          <Option value="marina">Marina Macdonald</Option>
          <Option value="charles">Charles Fulton</Option>
          <Option value="jay">Jay Hoper</Option>
        </Select>
      </FormControl> */}
      <Button
        size="sm"
        sx={{
          ml: "auto",
          display: { xs: "none", sm: "inline-flex", alignSelf: "flex-end" },
        }}
        startDecorator={<TbSearch />}
        variant="outlined"
      >
        Buscar
      </Button>
    </React.Fragment>
  );
  return (
    <Box sx={{ flex: 1, width: "100%" }}>
      <Box sx={{ px: { xs: 2, md: 2 } }}>
        {/* <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon sx={{ fontSize: 12 }} />}
          sx={{ pl: 0 }}
        >
          <Link
            underline="none"
            color="neutral"
            href="#some-link"
            aria-label="Home"
          >
            <HomeRoundedIcon />
          </Link>
          <Link
            underline="hover"
            color="neutral"
            href="#some-link"
            sx={{ fontSize: 12, fontWeight: 500 }}
          >
            Users
          </Link>
          <Typography
            color="primary"
            sx={{ fontWeight: 500, fontSize: 12 }}
          >
            My profile
          </Typography>
        </Breadcrumbs> */}
        {/* <Button
            onClick={() => {
              handleTabClick(1);
            }}
          >
            abrir tab
          </Button> */}
        <Stack
          direction="row"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 1,
            mb: 2,
          }}
        >
          <Typography
            level="h2"
            component="h1"
            sx={{ fontWeight: 500 }}
            startDecorator={<TbBooks />}
          >
            Cursos
          </Typography>
          <NewsTooltip />
        </Stack>
      </Box>
      <Tabs
        defaultValue={0}
        sx={{ bgcolor: "transparent" }}
        value={tabValue}
        onChange={handleTabChange}
      >
        <TabList
          tabFlex={1}
          size="sm"
          sx={{
            pl: { xs: 0, md: 0 },
            justifyContent: "left",
            [`&& .${tabClasses.root}`]: {
              flex: "initial",
              color: "text.tertiary",
              [`&.${tabClasses.selected}`]: {
                bgcolor: "transparent",
                color: "text.primary",
                "&::after": {
                  height: "2px",
                  bgcolor: "primary.500",
                },
              },
            },
          }}
        >
          <Tab
            sx={{ borderRadius: "6px 6px 0 0" }}
            indicatorInset
            value={0}
          >
            <TbBookDownload size={20} />
            Buscar
          </Tab>
          <Tab
            sx={{ borderRadius: "6px 6px 0 0" }}
            indicatorInset
            value={1}
          >
            <TbBookUpload size={20} /> Crear
          </Tab>
          <Tab
            sx={{ borderRadius: "6px 6px 0 0" }}
            indicatorInset
            value={2}
          >
            <TbHomePlus size={20} /> prueba fetch
          </Tab>
        </TabList>

        <TabPanel value={0}>
          {/* courses table  */}
          {/* <Courseprueba /> */}
          <CoursesTable />
        </TabPanel>
        <TabPanel value={1}>
          {/* news form  */}
          <Stack
            direction={"row"}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography
              level="h4"
              sx={{ textAlign: "center", my: 2 }}
            >
              {}
            </Typography>

            <Stack
              direction={"row"}
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography
                level="body-sm"
                sx={{ textAlign: "center", my: 2 }}
              >
                Tienes alguna consulta?
              </Typography>
              {/* <TooltipOne /> */}
            </Stack>
          </Stack>

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
                <Typography level="title-md">Información Personal</Typography>
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

                <Box gridColumn={{ xs: "span 12", md: "span 3", lg: "span 3" }}>
                  <FormControl
                    sx={{ mb: 1 }}
                    error={errors.primerNombre ? true : false}
                  >
                    <FormLabel>primer nombre</FormLabel>
                    <Input
                      type="text"
                      placeholder="jose"
                      variant="outlined"
                      size="sm"
                      {...register("primerNombre", {
                        required: {
                          value: true,
                          message: "el nombre no puede estar vacio",
                        },
                        minLength: {
                          value: 3,
                          message: "el nombre debe tener 3 letras minimo",
                        },
                        maxLength: {
                          value: 12,
                          message: "el nombre puede tener 12 letras maximo",
                        },
                        pattern: {
                          value: /^[a-zA-Z]+$/,
                          message: "El nombre solo puede contener letras",
                        },
                      })}
                      name="primerNombre"
                    />
                    {errors.primerNombre && (
                      <FormHelperText sx={{ gap: 1 }}>
                        <TbAlertTriangle />
                        <span>{errors.primerNombre.message as string}</span>
                      </FormHelperText>
                    )}
                  </FormControl>
                </Box>
                <Box gridColumn={{ xs: "span 12", md: "span 3", lg: "span 3" }}>
                  <FormControl
                    sx={{ mb: 1 }}
                    error={errors.segundoNombre ? true : false}
                  >
                    <FormLabel>segundo nombre</FormLabel>
                    <Input
                      type="text"
                      placeholder="opcional"
                      variant="outlined"
                      size="sm"
                      {...register("segundoNombre", {
                        maxLength: {
                          value: 12,
                          message: "el nombre puede tener 12 letras maximo",
                        },
                        pattern: {
                          value: /^[a-zA-Z]+$/,
                          message: "El nombre solo puede contener letras",
                        },
                      })}
                      name="segundoNombre"
                    />
                    {errors.segundoNombre && (
                      <FormHelperText sx={{ gap: 1 }}>
                        <TbAlertTriangle />
                        <span>{errors.segundoNombre.message as string}</span>
                      </FormHelperText>
                    )}
                  </FormControl>
                </Box>
                <Box gridColumn={{ xs: "span 12", md: "span 3", lg: "span 3" }}>
                  <FormControl
                    sx={{ mb: 1 }}
                    error={errors.primerApellido ? true : false}
                  >
                    <FormLabel>primer apellido</FormLabel>
                    <Input
                      type="text"
                      placeholder="ramirez"
                      variant="outlined"
                      size="sm"
                      {...register("primerApellido", {
                        required: {
                          value: true,
                          message: "el Apellido no puede estar vacio",
                        },
                        minLength: {
                          value: 3,
                          message: "el Apellido debe tener 3 letras minimo",
                        },
                        maxLength: {
                          value: 12,
                          message: "el Apellido puede tener 12 letras maximo",
                        },
                        pattern: {
                          value: /^[a-zA-Z]+$/,
                          message: "El Apellido solo puede contener letras",
                        },
                      })}
                      name="primerApellido"
                    />
                    {errors.primerApellido && (
                      <FormHelperText sx={{ gap: 1 }}>
                        <TbAlertTriangle />
                        <span>{errors.primerApellido.message as string}</span>
                      </FormHelperText>
                    )}
                  </FormControl>
                </Box>
                <Box gridColumn={{ xs: "span 12", md: "span 3", lg: "span 3" }}>
                  <FormControl
                    sx={{ mb: 1 }}
                    error={errors.segundoApellido ? true : false}
                  >
                    <FormLabel>segundo apellido</FormLabel>
                    <Input
                      type="text"
                      placeholder="sanchez"
                      variant="outlined"
                      size="sm"
                      {...register("segundoApellido", {
                        maxLength: {
                          value: 12,
                          message: "el Apellido puede tener 12 letras maximo",
                        },
                        pattern: {
                          value: /^[a-zA-Z]+$/,
                          message: "El Apellido solo puede contener letras",
                        },
                      })}
                      name="segundoApellido"
                    />
                    {errors.segundoApellido && (
                      <FormHelperText sx={{ gap: 1 }}>
                        <TbAlertTriangle />
                        <span>{errors.segundoApellido.message as string}</span>
                      </FormHelperText>
                    )}
                  </FormControl>
                </Box>
                {/* fila 2 */}

                <Box gridColumn={{ xs: "span 12", md: "span 3", lg: "span 3" }}>
                  <FormControl
                    sx={{ mb: 1 }}
                    error={errors.documento ? true : false}
                  >
                    <FormLabel>documento</FormLabel>
                    <Input
                      type="text"
                      placeholder="1234567890"
                      variant="outlined"
                      size="sm"
                      {...register("documento", {
                        required: {
                          value: true,
                          message: "el documento no puede estar vacio",
                        },
                        minLength: {
                          value: 6,
                          message: "el documento debe tener 6 numeros minimo",
                        },
                        maxLength: {
                          value: 12,
                          message: "el documento puede tener 15 numeros maximo",
                        },
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "El documento solo puede contener numeros",
                        },
                      })}
                      name="documento"
                    />
                    {errors.documento && (
                      <FormHelperText sx={{ gap: 1 }}>
                        <TbAlertTriangle />
                        <span>{errors.documento.message as string}</span>
                      </FormHelperText>
                    )}
                  </FormControl>
                </Box>
                <Box gridColumn={{ xs: "span 12", md: "span 3", lg: "span 3" }}>
                  <FormControl
                    sx={{ mb: 1 }}
                    error={errors.fechaExp ? true : false}
                  >
                    <FormLabel>fecha expedición</FormLabel>
                    <Input
                      type="date"
                      placeholder="01/01/2000"
                      variant="outlined"
                      size="sm"
                      {...register("fechaExp", {
                        required: {
                          value: true,
                          message:
                            "La fecha de nacimiento no puede estar vacia",
                        },
                      })}
                      name="fechaExp"
                    />
                    {errors.fechaExp && (
                      <FormHelperText sx={{ gap: 1 }}>
                        <TbAlertTriangle />
                        <span>{errors.fechaExp.message as string}</span>
                      </FormHelperText>
                    )}
                  </FormControl>
                </Box>
                <Box gridColumn={{ xs: "span 12", md: "span 4", lg: "span 4" }}>
                  <FormControl
                    sx={{ mb: 1 }}
                    error={errors.lugarExp ? true : false}
                  >
                    <FormLabel>lugar de expedición</FormLabel>
                    <Input
                      type="text"
                      placeholder="velez(santander)"
                      variant="outlined"
                      size="sm"
                      {...register("lugarExp", {
                        required: {
                          value: true,
                          message:
                            "el lugar de expedición no puede estar vacio",
                        },
                        minLength: {
                          value: 3,
                          message:
                            "el lugar de expedición debe tener 3 letras minimo",
                        },
                        maxLength: {
                          value: 12,
                          message:
                            "el lugar de expedición puede tener 12 letras maximo",
                        },
                        pattern: {
                          value: /^[a-zA-Z\-.,:;?!]+$/,
                          message:
                            "Solo se permiten letras, guiones y signos de puntuación.",
                        },
                      })}
                      name="lugarExp"
                    />
                    {errors.lugarExp && (
                      <FormHelperText sx={{ gap: 1 }}>
                        <TbAlertTriangle />
                        <span>{errors.lugarExp.message as string}</span>
                      </FormHelperText>
                    )}
                  </FormControl>
                </Box>
                <Box gridColumn={{ xs: "span 12", md: "span 2", lg: "span 2" }}>
                  <FormControl sx={{ mb: 1 }}>
                    <FormLabel>tipo documento</FormLabel>

                    <Select
                      placeholder="tipo"
                      variant="outlined"
                      size="sm"
                    >
                      <Option value="1">cedula de ciudadania</Option>
                      <Option value="2">tajeta de identidad</Option>
                    </Select>
                    <FormHelperText>
                      <TbAlertTriangle />
                      Elige un tipo
                    </FormHelperText>
                  </FormControl>
                </Box>
                {/* fila 3 */}

                <Box gridColumn={{ xs: "span 12", md: "span 3", lg: "span 3" }}>
                  <FormControl sx={{ mb: 1 }}>
                    <FormLabel>sexo</FormLabel>
                    <Select
                      defaultValue="1"
                      placeholder="tipo"
                      variant="outlined"
                      size="sm"
                      // {...register("sexo", {
                      //   required: {
                      //     value: true,
                      //     message: "el sexo no puede estar vacio",
                      //   },
                      // })}
                    >
                      <Option value="1">masculino</Option>
                      <Option value="2">femenino</Option>
                    </Select>
                    <FormHelperText>
                      <TbAlertTriangle />
                      Validaciones
                    </FormHelperText>
                  </FormControl>
                </Box>

                <Box gridColumn={{ xs: "span 12", md: "span 3", lg: "span 3" }}>
                  <FormControl sx={{ mb: 1 }}>
                    <FormLabel>fecha de nacimiento</FormLabel>
                    <Input
                      type="date"
                      placeholder="manuel"
                      variant="outlined"
                      size="sm"
                    />
                    <FormHelperText>
                      <TbAlertTriangle />
                      Validaciones
                    </FormHelperText>
                  </FormControl>
                </Box>
                <Box gridColumn={{ xs: "span 12", md: "span 4", lg: "span 4" }}>
                  <FormControl sx={{ mb: 1 }}>
                    <FormLabel>lugar de nacimiento</FormLabel>
                    <Input
                      type="text"
                      placeholder="velez(santander)"
                      variant="outlined"
                      size="sm"
                    />
                    <FormHelperText>
                      <TbAlertTriangle />
                      Validaciones
                    </FormHelperText>
                  </FormControl>
                </Box>
                <Box gridColumn={{ xs: "span 12", md: "span 2", lg: "span 2" }}>
                  <FormControl sx={{ mb: 1 }}>
                    <FormLabel>tipo de sangre</FormLabel>
                    <Select
                      placeholder="tipo"
                      variant="outlined"
                      size="sm"
                    >
                      <Option value="1">A+</Option>
                      <Option value="2">A-</Option>
                      <Option value="3">B+</Option>
                      <Option value="4">B-</Option>
                      <Option value="5">AB+</Option>
                      <Option value="6">AB-</Option>
                      <Option value="7">O+</Option>
                      <Option value="8">O-</Option>
                    </Select>
                    <FormHelperText>
                      <TbAlertTriangle />
                      Elige un tipo
                    </FormHelperText>
                  </FormControl>
                </Box>
                {/* // TODO:  fin del GRID */}
              </Box>
            </Card>

            {/* // TODO:  datos de cuenta */}
            <Card>
              <Box sx={{ mb: 1 }}>
                <Typography
                  level="title-md"
                  startDecorator={<TbInfoCircle />}
                >
                  Información de la cuenta{" "}
                </Typography>
              </Box>
              <Divider />

              <Stack
                direction="row"
                spacing={3}
                sx={{ display: { xs: "flex", md: "flex" }, my: 1 }}
              >
                <Stack
                  direction="column"
                  spacing={1}
                  sx={{}}
                >
                  <AspectRatio
                    ratio="1"
                    maxHeight={200}
                    sx={{ flex: 1, minWidth: 120, borderRadius: "100%" }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                      srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                      loading="lazy"
                      alt=""
                    />
                  </AspectRatio>
                  <IconButton
                    aria-label="upload new picture"
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    sx={{
                      bgcolor: "background.body",
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      left: 100,
                      top: 170,
                      boxShadow: "sm",
                    }}
                  >
                    <EditRoundedIcon />
                  </IconButton>
                </Stack>

                <Box
                  sx={{
                    width: "100%",
                    mt: 1,
                    display: "grid",
                    gridTemplateColumns: "repeat(12, 1fr)",
                    gap: 2,
                  }}
                >
                  <Box
                    gridColumn={{ xs: "span 12", md: "span 4", lg: "span 4" }}
                  >
                    <FormControl sx={{ mb: 1 }}>
                      <FormLabel>cuenta</FormLabel>
                      <Input
                        type="text"
                        placeholder="manuel123"
                        variant="outlined"
                        size="sm"
                        startDecorator={<TbUser />}
                      />
                      <FormHelperText>
                        <TbAlertTriangle />
                        Validaciones
                      </FormHelperText>
                    </FormControl>
                  </Box>
                  <Box
                    gridColumn={{ xs: "span 12", md: "span 4", lg: "span 4" }}
                  >
                    <FormControl sx={{ mb: 1 }}>
                      <FormLabel>correo</FormLabel>
                      <Input
                        type="email"
                        placeholder="manuel123@gmail.com"
                        variant="outlined"
                        size="sm"
                        startDecorator={<TbMail />}
                      />
                      <FormHelperText>
                        <TbAlertTriangle />
                        Validaciones
                      </FormHelperText>
                    </FormControl>
                  </Box>
                  <Box
                    gridColumn={{ xs: "span 12", md: "span 4", lg: "span 4" }}
                  >
                    <FormControl sx={{ mb: 1 }}>
                      <FormLabel>telefono</FormLabel>
                      <Input
                        type="text"
                        placeholder="312..."
                        variant="outlined"
                        size="sm"
                        startDecorator={<TbPhone />}
                      />
                      <FormHelperText>
                        <TbAlertTriangle />
                        Validaciones
                      </FormHelperText>
                    </FormControl>
                  </Box>
                  {/* sgunda linea */}
                  <Box
                    gridColumn={{ xs: "span 12", md: "span 4", lg: "span 4" }}
                  >
                    <FormControl sx={{ mb: 1 }}>
                      <FormLabel>nombre usuario</FormLabel>
                      <Input
                        type="text"
                        placeholder="manuel123"
                        variant="outlined"
                        size="sm"
                        startDecorator={<TbUser />}
                      />
                      <FormHelperText>
                        <TbAlertTriangle />
                        Validaciones
                      </FormHelperText>
                    </FormControl>
                  </Box>{" "}
                  <Box
                    gridColumn={{ xs: "span 12", md: "span 8", lg: "span 8" }}
                  >
                    <FormControl sx={{ mb: 1 }}>
                      <FormLabel>rol</FormLabel>
                      <Select
                        placeholder="..."
                        variant="outlined"
                        size="sm"
                        startDecorator={<TbUserCog />}
                        multiple
                        renderValue={(selected) => (
                          <Box sx={{ display: "flex", gap: "0.25rem" }}>
                            {selected.map((selectedOption) => (
                              <Chip
                                variant="soft"
                                color="primary"
                              >
                                {selectedOption.label}
                              </Chip>
                            ))}
                          </Box>
                        )}
                        sx={{ minWidth: "15rem" }}
                        slotProps={{
                          listbox: {
                            sx: {
                              width: "100%",
                            },
                          },
                        }}
                      >
                        <Option value="1">administrador</Option>
                        <Option value="2">docente</Option>
                        <Option value="3">estudiante</Option>
                        <Option value="4">acudiente</Option>
                      </Select>
                      <FormHelperText>
                        <TbAlertTriangle />
                        Validaciones
                      </FormHelperText>
                    </FormControl>
                  </Box>{" "}
                </Box>
              </Stack>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(12, 1fr)",
                  gap: 2,
                }}
              >
                <Box gridColumn={{ xs: "span 12", md: "span 2", lg: "span 2" }}>
                  <FormControl sx={{ mb: 1 }}>
                    <FormLabel>estado</FormLabel>
                    <Select
                      placeholder="estado"
                      variant="outlined"
                      size="sm"
                    >
                      <Option value="1">activo</Option>
                      <Option value="2">inactivo</Option>
                      <Option value="1">suspendido</Option>
                      <Option value="2">certificado</Option>
                    </Select>
                    <FormHelperText>
                      <TbAlertTriangle />
                      Elige un tipo
                    </FormHelperText>
                  </FormControl>
                </Box>
                <Box gridColumn={{ xs: "span 12", md: "span 4", lg: "span 4" }}>
                  <FormControl sx={{ mb: 1 }}>
                    <FormLabel>pregunta de recuperación</FormLabel>
                    <Select
                      placeholder="elige una pregunta"
                      variant="outlined"
                      size="sm"
                    >
                      <Option value="1">
                        ¿Como se llamaba tu primer maestro?
                      </Option>
                      <Option value="2">
                        ¿Título del primer libro que leíste?
                      </Option>
                      <Option value="3">¿Nombre de tu Abuelo favorito?</Option>
                    </Select>
                    <FormHelperText>
                      <TbAlertTriangle />
                      Validaciones
                    </FormHelperText>
                  </FormControl>
                </Box>{" "}
                <Box gridColumn={{ xs: "span 12", md: "span 6", lg: "span 6" }}>
                  <FormControl sx={{ mb: 1 }}>
                    <FormLabel>Respuesta</FormLabel>
                    <Input
                      type="text"
                      placeholder="mi primer..."
                      variant="outlined"
                      size="sm"
                      startDecorator={<TbUserQuestion />}
                    />
                    <FormHelperText>
                      <TbAlertTriangle />
                      Validaciones
                    </FormHelperText>
                  </FormControl>
                </Box>
                <Box gridColumn={{ xs: "span 12", md: "span 6", lg: "span 6" }}>
                  <FormControl sx={{ mb: 1 }}>
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
                        onChange={(event) =>
                          setPasswordMeter(event.target.value)
                        }
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
                    <FormHelperText>
                      <TbAlertTriangle />
                      Validaciones
                    </FormHelperText>
                  </FormControl>
                </Box>
                <Box gridColumn={{ xs: "span 12", md: "span 6", lg: "span 6" }}>
                  <FormControl sx={{ mb: 1 }}>
                    <FormLabel>confirmar contraseña</FormLabel>
                    <Stack
                      spacing={0.5}
                      sx={{
                        "--hue": Math.min(
                          passwordMeterConfirm.length * 10,
                          120
                        ),
                      }}
                    >
                      <Input
                        size="sm"
                        type="password"
                        placeholder="repite la contraseña"
                        startDecorator={<TbKey />}
                        value={passwordMeterConfirm}
                        onChange={(event) =>
                          setPasswordMeterConfirm(event.target.value)
                        }
                      />
                      <LinearProgress
                        determinate
                        size="sm"
                        value={Math.min(
                          (passwordMeterConfirm.length * 100) / minLength,
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
                        {passwordMeterConfirm.length < 3 && "Muy débil"}
                        {passwordMeterConfirm.length >= 3 &&
                          passwordMeterConfirm.length < 6 &&
                          "débil"}
                        {passwordMeterConfirm.length >= 6 &&
                          passwordMeterConfirm.length < 10 &&
                          "fuerte"}
                        {passwordMeterConfirm.length >= 10 && "Muy fuerte"}
                      </Typography>
                    </Stack>
                    <FormHelperText>
                      <TbAlertTriangle />
                      Validaciones
                    </FormHelperText>
                  </FormControl>
                </Box>
              </Box>

              {/* movil */}

              <Stack
                direction="column"
                spacing={2}
                sx={{ display: { xs: "flex", md: "none" }, my: 1 }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                >
                  <Stack
                    direction="column"
                    spacing={1}
                  >
                    <AspectRatio
                      ratio="1"
                      maxHeight={108}
                      sx={{ flex: 1, minWidth: 108, borderRadius: "100%" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                        srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                        loading="lazy"
                        alt=""
                      />
                    </AspectRatio>
                    <IconButton
                      aria-label="upload new picture"
                      size="sm"
                      variant="outlined"
                      color="neutral"
                      sx={{
                        bgcolor: "background.body",
                        position: "absolute",
                        zIndex: 2,
                        borderRadius: "50%",
                        left: 85,
                        top: 180,
                        boxShadow: "sm",
                      }}
                    >
                      <EditRoundedIcon />
                    </IconButton>
                  </Stack>
                  <Stack
                    spacing={1}
                    sx={{ flexGrow: 1 }}
                  >
                    <FormLabel>Name</FormLabel>
                    <FormControl
                      sx={{
                        display: {
                          sm: "flex-column",
                          md: "flex-row",
                        },
                        gap: 2,
                      }}
                    >
                      <Input
                        size="sm"
                        placeholder="First name"
                      />
                      <Input
                        size="sm"
                        placeholder="Last name"
                      />
                    </FormControl>
                  </Stack>
                </Stack>
                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Input
                    size="sm"
                    defaultValue="UI Developer"
                  />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    size="sm"
                    type="email"
                    startDecorator={<EmailRoundedIcon />}
                    placeholder="email"
                    defaultValue="siriwatk@test.com"
                    sx={{ flexGrow: 1 }}
                  />
                </FormControl>
                <div>{/* <CountrySelector /> */}</div>
                <div>
                  <FormControl sx={{ display: { sm: "contents" } }}>
                    <FormLabel>Timezone</FormLabel>
                    <Select
                      size="sm"
                      startDecorator={<AccessTimeFilledRoundedIcon />}
                      defaultValue="1"
                    >
                      <Option value="1">
                        Indochina Time (Bangkok){" "}
                        <Typography
                          textColor="text.tertiary"
                          sx={{ ml: 0.5 }}
                        >
                          — GMT+07:00
                        </Typography>
                      </Option>
                      <Option value="2">
                        Indochina Time (Ho Chi Minh City){" "}
                        <Typography
                          textColor="text.tertiary"
                          sx={{ ml: 0.5 }}
                        >
                          — GMT+07:00
                        </Typography>
                      </Option>
                    </Select>
                  </FormControl>
                </div>
              </Stack>
              <CardOverflow
                sx={{ borderTop: "1px solid", borderColor: "divider" }}
              >
                <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
                  <Button
                    size="sm"
                    variant="outlined"
                    color="danger"
                    startDecorator={<TbTrash size={20} />}
                  >
                    Borrar
                  </Button>
                  {/* <Button
            onClick={() => {
              handleTabClick(1);
            }}
          >
            abrir tab
          </Button> */}
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
        </TabPanel>
        <TabPanel value={2}>
          <Products />
          {/* <ProductTable /> */}
        </TabPanel>
      </Tabs>
    </Box>
  );
}
