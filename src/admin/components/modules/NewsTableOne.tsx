import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
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
import data from "../../../shared/mocks/UserDataOne.json";
import {
  TbArrowDown,
  TbArrowsUpDown,
  TbArrowUp,
  TbEyeOff,
  TbSearch,
} from "react-icons/tb";
import { useState } from "react";
import { Card, Checkbox, ListDivider, ListItem, Stack } from "@mui/joy";

import List from "@mui/joy/List";
import NewsTableTooltip from "../common/NewsTooltip";

export function RowMenuTwo() {
  const [selectedIndex, setSelectedIndex] = useState<number>(1);

  const createHandleClose = (index: number) => () => {
    if (typeof index === "number") {
      setSelectedIndex(index);
    }
  };

  const iconMap: { [key: number]: any } = {
    0: <TbArrowUp />,
    1: <TbArrowDown />,
    2: <TbArrowsUpDown />,
  };

  return (
    <Dropdown>
      <MenuButton startDecorator={iconMap[selectedIndex]}>Apps</MenuButton>
      <Menu>
        <MenuItem
          {...(selectedIndex === 0 && { selected: true, variant: "soft" })}
          onClick={createHandleClose(0)}
        >
          {iconMap[0]} Asc
        </MenuItem>
        <MenuItem
          selected={selectedIndex === 1}
          onClick={createHandleClose(1)}
        >
          {iconMap[1]} Desc
        </MenuItem>
        <MenuItem
          selected={selectedIndex === 2}
          onClick={createHandleClose(2)}
        >
          {iconMap[2]} Ninguno
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}

//TODO: Componente de tabla de usuarios

export default function NewsTableOne() {
  const columns = [
    {
      header: "Acciones",
      enableHiding: false,
      enableSorting: false,
      cell: ({ row }) => (
        <div className="px-1">
          <Checkbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        </div>
      ),
      size: 50,
    },
    {
      header: "ID",
      accessorKey: "id",
      size: 50,
    },
    {
      header: "Nombre 1",
      accessorKey: "primerNombre",
    },
    {
      header: "Nombre 2",
      accessorKey: "segundoNombre",
    },
    {
      header: "Apellido 1",
      accessorKey: "primerApellido",
    },
    {
      header: "Apellido 2",
      accessorKey: "segundoApellido",
    },
    {
      header: "Documento",
      accessorKey: "documento",
    },
    {
      header: "Lugar Exp",
      accessorKey: "lugarExpedicion",
    },
    {
      header: "Fecha Exp",
      accessorKey: "fechaExpedicion",
    },
    {
      header: "Sexo",
      accessorKey: "gender",
    },
    {
      header: "Cuenta",
      accessorKey: "cuenta",
    },
    {
      header: "Usuario",
      accessorKey: "nombreU",
    },
    {
      header: "Correo",
      accessorKey: "correo",
    },
    {
      header: "Telefono",
      accessorKey: "telefono",
    },
    {
      header: "Pregunta",
      accessorKey: "pregunta",
    },
    {
      header: "Respuesta",
      accessorKey: "respuesta",
    },
    {
      header: "Contra",
      accessorKey: "contra",
    },
    {
      header: "ContraDos",
      accessorKey: "contraDos",
    },
    {
      header: "Avatar",
      accessorKey: "avatar",
    },
    {
      header: "Roles",
      accessorKey: "roles",
    },
    {
      header: "Estado",
      accessorKey: "estado",
    },
  ];
  const [selectedIndex, setSelectedIndex] = useState<number>(1);

  const iconMap: { [key: number]: any } = {
    0: <TbArrowUp />,
    1: <TbArrowDown />,
    2: <TbArrowsUpDown />,
  };

  const [selected, setSelected] = useState<readonly string[]>([]);
  const [open, setOpen] = useState(false);

  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [filtering, setFiltering] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const [selectedRow, setSelectedRow] = useState(null);

  const table = useReactTable({
    data,
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

    // onColumnFiltersChange: (setColumnFilters) => setColumnFilters,
  });

  const pageSize = [5, 10, 25, table.getFilteredRowModel().rows.length];
  const selectedRowsCount = table.getSelectedRowModel().flatRows.length;

  const handleSelectionClick = () => {
    const selectedRow1 = table.getSelectedRowModel().flatRows[0];
    if (selectedRow1) {
      // Acceder a los valores de la fila
      const firstName = selectedRow1.original.primerNombre;
      const lastName = selectedRow1.original.primerApellido;
      // ... otros valores
      console.log(firstName, lastName);
    }
  };

  // const handleRowSelection = (row) => {
  //   // ... lógica de selección

  //   const selectedRow1 = table.getSelectedRowModel().flatRows[0];

  //   if (selectedRow1) {
  //     // Acceder a los valores de la fila
  //     const firstName = selectedRow1.original.primerNombre;
  //     const lastName = selectedRow1.original.primerApellido;
  //     // ... otros valores
  //   }
  // };

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
        onClick={handleSelectionClick()}
      >
        Buscar
      </Button>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <Card variant="outlined">
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
              ¿Quieres mas informacion o necesitas ayuda?
            </Typography>
            <NewsTableTooltip />
          </Stack>
        </Stack>
        {/* //TODO: SearchAndFilters-mobile */}

        {/* //TODO: SearchAndFilters-tabletUp */}

        <Divider />
        <Box
          className="SearchAndFilters-tabletUp"
          sx={{
            borderRadius: "sm",
            my: 2,
            py: 2,
            display: { xs: "none", sm: "flex" },
            flexWrap: "wrap",
            gap: 1.5,
            "& > *": {
              minWidth: { xs: "120px", md: "160px" },
            },
          }}
        >
          <FormControl
            sx={{ flex: 1 }}
            size="sm"
          >
            <FormLabel>Buscar Usuario</FormLabel>
            <Input
              size="sm"
              placeholder="pedro // ramirez // 101234.."
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
          {renderFilters()}
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
                {selectedRowsCount === 0
                  ? "No hay registros seleccionados"
                  : "Se ha seleccionado un registro"}
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
                              label={column.id}
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
                      style={{
                        width: header.getSize(),
                        height: "50px",
                        textAlign: "center",
                        padding: "6px 6px",
                      }}
                    >
                      <Box>
                        <Dropdown>
                          <MenuButton
                            startDecorator={iconMap[selectedIndex]}
                            variant="plain"
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </MenuButton>{" "}
                          <Menu>
                            <MenuItem
                              {...(selectedIndex === 0 && {
                                selected: true,
                                variant: "soft",
                              })}
                              selected={selectedIndex === 0}
                              onClick={() => {
                                header.column.toggleSorting(false);
                                setSelectedIndex(0);
                              }}
                            >
                              {iconMap[0]} Asc
                            </MenuItem>
                            <MenuItem
                              selected={selectedIndex === 1}
                              onClick={() => {
                                header.column.toggleSorting(true);
                                setSelectedIndex(1);
                              }}
                            >
                              {iconMap[1]} Desc
                            </MenuItem>
                            <MenuItem
                              selected={selectedIndex === 2}
                              onClick={() => {
                                header.column.clearSorting();
                                setSelectedIndex(2);
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
                          className="Resizer"
                          onMouseDown={() => {
                            header.getResizeHandler();
                          }}
                          onTouchStart={() => {
                            header.getResizeHandler();
                          }}
                          sx={{
                            position: "absolute",

                            top: 0,
                            right: 0,
                            width: 5,
                            height: "100%",
                            cursor: "col-resize",
                            backgroundColor: "primary.300",
                            userSelect: "none",
                            touchAction: "none",
                            borderRadius: "6px",
                            "&.isResizing": {},
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

            {Array.from({ length: table.getPageCount() }).map((_, index) => (
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
            ))}
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
      </Card>
    </React.Fragment>
  );
}
