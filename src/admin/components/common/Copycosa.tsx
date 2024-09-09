import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import Textarea from "@mui/joy/Textarea";
import Stack from "@mui/joy/Stack";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardOverflow from "@mui/joy/CardOverflow";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { InfoOutlined } from "@mui/icons-material";

// import DropZone from './DropZone';
// import FileUpload from './FileUpload';
// import CountrySelector from './CountrySelector';
// import EditorToolbar from './EditorToolbar';

export default function FormUserOne() {
  return (
    <Box sx={{ flex: 1, width: "100%" }}>
      <Box
        sx={{
          position: "sticky",
          top: { sm: -100, md: -110 },
          bgcolor: "background.body",
          zIndex: 9995,
        }}
      >
        <Box
          component="form"
          sx={{ px: { xs: 1 } }}
        >
          <Stack
            spacing={4}
            sx={{
              display: "flex",
              mx: "auto",
              px: { xs: 2, md: 2 },
              py: { xs: 2, md: 3 },
            }}
          >
            <Card
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                maxWidth: "100%",
              }}
              variant="outlined"
            >
              <Box sx={{ mb: 1 }}>
                <Typography
                  level="title-md"
                  startDecorator={<InfoOutlined />}
                >
                  Información personal
                </Typography>
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
                <Box
                  sx={{
                    gridColumn: { xs: "span 12", md: "span 3", lg: "span 3" },
                    // border: "1px solid red",
                  }}
                >
                  <FormControl sx={{ mb: 1 }}>
                    <FormLabel>primer nombre</FormLabel>
                    <Input
                      type="text"
                      placeholder="manuel"
                      variant="outlined"
                      size="sm"
                    />
                    <FormHelperText>Helper text</FormHelperText>
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    gridColumn: { xs: "span 12", md: "span 3", lg: "span 3" },
                    // border: "1px solid red",
                  }}
                >
                  <FormControl sx={{ mb: 1 }}>
                    <FormLabel>segundo nombre</FormLabel>
                    <Input
                      type="text"
                      placeholder="fernando"
                      variant="outlined"
                      size="sm"
                    />
                    <FormHelperText>Helper text</FormHelperText>
                  </FormControl>
                </Box>{" "}
                <Box
                  sx={{
                    gridColumn: { xs: "span 12", md: "span 3", lg: "span 3" },
                    // border: "1px solid red",
                  }}
                >
                  <FormControl sx={{ mb: 1 }}>
                    <FormLabel>primer apellido</FormLabel>
                    <Input
                      type="text"
                      placeholder="vela"
                      variant="outlined"
                      size="sm"
                    />
                    <FormHelperText>Helper text</FormHelperText>
                  </FormControl>
                </Box>{" "}
                <Box
                  sx={{
                    gridColumn: { xs: "span 12", md: "span 3", lg: "span 3" },
                    // border: "1px solid red",
                  }}
                >
                  <FormControl sx={{ mb: 1 }}>
                    <FormLabel>primer apellido</FormLabel>
                    <Input
                      type="text"
                      placeholder="osorio"
                      variant="outlined"
                      size="sm"
                    />
                    <FormHelperText>15 caracteres maximo</FormHelperText>
                  </FormControl>
                </Box>
                {/* documento */}
                <Box
                  sx={{
                    gridColumn: { xs: "span 12", md: "span 2", lg: "span 2" },
                    // border: "1px solid red",
                  }}
                >
                  <FormControl sx={{ mb: 1 }}>
                    <FormLabel>documento</FormLabel>
                    <Input
                      type="text"
                      placeholder="1234567890"
                      variant="outlined"
                      size="sm"
                    />
                    <FormHelperText>Helper text</FormHelperText>
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    gridColumn: { xs: "span 12", md: "span 4", lg: "span 4" },
                    // border: "1px solid red",
                  }}
                >
                  <FormControl sx={{ mb: 1 }}>
                    <FormLabel>lugar de expedición</FormLabel>
                    <Input
                      type="text"
                      placeholder="velez(santander)"
                      variant="outlined"
                      size="sm"
                    />
                    <FormHelperText>Helper text</FormHelperText>
                  </FormControl>
                </Box>{" "}
                <Box
                  sx={{
                    gridColumn: { xs: "span 12", md: "span 3", lg: "span 3" },
                    // border: "1px solid red",
                  }}
                >
                  <FormControl sx={{ mb: 1 }}>
                    <FormLabel>fecha de expedición</FormLabel>
                    <Input
                      type="date"
                      variant="outlined"
                      size="sm"
                    />
                    <FormHelperText>Helper text</FormHelperText>
                  </FormControl>
                </Box>{" "}
                <Box
                  sx={{
                    gridColumn: { xs: "span 12", md: "span 3", lg: "span 3" },
                    // border: "1px solid red",
                  }}
                >
                  <FormControl sx={{ mb: 1 }}>
                    <FormLabel>tipo documento</FormLabel>

                    <FormHelperText>15 caracteres maximo</FormHelperText>
                  </FormControl>
                </Box>
              </Box>

              {/* fin del grid */}

              <Divider />

              <CardOverflow
                sx={{ borderTop: "1px solid", borderColor: "divider" }}
              >
                <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
                  <Button
                    size="sm"
                    variant="outlined"
                    color="neutral"
                  >
                    Eliminar
                  </Button>
                  <Button
                    size="sm"
                    variant="solid"
                  >
                    Agregar
                  </Button>
                </CardActions>
              </CardOverflow>
            </Card>
            <Card>
              <Box sx={{ mb: 1 }}>
                <Typography level="title-md">Datos Basicos</Typography>
                <Typography level="body-sm">Información del usuario</Typography>
              </Box>
              <Divider />
              <Stack
                direction="row"
                spacing={3}
                sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
              >
                <Stack
                  spacing={2}
                  sx={{ flexGrow: 1 }}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                  >
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Primer Nombre</FormLabel>
                      <Input
                        size="sm"
                        type="text"
                        placeholder="jose"
                        sx={{ flexGrow: 1, minWidth: 170, maxWidth: 200 }}
                      />
                      <FormHelperText>...</FormHelperText>
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Segundo Nombre</FormLabel>
                      <Input
                        size="sm"
                        type="text"
                        placeholder="jose"
                        sx={{ flexGrow: 1 }}
                      />
                      <FormHelperText>...</FormHelperText>
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Primer Apellido</FormLabel>
                      <Input
                        size="sm"
                        type="text"
                        placeholder="Velez"
                        sx={{ flexGrow: 1, minWidth: 170, maxWidth: 200 }}
                      />
                      <FormHelperText>...</FormHelperText>
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Segundo Apellido </FormLabel>
                      <Input
                        size="sm"
                        type="text"
                        placeholder="Ralirez"
                        sx={{ flexGrow: 1, minWidth: 170, maxWidth: 200 }}
                      />
                      <FormHelperText>...</FormHelperText>
                    </FormControl>
                  </Stack>
                </Stack>
              </Stack>
            </Card>
            <Card>
              <Box sx={{ mb: 1 }}>
                <Typography level="title-md">Personal info</Typography>
                <Typography level="body-sm">
                  Customize how your profile information will apper to the
                  networks.
                </Typography>
              </Box>
              <Divider />
              <Stack
                direction="row"
                spacing={3}
                sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
              >
                <Stack
                  direction="column"
                  spacing={1}
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
                <Stack
                  spacing={2}
                  sx={{ flexGrow: 1 }}
                >
                  <Stack spacing={1}>
                    <FormLabel>Name</FormLabel>
                    <FormControl
                      sx={{
                        display: { sm: "flex-column", md: "flex-row" },
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
                        sx={{ flexGrow: 1 }}
                      />
                    </FormControl>
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={2}
                  >
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
                  </Stack>
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
              </Stack>
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
                    color="neutral"
                  >
                    Cancel
                  </Button>
                  <Button
                    size="sm"
                    variant="solid"
                  >
                    Save
                  </Button>
                </CardActions>
              </CardOverflow>
            </Card>
            <Card>
              <Box sx={{ mb: 1 }}>
                <Typography level="title-md">Bio</Typography>
                <Typography level="body-sm">
                  Write a short introduction to be displayed on your profile
                </Typography>
              </Box>
              <Divider />
              <Stack
                spacing={2}
                sx={{ my: 1 }}
              >
                {/* <EditorToolbar /> */}
                <Textarea
                  size="sm"
                  minRows={4}
                  sx={{ mt: 1.5 }}
                  defaultValue="I'm a software developer based in Bangkok, Thailand. My goal is to solve UI problems with neat CSS without using too much JavaScript."
                />
                <FormHelperText sx={{ mt: 0.75, fontSize: "xs" }}>
                  275 characters left
                </FormHelperText>
              </Stack>
              <CardOverflow
                sx={{ borderTop: "1px solid", borderColor: "divider" }}
              >
                <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
                  <Button
                    size="sm"
                    variant="outlined"
                    color="neutral"
                  >
                    Cancel
                  </Button>
                  <Button
                    size="sm"
                    variant="solid"
                  >
                    Save
                  </Button>
                </CardActions>
              </CardOverflow>
            </Card>
            <Card>
              <Box sx={{ mb: 1 }}>
                <Typography level="title-md">Portfolio projects</Typography>
                <Typography level="body-sm">
                  Share a few snippets of your work.
                </Typography>
              </Box>
              <Divider />
              <Stack
                spacing={2}
                sx={{ my: 1 }}
              >
                {/* <DropZone /> */}
                {/* <FileUpload
              icon={<InsertDriveFileRoundedIcon />}
              fileName="Tech design requirements.pdf"
              fileSize="200 kB"
              progress={100}
            />
            <FileUpload
              icon={<VideocamRoundedIcon />}
              fileName="Dashboard prototype recording.mp4"
              fileSize="16 MB"
              progress={40}
            /> */}
              </Stack>
              <CardOverflow
                sx={{ borderTop: "1px solid", borderColor: "divider" }}
              >
                <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
                  <Button
                    size="sm"
                    variant="outlined"
                    color="neutral"
                  >
                    Cancel
                  </Button>
                  <Button
                    size="sm"
                    variant="solid"
                  >
                    Save
                  </Button>
                </CardActions>
              </CardOverflow>
            </Card>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
