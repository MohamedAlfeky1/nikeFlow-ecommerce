import classes from "./MainNavigation.module.css";
import Link from "next/link";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NikeFlow</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link className={classes.addBtn} href="/new-product">
              Add Product
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
