import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Accueil",
    path: "/#top",
    icon: <RiIcons.RiHomeLine />,
    cName: "nav-text",
  },
  {
    title: "Albums",
    path: "/#albums",
    icon: <RiIcons.RiCheckboxMultipleBlankLine />,
    cName: "nav-text",
  },
  {
    title: "Vidéos",
    path: "/#videos",
    icon: <BsIcons.BsCameraVideo />,
    cName: "nav-text",
  },
  /*{
    title: "Blog",
    path: "/blog",
    icon: <BsIcons.BsBook />,
    cName: "nav-text",
  },*/
  {
    title: "À Propos",
    path: "/#aboutus",
    icon: <AiIcons.AiOutlinePlusCircle />,
    cName: "nav-text",
  },
  // {
  //   title: "Instagram",
  //   path: "/#instagram",
  //   icon: <FiIcons.FiInstagram />,
  //   cName: "nav-text",
  // },
];
