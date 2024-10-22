import {
  TbBooks,
  TbCalendar,
  TbClipboardList,
  TbClock,
  TbHome,
  TbReport,
  TbSettings,
  TbUser,
} from "react-icons/tb";
import { ISidebarItems } from "../types/sidebarTypes";

export const AdminSidebarItems: ISidebarItems[] = [
  {
    title: "Inicio",
    icon: <TbHome />,
    link: "inicio",
  },
  {
    title: "Usuarios",
    icon: <TbUser />,
    link: "usuarios",
  },
  {
    title: "Matriculas",
    icon: <TbClipboardList />,
    link: "matriculas",
  },
  {
    title: "Cursos",
    icon: <TbBooks />,
    link: "cursos",
  },
  {
    title: "Materias",
    icon: <TbClipboardList />,
    link: "Usuarios",
  },
  {
    title: "Reportes",
    icon: <TbReport />,
    link: "Usuarios",
  },
  {
    title: "Horarios",
    icon: <TbClock />,
    link: "Usuarios",
  },
  {
    title: "Jornadas",
    icon: <TbCalendar />,
    link: "Usuarios",
  },
  {
    title: "Ajustes",
    icon: <TbSettings />,
    link: "Usuarios",
  },
];
