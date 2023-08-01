"use client"
import Link from "next/link";
import React from "react";
import styles from './navbar.module.css'

import DarkMode from '../DarkMode/DarkMode'
import { signOut, useSession } from "next-auth/react";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blogpage",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session=useSession();
  return (
    <div className={styles.container}>
      <Link href={"/" } className={styles.logo}>Blogo</Link>
      <div className={styles.links}>
   <DarkMode/>
        {links.map((links) => (
          <Link key={links.id} href={links.url} className={styles.link}>
            {links.title}
          </Link>
        ))}
        {session.status==="authenticated"&&(

        <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
       ) }
        


       
      </div>
    </div>
  );
};

export default Navbar;
