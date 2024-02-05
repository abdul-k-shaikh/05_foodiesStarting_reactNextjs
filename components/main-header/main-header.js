import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";
export default function MainHeader() {
  console.log("Execution.1.1.");

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              {/* <Link
                href="/community"
                className="{path.startsWith('/community') ? classes.active : undefined }"
              >
                Foodie Community
              </Link> */}
              <NavLink href="/community">Foodie Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
