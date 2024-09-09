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
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardOverflow from "@mui/joy/CardOverflow";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { SetStateAction, useState } from "react";
import { TabPanel } from "@mui/joy";
import { TbAlertTriangle, TbUserEdit } from "react-icons/tb";

// import DropZone from './DropZone';
// import FileUpload from './FileUpload';
// import CountrySelector from './CountrySelector';
// import EditorToolbar from './EditorToolbar';

export default function MyProfile() {
  // TODO: TABS
  const [Tabvalue, setTabValue] = useState(0);
  const handleTabChange = (
    event: React.ChangeEvent<HTMLBaseElement>,
    newValue: SetStateAction<number>
  ) => {
    setTabValue(newValue);
  };

  const handleTabClick = (newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ flex: 1, width: "100%" }}>
      <Box sx={{ px: { xs: 2, md: 2 } }}>
        <Breadcrumbs
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
        </Breadcrumbs>
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
          >
            Usuarios
          </Typography>
          {/* <Button variant="outlined">Add user</Button> */}
        </Stack>
      </Box>
      <Tabs
        defaultValue={0}
        sx={{ bgcolor: "transparent" }}
        value={Tabvalue}
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
            <TbUserEdit size={20} />
            Buscar
          </Tab>
          <Tab
            sx={{ borderRadius: "6px 6px 0 0" }}
            indicatorInset
            value={1}
          >
            <TbUserEdit size={20} /> Editar
          </Tab>
        </TabList>

        <TabPanel value={0}>
          <b>First</b> tab panel
        </TabPanel>
        <TabPanel value={1}>
          <Stack
            component="form"
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
                  <FormControl sx={{ mb: 1 }}>
                    <FormLabel>primer nombre</FormLabel>
                    <Input
                      type="text"
                      placeholder="jose"
                      variant="outlined"
                      size="sm"
                    />
                    <FormHelperText>
                      <TbAlertTriangle />
                      Validaciones
                    </FormHelperText>
                  </FormControl>
                </Box>
                <Box gridColumn={{ xs: "span 12", md: "span 3", lg: "span 3" }}>
                  <FormControl sx={{ mb: 1 }}>
                    <FormLabel>segundo nombre</FormLabel>
                    <Input
                      type="text"
                      placeholder="jesus"
                      variant="outlined"
                      size="sm"
                    />
                    <FormHelperText>
                      <TbAlertTriangle />
                      Validaciones
                    </FormHelperText>
                  </FormControl>
                </Box>
                <Box gridColumn={{ xs: "span 12", md: "span 3", lg: "span 3" }}>
                  <FormControl sx={{ mb: 1 }}>
                    <FormLabel>primer apellido</FormLabel>
                    <Input
                      type="text"
                      placeholder="ramirez"
                      variant="outlined"
                      size="sm"
                    />
                    <FormHelperText>
                      <TbAlertTriangle />
                      Validaciones
                    </FormHelperText>
                  </FormControl>
                </Box>
                <Box gridColumn={{ xs: "span 12", md: "span 3", lg: "span 3" }}>
                  <FormControl sx={{ mb: 1 }}>
                    <FormLabel>segundo apellido</FormLabel>
                    <Input
                      type="text"
                      placeholder="sanchez"
                      variant="outlined"
                      size="sm"
                    />
                    <FormHelperText>
                      <TbAlertTriangle />
                      Validaciones
                    </FormHelperText>
                  </FormControl>
                </Box>
                {/* fila 2 */}

                <Box gridColumn={{ xs: "span 12", md: "span 3", lg: "span 3" }}>
                  <FormControl sx={{ mb: 1 }}>
                    <FormLabel>documento</FormLabel>
                    <Input
                      type="text"
                      placeholder="1234567890"
                      variant="outlined"
                      size="sm"
                    />
                    <FormHelperText>
                      <TbAlertTriangle />
                      Validaciones
                    </FormHelperText>
                  </FormControl>
                </Box>
                <Box gridColumn={{ xs: "span 12", md: "span 3", lg: "span 3" }}>
                  <FormControl sx={{ mb: 1 }}>
                    <FormLabel>fecha expedición</FormLabel>
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
                    <FormLabel>lugar de expedición</FormLabel>
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
                      placeholder="tipo"
                      variant="outlined"
                      size="sm"
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
          </Stack>
        </TabPanel>
      </Tabs>

      <Stack
        spacing={4}
        sx={{
          display: "flex",
          maxWidth: "800px",
          mx: "auto",
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Personal info</Typography>
            <Typography level="body-sm">
              Customize how your profile information will apper to the networks.
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
          <CardOverflow sx={{ borderTop: "1px solid", borderColor: "divider" }}>
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
          <CardOverflow sx={{ borderTop: "1px solid", borderColor: "divider" }}>
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
          <CardOverflow sx={{ borderTop: "1px solid", borderColor: "divider" }}>
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
  );
}
