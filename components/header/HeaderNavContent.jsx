"use client";

import Link from "next/link";

const menus = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Cancer Types",
    href: "/cancer-types",
  },
  {
    id: 4,
    title: "Doctors",
    href: "/doctors",
  },
  {
    id: 5,
    title: "Blog",
    href: "/blog",
  },

];

const HeaderNavContent = () => {
  return (
    <>
      <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
          {/* current dropdown */}
          {menus?.map((menu) => (
            <li key={menu.id}>
              <Link href={menu?.href}>
                <span>{menu?.title}</span>
              </Link>
            </li>
          ))}

          {/* End homepage menu items */}
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavContent;
