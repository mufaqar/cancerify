"use client";

import {

  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";

import Link from "next/link";

import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";


const menus = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Cancers",
    href: "/cancers",
  },
  {
    id: 4,
    title: "Find a doctor",
    href: "/doctors",
  },
  {
    id: 5,
    title: "News",
    href: "/blog",
  },

];


const Index = () => {



  return (
    <div
      className="offcanvas offcanvas-start mobile_menu-contnet"
      tabIndex="-1"
      id="offcanvasMenu"
      data-bs-scroll="true"
    >
      <SidebarHeader />
      {/* End pro-header */}

      
        <Sidebar>
          <Menu>
          {menus?.map((menu) => (
            <MenuItem key={menu.id}>
              <Link href={menu?.href}>
              <span>{menu?.title}</span>
              </Link>
            </MenuItem>
          ))}
          </Menu>
        </Sidebar>


      <SidebarFooter />
    </div>
  );
};

export default Index;