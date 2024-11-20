import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import IconButton, { iconButtonClasses } from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
  getFilteredRowModel,
  RowSelectionState,
} from "@tanstack/react-table";

import {
  TbArrowDown,
  TbArrowsSort,
  TbArrowUp,
  TbEdit,
  TbEyeglass,
  TbEyeOff,
  TbSearch,
  TbTrash,
} from "react-icons/tb";
import { useState } from "react";
import {
  AspectRatio,
  Card,
  Checkbox,
  Divider,
  ListDivider,
  ListItem,
  Skeleton,
  Stack,
  useTheme,
} from "@mui/joy";

import List from "@mui/joy/List";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { toast, ToastContainer } from "react-toastify";

import { deleteRoles, getRoles } from "../../../api/RolesAPI";
import { IRoleEdit } from "../../../../shared/types/roleTypes";
import PRoleEditForm from "./PUserEditForm";
import { deleteUsers, getUsers } from "../../../api/UsersAPI";
import { IUserEdit } from "../../../../shared/types/userTypes";

export default function PUserEdit() {
  // TODO: notify-toast theme
  const theme = useTheme();
  const { isFetching, isLoading, error, isError, data, refetch } = useQuery({
    queryKey: ["getAllUsers"],
    queryFn: getUsers,
    refetchOnWindowFocus: false,
  });

  const deleteUsersMutation = useMutation({
    // mutationKey: ["createCourse"],

    mutationFn: deleteUsers,
    onSuccess: () => {
      console.log("onSuccess");
      toast.success("usuario eliminado exitosamente");
      queryClient.invalidateQueries({ queryKey: ["getAllUsers"] });
    },

    onError: (error) => {
      // Aquí puedes manejar los errores de la respuesta

      toast.error("Error al eliminar el rol " + error);
    },

    // ... resto de la configuración
  });

  const tableData = data;
  const queryClient = useQueryClient();

  const getAllRoles = () => {
    // queryClient.invalidateQueries({ queryKey: ["products"] });
    refetch();
  };

  const columns = [
    {
      header: "Acciones",
      enableHiding: false,
      enableSorting: false,
      cell: ({ row }) => (
        <Dropdown>
          <MenuButton
            slots={{ root: IconButton }}
            slotProps={{
              root: { variant: "plain", color: "neutral", size: "sm" },
            }}
          >
            <MoreHorizRoundedIcon />
          </MenuButton>
          <Menu
            size="sm"
            sx={{ minWidth: 140 }}
          >
            <MenuItem onClick={() => handleUserView(row.original)}>
              <TbEyeglass />
              Ver
            </MenuItem>
            <MenuItem onClick={() => handleUserEdit(row.original)}>
              <TbEdit />
              Editar
            </MenuItem>
            <Divider />
            <MenuItem
              color="danger"
              onClick={() => handleUserDelete(row.original.id)}
            >
              <TbTrash />
              Borrar
            </MenuItem>
          </Menu>
        </Dropdown>
      ),
      enableResizing: true, //disable resizing for just this column
      size: 100, //starting column size
      minSize: 50, //enforced during column resizing
      maxSize: 400,
    },

    {
      header: "ID",
      accessorKey: "id",
      enableResizing: true, //disable resizing for just this column
      size: 100, //starting column size
      minSize: 50, //enforced during column resizing
      maxSize: 400, //enforced during column resizing
    },
    {
      header: "rol",
      accessorKey: "name",
      enableResizing: true, //disable resizing for just this column
      size: 100, //starting column size
      minSize: 50, //enforced during column resizing
      maxSize: 400, //enforced during column resizing
    },
    {
      header: "apellido",
      accessorKey: "lastname",
      enableResizing: true, //disable resizing for just this column
      size: 100, //starting column size
      minSize: 50, //enforced during column resizing
      maxSize: 400, //enforced during column resizing
    },
    {
      header: "email",
      accessorKey: "email",
      enableResizing: true, //disable resizing for just this column
      size: 100, //starting column size
      minSize: 50, //enforced during column resizing
      maxSize: 400, //enforced during column resizing
    },
    {
      header: "telefono",
      accessorKey: "phone",
      enableResizing: true, //disable resizing for just this column
      size: 100, //starting column size
      minSize: 50, //enforced during column resizing
      maxSize: 400, //enforced during column resizing
    },
    {
      header: "apodo",
      accessorKey: "username",
      enableResizing: true, //disable resizing for just this column
      size: 100, //starting column size
      minSize: 50, //enforced during column resizing
      maxSize: 400, //enforced during column resizing
    },
    // {
    //   header: "Acciones",
    //   enableHiding: false,
    //   enableSorting: false,
    //   cell: ({ row }) => <Input type="password"></Input>,
    //   enableResizing: true, //disable resizing for just this column
    //   size: 100, //starting column size
    //   minSize: 50, //enforced during column resizing
    //   maxSize: 400,
    // },

    // ... other columns
    {
      header: "rol",
      accessorKey: "role",
      enableResizing: true, //disable resizing for just this column
      size: 100, //starting column size
      minSize: 50, //enforced during column resizing
      maxSize: 400, //enforced during column resizing
    },
  ];

  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [filtering, setFiltering] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  //   sorting collumn
  const [headerSelectedIndex, setHeaderSelectedIndex] = useState<number>(2);

  const iconMap: { [key: number]: any } = {
    0: <TbArrowUp />,
    1: <TbArrowDown />,
    2: <TbArrowsSort />,
  };

  const table = useReactTable({
    data: tableData || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setFiltering,
    state: {
      sorting,
      pagination,
      globalFilter: filtering,
      columnVisibility,
      rowSelection,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
    enableMultiRowSelection: false,
    columnResizeMode: "onChange",

    // onColumnFiltersChange: (setColumnFilters) => setColumnFilters,
  });

  // TODO: Pagination
  const pageSize = [5, 10, 25, table.getFilteredRowModel().rows.length];
  const selectedRowsCount = table.getSelectedRowModel().flatRows.length;

  // TODO: selection

  const [selectedRowData, setSelectedRowData] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [isViewing, setIsViewing] = useState(false);

  const [editCount, setEditCount] = useState(0); // Contador para forzar re-render
  const [editUserInfo, setEditUserInfo] = useState<IUserEdit>({
    id: 0,
    name: "",
    lastname: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    role: "",
  });
  const [viewUsernfo, setViewUserInfo] = useState<IUserEdit>({
    id: 0,
    name: "",
    lastname: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    role: "",
  });

  const handleUserDelete = (id: number) => {
    deleteUsersMutation.mutate(id);
  };
  const handleUserEdit = (userData: IUserEdit) => {
    setIsViewing(false);
    setIsEditing(true);
    setEditUserInfo(userData);
    setEditCount(editCount + 1); // Incrementa el contador para forzar un re-render
  };
  const handleUserView = (userData: IUserEdit) => {
    setIsEditing(false);
    setIsViewing(true);
    setViewUserInfo(userData);

    setEditCount(editCount + 1); // Incrementa el contador para forzar un re-render
  };

  return (
    <>
      <Card variant="outlined">
        {isLoading ? (
          <>
            <div>Cargando...</div>
            <Card
              variant="outlined"
              sx={{ width: "100%", display: "flex", gap: 2 }}
            >
              <AspectRatio ratio="21/9">
                <Skeleton variant="overlay">
                  <img
                    alt=""
                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                  />
                </Skeleton>
              </AspectRatio>
              <Typography>
                <Skeleton>
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries.
                </Skeleton>
              </Typography>
            </Card>
          </>
        ) : isError ? (
          <div>Error al cargar los datos: {error.message}</div>
        ) : data.length === 0 ? (
          <div>No hay datos disponibles</div>
        ) : isFetching ? (
          <div>Solicitando</div>
        ) : (
          <>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                gap: 2,
              }}
            >
              <Box gridColumn={{ xs: "span 12", md: "span 4", lg: "span 4" }}>
                <FormControl
                  sx={{ flex: 1 }}
                  size="sm"
                >
                  <FormLabel>Buscar Rol</FormLabel>
                  <Input
                    size="sm"
                    placeholder="sexto // secretariado // ingles"
                    startDecorator={
                      <Button
                        variant="plain"
                        color="neutral"
                        startDecorator={<TbSearch />}
                      ></Button>
                    }
                    onChange={(e) => setFiltering(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box gridColumn={{ xs: "span 12", md: "span 3", lg: "span 3" }}>
                <FormControl size="sm">
                  <FormLabel>Estado</FormLabel>
                  <Select
                    size="sm"
                    defaultValue={"1"}
                    slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
                  >
                    <Option value="1">activo</Option>
                    <Option value="2">inactivo</Option>
                    <Option value="3">suspendido</Option>
                  </Select>
                </FormControl>
              </Box>
              <Box gridColumn={{ xs: "span 12", md: "span 3", lg: "span 3" }}>
                <FormControl size="sm">
                  <FormLabel>tipo</FormLabel>
                  <Select
                    size="sm"
                    defaultValue="1"
                  >
                    <Option value="1">bachillerato</Option>
                    <Option value="2">tecnico</Option>
                    <Option value="3">diplomado</Option>
                    <Option value="4">curso libre</Option>
                    <Option value="5">curso corto</Option>
                  </Select>
                </FormControl>
              </Box>
              <Box
                gridColumn={{ xs: "span 12", md: "span 2", lg: "span 2" }}
                sx={{
                  display: { xs: "none", sm: "flex" },
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  size="sm"
                  startDecorator={<TbSearch />}
                  variant="outlined"
                  //   onClick={() => table.setGlobalFilter(filtering)}
                  onClick={getAllRoles}
                >
                  Buscar
                </Button>
              </Box>
            </Box>
            {/* TODO:  HeadTable start here */}
            <Box
              className="Pagination-laptopUp"
              sx={{
                pt: 2,
                gap: 1,
                [`& .${iconButtonClasses.root}`]: { borderRadius: "50%" },
                display: {
                  xs: "none",
                  md: "flex",
                },
                width: "100%",
                flex: 1,
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Stack sx={{ minWidth: "100px" }}>
                  <Typography level="body-sm">
                    Pagina: {table.getState().pagination.pageIndex + 1} de{" "}
                    {table.getPageCount()}
                  </Typography>
                </Stack>
                <Stack sx={{ minWidth: "100px" }}>
                  <Typography level="body-sm">
                    {/* {selectedRowsCount === 0
                      ? "No hay registros seleccionados"
                      : "Se ha seleccionado un registro"} */}
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    minWidth: "180px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                  }}
                  direction="row"
                >
                  <Typography level="body-sm">Filas por Pagina: </Typography>
                  <Select
                    value={table.getState().pagination.pageSize}
                    placeholder="5"
                    size="sm"
                    variant="outlined"
                    onChange={(e) => {
                      table.setPageSize(Number(e.target.value));
                    }}
                    sx={{ minWidth: "70px" }}
                  >
                    {pageSize.map((pageSize) => (
                      <Option
                        key={pageSize}
                        value={pageSize}
                        onClick={() => table.setPageSize(pageSize)}
                      >
                        {pageSize}
                      </Option>
                    ))}
                  </Select>
                  <Dropdown>
                    <MenuButton size="sm">Columnas</MenuButton>
                    <Menu
                      size="sm"
                      placement="left"
                    >
                      <MenuItem>
                        <List>
                          {table
                            .getAllLeafColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => (
                              <ListItem
                                variant="plain"
                                key={column.id}
                              >
                                <Checkbox
                                  key={column.id}
                                  label={column.columnDef.header}
                                  color="primary"
                                  overlay
                                  checked={column.getIsVisible()}
                                  onChange={() => {
                                    column.toggleVisibility();
                                  }}
                                />
                              </ListItem>
                            ))}
                        </List>
                      </MenuItem>
                    </Menu>
                  </Dropdown>
                </Stack>
              </Stack>
            </Box>
            {/* FIXME: Table start here */}
            <Sheet
              className="OrderTableContainer"
              variant="outlined"
              sx={{
                display: { xs: "none", sm: "initial" },
                width: "100%",
                borderRadius: "sm",
                flexShrink: 1,
                overflow: "auto",
                minHeight: 0,
              }}
            >
              <Table
                aria-labelledby="tableTitle"
                stickyHeader
                hoverRow
                sx={{
                  "--TableCell-headBackground":
                    "var(--joy-palette-background-level1)",
                  "--Table-headerUnderlineThickness": "1px",
                  "--TableRow-hoverBackground":
                    "var(--joy-palette-background-level1)",
                  "--TableCell-paddingY": "4px",
                  "--TableCell-paddingX": "8px",
                }}
              >
                <thead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          //   style={{
                          //     width: header.getSize(),
                          //     height: "50px",
                          //     textAlign: "center",
                          //     padding: "6px 6px",
                          //   }}
                          style={{
                            width: `${header.getSize()}px`,
                            textAlign: "center",
                            padding: "6px 6px",
                          }}
                        >
                          <Box>
                            <Dropdown>
                              <MenuButton
                                startDecorator={
                                  // Verificamos si la columna está ordenada y en qué dirección
                                  header.column.getIsSorted()
                                    ? iconMap[headerSelectedIndex]
                                    : iconMap[3]
                                }
                                variant="plain"
                              >
                                {flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                              </MenuButton>{" "}
                              <Menu>
                                <MenuItem
                                  {...(headerSelectedIndex === 0 && {
                                    selected: true,
                                    variant: "soft",
                                  })}
                                  selected={headerSelectedIndex === 0}
                                  onClick={() => {
                                    header.column.toggleSorting(false);
                                    setHeaderSelectedIndex(0);
                                  }}
                                >
                                  {iconMap[0]} Asc
                                </MenuItem>
                                <MenuItem
                                  selected={headerSelectedIndex === 1}
                                  onClick={() => {
                                    header.column.toggleSorting(true);
                                    setHeaderSelectedIndex(1);
                                  }}
                                >
                                  {iconMap[1]} Desc
                                </MenuItem>
                                <MenuItem
                                  selected={headerSelectedIndex === 2}
                                  onClick={() => {
                                    header.column.clearSorting();
                                    setHeaderSelectedIndex(3);
                                  }}
                                >
                                  {iconMap[2]} Ninguno
                                </MenuItem>
                                <ListDivider />
                                <MenuItem
                                  onClick={() =>
                                    header.column.toggleVisibility(false)
                                  }
                                >
                                  <TbEyeOff /> Quitar
                                </MenuItem>
                              </Menu>
                            </Dropdown>
                            <Box
                              className={`resizer ${
                                header.column.getIsResizing()
                                  ? "isResizing"
                                  : ""
                              }`}
                              onMouseDown={header.getResizeHandler()}
                              onTouchStart={header.getResizeHandler()}
                              sx={{
                                position: "absolute",
                                opacity: 0,
                                top: 0,
                                right: 0,
                                width: 5,
                                height: "100%",
                                cursor: "col-resize",
                                backgroundColor: "primary.300",
                                userSelect: "none",
                                touchAction: "none",
                                borderRadius: "6px",
                                "&.isResizing": {
                                  opacity: 1,
                                },
                                "&:hover": {
                                  opacity: 1,
                                },
                              }}
                            ></Box>
                          </Box>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          style={{
                            width: cell.column.getSize(),
                            height: "66px",
                            overflow: "hidden",
                            textAlign: "center",
                          }}
                        >
                          <span>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Sheet>
            {/* TODO: Pagination start here */}
            <Box
              className="Pagination-laptopUp"
              sx={{
                pt: 2,
                gap: 1,
                [`& .${iconButtonClasses.root}`]: { borderRadius: "50%" },
                display: {
                  xs: "none",
                  md: "flex",
                },
                width: "100%",
                flex: 1,
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Button
                  size="sm"
                  variant="outlined"
                  color="neutral"
                  startDecorator={<KeyboardArrowLeftIcon />}
                  onClick={() => table.setPageIndex(0)}
                  disabled={!table.getCanPreviousPage()}
                >
                  Primera
                </Button>
                <Button
                  size="sm"
                  variant="outlined"
                  color="neutral"
                  startDecorator={<KeyboardArrowLeftIcon />}
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  Anterior
                </Button>

                {Array.from({ length: table.getPageCount() }).map(
                  (_, index) => (
                    <IconButton
                      key={index}
                      size="sm"
                      variant={
                        table.getState().pagination.pageIndex === index
                          ? "solid"
                          : "outlined"
                      }
                      color="neutral"
                      onClick={() => table.setPageIndex(index)}
                    >
                      {index + 1}
                    </IconButton>
                  )
                )}
                <Button
                  size="sm"
                  variant="outlined"
                  color="neutral"
                  endDecorator={<KeyboardArrowRightIcon />}
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  Siguiente
                </Button>
                <Button
                  size="sm"
                  variant="outlined"
                  color="neutral"
                  endDecorator={<KeyboardArrowRightIcon />}
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  disabled={!table.getCanNextPage()}
                >
                  Ultima
                </Button>
              </Stack>
            </Box>
            {/* TODO:  card start here */}

            <Divider sx={{ my: 5 }} />
            <Box
              sx={{
                width: "100%",
              }}
            >
              {/* {isEditing && (
                <CoursesFormEdit
                  key={editCourseInfo.id}
                  courseData={editCourseInfo as ICourseEdit}
                />
              )} */}
              {/* <card render */}
              {/* {isCreating ? <p>probar</p> : <p>Creando</p>}
          {isEditing ? <p>probar</p> : <p>Editando</p>} */}
              <div key={editCount}>
                {isViewing === false && isEditing === false ? (
                  <Card>no esta viendo ni editando</Card>
                ) : isViewing ? (
                  <Card>estas viendo</Card>
                ) : (
                  <Card>estas editando</Card>
                  // <PRoleEditForm {...editRoleInfo} />
                )}
              </div>
            </Box>
          </>
        )}
      </Card>
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
